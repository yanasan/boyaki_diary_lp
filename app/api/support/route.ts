import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Resend } from "resend";
import { getFirebaseDb } from "@/lib/firebase";

export const runtime = "nodejs";

type Category = "ng-word" | "app" | "other";

type SupportPayload = {
  email?: string;
  message: string;
  category: Category;
};

const CATEGORY_LABEL: Record<Category, string> = {
  "ng-word": "NGワードについて",
  app: "アプリについて",
  other: "その他",
};

function corsHeaders() {
  const origin = process.env.SUPPORT_API_ALLOW_ORIGIN || "*";

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function isValidCategory(value: unknown): value is Category {
  return value === "ng-word" || value === "app" || value === "other";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function serializeError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    };
  }

  return error;
}

function buildMailText(data: SupportPayload, referenceId: string | null) {
  const lines = [
    "ぼやき日記 LP からお問い合わせが届きました。",
    "",
    `カテゴリー: ${CATEGORY_LABEL[data.category]}`,
    `返信先メール: ${data.email || "未入力"}`,
    `受付番号: ${referenceId ?? "(DB未保存)"}`,
    "",
    "お問い合わせ内容:",
    data.message,
  ];

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, message: "リクエスト形式が正しくありません。" },
        { status: 400, headers: corsHeaders() },
      );
    }

    const { email = "", message, category } = (payload ?? {}) as Partial<SupportPayload>;

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { ok: false, message: "お問い合わせ内容は5文字以上で入力してください。" },
        { status: 400, headers: corsHeaders() },
      );
    }

    if (!isValidCategory(category)) {
      return NextResponse.json(
        { ok: false, message: "カテゴリーの指定が正しくありません。" },
        { status: 400, headers: corsHeaders() },
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "メールアドレスの形式が正しくありません。" },
        { status: 400, headers: corsHeaders() },
      );
    }

    const normalized: SupportPayload = {
      email: email.trim() || undefined,
      message: message.trim(),
      category,
    };

    const db = getFirebaseDb();
    let referenceId: string | null = null;

    if (db) {
      const supportDoc = {
        message: normalized.message,
        category: normalized.category,
        categoryLabel: CATEGORY_LABEL[normalized.category],
        status: "new",
        source: "lp",
        createdAt: serverTimestamp(),
      } as {
        message: string;
        category: Category;
        categoryLabel: string;
        status: "new";
        source: "lp";
        createdAt: ReturnType<typeof serverTimestamp>;
        email?: string;
      };

      if (normalized.email) {
        supportDoc.email = normalized.email;
      }

      const docRef = await addDoc(collection(db, "supportRequests"), supportDoc);
      referenceId = docRef.id;
    }

    const resend = getResendClient();
    const supportTo = process.env.SUPPORT_TO_EMAIL || "boyaki_diary.support@gmail.com";
    const supportFrom = process.env.SUPPORT_FROM_EMAIL || "onboarding@resend.dev";

    if (!resend) {
      console.error("Support email missing RESEND_API_KEY", {
        referenceId,
        category: normalized.category,
      });

      return NextResponse.json(
        {
          ok: false,
          message: "RESEND_API_KEY が設定されていません。",
          referenceId,
        },
        { status: 500, headers: corsHeaders() },
      );
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      to: supportTo,
      from: supportFrom,
      subject: `[ぼやき日記] お問い合わせ (${CATEGORY_LABEL[normalized.category]})`,
      text: buildMailText(normalized, referenceId),
      ...(normalized.email ? { replyTo: normalized.email } : {}),
    });

    if (resendError) {
      console.error("Support email Resend error", {
        error: serializeError(resendError),
        referenceId,
        category: normalized.category,
      });

      return NextResponse.json(
        {
          ok: false,
          message: "メール送信に失敗しました。送信元ドメイン設定または宛先制限を確認してください。",
          referenceId,
        },
        { status: 502, headers: corsHeaders() },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "お問い合わせを受け付けました。",
      referenceId,
      emailId: resendData.id,
    }, { headers: corsHeaders() });
  } catch (error) {
    console.error("Support API unexpected error", {
      error: serializeError(error),
    });

    return NextResponse.json(
      { ok: false, message: "サーバー側でエラーが発生しました。しばらくして再度お試しください。" },
      { status: 500, headers: corsHeaders() },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

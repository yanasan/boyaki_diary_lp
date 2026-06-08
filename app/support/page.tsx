"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

type Category = "ng-word" | "app" | "other";

type FormState = {
  email: string;
  message: string;
  category: Category;
};

const INITIAL_STATE: FormState = {
  email: "",
  message: "",
  category: "app",
};

export default function SupportPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const rawText = await response.text();
      let data: { ok?: boolean; message?: string; referenceId?: string } = {};

      if (rawText) {
        try {
          data = JSON.parse(rawText) as { ok?: boolean; message?: string; referenceId?: string };
        } catch {
          data = {
            ok: false,
            message: "サーバー応答の解析に失敗しました。",
          };
        }
      }

      if (!response.ok || !data.ok) {
        throw new Error(data.message || `送信に失敗しました。（HTTP ${response.status}）`);
      }

      setForm(INITIAL_STATE);
      setIsError(false);
      setStatusMessage(
        data.referenceId
          ? `送信が完了しました（受付番号: ${data.referenceId}）。`
          : "送信が完了しました。",
      );
    } catch (error) {
      setIsError(true);
      setStatusMessage(error instanceof Error ? error.message : "送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Link href="/" className={styles.back}>トップに戻る</Link>
          <div className={styles.brand}>ぼやき日記 サポート</div>
        </div>

        <section className={styles.hero}>
          <h1>お問い合わせ</h1>
          <p>
            不具合報告・ご意見・ご質問を受け付けています。
            内容確認後、必要な場合のみ返信いたします。
          </p>
        </section>

        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            カテゴリー <span className={styles.required}>必須</span>
            <select
              className={styles.select}
              value={form.category}
              onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value as Category }))}
              required
            >
              <option value="ng-word">NGワードについて</option>
              <option value="app">アプリについて</option>
              <option value="other">その他</option>
            </select>
          </label>

          <label className={styles.label}>
            メールアドレス（返信が必要な方のみ）
            <input
              type="email"
              className={styles.input}
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="example@mail.com"
            />
          </label>

          <label className={styles.label}>
            内容 <span className={styles.required}>必須</span>
            <textarea
              className={styles.textarea}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              required
              minLength={5}
              placeholder="お問い合わせ内容を入力してください（5文字以上）"
            />
          </label>

          <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "送信中..." : "送信する"}
          </button>

          {statusMessage ? (
            <p className={isError ? styles.errorText : styles.successText}>{statusMessage}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

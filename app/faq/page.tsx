"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import type { FaqDocument } from "@/lib/models/faq";
import { getFirebaseDb } from "@/lib/firebase";
import styles from "./page.module.css";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  source: "static" | "firestore";
};

type OrderedFaqItem = FaqItem & {
  order: number;
};

const BASE_ITEMS: FaqItem[] = [
  {
    id: "base-1",
    question: "お問い合わせへの返信はどれくらいで来ますか？",
    answer: "内容を確認したうえで、必要な場合のみ順次返信しています。",
    source: "static",
  },
  {
    id: "base-2",
    question: "不適切なワード報告はできますか？",
    answer: "お問い合わせフォームのカテゴリーで「NGワードについて」を選択してください。",
    source: "static",
  },
  {
    id: "base-3",
    question: "要望は送れますか？",
    answer: "「アプリについて」または「その他」から要望を送ってください。",
    source: "static",
  },
];

export default function FaqPage() {
  const [items, setItems] = useState<FaqItem[]>(BASE_ITEMS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadInitial() {
      setIsLoading(true);
      const db = getFirebaseDb();

      if (!db) {
        setIsLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "faqs"),
          where("isPublished", "==", true),
        );
        const snapshot = await getDocs(q);
        if (cancelled) return;

        const fetched: FaqItem[] = snapshot.docs
          .map((doc) => {
            const data = doc.data() as FaqDocument;
            return {
              id: doc.id,
              question: data.question,
              answer: data.answer,
              order: data.order ?? Number.MAX_SAFE_INTEGER,
              source: "firestore" as const,
            };
          })
          .sort((a, b) => a.order - b.order)
          .map((item: OrderedFaqItem) => ({
            id: item.id,
            question: item.question,
            answer: item.answer,
            source: item.source,
          }));

        setItems([...BASE_ITEMS, ...fetched]);
      } catch {
        // Firestore 未設定時はベースのみ表示
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadInitial();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Link href="/" className={styles.back}>トップに戻る</Link>
          <Link href="/support" className={styles.supportLink}>お問い合わせへ</Link>
        </div>

        <section className={styles.hero}>
          <h1>Q&A</h1>
          <p>よくある質問を随時追加していきます。</p>
        </section>

        {isLoading ? (
          <p className={styles.loading}>読み込み中...</p>
        ) : (
          <>
            <section className={styles.list}>
              {items.map((item) => (
                <article key={item.id} className={styles.card}>
                  <h2>Q. {item.question}</h2>
                  <p>A. {item.answer}</p>
                </article>
              ))}
            </section>

          </>
        )}
      </div>
    </div>
  );
}

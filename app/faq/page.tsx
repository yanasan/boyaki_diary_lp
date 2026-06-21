"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
  type QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";
import type { FaqDocument } from "@/lib/models/faq";
import { getFirebaseDb } from "@/lib/firebase";
import styles from "./page.module.css";

const PAGE_SIZE = 10;

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  source: "static" | "firestore";
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
  const [hasMore, setHasMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
          orderBy("order", "asc"),
          limit(PAGE_SIZE),
        );
        const snapshot = await getDocs(q);
        if (cancelled) return;

        const fetched: FaqItem[] = snapshot.docs.map((doc) => {
          const data = doc.data() as FaqDocument;
          return {
            id: doc.id,
            question: data.question,
            answer: data.answer,
            source: "firestore",
          };
        });

        setItems([...BASE_ITEMS, ...fetched]);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1] ?? null);
        setHasMore(snapshot.docs.length === PAGE_SIZE);
      } catch {
        // Firestore 未設定時はベースのみ表示
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadInitial();
    return () => { cancelled = true; };
  }, []);

  const loadMore = async () => {
    if (!lastDoc || isLoadingMore) return;
    const db = getFirebaseDb();
    if (!db) return;

    setIsLoadingMore(true);
    try {
      const q = query(
        collection(db, "faqs"),
        where("isPublished", "==", true),
        orderBy("order", "asc"),
        startAfter(lastDoc),
        limit(PAGE_SIZE),
      );
      const snapshot = await getDocs(q);
      const fetched: FaqItem[] = snapshot.docs.map((doc) => {
        const data = doc.data() as FaqDocument;
        return {
          id: doc.id,
          question: data.question,
          answer: data.answer,
          source: "firestore",
        };
      });

      setItems((prev) => [...prev, ...fetched]);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1] ?? null);
      setHasMore(snapshot.docs.length === PAGE_SIZE);
    } finally {
      setIsLoadingMore(false);
    }
  };

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

            {hasMore && (
              <div className={styles.pager}>
                <button
                  className={styles.loadMore}
                  onClick={loadMore}
                  disabled={isLoadingMore}
                >
                  {isLoadingMore ? "読み込み中..." : "もっと見る"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

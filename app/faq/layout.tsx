import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "ぼやき日記のよくある質問と回答をまとめています。使い方・AIキャラクター・プランについてご確認いただけます。",
  alternates: { canonical: "https://www.boyaki-diary.com/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}

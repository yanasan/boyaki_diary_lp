import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "ぼやき日記へのご質問・ご意見はお問い合わせフォームからどうぞ。",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.boyaki-diary.com/support" },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}

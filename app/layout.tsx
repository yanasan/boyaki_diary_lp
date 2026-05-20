import type { Metadata } from "next";
import { Zen_Maru_Gothic, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "ぼやき日記 — ぼやいてたら、日記になってた。",
  description: "AIキャラクターと話すだけで、日記が自動生成される対話型日記アプリ。書く意志がなくても続けられる。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenMaruGothic.variable} ${zenKakuGothicNew.variable}`}
    >
      <body style={{ fontFamily: "var(--font-zen-maru), var(--font-zen-kaku), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

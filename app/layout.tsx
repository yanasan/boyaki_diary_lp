import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mplus-rounded",
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
    <html lang="ja" className={mPlusRounded.variable}>
      <body style={{ fontFamily: "var(--font-mplus-rounded), 'Hiragino Maru Gothic ProN', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

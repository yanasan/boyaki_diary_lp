import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-mplus-rounded",
});

const BASE_URL = "https://www.boyaki-diary.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ぼやき日記 — ぼやくだけで、日記になる。",
    template: "%s | ぼやき日記",
  },
  description:
    "3人のAIの相棒との会話を日記に。週間振り返りと記憶ノートで、自分のことを少しずつ。無料ダウンロード・アプリ内課金あり。",
  keywords: [
    "日記アプリ",
    "AI日記",
    "ぼやき日記",
    "対話型日記",
    "iOSアプリ",
    "日記",
    "AIキャラクター",
    "続けられる日記",
  ],
  authors: [{ name: "ぼやき日記" }],
  creator: "ぼやき日記",
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "ぼやき日記",
    title: "ぼやき日記 — ぼやくだけで、日記になる。",
    description:
      "3人のAIの相棒との会話を日記に。週間振り返りと記憶ノートで、自分のことを少しずつ。無料ダウンロード・アプリ内課金あり。",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ぼやき日記 — ぼやくだけで、日記になる。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ぼやき日記 — ぼやくだけで、日記になる。",
    description:
      "3人のAIの相棒との会話を日記に。週間振り返りと記憶ノートで、自分のことを少しずつ。無料ダウンロード・アプリ内課金あり。",
    images: ["/opengraph-image"],
  },
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

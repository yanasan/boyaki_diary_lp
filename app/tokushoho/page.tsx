import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "ぼやき日記のチケット販売に関する、特定商取引法に基づく表記です。",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.boyaki-diary.com/tokushoho" },
};

const rows: { label: string; body: React.ReactNode }[] = [
  { label: "販売事業者", body: "shota yanachi" },
  { label: "運営統括責任者", body: "shota yanachi" },
  {
    label: "所在地・電話番号",
    body: "請求があれば、遅滞なく開示します。下記のメールアドレスまでご請求ください。",
  },
  {
    label: "連絡先",
    body: (
      <a href="mailto:boyakidiary.app@gmail.com" className={styles.email}>
        boyakidiary.app@gmail.com
      </a>
    ),
  },
  { label: "販売商品", body: "ぼやき日記のチケット（アプリ内の仮想アイテム）" },
  { label: "販売価格", body: "アプリ内の購入画面に表示します（消費税込み）。" },
  { label: "商品代金以外の必要料金", body: "なし（インターネット接続の通信料は、利用者のご負担です）。" },
  {
    label: "お支払い方法・時期",
    body: "App Store（Appleのアプリ内課金）の決済です。支払い時期は、購入手続きの時点で、Appleの定めによります。",
  },
  { label: "商品の引渡し時期", body: "決済の完了後、ただちにチケットを付与します。" },
  { label: "チケットの有効期限", body: "ありません。" },
  {
    label: "返品・キャンセル",
    body: "デジタルコンテンツの性質上、購入後の返品・キャンセル・払い戻しは、原則としてできません。Appleを通じた返金は、Appleの定める手続きと条件によります。",
  },
  { label: "動作環境", body: "iOS（対応するバージョンはApp Storeの商品ページをご確認ください）" },
];

export default function Tokushoho() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <Link href="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            トップに戻る
          </Link>
          <div className={styles.brand}>
            <div className={styles.brandMark}>ぼ</div>
            <span>ぼやき日記</span>
          </div>
        </div>

        <div className={styles.hero}>
          <h1>特定商取引法に基づく表記</h1>
          <p className={styles.updated}>最終更新日：2026年11月3日</p>
        </div>

        <div className={styles.body}>

          <section className={styles.section}>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className={styles.contact}>
            <h3>お問い合わせ</h3>
            <p>本表記に関するお問い合わせ：</p>
            <a href="mailto:boyakidiary.app@gmail.com" className={styles.email}>
              boyakidiary.app@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

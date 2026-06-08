import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ぼやき日記のプライバシーポリシーです。個人情報の取り扱いについて説明しています。",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.boyaki-diary.com/privacy" },
};

export default function PrivacyPolicy() {
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
          <h1>プライバシーポリシー</h1>
          <p className={styles.updated}>最終更新日：2026年5月20日</p>
          <p className={styles.lead}>
            ぼやき日記（以下「本アプリ」）は、利用者のプライバシーを最大限尊重します。
            本ポリシーは、本アプリが収集する情報とその取り扱いについて説明するものです。
          </p>
        </div>

        <div className={styles.body}>

          <section className={styles.section}>
            <h2><span className={styles.num}>1</span>取得する情報</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>種別</th>
                    <th>内容</th>
                    <th>取得タイミング</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>認証情報</td>
                    <td>匿名ユーザーID（自動生成）、Apple IDトークン（Apple Sign In利用時）</td>
                    <td>初回起動・ログイン時</td>
                  </tr>
                  <tr>
                    <td>チャットデータ</td>
                    <td>AIキャラクターとの会話内容</td>
                    <td>対話中</td>
                  </tr>
                  <tr>
                    <td>日記データ</td>
                    <td>AI生成の日記、利用者が編集した内容</td>
                    <td>日記生成・編集時</td>
                  </tr>
                  <tr>
                    <td>利用履歴</td>
                    <td>記録日時、チケット使用状況</td>
                    <td>本アプリ利用時</td>
                  </tr>
                  <tr>
                    <td>端末情報</td>
                    <td>OSバージョン、アプリバージョン、クラッシュログ</td>
                    <td>本アプリ利用時</td>
                  </tr>
                  <tr>
                    <td>広告識別子</td>
                    <td>Google AdMobによる広告ID</td>
                    <td>広告表示時</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>2</span>利用目的</h2>
            <p>収集した情報は、以下の目的にのみ使用します。</p>
            <ul>
              <li>本アプリのサービス提供・運営</li>
              <li>AIによる日記の自動生成（詳細は「3. AIへのデータ送信について」参照）</li>
              <li>アプリの利用状況分析およびサービス改善</li>
              <li>広告の配信</li>
              <li>不正利用の防止・セキュリティ確保</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>3</span>AIへのデータ送信について</h2>
            <p>
              利用者がAIキャラクターと行った会話内容は、<strong>日記生成の目的に限り</strong>
              Gemini API（Google LLC）に送信されます。
            </p>
            <ul>
              <li>送信データはその目的以外には使用しません</li>
              <li>Googleとの間で入力データをAIの学習に利用しない設定を適用しています</li>
              <li>送信時に氏名・住所・電話番号など直接個人を特定する情報は付加しません</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>4</span>第三者への情報提供</h2>
            <p>
              収集した情報は、以下の業務委託先を除き、<strong>第三者への提供・販売は一切行いません</strong>。
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>サービス</th>
                    <th>提供者</th>
                    <th>用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Firebase</td>
                    <td>Google LLC</td>
                    <td>認証・データベース</td>
                  </tr>
                  <tr>
                    <td>Gemini API</td>
                    <td>Google LLC</td>
                    <td>AI対話・日記生成</td>
                  </tr>
                  <tr>
                    <td>Google AdMob</td>
                    <td>Google LLC</td>
                    <td>広告配信</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.note}>各サービスのプライバシーポリシーは各提供者のウェブサイトをご確認ください。</p>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>5</span>データの保存・削除</h2>
            <ul>
              <li>チャット履歴は最終利用日から<strong>7日間</strong>保持後、自動削除されます</li>
              <li>日記データはアプリ利用期間中保持されます</li>
              <li>アプリをアンインストールした場合、または削除依頼をいただいた場合、サーバー上のデータは<strong>30日以内に完全削除</strong>されます</li>
              <li>個別データの削除はアプリ内の設定画面から随時行えます</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>6</span>セキュリティ</h2>
            <ul>
              <li>すべての通信はTLS（HTTPS）で暗号化しています</li>
              <li>データはFirebase（Google Cloud）のセキュリティ基準に基づき管理しています</li>
              <li>認証トークンはiOS Keychain / Android Keystoreに準ずるセキュアな領域に保存されます</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>7</span>広告・トラッキングについて</h2>
            <p>
              本アプリはGoogle AdMobによるリワード広告を配信しています。
              <strong>広告目的でのユーザートラッキングは行いません。</strong>
            </p>
            <ul>
              <li>iOSではApp Tracking Transparency（ATT）に準拠します</li>
              <li>利用者は端末の設定から広告IDのリセットや広告トラッキングの無効化が可能です</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>8</span>利用者の権利</h2>
            <p>利用者は自己のデータに対して以下の権利を有します。</p>
            <div className={styles.rights}>
              <div className={styles.right}>
                <span className={styles.rightLabel}>閲覧</span>
                アプリ内のタイムライン・詳細画面から確認可能
              </div>
              <div className={styles.right}>
                <span className={styles.rightLabel}>訂正</span>
                日記詳細画面から編集可能
              </div>
              <div className={styles.right}>
                <span className={styles.rightLabel}>削除</span>
                アプリ内設定画面から個別削除・全データ削除が可能
              </div>
              <div className={styles.right}>
                <span className={styles.rightLabel}>開示・利用停止等</span>
                下記お問い合わせ先まで
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>9</span>未成年者の利用</h2>
            <p>
              本アプリは13歳未満の方を対象としていません。
              13歳未満の方のご利用が判明した場合、速やかに関連データを削除します。
            </p>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>10</span>ポリシーの変更</h2>
            <p>
              本ポリシーは法令の変更やサービス内容の変更に応じて改定することがあります。
              重要な変更がある場合は、アプリ内またはWebサイトにてお知らせします。
            </p>
          </section>

          <div className={styles.contact}>
            <h3>お問い合わせ</h3>
            <p>本ポリシーに関するお問い合わせ：</p>
            <a href="mailto:boyakidiary.app@gmail.com" className={styles.email}>
              boyakidiary.app@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "利用規約 | ぼやき日記",
};

export default function Terms() {
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
          <h1>利用規約</h1>
          <p className={styles.updated}>最終更新日：2026年5月20日</p>
        </div>

        <div className={styles.body}>

          <section className={styles.section}>
            <h2><span className={styles.num}>第1条</span>総則</h2>
            <ol>
              <li>本利用規約（以下「本規約」）は、ぼやき日記（以下「本サービス」）の利用に関する条件を定めるものです。</li>
              <li>利用者は本サービスを利用することにより、本規約に同意したものとみなします。</li>
              <li>運営者は本規約を変更することがあります。変更後の規約は本サービスまたは公式Webサイトへの掲示をもって効力を生じます。重要な変更がある場合は、アプリ内またはWebサイト上でお知らせします。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第2条</span>定義</h2>
            <p>本規約において使用する用語の定義は以下のとおりです。</p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>用語</th>
                    <th>定義</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>利用者</td>
                    <td>本サービスを利用するすべての方</td>
                  </tr>
                  <tr>
                    <td>本アプリ</td>
                    <td>ぼやき日記のiOS・Androidアプリケーション</td>
                  </tr>
                  <tr>
                    <td>AIキャラクター</td>
                    <td>本サービスが提供するAIを搭載したキャラクター</td>
                  </tr>
                  <tr>
                    <td>生成コンテンツ</td>
                    <td>AIキャラクターとの対話により生成された日記・テキスト等</td>
                  </tr>
                  <tr>
                    <td>チケット</td>
                    <td>AIとの対話に使用するアプリ内仮想アイテム</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第3条</span>利用資格</h2>
            <ol>
              <li>本サービスは13歳以上の方を対象としています。</li>
              <li>13歳未満の方は本サービスをご利用いただけません。</li>
              <li>未成年者が本サービスを利用する場合は、保護者の同意を得たうえでご利用ください。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第4条</span>アカウント</h2>
            <ol>
              <li>本サービスはアカウント登録不要でご利用いただけます。初回起動時に匿名認証が自動的に行われます。</li>
              <li>Apple IDによるサインインも利用可能です。</li>
              <li>利用者は自己のアカウント情報を適切に管理する責任を負います。</li>
              <li>アカウントの不正利用により生じた損害について、運営者は一切の責任を負いません。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第5条</span>チケット</h2>
            <ol>
              <li>チケットはAIキャラクターとの対話に使用するアプリ内仮想アイテムです。</li>
              <li>チケットはログインボーナス・リワード広告視聴等により取得できます。</li>
              <li>チケットは現金・その他の財産的価値に換金できません。</li>
              <li>チケットは第三者への譲渡・売買ができません。</li>
              <li>本サービスの終了、またはアカウント削除時にチケットは失効します。</li>
              <li>いかなる理由においてもチケットの払い戻しは行いません。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第6条</span>生成コンテンツ</h2>
            <ol>
              <li>本サービスのAIが生成する日記・コメント等は自動生成によるものです。</li>
              <li>生成コンテンツの正確性・完全性・適切性について、運営者は一切保証しません。</li>
              <li>生成コンテンツは医療・法律・精神的なアドバイスの代替となるものではありません。</li>
              <li>利用者が本サービスを通じて生成した日記コンテンツの著作権は、利用者に帰属します。</li>
              <li>利用者は、生成コンテンツを収集・分析して類似システムを構築する行為（いわゆる「蒸留」）を行ってはなりません。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第7条</span>禁止事項</h2>
            <p>利用者は、本サービスの利用にあたり以下の行為を行ってはなりません。</p>
            <ol>
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本サービスのシステム・サーバー・ネットワークへの不正アクセス・妨害</li>
              <li>他の利用者または第三者の権利・利益・名誉を侵害する行為</li>
              <li>AIキャラクターに対し、不正な命令・操作（プロンプトインジェクション等）を行う行為</li>
              <li>本サービスを通じて有害・違法・差別的なコンテンツを生成しようとする行為</li>
              <li>本サービスのリバースエンジニアリング・逆コンパイル・逆アセンブルその他の解析行為</li>
              <li>本サービスを通じて取得したコンテンツを、商業目的で無断利用する行為</li>
              <li>運営者の事前の承諾なく、本サービスに関連した営業・宣伝活動を行う行為</li>
              <li>その他、運営者が不適切と判断する行為</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第8条</span>知的財産権</h2>
            <ol>
              <li>本サービスに含まれるコンテンツ（テキスト・画像・キャラクターデザイン・UIデザイン等）の著作権その他の知的財産権は、運営者または正当な権利者に帰属します。</li>
              <li>利用者は、運営者の事前の書面による承諾なく、これらを複製・改変・二次利用することはできません。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第9条</span>サービスの変更・停止</h2>
            <p>運営者は、以下の場合において、利用者への事前通知なく本サービスの全部または一部の変更・停止を行うことができます。</p>
            <ol>
              <li>システムのメンテナンスまたはアップデート</li>
              <li>地震・火災・停電・感染症等の不可抗力</li>
              <li>外部サービス（Firebase・Gemini API等）の障害・仕様変更</li>
              <li>その他、運営上やむを得ない事情が生じた場合</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第10条</span>免責事項</h2>
            <ol>
              <li>本サービスの利用によって利用者に生じた損害について、運営者は一切の責任を負いません。</li>
              <li>AIが生成するコンテンツの正確性・適切性・安全性について、運営者は保証しません。</li>
              <li>通信障害・サービス停止・データ消失によって生じた損害についても同様です。</li>
              <li>本サービスを通じた利用者間または利用者と第三者間の紛争について、運営者は関与せず、一切の責任を負いません。</li>
              <li>本規約の免責規定は、運営者に故意または重大な過失がある場合には適用されません。</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第11条</span>個人情報の取り扱い</h2>
            <p>
              利用者の個人情報の取り扱いについては、別途定める
              <a href="/privacy" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px" }}>プライバシーポリシー</a>
              に従います。
            </p>
          </section>

          <section className={styles.section}>
            <h2><span className={styles.num}>第12条</span>準拠法・管轄裁判所</h2>
            <ol>
              <li>本規約は日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合、運営者の所在地を管轄する裁判所を専属的合意管轄とします。</li>
            </ol>
          </section>

          <div className={styles.contact}>
            <h3>お問い合わせ</h3>
            <p>本規約に関するお問い合わせ：</p>
            <a href="mailto:boyakidiary.app@gmail.com" className={styles.email}>
              boyakidiary.app@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

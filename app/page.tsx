import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import HomePreview from "./home-preview";
import { companions } from "./companions";
const storeUrl = "https://apps.apple.com/app/%E3%81%BC%E3%82%84%E3%81%8D%E6%97%A5%E8%A8%98/id6773559912";
function StoreLink() {
  return <a className={styles.store} href={storeUrl} target="_blank" rel="noopener noreferrer" aria-label="App Storeでぼやき日記をダウンロード（新しいタブで開きます）">
      <span className={styles.small}>無料ダウンロード</span>
      <strong>App Store で入手 ↗</strong>
      </a>;
}
function Brand() {
  return <Link href="/" className={styles.brand} aria-label="ぼやき日記 トップ">
      <span className={styles.brandMark}>ぼ</span>
      <span>ぼやき日記</span>
      </Link>;
}
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "ぼやき日記", description: "ぼやくだけで、日記になる。3人のAIの相棒との会話を日記に。週間振り返りと記憶ノートで、自分のことを少しずつ。", applicationCategory: "LifestyleApplication", operatingSystem: "iOS", url: "https://www.boyaki-diary.com", offers: { "@type": "Offer", price: "0", priceCurrency: "JPY", description: "無料ダウンロード・アプリ内課金あり" }, inLanguage: "ja" }) }} />
    <a className={styles.skip} href="#main">本文へスキップ</a>
    <header className={styles.header}>
      <div className={styles.nav}>
      <Brand />
      <nav aria-label="メインナビゲーション">
      <a className={styles.desktopLink} href="#companions">3人の相棒</a>
      <a className={styles.desktopLink} href="#weekly">ふりかえり</a>
      <a className={styles.navDownload} href="#download">ダウンロード ↓</a>
      </nav>
      </div>
      </header>
    <main id="main">
      <section className={`${styles.wrap} ${styles.hero}`}>
        <div>
      <p className={styles.eyebrow}>話すことから、はじまる日記。</p>
      <h1>ぼやくだけで、<br />
      <span className={styles.marker}>日記になる。</span>
      </h1>
      <p className={styles.lede}>うれしかったことも、なんだかなぁ、なことも。<br />好きな相棒に今日のことを話すと、<br />あなたの一日が、日記として残ります。</p>
      <StoreLink />
      <p className={styles.small}>iPhone向け ／ 無料ダウンロード・アプリ内課金あり</p>
      <a className={styles.textLink} href="#companions">あなたの相棒を見つける ↓</a>
      </div>
      <HomePreview />
      </section>
      <section className={styles.sectionTint} id="companions">
      <div className={styles.wrap}>
      <p className={styles.eyebrow}>MEET YOUR COMPANION</p>
      <h2>今日の気分で、<span className={styles.marker}>話す相手を。</span>
      </h2>
      <p className={styles.intro}>聞き方も、言葉の温度も、少しずつ違う3人。<br />今のあなたに合う相棒と、話してみませんか。</p>
      <div className={styles.characters}>{companions.map(c => <article key={c.id} className={styles.character} data-character={c.id}>
      <Image src={c.image} alt={`${c.name}の水彩イラスト`} width={144} height={144} />
      <p className={styles.small}>{c.tag}</p>
      <h3>{c.name}</h3>
      <p>{c.description}</p>
      <blockquote>
      <span className={styles.small}>会話のイメージ</span>
      <p>「今日は疲れたけど、ごはんは作れた」</p>
      <p>「{c.reply}」</p>
      </blockquote>
      </article>)}</div>
      </div>
      </section>
      <section className={`${styles.wrap} ${styles.section}`}>
      <p className={styles.eyebrow}>HOW IT WORKS</p>
      <h2>書き出せない日も、<br />
      <span className={styles.marker}>会話からでいい。</span>
      </h2>
      <ol className={styles.steps}>{[{ title: "相棒を選ぶ", body: "元気がほしい日も、静かに話したい日も。今日の気分に合わせて。", sample: "ぺんまる・ホー博士・テト" }, { title: "今日のことを話す", body: "まとまっていなくても大丈夫。思いついたことを、言葉にしてみる。", sample: "「今日はちょっと疲れたな」" }, { title: "日記になる", body: "会話をもとにAIが日記を生成。何気ない一日が、読み返せる記録に。", sample: "今日の気持ちを、一日分の記録へ。" }].map((s, i) => <li key={s.title}>
      <span className={styles.stepNumber}>0{i + 1}</span>
      <h3>{s.title}</h3>
      <p>{s.body}</p>
      <div className={styles.stepSample}>{s.sample}</div>
      </li>)}</ol>
      </section>
      <section className={styles.sectionTint} id="weekly">
      <div className={`${styles.wrap} ${styles.featureGrid}`}>
      <div>
      <p className={styles.eyebrow}>WEEKLY REFLECTION</p>
      <h2>今週の自分に、<br />
      <span className={styles.marker}>気づける。</span>
      </h2>
      <p className={styles.lede}>一日ずつでは見えなかったことが、<br />一週間をふりかえると、見えてくる。</p>
      <p>日記をもとに、1週間のふりかえりを。<br />心に残った出来事や気持ちを読み返して、<br />今週の自分に目を向ける時間をつくれます。</p>
      </div>
      <figure className={styles.paper}>
      <p className={styles.eyebrow}>1週間のふりかえり</p>
      <h3>あわただしい中にも、<br />ほっとする時間があった。</h3>
      <div className={styles.week} aria-label="月曜日から日曜日までの1週間">{["月", "火", "水", "木", "金", "土", "日"].map(d => <span key={d}>{d}</span>)}</div>
      <p>忙しい日が続いた今週。ごはんを作った夜や、散歩した休日には、少し肩の力が抜けたようです。</p>
      <hr />
      <p>
      <strong>来週の自分へ</strong>
      <br />小さな休憩も、大切にしてみよう。</p>
      <figcaption className={styles.caption}>機能紹介のためのイメージ・文章はサンプルです。</figcaption>
      </figure>
      </div>
      </section>
      <section className={`${styles.wrap} ${styles.featureGrid} ${styles.section}`} id="memory">
      <div>
      <p className={styles.eyebrow}>MEMORY NOTE</p>
      <h2>あなたのことを、<br />
      <span className={styles.marker}>少しずつ。</span>
      </h2>
      <p className={styles.lede}>何気なく話した、好きなこと。<br />大事にしている、あの時間。</p>
      <p>日記や会話から作られる「記憶」をもとに、相棒が過去の出来事を踏まえて応答します。</p>
      <p className={styles.notice}>記憶の内容の確認・削除は、現在お問い合わせで受け付けています。アプリ内での個別の確認・削除は提供予定です。<br />
      <Link className={styles.textLink} href="/support">記憶について問い合わせる ↗</Link>
      </p>
      <Link className={styles.textLink} href="/privacy">データの取り扱いについて →</Link>
      </div>
      <figure className={styles.paper}>
      <p className={styles.eyebrow}>記憶ノートのイメージ</p>
      <h3>会話の中の、あなたらしさ。</h3>
      <div className={styles.noteItem}>
      <span className={styles.small}>好きなこと</span>
      <p>休日に、近所を散歩すること。</p>
      </div>
      <div className={styles.noteItem}>
      <span className={styles.small}>大切にしていること</span>
      <p>忙しくても、ごはんの時間はゆっくり。</p>
      </div>
      <figcaption className={styles.caption}>紹介用イメージです。実際の画面ではありません。<br />AIが作る記憶には、誤りが含まれる場合があります。</figcaption>
      </figure>
      </section>
      <section className={styles.sectionTint}>
      <div className={`${styles.wrap} ${styles.catchUp}`}>
      <span className={styles.stepNumber} aria-hidden="true">＋</span>
      <div>
      <h2>書きそびれた日も、<span className={styles.marker}>あとから。</span>
      </h2>
      <p>毎日きっちり、でなくても大丈夫。書きそびれた日のことも、思い出したときに記入できます。</p>
      </div>
      </div>
      </section>
      <section className={`${styles.wrap} ${styles.section} ${styles.faq}`}>
      <p className={styles.eyebrow}>Q & A</p>
      <h2>気になること。</h2>{[{ q: "無料で使えますか？", a: <>無料でダウンロードできます。AIとの対話にはチケットを使用し、チケットはアプリ内でも購入できます。枚数・価格はアプリ内の購入画面でご確認ください。</> }, { q: "日記は自分で書かないといけませんか？", a: <>相棒との会話をもとにAIが日記を生成します。文章をきれいにまとめる必要はありません。</> }, { q: "相棒は人間ですか？", a: <>3人ともAIキャラクターです。返答や日記はAIが生成するため、誤りが含まれる場合があります。</> }, { q: "記憶の内容を確認・削除できますか？", a: <>現在は<Link href="/support">お問い合わせ</Link>で確認・削除に対応しています。アプリ内での個別の確認・削除は提供予定です。</> }, { q: "会話や日記のデータはどう扱われますか？", a: <>AI機能の利用に際して、同意のうえで会話内容などを外部AIサービスへ送信します。詳しくは<Link href="/privacy">プライバシーポリシー</Link>をご確認ください。</> }].map(item => <details key={item.q}>
      <summary>{item.q}</summary>
      <p>{item.a}</p>
      </details>)}<Link className={styles.textLink} href="/faq">すべてのFAQを見る →</Link>
      </section>
      <section className={styles.download} id="download">
      <div className={styles.wrap}>
      <div className={styles.downloadCharacters}>{companions.map(c => <Image key={c.id} src={c.image} alt="" width={88} height={88} />)}</div>
      <h2>今日のぼやきが、<br />
      <span className={styles.marker}>明日の思い出に。</span>
      </h2>
      <p>あなたの話を待っている相棒がいます。</p>
      <StoreLink />
      <p className={styles.small}>iPhone向け ／ 無料ダウンロード・アプリ内課金あり<br />チケットの内容・価格は、アプリ内の購入画面をご確認ください。</p>
      </div>
      </section>
    </main>
      <footer className={styles.footer}>
      <div className={styles.wrap}>
      <Brand />
      <nav aria-label="フッターナビゲーション">
      <Link href="/support">お問い合わせ</Link>
      <Link href="/terms">利用規約</Link>
      <Link href="/privacy">プライバシーポリシー</Link>
      <Link href="/faq">FAQ</Link>
      </nav>
      <p className={styles.small}>© ぼやき日記 / TalkDiary</p>
      </div>
      </footer>
  </>;
}

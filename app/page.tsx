import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ぼやき日記",
  description:
    "AIキャラクターと話すだけで、日記が自動生成される対話型日記アプリ。書く意志がなくても続けられる。",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  url: "https://www.boyaki-diary.com",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  inLanguage: "ja",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navbar */}
      <nav className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <a href="#" className={styles.brand}>
            <div className={styles.brandMark}>ぼ</div>
            <div className={styles.brandName}>
              ぼやき日記
            </div>
          </a>
          <div className={styles.navCta}>
            <span className={styles.hide}>iOSアプリ無料配信中</span>
            <a className={styles.pill} href="#download">
              <svg width="14" height="14" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              ダウンロード
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={`${styles.blob} ${styles.blobB1}`}></div>
        <div className={`${styles.blob} ${styles.blobB2}`}></div>
        <div className={styles.heroGrid}>
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.dot}></span>AIと話す対話型日記
            </span>
            <h1 className={styles.headline}>
              <span className={styles.quoteChar}>「</span>ぼやいてたら、<br />
              <span className={styles.hl}>日記</span>になってた。
              <span className={styles.quoteChar}>」</span>
            </h1>
            <p className={styles.lede}>
              書こうとしなくていい。
              <b>AIキャラに今日のことをぼやく</b>
              だけで、その日の日記がそっと出来上がる。続かなかった日記が、はじめて続く。
            </p>

            <div className={styles.ctaRow} id="download">
              <a className={styles.appBadge} href="#">
                <svg viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div>
                  <span className={styles.badgeB1}>Download on the</span>
                  <span className={styles.badgeB2}>App Store</span>
                </div>
              </a>
              <span className={styles.androidNote}>
                Android版は<s>準備中</s> coming soon
              </span>
            </div>

            <div className={styles.heroMeta}>
              <div className={styles.avatars}>
                <span>🐧</span>
                <span>🦉</span>
                <span>🐱</span>
              </div>
              <span>3キャラから選べる、あなた専用のAIパートナー</span>
            </div>
          </div>

          <div className={styles.phoneWrap}>
            <div className={`${styles.sticker} ${styles.stickerS1}`}>
              <span className={styles.stickerEmoji}>✏️</span>書かない日記
            </div>
            <div className={`${styles.sticker} ${styles.stickerS2}`}>
              <span className={styles.stickerEmoji}>💬</span>話すだけでOK
            </div>
            <div className={`${styles.sticker} ${styles.stickerS3}`}>
              <span className={styles.stickerEmoji}>🌙</span>毎晩3分
            </div>
            <div className={styles.phone} aria-hidden="true">
              <div className={styles.screen}>
                <div className={styles.statusbar}>
                  <span>13:19</span>
                  <span className={styles.statusRight}>
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
                      <path d="M8 2.5c2 0 3.9.8 5.3 2.1.3.3.7.3 1 0l.5-.5c.3-.3.3-.7 0-1C13 1.5 10.6.5 8 .5S3 1.5 1.2 3.1c-.3.3-.3.7 0 1l.5.5c.3.3.7.3 1 0C4.1 3.3 6 2.5 8 2.5zm0 3c1.2 0 2.3.5 3.2 1.2.3.3.7.3 1 0l.5-.5c.3-.3.3-.7 0-1C11.5 4 9.8 3.3 8 3.3s-3.5.7-4.7 1.9c-.3.3-.3.7 0 1l.5.5c.3.3.7.3 1 0C5.7 6 6.8 5.5 8 5.5zm0 3c.5 0 1 .2 1.4.5.3.3.7.3 1 0l.5-.5c.3-.3.3-.7 0-1C10.2 6.8 9.1 6.3 8 6.3s-2.2.5-2.9 1.2c-.3.3-.3.7 0 1l.5.5c.3.3.7.3 1 0 .4-.3.9-.5 1.4-.5zM8 9.5l-1 1c-.3.3-.3.7 0 1l.5.5c.3.3.7.3 1 0l1-1c.3-.3.3-.7 0-1l-.5-.5c-.3-.3-.7-.3-1 0z" />
                    </svg>
                    <svg width="24" height="11" viewBox="0 0 24 11" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x=".5" y=".5" width="20" height="10" rx="2" />
                      <rect x="2" y="2" width="17" height="7" rx="1" fill="currentColor" />
                      <rect x="22" y="3.5" width="1.5" height="4" rx=".75" fill="currentColor" />
                    </svg>
                  </span>
                </div>

                <div className={styles.homeCard}>
                  <div className={styles.homeCardTop}>
                    <div className={styles.charTile}>🐱</div>
                    <div className={styles.homeCardText}>
                      <div className={styles.dateLabel}>2026年5月20日(水)</div>
                      <div className={styles.bubble}>今日の一番の出来事は？</div>
                      <div className={styles.subLabel}>テトと静かに見つめる</div>
                    </div>
                  </div>
                  <div className={styles.startBtn}>今日の日記をはじめる</div>
                </div>

                <div className={styles.recentH}>
                  <h4>最近の日記</h4>
                  <a>一覧を見る ›</a>
                </div>
                <div className={styles.diaryCard}>
                  <h5>Apple Developer 審査通過！</h5>
                  <p>今日、Apple Developerの審査が通った。初めての通過で、とても嬉しい。難しいこともあったけど…</p>
                  <div className={styles.diaryMeta}>
                    <span className={styles.chip}>📅 5月20日</span>
                    <span className={styles.chip}>🙂 うれしい</span>
                  </div>
                </div>

                <div className={styles.tabbar}>
                  <div className={styles.tabActive}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12l9-9 9 9M5 10v10h4v-6h6v6h4V10" />
                    </svg>
                    ホーム
                  </div>
                  <div className={styles.tabItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4h11a2 2 0 012 2v15l-7-4-7 4V6a2 2 0 011-2z" />
                    </svg>
                    日記
                  </div>
                  <div className={styles.tabItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
                    </svg>
                    設定
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={`${styles.sec} ${styles.stepsBg}`}>
        <div className={styles.wrap}>
          <span className={styles.secEyebrow}>HOW IT WORKS</span>
          <h2 className={styles.secTitle}>
            <span className={styles.hl}>3ステップ</span>で、今日の日記。
          </h2>
          <p className={styles.secSub}>特別なことは何も。アプリを開いて、ぼやくだけ。あとはAIにおまかせ。</p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepIllo}>🎙️</div>
              <h3>キャラを選ぶ</h3>
              <p>気分に合うAIパートナーを選んで、その日の聞き役に。いつでも切り替えOK。</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepIllo}>
                <div className={styles.chatIllo}>
                  <div className={styles.bubbleL}>今日どうだった？</div>
                  <div className={styles.bubbleR}>ちょっと疲れたかも…</div>
                  <div className={styles.bubbleL}>何があったの？</div>
                  <div className={styles.bubbleR}>会議が多くて…</div>
                </div>
              </div>
              <h3>ぼやく・話す</h3>
              <p>愚痴でも、うれしかったことでも。AIが優しく聞いて、ちょうどいい質問を返してくれる。</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepIllo}>
                <div className={styles.book}>
                  5/20 (水)
                  <div className={styles.blines}>
                    <i></i><i></i><i></i><i></i>
                  </div>
                </div>
              </div>
              <h3>日記が完成</h3>
              <p>会話から、その日の出来事と気持ちが自動で日記化。後から読み返すのも楽しみに。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <span className={styles.secEyebrow}>YOUR AI PARTNER</span>
          <h2 className={styles.secTitle}>
            今日の気分で、<span className={styles.hl}>話し相手を選ぶ。</span>
          </h2>
          <p className={styles.secSub}>
            3体のAIキャラクターは、それぞれ得意な聞き方が違います。今日のあなたに合うパートナーを。
          </p>

          <div className={styles.chars}>
            <div className={`${styles.char} ${styles.charC1}`}>
              <div className={styles.charTag}>ポジティブ</div>
              <div className={`${styles.charFace} ${styles.charFaceC1}`}>🐧</div>
              <h3>ぺんまる</h3>
              <div className={styles.role}>小さな成功を見つける係</div>
              <p className={styles.desc}>
                「今日できたこと」にフォーカス。ポジティブ心理学ベースで、当たり前の中にある成長の芽をそっと拾い上げてくれます。
              </p>
              <div className={styles.charQuote}>
                <span className={styles.quoteLabel}>ぺんまる</span>
                今日、誰かのために動けた瞬間ってあった？
              </div>
            </div>

            <div className={`${styles.char} ${styles.charC2}`}>
              <div className={styles.charTag}>傾聴</div>
              <div className={`${styles.charFace} ${styles.charFaceC2}`}>🦉</div>
              <h3>ホー博士</h3>
              <div className={styles.role}>背景まで聴いてくれる係</div>
              <p className={styles.desc}>
                共感的に深掘り。「なぜそう感じたのか」を急かさず聞いてくれる、傾聴重視のモード。気持ちの整理にぴったり。
              </p>
              <div className={styles.charQuote}>
                <span className={styles.quoteLabel}>ホー博士</span>
                ふむ…そのとき、心の中ではどんな声がしていた？
              </div>
            </div>

            <div className={`${styles.char} ${styles.charC3}`}>
              <div className={styles.charTag}>学習</div>
              <div className={`${styles.charFace} ${styles.charFaceC3}`}>🐱</div>
              <h3>テト</h3>
              <div className={styles.role}>次の一手を一緒に考える係</div>
              <p className={styles.desc}>
                今日の失敗から学ぶ。「次はどうする？」を具体的に引き出し、再現性のある改善アクションを一緒に組み立てます。
              </p>
              <div className={styles.charQuote}>
                <span className={styles.quoteLabel}>テト</span>
                じゃあ次にやるなら、まず何を変える？ひとつでいいよ。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresBg}>
        <div className={styles.sec}>
          <div className={styles.wrap}>
            <span className={`${styles.secEyebrow} ${styles.eyebrowLight}`}>FEATURES</span>
            <h2 className={`${styles.secTitle} ${styles.titleLight}`}>
              続けるための、<span className={styles.hlDark}>小さな仕掛け。</span>
            </h2>
            <p className={`${styles.secSub} ${styles.subLight}`}>
              「書く」ハードルをなくして、毎日ひらきたくなる日記アプリを目指しました。
            </p>

            <div className={styles.feats}>
              <div className={styles.feat}>
                <div className={styles.featIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8a9.9 9.9 0 01-4-.8L3 21l1.8-5A8 8 0 013 12c0-4.4 4-8 9-8s9 3.6 9 8z" />
                  </svg>
                </div>
                <h4>話すだけ</h4>
                <p>白紙を埋める必要はゼロ。会話の流れにのって、自然と1日が言葉になる。</p>
              </div>
              <div className={styles.feat}>
                <div className={styles.featIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 21s-7-4.5-7-10a5 5 0 019-3 5 5 0 019 3c0 5.5-7 10-7 10z" />
                  </svg>
                </div>
                <h4>共感AI</h4>
                <p>否定しない、急かさない。ぼやきを丁寧に受け止めるAIだから、本音が出やすい。</p>
              </div>
              <div className={styles.feat}>
                <div className={styles.featIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>
                <h4>カレンダー振り返り</h4>
                <p>その日の気分とハイライトが一目で。1ヶ月の自分が、グラデーションで見える。</p>
              </div>
              <div className={styles.feat}>
                <div className={styles.featIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                </div>
                <h4>あなただけの記録</h4>
                <p>会話と日記はあなたの端末で守られた状態に。安心してぼやける場所を。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${styles.final} ${styles.wrap}`}>
        <div className={`${styles.finalDeco} ${styles.fd1}`}>✏️</div>
        <div className={`${styles.finalDeco} ${styles.fd2}`}>💬</div>
        <div className={`${styles.finalDeco} ${styles.fd3}`}>🌙</div>
        <div className={`${styles.finalDeco} ${styles.fd4}`}>📔</div>
        <h2>
          今日のぼやきは、<br />
          <span className={styles.hl}>日記になる。</span>
        </h2>
        <p>iPhoneで無料ダウンロード。今夜から、はじめてみる？</p>
        <div className={`${styles.ctaRow} ${styles.ctaCenter}`}>
          <a className={styles.appBadge} href="#">
            <svg viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div>
              <span className={styles.badgeB1}>Download on the</span>
              <span className={styles.badgeB2}>App Store</span>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footInner}`}>
          <div className={styles.brand}>
            <div className={styles.brandMark}>ぼ</div>
            <div className={styles.brandName}>
              ぼやき日記
            </div>
          </div>
          <div className={styles.footLinks}>
            <a href="/terms">利用規約</a>
            <a href="/privacy">プライバシーポリシー</a>
            <a href="/faq">Q&A</a>
            <a href="/support">お問い合わせ</a>
          </div>
          <div>© 2026 ぼやき日記</div>
        </div>
      </footer>
    </>
  );
}

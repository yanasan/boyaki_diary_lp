"use client";
import { useState } from "react";
import Image from "next/image";
import { companions } from "./companions";
import styles from "./page.module.css";
export default function HomePreview() {
  const [selected, setSelected] = useState(0);
  const companion = companions[selected];
  return <div className={styles.previewArea}>
    <div className={styles.selector} role="group" aria-label="紹介用ホームの相棒を選ぶ">{companions.map((item, index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls="home-preview" onClick={() => setSelected(index)}>
      <Image src={item.image} alt="" width={44} height={44} />
      <span>{item.name}</span>
      </button>)}</div>
    <div className={styles.phone} id="home-preview" data-character={companion.id}>
      <div className={styles.phoneTop} aria-hidden="true">9:41 <span>● ● ▰</span>
      </div>
      <p className={styles.previewBrand}>ぼやき日記</p>
      <div className={styles.homeCard} aria-live="polite" aria-atomic="true">
      <p className={styles.small}>今日も、あなたのペースで。</p>
      <Image src={companion.image} alt={`今日の相棒、${companion.name}`} width={160} height={160} preload />
      <p className={styles.bubble}>{companion.message}</p>
      <p className={styles.small}>{companion.name}と話す</p>
      <div className={styles.mockButton}>今日の日記をはじめる</div>
      </div>
      <div className={styles.recent}>
      <strong>最近の日記</strong>
      <p>ごはんを作れた、いつもの夜</p>
      <span className={styles.small}>忙しかったけれど、少しほっとした。</span>
      </div>
      <div className={styles.mockNav} aria-hidden="true">ホーム　　日記　　ふりかえり</div>
    </div>
      <p className={styles.caption}>紹介用ホームプレビュー・日記の内容はサンプルです。<br />実際の画面・応答とは異なる場合があります。</p>
  </div>;
}

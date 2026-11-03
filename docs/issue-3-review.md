# Issue #3 レビュー記録

## 実装

- DESIGN.mdのクリーム・黄色マーカー・キャラクター別配色を使用。
- 既存のキャラクター画像、LPの「ぼ」表示、アプリアイコン・faviconを維持。新規ブランドマークなし。
- 相棒選択はネイティブbuttonとaria-pressedで実装。Tabで移動し、Enter/Spaceで選択。紹介用ホームの画像・色・名前・メッセージが連動し、ライブ領域で更新を通知。
- FAQはネイティブdetails/summary。スキップリンク、フォーカス表示、画像代替テキスト、prefers-reduced-motion対応。
- 週間振り返り、記憶ノート、後日記入、利用の3ステップ、ダウンロード・課金案内を追加。既存の問い合わせ・規約・プライバシー・FAQ導線を維持。
- 紹介用画面と会話例はサンプルと明記。操作できない紹介用UIはbuttonやリンクにしていない。
- メタデータ・構造化データ・OG画像のコピーと配色を更新。

## 文言の照合

- app/terms/page.tsx 第5条：AI対話はチケットを使用、アプリ内購入あり、枚数・価格は購入画面で表示。LPでは固定価格や無料利用回数を記載していない。
- app/privacy/page.tsx 第3・5節：外部AIへの送信、記憶の生成、記憶の個別確認・削除は提供予定で現時点は問い合わせ対応。LPにも同じ現状を明記。
- 無制限の記憶、端末内だけの保存、継続率、所要時間の数値は訴求しない。

## この環境での検証

- npm run lint：成功（全リポジトリ）。
- npx tsc --noEmit：成功。初期状態にnext-env.d.tsがないため、Next.jsの型・画像型参照をローカル生成（gitignore対象）。
- git diff --check：成功。
- npm run build：Turbopackがコンパイル段階で完了せず中断。
- npm run build -- --webpack：再実行してもNext.js内部の「Could not parse output from TypeScript's --showConfig.」で失敗。tsc --showConfigの直接実行は成功。原因の確定と本番ビルドの成功確認は未完了。型チェックを無効化する設定変更はしていない。
- ブラウザー検証：ローカルサーバー起動がlisten EPERMで失敗。環境のChromiumも専用WebGLポリシーを必要とし起動できず、実画面・操作・画像応答・JSエラーは未検証。
- App Storeの公開ページ：取得できず、公開版の画面・提供条件との最終照合は未完了。

### 監督者レビュー対応の再検証（2026-11-03）

- `app/page.module.css` の3人分の属性単体セレクタを、`.character[data-character="…"], .phone[data-character="…"]` に修正。`app/page.tsx` の紹介カードと `app/home-preview.tsx` のプレビューが実際に持つローカルクラスを使用し、配色変数と子要素への継承を維持。globals.css・ビルド設定は変更していない。
- `npx next build --webpack`：修正後に実行・再実行したが、いずれも `Could not parse output from TypeScript's --showConfig.` で失敗。本番ビルドの成功確認は未完了。直接の `npx tsc --showConfig` は有効なJSONを出力する一方、Next.jsの `runTypeScriptCli` 経由では終了コード0でもstdout/stderrが空。単純なNode子プロセスの標準出力取得でも同様の現象を確認しており、この環境の子プロセス実行に制約がある。
- 補足検証：Next.js同梱の `postcss-modules-local-by-default` を `mode: 'pure'` でCSS全体に適用して成功。修正前の属性単体セレクタに戻した入力では `is not pure` エラーを再現。これはCSSの検証であり、本番ビルド成功の代替ではない。
- `npm run build`（Turbopack）：実行したが `Creating an optimized production build ...` 以降進まず中断（終了コード130）。フォント取得エラーは表示されておらず、停止原因は未確定。
- `npm run lint`：成功。
- `npx tsc --noEmit`：成功。
- `git diff --check`：成功。
- 既存の作業ブランチ `codex/issue-3-lp-refresh` を維持。push・PR作成なし。

## 未解決・公開前の確認

1. 通常の実行環境でnpm run buildを成功させる。
2. 320 / 390 / 768 / 1024 / 1440pxで横スクロール、重なり、欠損画像、JSエラーがないことを確認。
3. 全相棒の選択状態・画像・色・メッセージ、FAQの開閉、Tab/Enter/Spaceとフォーカス、動きを抑える設定を確認。
4. App Storeリンク、問い合わせ・規約・プライバシー・FAQ、OG画像のHTTP応答と日本語描画を確認。
5. 新ストア用スクリーンショットとアプリ実装はこのリポジトリにないため、週間振り返りの公開状況・条件、過去日の記入範囲、3人の最新の設定・会話トーンを監督者が照合する。
6. 記憶ノートのアプリ内確認・削除が既に公開済みなら、現ポリシーとの相違を解消してからLP文言を更新する。未提供の操作を使えるようには表示していない。
7. 新ストア画像は未提供。既存の水彩キャラクター3点を使用し、追加画像は生成していない。

作業ブランチはcodex/issue-3-lp-refresh。push・PR作成なし。

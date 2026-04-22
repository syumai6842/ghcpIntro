## Plan: 神山高専紹介LP

GitHub Pages 上で公開する 1 ページ完結の紹介 LP を Astro + Tailwind で構築する。主対象は中高生・受験検討者で、prty.jp のような大きな余白、強いタイポグラフィ、洗練された配色を参考にしつつ、教育機関として読みにくくならない範囲で先進的・クリエイティブな表現に寄せる。現時点では素材・正式文言が未確定のため、まずは仮文言ベースで情報設計と UI 骨格を完成させ、後から差し替え可能な構成を優先する。

**Steps**
1. Phase 1: プロジェクト基盤を作る。Astro プロジェクト一式を追加し、GitHub Pages 用の base/site 設定、Tailwind 導入、開発用スクリプトを整える。これは以降のすべての工程の前提。
2. Phase 1: GitHub Pages デプロイ手段を決めて設定する。GitHub Actions による build/deploy を追加し、公開 URL を syumai6842.github.io/ghcpIntro/ に固定する。Step 1 に依存。
3. Phase 2: LP の情報設計を確定する。最低限のセクションは Hero、学校の特徴、学びの内容、問い合わせ・リンクとし、必要に応じて学校生活やアクセスは将来追加しやすい余地を残す。Step 1 と並行で文案整理は可能だが、実装着手は Step 1 後。
4. Phase 2: デザインシステムの最小単位を先に定義する。色、余白、見出しサイズ、本文幅、ボタン、セクション間のリズムをトークン化し、prty.jp 風の空気感を模倣するのではなく、参考要素を神山高専向けに翻訳する。Step 3 に依存。
5. Phase 3: ページ骨格を実装する。共通 Layout、SEO メタ、ヘッダー相当の導線、各セクション、フッターを作り、各セクションは後から写真や正式文言に差し替えやすいコンポーネント構成にする。Step 4 に依存。
6. Phase 3: 仮コンテンツを埋める。受験検討者向けに「どんな学校か」「何を学べるか」「なぜここがユニークか」「どこで詳しく見るか」が 1 スクロールごとに明確になる文脈で仮コピーを書く。Step 5 に依存。
7. Phase 4: レスポンシブ調整と細部の演出を整える。モバイル優先で縦積み時の余白、見出し改行、背景表現、軽いアニメーションを調整し、過度な演出は避ける。Step 5 と Step 6 に依存。
8. Phase 4: 基本的な品質確認を追加する。少なくともトップページの表示、主要リンク、生存確認レベルの Playwright テストを用意し、デプロイ前に build と E2E が通る状態にする。Step 7 に依存。
9. Phase 5: 差し替えポイントを明文化する。正式ロゴ、写真、学校説明文、公式リンク一覧など、後からユーザーが埋めるべき項目を README に整理する。Step 8 と並行可能。

**Relevant files**
- /workspaces/ghcpIntro/README.md — 既存。最終的にセットアップ手順、デプロイ方法、差し替えポイント、素材差し替えルールを記載する。
- /workspaces/ghcpIntro/.devcontainer/devcontainer.json — 既存。Astro/Tailwind/Playwright 前提の開発環境として再利用し、必要なら postCreateCommand を実態に合わせて調整する。
- /workspaces/ghcpIntro/package.json — 新規。依存関係、scripts、Pages 用 build コマンドを定義する。
- /workspaces/ghcpIntro/astro.config.mjs または astro.config.ts — 新規。site/base/outDir など GitHub Pages 向け設定を定義する。
- /workspaces/ghcpIntro/src/pages/index.astro — 新規。LP 本体。
- /workspaces/ghcpIntro/src/layouts/Layout.astro — 新規。共通 head、フォント、メタ情報、全体背景を管理する。
- /workspaces/ghcpIntro/src/components/ 配下 — 新規。Hero、Feature、Learning、Contact などのセクション部品を分離する。
- /workspaces/ghcpIntro/src/styles/ またはグローバル CSS — 新規。配色、タイポ、余白トークン、背景表現をまとめる。
- /workspaces/ghcpIntro/public/ 配下 — 新規。ロゴや写真の配置先。現時点では仮素材またはプレースホルダーを置く。
- /workspaces/ghcpIntro/.github/workflows/ 配下 — 新規。GitHub Pages 自動デプロイを設定する。
- /workspaces/ghcpIntro/tests/ または e2e/ 配下 — 新規。Playwright の最小確認を置く。

**Verification**
1. 依存関係インストール後に開発サーバーが起動し、トップページがローカルで表示されることを確認する。
2. production build が成功し、base が /ghcpIntro/ でもアセット参照切れが起きないことを確認する。
3. モバイル幅とデスクトップ幅で Hero、特徴、学び、問い合わせの各セクションが破綻しないことを確認する。
4. Playwright でトップページ表示と主要リンク遷移の最小シナリオが通ることを確認する。
5. GitHub Pages デプロイ後、公開 URL でタイトル、OG 基本設定、リンク、レイアウト崩れの有無を確認する。
6. README に、正式素材未投入の箇所と差し替え手順が明記されていることを確認する。

**Decisions**
- スコープに含むのは 1 ページの LP のみ。複数下層ページ、CMS、ブログ、入試詳細ページは今回の対象外。
- 初期段階では仮文言・仮素材を許容し、まず完成形の体験と構造を作る。
- デザイン参照元の要素は余白設計、タイポグラフィ、色使いに限定し、情報構造そのものは受験検討者向けに最適化する。
- 公開 URL は GitHub Pages 既定 URL を前提にする。
- 公式情報源が未提示のため、学校固有の事実情報は後でユーザー確認が必要なプレースホルダーとして扱う。

**Further Considerations**
1. 仮コピーの出典をどうするか。推奨は、まず一般化した仮文言で構成を作り、その後に公式情報で差し替える進め方。
2. 写真がない状態でのビジュアル表現をどうするか。推奨は、抽象背景、図形、タイポ主体で成立させ、後から写真差し替え可能にする構成。
3. 公式リンクの最低限セットを決める必要がある。推奨は、学校公式サイト、SNS、問い合わせ先の 3 つを最低ラインとする。
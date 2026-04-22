# ghcpIntro

神山まるごと高専の受験検討者向け 1 ページ LP です。Astro + Tailwind で構築し、GitHub Pages で公開します。

## 公開URL

- https://syumai6842.github.io/ghcpIntro/

## 技術スタック

- Astro
- Tailwind CSS
- Playwright
- GitHub Actions (Pages deploy)

## セットアップ

```bash
npm ci
```

## 開発

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## E2Eテスト

初回はブラウザをインストールしてから実行します。

```bash
npx playwright install --with-deps chromium
npm run test:e2e
```

## デプロイ

`main` ブランチへの push で [.github/workflows/deploy.yml](.github/workflows/deploy.yml) が実行され、GitHub Pages にデプロイされます。

## コンテンツ更新ルール

- 一次ソースは公式サイト https://kamiyama.ac.jp/
- リンク先が変更された場合は、次のファイルを更新
	- `src/components/HeroSection.astro`
	- `src/components/LearningSection.astro`
	- `src/components/ContactSection.astro`
- メタ情報を変更する場合は `src/layouts/Layout.astro` を更新

## 注意事項

- 本LPは紹介目的の1ページ構成です。詳細・最新情報は必ず公式サイトを参照してください。

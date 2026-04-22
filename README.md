# 神山まるごと高専 受験生向けトップページ

このリポジトリは、受験生向けの学校紹介トップページ初版です。

## ローカル開発

```bash
npm install
npm run dev
```

開発サーバー: `http://localhost:4321/ghcpIntro/`

## ビルド

```bash
npm run build
npm run preview
```

## 仕様ドキュメント

- `SPEC/requirements.md`
- `SPEC/design.md`
- `SPEC/tasks.md`

## デプロイ

GitHub ActionsのPagesワークフローで公開します。
`astro.config.mjs` に以下を設定済みです。

- `site: https://syumai6842.github.io`
- `base: /ghcpIntro`

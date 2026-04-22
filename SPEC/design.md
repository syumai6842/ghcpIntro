# Design

## Architecture
- フレームワーク: Astro
- 配置: 単一ページ (`src/pages/index.astro`)
- スタイル: グローバルCSS (`src/styles/global.css`)
- 配信: GitHub Pages (`astro.config.mjs` で `site` と `base` を指定)

## Data Flow
1. ブラウザがトップページへアクセス
2. Astroが静的HTMLを配信
3. CSSでレイアウト・色・アニメーションを適用
4. CTAクリックで該当セクションへ遷移

## UI Structure
- Hero: 価値提案 + CTA
- Features: 特徴3点カード
- Curriculum: 学びの内容
- Admissions: 入試導線
- Access: 所在地と交通のプレースホルダー

## Error Handling Matrix
- ビルド失敗: CIで検知しデプロイ停止
- コンテンツ未確定: ダミーテキストを表示し公開継続
- 画像未配置: 初版はテキスト中心のため影響を限定

## Testing Strategy
- `npm run build` で静的生成の成立を確認
- 手動確認: 主要幅（モバイル/デスクトップ）で視認性を確認
- 手動確認: CTAリンクの動作確認
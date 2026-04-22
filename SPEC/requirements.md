# Requirements

## Scope
- 初回公開スコープは受験生向けトップページ1枚とする。
- 対象ユーザーは中学生・受験生を最優先とする。

## EARS Requirements
1. WHEN ユーザーがトップページを開いたとき, THE SYSTEM SHALL ヒーローセクションで学校の価値提案と主導線を表示する。
2. WHEN ユーザーがトップページを閲覧するとき, THE SYSTEM SHALL 学校の特徴を3点で提示する。
3. WHEN ユーザーが学びの内容を確認したいとき, THE SYSTEM SHALL カリキュラム概要を一覧で提示する。
4. WHEN ユーザーが入試情報に進みたいとき, THE SYSTEM SHALL 入試導線CTAを提供する。
5. WHEN ユーザーが所在地を確認したいとき, THE SYSTEM SHALL アクセス情報セクションを提示する。
6. WHILE サイトがモバイル端末で表示されている, THE SYSTEM SHALL レイアウト崩れなく主要コンテンツを表示する。
7. IF 実素材が未確定である, THEN THE SYSTEM SHALL 差し替え可能なダミー文言でページを公開可能な状態にする。
8. WHEN リポジトリへ変更が反映されたとき, THE SYSTEM SHALL GitHub Pages向けにビルド可能である。

## Acceptance Criteria
- トップページに次のセクションが存在する: ヒーロー、特徴3点、学びの内容、入試導線、アクセス。
- 主要CTAが視認可能で、クリック可能である。
- `npm run build` が成功する。
- GitHub Pages公開ワークフローが存在する。
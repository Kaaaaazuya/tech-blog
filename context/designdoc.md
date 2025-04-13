# 設計ドキュメント

## 要件

- 静的なブログページ（SSG）

  - MDX形式の記事をGitリポジトリで管理
  - フロントマターでメタデータ管理（タイトル、日付、タグなど）

- リアルタイムコメント

  - Supabase Realtimeを活用
  - 認証済みユーザーのみコメント可能
  - いいね機能の実装

- 厳格な契約プログラミング
  - Zodによる型安全な実装
  - PostgreSQLの制約とRLSによるデータ保護

## 設計のポイント

- Server Components でDB取得し、表示を最適化

- Client Componentsでコメントリアルタイム更新

- Zodでデータバリデーションを厳密化

- PostgreSQLの制約とRLSで多層防御を実現

- GitHub ActionsとSupabase CLIでCI/CDを簡略化

## UIフレームワーク

- Tailwind CSS + shadcn/ui

  - シンプルで軽量、高いカスタマイズ性
  - コンポーネントの再利用性を重視

- レスポンシブデザイン

  - モバイル（375px〜）
  - タブレット（768px〜）
  - デスクトップ（1280px〜）

- アイコンとフォント
  - Lucide Iconsを使用
  - Google Fonts（Inter）を採用

## 認証機能

- Supabase Authによる認証

  - OAuth（GitHub, Google）
  - Passkey認証（WebAuthn）

- 管理者権限
  - 特定ユーザーに管理者メタデータを付与
  - コメント削除・ユーザー停止機能

## デプロイ戦略

- 環境分離

  - 開発環境：Vercel Preview + Supabase開発プロジェクト
  - 本番環境：Vercel本番 + Supabase本番プロジェクト

- CDN活用
  - Vercel CDNによる静的コンテンツ配信
  - 効率的なキャッシュ戦略

## 非機能要件

- セキュリティ重視

  - RLSによる厳格なアクセス制御
  - XSS、CSRF対策の実装

- スケーラビリティとパフォーマンス重視

  - SSGによる高速表示
  - 効率的なデータフェッチング

- メンテナンス性の向上
  - 明確なコード構造
  - 包括的なドキュメント

## 品質保証

- Unit Test（Vitest）

- Integration Test（Supabaseローカル環境）

- E2E Test（Playwright）

- GitHub Actionsで自動化

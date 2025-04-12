# インフラ構成・開発・デプロイフロー

## インフラ構成

- ホスティング: Vercel

- DB/Auth/Storage: Supabase

- CDN: Vercel CDN (静的ページ配信)

- リアルタイム通信: Supabase Realtime

- ストレージ: Supabase Storage

## 開発・デプロイフロー

- GitHub Actionsでテスト実行（ユニット, E2E）

- テスト通過後、Vercelに自動デプロイ

- Supabase CLI経由でマイグレーション適用（必要時）

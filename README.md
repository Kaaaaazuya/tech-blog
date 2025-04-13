# Tech Blog

技術情報やナレッジを共有するためのテックブログプラットフォームです。Next.jsを活用した最新のJamstackアーキテクチャで構築されています。

## 技術スタック

- [Next.js](https://nextjs.org) - Reactフレームワーク（App Router使用）
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発環境
- [Tailwind CSS](https://tailwindcss.com) - ユーティリティファーストのCSSフレームワーク
- [pnpm](https://pnpm.io/) - 高速でディスク効率の良いパッケージマネージャー
- [ESLint](https://eslint.org/) &
  [Prettier](https://prettier.io/) - コード品質管理
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 開発環境のセットアップ

### 必要条件

- Node.js (v22.14.0以上推奨)
- pnpm (v10.5.2以上)

### インストール

リポジトリをクローンし、依存関係をインストールします：

```bash
# リポジトリのクローン
git clone <リポジトリURL>
cd tech-blog

# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)にアクセスして開発中のブログを確認できます。

### ビルドとプレビュー

```bash
# 本番用ビルド
pnpm build

# ビルド結果のプレビュー
pnpm start
```

## プロジェクト構造

```
src/                  # ソースコード
├── app/              # Next.js App Router
│   ├── blog/         # ブログ関連ページ
│   └── page.tsx      # トップページ
├── assets/           # 画像などの静的アセット
├── lib/              # ユーティリティ関数
│   └── blog/         # ブログ関連機能
└── styles/           # グローバルスタイル
```

## 品質管理

```bash
# リンターの実行
pnpm lint

# コードのフォーマット
pnpm format

# 型チェック
pnpm typecheck
```

## デプロイ

このプロジェクトは[Vercel](https://vercel.com)にデプロイされています。メインブランチへのプッシュにより自動的にデプロイが行われます。

## コントリビューション

1. このリポジトリをフォークします
2. 機能ブランチを作成します (`git checkout -b feature/amazing-feature`)
3. 変更をコミットします (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュします (`git push origin feature/amazing-feature`)
5. プルリクエストを作成します

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下で公開されています。

type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
};

// サイト全体で共通のメタデータ設定
export const siteConfig: SiteConfig = {
  name: "テックブログ",
  description:
    "最新の技術トレンド、開発のヒント、プログラミングのコツをお届けする技術ブログ",
  url: "https://example.com", // 実際のドメインに変更してください
  ogImage: "/assets/og-image.jpg", // Open Graph用の画像パス
  author: "kinakomochi",
};

// 日付をフォーマットするヘルパー関数
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ページタイトルを生成するヘルパー関数
export function generateTitle(title?: string): string {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}

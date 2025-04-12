import "@/styles/globals.css";

import type { Metadata } from "next";
import { siteConfig } from "@/lib/metadata";

type RootLayoutProps = {
  children: React.ReactNode;
};

// レイアウトも静的に生成されることを明示
export const dynamic = "force-static";

// サイト全体の基本メタデータを設定
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["プログラミング", "Web開発", "技術ブログ", "Next.js", "React"],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="">{props.children}</body>
    </html>
  );
}

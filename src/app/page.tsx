import type { Metadata } from "next";
import Link from "next/link";
import { env } from "@/env";
import { siteConfig } from "@/lib/metadata";

// このページが静的に生成されることを明示
export const dynamic = "force-static";

// ホームページ用のメタデータを設定
export const metadata: Metadata = {
  title: siteConfig.name,
  description: `${siteConfig.description} ホームページへようこそ。`,
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: `${siteConfig.description} ホームページへようこそ。`,
  },
};

export default function Home() {
  const url = env.DEBUG_URL;

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="flex w-full max-w-2xl flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-bold">テックブログへようこそ</h1>
          <p className="mb-8 text-xl">
            最新の技術トレンドや開発のヒントをお届けします
          </p>

          <Link
            href="/blog"
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            ブログ記事を読む
          </Link>

          <p className="mt-12 text-sm text-gray-500">{url}</p>
        </div>
      </div>
    </main>
  );
}

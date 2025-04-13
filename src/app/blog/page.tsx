import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog/posts";

// このページは静的生成されることを明示
export const dynamic = "force-static";

// ブログ一覧ページのメタデータを設定
export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description:
    "技術トレンド、開発のヒント、プログラミングのコツに関する記事の一覧です。",
  openGraph: {
    type: "website",
    title: "ブログ記事一覧 | テックブログ",
    description:
      "技術トレンド、開発のヒント、プログラミングのコツに関する記事の一覧です。",
  },
};

export default async function BlogPage() {
  // ビルド時にすべての記事データを取得
  const posts = await getAllPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">ブログ記事一覧</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
                <div className="mb-2 text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("ja-JP")} |{" "}
                  {post.author}
                </div>
                <p className="text-gray-700">{post.excerpt}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

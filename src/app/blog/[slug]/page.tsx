import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// このページは静的生成されることを明示
export const dynamic = "force-static";

type Params = Promise<{ slug: string }>;

// 動的な記事ページのメタデータを生成する関数
export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;

  // 記事データを取得
  const post = await getPostBySlug(slug);

  // 記事が見つからない場合は404メタデータを返す
  if (!post) {
    return {
      title: "記事が見つかりません",
      description: "お探しの記事は見つかりませんでした。",
    };
  }

  // 親メタデータからサイト名などを取得
  const previousImages = (await parent).openGraph?.images ?? [];

  // 記事タイトルの最初の60文字をOGのタイトルとして使用
  const truncatedTitle =
    post.title.length > 60 ? `${post.title.substring(0, 57)}...` : post.title;

  // 記事の先頭140文字を抜粋としてメタ説明に使用
  const description =
    post.excerpt.length > 140
      ? `${post.excerpt.substring(0, 137)}...`
      : post.excerpt;

  return {
    title: post.title,
    description: description,
    keywords: [...post.tags, "ブログ", "技術記事"],
    authors: [{ name: post.author }],
    openGraph: {
      title: truncatedTitle,
      description: description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [...previousImages],
    },
  };
}

// ビルド時に生成する静的パスを定義
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // 記事が見つからない場合は404ページを表示
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-4 inline-block text-blue-600 hover:underline"
        >
          ← 記事一覧に戻る
        </Link>

        <article className="mt-6">
          <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>

          <div className="mb-6 text-gray-500">
            {new Date(post.date).toLocaleDateString("ja-JP")} | {post.author}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}

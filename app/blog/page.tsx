import { getAllPosts } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
        ブログ
      </h1>

      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block">
                {post.image && (
                  <div className="relative h-96 bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-sky-700 hover:text-sky-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-end">
                    <span className="text-sky-600 hover:text-sky-700 text-sm font-semibold">
                      続きを読む →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-4 text-sky-700">
            コンテンツ準備中
          </h2>
          <p className="text-gray-600 mb-4">
            現在、ブログコンテンツを準備中です。
          </p>
          <p className="text-sm text-gray-500">
            記事を追加するには、<code className="bg-gray-100 px-2 py-1 rounded">content/blog/</code>ディレクトリに
            Markdownファイル（.md）を配置してください。
          </p>
        </div>
      )}
    </div>
  )
}
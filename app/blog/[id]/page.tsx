"use client"

import { useLanguage } from "@/contexts/language-context"
import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BlogPost } from "@/lib/blog"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { language } = useLanguage()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      const { id } = await params
      
      const response = await fetch(`/api/blog/post?slug=${id}&lang=${language}`)
      if (response.ok) {
        const data = await response.json()
        setPost(data)
      } else {
        setPost(null)
      }
      setLoading(false)
    }
    fetchPost()
  }, [params, language])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <p>{language === 'en' ? 'Loading...' : '読み込み中...'}</p>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-sky-600 hover:text-sky-700 text-sm font-semibold inline-flex items-center"
        >
          ← {language === 'en' ? 'Back to Blog' : 'ブログ一覧に戻る'}
        </Link>
      </div>

      <article className="bg-white p-8 rounded-lg shadow-sm">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-sky-700">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div>
              <span className="mr-4">
                {new Date(post.date).toLocaleDateString(
                  language === "en" ? "en-US" : "ja-JP",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  }
                )}
              </span>
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        <div className="prose prose-sky max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mt-8 mb-4 text-sky-700 border-b pb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold mt-6 mb-3 text-sky-700">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mt-4 mb-2 text-sky-600">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed text-gray-700">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-sky-700">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic">
                  {children}
                </em>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-sky-600 underline hover:text-sky-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-sky-200 pl-4 my-4 italic text-gray-600">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-sky-50">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-300 px-4 py-2">
                  {children}
                </td>
              ),
              hr: () => (
                <hr className="my-8 border-gray-200" />
              ),
              img: ({ src, alt }) => {
                if (!src) return null
                return (
                  <Image
                    src={src}
                    alt={alt || ""}
                    width={800}
                    height={400}
                    className="rounded-lg shadow-sm w-full h-auto my-6"
                  />
                )
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
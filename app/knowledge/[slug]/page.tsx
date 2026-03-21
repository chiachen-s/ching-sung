import type { Metadata } from 'next'
export const revalidate = 60
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { getArticleBySlug, getArticles, urlFor } from '@/lib/sanity'
import { mockArticles } from '@/lib/mock-data'
import { CATEGORY_LABELS } from '@/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  const all = articles.length > 0 ? articles : mockArticles
  return all.map((a: { slug: string }) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return { title: '找不到文章' }
  return { title: article.title, description: article.excerpt }
}

const categoryColors: Record<string, string> = {
  farming: 'bg-green-100 text-green-700',
  solar_term: 'bg-blue-100 text-blue-700',
  recipe: 'bg-orange-100 text-orange-700',
  diary: 'bg-purple-100 text-purple-700',
}

export default async function ArticlePage({ params }: Props) {
  let article = await getArticleBySlug(params.slug)
  if (!article) {
    article = mockArticles.find((a) => a.slug === params.slug)
  }
  if (!article) notFound()

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const allArticles = await getArticles()
  const source = allArticles.length > 0 ? allArticles : mockArticles
  const relatedArticles = source
    .filter((a: { _id: string; category: string }) => a._id !== article._id && a.category === article.category)
    .slice(0, 3)

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Article header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-green mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回農業知識
          </Link>

          <span className={`tag text-xs mb-4 ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
            {CATEGORY_LABELS[article.category]}
          </span>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-gray-500 text-lg leading-relaxed mb-6">{article.excerpt}</p>
          )}

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {formattedDate}
            <span className="mx-2">·</span>
            <span>青Sung 農場</span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-8">
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-green-pale to-brand-green/10 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
          {article.coverImage ? (
            <Image
              src={urlFor(article.coverImage).width(800).height(450).url()}
              alt={article.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center text-brand-green/30">
              <BookOpen className="w-16 h-16 mx-auto mb-3 opacity-40" />
              <p className="text-sm">文章封面圖片</p>
              <p className="text-xs mt-1">（待上傳）</p>
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white rounded-2xl p-8 prose prose-lg max-w-none">
          <PortableText value={article.body} />
        </div>

        {/* Share */}
        <div className="mt-8 p-6 bg-brand-green-pale rounded-2xl text-center">
          <p className="text-brand-green font-medium mb-3">覺得實用嗎？分享給朋友 🌱</p>
          <div className="flex justify-center gap-3">
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://chingsungfarm.com/knowledge/${article.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#06C755] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              分享到 LINE
            </a>
          </div>
        </div>

        {/* Related */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-xl font-bold text-gray-800 mb-6">相關文章</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((related: { _id: string; slug: string; title: string; category: string }) => (
                <Link key={related._id} href={`/knowledge/${related.slug}`} className="card group p-4 flex gap-4 bg-white">
                  <div className="w-16 h-16 bg-brand-green-pale rounded-xl flex-shrink-0 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-brand-green/40" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm group-hover:text-brand-green transition-colors line-clamp-2">
                      {related.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{CATEGORY_LABELS[related.category]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, BookOpen } from 'lucide-react'
import type { Article } from '@/types'
import { CATEGORY_LABELS } from '@/types'
import { urlFor } from '@/lib/sanity'

interface Props {
  article: Article
}

const categoryColors: Record<string, string> = {
  farming: 'bg-green-100 text-green-700',
  solar_term: 'bg-blue-100 text-blue-700',
  recipe: 'bg-orange-100 text-orange-700',
  diary: 'bg-purple-100 text-purple-700',
}

export default function ArticleCard({ article }: Props) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/knowledge/${article.slug}`} className="card group block">
      <div className="aspect-[16/9] bg-gradient-to-br from-brand-green-pale to-brand-green/10 flex items-center justify-center overflow-hidden">
        {article.coverImage ? (
          <Image
            src={urlFor(article.coverImage).width(600).height(338).url()}
            alt={article.title}
            width={600}
            height={338}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <BookOpen className="w-10 h-10 text-brand-green/30" />
        )}
      </div>

      <div className="p-5">
        <span className={`tag text-xs mb-3 ${categoryColors[article.category] || 'bg-gray-100 text-gray-600'}`}>
          {CATEGORY_LABELS[article.category]}
        </span>

        <h3 className="font-serif font-bold text-gray-800 mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
          {article.title}
        </h3>

        {article.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
            {article.excerpt}
          </p>
        )}

        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Calendar className="w-3.5 h-3.5" />
          {formattedDate}
        </div>
      </div>
    </Link>
  )
}

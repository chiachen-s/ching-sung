import type { Metadata } from 'next'
import { getArticles } from '@/lib/sanity'
import { mockArticles } from '@/lib/mock-data'
import ArticleCard from '@/components/ArticleCard'
import { BookOpen } from 'lucide-react'
import { CATEGORY_LABELS, type Article } from '@/types'

export const metadata: Metadata = {
  title: '農業知識',
  description: '分享節氣農作、種植技巧、食譜料理、農場日誌，讓你更認識台灣農業。',
}

const categories = [
  { value: 'all', label: '全部' },
  { value: 'farming', label: CATEGORY_LABELS.farming },
  { value: 'solar_term', label: CATEGORY_LABELS.solar_term },
  { value: 'recipe', label: CATEGORY_LABELS.recipe },
  { value: 'diary', label: CATEGORY_LABELS.diary },
]

export default async function KnowledgePage() {
  const sanityArticles = await getArticles()
  const articles: Article[] = sanityArticles.length > 0 ? sanityArticles : mockArticles

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            Knowledge
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">農業知識</h1>
          <p className="text-white/70 text-lg">節氣農作、種植技巧、食譜料理、農場日誌</p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat.value === 'all'
                    ? 'bg-brand-green text-white'
                    : 'bg-white text-gray-600 hover:bg-brand-green-pale hover:text-brand-green border border-gray-200'
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>文章更新中，敬請期待</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

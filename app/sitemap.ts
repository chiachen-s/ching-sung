import type { MetadataRoute } from 'next'
import { getArticles, getProducts } from '@/lib/sanity'
import type { Article, Product } from '@/types'

const BASE_URL = 'https://chingsungfarm.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, products] = await Promise.all([getArticles(), getProducts()])
  const now = new Date()

  const articleUrls = articles.map((a: Article) => ({
    url: `${BASE_URL}/knowledge/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const productUrls = products.map((p: Product) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/knowledge`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...productUrls,
    ...articleUrls,
  ]
}

import type { Metadata } from 'next'
export const revalidate = 60
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ShoppingBasket, ExternalLink } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { getProductBySlug, getProducts, urlFor } from '@/lib/sanity'
import { mockProducts } from '@/lib/mock-data'
import { CATEGORY_LABELS, SEASON_LABELS, STATUS_LABELS } from '@/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const products = await getProducts()
  const all = products.length > 0 ? products : mockProducts
  return all.map((p: { slug: string }) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)
  if (!product) return { title: '找不到商品' }
  return { title: product.name }
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  available: { bg: 'bg-green-100', text: 'text-green-700', label: STATUS_LABELS.available },
  soldout: { bg: 'bg-gray-100', text: 'text-gray-500', label: STATUS_LABELS.soldout },
  coming_soon: { bg: 'bg-amber-100', text: 'text-amber-700', label: STATUS_LABELS.coming_soon },
}

export default async function ProductPage({ params }: Props) {
  let product = await getProductBySlug(params.slug)
  if (!product) {
    product = mockProducts.find((p) => p.slug === params.slug)
  }
  if (!product) notFound()

  const status = statusStyles[product.status]

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-green mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回農產品
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-brand-yellow/10 to-brand-green-pale rounded-2xl flex items-center justify-center overflow-hidden">
            {product.coverImage ? (
              <Image
                src={urlFor(product.coverImage).width(600).height(600).url()}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-brand-green/30">
                <ShoppingBasket className="w-20 h-20 mx-auto mb-3 opacity-40" />
                <p className="text-sm">產品照片</p>
                <p className="text-xs mt-1">（待上傳）</p>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {/* Category + Status */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-brand-yellow font-medium">
                {CATEGORY_LABELS[product.category]}
              </span>
              <span className="text-gray-300">·</span>
              <span className={`tag text-xs ${status.bg} ${status.text}`}>
                {status.label}
              </span>
            </div>

            <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {product.excerpt && (
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.excerpt}</p>
            )}

            {/* Description */}
            <div className="bg-white rounded-xl p-5 mb-6 prose max-w-none">
              <PortableText value={product.description} />
            </div>

            {/* Seasons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm text-gray-500 mr-1">產季：</span>
              {product.seasons.map((s: string) => (
                <span key={s} className="bg-brand-green-pale text-brand-green text-sm px-3 py-1 rounded-full">
                  {SEASON_LABELS[s]}季
                </span>
              ))}
            </div>

            {/* Only allow http/https to prevent javascript: injection */}
            {product.status === 'available' && product.orderLink && /^https?:\/\//.test(product.orderLink) ? (
              <a
                href={product.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center flex items-center justify-center gap-2"
              >
                <ShoppingBasket className="w-4 h-4" />
                立即訂購
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : product.status === 'coming_soon' ? (
              <Link href="/contact" className="btn-outline w-full text-center block">
                想收到開賣通知？加入 LINE
              </Link>
            ) : (
              <div className="w-full text-center bg-gray-100 text-gray-400 px-6 py-3 rounded-lg font-medium">
                目前已售完，下次再來喔
              </div>
            )}

            <p className="text-xs text-gray-400 mt-3 text-center">
              訂購後我們會在 LINE 上回覆確認與付款資訊
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

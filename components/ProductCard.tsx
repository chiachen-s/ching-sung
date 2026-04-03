import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBasket } from 'lucide-react'
import type { Product } from '@/types'
import { CATEGORY_LABELS, SEASON_LABELS, STATUS_LABELS } from '@/types'
import { urlFor } from '@/lib/sanity'

interface Props {
  product: Product
}

const statusStyles: Record<string, string> = {
  available: 'bg-green-100 text-green-700',
  soldout: 'bg-gray-100 text-gray-500',
  coming_soon: 'bg-amber-100 text-amber-700',
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.slug}`} className="card group block">
      <div className="aspect-square bg-gradient-to-br from-brand-green-bright/10 to-brand-green-pale flex items-center justify-center overflow-hidden relative">
        {product.coverImage ? (
          <Image
            src={urlFor(product.coverImage).width(600).height(600).url()}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <ShoppingBasket className="w-12 h-12 text-brand-green/30" />
        )}
        <div className="absolute top-3 right-3">
          <span className={`tag text-xs font-semibold ${statusStyles[product.status]}`}>
            {STATUS_LABELS[product.status]}
          </span>
        </div>
      </div>

      <div className="p-5">
        <span className="text-xs text-brand-green-mid font-medium">
          {CATEGORY_LABELS[product.category]}
        </span>

        <h3 className="font-serif font-bold text-gray-800 mt-1 mb-2 group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>

        {product.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
            {product.excerpt}
          </p>
        )}

        <div className="flex flex-wrap gap-1">
          {product.seasons.map((s) => (
            <span key={s} className="text-xs bg-brand-green-pale text-brand-green px-2 py-0.5 rounded-full">
              {SEASON_LABELS[s]}季
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

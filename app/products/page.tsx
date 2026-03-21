import type { Metadata } from 'next'
import { getProducts } from '@/lib/sanity'
import { mockProducts } from '@/lib/mock-data'
import ProductCard from '@/components/ProductCard'
import { ShoppingBasket } from 'lucide-react'
import type { Product } from '@/types'

export const metadata: Metadata = {
  title: '農產品',
  description: '青Sung 農產品直售：蔬菜、稻米、水果。當季新鮮，產地直送。',
}

export default async function ProductsPage() {
  const sanityProducts = await getProducts()
  const products: Product[] = sanityProducts.length > 0 ? sanityProducts : mockProducts
  const availableCount = products.filter((p) => p.status === 'available').length

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-4">
            <ShoppingBasket className="w-4 h-4" />
            Products
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">農產品</h1>
          <p className="text-white/70 text-lg">蔬菜・稻米・水果｜當季新鮮・產地直售</p>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-brand-green-pale border-b border-brand-green/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-brand-green">
          <span>🌾</span>
          <span>
            目前供應中 <strong>{availableCount}</strong> 項農產品。訂購請透過 LINE 官方帳號或 Google 表單。
          </span>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              { value: 'all', label: '全部' },
              { value: 'vegetable', label: '🥬 蔬菜' },
              { value: 'rice', label: '🌾 稻米' },
              { value: 'fruit', label: '🍎 水果' },
            ].map((cat) => (
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* How to order */}
          <div className="mt-16 bg-white rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-brand-green mb-6 text-center">如何訂購？</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: '加入 LINE', desc: '掃描下方 QR Code 加入青Sung LINE 官方帳號' },
                { step: '2', title: '填寫訂購表單', desc: '點選圖文選單「訂購表單」，填入品項、數量、收件資訊' },
                { step: '3', title: '等待確認', desc: '我們收到後會在 LINE 回覆確認訂單與付款資訊' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

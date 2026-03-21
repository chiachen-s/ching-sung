import Link from 'next/link'
import { ArrowRight, Leaf, BookOpen, ShoppingBasket, MessageCircle } from 'lucide-react'
import { mockArticles, mockProducts } from '@/lib/mock-data'
import ArticleCard from '@/components/ArticleCard'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  const latestArticles = mockArticles.slice(0, 3)
  const featuredProducts = mockProducts.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #8EC63A 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #3E8C27 0%, transparent 50%)`,
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              青年返鄉 × 友善耕作
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-normal text-white mb-6 leading-tight tracking-tight">
              從田間到你的<br />
              <span className="text-[rgb(227,241,220)]">餐桌</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              青Sung 是一個青年返鄉的農業品牌。<br />
              我們種蔬菜、稻米、水果，也分享農業知識，<br />
              讓每一份食物都有故事。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-primary bg-brand-green-bright text-brand-green hover:bg-brand-green-light hover:text-white font-semibold">
                認識青Sung
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-green">
                加入 LINE 訂購
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0Z" fill="#EAF7E4"/>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: '友善耕作',
                desc: '減量使用農藥，尊重土地生態，讓食物更安心健康。',
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: '農業知識',
                desc: '分享節氣農作、種植技巧、食譜料理，讓你更認識台灣農業。',
              },
              {
                icon: <ShoppingBasket className="w-6 h-6" />,
                title: '產地直售',
                desc: '跳過盤商，直接從農場到你手上，新鮮、價格透明。',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 bg-white">
                <div className="w-12 h-12 bg-brand-green-pale rounded-xl flex items-center justify-center text-brand-green mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-green mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-green-bright font-medium text-sm mb-2 tracking-wider uppercase">Our Story</p>
              <h2 className="section-title">我們的故事</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                「青Sung」來自「青農」與「Sung」姓氏的組合。我們是一個青年返鄉的農業家庭，
                帶著在外學到的知識與技術，回到這塊養育我們的土地。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                我們種蔬菜、稻米、水果，並提供植保機代噴服務。不只是種田，
                更希望透過分享農業知識，讓更多人了解食物從哪裡來。
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-green font-medium hover:gap-3 transition-all">
                了解更多 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              {/* Placeholder for farm photo */}
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-green-pale to-brand-green/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-brand-green/50 p-8">
                  <Leaf className="w-16 h-16 mx-auto mb-4 opacity-40" />
                  <p className="text-sm">農場實景照片</p>
                  <p className="text-xs mt-1">（待上傳）</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-green-bright text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-serif font-bold text-lg">友善耕作</p>
                <p className="text-xs opacity-80">用心種好每一棵</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-brand-green-bright font-medium text-sm mb-1 tracking-wider uppercase">Products</p>
              <h2 className="section-title mb-0">當季農產品</h2>
            </div>
            <Link href="/products" className="text-sm text-brand-green font-medium flex items-center gap-1 hover:gap-2 transition-all">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-brand-green-bright font-medium text-sm mb-1 tracking-wider uppercase">Knowledge</p>
              <h2 className="section-title mb-0">農業知識</h2>
            </div>
            <Link href="/knowledge" className="text-sm text-brand-green font-medium flex items-center gap-1 hover:gap-2 transition-all">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - LINE */}
      <section className="py-16 bg-brand-green">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <MessageCircle className="w-12 h-12 text-brand-green-bright mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            加入 LINE，掌握最新資訊
          </h2>
          <p className="text-white/75 mb-8 leading-relaxed">
            關注青Sung LINE 官方帳號，新品上架、開賣通知、農場動態，<br />
            第一時間收到推播。
          </p>
          <Link href="/contact" className="btn-primary bg-brand-green-bright text-brand-green hover:bg-brand-green-light hover:text-white font-semibold text-base px-8 py-4">
            掃描 QR Code 加入
          </Link>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { Plane, Clock, MapPin, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '服務介紹',
  description: '青Sung 植保機袋噴、施肥服務介紹。',
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-4">
            <Plane className="w-4 h-4" />
            Services
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">服務介紹</h1>
          <p className="text-white/70 text-lg">植保機袋噴・施肥服務</p>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex gap-4">
            <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">服務頁面準備中</p>
              <p className="text-amber-700 text-sm mt-1">
                植保機飛行證照考取中，詳細服務內容與收費將於近期公告。
                如有急迫需求，歡迎直接透過 LINE 聯繫。
              </p>
            </div>
          </div>

          {/* Service overview */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brand-green mb-6">服務項目</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg">🚁</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">植保機袋噴服務</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    使用農業植保機進行農藥噴灑，大幅減少人工施藥時間。
                    均勻噴灑、覆蓋率高，降低農藥用量，作業效率比人工噴藥提升數倍。
                    適合稻田、果園、大面積蔬菜田。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg">🌱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">植保機施肥服務</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    透過植保機進行液態肥料施灑，均勻施肥、效率高。
                    尤其適合追肥作業，省工省時，讓農民從繁重的人工施肥中解放。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why choose us */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brand-green mb-6">為什麼選擇青Sung？</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '✅', title: '自家農場使用', desc: '我們自己的農場也在用，對設備和操作最熟悉' },
                { icon: '💰', title: '合理收費', desc: '透明計費，無隱藏費用' },
                { icon: '📅', title: '彈性預約', desc: '配合農事時程安排，機動性高' },
                { icon: '🌿', title: '友善農業理念', desc: '推薦低毒農藥，協助你的農業更友善' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service area */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green" />
              <h2 className="font-serif text-xl font-bold text-brand-green">服務區域</h2>
            </div>
            <p className="text-gray-500 text-sm">
              服務區域待確認，請透過 LINE 詢問是否涵蓋您的農場位置。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-brand-green rounded-2xl p-8 text-center">
            <MessageCircle className="w-10 h-10 text-brand-green-bright mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-white mb-3">有服務需求？</h2>
            <p className="text-white/75 mb-6 text-sm">
              目前服務正式公告前，歡迎先透過 LINE 詢問，我們會盡快回覆。
            </p>
            <Link href="/contact" className="btn-primary bg-brand-green-bright text-brand-green hover:bg-brand-green-light hover:text-white font-semibold">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

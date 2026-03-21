import type { Metadata } from 'next'
import { Leaf, Heart, Sprout, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '青Sung 故事',
  description: '青年返鄉種田的故事，家族農業的傳承與創新，友善耕作的理念。',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-green py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            青Sung 的故事
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            一個青年返鄉的決定，一段與土地重新對話的旅程。
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '48px' }}>
        </div>
      </section>

      {/* Main story */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Story block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center text-brand-green mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-green mb-4">家族的根，土地的情</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                阿爸從年輕就開始種田，種了一輩子。每天凌晨三點出門，天黑才回來，
                用汗水換來的是波動的收購價格和逐漸彎曲的脊背。
              </p>
              <p className="text-gray-600 leading-relaxed">
                農業是這塊土地最根本的事，但農民卻往往是最辛苦、最不被重視的人。
                這件事，從小就刻在心裡。
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-brand-green-pale to-brand-green/20 rounded-2xl flex items-center justify-center">
              <div className="text-center text-brand-green/40 p-8">
                <Leaf className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm">家族農場照片</p>
                <p className="text-xs mt-1">（待上傳）</p>
              </div>
            </div>
          </div>

          {/* Story block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 aspect-square bg-gradient-to-br from-brand-green-bright/10 to-brand-green-pale rounded-2xl flex items-center justify-center">
              <div className="text-center text-brand-green/40 p-8">
                <Sprout className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm">返鄉工作照片</p>
                <p className="text-xs mt-1">（待上傳）</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center text-brand-green mb-4">
                <Sprout className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-green mb-4">帶著目的回來</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                在都市工作幾年後，心裡的問題越來越清晰：
                如果帶著在外面學到的東西回去，用不同的方法幫家人種田，
                事情會不會有所不同？
              </p>
              <p className="text-gray-600 leading-relaxed">
                於是回來了。不是逃跑，而是帶著目的回來。
                用植保機減少農藥、用科技記錄農事、用網路讓更多人認識我們種的食物。
              </p>
            </div>
          </div>

          {/* Story block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center text-brand-green mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-green mb-4">青Sung 的現在</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                現在，青Sung 是一個家族一起經營的農業品牌。
                阿爸負責農事技術，我們負責科技、行銷、內容。
                傳統農業的智慧，加上新世代的工具，我們相信能走出不一樣的路。
              </p>
              <p className="text-gray-600 leading-relaxed">
                每次客人說「這個菜好好吃」，就覺得這一切值得了。
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-brand-green/10 to-brand-green-bright/10 rounded-2xl flex items-center justify-center">
              <div className="text-center text-brand-green/40 p-8">
                <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-sm">家人合照</p>
                <p className="text-xs mt-1">（待上傳）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">我們的耕作理念</h2>
            <p className="section-subtitle">友善土地，透明農業，讓每一份食物都值得信任。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: '友善耕作',
                desc: '減量使用農藥，僅在必要時施用低毒性藥劑。使用有機質肥料維護地力，維持田邊生態環境的多樣性。',
                icon: '🌿',
              },
              {
                title: '透明農事',
                desc: '每塊田的農事記錄透明公開，讓客人清楚知道自己吃的食物是怎麼種出來的。',
                icon: '📋',
              },
              {
                title: '在地食材',
                desc: '全部農產品在台灣本地種植，支持在地農業生態，減少食物里程，讓你吃到最新鮮的當季食材。',
                icon: '📍',
              },
              {
                title: '科技輔助',
                desc: '引入植保機、農事記錄 App 等科技工具，提升效率、降低人力負擔，讓農業更永續。',
                icon: '🚁',
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-green-pale rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif font-bold text-brand-green text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo wall placeholder */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">田間生活</h2>
            <p className="section-subtitle">農場的每一天，都是最真實的生活。</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-brand-green-pale to-brand-green/10 rounded-xl flex items-center justify-center ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <div className="text-center text-brand-green/30 p-4">
                  <Leaf className="w-8 h-8 mx-auto mb-1 opacity-40" />
                  <p className="text-xs">照片 {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">農場照片整理中，敬請期待 🌾</p>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import { Leaf, Heart, Sprout, Users } from 'lucide-react'
import { getSiteSettings, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: '青Sung 故事',
  description: '青年返鄉種田的故事，家族農業的傳承與創新，友善耕作的理念。',
}

export default async function AboutPage() {
  const settings = await getSiteSettings()

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
          <p className="text-white/90 text-xl md:text-2xl font-serif mb-3">
            青Sung，就像年輕的我。
          </p>
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
                大學時在旅行社打工，因為疫情受到影響，多了很多空檔時間，才有空回家。
                有一次八點多到家，爸媽才剛要吃飯，桌上簡單一兩道菜。
              </p>
              <p className="text-gray-600 leading-relaxed">
                隔了一個月再回去，跟上次差不多時間，家裡卻沒有人，還在田裡忙。
                那時候才知道，原來爸媽都工作到那麼晚，很辛苦，自己沒在家陪他們，
                三餐就這樣隨便解決，日子一天一天這樣過去。
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-brand-green-pale to-brand-green/20 rounded-2xl flex items-center justify-center overflow-hidden">
              {settings?.aboutStoryImage1 ? (
                <Image
                  src={urlFor(settings.aboutStoryImage1).width(700).height(700).url()}
                  alt="家族農場照片"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-brand-green/40 p-8">
                  <Leaf className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">家族農場照片</p>
                  <p className="text-xs mt-1">（待上傳）</p>
                </div>
              )}
            </div>
          </div>

          {/* Story block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 aspect-square bg-gradient-to-br from-brand-green-bright/10 to-brand-green-pale rounded-2xl flex items-center justify-center overflow-hidden">
              {settings?.aboutStoryImage2 ? (
                <Image
                  src={urlFor(settings.aboutStoryImage2).width(700).height(700).url()}
                  alt="返鄉工作照片"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-brand-green/40 p-8">
                  <Sprout className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">返鄉工作照片</p>
                  <p className="text-xs mt-1">（待上傳）</p>
                </div>
              )}
            </div>
            <div className="order-1 md:order-2">
              <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center text-brand-green mb-4">
                <Sprout className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-green mb-4">帶著目的回來</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                就這樣決定回來，陪在爸媽身邊。爸媽卻都反對，要我到外面找更好的工作，
                因為知道種田辛苦，不想要兒子這麼累，走他們走過的路。
                一開始回來很挫折，第一年，爸媽在旁邊看著，結果還是不好，價格也不好，
                被盤商打槍，心情很低落，爸媽看了捨不得，時不時就說不要種了。
                第二年，爸媽放手讓我自己做，結果更糟，什麼都得自己扛，踩了很多雷，真的很想放棄。
              </p>
              <p className="text-gray-600 leading-relaxed">
                大約在2019年快進入2020年的時候，開始種田。起初大一上學期念完，大一下學期轉讀夜校，
                一邊唸書、一邊在家務農，台中、彰化兩地跨縣市奔波往返。
                時常因為趕著要去台中上課，來不及吃晚餐，加上早出晚歸、奔波勞碌太累，
                開車開到睡著，直接停在路邊睡。有一次到家了，居然直接在車上睡著，
                車沒熄火也沒關燈，清晨爸媽起床準備外出工作，才發現我在車上睡著了。
                只撐了一學期，真的受不了了。
                後來為了想開一間農業行、需要考相關證照，又去讀了北科大學分班、中科大假日班，
                一路念到2025年6月才畢業。
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
                現在，青Sung 是一個家族一起經營的農業品牌，
                讓傳統農業的智慧，加上新世代的工具，走出不一樣的路。
              </p>
              <p className="text-gray-600 leading-relaxed">
                每次客人說「這個菜好好吃」，就覺得這一切值得了。
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-brand-green/10 to-brand-green-bright/10 rounded-2xl flex items-center justify-center overflow-hidden">
              {settings?.aboutStoryImage3 ? (
                <Image
                  src={urlFor(settings.aboutStoryImage3).width(700).height(700).url()}
                  alt="家人合照"
                  width={700}
                  height={700}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-brand-green/40 p-8">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">家人合照</p>
                  <p className="text-xs mt-1">（待上傳）</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-brand-green-pale">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title mb-8">我們的願景</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            以現在的環境，要做到有機無毒，農夫需要花很高的成本，而這些成本，
            最後往往會轉嫁到消費者身上，不一定人人都負擔得起。
            所以我們想做的，是讓大家能用合理的價格，吃到安全、新鮮、好吃的農產品。
          </p>
          <p className="text-gray-600 leading-relaxed">
            同時，也希望種田的人，能用比較輕鬆的方式，好好地生活下去。
            這是我們轉型的原因，也是青Sung 想一直走下去的路。
          </p>
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
            {Array.from({ length: 8 }).map((_, i) => {
              const img = settings?.aboutGallery?.[i]
              return (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br from-brand-green-pale to-brand-green/10 rounded-xl flex items-center justify-center overflow-hidden ${
                    i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                  }`}
                >
                  {img ? (
                    <Image
                      src={urlFor(img).width(600).height(600).url()}
                      alt={`田間生活照片 ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-center text-brand-green/30 p-4">
                      <Leaf className="w-8 h-8 mx-auto mb-1 opacity-40" />
                      <p className="text-xs">照片 {i + 1}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {!settings?.aboutGallery?.length && (
            <p className="text-center text-gray-400 text-sm mt-4">農場照片整理中，敬請期待 🌾</p>
          )}
        </div>
      </section>
    </div>
  )
}

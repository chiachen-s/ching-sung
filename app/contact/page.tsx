import type { Metadata } from 'next'
import { MessageCircle, Instagram, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: '聯絡我們',
  description: '透過 LINE 官方帳號或 Instagram 聯絡青Sung。訂購農產品、詢問服務。',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4" />
            Contact
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">聯絡我們</h1>
          <p className="text-white/70 text-lg">訂購農產品、詢問服務，歡迎透過 LINE 聯繫</p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LINE */}
            <div className="card bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#06C755] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-gray-900 text-xl">LINE 官方帳號</h2>
                  <p className="text-sm text-gray-500">最快速的聯絡方式</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="max-w-[200px] mx-auto mb-6">
                <img
                  src="https://qr-official.line.me/gs/M_994sdzus_BW.png?oat_content=qr"
                  alt="青Sung LINE 官方帳號 QR Code"
                  className="w-full rounded-2xl"
                />
              </div>

              <div className="text-center space-y-3">
                <p className="text-gray-600 text-sm">掃描 QR Code 加入好友</p>
                <a
                  href="https://line.me/R/ti/p/@994sdzus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block w-full text-center bg-[#06C755] hover:bg-[#05B34A]"
                >
                  點此加入 LINE
                </a>
                <p className="text-xs text-gray-400">
                  加入後可以：訂購農產品、詢問服務、收到開賣通知
                </p>
              </div>

              {/* Auto-reply tips */}
              <div className="mt-6 bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-medium text-gray-700 mb-2">💡 自動回覆關鍵字</p>
                <div className="space-y-1.5">
                  <div className="flex gap-2 text-xs text-gray-600">
                    <span className="bg-white border border-gray-200 px-2 py-0.5 rounded font-mono">訂購</span>
                    <span>→ 訂購表單連結</span>
                  </div>
                  <div className="flex gap-2 text-xs text-gray-600">
                    <span className="bg-white border border-gray-200 px-2 py-0.5 rounded font-mono">服務</span>
                    <span>→ 植保機服務說明</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other contacts */}
            <div className="space-y-6">

              {/* Instagram */}
              <div className="card bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Instagram</h3>
                    <p className="text-xs text-gray-500">農場日常、農業知識</p>
                  </div>
                </div>
                <a
                  href="https://instagram.com/chingsungfarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-brand-green font-medium hover:underline"
                >
                  @chingsungfarm
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Email */}
              <div className="card bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-xs text-gray-500">一般詢問</p>
                  </div>
                </div>
                <a
                  href="mailto:chingsung.farm@gmail.com"
                  className="flex items-center justify-between text-sm text-brand-green font-medium hover:underline"
                >
                  chingsung.farm@gmail.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone */}
              <div className="card bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">聯絡電話</h3>
                    <p className="text-xs text-gray-500">週一至週六 08:00 – 18:00</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">電話號碼（待填入）</p>
              </div>

              {/* Address */}
              <div className="card bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-green-pale rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">農場地址</h3>
                    <p className="text-xs text-gray-500">自取請先 LINE 預約</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">農場地址（待填入）</p>
              </div>

              {/* Order form */}
              <div className="card bg-brand-green p-6">
                <h3 className="font-serif font-bold text-white mb-2">直接填寫訂購表單</h3>
                <p className="text-white/70 text-sm mb-4">
                  不用加 LINE 也可以先填寫訂購需求，我們會主動聯絡你。
                </p>
                <a
                  href="#"
                  className="btn-primary bg-brand-green-bright text-brand-green hover:bg-brand-green-light hover:text-white font-semibold w-full text-center block"
                >
                  前往訂購表單
                </a>
                <p className="text-white/40 text-xs mt-2 text-center">（Google 表單連結待建立）</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12 bg-white rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-brand-green mb-6">常見問題</h2>
            <div className="space-y-5">
              {[
                {
                  q: '訂購後多久出貨？',
                  a: '付款確認後 2 個工作天內安排出貨，出貨後 LINE 通知你物流資訊。',
                },
                {
                  q: '有哪些配送方式？',
                  a: '宅配（黑貓宅急便）、超商取貨、農場自取（需預約）。運費與免運門檻待確認後公告。',
                },
                {
                  q: '如果收到農產品有問題怎麼辦？',
                  a: '請在收到當天拍照並 LINE 告知，我們會協助處理。農產品品質是我們最重視的事。',
                },
                {
                  q: '可以指定出貨日期嗎？',
                  a: '農產品以新鮮為主，會盡量配合，請在訂購備註欄說明或直接 LINE 詢問。',
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <p className="font-semibold text-gray-800 mb-2">Q：{item.q}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">A：{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: '青Sung | 青年返鄉，友善耕作',
    template: '%s | 青Sung',
  },
  description: '青年返鄉種田，透過科技與內容讓更多人認識在地農業。農產品直售、農業知識分享。',
  keywords: ['青農', '小農直售', '友善農業', '台灣農產品', '青Sung'],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: '青Sung',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

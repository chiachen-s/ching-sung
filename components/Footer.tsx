import Link from 'next/link'
import { Instagram, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif font-bold text-xl">青Sung</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              青年返鄉種田，透過科技與內容<br />
              讓更多人認識在地農業。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-green-bright">快速連結</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/about', label: '青Sung 故事' },
                { href: '/knowledge', label: '農業知識' },
                { href: '/products', label: '農產品' },
                { href: '/services', label: '植保機服務' },
                { href: '/contact', label: '聯絡我們' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-green-bright">聯絡方式</h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/chingsung.farm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @chingsung.farm
              </a>
              <a
                href="mailto:chingsung.farm@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                chingsung.farm@gmail.com
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                LINE 官方帳號
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 青Sung. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

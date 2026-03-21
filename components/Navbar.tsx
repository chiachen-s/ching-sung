'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/about', label: '青Sung 故事' },
  { href: '/knowledge', label: '農業知識' },
  { href: '/products', label: '農產品' },
  { href: '/services', label: '服務介紹' },
  { href: '/contact', label: '聯絡我們' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur border-b border-brand-green/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="青Sung Logo"
              className="h-10 w-auto object-contain translate-y-[2px]"
            />
            <span className="font-serif font-bold text-lg text-brand-green">青Sung</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-brand-green text-white'
                    : 'text-gray-700 hover:bg-brand-green-pale hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-brand-green hover:bg-brand-green-pale"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="開啟選單"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-3 pb-4 space-y-1 border-t border-brand-green/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-brand-green text-white'
                    : 'text-gray-700 hover:bg-brand-green-pale hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

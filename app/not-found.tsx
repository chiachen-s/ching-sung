import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-cream">
      <div className="text-center px-4">
        <Leaf className="w-16 h-16 text-brand-green/30 mx-auto mb-4" />
        <h1 className="font-serif text-4xl font-bold text-brand-green mb-3">404</h1>
        <p className="text-gray-500 mb-6">找不到這個頁面，可能已移動或不存在。</p>
        <Link href="/" className="btn-primary">
          回到首頁
        </Link>
      </div>
    </div>
  )
}

'use client'

import { Fragment, useState, type ReactNode } from 'react'

interface Props {
  categories: { value: string; label: string }[]
  /** 卡片由伺服器端先渲染好再傳進來,這裡只負責依分類顯示/隱藏 */
  items: { key: string; category: string; node: ReactNode }[]
  gridClassName: string
  emptyText?: string
}

export default function CategoryFilter({ categories, items, gridClassName, emptyText = '這個分類目前還沒有內容' }: Props) {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? items : items.filter((item) => item.category === active)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActive(cat.value)}
            aria-pressed={active === cat.value}
            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              active === cat.value
                ? 'bg-brand-green text-white'
                : 'bg-white text-gray-600 hover:bg-brand-green-pale hover:text-brand-green border border-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={gridClassName}>
        {visible.map((item) => (
          <Fragment key={item.key}>{item.node}</Fragment>
        ))}
      </div>

      {items.length > 0 && visible.length === 0 && (
        <p className="text-center py-20 text-gray-400">{emptyText}</p>
      )}
    </>
  )
}

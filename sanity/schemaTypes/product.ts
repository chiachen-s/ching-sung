import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: '農產品',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '商品名稱',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代碼',
      type: 'slug',
      options: { source: 'name' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          { title: '蔬菜', value: 'vegetable' },
          { title: '稻米', value: 'rice' },
          { title: '水果', value: 'fruit' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'status',
      title: '供應狀態',
      type: 'string',
      options: {
        list: [
          { title: '供應中', value: 'available' },
          { title: '已售完', value: 'soldout' },
          { title: '即將上市', value: 'coming_soon' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'seasons',
      title: '產季',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '春', value: 'spring' },
          { title: '夏', value: 'summer' },
          { title: '秋', value: 'autumn' },
          { title: '冬', value: 'winter' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: '簡短說明（列表頁）',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'coverImage',
      title: '主圖',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: '商品詳細說明',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'orderLink',
      title: '訂購連結（選填，留空則顯示聯絡按鈕）',
      type: 'url',
    }),
    defineField({
      name: 'hidden',
      title: '隱藏此項商品（前台將不會顯示）',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'status', media: 'coverImage', hidden: 'hidden' },
    prepare({ title, subtitle, hidden }) {
      const labels: Record<string, string> = { available: '✅ 供應中', soldout: '❌ 已售完', coming_soon: '⏳ 即將上市' }
      return { title, subtitle: hidden ? `🙈 已隱藏・${labels[subtitle] || subtitle}` : labels[subtitle] || subtitle }
    },
  },
})

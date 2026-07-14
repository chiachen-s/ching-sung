import { defineField, defineType } from 'sanity'

export const article = defineType({
  name: 'article',
  title: '農業知識文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '文章標題',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代碼',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          { title: '種植知識', value: 'farming' },
          { title: '節氣與農作', value: 'solar_term' },
          { title: '食譜料理', value: 'recipe' },
          { title: '農場日誌', value: 'diary' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: '發布日期',
      type: 'datetime',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '摘要（列表頁顯示）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: '封面圖片',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: '文章內容',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: '內文', value: 'normal' },
            { title: '標題 H2', value: 'h2' },
            { title: '標題 H3', value: 'h3' },
          ],
        },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'hidden',
      title: '隱藏此篇文章（前台將不會顯示）',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [{ title: '發布日期（新→舊）', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage', hidden: 'hidden' },
    prepare({ title, subtitle, hidden }) {
      const labels: Record<string, string> = { farming: '種植知識', solar_term: '節氣與農作', recipe: '食譜料理', diary: '農場日誌' }
      return { title, subtitle: hidden ? `🙈 已隱藏・${labels[subtitle] || subtitle}` : labels[subtitle] || subtitle }
    },
  },
})

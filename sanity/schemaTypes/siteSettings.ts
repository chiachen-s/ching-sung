import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '網站設定',
  type: 'document',
  fieldsets: [
    { name: 'homeImages', title: '首頁圖片' },
    { name: 'aboutImages', title: 'About 頁圖片' },
  ],
  fields: [
    defineField({
      name: 'slogan',
      title: '品牌標語',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: '聯絡電話',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: '農場地址',
      type: 'string',
    }),
    defineField({
      name: 'serviceArea',
      title: '服務區域',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram 連結',
      type: 'url',
    }),
    defineField({
      name: 'lineQrCode',
      title: 'LINE QR Code 圖片',
      type: 'image',
    }),
    defineField({
      name: 'homeStoryImage',
      title: '首頁「我們的故事」照片',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'homeImages',
    }),
    defineField({
      name: 'aboutStoryImage1',
      title: 'About 故事區塊 1 照片（家族的根，土地的情）',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'aboutImages',
    }),
    defineField({
      name: 'aboutStoryImage2',
      title: 'About 故事區塊 2 照片（帶著目的回來）',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'aboutImages',
    }),
    defineField({
      name: 'aboutStoryImage3',
      title: 'About 故事區塊 3 照片（青Sung 的現在）',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'aboutImages',
    }),
    defineField({
      name: 'aboutGallery',
      title: '田間生活照片牆（最多 8 張，依陣列順序顯示，第 1 張版面較大）',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule) => rule.max(8),
      fieldset: 'aboutImages',
    }),
  ],
  preview: {
    prepare() {
      return { title: '網站設定' }
    },
  },
})

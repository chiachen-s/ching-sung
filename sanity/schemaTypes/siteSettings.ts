import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '網站設定',
  type: 'document',
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
  ],
  preview: {
    prepare() {
      return { title: '網站設定' }
    },
  },
})

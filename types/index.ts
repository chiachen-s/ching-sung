import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Article {
  _id: string
  title: string
  slug: string
  category: 'farming' | 'solar_term' | 'recipe' | 'diary'
  coverImage?: string
  body?: PortableTextBlock[]
  publishedAt: string
  excerpt?: string
}

export interface Product {
  _id: string
  name: string
  slug: string
  category: 'vegetable' | 'rice' | 'fruit'
  seasons: ('spring' | 'summer' | 'autumn' | 'winter')[]
  status: 'available' | 'soldout' | 'coming_soon'
  coverImage?: string
  images?: string[]
  description?: PortableTextBlock[]
  orderLink?: string
  excerpt?: string
}

export interface SiteSettings {
  lineQrCode?: string
  instagramUrl?: string
  phone?: string
  address?: string
  serviceArea?: string
  slogan?: string
  homeStoryImage?: SanityImageSource
  aboutStoryImage1?: SanityImageSource
  aboutStoryImage2?: SanityImageSource
  aboutStoryImage3?: SanityImageSource
  aboutGallery?: SanityImageSource[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any

export const CATEGORY_LABELS: Record<string, string> = {
  farming: '種植知識',
  solar_term: '節氣與農作',
  recipe: '食譜料理',
  diary: '農場日誌',
  vegetable: '蔬菜',
  rice: '稻米',
  fruit: '水果',
}

export const SEASON_LABELS: Record<string, string> = {
  spring: '春',
  summer: '夏',
  autumn: '秋',
  winter: '冬',
}

export const STATUS_LABELS: Record<string, string> = {
  available: '供應中',
  soldout: '已售完',
  coming_soon: '即將上市',
}

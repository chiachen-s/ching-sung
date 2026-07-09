import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { SiteSettings } from '@/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ---- Queries ----

export async function getArticles() {
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) {
      _id, title, "slug": slug.current, category, publishedAt, excerpt, coverImage
    }`
  )
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, category, publishedAt, excerpt, coverImage, body
    }`,
    { slug }
  )
}

export async function getProducts() {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt asc) {
      _id, name, "slug": slug.current, category, status, seasons, excerpt, coverImage
    }`
  )
}

export async function getProductBySlug(slug: string) {
  return client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, "slug": slug.current, category, status, seasons, excerpt, coverImage, description, orderLink
    }`,
    { slug }
  )
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(
      `*[_type == "siteSettings"][0] {
        slogan, phone, address, serviceArea, instagramUrl, lineQrCode,
        homeStoryImage, aboutStoryImage1, aboutStoryImage2, aboutStoryImage3, aboutGallery
      }`
    )
  } catch (err) {
    console.error('[getSiteSettings] Sanity 查詢失敗:', err)
    return null
  }
}

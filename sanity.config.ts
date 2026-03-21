import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: '青Sung 後台',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('內容管理')
          .items([
            S.listItem().id('product').title('農產品').schemaType('product').child(S.documentTypeList('product')),
            S.listItem().id('article').title('農業知識文章').schemaType('article').child(S.documentTypeList('article')),
            S.divider(),
            S.listItem()
              .id('siteSettings')
              .title('網站設定')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
          ]),
    }),
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : []),
  ],
  schema: { types: schemaTypes },
})

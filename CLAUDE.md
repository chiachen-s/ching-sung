# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a **Next.js 14 (App Router) + Sanity CMS** website for 青Sung, a young farmer brand in Taiwan. The project root is `ching-sung/` inside the repo.

### Routes

| Path | Description |
|------|-------------|
| `/` | Homepage — hero, features, story snippet, featured products, latest articles, LINE CTA |
| `/about` | Brand story |
| `/products` | Product listing |
| `/products/[slug]` | Product detail (statically generated) |
| `/knowledge` | Article listing |
| `/knowledge/[slug]` | Article detail with Portable Text body (statically generated) |
| `/services` | Drone spraying service info |
| `/contact` | LINE QR code, Instagram, email, FAQ |
| `/studio/*` | Embedded Sanity Studio (Basic Auth protected) |

### Data Layer

**`lib/sanity.ts`** exports typed GROQ query functions (`getArticles`, `getProducts`, `getArticleBySlug`, `getProductBySlug`, `getSiteSettings`) and `urlFor()` for image URL building. Pages call these directly — no API routes.

**`lib/mock-data.ts`** provides sample articles and products for development. The homepage currently imports mock data directly; other pages may call Sanity and fall back to mocks when results are empty.

**Content types** (defined in both `types/index.ts` and `sanity/schemaTypes/`):
- `Article` — category: `farming | solar_term | recipe | diary`, Portable Text body
- `Product` — category: `vegetable | rice | fruit`, status: `available | soldout | coming_soon`, seasons array
- `SiteSettings` — singleton: LINE QR code, Instagram URL, phone, address, serviceArea, slogan

`types/index.ts` also exports display label maps: `CATEGORY_LABELS`, `SEASON_LABELS`, `STATUS_LABELS`.

### Rendering Strategy

Pages use ISR (`export const revalidate = 60`). Detail pages use `generateStaticParams()` for static generation at build time.

### CMS Studio

Sanity Studio is embedded at `/studio/*` via `app/studio/[[...tool]]/page.tsx`. `middleware.ts` enforces HTTP Basic Auth using `STUDIO_USERNAME` / `STUDIO_PASSWORD` env vars.

### Styling

Tailwind CSS with a custom brand palette in `tailwind.config.ts`:
- `brand-green` (#608B56), `brand-green-mid` (#7AAD6E), `brand-green-light` (#96C48A), `brand-green-bright` (#AACC90), `brand-green-pale` (#DCF0D2), `brand-cream` (#EAF7E4)
- `brand-yellow` (#F2C14E)
- Fonts: Inter + Noto Sans TC (`font-sans`), Noto Serif TC (`font-serif`) — loaded via Google Fonts in `globals.css`

Reusable component classes defined in `globals.css`: `.btn-primary`, `.btn-outline`, `.section-title`, `.section-subtitle`, `.card`, `.tag`.

### Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
STUDIO_USERNAME=
STUDIO_PASSWORD=
NEXT_PUBLIC_GA_MEASUREMENT_ID=   # optional, enables GA4 via layout.tsx
```

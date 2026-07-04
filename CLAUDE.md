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

Required in `.env.local` (see `.env.example`):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
STUDIO_USERNAME=
STUDIO_PASSWORD=
NEXT_PUBLIC_GA_MEASUREMENT_ID=   # optional, enables GA4 via layout.tsx
```

## AI 員工工作守則（AI Worker Rules）

任何 AI agent（含自動化 headless 執行）在本 repo 工作時，MUST 遵守以下規則：

### 禁改清單（protected paths — 觸碰即整包拒收）
- `.github/**`（CI 設定）
- `middleware.ts`（/studio Basic Auth 邏輯）
- `.npmrc`（`legacy-peer-deps=true` 是 Sanity 4 peer dep 衝突的必要設定，MUST NOT 移除）
- `.env*`（環境變數檔）

### 需人工確認才能改（confirm required）
- `package.json` 的 dependencies / devDependencies 任何變更
- 刪除頁面或路由
- SEO 關鍵檔：`app/sitemap.ts`、`app/robots.ts`、`app/layout.tsx` 的 metadata

### 工作方式
- **改動最小化**：只改與任務直接相關的檔案，MUST NOT 順手重構、重排 import、改格式
- **完成前必跑並全數通過**：`npm run lint` && `npm run typecheck` && `npm run build`
- Commit message 格式：`<type>: <說明>`，type ∈ feat / fix / content / chore / perf / seo
- 分支命名：`ai/<YYYYMMDD>-<英文短slug>`，一律從最新 `origin/main` 切出；MUST NOT 直接 push main
- 內容修改優先透過 Sanity CMS（非程式碼）；只有版面與功能才改 code

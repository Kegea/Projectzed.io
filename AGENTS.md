# AGENTS.md — ProjectZed v2.0

## Stack

- **Next.js 14.2.35** App Router, TypeScript strict
- **Tailwind CSS v4** (`@import "tailwindcss"` — NOT `@tailwind` directives)
- **next-intl** i18n: locales `en`, `fr`, `ar` (RTL), prefix `always`
- **shadcn/ui** (Base UI variant) via `@base-ui/react`, not Radix
- **Framer Motion** for animations
- **Forms:** Formspree (`https://formspree.io/f/xkoygzwy`)

## Commands

```sh
npm run dev      # next dev
npm run build    # next build
npm run start    # next start
npm run lint     # next lint (ESLint)
```

No test, typecheck, or formatter scripts exist.

## Architecture

- Path alias `@/*` → `./src/*`
- Root layout in `src/app/layout.tsx` is a passthrough (renders children only)
- Real layout is `src/app/[locale]/layout.tsx` — loads fonts, Navbar, Footer, WhatsAppFloat
- All pages go under `src/app/[locale]/` (e.g. `/[locale]/services/web-design`)
- i18n messages in `messages/{locale}.json`
- Locale routing config in `src/routing.ts`, middleware in `src/middleware.ts`

## Design System

Custom design tokens in `src/app/globals.css` via `@theme` and CSS vars:
- Greens: `--color-green-deep` (#013220), `--color-green-mid`, `--color-green-soft`
- Brass/gold: `--color-brass` (#C8A951), `--color-brass-light`
- Parchment: `--color-parchment` (#F5F0E8)
- Forge/ink: `--color-forge` (#111612), `--color-ink` (#1C2B1F)
- Fonts: Syne (display), DM Sans (body) via `next/font/google`

## Conventions

- All pages start as `'use client'` (no RSC data fetching patterns used)
- Data is hardcoded inline in page components (no API routes or DB)
- WhatsApp number `256784749832` is hardcoded in multiple places
- Build links locally using `localePath(path)` helper: `/${locale}${path}`
- Scroll animations use `<FadeUp>` component (framer-motion `useInView`)
- CSS class utility: `cn()` from `@/lib/utils` (clsx + tailwind-merge)
- Use shadcn Button from `@/components/ui/button` for in-form/inline actions

## Directory Structure

```
src/
  app/[locale]/        → pages (home, services/*, work, about, contact, trust)
  components/          → Navbar, Footer, FadeUp, WhatsAppFloat, ui/button
  i18n/request.ts      → message loader
  lib/utils.ts         → cn()
  middleware.ts        → next-intl middleware
  routing.ts           → locale config + navigation helpers
messages/              → en.json, fr.json, ar.json
legacy-static/         → old static HTML (do not modify, reference only)
```

## Gotchas

- **Tailwind v4** uses `@import "tailwindcss"` — no `tailwind.config.ts` file, no `@tailwind` directives. Use `@theme` for tokens.
- **No `.env` files** present. Only `.env*.local` is gitignored. If adding env vars, create `.env.local`.
- **Contact form** submits to Formspree — no backend API route.
- **Legacy HTML** in `legacy-static/` is read-only reference material.
- No CI, no tests, no pre-commit hooks.

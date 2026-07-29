# Kupanda Collective — Website

A production-ready marketing and information website for **Kupanda Collective**, a Uganda-based, women-led NGO
working with refugee and host communities on early childhood development, caregiver livelihoods, health, and
community-led social cohesion.

This README is written for whoever maintains the site next — a developer, a content editor, or Kupanda staff.

---

## 1. What was built

- 10 routes: Home, About Us, Our Work, Childcare Workforce Initiative, Stories & Learning, Partner With Us,
  Contact, Privacy, Safeguarding, Terms of Use — plus a custom 404 page.
- 3 form-handling API routes (contact, partnership enquiry, newsletter sign-up), all running in a documented
  **demonstration mode** until a real email/notification service is configured (see §7).
- A typed content model under `/content` so text, figures, navigation and contact details can be edited without
  touching component code.
- A design system derived programmatically from the Kupanda Collective logo (see §4).
- SEO metadata, sitemap, robots.txt, Open Graph image generation and Organization/Breadcrumb structured data.
- Accessibility features targeting WCAG 2.2 AA (see §9).

## 2. Technology used

- **Next.js 16** (App Router, Turbopack build), **React 19**, **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` configuration — see `app/globals.css`)
- **Zod** for form validation (shared client + server schemas)
- **lucide-react** for icons
- **next/font** for self-hosted Google Fonts (Fraunces + Inter — no runtime font requests to Google)
- **next/og** (`ImageResponse`) for a dynamically generated social share image

No database, CMS or email service is wired in. All of that is designed as clearly documented "bring your own
service" integration points (§6–§8).

## 3. Project structure

```
app/                          Routes (Next.js App Router)
  layout.tsx                  Root layout: fonts, header, footer, skip link, JSON-LD
  page.tsx                    Homepage
  about/, our-work/, ...      One folder per route
  api/contact|partner|newsletter/route.ts   Form-handling API routes
  sitemap.ts, robots.ts       Generated SEO files
  opengraph-image.tsx         Dynamic social share image

components/
  layout/                     Header, MobileMenu (inside Header), Footer, SkipLink, Logo
  ui/                         Container, SectionHeading, Button, ImpactStat
  home/                       Homepage-only sections (Hero, FlagshipFeature, ...)
  programme/                  Programme cards, pillar sections, systems diagram
  initiative/                 Timeline, ResultsTable, BudgetTable, ComponentCard
  stories/                    ArticleCard, CategoryFilter, StoriesGrid
  forms/                      ContactForm, PartnerForm, shared FormField primitives
  shared/                     Breadcrumbs, Accordion, ImagePlaceholder, DownloadCard, etc.

content/                      ALL editable copy and structured data (see §5)
lib/                          cn, metadata helper, zod schemas, rate limiter, notify adapter
```

## 4. Design system

Brand colours were extracted **programmatically** from the supplied logo (pixel-frequency analysis of
`public/images/logo/kupanda-mark.png`), not guessed:

| Token | Hex | Source |
|---|---|---|
| `forest-700` | `#2B7246` | Dominant colour in the logo mark |
| `leaf-500` | `#A0C734` | Secondary colour in the logo mark |
| `cream-50/100/200` | `#fefdfb` / `#faf6ec` / `#f3ecda` | Supporting warm neutral |
| `charcoal-900/700/500` | `#22241f` / `#3d4038` / `#62675c` | Body copy / neutral text |
| `sage-100/200/300` | `#eef3ea` / `#e0e9da` / `#c7d6bd` | Backgrounds, borders |
| `clay-600/500/100` | `#a85a34` / `#bf6d43` / `#f3e3d7` | Restrained warm accent |

All tokens live in `app/globals.css` under `@theme inline` (Tailwind v4's CSS-first config) and are used as
Tailwind utilities, e.g. `bg-forest-700`, `text-charcoal-700`.

**Typography:** Fraunces (serif, headings) + Inter (sans, body/UI), both self-hosted via `next/font/google` —
see `app/layout.tsx`. Body text is fluid (`clamp()`), roughly 16–19px depending on viewport.

**Logo usage:** the original logo file is untouched at `public/images/logo/kupanda-logo-full-color.png`. Do not
recolour, stretch or recreate it. A square icon mark (`kupanda-mark.png`, plus derived favicon/app-icon sizes)
was cropped and padded from the same source file — see `app/icon.png`, `app/apple-icon.png`, `public/favicon.ico`.

## 5. How to update page content

Almost everything visible on the site is data, not markup. Look in `/content` first:

| File | Controls |
|---|---|
| `site-settings.ts` | Nav links, "Partner With Us" CTA, footer links, contact placeholders, social links |
| `programmes.ts` | The 5 programme pillars (homepage cards + Our Work full sections) |
| `initiative.ts` | Everything on the Childcare Workforce Initiative page: gap, model, 5 components, 3-year pathway, results table, budget table, disclaimers |
| `homepage.ts` | Hero, positioning section, flagship feature, impact stats, model pathway, community-voice placeholder, partnership CTA, newsletter copy |
| `about.ts` | About Us page sections |
| `partnership.ts` | Partnership pathways + the "area of interest" dropdown on the Partner form |
| `stories.ts` | Stories & Learning placeholder cards (see §5a) |
| `legal.ts` | Draft Privacy / Safeguarding / Terms copy |

Editing text, a target number, or a link almost never requires touching a component — change the value in
`/content` and the page updates.

### 5a. How to add a story

`content/stories.ts` currently holds placeholder cards only (`isPlaceholder: true`). To publish a real story:

1. Confirm consent and safeguarding review are complete (see `/safeguarding` and the editorial note at the top
   of `content/stories.ts`).
2. Duplicate an entry in `storyPlaceholders`, or — once the archive grows past a handful of entries — migrate to
   MDX files under a new `content/stories/*.mdx` directory with frontmatter (`title`, `slug`, `summary`,
   `publishedAt`, `author`, `category`, `featuredImage`, `imageAlt`, `imageCredit`, `download`, `draft`,
   `seoDescription`) and update `StoriesGrid`/`ArticleCard` to read from the filesystem instead of the array.
3. Set `isPlaceholder: false` and remove the `statusLabel` once real.

### 5b. How to add a resource / download

Use the `DownloadCard` component (`components/shared/DownloadCard.tsx`). It supports three states:
`available` (links straight to a file in `/public`), `on-request` (links to the Partner form), and
`coming-soon` (no link, just a status badge). Add the PDF/doc to `/public/downloads/` and reference it by path.

### 5c. How to replace images

Every photo on the site is currently an `ImagePlaceholder` (`components/shared/ImagePlaceholder.tsx`) —
a labelled placeholder box, not a broken or stock image. To replace one:

1. Add the approved, rights-cleared image to `/public/images/...`.
2. Swap the `<ImagePlaceholder slot={{ alt, caption, credit }} />` usage for a `next/image` `<Image>` with the
   same `alt` text (required), and add `caption`/`credit` as visible text if relevant.
3. Keep `alt` descriptive and specific — see the Photography Direction notes in the original project brief for
   tone (dignified, consented, Uganda-specific, no staged stock photography).

## 6. Configuring contact / partnership forms

All three forms (`Contact`, `Partner`, `Newsletter`) currently run in **demonstration mode**: submissions are
validated (client + server, via `lib/validation.ts`), rate-limited, checked against a honeypot field, and
acknowledged with a success message — but nothing is emailed or stored anywhere. The API routes never log
submission content (see `lib/notify.ts`).

To connect a real destination:

1. Pick a provider: a transactional email API (Resend, Postmark, SendGrid), a form backend (Formspree, Basin),
   or your own database.
2. Implement the call inside `lib/notify.ts` (`notify()`), using a server-only environment variable for any API
   key (see `.env.example`). Do **not** expose the key with a `NEXT_PUBLIC_` prefix.
3. The three API routes (`app/api/contact|partner|newsletter/route.ts`) do not need to change — they already
   call `notify()`.
4. Replace the in-memory rate limiter (`lib/rate-limit.ts`) with a durable one (Upstash Redis, Vercel KV, or an
   edge/WAF rule) before public launch — the current one resets on every server restart and does not share
   state across serverless instances.

## 7. Configuring newsletter sign-up

The newsletter form posts to `app/api/newsletter/route.ts`, which currently just validates and acknowledges.
To connect a provider (Mailchimp, Buttondown, ConvertKit, etc.):

1. Add the provider's API key/audience ID to `.env.local` (see `.env.example`).
2. Inside the newsletter route (or via `lib/notify.ts`), call the provider's subscribe endpoint instead of the
   demo log line.
3. Update the success copy in `content/homepage.ts` (`newsletter`) once live — the current copy explicitly
   says "no live email platform is connected yet."

## 8. Configuring analytics

No analytics is active. To add privacy-conscious analytics (e.g. Plausible, Fathom, or GA4 with consent):

1. Add the analytics ID as an environment variable (`NEXT_PUBLIC_ANALYTICS_ID` placeholder in `.env.example`).
2. Add the provider's script/component to `app/layout.tsx`, gated on that environment variable being set, and
   on any consent mechanism Kupanda decides to use.
3. Update `content/legal.ts` (`privacyDraft`) to describe what is actually collected.

## 9. Accessibility

Targets WCAG 2.2 AA:

- Skip-to-content link, semantic landmarks, correct heading order per page
- Visible focus rings (`:focus-visible`) throughout, 3px offset outline
- Accessible mobile menu (`aria-expanded`, `aria-controls`, Escape to close, focus returns sensibly)
- All form fields have associated `<label>`s, `aria-describedby` hints/errors, and `role="alert"` error text
- Colour is never the only signal (icons + text pair with colour throughout)
- `prefers-reduced-motion` respected (animations/transitions disabled)
- Data tables use `<caption>`, `scope="col"/"row"` and remain in a scrollable container instead of breaking
  page layout on narrow screens
- Images use a placeholder system that enforces descriptive alt text before any photo is added

## 10. SEO

- Per-page metadata via `lib/metadata.ts` (`buildMetadata`), including canonical URLs and Open Graph/Twitter tags
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
- `app/opengraph-image.tsx` generates a branded social-share image at request time (no static asset to maintain)
- JSON-LD: `NGO`/Organization schema in the root layout, `BreadcrumbList` schema on every inner page

To update the canonical domain, title/description defaults, or locale, edit `content/site-settings.ts`
(`siteConfig`).

## 11. Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## 12. Development commands

```bash
npm run dev         # local dev server (Turbopack)
npm run build        # production build
npm run start         # serve the production build locally
npm run lint          # ESLint (eslint-config-next, flat config)
npm run typecheck    # tsc --noEmit
```

## 13. Production build

```bash
npm run build
npm run start
```

The build has been verified to compile cleanly, pass `next lint`, and pass `tsc --noEmit` with zero errors.

## 14. Environment variables

Copy `.env.example` to `.env.local` and fill in only what you've configured — every variable is optional and
the site works fully in demo mode without any of them. See `.env.example` for the full list and where each one
is consumed.

## 15. Deployment

The site is a standard Next.js App Router project and deploys to any Next.js-compatible host (Vercel,
Netlify, or a Node server via `next start`). No special build configuration is required beyond setting the
environment variables in §14 that you choose to configure.

```bash
# Example: Vercel
vercel deploy
```

If deploying somewhere other than the final domain, update `siteConfig.domain` in `content/site-settings.ts` —
it feeds canonical URLs, the sitemap, robots.txt, and structured data.

## 16. Placeholder content still awaiting Kupanda Collective

This build intentionally avoids inventing organisational facts. See **`CONTENT_CHECKLIST.md`** for the full,
itemised list of what Kupanda must supply before public launch (email addresses, phone number, social links,
team/governance profiles, approved photography, consented stories, final domain, form/newsletter provider,
etc.). Every placeholder in the codebase is also marked inline with a comment or visible "(placeholder)" /
"pending confirmation" label so nothing reads as confirmed fact by accident.

## 17. Recommended next steps before public launch

1. Work through `CONTENT_CHECKLIST.md` with Kupanda Collective.
2. Connect a real form-notification service (§6) and newsletter provider (§7).
3. Replace `ImagePlaceholder` instances with approved, rights-cleared photography (§5c).
4. Add real team/governance profiles to the About page once approved (currently a labelled placeholder).
5. Legal review of `content/legal.ts` (Privacy, Safeguarding, Terms) before removing the "draft" labelling.
6. Set the final domain in `content/site-settings.ts` and re-verify canonical URLs/sitemap/OG tags.
7. Swap the in-memory rate limiter for a durable one if deploying to a multi-instance/serverless environment (§6).
8. Run a full accessibility audit (axe, Lighthouse, manual screen-reader pass) against the live domain.
9. Decide on and configure an analytics tool, with consent handling, if desired (§8).

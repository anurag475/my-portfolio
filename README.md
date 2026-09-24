# Anurag Dutta — Web Developer Portfolio (Next.js)

A premium, conversion-focused portfolio/freelancer website, built with
Next.js (App Router) and exported as static HTML — deployable to any static
host with zero server required.

> The original plain HTML/CSS/JS version of this site is preserved in
> `legacy-static/` in case you ever want to reference it. It is not part of
> the Next.js app and is safe to delete once you're comfortable with this
> version.

## Stack

- **Next.js 16** (App Router), **React 19**
- `output: "export"` in `next.config.mjs` — builds to plain static HTML/CSS/JS
  in `out/`, just like the original site, but with Next's routing, Metadata
  API, and self-hosted fonts (`next/font/google`, no Google Fonts CDN request)
- No CSS framework — one hand-written design system in `app/globals.css`
  (deep navy + ivory, champagne-gold accent; Instrument Sans / Geist /
  Instrument Serif via `next/font`)
- Minimal client JS: one `components/Motion.jsx` controller handles scroll
  reveal, parallax, magnetic buttons and the project cursor label; everything
  degrades cleanly with JS off or `prefers-reduced-motion`
- No database, no API routes — the contact form posts to Netlify Forms

## Running it

```bash
npm install       # first time only
npm run dev       # dev server at http://localhost:3000
npm run build     # static export to /out
npm start         # NOTE: not used for this project — see "Deploying" below
```

`npm start` normally runs Next's Node server, but this project is configured
for **static export**, so there is no Node server to start in production —
`npm run build` is the only build step you need; the deployable output is the
`/out` folder it produces. To preview that exact output locally:

```bash
npx serve out
```

## Where to edit content

Everything editable lives in `lib/*.js` as plain data:

| File | Controls |
|---|---|
| `lib/site.js` | Name, email, WhatsApp, phone, domain, social links |
| `lib/caseStudies.js` | All projects. `featured: 1…6` puts a project in the large homepage case-study stack (in that order); the rest go in the "More client work" index. `role`, `outcome`, `oneLiner`, `tech`, `timeline`, optional `github` |
| `lib/content.js` | Hero roles, credibility numbers, experience timeline, skills, services, principles, testimonials |
| `lib/services.js` | The in-depth `/services/<slug>` pages |
| `lib/images.js` | Manifest of the responsive WebP images (see below) |

**Honesty rules baked into the content:** credibility numbers are counted
from the data (e.g. live projects = case studies with a `liveUrl`), empty
`tech`/`timeline` fields are hidden rather than invented, and the
testimonials section stays hidden until `testimonials` in `lib/content.js`
has real, client-approved quotes. Experience entries accept an optional
`period` (e.g. `"2024 — Present"`) that displays automatically.

## Images

The static export can't use Next's image optimizer, so photos are
pre-generated as WebP at a few widths in `public/img/` and rendered by
`components/Img.jsx` with `srcset`, intrinsic width/height (no layout shift)
and lazy loading. To add or replace one:

1. Save the source somewhere (e.g. `public/work/new-project.png`).
2. Generate `public/img/work/new-project-{480,960,1600}.webp` (any tool; the
   originals were made with Pillow, quality ~78).
3. Add its entry to `lib/images.js` with the source `w`/`h` and the widths.

The originals in `public/work`, `public/about`, `public/organizations` etc.
are no longer referenced by the site and can be moved out of `public/` to
shrink the deploy.

## Making the form work

`components/ContactForm.jsx` carries `data-netlify="true"` and a hidden
`form-name` field — deploy `/out` to **Netlify** and submissions appear under
Site settings → Forms. The form only shows its success state when the POST
actually succeeds; otherwise it tells the visitor to email directly. To use
Formspree instead, change the `fetch` URL in that component.

## Adding a new case study or service page

No new files needed — both routes are data-driven:

- Add an entry to the array in `lib/caseStudies.js` → a page appears
  automatically at `/work/<slug>` (prev/next links update themselves).
- Add an entry to the array in `lib/services.js` → a page appears
  automatically at `/services/<slug>`.

`generateStaticParams` in `app/work/[slug]/page.js` and
`app/services/[slug]/page.js` picks these up at build time.

## SEO

- Per-page `<title>`/meta description via each route's `metadata` export or
  `generateMetadata` function (App Router Metadata API) — no hand-written
  `<head>` tags.
- `app/sitemap.js` and `app/robots.js` generate `sitemap.xml` and
  `robots.txt` automatically from the same `lib/caseStudies.js` /
  `lib/services.js` data — add a case study or service and it's in the
  sitemap on the next build, no manual edits.
- `app/opengraph-image.js` generates the social share image at build time.
- JSON-LD (`Person`, `ProfessionalService`, `WebSite` on the
  homepage; `Service` + `BreadcrumbList` on service pages;
  `BreadcrumbList` on case studies) is rendered per-page via a small
  `StructuredData` component in each route file.

## Deploying

Any static host works — the build output in `/out` after `npm run build` is
plain HTML/CSS/JS:

- **Netlify**: set build command `npm run build`, publish directory `out`.
  Forms work automatically (see above).
- **Cloudflare Pages / GitHub Pages / S3**: same idea — build command
  `npm run build`, deploy the `out/` directory. If not using Netlify Forms,
  switch the form `action` to Formspree first (see above).

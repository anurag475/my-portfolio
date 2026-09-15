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
- No CSS framework — one hand-written `app/globals.css` (the same design
  system as the original static site)
- No database, no API routes — forms post to Netlify Forms / Formspree

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

Everything editable lives in `lib/*.js` as plain data — no HTML hunting
required:

| File | Controls |
|---|---|
| `lib/site.js` | Name, email, WhatsApp number, phone, domain, default WhatsApp message |
| `lib/caseStudies.js` | The 6 project case studies (Challenge → Solution → Design → Development → Result) |
| `lib/services.js` | The 6 SEO service landing pages |
| `lib/faqs.js` | The 8 FAQ entries — feeds both the visible accordion AND the FAQPage schema, so they can never drift out of sync |
| `lib/content.js` | Trust-strip logos, stats, benefits, process steps, pricing plans, testimonials, about-page tags |

**Before launch**, edit `lib/site.js` — it's the single source of truth for
contact details:

```js
export const SITE = {
  url: "https://www.anuragdutta.dev",   // → your real domain
  email: "hello@anuragdutta.dev",       // → your real email
  whatsappNumber: "919876543210",       // → your real WhatsApp (country code + number, no + or spaces)
  phoneE164: "+91-98765-43210",
  ...
};
```

Every WhatsApp link, the canonical URLs, Open Graph tags, and JSON-LD schema
all read from this one file.

## Assets you still need to add

- **`public/og-image.jpg`** (1200×630) — referenced in every page's Open
  Graph/Twitter tags via `SITE.ogImage`, but not included in this repo.
- **A real headshot** — replace the gradient placeholder in
  `components/sections/AboutSection.jsx` (`.about-photo`) with an `<img>`.
- **Real client logos & testimonial photos** — `lib/content.js` currently
  holds clearly-labeled illustrative placeholders (the homepage says so too;
  remove that disclaimer once you swap in real ones).
- **Real project links** — case studies in `lib/caseStudies.js` point their
  `liveUrl` at reserved `*.example.com`/`.example.org` placeholder domains.
  Replace with real URLs once you have live client projects to link to.

## Making the forms work

Same as the original static site: both forms (`components/AuditForm.jsx`,
`components/ContactForm.jsx`, sharing logic in `components/LeadForm.jsx`)
already carry `data-netlify="true"` and a matching hidden `form-name` field —
deploy the exported `/out` folder to **Netlify** and submissions appear
automatically under Site settings → Forms, no extra config needed (Netlify's
form-detection scans the built static HTML, so this works with the export
output exactly as it would with plain HTML).

To use **Formspree** or another provider instead, change the `action` prop
passed into `<AuditForm>`/`<ContactForm>` (via `LeadForm`'s `action` prop) to
your endpoint URL, and you can drop the `data-netlify` attribute.

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
- JSON-LD (`ProfessionalService`, `Person`, `WebSite`, `FAQPage` on the
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

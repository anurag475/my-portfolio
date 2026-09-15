# Anurag Dutta — Web Developer Portfolio

A premium, conversion-focused portfolio/freelancer website. Plain HTML/CSS/JS —
no build step, no framework, no dependencies to install. Open `index.html` in
a browser to preview, or deploy the whole folder to any static host.

## What's in here

```
index.html                     Homepage — all 14 sections
work/*.html                    6 project case studies
services/*.html                6 SEO-targeted service landing pages
assets/css/style.css           Design system + all styles
assets/js/main.js              Nav, accordion, forms, reveal animations, WhatsApp links
assets/img/favicon.svg         Browser tab icon
robots.txt, sitemap.xml        SEO crawling files
```

## Before you launch — replace these placeholders

Everything below was intentionally left as a clearly-fake placeholder so the
site is safe to preview/share as-is, but **must** be swapped before it goes
live for real clients.

### 1. Contact details
Find-and-replace across all `.html` files:

| Placeholder | Replace with | Where it's used |
|---|---|---|
| `hello@anuragdutta.dev` | your real email | Contact section, footer, schema |
| `919876543210` | your real WhatsApp number (country code + number, no `+` or spaces) | `assets/js/main.js` → `WHATSAPP_NUMBER` constant (change it **once**, here — every WhatsApp link/button on every page reads from this one value) |
| `+91-98765-43210` | your real phone number | JSON-LD schema in `index.html` `<head>` |
| `www.anuragdutta.dev` | your real domain | Every `<link rel="canonical">`, `og:url`, and schema `url`/`@id` field, plus `robots.txt` and `sitemap.xml` |

### 2. "Visit Website" links on project cards
Case studies are illustrative examples (see note below), so their "Visit
Website" links point to `*.example.com`/`.example.org` domains — these are
IANA-reserved placeholder domains that intentionally don't resolve. Once you
have real, live client projects, replace each with the real project URL, or
remove the button for projects that aren't publicly visitable.

### 3. Testimonials, client logos, and case studies
The homepage explicitly labels the trust-strip logos and testimonials as
**illustrative examples** — remove those disclaimer lines once you replace
them with real content:
- `index.html` → logo strip (`.logo-strip`) — swap wordmarks for real client
  logos (as `<img>` with descriptive `alt` text) once you have permission to
  display them.
- `index.html` → testimonials section — replace with real client quotes,
  names, businesses, and (ideally) real photos instead of initials avatars.
- `work/*.html` — these 6 case studies are realistic but fictional, written
  to demonstrate range across industries. Replace with your own real project
  case studies as you complete them, keeping the Challenge → Solution →
  Design → Development → Result structure.

### 4. Photos
- `.about-photo` in `index.html` (About section) — currently a gradient
  placeholder with initials. Replace with a real professional headshot
  (`<img>` with `loading="lazy"` unless it's above the fold, plus alt text).
- `assets/img/og-image.jpg` — referenced in every page's Open Graph/Twitter
  meta tags but not included in this repo. Create a 1200×630px image (your
  logo/name on a branded background works well) and save it at that exact
  path so social shares show a proper preview image.

### 5. Pricing
All prices in `index.html` (`#pricing`) and the service pages are realistic
placeholders — edit the numbers and feature lists to match what you actually
charge.

## Making the forms actually work

There are two forms (Free Website Audit, Project Enquiry) plus this is a
static site with no backend, so pick **one** of these:

**Option A — Netlify (recommended, zero backend code):**
Both `<form>` tags already have `data-netlify="true"` and a matching hidden
`form-name` field, which is all Netlify needs. Deploy to Netlify and submissions
appear automatically in Site settings → Forms. Nothing else to change.

**Option B — Formspree or another form endpoint:**
Change each form's `action="/audit-request"` / `action="/project-enquiry"`
to your Formspree endpoint (e.g. `https://formspree.io/f/xxxxxxx`), and you
can remove the `data-netlify` attribute and hidden `form-name` input.

Either way, `assets/js/main.js` intercepts the submit, posts via `fetch`,
and shows the in-page "success" message — so the experience stays smooth
even though it's a static site. The honeypot field (`_gotcha`) provides
basic spam protection; Netlify recognizes it automatically.

## Analytics

No analytics script is wired in by default (kept out so the site stays fast
until you choose one). To add Google Analytics or Plausible, paste the
provider's snippet just before `</head>` on `index.html` — the case study and
service pages inherit navigation from it but currently don't include the
snippet themselves, so add it to each `<head>` if you want full-site tracking
(or better, extract it into one included file if you move to a static site
generator later).

## Notes on how the site behaves

- **Sticky nav, floating WhatsApp button, mobile sticky bar**: all live in
  `assets/js/main.js` and `style.css` — no configuration needed.
- **Engagement popup**: appears once per browser session (via
  `sessionStorage`), triggered by exit-intent on desktop or scroll-depth +
  dwell time on mobile. Tune the thresholds in `main.js` if it feels too
  eager or too rare.
- **FAQ content** appears in two places that must stay in sync: the visible
  accordion in `index.html` and the `FAQPage` JSON-LD schema in the same
  file's `<head>` (search results can render FAQ answers directly, but only
  if the schema matches the visible text).
- **This is India-priced (₹) and India-focused copy** by design (per your
  brief) — if you later want to target a specific city for local SEO, add
  it to the `<title>`/meta description of `index.html`, the `areaServed`
  schema fields, and the "web developer in ___" keyword phrasing throughout.

## Deploying

Any static host works — Netlify, Vercel, GitHub Pages, Cloudflare Pages.
Drag-and-drop the whole folder onto Netlify's dashboard for the fastest path
to a live URL with working forms.

// Single source of truth for the FAQ section — feeds both the visible
// accordion on the homepage AND the FAQPage JSON-LD schema, so they can
// never drift out of sync (a caveat the old static site's README had to
// call out manually).
export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Website development pricing starts at ₹9,999 for a single landing page and scales based on the number of pages, custom design work, and functionality you need. Most business websites fall between ₹19,999–₹34,999. You'll get a clear, fixed quote before any work begins — no hidden costs.",
  },
  {
    q: "How long does it take?",
    a: "A landing page typically takes 5–7 days. A full business website takes 2–3 weeks, and custom or e-commerce builds take 3–5 weeks depending on scope. You'll get a project timeline upfront during the discovery call.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes. I can set up and manage reliable, fast hosting for you, or deploy to a host/domain you already own — whichever works best for your budget and technical comfort level.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Website redesign is one of my core services — I audit your current site, keep what's working, and rebuild the rest with modern design, faster performance and mobile responsiveness.",
  },
  {
    q: "Do you provide SEO?",
    a: "Every website I build includes technical on-page SEO foundations — clean code, proper heading structure, meta tags, sitemaps and fast load times. Ongoing SEO content strategy is available as an add-on.",
  },
  {
    q: "Can you maintain my website after launch?",
    a: "Yes — I offer ongoing maintenance and support plans covering updates, backups, security monitoring and small content changes, so your website keeps running smoothly after launch.",
  },
  {
    q: "Do you work with businesses outside my city?",
    a: "Yes, I work with clients across India (and internationally) entirely online — through video calls, WhatsApp and email — so location is never a barrier.",
  },
  {
    q: "What technologies do you use?",
    a: "Depending on the project, I build with HTML/CSS/JavaScript, React and Next.js, WordPress, Webflow or Shopify — always chosen based on what best fits your goals, budget and long-term maintenance needs.",
  },
];

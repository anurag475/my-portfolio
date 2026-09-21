// All project case studies. Order here also drives the prev/next chain on
// each case study page (it loops: last project's "next" wraps to the first).
//
// `mockup` describes the fake browser-window content blocks rendered by
// <BrowserMockup> — see components/BrowserMockup.jsx for the block types.
export const caseStudies = [
  {
    slug: "rv-organica",
    title: "RV Organica — Website Redesign",
    headline: "RV Organica — a website redesign concept for an essential oils and botanical raw materials brand.",
    tag: "Website Redesign",
    industry: "Essential Oils / Botanical Ingredients",
    servicesLine: "Website Redesign Concept",
    // Redesign concept — no tech stack or timeline to list.
    tech: [],
    timeline: "",
    description:
      "A redesign concept for RV Organica's website — a calm, botanical look with a clear catalogue, a bulk-order path and trust signals built into the first screen.",
    liveUrl: "https://rv-organica-redesign.netlify.app/",
    liveLabel: "View Live Demo",
    screenshot: { src: "/work/rv-organica.png", alt: "RV Organica website redesign concept" },
    stages: {
      challenge: {
        heading: "A catalogue-heavy brand needed to feel pure, not cluttered.",
        body: "RV Organica sells essential oils, carriers, skincare ingredients, candle and soap supplies and raw ingredients — a wide range that can easily overwhelm a first-time visitor and hide the quality behind the product list.",
      },
      solution: {
        heading: "Clear navigation, with wholesale and search up front.",
        body: "The redesign puts a search bar, catalogue button and bulk enquiry within reach at the top, organizes the range into clear categories, and leads with a promise — \"Purity in Every Drop, Wellness in Every Breath.\"",
      },
      design: {
        heading: "Earthy greens, warm neutrals and botanical photography.",
        body: "A deep forest-green and cream palette, an elegant serif headline and product photography styled with lavender, eucalyptus and dried botanicals keep the brand feeling natural and premium.",
      },
      development: {
        heading: "Trust signals built into the first screen.",
        body: "Quick badges — 100% Pure & Natural, Sourced Responsibly, Trusted by Wellness Brands — sit under the headline, with a worldwide shipping, secure payments, support and sustainable sourcing strip right below the hero.",
      },
      result: {
        heading: "A storefront that looks as pure as the product.",
        body: "The concept shows how RV Organica's range could be presented with clearer navigation, a stronger first impression and a direct route for both retail and bulk buyers.",
      },
    },
  },
  {
    slug: "rainbow-dhamma-foundation",
    title: "Rainbow Dhamma Foundation",
    headline: "Rainbow Dhamma Foundation — a digital home for a mission of compassion and progressive values.",
    tag: "NGO / Non-Profit",
    industry: "NGO / Non-Profit",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A modern, mission-driven website for a Buddhist-inspired humanitarian foundation, presenting their compassion-focused programs and making it easy for supporters to get involved.",
    liveUrl: "https://rainbowdhammafoundation.org/",
    screenshot: { src: "/work/rainbow-dhamma-foundation.webp", alt: "Rainbow Dhamma Foundation homepage" },
    stages: {
      challenge: {
        heading: "A mission built on compassion needed a site that felt like it.",
        body: "As a foundation whose message centers on compassion, inclusivity and progressive values, Rainbow Dhamma Foundation needed a website that could carry that tone visually, while still making it simple for new visitors to understand their programs and take action.",
      },
      solution: {
        heading: "A clear path from first visit to getting involved.",
        body: "The site is structured around a straightforward visitor journey: an emotionally resonant hero section, an at-a-glance overview of focus areas — Education & Awareness, Community Activities, Social Impact, Get Involved — and a prominent \"Support Our Work\" path throughout.",
      },
      design: {
        heading: "Warm imagery, meaningful symbolism.",
        body: "A one-page layout built around photography, iconography, and the foundation's own dhamma-wheel and rainbow motifs, pairing a mission-first hero with clearly signposted routes into the organization's activities and ways to support them.",
      },
      development: {
        heading: "Built to read clearly on any device.",
        body: "A fast, fully responsive build so the foundation's message comes through clearly whether someone is discovering the site on a phone or reviewing it on desktop before getting involved.",
      },
      result: {
        heading: "A digital home that matches the mission.",
        body: "The result is a website that reflects the warmth and seriousness of Rainbow Dhamma Foundation's work, giving supporters a clear, welcoming way to learn more and get involved.",
      },
    },
  },
  {
    slug: "vibegifts",
    title: "VibeGifts",
    headline: "VibeGifts — an online store built to make gift-shopping for kids feel effortless.",
    tag: "E-commerce",
    industry: "E-commerce / Kids' Gifts & Toys",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A thoughtfully designed online store for toys, stationery and gift sets, built to help parents find the right gift quickly and check out with confidence.",
    liveUrl: "https://vibegifts.in/",
    screenshot: { src: "/work/vibegifts.png", alt: "VibeGifts homepage" },
    stages: {
      challenge: {
        heading: "A gifting brand needed a store as thoughtful as its products.",
        body: "VibeGifts needed an online storefront that could organize a wide range of toys, books, stationery and gift sets in a way that felt curated rather than cluttered, while making it easy for shoppers browsing by age or occasion to find the right gift fast.",
      },
      solution: {
        heading: "Clear browsing paths, from category to checkout.",
        body: "We built a store structured around how people actually shop for gifts — by category and by the recipient's age — with search, wishlist and cart front and center, so a parent can go from browsing to checkout without friction.",
      },
      design: {
        heading: "Warm, playful, and easy on the eyes.",
        body: "A soft, welcoming visual identity with a pink-and-white palette, friendly product photography and a prominent hero banner set the tone immediately as a store built for happier moments, not just transactions.",
      },
      development: {
        heading: "Built for everyday shopping habits.",
        body: "The site supports free shipping thresholds, cash on delivery and secure payments out of the box, with category, best-seller and new-arrival views that make repeat visits easy to navigate.",
      },
      result: {
        heading: "A storefront ready to grow with the brand.",
        body: "The result is a clean, trustworthy shopping experience that matches VibeGifts' promise of thoughtful gifts — giving the brand a storefront it can build on as its catalog grows.",
      },
    },
  },
  {
    slug: "astorea",
    title: "Astorea",
    headline: "Astorea — a construction-solutions brand website built to project industrial credibility.",
    tag: "B2B / Industrial",
    industry: "Construction Materials / B2B Manufacturing",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A premium brand website for a construction-solutions manufacturer, presenting their adhesives, grouts and epoxy product lines to builders, architects and industry buyers.",
    liveUrl: "https://astorea.in/",
    screenshot: { src: "/work/astorea.png", alt: "Astorea homepage" },
    stages: {
      challenge: {
        heading: "An industrial product line needed a website that felt premium, not generic.",
        body: "Astorea makes tile adhesives, grouts, epoxy and specialty construction products used by builders, architects and industrial clients — a category where most competitor sites look purely functional. They needed a site that communicated quality and trust to a professional, technical buyer.",
      },
      solution: {
        heading: "A product-led site built around who buys, and why.",
        body: "We structured the site around the audiences Astorea actually sells to — residential, commercial, industrial and infrastructure — with a clear product catalogue and a straightforward path to contacting sales or requesting technical support.",
      },
      design: {
        heading: "Confident, dark, and gold-accented.",
        body: "A dark, editorial hero paired with warm gold accents and large lifestyle photography positions Astorea as a premium supplier rather than a commodity one, while a clean grid of product categories keeps the technical content easy to scan.",
      },
      development: {
        heading: "Built to showcase a growing catalogue.",
        body: "The site is organized so new product lines, applications and resources can be added over time without the structure breaking down, with clear calls to action toward the catalogue download and sales contact throughout.",
      },
      result: {
        heading: "A brand presence that matches 500+ supported projects.",
        body: "The result is a site that gives Astorea's existing track record — trusted across residential, commercial, industrial and infrastructure projects — a digital front door that looks as credible as the work itself.",
      },
    },
  },
  {
    slug: "hindustan-water-solution",
    title: "Hindustan Water Solution",
    headline: "Hindustan Water Solution — a manufacturer's storefront built to serve dealers and buyers Pan-India.",
    tag: "B2B / Industrial",
    industry: "Water Treatment / B2B Manufacturing & Wholesale",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A trust-building manufacturer website for a water treatment chemicals and equipment supplier, built to support dealers, distributors and Pan-India wholesale buyers.",
    liveUrl: "https://www.hindustanwatersolution.in/",
    screenshot: { src: "/work/hindustan-water-solution.png", alt: "Hindustan Water Solution homepage" },
    stages: {
      challenge: {
        heading: "A BIS-approved manufacturer needed a site that read as an industry authority.",
        body: "Hindustan Water Solution manufactures and supplies water treatment chemicals, resins, filter media and RO systems Pan-India, but needed a website that could establish credibility with dealers and institutional buyers at a glance, and make a wide, technical product catalogue easy to browse.",
      },
      solution: {
        heading: "A catalogue-first site built for dealers and bulk buyers.",
        body: "We built the site around a clear product range — ion exchange resins, activated carbon, filter cartridges, RO systems and dosing pumps — with a prominent quote-request path, so distributors and businesses can find what they need and request pricing quickly.",
      },
      design: {
        heading: "Clean, industrial, and trust-forward.",
        body: "A blue-and-white palette with clear certification badges (BIS approved, BIS/ISI certified) and straightforward product photography positions the brand as a reliable, established manufacturer rather than a generic supplier site.",
      },
      development: {
        heading: "Built to scale with a growing product range.",
        body: "The site is structured so new product categories, spare parts and best-sellers can be added without restructuring the catalogue, with contact details and a request-a-quote call to action kept visible throughout.",
      },
      result: {
        heading: "A digital storefront that matches a Pan-India operation.",
        body: "The result is a site that reflects Hindustan Water Solution's scale — serving 2000+ customers and a wide dealer network — giving both new institutional buyers and existing distributors a clear, credible place to start.",
      },
    },
  },
  {
    slug: "bavanya",
    title: "Bavanya",
    headline: "Bavanya — an engineering-led manufacturer's site built to win institutional trust.",
    tag: "B2B / Industrial",
    industry: "Water Treatment Systems / B2B Manufacturing",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A trust-building website for a direct manufacturer of RO plants, water softeners and ETP/STP systems, built to convert institutional and enterprise enquiries Pan-India.",
    liveUrl: "https://www.bavanya.co.in/",
    screenshot: { src: "/work/bavanya.png", alt: "Bavanya homepage" },
    stages: {
      challenge: {
        heading: "A direct manufacturer needed a site that signaled engineering credibility.",
        body: "Bavanya designs, installs and maintains RO plants, softening systems and ETP/STP infrastructure for institutions and enterprises, but needed a website that could put their engineering track record and manufacturing credentials front and center for buyers evaluating vendors at scale.",
      },
      solution: {
        heading: "A product- and proof-led site for enterprise buyers.",
        body: "We structured the site around a clear product range — RO systems, water softeners, ETP/STP, filter cartridges and pumps — backed by concrete proof points (installations, clients, years of engineering experience) and a direct path to a quote or consultation.",
      },
      design: {
        heading: "Deep blue, technical, and confidence-first.",
        body: "A navy-and-blue palette with clean industrial photography and a stat-driven trust bar communicates the scale and reliability enterprise and institutional buyers look for before reaching out.",
      },
      development: {
        heading: "Built to organize a wide industrial catalogue.",
        body: "The site is structured so product lines and the industries served — manufacturing, hospitality, healthcare, education and more — stay easy to browse as the catalogue grows, with quote and consultation CTAs kept prominent throughout.",
      },
      result: {
        heading: "A digital presence that matches 5+ years of engineering delivery.",
        body: "The result is a site that reflects Bavanya's track record — 200+ installations and 500+ clients across India — giving enterprise and institutional buyers a credible first impression before the sales conversation even starts.",
      },
    },
  },
  {
    slug: "normal-school-sootea",
    title: "Normal School Sootea",
    headline: "Normal School Sootea — a government school's information hub for students, parents and staff.",
    tag: "Education / Government",
    industry: "Education / Government Institution",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "An informational website for a government school, giving students, parents and staff a central place for notices, academics and school updates.",
    liveUrl: "https://normalschoolsootea.org.in/",
    screenshot: { src: "/work/normal-school-sootea.png", alt: "Normal School Sootea homepage" },
    stages: {
      challenge: {
        heading: "A government school needed a reliable, central place to communicate.",
        body: "Normal School Sootea needed a website where students, parents and staff could reliably find notices, announcements, academic information and school updates in one place, instead of relying on scattered, informal channels.",
      },
      solution: {
        heading: "A clear, notice-first structure for the school community.",
        body: "We built the site around the sections the school community checks most — latest notices and announcements, a principal's message, an events calendar, academics and a gallery — so visitors can find what they need from the homepage without digging.",
      },
      design: {
        heading: "Formal, institutional, and easy to navigate.",
        body: "A restrained navy-and-white palette and a straightforward top navigation give the site the tone appropriate for a government institution, prioritizing clarity over decoration.",
      },
      development: {
        heading: "Built for a small team to keep updated.",
        body: "The site is structured so notices, events and gallery content can be kept current by school staff without needing ongoing developer involvement.",
      },
      result: {
        heading: "A dependable digital front door for the school.",
        body: "The result is a site that gives the school community a single, dependable place to check for notices, events and information about the institution.",
      },
    },
  },
  {
    slug: "outfyle",
    title: "Outfyle",
    headline: "Outfyle — a minimal storefront for a custom apparel brand.",
    tag: "E-commerce",
    industry: "E-commerce / Custom Apparel",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A clean, minimal storefront for a custom apparel brand, letting customers explore premium t-shirts, hoodies and sweatshirts and start designing their own.",
    liveUrl: "https://www.outfyle.com/",
    screenshot: { src: "/work/outfyle.png", alt: "Outfyle homepage" },
    stages: {
      challenge: {
        heading: "A custom apparel brand needed a store as premium as its product.",
        body: "Outfyle needed a storefront that could sell the idea of custom apparel — not just list products — while still making it easy for customers to browse collections and understand the design process behind each piece.",
      },
      solution: {
        heading: "A large-type, photo-led home for the collection.",
        body: "We built a homepage structured around oversized editorial type and a photo grid of the product line, with clear paths into Collections, Process and Contact so customers can move from inspiration to ordering with minimal friction.",
      },
      design: {
        heading: "Minimal, neutral, and product-first.",
        body: "A restrained neutral palette and generous whitespace let the apparel photography carry the page, avoiding clutter so the focus stays on the product and the craft behind it.",
      },
      development: {
        heading: "Built to scale with new drops.",
        body: "The site is structured so new collections and products can be added without disrupting the layout, keeping the shopping experience consistent as the catalogue grows.",
      },
      result: {
        heading: "A storefront that matches a premium custom brand.",
        body: "The result is a clean, confident online presence that reflects Outfyle's premium positioning in the custom apparel space.",
      },
    },
  },
  {
    slug: "auraweb-ai-school",
    title: "AuraWeb AI School",
    headline: "AuraWeb AI School — a bold, high-energy landing page built to recruit Punjab's first AI students.",
    tag: "EdTech",
    industry: "Education / AI Training",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A high-impact landing page for an AI training program, built to recruit students with a bold visual identity and a clear path from curiosity to enrollment.",
    liveUrl: "https://www.aischool.auraweb.tech/",
    screenshot: { src: "/work/auraweb-ai-school.png", alt: "AuraWeb AI School homepage" },
    stages: {
      challenge: {
        heading: "A new AI program needed to feel as cutting-edge as its subject.",
        body: "AuraWeb AI School needed a landing page that could make a technical, unfamiliar subject — AI — feel exciting and accessible to students across Punjab, while clearly explaining the program and driving registrations.",
      },
      solution: {
        heading: "A single, focused path from curiosity to registration.",
        body: "We built a bold, single-page site structured around one goal: getting students to register. A terminal-styled hero, a clear breakdown of what they'll learn, build and grow, and a always-visible registration call-to-action carry the visitor straight to sign-up.",
      },
      design: {
        heading: "Dark, red-accented, and unapologetically techy.",
        body: "A black-and-red color system, monospace terminal styling and a friendly robot mascot balance a genuinely technical subject with an approachable, energetic tone aimed at students rather than enterprise buyers.",
      },
      development: {
        heading: "Built to make a technical program easy to scan.",
        body: "The page is structured around a clear \"Learn → Build → Grow\" journey with a trust bar and stats up front, so a first-time visitor understands the program's credibility within seconds of landing.",
      },
      result: {
        heading: "A recruitment page built for one conversion.",
        body: "The result is a landing page that makes an ambitious, first-of-its-kind AI program for Punjab's students feel current, credible and worth joining.",
      },
    },
  },
  {
    slug: "nyayadarpan-ai",
    title: "NyayaDarpan AI",
    headline: "NyayaDarpan AI — an AI legal assistant built to make Indian law understandable.",
    tag: "LegalTech / AI",
    industry: "Legal Technology / AI",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "An AI-powered legal platform giving everyday Indians a plain-language way to understand their rights, resolve consumer issues and connect with verified lawyers.",
    liveUrl: "https://nyayadarpanai.com/",
    screenshot: { src: "/work/nyayadarpan-ai.png", alt: "NyayaDarpan AI homepage" },
    stages: {
      challenge: {
        heading: "Legal information in India is dense, scattered and intimidating.",
        body: "Most people don't know their basic legal rights, and finding trustworthy, understandable guidance — in their own language — is hard. NyayaDarpan AI needed a site that made an AI legal assistant feel approachable rather than clinical, for a genuinely first-time audience.",
      },
      solution: {
        heading: "One clear entry point: ask, and get an answer.",
        body: "The homepage is built around a single, obvious action — a chat-style input to ask a legal question — backed by a clear multilingual promise and a direct path to a human lawyer for anything AI shouldn't handle alone.",
      },
      design: {
        heading: "Calm, credible, and unmistakably Indian.",
        body: "A soft gradient backdrop, the Supreme Court dome as a quiet visual anchor, and a restrained black-and-violet palette give the platform the seriousness of a legal service without feeling cold or bureaucratic.",
      },
      development: {
        heading: "Built as part of the founding engineering team.",
        body: "As a software engineer on the NyayaDarpan AI team, I worked on the platform's public-facing site — designed to build trust quickly and route visitors to the right next step, whether that's the AI assistant or a verified lawyer.",
      },
      result: {
        heading: "A legal AI platform that reads as trustworthy from the first screen.",
        body: "The result is a homepage that sets the right tone for a genuinely sensitive category — technical enough to be credible, plain enough that anyone can use it.",
      },
    },
  },
  {
    slug: "rabal",
    title: "Rabal",
    headline: "Rabal — a B2B fruit supply app connecting local farms to buyers across Jammu & Kashmir.",
    tag: "Mobile App",
    industry: "B2B Agriculture / Fruit Supply (Jammu & Kashmir)",
    // NOTE: services/tech/timeline below are left unconfirmed — see the
    // conversation this was added in. Fill in real specifics once known;
    // empty tech/timeline are handled gracefully by the templates rather
    // than showing invented values.
    servicesLine: "",
    tech: [],
    timeline: "",
    description:
      "A B2B fruit-selling mobile app for Jammu & Kashmir, connecting local farms directly to buyers with same-day and express delivery.",
    // Not published as a normal website — search "Rabal" on the Play Store
    // to review it. liveLabel overrides FeaturedWork's default "Visit
    // Website" link text for this entry.
    liveUrl: "https://play.google.com/store/search?q=Rabal&c=apps",
    liveLabel: "Find on Play Store",
    platform: "app",
    screenshot: { src: "/work/rabal.jpg", alt: "Rabal app home screen" },
    stages: {
      challenge: {
        heading: "Fresh produce needed a direct, reliable route from farm to buyer.",
        body: "Rabal needed to give buyers across Jammu & Kashmir a fast, trustworthy way to source fresh fruit in bulk, cutting out the friction and unpredictability of informal supply chains — while still feeling as easy to use as a consumer shopping app.",
      },
      solution: {
        heading: "A familiar shopping experience, built for bulk buying.",
        body: "The app is structured around fast discovery — search, daily fresh arrivals, curated \"Smart Boxes\" and same-day delivery windows — so buyers can place a bulk order as quickly and confidently as an everyday grocery run.",
      },
      design: {
        heading: "Fresh, produce-forward, and unmistakably local.",
        body: "Bright fruit photography, a green-and-white palette, and Kashmir-specific touches (like the Kashmiri Apple listing) give the app a distinctly regional identity rather than a generic marketplace template.",
      },
      development: {
        heading: "Built around real delivery logistics.",
        body: "Live delivery windows, express delivery countdowns, membership perks and reorder shortcuts are all built into the core experience, not bolted on — reflecting how buyers actually restock on a schedule.",
      },
      result: {
        heading: "A supply chain that feels as easy as ordering groceries.",
        body: "The result is an app that makes bulk fruit sourcing straightforward for buyers across Jammu & Kashmir. It's live on the Play Store — search \"Rabal\" to check it out.",
      },
    },
  },
  {
    slug: "rk-international-school",
    title: "R K International School",
    headline: "R K International School — keeping a growing school's website accurate, current and easy to trust.",
    tag: "Website Administration",
    industry: "Education / K-12 School",
    servicesLine: "Website Administration & Content Updates",
    // Not a design/build project like the others above — this is an
    // ongoing administrator role, so there's no tech stack/timeline to
    // list and no liveUrl yet (add one once the school shares it; the
    // "Visit Website" link only renders when liveUrl is set).
    tech: [],
    timeline: "",
    description:
      "Ongoing website administration for R K International School (Narela Road, Safiabad) — keeping admissions info, mandatory disclosures, notices and school updates accurate and current for parents and staff.",
    liveUrl: null,
    screenshot: { src: "/work/rk-international-school.png", alt: "R K International School homepage" },
    stages: {
      challenge: {
        heading: "A growing school's website needed a steady hand, not just a launch.",
        body: "R K International School already had a website covering admissions, mandatory disclosures, faculty and gallery pages — what it needed was someone to keep that information accurate, current and properly organized as the school year progressed.",
      },
      solution: {
        heading: "Ongoing administration, not a one-off handover.",
        body: "Working as the site's administrator, I handle day-to-day updates — from mandatory public disclosures and exam corner notices to admission enquiries and gallery content — so the school's team can focus on running the school, not maintaining a website.",
      },
      design: {
        heading: "Keeping the school's existing identity consistent.",
        body: "Updates and new content are made to match the site's established maroon-and-gold identity and layout, so day-to-day changes never feel inconsistent with the rest of the site.",
      },
      development: {
        heading: "Reliable behind-the-scenes upkeep.",
        body: "Regular checks on links, forms and navigation — About, Mandatory Disclosure, Administration, Faculty, Gallery — keep the site working correctly for parents, staff and prospective families.",
      },
      result: {
        heading: "A website parents and staff can rely on.",
        body: "The result is a school website that stays accurate and current — from admission enquiries to compliance disclosures — without the gaps that come from a website nobody is actively maintaining.",
      },
    },
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyNav(slug) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const prev = caseStudies[(i - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(i + 1) % caseStudies.length];
  return { prev, next };
}

// Homepage content blocks. Everything here is factual — no invented numbers,
// dates or quotes. Where a detail isn't confirmed yet (internship dates,
// certifications, testimonials) it's left out rather than guessed; see the
// notes beside each block for how to add it.

import { SITE } from "./site";
import { caseStudies } from "./caseStudies";

export const heroRoles = ["Software Developer", "AI / ML Developer", "Freelancer", "Entrepreneur"];

export const socialLinks = [
  { icon: "GitHub", label: "GitHub", url: SITE.social.github },
  { icon: "LinkedIn", label: "LinkedIn", url: SITE.social.linkedin },
  { icon: "Instagram", label: "Instagram", url: SITE.social.instagram },
];

// Sectors the portfolio's projects actually span — derived from
// lib/caseStudies.js, kept as a readable list for the credibility section.
export const industries = [
  "Legal tech",
  "Agri B2B",
  "Manufacturing",
  "E‑commerce",
  "Education",
  "Non-profit",
  "Wellness",
];

// "Live projects" is Anurag's own total across all client work (only a
// selection is shown as case studies); the other numbers are counted from
// the data in this repo.

export const credibility = [
  { value: "20+", label: "Live projects", note: "Websites, web apps and a Play Store app" },
  { value: String(industries.length), label: "Industries", note: industries.join(" · ") },
  { value: "3", label: "Ventures", note: "AuraWeb, AuraWeb AI School, Wooobi" },
  { value: "2", label: "Industry internships", note: "Machine learning & software development" },
];

export const credentials = [
  { title: "B.Tech, Computer Science (AI & ML)", place: "Kurukshetra University, Haryana" },
  { title: "GATE 2025 — Computer Science", place: "Qualified" },
];

// Experience timeline. No dates are shown because none are confirmed yet —
// add a `period` string (e.g. "2024 — Present") to any entry and the
// timeline will display it automatically.
export const experience = [
  {
    kind: "Venture",
    role: "Founder",
    org: "Wooobi",
    logo: "brand/wooobi-logo",
    status: "In development",
    body: "A software and digital product brand, currently being built from the ground up.",
  },
  {
    kind: "Venture",
    role: "Co-Founder",
    org: "AuraWeb",
    logo: "brand/auraweb-logo",
    url: "https://auraweb.tech/",
    body: "A web development and AI studio delivering websites and digital products for clients.",
  },
  {
    kind: "Venture",
    role: "Co-Founder",
    org: "AuraWeb AI School",
    logo: "brand/auraweb-logo",
    url: "https://www.aischool.auraweb.tech/",
    body: "AuraWeb's AI training program, teaching students practical, real-world AI skills.",
  },
  {
    kind: "Engineering",
    role: "Software Engineer",
    org: "NyayaDarpan AI",
    url: "https://nyayadarpanai.com/",
    body: "Engineering on the public platform of an AI legal assistant built for everyday Indians.",
  },
  {
    kind: "Freelance",
    role: "Independent Developer",
    org: "Client projects",
    body: "20+ live projects for clients across e-commerce, B2B manufacturing, education and non-profit — from first brief to launch.",
  },
  {
    kind: "Internship",
    role: "Machine Learning Intern",
    org: "Black Hole Space Tech",
    place: "Bangalore",
    body: "Industry internship focused on machine learning.",
  },
  {
    kind: "Internship",
    role: "Software Developer Intern",
    org: "Geetanjali Events and Infra",
    place: "Kolkata",
    body: "Industry internship focused on software development.",
  },
  {
    kind: "Community",
    role: "Executive Member",
    org: "Jatinga Foundation",
    logo: "brand/jatinga-logo",
    body: "An NGO focused on skill development, creativity and community life.",
  },
];

export const skills = [
  {
    key: "dev",
    title: "Development",
    blurb: "Production web apps, APIs and mobile apps.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "React Native", "Flutter", "Tailwind CSS", "REST APIs"],
  },
  {
    key: "ai",
    title: "AI / ML",
    blurb: "Models that make products smarter.",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "OpenCV", "NLP", "Pandas", "NumPy"],
  },
  {
    key: "data",
    title: "Data",
    blurb: "Pipelines and analysis at scale.",
    items: ["SQL", "PySpark", "Azure Databricks", "Data Analytics"],
  },
  {
    key: "tools",
    title: "Product & Tools",
    blurb: "Shipping, hosting and design.",
    items: ["GitHub", "Supabase", "Firebase", "Vercel", "Netlify", "Docker", "Figma", "Postman", "WordPress", "Shopify"],
  },
];

// `href` points at the matching in-depth service page where one exists.
export const services = [
  {
    icon: "Monitor",
    title: "Website Development",
    value: "A site that earns trust in the first five seconds and turns visitors into enquiries.",
    href: "/services/business-websites",
  },
  {
    icon: "Layout",
    title: "Web Applications",
    value: "Dashboards, portals and internal tools that replace spreadsheets and save your team hours.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Applications",
    value: "Android and iOS apps your customers actually keep on their home screen.",
    href: "/services/app-development",
  },
  {
    icon: "Cpu",
    title: "AI / ML Solutions",
    value: "Assistants, automation and prediction built into your product — useful, not a gimmick.",
    href: "/services/ai-ml-projects",
  },
  {
    icon: "Layers",
    title: "SaaS & Product Development",
    value: "From validated idea to a launched MVP you can put in front of paying users.",
  },
  {
    icon: "Cart",
    title: "E-commerce Solutions",
    value: "Storefronts built around how your customers browse, compare and check out.",
    href: "/services/ecommerce-websites",
  },
  {
    icon: "Zap",
    title: "SEO & Performance",
    value: "Faster pages and cleaner structure so you rank higher and lose fewer visitors.",
  },
  {
    icon: "Terminal",
    title: "Custom Software",
    value: "Software shaped around your exact workflow, instead of bending your business to a template.",
  },
];

export const principles = [
  { title: "Business first, code second", body: "I start with who's buying and what they need to trust — then decide what to build." },
  { title: "Built to be used", body: "Clean, fast, accessible products that real people can pick up without a manual." },
  { title: "A direct line to the builder", body: "You talk to the person writing the code. No account managers, no hand-offs." },
];

// Client testimonials. Only entries with `approved: true` are shown on the
// site — set it once the client has confirmed the wording (or replace the
// quote with their exact words). The section hides itself if nothing is
// approved, so no unconfirmed quote is ever published.
//   photo:   key in lib/images.js (square), or null for an initials avatar
//   project: slug in lib/caseStudies.js, links the quote to that case study
export const testimonials = [
  {
    approved: true,
    name: "Divesh Batra",
    role: "Founder, Astorea",
    photo: null,
    project: "astorea",
    quote:
      "We needed a site that made a construction materials brand feel premium, not generic — Anurag got that instantly. The final site looks like it belongs to a company twice our size.",
  },
  {
    approved: true,
    name: "Shweta Jain",
    role: "Co-Founder, VibeGifts",
    photo: null,
    project: "vibegifts",
    quote:
      "Our catalog is huge and always changing, but the site never feels cluttered. Parents tell us it's easy to find the right gift fast — that was exactly the brief.",
  },
  {
    approved: true,
    name: "Jitu Barman",
    role: "Founder, Hindustan Water Solution",
    photo: "people/jitu-barman",
    project: "hindustan-water-solution",
    quote:
      "As a manufacturer, we needed our site to be taken seriously by dealers and bulk buyers, not just look nice. Anurag got that balance right — it reads as credible as our actual operation.",
  },
  {
    approved: true,
    name: "Jeet W. Sharma",
    role: "Founder, Rainbow Dhamma Foundation",
    photo: null,
    project: "rainbow-dhamma-foundation",
    quote:
      "Anurag understood that this website needed to carry our mission, not just describe it. The final site feels warm and welcoming, exactly how we wanted supporters to feel discovering our work for the first time.",
  },
  {
    approved: true,
    name: "Hardik Arora",
    role: "MFA, 7+ years experience",
    photo: "people/hardik-arora",
    project: null,
    quote:
      "With an MFA background, I don't compromise on visual craft — and Anurag's execution matched exactly what I had in mind, down to the smallest detail. Rare to find that level of design sensitivity in a developer.",
  },
];

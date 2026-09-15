// Smaller content blocks — grouped in one file since each is just a short
// list. Split into lib/caseStudies.js, lib/services.js and lib/faqs.js are
// the bigger ones that earned their own file.

import { SITE } from "./site";

export const trustLogos = ["NORTHPEAK", "Velora", "BRIGHTLEAF", "Solstice Co.", "HARBOR & CO", "Meridian"];

export const socialLinks = [
  { icon: "GitHub", label: "GitHub", handle: "@anurag475", body: "Code, side projects and contributions.", url: SITE.social.github },
  { icon: "LinkedIn", label: "LinkedIn", handle: "Anurag Dutta", body: "Professional updates and networking.", url: SITE.social.linkedin },
  { icon: "Instagram", label: "Instagram", handle: "@im_anurag_0k", body: "Behind-the-scenes and project drops.", url: SITE.social.instagram },
];

// Organizations Anurag is part of, and ventures/agencies he's built —
// distinct from lib/caseStudies.js, which is client work done for others.
// `logo` is a local image path; leave it null to fall back to an icon
// (see `icon`, a name from components/Icons.jsx). `url` null + `status:
// "soon"` renders a "Coming Soon" badge instead of a link; `url` null +
// `status: "live"` (no public site to link to yet) just omits the link.
export const organizations = [
  {
    name: "AuraWeb",
    role: "Co-Founder",
    description: "A web development & AI-focused studio building products and client work.",
    url: "https://auraweb.tech/",
    logo: "/organizations/auraweb-logo.jpg",
    status: "live",
  },
  {
    name: "AuraWeb AI School",
    role: "Co-Founder",
    description: "AuraWeb's AI training program, teaching practical, real-world AI skills.",
    url: "https://www.aischool.auraweb.tech/",
    logo: "/organizations/auraweb-logo.jpg",
    status: "live",
  },
  {
    name: "Nyayadarpan AI",
    role: "Software Engineer",
    description: "An AI-driven platform I contribute to as an engineer.",
    url: "https://nyayadarpanai.com/",
    logo: null,
    icon: "Cpu",
    status: "live",
  },
  {
    name: "Jatinga Foundation",
    role: "Executive Member",
    description: "An NGO focused on skill development, creativity and community life.",
    url: null,
    logo: "/organizations/jatinga-logo.jpg",
    status: "live",
  },
  {
    name: "Wooobi",
    role: "Founder",
    description: "A new venture currently in the works — stay tuned.",
    url: null,
    logo: "/organizations/wooobi-logo.jpg",
    status: "soon",
  },
];

export const stats = [
  { num: "15+", label: "Websites Built", icon: "Layout" },
  { num: "10+", label: "Happy Clients", icon: "Heart" },
  { num: "99%", label: "Mobile Responsive", icon: "Smartphone" },
  { num: "24/7", label: "Support Availability", icon: "MessageCircle" },
];

export const benefits = [
  {
    icon: "Target",
    title: "Conversion Focused",
    body: "Every section has a purpose: building trust or generating action.",
  },
  {
    icon: "Smartphone",
    title: "Mobile First",
    body: "Your website looks great on every screen, from phones to desktops.",
  },
  {
    icon: "Zap",
    title: "Fast & Optimized",
    body: "Performance matters. I build fast, lightweight websites that load instantly.",
  },
  {
    icon: "Search",
    title: "SEO Ready",
    body: "Technical foundations that help search engines understand your website.",
  },
  {
    icon: "Monitor",
    title: "Modern Design",
    body: "Clean, premium interfaces that make your business look professional.",
  },
  {
    icon: "MessageCircle",
    title: "Personal Support",
    body: "Direct communication with me, instead of being passed between departments.",
  },
];

export const processSteps = [
  { num: "01", icon: "MessageCircle", title: "Discovery", body: "Understand your business, audience and goals through a focused conversation." },
  { num: "02", icon: "Target", title: "Strategy", body: "Plan the site structure, content and conversion journey before any design starts." },
  { num: "03", icon: "Layout", title: "Design", body: "Create a modern visual experience aligned with your brand and audience." },
  { num: "04", icon: "Monitor", title: "Development", body: "Build a fast, responsive and scalable website using clean, maintainable code." },
  { num: "05", icon: "Zap", title: "Launch", body: "Deploy, optimize for performance and SEO, and hand over a website you can manage." },
];

export const pricingPlans = [
  {
    tier: "Starter",
    price: "₹9,999",
    forWhom: "For individuals and small businesses.",
    features: ["Landing page", "Responsive design", "Contact form", "Deployment", "Basic SEO"],
    cta: "Choose Starter",
    featured: false,
  },
  {
    tier: "Business",
    price: "₹19,999",
    forWhom: "For growing businesses.",
    features: [
      "5–7 pages",
      "Custom UI design",
      "Responsive design",
      "Contact/WhatsApp integration",
      "SEO setup",
      "Analytics",
      "Deployment",
    ],
    cta: "Choose Business",
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "Premium",
    price: "₹34,999",
    forWhom: "For businesses that need a custom solution.",
    features: [
      "Fully custom website",
      "Advanced functionality",
      "SEO",
      "Performance optimization",
      "Analytics & integrations",
      "Priority support",
    ],
    cta: "Let's Discuss",
    featured: false,
  },
];

// `photo` is left unset here — drop in a real headshot path (e.g.
// "/testimonials/shweta-jain.jpg") once one is available and the
// testimonial carousel will use it automatically; until then it falls
// back to a generated initials avatar (see lib/utils.js initialsAvatar).
export const testimonials = [
  {
    initials: "HA",
    name: "Hardik Arora",
    business: "MFA, 7+ Years Experience",
    photo: "/testimonials/hardik-arora.jpg",
    // Placeholder quote — swap for Hardik's actual words whenever he sends
    // them; same "illustrative example" caveat shown under this section.
    quote:
      "With an MFA background, I don't compromise on visual craft — and Anurag's execution matched exactly what I had in mind, down to the smallest detail. Rare to find that level of design sensitivity in a developer.",
  },
  {
    initials: "DB",
    name: "Divesh Batra",
    business: "Founder, Astorea",
    photo: null,
    // Placeholder quote — swap for Divesh's actual words whenever he sends
    // them; same "illustrative example" caveat shown under this section.
    quote:
      "We needed a site that made a construction materials brand feel premium, not generic — Anurag got that instantly. The final site looks like it belongs to a company twice our size.",
  },
  {
    initials: "SJ",
    name: "Shweta Jain",
    business: "Co-Founder, VibeGifts",
    photo: null,
    // Placeholder quote — swap for Shweta's actual words whenever she sends
    // them; same "illustrative example" caveat shown under this section.
    quote:
      "Our catalog is huge and always changing, but the site never feels cluttered. Parents tell us it's easy to find the right gift fast — that was exactly the brief.",
  },
  {
    initials: "JS",
    name: "Jeet W. Sharma",
    business: "Founder, Rainbow Dhamma Foundation",
    photo: null,
    // Placeholder quote — swap for Jeet's actual words whenever he sends
    // them; same "illustrative example" caveat shown under this section.
    quote:
      "Anurag understood that this website needed to carry our mission, not just describe it. The final site feels warm and welcoming, exactly how we wanted supporters to feel discovering our work for the first time.",
  },
  {
    initials: "JB",
    name: "Jitu Barman",
    business: "Founder, Hindustan Water Solution",
    photo: "/testimonials/jitu-barman.jpg",
    // Placeholder quote — swap for Jitu's actual words whenever he sends
    // them; same "illustrative example" caveat shown under this section.
    quote:
      "As a manufacturer, we needed our site to be taken seriously by dealers and bulk buyers, not just look nice. Anurag got that balance right — it reads as credible as our actual operation.",
  },
];

export const aboutTags = ["Web Development", "UI/UX Design", "Performance", "Business Strategy", "Problem Solving"];

// Qualification/experience shown as a compact two-column block in the
// About section — `icon` is a name from components/Icons.jsx.
export const aboutCredentials = [
  {
    icon: "Book",
    label: "Qualification",
    items: [
      { title: "B.Tech, Computer Science (AI & ML)", place: "Kurukshetra University, Haryana" },
      { title: "GATE 2025 — CSE", place: "Qualified" },
    ],
  },
  {
    icon: "Briefcase",
    label: "Experience",
    items: [
      { title: "Machine Learning Intern", place: "Black Hole Space Tech, Bangalore" },
      { title: "Software Developer Intern", place: "Geetanjali Events and Infra, Kolkata" },
    ],
  },
];

export const techStack = [
  {
    icon: "Globe",
    category: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "WordPress", "Shopify"],
  },
  {
    icon: "Smartphone",
    category: "App Development",
    items: ["React Native", "Flutter", "Kotlin (Android)", "Swift (iOS)", "Firebase", "REST APIs"],
  },
  {
    icon: "Cpu",
    category: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    icon: "Database",
    category: "Backend & Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "GraphQL", "REST APIs"],
  },
  {
    icon: "Image",
    category: "Design & Tools",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
  {
    icon: "Terminal",
    category: "DevOps & Deployment",
    items: ["Git & GitHub", "Docker", "Vercel", "Netlify", "Postman"],
  },
];

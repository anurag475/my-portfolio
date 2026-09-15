// Single source of truth for brand/contact details used across the whole
// site. Edit here once — every page, schema block, and WhatsApp link reads
// from this file.
export const SITE = {
  name: "Anurag Dutta",
  brandInitials: "AD",
  tagline: "Freelance Web Developer",
  // Placeholder — swap for your real domain before launch. Used for
  // canonical URLs, Open Graph tags, JSON-LD, sitemap.xml and robots.txt.
  url: "https://www.anuragdutta.dev",
  email: "anuragdutta6430@gmail.com",
  phoneDisplay: "+91 70862 53689",
  phoneE164: "+91-70862-53689",
  // Country code + number, no "+" or spaces — used to build wa.me links.
  whatsappNumber: "917086253689",
  whatsappDefaultMessage:
    "Hi, I found your portfolio and I'd like to discuss building a website for my business.",
  ogImage: "/og-image.jpg", // add this file to /public before launch (1200x630)
  social: {
    github: "https://github.com/anurag475",
    linkedin: "https://www.linkedin.com/in/anurag-dutta-1412b5256",
    instagram: "https://www.instagram.com/im_anurag_0k",
  },
};

export function whatsappUrl(message) {
  const text = encodeURIComponent(message || SITE.whatsappDefaultMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";
import "./tailwind.css";
import SiteNav from "@/components/SiteNav";
import WhatsAppFab from "@/components/WhatsAppFab";
import EngagementModal from "@/components/EngagementModal";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  // Italic added for the mobile hero's "look good," phrase (see
  // .grad-word-italic in app/globals.css) — normal-weight Fraunces was
  // already covering every other use, so this just adds the one style.
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// Handwriting-style display font — used only for the signature/quote
// callouts over the mobile hero photo (see .hero-signature/.hero-quote in
// app/globals.css, MOBILE HOMEPAGE REDESIGN section).
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Freelance Web Developer & Website Designer in India`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Freelance web developer building fast, modern, conversion-focused websites for businesses, startups, NGOs and restaurants across India. Affordable website development that turns visitors into customers.",
  keywords: [
    "freelance web developer",
    "website developer",
    "website development",
    "business website development",
    "website designer",
    "affordable website development",
    "website developer India",
    "business website designer",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: `${SITE.name} — Web Developer`,
    url: SITE.url,
    images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <WhatsAppFab />
        <EngagementModal />
      </body>
    </html>
  );
}

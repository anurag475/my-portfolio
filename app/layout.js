import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import "./tailwind.css";
import SiteNav from "@/components/SiteNav";
import WhatsAppFab from "@/components/WhatsAppFab";
import MobileStickyBar from "@/components/MobileStickyBar";
import EngagementModal from "@/components/EngagementModal";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <WhatsAppFab />
        <MobileStickyBar />
        <EngagementModal />
      </body>
    </html>
  );
}

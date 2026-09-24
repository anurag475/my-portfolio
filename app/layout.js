import { Geist, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Motion from "@/components/Motion";
import { SITE } from "@/lib/site";

// Body/UI text.
const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

// Headings.
const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });

// Editorial italic accent — used only on the <em> phrase inside headings.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Software Developer, AI/ML Engineer & Product Builder`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Anurag Dutta builds digital products that turn ideas into real businesses — high-performance websites, web and mobile apps, AI/ML solutions and SaaS products for clients across India and beyond.",
  keywords: [
    "Anurag Dutta",
    "software developer",
    "freelance developer India",
    "AI ML developer",
    "Next.js developer",
    "web application development",
    "mobile app development",
    "product builder",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#F6F3EC",
};

// Runs before first paint: opts the page into scroll-reveal styles only
// when motion is allowed, so content is never hidden without JS.
const motionScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window)document.documentElement.classList.add('motion-ready')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSans.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <Motion />
      </body>
    </html>
  );
}

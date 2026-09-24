import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import { skills } from "@/lib/content";

export const metadata = {
  alternates: { canonical: "/" },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        jobTitle: "Software Developer & Founder",
        url: `${SITE.url}/`,
        email: `mailto:${SITE.email}`,
        image: `${SITE.url}/img/me/portrait-812.webp`,
        alumniOf: { "@type": "CollegeOrUniversity", name: "Kurukshetra University" },
        knowsAbout: skills.flatMap((g) => g.items).slice(0, 20),
        sameAs: Object.values(SITE.social),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: `${SITE.name} — Software Development`,
        url: `${SITE.url}/`,
        email: SITE.email,
        telephone: SITE.phoneE164,
        areaServed: "Worldwide",
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        founder: { "@id": `${SITE.url}/#person` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#person` },
        inLanguage: "en-IN",
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Credibility />
      <Work />
      <Services />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

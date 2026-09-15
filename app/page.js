import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import MacbookScrollDemo from "@/components/sections/MacbookScrollDemo";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import AuditSection from "@/components/sections/AuditSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import TechStackSection from "@/components/sections/TechStackSection";
import SocialSection from "@/components/sections/SocialSection";
import OrganizationsSection from "@/components/sections/OrganizationsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import { faqs } from "@/lib/faqs";

export const metadata = {
  alternates: { canonical: "/" },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#business`,
        name: `${SITE.name} — Web Developer`,
        image: `${SITE.url}${SITE.ogImage}`,
        url: `${SITE.url}/`,
        telephone: SITE.phoneE164,
        email: SITE.email,
        priceRange: "₹₹",
        areaServed: { "@type": "Country", name: "India" },
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        founder: { "@id": `${SITE.url}/#person` },
        sameAs: [],
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        jobTitle: "Freelance Web Developer",
        url: `${SITE.url}/`,
        email: SITE.email,
        worksFor: { "@id": `${SITE.url}/#business` },
        knowsAbout: ["Web Development", "UI/UX Design", "Website Performance", "SEO", "E-commerce Development"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/`,
        name: `${SITE.name} — Web Developer`,
        publisher: { "@id": `${SITE.url}/#business` },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
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
      <TrustSection />
      <FeaturedWork />
      <MacbookScrollDemo />
      <ServicesSection />
      <WhyWorkWithMe />
      <ProcessSection />
      <PricingSection />
      <AuditSection />
      <TestimonialsSection />
      <AboutSection />
      <TechStackSection />
      <SocialSection />
      <OrganizationsSection />
      <FAQSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </>
  );
}

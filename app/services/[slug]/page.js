import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/ServiceTemplate";
import Footer from "@/components/Footer";
import { services, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.cardDescription,
      url: `/services/${service.slug}`,
    },
  };
}

function StructuredData({ service }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: service.title,
        provider: { "@type": "ProfessionalService", name: `${SITE.name} — Software Development`, url: `${SITE.url}/` },
        areaServed: { "@type": "Country", name: "India" },
        description: service.cardDescription,
        url: `${SITE.url}/services/${service.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/#services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${SITE.url}/services/${service.slug}` },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <StructuredData service={service} />
      <ServiceTemplate service={service} />
      <Footer />
    </>
  );
}

import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  const title = `${project.title.replace(/ — .*/, "")} — ${project.tag} Case Study`;
  const description = `${project.description} A case study by ${SITE.name}.`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/work/${project.slug}`,
    },
  };
}

function StructuredData({ project }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE.url}/#work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE.url}/work/${project.slug}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  return (
    <>
      <StructuredData project={project} />
      <CaseStudyTemplate project={project} />
      <Footer />
    </>
  );
}

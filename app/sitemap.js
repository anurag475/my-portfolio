import { SITE } from "@/lib/site";
import { caseStudies } from "@/lib/caseStudies";
import { services } from "@/lib/services";

// Required for `output: "export"` — sitemap.xml is generated once at build
// time rather than per-request.
export const dynamic = "force-static";

export default function sitemap() {
  const homepage = { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1.0 };

  const servicePages = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const workPages = caseStudies.map((c) => ({
    url: `${SITE.url}/work/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [homepage, ...servicePages, ...workPages];
}

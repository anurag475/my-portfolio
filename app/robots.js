import { SITE } from "@/lib/site";

// Required for `output: "export"` — robots.txt is generated once at build
// time rather than per-request.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

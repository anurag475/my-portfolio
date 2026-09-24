import Link from "next/link";
import Img from "../Img";
import { ArrowRight, ArrowUpRight } from "../Icons";
import { orderedCaseStudies } from "@/lib/caseStudies";
import SectionHead from "../SectionHead";

// Background tint behind each featured screenshot — pulled from each
// product's own palette so the stack reads as a set of real brands.
export const TINTS = {
  rabal: "#E4EDDF",
  bavanya: "#E2E8F3",
  "hindustan-water-solution": "#DFEAF4",
  "nyayadarpan-ai": "#E6E4F4",
  "auraweb-ai-school": "#1A1418",
  "rv-organica": "#E8E9DF",
  astorea: "#26231F",
  vibegifts: "#F4E4E6",
};
// Tints dark enough to need light text on top.
export const DARK_TINTS = new Set(["auraweb-ai-school", "astorea"]);

export default function Work() {
  const featured = orderedCaseStudies.filter((c) => c.featured);
  const rest = orderedCaseStudies.filter((c) => !c.featured);

  return (
    <section id="work" className="section work">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Products and platforms, <em>built and shipped.</em>
            </>
          }
          lede="A selection of client work, ventures and products — from an AI legal platform to a B2B marketplace app."
        />

        <div className="case-stack">
          {featured.map((p, i) => (
            <article className={`case ${i % 2 ? "is-flipped" : ""}`} key={p.slug} data-reveal>
              <Link
                href={`/work/${p.slug}`}
                className={`case-media ${p.platform === "app" ? "is-app" : ""}`}
                style={{ "--tint": TINTS[p.slug] }}
                tabIndex={-1}
                aria-hidden="true"
                data-cursor="View case study"
              >
                <div className="case-shot" data-parallax="-0.035">
                  <Img
                    name={`work/${p.slug}`}
                    alt=""
                    sizes={p.platform === "app" ? "(max-width: 899px) 60vw, 280px" : "(max-width: 899px) 92vw, 720px"}
                  />
                </div>
              </Link>

              <div className="case-body">
                <p className="case-index">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {p.tag}
                </p>
                <h3 className="case-title">
                  <Link href={`/work/${p.slug}`}>{p.title.replace(/ — .*/, "")}</Link>
                </h3>
                <p className="case-line">{p.oneLiner}</p>
                <dl className="case-meta">
                  <div>
                    <dt>Industry</dt>
                    <dd>{p.industry}</dd>
                  </div>
                  <div>
                    <dt>My role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  {p.tech.length > 0 && (
                    <div>
                      <dt>Stack</dt>
                      <dd>{p.tech.join(", ")}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Outcome</dt>
                    <dd>{p.outcome}</dd>
                  </div>
                </dl>
                <Link href={`/work/${p.slug}`} className="link-arrow">
                  View Case Study <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="more-work" data-reveal>
          <div className="more-head">
            <h3>More client work</h3>
            <p>{rest.length} more projects across education, non-profit and retail.</p>
          </div>
          <ul className="more-list">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="more-item">
                  <span className="more-thumb">
                    <Img name={`work/${p.slug}`} alt="" sizes="(max-width: 899px) 78vw, 160px" />
                  </span>
                  <span className="more-text">
                    <span className="more-name">{p.title.replace(/ — .*/, "")}</span>
                    <span className="more-line">{p.oneLiner}</span>
                  </span>
                  <span className="more-tag">{p.tag}</span>
                  <span className="more-go" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

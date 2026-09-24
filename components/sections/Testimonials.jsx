import Link from "next/link";
import Img from "../Img";
import SectionHead from "../SectionHead";
import { ArrowUpRight } from "../Icons";
import { testimonials } from "@/lib/content";
import { getCaseStudy } from "@/lib/caseStudies";

// Only client-approved quotes are rendered (see lib/content.js). The whole
// section disappears when none are approved.
export default function Testimonials() {
  const items = testimonials.filter((t) => t.approved);
  if (!items.length) return null;
  const [featured, ...rest] = items;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <SectionHead
          eyebrow="Client words"
          title={
            <>
              Trusted by founders <em>who ship.</em>
            </>
          }
          lede="What it's like to work together, from the people I've built for."
        />

        <ul className={`quote-grid ${rest.length ? "" : "is-single"}`}>
          <li className="quote-cell is-featured" data-reveal>
            <Quote t={featured} featured />
          </li>
          {rest.map((t, i) => (
            <li className="quote-cell" key={t.name} data-reveal style={{ "--d": `${(i + 1) * 70}ms` }}>
              <Quote t={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Quote({ t, featured = false }) {
  const project = t.project ? getCaseStudy(t.project) : null;
  // First + last name initials ("Jeet W. Sharma" → "JS").
  const words = t.name.split(/\s+/);
  const initials = words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "");

  return (
    <figure className={`quote ${featured ? "quote-featured" : ""}`}>
      <span className="quote-mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote>
        <p>{t.quote}</p>
      </blockquote>
      <figcaption>
        <span className="quote-avatar" aria-hidden="true">
          {t.photo ? <Img name={t.photo} alt="" sizes="48px" /> : initials}
        </span>
        <span className="quote-who">
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </span>
        {project && (
          <Link href={`/work/${project.slug}`} className="quote-project" aria-label={`View the ${project.title.replace(/ — .*/, "")} case study`}>
            <ArrowUpRight />
          </Link>
        )}
      </figcaption>
    </figure>
  );
}

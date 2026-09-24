import Link from "next/link";
import { Check, ArrowRight, Plus, DynamicIcon } from "./Icons";
import { getRelatedServices } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";

// Labels in lib/services.js were written with a trailing "→"; the new
// buttons draw their own arrow icon.
const clean = (label) => label.replace(/\s*→\s*$/, "");

export default function ServiceTemplate({ service: s }) {
  const related = getRelatedServices(s.slug).slice(0, 6);
  const primary = s.heroPrimaryCta || { label: "Start a Project", href: "/#contact" };
  const secondary =
    s.heroSecondaryCta || (s.exampleHref ? { label: "See an Example", href: s.exampleHref } : { label: "See My Work", href: "/#work" });

  return (
    <article className="svc">
      <header className="cs-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{s.title}</span>
          </nav>
          <div className="cs-hero-grid">
            <div>
              <p className="eyebrow">
                <DynamicIcon name={s.icon} className="eyebrow-icon" /> {s.title}
              </p>
              <h1 className="svc-title">{s.h1}</h1>
            </div>
            <div className="cs-intro">
              <p>{s.heroDescription}</p>
              <div className="cs-links">
                <Link href={primary.href} className="btn btn-dark" data-magnetic>
                  {clean(primary.label)} <ArrowRight />
                </Link>
                <Link href={secondary.href} className="btn btn-outline">
                  {clean(secondary.label)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container cs-chapters">
        <section className="chapter" data-reveal>
          <div className="chapter-label">
            <span>01</span>
            <h2>What&rsquo;s included</h2>
          </div>
          <div className="chapter-body">
            <h3>{s.includedHeading}</h3>
            <ul className="included">
              {s.included.map((item) => (
                <li key={item}>
                  <Check /> {item}
                </li>
              ))}
            </ul>
            {s.priceNote && (
              <p className="price-note">
                <strong>Typical investment</strong> {s.priceNote}.
              </p>
            )}
          </div>
        </section>

        <section className="chapter" data-reveal>
          <div className="chapter-label">
            <span>02</span>
            <h2>Questions</h2>
          </div>
          <div className="chapter-body faq">
            {s.faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <Plus />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section className="cs-cta">
        <div className="container cs-cta-inner" data-reveal>
          <div>
            <h2>{s.finalCtaHeading}</h2>
            <p>{s.finalCtaBody}</p>
          </div>
          <div className="cs-links">
            <Link href={(s.finalCtaPrimary || primary).href} className="btn btn-gold btn-lg" data-magnetic>
              {clean((s.finalCtaPrimary || { label: "Start a Project" }).label)} <ArrowRight />
            </Link>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light btn-lg">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <nav className="container related" aria-label="Related services">
        <p className="eyebrow">Related services</p>
        <ul>
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/services/${r.slug}`}>{r.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}

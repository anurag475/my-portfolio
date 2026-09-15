import Link from "next/link";
import Reveal from "./Reveal";
import FAQList from "./FAQList";
import BrowserMockup from "./BrowserMockup";
import { Check, ArrowRight } from "./Icons";
import { getRelatedServices } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";

export default function ServiceTemplate({ service }) {
  const related = getRelatedServices(service.slug);
  const primaryCta = service.heroPrimaryCta || { label: "Get Started →", href: "/#contact" };
  const secondaryCta =
    service.heroSecondaryCta || (service.exampleHref ? { label: "See an Example", href: service.exampleHref } : { label: "See Examples", href: "/#work" });
  const priceCtaLabel = service.priceCtaLabel || "Get a Custom Quote →";
  const priceCtaHref = service.priceCtaHref || "/#contact";

  return (
    <>
      <section className="service-hero">
        <div className="container">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#services">Services</Link>
              <span>/</span>
              <span aria-current="page">{service.title}</span>
            </nav>
            <p className="eyebrow">{service.title}</p>
            <h1>{service.h1}</h1>
            <p className="hero-sub" style={{ color: "var(--text-muted)" }}>
              {service.heroDescription}
            </p>
            <div className="hero-actions">
              <CtaLink cta={primaryCta} className="btn btn-accent btn-lg" />
              <CtaLink cta={secondaryCta} className="btn btn-ghost btn-lg" />
            </div>
          </div>
          <div aria-hidden="true">
            <BrowserMockup blocks={service.mockup} style={{ background: "var(--ink-900)" }} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">What&rsquo;s Included</p>
            <h2>{service.includedHeading}</h2>
          </Reveal>
          <Reveal as="ul" className="included-list">
            {service.included.map((item) => (
              <li key={item}>
                <Check strokeWidth={2.4} /> {item}
              </li>
            ))}
          </Reveal>
          <Reveal as="div" className="card" style={{ background: "var(--gray-100)", border: "none" }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Typical investment:</strong> {service.priceNote} — see full{" "}
              <Link href="/#pricing" style={{ color: "var(--accent-600)", fontWeight: 600 }}>
                pricing details
              </Link>
              .
            </p>
            <Link href={priceCtaHref} className="btn btn-primary">
              {priceCtaLabel}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bleed-soft">
        <div className="container">
          <Reveal className="section-head center">
            <h2>Common questions</h2>
          </Reveal>
          <Reveal>
            <FAQList items={service.faqs} />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="final-cta">
            <h2>{service.finalCtaHeading}</h2>
            <p className="lede">{service.finalCtaBody}</p>
            <div className="hero-actions">
              <CtaLink cta={service.finalCtaPrimary || { label: "Start a Project →", href: "/#contact" }} className="btn btn-accent btn-lg" />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark btn-lg">
                Chat on WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="eyebrow">Related Services</p>
          <div className="related-services">
            {related.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug}>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CtaLink({ cta, className }) {
  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

import Link from "next/link";
import Reveal from "../Reveal";
import { DynamicIcon, ArrowRight } from "../Icons";
import { services } from "@/lib/services";

// A numbered, full-width list rather than a 13-item card grid — with this
// many services a 3-col grid always leaves an awkward half-empty last row,
// while a list scales to any count and gives each row room for a proper
// icon, title and description. Icon tiles cycle through three tints
// (see .service-row:nth-child(3n±) in globals.css) so a long list still
// reads as distinct offerings instead of one repeating block.
export default function ServicesSection() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <Reveal className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Everything you need to build your digital presence.</h2>
          </Reveal>
          <Reveal as="p" className="services-header-copy">
            From a single landing page to a full e-commerce build — every project gets the same care: clear scope, thoughtful design, code built to last.
          </Reveal>
        </div>

        <div className="services-list">
          {services.map((s, i) => (
            <Reveal as="div" className="service-row" key={s.slug} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <Link href={`/services/${s.slug}`} className="service-row-link">
                <span className="service-row-inner">
                  <span className="service-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="service-tile-icon">
                    <DynamicIcon name={s.icon} />
                  </span>
                  <span className="service-row-text">
                    <h3>{s.title}</h3>
                    <p>{s.cardDescription}</p>
                  </span>
                  <span className="service-row-cta" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="services-cta-row">
          <p>Not sure which service fits your project?</p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Let's Talk About Your Project →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

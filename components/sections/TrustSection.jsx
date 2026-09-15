import Reveal from "../Reveal";
import { DynamicIcon } from "../Icons";
import { trustLogos, stats } from "@/lib/content";

export default function TrustSection() {
  // `trust-strip` is currently just a plain hook (no rule in
  // app/globals.css hides it anywhere) — this section shows at every
  // breakpoint, including phones, where it gives "Trusted by
  // businesses, startups & organizations" its own full-width section on
  // the page's normal light background, right below the dark hero.
  return (
    <section className="section-tight trust-strip" aria-labelledby="trust-heading">
      <div className="container text-center">
        <p className="eyebrow" style={{ justifyContent: "center" }} id="trust-heading">
          Trusted by businesses, startups &amp; organizations
        </p>

        <Reveal className="logo-strip">
          {/* Two identical copies back-to-back, so the marquee's
              `translateX(-50%)` loop always lands on an identical frame —
              see the .logo-strip comment in app/globals.css. The second
              copy is aria-hidden: it's a visual loop seam, not more
              content for a screen reader to announce. */}
          <div className="logo-strip-track">
            {trustLogos.map((name) => (
              <span className="wordmark" key={`a-${name}`}>
                {name}
              </span>
            ))}
            {trustLogos.map((name) => (
              <span className="wordmark" key={`b-${name}`} aria-hidden="true">
                {name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="trust-bar">
          {stats.map((s) => (
            <div className="trust-stat" key={s.label}>
              <div className="trust-stat-icon">
                <DynamicIcon name={s.icon} />
              </div>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

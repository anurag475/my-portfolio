import Image from "next/image";
import { Check, DynamicIcon } from "../Icons";
import { heroFeatures, heroStats, heroBadges } from "@/lib/content";

const TRUST_ITEMS = ["Responsive Design", "SEO Ready", "Fast Performance", "Mobile First"];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="/hero/hero-portrait.webp"
          alt="Anurag Dutta, freelance web developer"
          fill
          priority
          sizes="100vw"
        />
        {/* Floating trust badges over the photo — mobile-only (≤768px,
            `display:none` by default, see app/globals.css). `heroBadges`
            (lib/content.js) mostly mirrors the `stats` TrustSection shows
            lower on the page — that overlap is deliberate, an immediate
            trust signal right in the hero — but swaps the 4th item for a
            geography callout, so it isn't a pure duplicate. */}
        <div className="hero-badges">
          {heroBadges.map((s) => (
            <div className="hero-badge" key={s.label}>
              <span className="hero-badge-icon">
                <DynamicIcon name={s.icon} />
              </span>
              <span className="hero-badge-num">{s.num}</span>
              <span className="hero-badge-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            {/* `grad-word` spans are unstyled by default (plain inline text,
                identical to the surrounding words) — the ≤768px "MOBILE
                HOMEPAGE REDESIGN" block in app/globals.css is the only place
                that paints them with the gradient, so desktop/tablet keep
                today's exact heading markup and look. */}
            I build <span className="grad-word">websites</span> that make businesses{" "}
            <span className="accent">
              look <span className="grad-word">credible</span>
            </span>{" "}
            and win more <span className="grad-word">customers</span>.
          </h1>
          <p className="hero-sub">Modern, fast and conversion-focused websites for businesses, startups and organizations.</p>
          <div className="hero-actions">
            <a href="#audit" className="btn btn-accent btn-lg">
              Get a Free Consultation →
            </a>
            <a href="#work" className="btn btn-on-dark btn-lg">
              Explore My Work
            </a>
          </div>
          <div className="trust-row">
            {TRUST_ITEMS.map((item) => (
              <span key={item}>
                <Check strokeWidth={2.4} /> {item}
              </span>
            ))}
          </div>
          <p className="hero-experience">1.5+ years of experience in freelancing</p>

          {/* Mobile-only showcase (≤768px) — `display:none` by default (see
              app/globals.css), so this whole block adds nothing to the
              desktop/tablet DOM's visible output. A "Trusted by..." +
              logos block used to live here too, duplicating TrustSection
              right below it — dropped in favor of just letting
              TrustSection itself show on phones (it now does, on its own
              full-width light section, instead of being hidden there). */}
          <div className="mobile-showcase">
            <div className="ms-features">
              {heroFeatures.map((f) => (
                <div className="ms-feature" key={f.label}>
                  <span className="ms-feature-icon">
                    <DynamicIcon name={f.icon} />
                  </span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="ms-stats">
              {heroStats.map((s) => (
                <div className="ms-stat" key={s.label}>
                  <span className="ms-stat-value">{s.value}</span>
                  <span className="ms-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

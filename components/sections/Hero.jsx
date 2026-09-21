import Image from "next/image";
import { Check, DynamicIcon } from "../Icons";
import { heroYearsBadge, heroDoodleWords } from "@/lib/content";
import { SITE } from "@/lib/site";

const TRUST_ITEMS = ["Responsive Design", "SEO Ready", "Fast Performance", "Mobile First"];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <Image
          src="/hero/hero-portrait.webp"
          alt="Anurag Dutta, freelance software developer"
          fill
          priority
          sizes="100vw"
        />

        {/* Mobile-only (≤768px) callouts over the open right side of the
            full-bleed photo — signature, a "years" stat card, a doodle word
            stack and a closing quote. `.hero-content` is capped to a
            fraction of the section's width (see app/globals.css), so this
            right-hand strip is reserved space these can never share with
            the heading/CTAs/trust-pills. Inert everywhere else
            (display:none by default). */}
        <div className="hero-signature">
          <span>Anurag</span>
          <span>Dutta</span>
          <svg className="hero-signature-swash" viewBox="0 0 90 14" aria-hidden="true">
            <path d="M2 8c14-9 28-9 40-3s34 4 46-6" />
          </svg>
        </div>

        <div className="hero-years-badge">
          <DynamicIcon name="Sparkle" className="hero-years-sparkle" />
          <span className="hero-years-value">{heroYearsBadge.value}</span>
          <span className="hero-years-label">
            {heroYearsBadge.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </span>
        </div>

        <div className="hero-doodle">
          <svg className="hero-doodle-arrow" viewBox="0 0 30 34" aria-hidden="true">
            <path d="M4 32C4 16 14 4 27 3" />
            <path d="M18 3h9v9" />
          </svg>
          {heroDoodleWords.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>

        <p className="hero-quote">
          &ldquo;Let&rsquo;s build something meaningful.&rdquo;
          <svg className="hero-quote-swash" viewBox="0 0 110 12" aria-hidden="true">
            <path d="M2 6c20-8 60-8 106 2" />
          </svg>
        </p>
      </div>
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-mobile-badge">
            <span className="hero-mobile-badge-dot" />
            {SITE.tagline}
          </span>

          <h1>
            {/* `grad-word` spans are unstyled by default (plain inline text,
                identical to the surrounding words) — the ≤768px "MOBILE
                HOMEPAGE REDESIGN" block in app/globals.css is the only place
                that paints them with the gradient, so desktop/tablet keep
                today's exact heading markup and look. Mobile swaps in an
                entirely different sentence (see hero-heading-mobile), so
                both variants live in the DOM and the media query picks one
                — this keeps a single <h1> instead of two competing ones. */}
            <span className="hero-heading-desktop">
              I build <span className="grad-word">websites</span> that make businesses{" "}
              <span className="accent">
                look <span className="grad-word">credible</span>
              </span>{" "}
              and win more <span className="grad-word">customers</span>.
            </span>
            <span className="hero-heading-mobile">
              Websites that don&rsquo;t just <span className="grad-word-italic">look good,</span> they grow your
              business.
            </span>
          </h1>
          <p className="hero-sub">
            <span className="hero-sub-desktop">
              Modern, fast and conversion-focused websites for businesses, startups and organizations.
            </span>
            <span className="hero-sub-mobile">
              I help brands turn ideas into high-performing digital products — modern websites, web apps and
              branding that bring real results.
            </span>
          </p>
          <div className="hero-actions hero-actions-desktop">
            <a href="#audit" className="btn btn-accent btn-lg">
              Get a Free Consultation →
            </a>
            <a href="#work" className="btn btn-on-dark btn-lg">
              Explore My Work
            </a>
          </div>
          <div className="hero-actions hero-actions-mobile">
            <a href="#audit" className="btn btn-accent btn-lg">
              Start a Project →
            </a>
            <a href="#work" className="btn btn-on-dark btn-lg">
              <span className="btn-play-icon">
                <DynamicIcon name="Play" />
              </span>
              View My Work
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
        </div>
      </div>
    </section>
  );
}

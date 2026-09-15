import Image from "next/image";
import { Check } from "../Icons";

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
      </div>
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            I build websites that make businesses <span className="accent">look credible</span> and win more customers.
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
        </div>
      </div>
    </section>
  );
}

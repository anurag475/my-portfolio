import Reveal from "../Reveal";
import { Check } from "../Icons";
import { pricingPlans } from "@/lib/content";

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Pricing
          </p>
          <h2>Simple packages. No confusing pricing.</h2>
        </Reveal>
        <Reveal className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.tier}>
              {plan.badge && <span className="price-badge">{plan.badge}</span>}
              <span className="price-tier">{plan.tier}</span>
              <div className="price-amount">
                {plan.price}
                <sup>+</sup>
              </div>
              <p className="price-for">{plan.forWhom}</p>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check strokeWidth={2.4} /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn btn-block ${plan.featured ? "btn-accent" : "btn-ghost"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </Reveal>
        <p className="pricing-note">
          Need something custom? <a href="#contact">Let&rsquo;s discuss your requirements.</a>
        </p>
      </div>
    </section>
  );
}

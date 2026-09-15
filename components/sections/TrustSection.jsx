import Reveal from "../Reveal";
import { DynamicIcon } from "../Icons";
import { trustLogos, stats } from "@/lib/content";

export default function TrustSection() {
  return (
    <section className="section-tight" aria-labelledby="trust-heading">
      <div className="container text-center">
        <p className="eyebrow" style={{ justifyContent: "center" }} id="trust-heading">
          Trusted by businesses, startups &amp; organizations
        </p>

        <Reveal className="logo-strip">
          {trustLogos.map((name) => (
            <span className="wordmark" key={name}>
              {name}
            </span>
          ))}
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

import Reveal from "../Reveal";
import { Check } from "../Icons";
import AuditForm from "../AuditForm";

const POINTS = [
  "No obligation, no sales pressure",
  "Delivered personally within 48 hours",
  "Sent straight to your WhatsApp or email",
];

export default function AuditSection() {
  return (
    <section id="audit">
      <div className="container">
        <Reveal className="audit-section">
          <div className="audit-grid">
            <div>
              <p className="eyebrow">Free Website Audit</p>
              <h2>Not sure what&rsquo;s wrong with your website?</h2>
              <p className="lede">
                Get a free 5-minute website audit. I&rsquo;ll identify 3 improvements that could make your website faster, more
                professional and more effective at winning customers.
              </p>
              <div className="audit-points">
                {POINTS.map((p) => (
                  <span key={p}>
                    <Check strokeWidth={2.4} /> {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="form-card">
              <AuditForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

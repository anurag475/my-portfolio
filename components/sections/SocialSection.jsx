import Reveal from "../Reveal";
import { DynamicIcon, ArrowRight } from "../Icons";
import { socialLinks } from "@/lib/content";

export default function SocialSection() {
  return (
    <section id="connect">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Connect
          </p>
          <h2>Find me online.</h2>
          <p>Follow along, check out the code, or just say hi.</p>
        </Reveal>

        <div className="grid grid-3">
          {socialLinks.map((s) => (
            <Reveal as="a" className="card social-card" href={s.url} target="_blank" rel="noopener noreferrer" key={s.label}>
              <div className="service-icon social-icon">
                <DynamicIcon name={s.icon} />
              </div>
              <h3>{s.label}</h3>
              <p className="social-handle">{s.handle}</p>
              <p>{s.body}</p>
              <span className="card-link">
                Visit Profile <ArrowRight />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

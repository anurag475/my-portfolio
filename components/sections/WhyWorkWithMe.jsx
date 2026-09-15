import Reveal from "../Reveal";
import { DynamicIcon } from "../Icons";
import { benefits } from "@/lib/content";

export default function WhyWorkWithMe() {
  const [left, right] = [benefits.slice(0, 3), benefits.slice(3)];
  return (
    <section className="bleed-soft">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Why Work With Me
          </p>
          <h2>More than just a website.</h2>
        </Reveal>
        <Reveal className="grid grid-2">
          <div className="benefits-list">
            {left.map((b) => (
              <div className="benefit" key={b.title}>
                <div className="benefit-icon">
                  <DynamicIcon name={b.icon} />
                </div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="benefits-list">
            {right.map((b) => (
              <div className="benefit" key={b.title}>
                <div className="benefit-icon">
                  <DynamicIcon name={b.icon} />
                </div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

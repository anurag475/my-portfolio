import Reveal from "../Reveal";
import { DynamicIcon } from "../Icons";
import { processSteps } from "@/lib/content";

export default function ProcessSection() {
  return (
    <section id="process" className="bleed-dark">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Process</p>
          <h2>From idea to launch.</h2>
          <p>A clear, five-step process — so you always know what happens next.</p>
        </Reveal>

        <div className="process-track">
          {processSteps.map((step, i) => (
            <Reveal as="div" className="process-item" key={step.num} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="process-marker">
                <DynamicIcon name={step.icon} />
                <span>{step.num}</span>
              </div>
              <div className="process-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="process-cta">
          <a href="#contact" className="btn btn-accent btn-lg">
            Start My Project →
          </a>
        </div>
      </div>
    </section>
  );
}

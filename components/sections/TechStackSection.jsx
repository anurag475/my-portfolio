import Reveal from "../Reveal";
import { DynamicIcon } from "../Icons";
import { techStack } from "@/lib/content";

export default function TechStackSection() {
  return (
    <section id="stack">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Tech Stack
          </p>
          <h2>Technologies I&rsquo;ve mastered.</h2>
          <p>A toolkit spanning web development, app development, AI/ML and everything needed to ship a real product.</p>
        </Reveal>

        <div className="stack-list">
          {techStack.map((group, i) => (
            <Reveal as="div" className="stack-row" key={group.category} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="stack-row-head">
                <div className="stack-row-icon">
                  <DynamicIcon name={group.icon} />
                </div>
                <h3>{group.category}</h3>
              </div>
              <div className="stack-row-chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHead from "../SectionHead";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title={
            <>
              One builder, <em>the full stack.</em>
            </>
          }
          lede="From interface to model to data pipeline — so nothing gets lost between specialists."
        />
        <div className="skill-grid">
          {skills.map((g, i) => (
            <div className={`skill-card skill-${g.key}`} key={g.key} data-reveal style={{ "--d": `${i * 70}ms` }}>
              <div className="skill-head">
                <span className="skill-num">0{i + 1}</span>
                <h3>{g.title}</h3>
              </div>
              <p className="skill-blurb">{g.blurb}</p>
              <ul className="chips">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

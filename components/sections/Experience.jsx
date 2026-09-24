import Img from "../Img";
import SectionHead from "../SectionHead";
import { ArrowUpRight } from "../Icons";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container exp-grid">
        <SectionHead
          eyebrow="Experience"
          title={
            <>
              Ventures, engineering <em>and client work.</em>
            </>
          }
          lede="Building companies, shipping for clients and learning inside industry teams — often all at once."
        />

        <ol className="timeline">
          {experience.map((e, i) => (
            <li className="tl-item" key={`${e.role}-${e.org}`} data-reveal style={{ "--d": `${(i % 3) * 60}ms` }}>
              <div className="tl-side">
                <span className="tl-kind">{e.kind}</span>
                {e.period && <span className="tl-period">{e.period}</span>}
              </div>
              <div className="tl-main">
                <div className="tl-head">
                  {e.logo && (
                    <span className="tl-logo">
                      <Img name={e.logo} alt="" sizes="68px" />
                    </span>
                  )}
                  <div>
                    <h3>{e.role}</h3>
                    <p className="tl-org">
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                          {e.org}
                          <ArrowUpRight />
                        </a>
                      ) : (
                        e.org
                      )}
                      {e.place && <span> · {e.place}</span>}
                    </p>
                  </div>
                  {e.status && <span className="tl-status">{e.status}</span>}
                </div>
                <p className="tl-body">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Link from "next/link";
import BrowserMockup from "./BrowserMockup";
import Reveal from "./Reveal";
import { getCaseStudyNav } from "@/lib/caseStudies";

export default function CaseStudyTemplate({ project }) {
  const { prev, next } = getCaseStudyNav(project.slug);
  const stages = ["challenge", "solution", "design", "development", "result"];

  return (
    <>
      <section className="cs-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#work">Work</Link>
            <span>/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <span className="project-tag">{project.tag}</span>
          <h1 style={{ marginTop: "1rem" }}>{project.headline}</h1>
          <p className="hero-sub">{project.description}</p>
          <div className="cs-meta">
            <div>
              <span className="label">Industry</span>
              <span className="value">{project.industry}</span>
            </div>
            {project.servicesLine && (
              <div>
                <span className="label">Services</span>
                <span className="value">{project.servicesLine}</span>
              </div>
            )}
            {project.tech.length > 0 && (
              <div>
                <span className="label">Technologies</span>
                <span className="value">{project.tech.join(", ")}</span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="label">Timeline</span>
                <span className="value">{project.timeline}</span>
              </div>
            )}
          </div>
          <div className={`cs-visual ${project.platform === "app" ? "is-app" : ""}`}>
            <BrowserMockup blocks={project.mockup} screenshot={project.screenshot} variant={project.platform === "app" ? "app" : "browser"} />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {stages.map((key) => {
            const stage = project.stages[key];
            return (
              <Reveal as="div" className="cs-stage" key={key}>
                <span className="stage-tag">{key}</span>
                <h2>{stage.heading}</h2>
                <p>{stage.body}</p>
                {stage.stats && (
                  <div className="cs-result-grid">
                    {stage.stats.map((s) => (
                      <div className="card" key={s.label}>
                        <div className="stat-num">{s.num}</div>
                        <div className="stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}

          <div className="cs-nav">
            <Link href={`/work/${prev.slug}`}>← {prev.title}</Link>
            <Link href="/#contact" className="btn btn-primary">
              Start Your Project →
            </Link>
            <Link href={`/work/${next.slug}`}>{next.title} →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

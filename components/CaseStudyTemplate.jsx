import Link from "next/link";
import Img from "./Img";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHub } from "./Icons";
import { getCaseStudyNav } from "@/lib/caseStudies";
import { IMAGES } from "@/lib/images";
import { TINTS, DARK_TINTS } from "./sections/Work";

function shortTitle(p) {
  return p.title.replace(/ — .*/, "");
}

export default function CaseStudyTemplate({ project: p }) {
  const { prev, next } = getCaseStudyNav(p.slug);
  const imgKey = `work/${p.slug}`;
  const meta = IMAGES[imgKey];
  const isApp = p.platform === "app";
  // Full-page captures are taller than a screen — show them in a
  // scrollable frame instead of shrinking them to an unreadable strip.
  const isTall = !isApp && meta.h / meta.w > 0.8;

  // Chapters are built from whatever is actually known about the project;
  // anything unconfirmed (e.g. an empty tech list) is left out.
  const chapters = [
    { label: "Problem", heading: p.stages.challenge.heading, body: p.stages.challenge.body },
    { label: "Solution", heading: p.stages.solution.heading, body: p.stages.solution.body },
    {
      label: "My role",
      heading: p.role,
      body: p.servicesLine ? `Scope: ${p.servicesLine}.` : null,
    },
    p.tech.length > 0 && { label: "Technology", heading: "Stack", chips: p.tech },
    {
      label: "Process",
      steps: [
        { title: "Design", heading: p.stages.design.heading, body: p.stages.design.body },
        { title: "Development", heading: p.stages.development.heading, body: p.stages.development.body },
      ],
    },
    { label: "Outcome", heading: p.stages.result.heading, body: p.stages.result.body, outcome: p.outcome },
  ].filter(Boolean);

  return (
    <article className="cs">
      <header className="cs-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#work">Work</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{shortTitle(p)}</span>
          </nav>

          <div className="cs-hero-grid">
            <div>
              <p className="eyebrow">{p.tag}</p>
              <h1 className="cs-title">{shortTitle(p)}</h1>
            </div>
            <div className="cs-intro">
              <p>{p.description}</p>
              <div className="cs-links">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark" data-magnetic>
                    {p.liveLabel || "Visit Live Project"} <ArrowUpRight />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <GitHub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          <dl className="cs-meta">
            <div>
              <dt>Industry</dt>
              <dd>{p.industry}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{p.role}</dd>
            </div>
            {p.tech.length > 0 && (
              <div>
                <dt>Stack</dt>
                <dd>{p.tech.join(", ")}</dd>
              </div>
            )}
            {p.timeline && (
              <div>
                <dt>Timeline</dt>
                <dd>{p.timeline}</dd>
              </div>
            )}
            <div>
              <dt>Outcome</dt>
              <dd>{p.outcome}</dd>
            </div>
          </dl>
        </div>
      </header>

      <section className={`cs-screens ${DARK_TINTS.has(p.slug) ? "is-dark-tint" : ""}`} aria-label="Screenshots" style={{ "--tint": TINTS[p.slug] || "var(--ivory-2)" }}>
        <div className="container">
          <figure className={`cs-frame ${isApp ? "is-app" : ""} ${isTall ? "is-tall" : ""}`}>
            {!isApp && (
              <div className="hv-chrome" aria-hidden="true">
                <i />
                <i />
                <i />
                {p.liveUrl && <span>{new URL(p.liveUrl).hostname.replace(/^www\./, "")}</span>}
              </div>
            )}
            <div className="cs-frame-body" tabIndex={isTall ? 0 : undefined} aria-label={isTall ? "Full-page screenshot, scrollable" : undefined}>
              <Img name={imgKey} alt={p.screenshot.alt} priority sizes={isApp ? "320px" : "(max-width: 1200px) 94vw, 1120px"} />
            </div>
          </figure>
          {isTall && <p className="cs-frame-hint">Scroll inside the frame to see the full page.</p>}
        </div>
      </section>

      <div className="container cs-chapters">
        {chapters.map((c, i) => (
          <section className="chapter" key={c.label} data-reveal>
            <div className="chapter-label">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h2>{c.label}</h2>
            </div>
            <div className="chapter-body">
              {c.heading && <h3>{c.heading}</h3>}
              {c.body && <p>{c.body}</p>}
              {c.chips && (
                <ul className="chips">
                  {c.chips.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
              {c.steps && (
                <ol className="process-steps">
                  {c.steps.map((s) => (
                    <li key={s.title}>
                      <span className="process-title">{s.title}</span>
                      <h3>{s.heading}</h3>
                      <p>{s.body}</p>
                    </li>
                  ))}
                </ol>
              )}
              {c.outcome && (
                <p className="outcome-pill">
                  <span className="status-dot" aria-hidden="true" /> {c.outcome}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="cs-cta">
        <div className="container cs-cta-inner" data-reveal>
          <h2>
            Building something similar? <em>Let&rsquo;s talk.</em>
          </h2>
          <Link href="/#contact" className="btn btn-gold btn-lg" data-magnetic>
            Start a Project <ArrowRight />
          </Link>
        </div>
      </section>

      <nav className="cs-pager container" aria-label="More case studies">
        <Link href={`/work/${prev.slug}`} className="pager-link">
          <span className="pager-dir">
            <ArrowLeft /> Previous
          </span>
          <span className="pager-title">{shortTitle(prev)}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="pager-link is-next">
          <span className="pager-dir">
            Next <ArrowRight />
          </span>
          <span className="pager-title">{shortTitle(next)}</span>
        </Link>
      </nav>
    </article>
  );
}

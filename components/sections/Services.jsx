import Link from "next/link";
import SectionHead from "../SectionHead";
import { DynamicIcon, ArrowUpRight } from "../Icons";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="section services is-dark">
      <div className="container">
        <div className="services-top">
          <SectionHead
            eyebrow="Services"
            title={
              <>
                What I can build <em>for your business.</em>
              </>
            }
          />
          <p className="section-lede services-lede" data-reveal>
            Every engagement starts with the business problem, not the tech stack. You get one accountable builder from
            first call to launch — and after.
          </p>
        </div>

        <ul className="service-grid">
          {services.map((s, i) => {
            const inner = (
              <>
                <span className="service-top">
                  <span className="service-icon">
                    <DynamicIcon name={s.icon} />
                  </span>
                  <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3>{s.title}</h3>
                <p>{s.value}</p>
                {s.href && (
                  <span className="service-more">
                    Learn more <ArrowUpRight />
                  </span>
                )}
              </>
            );
            return (
              <li key={s.title} data-reveal style={{ "--d": `${(i % 4) * 60}ms` }}>
                {s.href ? (
                  <Link href={s.href} className="service is-link">
                    {inner}
                  </Link>
                ) : (
                  <div className="service">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { socialLinks } from "@/lib/content";
import { orderedCaseStudies } from "@/lib/caseStudies";
import { DynamicIcon } from "./Icons";
import CurrentYear from "./CurrentYear";
import Img from "./Img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label={`${SITE.name} — home`}>
              <Img name="brand/ad-lockup-light" alt={SITE.name} sizes="220px" />
            </Link>
            <p>Software developer, AI/ML engineer and founder building digital products for real businesses.</p>
            <ul className="footer-social">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <DynamicIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Footer — site">
            <h2>Site</h2>
            <ul>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#experience">Experience</Link></li>
              <li><Link href="/#skills">Skills</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Footer — case studies">
            <h2>Case studies</h2>
            <ul>
              {orderedCaseStudies
                .filter((c) => c.featured)
                .map((c) => (
                  <li key={c.slug}>
                    <Link href={`/work/${c.slug}`}>{c.title.replace(/ — .*/, "")}</Link>
                  </li>
                ))}
            </ul>
          </nav>
          <nav aria-label="Footer — services">
            <h2>Services</h2>
            <ul>
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © <CurrentYear /> {SITE.name}
          </p>
          <p>Designed &amp; built in India.</p>
        </div>
      </div>
    </footer>
  );
}

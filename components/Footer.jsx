import Link from "next/link";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { LinkedIn, Instagram, GitHub } from "./Icons";
import CurrentYear from "./CurrentYear";
import Avatar from "./Avatar";

/** Full footer with sitemap columns — used on the homepage. */
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" style={{ color: "#fff" }}>
              <Avatar size={36} />
              {SITE.name}
            </Link>
            <p>Freelance web developer building fast, modern, conversion-focused websites for businesses and organizations across India.</p>
            <div className="footer-social" style={{ marginTop: "1.2rem" }}>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <LinkedIn />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                <Instagram />
              </a>
              <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <GitHub />
              </a>
            </div>
          </div>
          <div>
            <h5>Sitemap</h5>
            <ul>
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>More</h5>
            <ul>
              <li><Link href="/#work">Case Studies</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#audit">Free Website Audit</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © <CurrentYear /> {SITE.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with care in India.</p>
        </div>
      </div>
    </footer>
  );
}

import Img from "../Img";
import { DynamicIcon, ArrowRight, ArrowUpRight } from "../Icons";
import { heroRoles, socialLinks } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <span className="hero-avatar">
              <Img name="me/avatar" alt="Anurag Dutta" priority sizes="48px" />
            </span>
            <span className="hero-intro-text">
              <strong>Anurag Dutta</strong>
              <span className="hero-status">
                <span className="status-dot" aria-hidden="true" />
                Available for new projects
              </span>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="line"><span>I build digital products</span></span>{" "}
            <span className="line"><span>that turn ideas into</span></span>{" "}
            <span className="line"><span><em>real businesses.</em></span></span>
          </h1>

          <p className="hero-lede">
            Developer, entrepreneur and product builder focused on creating high-performance websites, software products and
            digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-dark btn-lg" data-magnetic>
              View My Work <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg" data-magnetic>
              Let&rsquo;s Work Together
            </a>
          </div>

          <div className="hero-foot">
            <ul className="hero-roles" aria-label="What I do">
              {heroRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <ul className="hero-social" aria-label="Profiles">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <DynamicIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real shipped work as the hero visual: a web product and a mobile
            app, framed as a small "product stack". */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hv-grid" />
          <figure className="hv-browser" data-parallax="-0.04">
            <div className="hv-chrome">
              <i />
              <i />
              <i />
              <span>nyayadarpanai.com</span>
            </div>
            <Img name="work/nyayadarpan-ai" alt="" priority sizes="(max-width: 899px) 90vw, 560px" />
          </figure>
          <figure className="hv-phone" data-parallax="0.05">
            <Img name="work/rabal" alt="" sizes="200px" />
          </figure>
          <div className="hv-chip hv-chip-a">
            <span className="status-dot" /> Live · AI legal platform
          </div>
          <div className="hv-chip hv-chip-b">
            <ArrowUpRight /> Shipped to Google Play
          </div>
        </div>
      </div>
    </section>
  );
}

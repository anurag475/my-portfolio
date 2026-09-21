import Image from "next/image";
import Reveal from "../Reveal";
import { DynamicIcon } from "../Icons";
import { SITE } from "@/lib/site";
import { aboutTags, aboutCredentials } from "@/lib/content";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-photo">
            <Image
              src="/about/anurag-dutta.jpg"
              alt={`${SITE.name}, freelance software developer`}
              fill
              sizes="(max-width: 860px) 90vw, 40vw"
            />
          </Reveal>
          <Reveal className="about-copy">
            <p className="eyebrow">About</p>
            <h2>The developer behind the websites.</h2>
            <p>I&rsquo;m Anurag, a freelance software developer who builds websites for businesses that want to look as credible online as they are in person.</p>
            <p>
              My work sits at the intersection of web development, UI/UX design and business strategy — I don&rsquo;t just write
              code, I think about how a website earns trust, guides a visitor&rsquo;s attention, and turns that attention into an
              enquiry.
            </p>
            <p>
              I care deeply about performance and clean, maintainable code, because a beautiful website that loads slowly or
              breaks on mobile isn&rsquo;t actually doing its job. Every project starts with understanding your business and your
              customers, not with a template.
            </p>
            <div className="about-credentials">
              {aboutCredentials.map((group) => (
                <div className="about-credential-group" key={group.label}>
                  <h4>
                    <DynamicIcon name={group.icon} /> {group.label}
                  </h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong>
                        <span>{item.place}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="about-tags">
              {aboutTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary">
              Work With Me →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

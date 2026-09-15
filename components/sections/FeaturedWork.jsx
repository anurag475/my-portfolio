import Link from "next/link";
import Reveal from "../Reveal";
import BrowserMockup from "../BrowserMockup";
import { ArrowRight } from "../Icons";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { caseStudies } from "@/lib/caseStudies";

function ProjectCard({ project }) {
  return (
    <Reveal as="article">
      <CardContainer className="w-full h-full" containerClassName="w-full h-full">
        <CardBody className="project-card w-full h-full">
          <CardItem translateZ="40" className="project-thumb w-full">
            <BrowserMockup blocks={project.mockup} screenshot={project.screenshot} variant={project.platform === "app" ? "app" : "browser"} />
          </CardItem>
          <div className="project-body">
            <CardItem as="span" translateZ="30" className="project-tag">
              {project.tag}
            </CardItem>
            <CardItem as="h3" translateZ="50">
              {project.title}
            </CardItem>
            <CardItem as="p" translateZ="30" className="project-desc">
              {project.description}
            </CardItem>
            {project.tech.length > 0 && (
              <CardItem translateZ="20" className="tech-tags w-full">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </CardItem>
            )}
            <CardItem translateZ="40" className="project-links w-full">
              <Link href={`/work/${project.slug}`}>
                View Case Study <ArrowRight />
              </Link>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  {project.liveLabel || "Visit Website"} <ArrowRight />
                </a>
              )}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Reveal>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="bleed-soft">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Featured Work</p>
          <h2>Work that speaks for itself.</h2>
          <p>A selection of websites designed and developed for real-world businesses and organizations.</p>
        </Reveal>

        <div className="work-grid">
          {caseStudies.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>

        <div className="work-cta-row">
          <a href="#contact" className="btn btn-primary btn-lg">
            Start a Project Like This →
          </a>
        </div>
      </div>
    </section>
  );
}

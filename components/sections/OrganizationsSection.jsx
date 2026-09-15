import Image from "next/image";
import Reveal from "../Reveal";
import { DynamicIcon, ArrowRight } from "../Icons";
import { organizations } from "@/lib/content";

function OrgCard({ org }) {
  return (
    <Reveal as="div" className="card org-card">
      <div className="org-logo">
        {org.logo ? (
          <Image src={org.logo} alt={`${org.name} logo`} width={160} height={160} unoptimized />
        ) : (
          <DynamicIcon name={org.icon} />
        )}
      </div>
      <h3>{org.name}</h3>
      <p className="org-role">{org.role}</p>
      <p>{org.description}</p>
      {org.url ? (
        <a href={org.url} target="_blank" rel="noopener noreferrer" className="card-link">
          Visit Website <ArrowRight />
        </a>
      ) : org.status === "soon" ? (
        <span className="org-badge">Coming Soon</span>
      ) : null}
    </Reveal>
  );
}

export default function OrganizationsSection() {
  return (
    <section className="bleed-soft" aria-labelledby="organizations-heading">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Organizations &amp; Ventures
          </p>
          <h2 id="organizations-heading">Beyond client work.</h2>
          <p>Organizations I&rsquo;m part of, and agencies &amp; products I&rsquo;ve helped build.</p>
        </Reveal>

        <div className="grid grid-3">
          {organizations.map((org) => (
            <OrgCard org={org} key={org.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

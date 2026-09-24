import { credibility, credentials } from "@/lib/content";

export default function Credibility() {
  return (
    <section className="cred" aria-label="Track record">
      <div className="container">
        <dl className="cred-grid">
          {credibility.map((c, i) => (
            <div className="cred-item" key={c.label} data-reveal style={{ "--d": `${i * 70}ms` }}>
              <dt>{c.label}</dt>
              <dd className="cred-value">{c.value}</dd>
              <dd className="cred-note">{c.note}</dd>
            </div>
          ))}
        </dl>
        <ul className="cred-credentials" data-reveal>
          {credentials.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span>{c.place}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

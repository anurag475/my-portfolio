export default function SectionHead({ eyebrow, title, lede, align = "left", as: Tag = "h2" }) {
  return (
    <header className={`section-head ${align === "center" ? "is-center" : ""}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className="section-title">{title}</Tag>
      {lede && <p className="section-lede">{lede}</p>}
    </header>
  );
}

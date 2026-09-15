import Reveal from "../Reveal";
import FAQList from "../FAQList";
import { faqs } from "@/lib/faqs";

export default function FAQSection() {
  return (
    <section className="bleed-soft" id="faq">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            FAQ
          </p>
          <h2>Questions, answered.</h2>
        </Reveal>
        <Reveal>
          <FAQList items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
        </Reveal>
      </div>
    </section>
  );
}

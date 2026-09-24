import Img from "../Img";
import { principles } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <figure className="about-photo" data-reveal>
          <div className="about-photo-frame">
            <Img name="me/portrait" alt="Anurag Dutta at his desk" sizes="(max-width: 899px) 80vw, 420px" />
          </div>
          <figcaption>
            <strong>Anurag Dutta</strong>
            <span>Developer · Founder · Product builder</span>
          </figcaption>
        </figure>

        <div className="about-copy">
          <header data-reveal>
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              Engineer by training. <em>Builder by instinct.</em>
            </h2>
          </header>

          <div className="about-story" data-reveal>
            <p className="about-lead">
              I studied computer science with a focus on AI and machine learning — and spent most of that time building things
              outside the syllabus.
            </p>
            <p>
              Client websites turned into a studio, AuraWeb. The studio turned into an AI school. Today I split my time between
              shipping products for clients, engineering an AI legal-tech platform at NyayaDarpan AI, and building my own venture,
              Wooobi.
            </p>
            <p>
              What ties it together is a simple belief: software is only worth building if people actually use it. So I start with
              the business — who&rsquo;s buying, what they need to trust, where they drop off — and work backwards to the code. My
              technical interest sits where AI meets everyday products: making machine learning useful in interfaces real people
              touch, not just in notebooks.
            </p>
          </div>

          <ol className="principles" data-reveal>
            {principles.map((p, i) => (
              <li key={p.title}>
                <span className="principle-num">0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import Reveal from "../Reveal";
import { whatsappUrl } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section>
      <div className="container">
        <Reveal className="final-cta">
          <h2>Your next customer could be one website away.</h2>
          <p className="lede">Let&rsquo;s build a website that makes your business impossible to ignore.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-accent btn-lg">
              Start a Project →
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark btn-lg">
              Chat on WhatsApp →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

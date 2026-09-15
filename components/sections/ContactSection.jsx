import Reveal from "../Reveal";
import ContactForm from "../ContactForm";
import { SITE, whatsappUrl } from "@/lib/site";
import { Mail, WhatsApp, Globe } from "../Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="bleed-soft">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Have a project in mind? Let&rsquo;s talk.</h2>
          <p>Tell me a little about your business and I&rsquo;ll get back to you within one business day.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="contact-method">
              <div className="icon">
                <Mail />
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
            <div className="contact-method">
              <div className="icon">
                <WhatsApp />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Chat instantly →
                </a>
              </div>
            </div>
            <div className="contact-method">
              <div className="icon">
                <Globe />
              </div>
              <div>
                <h4>Availability</h4>
                <p>Serving clients across India — 100% remote-friendly.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="form-card">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

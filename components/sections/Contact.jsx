import ContactForm from "../ContactForm";
import Img from "../Img";
import CopyEmail from "../CopyEmail";
import { WhatsApp, LinkedIn, GitHub, ArrowUpRight } from "../Icons";
import { SITE, whatsappUrl } from "@/lib/site";

const CHANNELS = [
  { icon: WhatsApp, label: "WhatsApp", value: SITE.phoneDisplay, href: whatsappUrl() },
  { icon: LinkedIn, label: "LinkedIn", value: "Anurag Dutta", href: SITE.social.linkedin },
  { icon: GitHub, label: "GitHub", value: "@anurag475", href: SITE.social.github },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact is-dark">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow" data-reveal>
              Contact
            </p>
            <h2 className="contact-title" data-reveal>
              Have an idea <em>worth building?</em>
            </h2>
            <p className="contact-lede" data-reveal>
              Let&rsquo;s turn it into something people can actually use. Tell me what you have in mind — I reply to every
              enquiry within one business day.
            </p>

            <div className="contact-person" data-reveal>
              <span className="contact-avatar">
                <Img name="me/avatar" alt="Anurag Dutta" sizes="56px" />
              </span>
              <p>
                <strong>You&rsquo;ll talk directly to me.</strong>
                <span>No account managers — the person you brief is the person who builds it.</span>
              </p>
            </div>

            <div className="contact-email" data-reveal>
              <span className="contact-label">Email</span>
              <div className="contact-email-row">
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <CopyEmail />
              </div>
            </div>

            <ul className="channels" data-reveal>
              {CHANNELS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <span className="channel-icon">
                      <Icon />
                    </span>
                    <span className="channel-text">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </span>
                    <ArrowUpRight className="channel-go" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-card" data-reveal>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

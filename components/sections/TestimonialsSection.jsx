import Reveal from "../Reveal";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { testimonials } from "@/lib/content";
import { initialsAvatar } from "@/lib/utils";

export default function TestimonialsSection() {
  const items = testimonials.map((t, i) => ({
    name: t.name,
    designation: t.business,
    quote: t.quote,
    src: t.photo || initialsAvatar(t.initials, i),
  }));

  return (
    <section className="bleed-soft" aria-labelledby="testimonials-heading">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Testimonials
          </p>
          <h2 id="testimonials-heading">What clients say</h2>
        </Reveal>
        <Reveal>
          <AnimatedTestimonials testimonials={items} autoplay />
        </Reveal>
      </div>
    </section>
  );
}

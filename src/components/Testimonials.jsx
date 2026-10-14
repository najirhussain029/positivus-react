import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { testimonials, sectionHeadings } from "../data/data";

export default function Testimonials() {
  const { title, text } = sectionHeadings.testimonials;

  return (
    <Section id="testimonials">
      <SectionTitle title={title} text={text} />
      <div className="slider">
        <div className="track">
          {testimonials.map((t) => (
            <article className="slide" key={t.id}>
              <blockquote>“{t.quote}”</blockquote>
              <b>{t.name}</b>
              <small>{t.role}</small>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

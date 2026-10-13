import { useState } from "react";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { testimonials, sectionHeadings } from "../data/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const go = (i) => setIndex((i + total) % total);
  const { title, text } = sectionHeadings.testimonials;

  return (
    <Section id="testimonials">
      <SectionTitle title={title} text={text} />
      <div className="slider">
        <div className="viewport">
          <div className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t) => (
              <div className="slide" key={t.id}>
                <blockquote>“{t.quote}”</blockquote>
                <b>{t.name}</b>
                <small>{t.role}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="controls">
          <button onClick={() => go(index - 1)} aria-label="Previous testimonial">←</button>
          <div className="dots">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={i === index ? "on" : ""}
                onClick={() => go(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => go(index + 1)} aria-label="Next testimonial">→</button>
        </div>
      </div>
    </Section>
  );
}

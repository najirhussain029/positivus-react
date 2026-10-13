import Section from "./ui/Section";
import Button from "./ui/Button";
import { cta } from "../data/data";

export default function Cta() {
  return (
    <Section>
      <div className="cta">
        <div>
          <h3>{cta.title}</h3>
          <p>{cta.text}</p>
          <Button href="#contact">{cta.button}</Button>
        </div>
        <img className="ph-dark" src={cta.image} alt="Smiling character riding a flying saucer" />
      </div>
    </Section>
  );
}

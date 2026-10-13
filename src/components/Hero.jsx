import Section from "./ui/Section";
import Button from "./ui/Button";
import { hero } from "../data/data";

export default function Hero() {
  return (
    <Section id="about" className="hero">
      <div className="hero-text">
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <Button href="#contact">{hero.button}</Button>
      </div>
      <div className="hero-img">
        <img className="ph-green" src={hero.image} alt="Digital marketing illustration" />
      </div>
    </Section>
  );
}

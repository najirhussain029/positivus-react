import Section from "./ui/Section";
import { clientLogos } from "../data/data";

export default function Logos() {
  return (
    <Section className="logos">
      {clientLogos.map((name) => (
        <span key={name}>{name}</span>
      ))}
    </Section>
  );
}

import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services, sectionHeadings } from "../data/data";

export default function Services() {
  const { title, text } = sectionHeadings.services;
  return (
    <Section id="services">
      <SectionTitle title={title} text={text} />
      <div className="grid-2">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}

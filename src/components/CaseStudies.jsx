import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import CaseCard from "./CaseCard";
import { caseStudies, sectionHeadings } from "../data/data";

export default function CaseStudies() {
  const { title, text } = sectionHeadings.cases;
  return (
    <Section id="cases">
      <SectionTitle title={title} text={text} />
      <div className="cases">
        {caseStudies.map((item) => (
          <CaseCard key={item.id} text={item.text} />
        ))}
      </div>
    </Section>
  );
}

import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import ProcessItem from "./ProcessItem";
import { processSteps, sectionHeadings } from "../data/data";

export default function WorkingProcess() {
  const { title, text } = sectionHeadings.process;

  return (
    <Section id="process">
      <SectionTitle title={title} text={text} />
      <div className="acc">
        {processSteps.map((step) => (
          <ProcessItem key={step.id} {...step} />
        ))}
      </div>
    </Section>
  );
}

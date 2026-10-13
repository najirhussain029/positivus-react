import { useState } from "react";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import ProcessItem from "./ProcessItem";
import { processSteps, sectionHeadings } from "../data/data";

export default function WorkingProcess() {
  const [openId, setOpenId] = useState(processSteps[0].id); // one open at a time
  const { title, text } = sectionHeadings.process;

  return (
    <Section id="process">
      <SectionTitle title={title} text={text} />
      <div className="acc">
        {processSteps.map((step) => (
          <ProcessItem
            key={step.id}
            {...step}
            isOpen={openId === step.id}
            onToggle={() => setOpenId(openId === step.id ? null : step.id)}
          />
        ))}
      </div>
    </Section>
  );
}

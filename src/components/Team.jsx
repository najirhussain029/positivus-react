import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import TeamMember from "./TeamMember";
import { team, sectionHeadings } from "../data/data";

export default function Team() {
  const { title, text } = sectionHeadings.team;
  return (
    <Section id="team">
      <SectionTitle title={title} text={text} />
      <div className="grid-3">
        {team.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
      <div className="right">
        <Button>See all team</Button>
      </div>
    </Section>
  );
}

import ArrowLink from "./ui/ArrowLink";

export default function CaseCard({ text }) {
  return (
    <div>
      <p>{text}</p>
      <ArrowLink />
    </div>
  );
}

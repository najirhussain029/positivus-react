// Green highlighted heading + short description.
export default function SectionTitle({ title, text }) {
  return (
    <div className="title-row">
      <h2 className="tag">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

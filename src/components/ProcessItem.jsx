export default function ProcessItem({ number, title, text }) {
  return (
    <article className="acc-item active">
      <div className="acc-head">
        <b>{number}</b>
        <h3>{title}</h3>
        <span className="pm" aria-hidden="true"></span>
      </div>
      <div className="acc-body">
        <div className="acc-inner">
          <p>{text}</p>
        </div>
      </div>
    </article>
  );
}

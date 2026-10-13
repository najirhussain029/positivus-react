export default function ProcessItem({ number, title, text, isOpen, onToggle }) {
  return (
    <div className={`acc-item${isOpen ? " active" : ""}`}>
      <button className="acc-head" onClick={onToggle} aria-expanded={isOpen}>
        <b>{number}</b>
        <h3>{title}</h3>
        <span className="pm"></span>
      </button>
      <div className="acc-body">
        <div className="acc-inner">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

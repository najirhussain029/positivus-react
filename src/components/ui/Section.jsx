// Wrapper that gives every section the same container + optional id.
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`container ${className}`.trim()}>
      {children}
    </section>
  );
}

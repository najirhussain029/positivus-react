export default function ServiceCard({ lines, variant, image, alt }) {
  return (
    <article className={`card ${variant}`}>
      <h3>
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h3>
      <a href="#" className="learn">
        <i>↗</i>Learn more
      </a>
      <img className="art" src={image} alt={alt} />
    </article>
  );
}

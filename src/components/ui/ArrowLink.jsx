// "Learn more ↗" text link in green (used on dark backgrounds).
export default function ArrowLink({ children = "Learn more", href = "#" }) {
  return (
    <a href={href} className="link-g">
      {children} ↗
    </a>
  );
}

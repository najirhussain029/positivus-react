// Reusable button. Renders <a> by default, or <button> when `type` is passed.
export default function Button({
  children,
  href = "#",
  variant = "dark", // dark | outline | green
  full = false,
  type,
  className = "",
  ...rest
}) {
  const classes = `btn btn-${variant}${full ? " full" : ""} ${className}`.trim();

  if (type) {
    return (
      <button type={type} className={classes} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

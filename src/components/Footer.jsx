import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { navLinks, footer } from "../data/data";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="f-top">
          <Logo />
          <nav>
            {navLinks.map((link) => (
              <a key={link.id} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="social">
            {footer.social.map((social) => (
              <a
                key={social.id}
                className={`social-icon social-${social.id}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="f-mid">
          <div>
            <span className="tag">Contact us:</span>
            {footer.info.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <form className="sub" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" />
            <Button type="submit" variant="green">
              Subscribe to news
            </Button>
          </form>
        </div>

        <div className="f-bot">
          {footer.copyright} <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

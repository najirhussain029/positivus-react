import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { navLinks } from "../data/data";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container nav">
        <Logo />
        <nav className="menu">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="outline">
            Request a quote
          </Button>
        </nav>
      </div>
    </header>
  );
}

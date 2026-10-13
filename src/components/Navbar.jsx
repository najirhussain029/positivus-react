import { useState } from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { navLinks } from "../data/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Logo />
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <nav className={`menu${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="outline" onClick={() => setOpen(false)}>
            Request a quote
          </Button>
        </nav>
      </div>
    </header>
  );
}

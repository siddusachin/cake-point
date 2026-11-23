import { navLinks } from "../data.js";

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home">
        <img src="/assets/logo.png" alt="" width="72" height="72" />
        <span>Cake Point</span>
      </a>
      <nav className="navbar__links" aria-label="Primary">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}

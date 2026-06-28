const links = [
  { href: "/#about",        label: "About" },
  { href: "/services",      label: "Services" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/tools",         label: "Tools" },
  { href: "/moving-to-elizabethtown-ky", label: "Moving Guide" },
  { href: "/course", label: "Free Course" },
  { href: "/faq",           label: "FAQ" },
  { href: "/#contact",      label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--dark)", borderTop: "1px solid rgba(184,151,106,0.12)", padding: "3rem", textAlign: "center" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "0.5rem" }}>Rhoman James</div>
      <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "2rem" }}>Real Estate Professional · Elizabethtown, Kentucky</div>
      <div aria-hidden="true" style={{ width: "3rem", height: "1px", background: "var(--gold)", margin: "0 auto 2rem" }} />
      <ul style={{ display: "flex", justifyContent: "center", gap: "1.75rem", flexWrap: "wrap", marginBottom: "2rem", listStyle: "none" }}>
        {links.map(l => <li key={l.href}><a href={l.href} className="nav-link" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>{l.label}</a></li>)}
      </ul>
      <p style={{ fontSize: "0.72rem", color: "var(--muted2)", lineHeight: 1.7 }}>
        &copy; {year} Rhoman James Real Estate. All rights reserved.<br />
        Elizabethtown, KY · Hardin County<br />
        <a href="/privacy" style={{ color: "var(--muted)", textDecoration: "none" }}>Privacy Policy</a>&nbsp;·&nbsp;
        <a href="/accessibility" style={{ color: "var(--muted)", textDecoration: "none" }}>Accessibility</a>
      </p>
    </footer>
  );
}

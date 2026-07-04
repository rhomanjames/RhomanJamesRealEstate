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
    <footer style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--border)", padding: "3.5rem 2rem", textAlign: "center" }}>
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "0.5rem" }}>
        Rhoman <span style={{ fontWeight: 500, color: "var(--blue)" }}>James</span>
      </div>
      <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--muted)", marginBottom: "2rem" }}>Real Estate Professional · Elizabethtown, Kentucky</div>
      <div aria-hidden="true" style={{ width: "3rem", height: "2px", borderRadius: "2px", background: "var(--blue)", margin: "0 auto 2rem" }} />
      <ul style={{ display: "flex", justifyContent: "center", gap: "1.75rem", flexWrap: "wrap", marginBottom: "2rem", listStyle: "none" }}>
        {links.map(l => <li key={l.href}><a href={l.href} className="nav-link" style={{ fontSize: "0.85rem" }}>{l.label}</a></li>)}
      </ul>
      <p style={{ fontSize: "0.8rem", color: "var(--muted2)", lineHeight: 1.8 }}>
        &copy; {year} Rhoman James Real Estate. All rights reserved.<br />
        Elizabethtown, KY · Hardin County<br />
        <a href="/privacy" style={{ color: "var(--muted)", textDecoration: "none" }}>Privacy Policy</a>&nbsp;·&nbsp;
        <a href="/accessibility" style={{ color: "var(--muted)", textDecoration: "none" }}>Accessibility</a>
      </p>
    </footer>
  );
}

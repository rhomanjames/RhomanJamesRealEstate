import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--dark)", padding: "8rem 3rem 4rem" }}>
        <div style={{ textAlign: "center", maxWidth: 520 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "8rem", fontWeight: 300, color: "rgba(184,151,106,0.15)", lineHeight: 1, marginBottom: "1rem" }}>404</div>
          <div aria-hidden="true" style={{ width: 1, height: "2rem", background: "linear-gradient(to bottom, var(--gold), transparent)", margin: "0 auto 1.5rem" }} />
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.2rem", fontWeight: 300, color: "white", marginBottom: "1rem" }}>Page not found</h1>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            This page does not exist or may have moved. Let me help you find what you are looking for.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a href="/" className="btn-primary">Go Home</a>
            <a href="/faq" className="btn-outline">Browse FAQ</a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {[
              { label: "Neighborhoods", href: "/neighborhoods" },
              { label: "Services", href: "/services" },
              { label: "Free Tools", href: "/tools" },
              { label: "Contact", href: "/#contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", border: "1px solid rgba(184,151,106,0.2)", padding: "0.5rem 1.1rem", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Contact() {
  const details = [
    {
      label: "Phone",
      value: "(859) 536-6009",
      sub: "Available evenings and weekends",
      href: "tel:+18595366009",
      size: "1.6rem",
    },
    {
      label: "Email",
      value: "RhomanMJames@gmail.com",
      sub: "",
      href: "mailto:RhomanMJames@gmail.com",
      size: "1.25rem",
    },
    {
      label: "Office",
      value: "Elizabethtown, KY 42701",
      sub: "",
      href: null,
      size: "1.15rem",
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ padding: "7rem 3rem", background: "var(--bg)", textAlign: "center" }}
    >
      <style>{`
        .contact-link { color: var(--text); text-decoration: none; display: block; transition: color 0.2s; }
        .contact-link:hover { color: var(--blue); }
      `}</style>

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <span className="section-tag">Get in Touch</span>
        <h2
          id="contact-heading"
          className="section-heading"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
        >
          Let&apos;s start a conversation
        </h2>

        <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "3.5rem", marginTop: "1rem" }}>
          Whether you&apos;re ready to buy, sell, or just have questions about
          the Elizabethtown market — reach out. There&apos;s no pressure, no
          obligation, just honest guidance.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
          {details.map((d) => (
            <div key={d.label} style={{
              textAlign: "center",
              background: "var(--bg-soft)",
              borderRadius: "16px",
              padding: "1.5rem 2.5rem",
              minWidth: "260px",
            }}>
              <div style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "var(--blue)",
                marginBottom: "0.5rem",
              }}>
                {d.label}
              </div>

              {d.href ? (
                <a
                  href={d.href}
                  className="contact-link"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: d.size,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {d.value}
                </a>
              ) : (
                <div style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: d.size,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}>
                  {d.value}
                </div>
              )}

              {d.sub && (
                <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: "0.4rem" }}>
                  {d.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

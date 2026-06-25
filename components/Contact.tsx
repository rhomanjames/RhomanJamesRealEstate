export default function Contact() {
  const details = [
    {
      label: "Phone",
      value: "(502) 264-9376",
      sub: "Available evenings and weekends",
      href: "tel:+15022649376",
      size: "1.75rem",
    },
    {
      label: "Email",
      value: "RhomanMJames@gmail.com",
      sub: "",
      href: "mailto:RhomanMJames@gmail.com",
      size: "1.35rem",
    },
    {
      label: "Office",
      value: "Elizabethtown, KY 42701",
      sub: "",
      href: null,
      size: "1.25rem",
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ padding: "7rem 3rem", background: "var(--dark2)", textAlign: "center" }}
    >
      <style>{`
        .contact-link { color: white; text-decoration: none; display: block; transition: color 0.2s; }
        .contact-link:hover { color: var(--gold); }
      `}</style>

      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <span className="section-tag">Get in Touch</span>
        <h2
          id="contact-heading"
          className="section-heading"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Let&apos;s start a conversation
        </h2>

        <div className="divider" aria-hidden="true" style={{ margin: "2rem auto" }} />

        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "4rem" }}>
          Whether you&apos;re ready to buy, sell, or just have questions about
          the Elizabethtown market — reach out. There&apos;s no pressure, no
          obligation, just honest guidance.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center" }}>
          {details.map((d) => (
            <div key={d.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}>
                {d.label}
              </div>

              {d.href ? (
                <a
                  href={d.href}
                  className="contact-link"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: d.size,
                    fontWeight: 300,
                  }}
                >
                  {d.value}
                </a>
              ) : (
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: d.size,
                  fontWeight: 300,
                  color: "white",
                }}>
                  {d.value}
                </div>
              )}

              {d.sub && (
                <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.3rem", letterSpacing: "0.05em" }}>
                  {d.sub}
                </div>
              )}
            </div>
          ))}
        </div>

        <div aria-hidden="true" style={{
          width: "1px",
          height: "3rem",
          background: "linear-gradient(to bottom, var(--gold), transparent)",
          margin: "4rem auto 0",
        }} />
      </div>
    </section>
  );
}

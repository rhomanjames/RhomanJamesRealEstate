export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 5rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--blue)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--bg-soft)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--blue)",
            background: "var(--blue-pale)",
            padding: "0.5rem 1.1rem",
            borderRadius: "999px",
            marginBottom: "1.75rem",
          }}
        >
          Elizabethtown, Kentucky
        </div>

        <h1
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "clamp(2.75rem, 6.5vw, 4.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "var(--text)",
            marginBottom: "0.4em",
          }}
        >
          Your home is
          <br />
          your <span style={{ color: "var(--blue)" }}>legacy</span>
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--muted)",
            margin: "1.5rem auto 0",
            maxWidth: "38rem",
            lineHeight: 1.75,
          }}
        >
          Expert real estate guidance for buyers and sellers across Hardin
          County. Where trust, precision, and deep local knowledge meet.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2.75rem",
            flexWrap: "wrap",
          }}
        >
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
          <a href="#about" className="btn-outline">
            Meet Rhoman
          </a>
        </div>
      </div>
    </section>
  );
}

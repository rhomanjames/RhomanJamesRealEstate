export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 5rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--dark)",
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(184,151,106,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top line accent */}
        <div
          aria-hidden="true"
          style={{
            width: 1,
            height: "4rem",
            background: "linear-gradient(to bottom, transparent, var(--gold))",
            margin: "0 auto 2rem",
          }}
        />

        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}
        >
          Elizabethtown, Kentucky
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "white",
            marginBottom: "0.35em",
          }}
        >
          Your{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>home</em>{" "}
          is
          <br />
          your legacy
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            margin: "1.5rem auto 0",
            maxWidth: "38rem",
            lineHeight: 1.8,
          }}
        >
          Expert real estate guidance for buyers and sellers across Hardin
          County. Where trust, precision, and deep local knowledge meet.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            marginTop: "3rem",
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

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--muted2)",
            }}
          >
            Scroll
          </span>
          <div
            className="scroll-line"
            style={{
              width: 1,
              height: "3rem",
              background: "linear-gradient(to bottom, var(--gold), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

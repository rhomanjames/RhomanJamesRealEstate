const areas = [
  { name: "Elizabethtown", county: "Hardin County · Primary" },
  { name: "Radcliff", county: "Hardin County" },
  { name: "Vine Grove", county: "Hardin County" },
  { name: "Rineyville", county: "Hardin County" },
  { name: "Hodgenville", county: "LaRue County" },
];

export default function Areas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      style={{ padding: "7rem 3rem", background: "var(--dark)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">Coverage Area</span>
        <h2
          id="areas-heading"
          className="section-heading"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Serving Elizabethtown and all of Hardin County
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            lineHeight: 1.9,
            maxWidth: "42rem",
          }}
        >
          From Elizabethtown&apos;s historic core to the surrounding communities,
          I know these neighborhoods street by street.
        </p>

        <div
          role="list"
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            border: "1px solid rgba(184,151,106,0.12)",
          }}
        >
          {areas.map((a, i) => (
            <div
              key={a.name}
              role="listitem"
              style={{
                padding: "2rem 1.5rem",
                borderRight:
                  i < areas.length - 1
                    ? "1px solid rgba(184,151,106,0.12)"
                    : "none",
                textAlign: "center",
                background: "var(--dark2)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.1rem",
                  color: "white",
                  marginBottom: "0.25rem",
                }}
              >
                {a.name}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                {a.county}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

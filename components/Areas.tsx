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
      style={{ padding: "7rem 3rem", background: "var(--bg-soft)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">Coverage Area</span>
        <h2
          id="areas-heading"
          className="section-heading"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
        >
          Serving Elizabethtown and all of Hardin County
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            lineHeight: 1.85,
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
            gap: "1rem",
          }}
        >
          {areas.map((a) => (
            <div
              key={a.name}
              role="listitem"
              style={{
                padding: "2rem 1.5rem",
                textAlign: "center",
                background: "white",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                boxShadow: "0 1px 3px rgba(11,15,25,0.04)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.35rem",
                }}
              >
                {a.name}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "var(--blue)",
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

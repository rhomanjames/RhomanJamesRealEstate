const stats = [
  { num: "E-town", label: "Based & rooted here" },
  { num: "100%", label: "Client focused" },
  { num: "Local", label: "Hardin County expert" },
  { num: "Free", label: "Initial consultation" },
];

export default function Stats() {
  return (
    <div
      role="region"
      aria-label="Key stats"
      style={{
        background: "var(--dark2)",
        borderTop: "1px solid rgba(184,151,106,0.12)",
        borderBottom: "1px solid rgba(184,151,106,0.12)",
        padding: "3.5rem 3rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "2rem",
        textAlign: "center",
      }}
    >
      {stats.map((s) => (
        <div key={s.label}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "3rem",
              fontWeight: 300,
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            {s.num}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: "0.5rem",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

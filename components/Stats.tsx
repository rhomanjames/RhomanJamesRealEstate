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
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
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
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "2.25rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--blue)",
              lineHeight: 1,
            }}
          >
            {s.num}
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--muted)",
              marginTop: "0.6rem",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

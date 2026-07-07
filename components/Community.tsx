export default function Community() {
  return (
    <section
      aria-labelledby="community-heading"
      style={{ position: "relative", padding: "0", background: "white" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "480px",
        }}
        className="community-grid"
      >
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1761850648640-2ee5870ee883?w=1400&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "320px",
          }}
          role="img"
          aria-label="A charming small-town Main Street, representative of downtown Elizabethtown, Kentucky"
        />
        <div
          style={{
            padding: "5rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "var(--bg-soft)",
          }}
        >
          <span className="section-tag">A Real Community</span>
          <h2
            id="community-heading"
            className="section-heading"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
          >
            Elizabethtown isn&apos;t just a market — it&apos;s home
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.85,
              maxWidth: "34rem",
            }}
          >
            From the historic downtown square to quiet neighborhood streets,
            Elizabethtown has the kind of small-town character that&apos;s
            genuinely hard to find. Good schools, friendly neighbors, and a
            pace of life that lets you actually enjoy where you live — this
            is the community I get to help people join every day.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .community-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

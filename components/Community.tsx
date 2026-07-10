export default function Community() {
  return (
    <section
      aria-labelledby="community-heading"
      style={{ padding: "5rem 1.5rem", background: "var(--bg-soft)" }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
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
            margin: "0 auto",
          }}
        >
          From the historic downtown square to quiet neighborhood streets,
          Elizabethtown has the kind of small-town character that&apos;s
          genuinely hard to find. Good schools, friendly neighbors, and a
          pace of life that lets you actually enjoy where you live — this
          is the community I get to help people join every day.
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    num: "01",
    title: "Buying a Home",
    slug: "buying-a-home",
    body: "I'll help you find the right property in Elizabethtown, negotiate the best terms, and guide you through inspections, financing, and closing — every step of the way.",
  },
  {
    num: "02",
    title: "Selling Your Home",
    slug: "selling-your-home",
    body: "From pricing strategy to professional marketing and open houses, I'll position your home to attract serious buyers and achieve maximum value in today's market.",
  },
  {
    num: "03",
    title: "Market Analysis",
    slug: "market-analysis",
    body: "Thinking about your next move? I offer detailed, no-pressure market evaluations so you can make informed decisions based on real, current Hardin County data.",
  },
  {
    num: "04",
    title: "First-Time Buyers",
    slug: "first-time-buyers",
    body: "Buying your first home is one of life's biggest moments. I'll walk you through every term, document, and decision — patiently and thoroughly — until you hold the keys.",
  },
  {
    num: "05",
    title: "Relocation",
    slug: "relocation",
    body: "Moving to the Elizabethtown area? I'll introduce you to the neighborhoods, schools, and communities that match your lifestyle — and make your transition seamless.",
  },
  {
    num: "06",
    title: "Investment Properties",
    slug: "investment-properties",
    body: "Hardin County's growth makes it a smart place to invest. I'll help you identify properties with strong fundamentals and guide you through the numbers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ padding: "7rem 3rem", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="section-tag">What I Offer</span>
        <h2
          id="services-heading"
          className="section-heading"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Services designed around your goals
        </h2>

        <div
          style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="service-card"
                style={{ padding: "2rem", height: "100%", cursor: "pointer", borderRadius: "16px" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--blue-pale)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "1.25rem",
                    color: "var(--text)",
                    marginBottom: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  {s.body}
                </p>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    title: "Local Knowledge",
    body: "Deep roots in Hardin County and surrounding communities",
  },
  {
    title: "Clear Communication",
    body: "You'll always know where things stand — no surprises",
  },
  {
    title: "Negotiation",
    body: "Skilled advocacy to protect your investment",
  },
  {
    title: "Full Service",
    body: "With you from first showing to closing day",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ padding: "7rem 3rem", background: "var(--bg-soft)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image block */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "3/4",
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                boxShadow: "0 20px 50px rgba(11,15,25,0.12)",
              }}
            >
              <img
                src="https://res.cloudinary.com/usamobileappsllc/image/upload/v1782244414/Gemini_Generated_Image_iijo2biijo2biijo_1_mkv0mz.png"
                alt="Rhoman James, Elizabethtown KY Real Estate Professional"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-tag">About Rhoman</span>
            <h2
              id="about-heading"
              className="section-heading"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
            >
              More than a transaction — a relationship built on trust
            </h2>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: "42rem",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginTop: "0.5rem",
              }}
            >
              Elizabethtown is more than a market to me — it&apos;s home. I&apos;m
              committed to guiding buyers and sellers through every step of the
              real estate process with honesty, patience, and genuine care for
              what matters most to you.
            </p>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: "42rem",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              Whether you&apos;re a first-time buyer navigating the process for the
              first time, or a family ready to upsize into something that fits
              your next chapter, I bring the expertise and dedication you
              deserve.
            </p>

            {/* Values grid */}
            <div
              style={{
                marginTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {values.map((v) => (
                <div
                  key={v.title}
                  style={{
                    padding: "1.25rem",
                    background: "white",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                    boxShadow: "0 1px 3px rgba(11,15,25,0.04)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--blue)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {v.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {v.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

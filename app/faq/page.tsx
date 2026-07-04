import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { allFaqData, allFAQsCombined } from "./faqData";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Real Estate FAQ | Elizabethtown KY | Rhoman James",
  description:
    "Answers to 70+ real estate questions in Elizabethtown, KY — buying, selling, VA loans, schools, neighborhoods, and more from a local Hardin County real estate professional.",
  keywords:
    "Elizabethtown KY real estate FAQ, buying home Elizabethtown Kentucky, VA loan Fort Knox, selling house Hardin County, relocating Elizabethtown KY, real estate questions Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Real Estate FAQ | Elizabethtown, KY | Rhoman James",
    description:
      "70+ real estate questions answered by a local Elizabethtown KY real estate professional. VA loans, neighborhoods, schools, investing, and more.",
    url: "https://rhomanjames.com/faq",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQsCombined.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <main style={{ paddingTop: 0 }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: "3rem",
            paddingBottom: "5rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            background: "var(--bg-soft)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 1,
              height: "3rem",
              background: "var(--blue)",
              margin: "0 auto 2rem",
            }}
          />
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: "1rem",
            }}
          >
            Elizabethtown, KY Real Estate
          </p>
          <h1
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Your questions,{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>answered</em>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "40rem",
              margin: "0 auto 0.75rem",
            }}
          >
            70+ answers covering buying, selling, VA loans, neighborhoods,
            schools, investing, and relocating to Hardin County — straight from
            a local agent.
          </p>
          <p style={{ color: "var(--muted2)", fontSize: "0.8rem", marginBottom: "3rem" }}>
            {allFAQsCombined.length} questions answered
          </p>

          {/* Category jump links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            {allFaqData.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  border: "1px solid var(--border)", borderRadius: "16px",
                  padding: "0.5rem 1.25rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.category.split(",")[0].split("&")[0].trim()}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Categories */}
        <section style={{ background: "white", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            {allFaqData.map((cat, i) => (
              <div
                key={cat.slug}
                id={cat.slug}
                style={{ marginBottom: i < allFaqData.length - 1 ? "6rem" : 0 }}
              >
                <div style={{ marginBottom: "2.5rem" }}>
                  <p
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {cat.description}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 700,
                      color: "var(--text)",
                      lineHeight: 1.2,
                    }}
                  >
                    {cat.category}
                  </h2>
                  <div
                    aria-hidden="true"
                    style={{
                      width: "3rem",
                      height: "1px",
                      background: "var(--blue)",
                      marginTop: "1.25rem",
                    }}
                  />
                </div>
                <FAQAccordion faqs={cat.faqs} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg-soft)",
            padding: "7rem 3rem",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--blue)",
                marginBottom: "1.5rem",
              }}
            >
              Still have questions?
            </p>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Let&apos;s talk through your specific situation
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              Every buyer and seller situation is different. Call, text, or
              email — I will give you a straight answer with no obligation.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:+15022649376" className="btn-primary">
                Call (502) 264-9376
              </a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline">
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

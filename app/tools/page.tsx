import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Real Estate Tools | Elizabethtown KY | Rhoman James",
  description: "Free mortgage, VA loan, and affordability calculators — plus rent vs buy, closing costs, and more. Built for Elizabethtown and Hardin County buyers and sellers.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools" },
  openGraph: { title: "Free Real Estate Calculators | Elizabethtown KY | Rhoman James", description: "10 free real estate calculators built for Hardin County buyers, sellers, and investors.", url: "https://rhomanjames.com/tools", siteName: "Rhoman James Real Estate", type: "website" },
};

const tools = [
  { num: "01", slug: "mortgage-calculator", title: "Mortgage Calculator", desc: "Estimate your monthly payment with principal, interest, taxes, insurance, and PMI.", tags: ["Buyers"] },
  { num: "02", slug: "affordability-calculator", title: "Affordability Calculator", desc: "Find out how much home you can afford based on income, debts, and down payment.", tags: ["Buyers"] },
  { num: "03", slug: "va-loan-calculator", title: "VA Loan Calculator", desc: "Zero down, no PMI — calculate your VA payment with the funding fee included.", tags: ["Military", "Buyers"] },
  { num: "04", slug: "rent-vs-buy", title: "Rent vs. Buy Calculator", desc: "See exactly when buying beats renting in Elizabethtown based on your real numbers.", tags: ["Buyers"] },
  { num: "05", slug: "closing-cost-estimator", title: "Closing Cost Estimator", desc: "Itemized buyer and seller closing cost estimates specific to Hardin County, KY.", tags: ["Buyers", "Sellers"] },
  { num: "06", slug: "net-proceeds", title: "Home Sale Net Proceeds", desc: "Find out exactly how much you walk away with after selling — mortgage payoff included.", tags: ["Sellers"] },
  { num: "07", slug: "down-payment-planner", title: "Down Payment Planner", desc: "How long until you can afford to buy? Track your savings against every down payment target.", tags: ["First-Time Buyers"] },
  { num: "08", slug: "investment-roi", title: "Investment Property ROI", desc: "Cash flow, cap rate, cash-on-cash return, and total ROI for Hardin County rental properties.", tags: ["Investors"] },
  { num: "09", slug: "property-tax-estimator", title: "Property Tax Estimator", desc: "Estimate annual and monthly taxes for Hardin, LaRue, and Meade County properties.", tags: ["Buyers", "Sellers"] },
  { num: "10", slug: "khc-estimator", title: "KHC Assistance Estimator", desc: "Check eligibility for Kentucky Housing Corporation down payment assistance programs.", tags: ["First-Time Buyers"] },
];

const tagColors: Record<string, string> = { "Buyers": "var(--border)", "Sellers": "rgba(100,150,184,0.15)", "Military": "rgba(100,184,130,0.15)", "Investors": "rgba(184,130,100,0.15)", "First-Time Buyers": "rgba(160,100,184,0.15)" };


const toolsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Real Estate Calculators — Rhoman James Elizabethtown KY",
  description: "10 free real estate calculators for buyers, sellers, and investors in Elizabethtown and Hardin County, KY",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Mortgage Calculator", url: "https://rhomanjames.com/tools/mortgage-calculator" },
    { "@type": "ListItem", position: 2, name: "Affordability Calculator", url: "https://rhomanjames.com/tools/affordability-calculator" },
    { "@type": "ListItem", position: 3, name: "VA Loan Calculator", url: "https://rhomanjames.com/tools/va-loan-calculator" },
    { "@type": "ListItem", position: 4, name: "Rent vs Buy Calculator", url: "https://rhomanjames.com/tools/rent-vs-buy" },
    { "@type": "ListItem", position: 5, name: "Closing Cost Estimator", url: "https://rhomanjames.com/tools/closing-cost-estimator" },
    { "@type": "ListItem", position: 6, name: "Net Proceeds Calculator", url: "https://rhomanjames.com/tools/net-proceeds" },
    { "@type": "ListItem", position: 7, name: "Down Payment Planner", url: "https://rhomanjames.com/tools/down-payment-planner" },
    { "@type": "ListItem", position: 8, name: "Investment ROI Calculator", url: "https://rhomanjames.com/tools/investment-roi" },
    { "@type": "ListItem", position: 9, name: "Property Tax Estimator", url: "https://rhomanjames.com/tools/property-tax-estimator" },
    { "@type": "ListItem", position: 10, name: "KHC DPA Estimator", url: "https://rhomanjames.com/tools/khc-estimator" },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsSchema) }} />
      <Navbar />
      <Breadcrumb items={[{ label: "Tools" }]} />
      <main style={{ paddingTop: 0 }}>
        <section style={{ paddingTop: "3rem", paddingBottom: "5rem", paddingLeft: "3rem", paddingRight: "3rem", background: "var(--bg-soft)", textAlign: "center", position: "relative" }}>
                    <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "var(--blue)", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Free Resources</p>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Real estate <em style={{ fontStyle: "italic", color: "var(--blue)" }}>calculators</em>
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "36rem", margin: "0 auto" }}>
            10 free tools built specifically for buyers, sellers, and investors in Elizabethtown and Hardin County, KY. No sign-up required.
          </p>
        </section>

        <section style={{ background: "var(--text)", padding: "5rem 3rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {tools.map((t) => (
              <a key={t.slug} href={`/tools/${t.slug}`} style={{ textDecoration: "none" }}>
                <article className="service-card" style={{ padding: "2rem", height: "100%", cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--border)", lineHeight: 1 }} aria-hidden="true">{t.num}</div>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                      {t.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: tagColors[tag] || "var(--border)", color: "var(--blue)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.35rem", color: "var(--text)", marginBottom: "0.6rem", fontWeight: 400 }}>{t.title}</h2>
                  <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>{t.desc}</p>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    Open calculator <span aria-hidden="true">→</span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        <section style={{ background: "var(--bg-soft)", padding: "6rem 3rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Numbers are just the start</p>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "1.25rem" }}>Let's talk through your real situation</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>These calculators give you a strong starting point. A free conversation with me gives you a complete picture tailored to Elizabethtown's actual market.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+18595366009" className="btn-primary">Call (859) 536-6009</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline">Send an Email</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </>
  );
}

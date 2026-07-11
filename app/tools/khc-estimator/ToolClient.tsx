"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function KHCEstimator() {
  const [income, setIncome] = useState(58000);
  const [price, setPrice] = useState(220000);
  const [creditScore, setCreditScore] = useState(670);
  const [firstTime, setFirstTime] = useState(true);
  const [loanType, setLoanType] = useState<"conventional" | "fha" | "va" | "usda">("fha");

  // KHC 2024/2025 income limits for Hardin County (approx)
  const hardinIncomeLimit = 90000;
  const priceLimit = 481176; // KHC purchase price limit 2024
  const dpaAmount = 10000; // Regular DPA program

  const incomeQualifies = income <= hardinIncomeLimit;
  const priceQualifies = price <= priceLimit;
  const creditQualifies = creditScore >= 620;
  const firstTimeRequired = firstTime; // some programs require it

  const fullyQualifies = incomeQualifies && priceQualifies && creditQualifies && firstTime;
  const mayQualify = incomeQualifies && priceQualifies && creditQualifies && !firstTime;

  // Loan calculations
  const rate = loanType === "va" ? 6.5 : loanType === "usda" ? 6.625 : loanType === "fha" ? 6.875 : 7.0;
  const minDown = loanType === "va" || loanType === "usda" ? 0 : loanType === "fha" ? price * 0.035 : price * 0.05;
  const downAfterDPA = Math.max(0, minDown - (fullyQualifies ? dpaAmount : 0));
  const loan = price - Math.max(minDown, 0);
  const fhaUpfront = loanType === "fha" ? loan * 0.0175 : 0;
  const vaFunding = loanType === "va" ? price * 0.023 : 0;
  const loanWithFees = loan + fhaUpfront + vaFunding;
  const monthlyRate = rate / 100 / 12;
  const n = 30 * 12;
  const payment = loanWithFees * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const pmi = (loanType === "conventional" && minDown < price * 0.2) ? (loan * 0.008 / 12) : 0;
  const fhaMIP = loanType === "fha" ? loan * 0.0055 / 12 : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "KHC DPA Estimator" }]} />
      <ToolLayout num="10" title="KHC Down Payment Assistance" description="Estimate your eligibility for Kentucky Housing Corporation down payment assistance programs — specific to Hardin County first-time buyers.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <SliderInput label="Household Annual Income" value={income} min={20000} max={120000} step={1000} onChange={setIncome} display={`$${income.toLocaleString()}/yr`} />
            <SliderInput label="Home Purchase Price" value={price} min={50000} max={500000} step={5000} onChange={setPrice} display={fmt(price)} />
            <SliderInput label="Credit Score" value={creditScore} min={580} max={800} step={5} onChange={setCreditScore} display={creditScore.toString()} />

            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>Loan Type</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "0.5rem" }}>
                {(["fha", "conventional", "va", "usda"] as const).map((t) => (
                  <button key={t} onClick={() => setLoanType(t)} style={{ padding: "0.6rem", border: `1px solid ${loanType === t ? "var(--blue)" : "var(--border)"}`, background: loanType === t ? "var(--border)" : "transparent", color: loanType === t ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.72rem", textTransform: "uppercase", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input type="checkbox" id="firsttime" checked={firstTime} onChange={e => setFirstTime(e.target.checked)} style={{ accentColor: "var(--blue)", width: 16, height: 16, cursor: "pointer" }} />
              <label htmlFor="firsttime" style={{ ...labelStyle, cursor: "pointer" }}>First-time homebuyer (haven't owned in 3+ years)</label>
            </div>

            <div style={{ marginTop: "1.5rem", padding: "1rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "none" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" }}>KHC Hardin County Limits</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.7 }}>
                Income limit: {fmt(hardinIncomeLimit)}<br />
                Purchase price limit: {fmt(priceLimit)}<br />
                Min credit score: 620<br />
                DPA amount: up to {fmt(dpaAmount)}
              </div>
            </div>
          </div>

          <div className="tool-results">
            <div style={{ padding: "1.5rem", background: fullyQualifies ? "var(--border)" : mayQualify ? "rgba(255,200,100,0.05)" : "rgba(255,80,80,0.05)", border: `1px solid ${fullyQualifies ? "var(--border)" : mayQualify ? "rgba(255,200,100,0.3)" : "rgba(255,80,80,0.3)"}`, marginBottom: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" }}>KHC DPA Eligibility</div>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.8rem", fontWeight: 700, color: fullyQualifies ? "var(--blue)" : mayQualify ? "#f0c060" : "#ff8080" }}>
                {fullyQualifies ? `Likely Eligible — ${fmt(dpaAmount)}` : mayQualify ? "May Qualify — Consult Lender" : "May Not Qualify"}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.4rem" }}>
                {!firstTime && "KHC Regular DPA requires first-time buyer status"}
                {firstTime && !incomeQualifies && "Income exceeds Hardin County limit"}
                {firstTime && incomeQualifies && !creditQualifies && "Credit score below 620 minimum"}
                {fullyQualifies && "Based on stated income, price, and credit score"}
              </div>
            </div>

            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>Eligibility Check</div>
            {[
              { label: "Income within limit", pass: incomeQualifies, detail: `${fmt(income)} vs ${fmt(hardinIncomeLimit)} limit` },
              { label: "Purchase price within limit", pass: priceQualifies, detail: `${fmt(price)} vs ${fmt(priceLimit)} limit` },
              { label: "Credit score qualifies", pass: creditQualifies, detail: `${creditScore} vs 620 minimum` },
              { label: "First-time buyer", pass: firstTime, detail: firstTime ? "Confirmed" : "Required for KHC Regular DPA" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.65rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{item.label}</span>
                  <div style={{ fontSize: "0.65rem", color: "var(--muted2)" }}>{item.detail}</div>
                </div>
                <span style={{ fontSize: "1rem", color: item.pass ? "var(--blue)" : "#ff8080" }}>{item.pass ? "✓" : "✗"}</span>
              </div>
            ))}

            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", margin: "1.25rem 0 0.75rem" }}>Your Estimated Payment ({loanType.toUpperCase()})</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <MiniResult label="Min Down Payment" value={fmt(minDown)} />
              <MiniResult label="Out of Pocket (after DPA)" value={fmt(fullyQualifies ? downAfterDPA : minDown)} highlight={fullyQualifies} />
              <MiniResult label="Monthly P&I" value={`$${Math.round(payment).toLocaleString()}/mo`} />
              <MiniResult label={loanType === "fha" ? "FHA MIP" : loanType === "va" ? "PMI" : "PMI"} value={loanType === "fha" ? `$${Math.round(fhaMIP)}/mo` : loanType === "va" ? "None" : loanType === "usda" ? "None" : pmi > 0 ? `$${Math.round(pmi)}/mo` : "None"} />
            </div>
            <p style={{ fontSize: "0.7rem", color: "var(--muted2)", marginTop: "1.25rem", lineHeight: 1.7 }}>
              This is an estimate only. KHC program terms change periodically. Eligibility is determined by KHC-approved lenders. Contact me and I will connect you with a lender who can give you a definitive answer.
            </p>
          </div>
        </div>
      </ToolLayout>
      <Footer />
    </>
  );
}

function SliderInput({ label, value, min, max, step, onChange, display }: any) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
        <label style={labelStyle}>{label}</label>
        <span style={{ fontSize: "0.9rem", color: "var(--blue)", fontFamily: "'Inter', system-ui, sans-serif" }}>{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--blue)", cursor: "pointer" }} />
    </div>
  );
}
function MiniResult({ label, value, highlight }: any) {
  return (
    <div style={{ padding: "0.75rem", background: highlight ? "var(--border)" : "rgba(255,255,255,0.03)", border: `1px solid ${highlight ? "var(--border)" : "var(--border)"}` }}>
      <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.2rem" }}>{label}</div>
      <div style={{ fontSize: "0.9rem", color: highlight ? "var(--blue)" : "var(--text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{value}</div>
    </div>
  );
}
const labelStyle: React.CSSProperties = { fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" };

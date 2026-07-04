"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function VALoanCalculator() {
  const [price, setPrice] = useState(280000);
  const [rate, setRate] = useState(6.75);
  const [term, setTerm] = useState(30);
  const [usage, setUsage] = useState<"first" | "subsequent">("first");
  const [exempt, setExempt] = useState(false);

  // VA funding fee: first use regular mil = 2.3%, subsequent = 3.6%, exempt = 0
  const fundingFeeRate = exempt ? 0 : usage === "first" ? 0.023 : 0.036;
  const fundingFee = price * fundingFeeRate;
  const loanAmount = price + fundingFee; // funded into loan
  const monthlyRate = rate / 100 / 12;
  const n = term * 12;
  const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const tax = (price * 0.0085) / 12;
  const insurance = (price * 0.005) / 12;
  const totalMonthly = payment + tax + insurance;
  const totalInterest = payment * n - loanAmount;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const fmtD = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "VA Loan Calculator" }]} />
      <ToolLayout num="03" title="VA Loan Calculator" description="Calculate your VA loan payment with the funding fee factored in. Zero down payment, no PMI — built for Fort Knox military families and veterans.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <SliderInput label="Home Price" value={price} min={100000} max={750000} step={5000} onChange={setPrice} display={fmt(price)} />
            <SliderInput label="Interest Rate" value={rate} min={3} max={12} step={0.1} onChange={setRate} display={`${rate.toFixed(2)}%`} />
            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>Loan Term</label>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                {[15, 20, 30].map((t) => (
                  <button key={t} onClick={() => setTerm(t)} style={{ flex: 1, padding: "0.6rem", border: `1px solid ${term === t ? "var(--blue)" : "var(--border)"}`, background: term === t ? "var(--border)" : "transparent", color: term === t ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.8rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {t}yr
                  </button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>VA Loan Usage</label>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                <button onClick={() => setUsage("first")} style={{ flex: 1, padding: "0.6rem", border: `1px solid ${usage === "first" ? "var(--blue)" : "var(--border)"}`, background: usage === "first" ? "var(--border)" : "transparent", color: usage === "first" ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.75rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                  First Use
                </button>
                <button onClick={() => setUsage("subsequent")} style={{ flex: 1, padding: "0.6rem", border: `1px solid ${usage === "subsequent" ? "var(--blue)" : "var(--border)"}`, background: usage === "subsequent" ? "var(--border)" : "transparent", color: usage === "subsequent" ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.75rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Subsequent
                </button>
              </div>
            </div>
            <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input type="checkbox" id="exempt" checked={exempt} onChange={e => setExempt(e.target.checked)} style={{ accentColor: "var(--blue)", width: 16, height: 16, cursor: "pointer" }} />
              <label htmlFor="exempt" style={{ ...labelStyle, cursor: "pointer" }}>Funding Fee Exempt (10%+ disability rating)</label>
            </div>
          </div>

          <div className="tool-results">
            <div style={{ padding: "1.75rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", textAlign: "center", marginBottom: "1rem" }}>
              <div style={resultLabel}>Monthly P&I Payment</div>
              <div style={resultBig}>{fmtD(payment)}<span style={{ fontSize: "1.2rem", color: "var(--muted)" }}>/mo</span></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <MiniResult label="Down Payment" value="$0" highlight />
              <MiniResult label="PMI" value="None" highlight />
              <MiniResult label="Est. Taxes" value={fmt(tax) + "/mo"} />
              <MiniResult label="Est. Insurance" value={fmt(insurance) + "/mo"} />
              <MiniResult label="Total Monthly" value={fmt(totalMonthly) + "/mo"} highlight />
              <MiniResult label="Funding Fee" value={exempt ? "Exempt" : fmt(fundingFee)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
              <MiniResult label="Loan Amount" value={fmt(loanAmount)} />
              <MiniResult label="Funding Fee Rate" value={exempt ? "0% (exempt)" : `${(fundingFeeRate * 100).toFixed(1)}%`} />
              <MiniResult label="Total Interest" value={fmt(totalInterest)} />
              <MiniResult label="Total Paid" value={fmt(payment * n)} />
            </div>
            <div style={{ marginTop: "1.25rem", padding: "1rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.7 }}>
                The VA funding fee is financed into the loan amount. Veterans with a service-connected disability rating of 10% or higher are exempt. Rates shown are for regular military — Reserves/National Guard rates differ slightly.
              </p>
            </div>
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
    <div style={{ padding: "0.85rem", background: highlight ? "var(--border)" : "rgba(255,255,255,0.03)", border: `1px solid ${highlight ? "var(--border)" : "var(--border)"}` }}>
      <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: highlight ? "var(--blue)" : "var(--muted2)", marginBottom: "0.25rem" }}>{label}</div>
      <div style={{ fontSize: "0.95rem", color: highlight ? "var(--blue)" : "var(--text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{value}</div>
    </div>
  );
}
const labelStyle: React.CSSProperties = { fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" };
const resultLabel: React.CSSProperties = { fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" };
const resultBig: React.CSSProperties = { fontFamily: "'Inter', system-ui, sans-serif", fontSize: "3rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 };

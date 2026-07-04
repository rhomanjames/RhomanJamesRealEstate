"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(250000);
  const [down, setDown] = useState(10);
  const [rate, setRate] = useState(7.0);
  const [term, setTerm] = useState(30);

  const downAmt = (price * down) / 100;
  const loan = price - downAmt;
  const monthlyRate = rate / 100 / 12;
  const n = term * 12;
  const payment = loan * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const totalPaid = payment * n;
  const totalInterest = totalPaid - loan;
  const tax = (price * 0.0085) / 12;
  const insurance = (price * 0.005) / 12;
  const pmi = down < 20 ? (loan * 0.008) / 12 : 0;
  const totalMonthly = payment + tax + insurance + pmi;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const fmtD = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Mortgage Calculator" }]} />
      <ToolLayout
        num="01"
        title="Mortgage Calculator"
        description="Estimate your monthly mortgage payment based on home price, down payment, interest rate, and loan term."
        backHref="/tools"
      >
        <div className="tool-grid">
          {/* Inputs */}
          <div className="tool-inputs">
            <SliderInput label="Home Price" value={price} min={50000} max={750000} step={5000} onChange={setPrice} display={fmt(price)} />
            <SliderInput label="Down Payment" value={down} min={0} max={50} step={1} onChange={setDown} display={`${down}% (${fmt(downAmt)})`} />
            <SliderInput label="Interest Rate" value={rate} min={3} max={12} step={0.1} onChange={setRate} display={`${rate.toFixed(1)}%`} />
            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>Loan Term</label>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                {[10, 15, 20, 30].map((t) => (
                  <button key={t} onClick={() => setTerm(t)} style={{
                    flex: 1, padding: "0.6rem", border: `1px solid ${term === t ? "var(--blue)" : "var(--border)"}`,
                    background: term === t ? "var(--border)" : "transparent",
                    color: term === t ? "var(--blue)" : "var(--muted)",
                    cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.1em",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}>
                    {t}yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="tool-results">
            <div style={resultCard}>
              <div style={resultLabel}>Principal & Interest</div>
              <div style={resultBig}>{fmtD(payment)}<span style={resultSub}>/mo</span></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
              <MiniResult label="Est. Taxes" value={fmt(tax) + "/mo"} />
              <MiniResult label="Est. Insurance" value={fmt(insurance) + "/mo"} />
              {pmi > 0 && <MiniResult label="PMI" value={fmt(pmi) + "/mo"} note="removed at 20% equity" />}
              <MiniResult label="Total Monthly" value={fmt(totalMonthly) + "/mo"} highlight />
            </div>
            <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <MiniResult label="Loan Amount" value={fmt(loan)} />
              <MiniResult label="Down Payment" value={fmt(downAmt)} />
              <MiniResult label="Total Interest" value={fmt(totalInterest)} />
              <MiniResult label="Total Paid" value={fmt(totalPaid)} />
            </div>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)", marginTop: "1.25rem", lineHeight: 1.6 }}>
              Estimates only. Taxes and insurance vary by property and location. PMI estimated at 0.8% annually for loans with less than 20% down.
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
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={sliderStyle} />
    </div>
  );
}
function MiniResult({ label, value, note, highlight }: any) {
  return (
    <div style={{ padding: "0.85rem", background: highlight ? "var(--border)" : "rgba(255,255,255,0.03)", border: `1px solid ${highlight ? "var(--border)" : "var(--border)"}` }}>
      <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: highlight ? "var(--blue)" : "var(--muted2)", marginBottom: "0.25rem" }}>{label}</div>
      <div style={{ fontSize: "0.95rem", color: highlight ? "var(--blue)" : "var(--text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{value}</div>
      {note && <div style={{ fontSize: "0.62rem", color: "var(--muted2)", marginTop: "0.2rem" }}>{note}</div>}
    </div>
  );
}
const labelStyle: React.CSSProperties = { fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" };
const sliderStyle: React.CSSProperties = { width: "100%", accentColor: "var(--blue)", cursor: "pointer" };
const resultCard: React.CSSProperties = { padding: "2rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", textAlign: "center" };
const resultLabel: React.CSSProperties = { fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" };
const resultBig: React.CSSProperties = { fontFamily: "'Inter', system-ui, sans-serif", fontSize: "3.5rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 };
const resultSub: React.CSSProperties = { fontSize: "1.2rem", color: "var(--muted)" };

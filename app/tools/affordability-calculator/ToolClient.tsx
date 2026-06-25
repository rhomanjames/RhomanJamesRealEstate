"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function AffordabilityCalculator() {
  const [income, setIncome] = useState(75000);
  const [debts, setDebts] = useState(500);
  const [down, setDown] = useState(20000);
  const [rate, setRate] = useState(7.0);
  const [term, setTerm] = useState(30);

  const monthlyIncome = income / 12;
  // Max 43% DTI (FHA standard), 28% front-end
  const maxFrontEnd = monthlyIncome * 0.28;
  const maxBackEnd = monthlyIncome * 0.43 - debts;
  const maxPayment = Math.min(maxFrontEnd, maxBackEnd);

  // Back-calculate max loan from max payment
  const monthlyRate = rate / 100 / 12;
  const n = term * 12;
  const maxLoan = maxPayment / ((monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1));
  const maxPrice = maxLoan + down;
  const conservativePrice = maxPrice * 0.85;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Affordability Calculator" }]} />
      <ToolLayout num="02" title="Home Affordability Calculator" description="Find out how much home you can afford based on your income, debts, down payment, and current interest rates.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <SliderInput label="Annual Gross Income" value={income} min={30000} max={300000} step={5000} onChange={setIncome} display={fmt(income) + "/yr"} />
            <SliderInput label="Monthly Debt Payments" value={debts} min={0} max={3000} step={50} onChange={setDebts} display={fmt(debts) + "/mo"} note="Car payments, student loans, credit cards" />
            <SliderInput label="Down Payment Saved" value={down} min={0} max={150000} step={1000} onChange={setDown} display={fmt(down)} />
            <SliderInput label="Interest Rate" value={rate} min={3} max={12} step={0.1} onChange={setRate} display={`${rate.toFixed(1)}%`} />
            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>Loan Term</label>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                {[15, 20, 30].map((t) => (
                  <button key={t} onClick={() => setTerm(t)} style={{ flex: 1, padding: "0.6rem", border: `1px solid ${term === t ? "var(--gold)" : "rgba(184,151,106,0.2)"}`, background: term === t ? "rgba(184,151,106,0.12)" : "transparent", color: term === t ? "var(--gold)" : "var(--muted)", cursor: "pointer", fontSize: "0.8rem", fontFamily: "'Jost', system-ui, sans-serif" }}>
                    {t}yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="tool-results">
            <div style={{ padding: "1.75rem", background: "rgba(184,151,106,0.06)", border: "1px solid rgba(184,151,106,0.25)", textAlign: "center", marginBottom: "1rem" }}>
              <div style={resultLabel}>Maximum Home Price</div>
              <div style={resultBig}>{fmt(maxPrice)}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.4rem" }}>based on 43% DTI guideline</div>
            </div>
            <div style={{ padding: "1.75rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(184,151,106,0.12)", textAlign: "center", marginBottom: "1rem" }}>
              <div style={resultLabel}>Conservative Target</div>
              <div style={{ ...resultBig, fontSize: "2.2rem" }}>{fmt(conservativePrice)}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.4rem" }}>comfortable budget with breathing room</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <MiniResult label="Max Mo. Payment" value={fmt(maxPayment) + "/mo"} />
              <MiniResult label="Down Payment" value={fmt(down)} />
              <MiniResult label="Max Loan Amount" value={fmt(maxLoan)} />
              <MiniResult label="Monthly Income" value={fmt(monthlyIncome) + "/mo"} />
            </div>
            <div style={{ marginTop: "1.25rem", padding: "1rem", background: "rgba(184,151,106,0.05)", border: "1px solid rgba(184,151,106,0.15)" }}>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--off-white)" }}>Note:</strong> This uses standard 28/43 DTI ratios. FHA loans allow up to 50% DTI in some cases. VA loans have flexible DTI limits. Your actual approval depends on credit score, loan type, and lender guidelines.
              </p>
            </div>
          </div>
        </div>
      </ToolLayout>
      <Footer />
    </>
  );
}

function SliderInput({ label, value, min, max, step, onChange, display, note }: any) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
        <label style={labelStyle}>{label}</label>
        <span style={{ fontSize: "0.9rem", color: "var(--gold)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{display}</span>
      </div>
      {note && <div style={{ fontSize: "0.65rem", color: "var(--muted2)", marginBottom: "0.4rem" }}>{note}</div>}
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)", cursor: "pointer" }} />
    </div>
  );
}
function MiniResult({ label, value }: any) {
  return (
    <div style={{ padding: "0.85rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(184,151,106,0.1)" }}>
      <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.25rem" }}>{label}</div>
      <div style={{ fontSize: "0.95rem", color: "white", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{value}</div>
    </div>
  );
}
const labelStyle: React.CSSProperties = { fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" };
const resultLabel: React.CSSProperties = { fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" };
const resultBig: React.CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, color: "white", lineHeight: 1 };

"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function DownPaymentPlanner() {
  const [homePrice, setHomePrice] = useState(250000);
  const [saved, setSaved] = useState(10000);
  const [monthlySavings, setMonthlySavings] = useState(800);
  const [returns, setReturns] = useState(4.5);

  const targets = [
    { label: "3% Down (Conventional)", pct: 3 },
    { label: "3.5% Down (FHA)", pct: 3.5 },
    { label: "5% Down (Conventional)", pct: 5 },
    { label: "10% Down", pct: 10 },
    { label: "20% Down (No PMI)", pct: 20 },
  ];

  const monthsToGoal = (targetAmt: number) => {
    if (saved >= targetAmt) return 0;
    const needed = targetAmt - saved;
    if (monthlySavings <= 0) return Infinity;
    const monthlyReturn = returns / 100 / 12;
    if (monthlyReturn === 0) return Math.ceil(needed / monthlySavings);
    const m = Math.log(1 + (needed * monthlyReturn) / monthlySavings) / Math.log(1 + monthlyReturn);
    return Math.ceil(m);
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Down Payment Planner" }]} />
      <ToolLayout num="07" title="Down Payment Savings Planner" description="Find out how long it will take to save for a down payment in Elizabethtown, KY — and which loan programs can help you buy sooner.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <SliderInput label="Target Home Price" value={homePrice} min={100000} max={600000} step={5000} onChange={setHomePrice} display={fmt(homePrice)} />
            <SliderInput label="Current Savings" value={saved} min={0} max={100000} step={500} onChange={setSaved} display={fmt(saved)} />
            <SliderInput label="Monthly Savings Contribution" value={monthlySavings} min={100} max={5000} step={50} onChange={setMonthlySavings} display={fmt(monthlySavings) + "/mo"} />
            <SliderInput label="Annual Return on Savings" value={returns} min={0} max={8} step={0.25} onChange={setReturns} display={`${returns.toFixed(2)}%`} note="HYSA, money market, or CD rate" />

            <div style={{ marginTop: "2rem", padding: "1rem", background: "rgba(184,151,106,0.05)", border: "1px solid rgba(184,151,106,0.15)" }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Zero Down Options</div>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--off-white)" }}>VA Loan:</strong> Zero down for eligible veterans and active military near Fort Knox.<br />
                <strong style={{ color: "var(--off-white)" }}>USDA Loan:</strong> Zero down for eligible rural properties in Hardin County.<br />
                <strong style={{ color: "var(--off-white)" }}>KHC Assistance:</strong> Up to $10,000 in down payment assistance for qualifying KY buyers.
              </p>
            </div>
          </div>

          <div className="tool-results">
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Time to Reach Each Target</div>
            {targets.map((t) => {
              const targetAmt = homePrice * t.pct / 100;
              const months = monthsToGoal(targetAmt);
              const years = Math.floor(months / 12);
              const remMonths = months % 12;
              const reached = months === 0;
              const timeStr = reached ? "Ready now!" : months === Infinity ? "Set a savings amount" : years > 0 ? `${years}yr ${remMonths}mo` : `${months}mo`;

              return (
                <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", marginBottom: "0.75rem", background: reached ? "rgba(184,151,106,0.08)" : "rgba(255,255,255,0.02)", border: `1px solid ${reached ? "rgba(184,151,106,0.3)" : "rgba(184,151,106,0.1)"}` }}>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: reached ? "var(--gold)" : "var(--off-white)", marginBottom: "0.2rem" }}>{t.label}</div>
                    <div style={{ fontSize: "1.1rem", fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--muted)" }}>{fmt(targetAmt)}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.1rem", fontFamily: "'Cormorant Garamond', Georgia, serif", color: reached ? "var(--gold)" : "white" }}>{timeStr}</div>
                    {!reached && months !== Infinity && (
                      <div style={{ fontSize: "0.65rem", color: "var(--muted2)", marginTop: "0.15rem" }}>
                        {fmt(targetAmt - saved)} to go
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(184,151,106,0.1)" }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.5rem" }}>Your Savings Summary</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                <div><div style={{ fontSize: "0.65rem", color: "var(--muted2)" }}>Currently saved</div><div style={{ fontSize: "0.95rem", color: "white", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{fmt(saved)}</div></div>
                <div><div style={{ fontSize: "0.65rem", color: "var(--muted2)" }}>Saving per year</div><div style={{ fontSize: "0.95rem", color: "white", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{fmt(monthlySavings * 12)}</div></div>
              </div>
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
        <label style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>{label}</label>
        <span style={{ fontSize: "0.85rem", color: "var(--gold)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{display}</span>
      </div>
      {note && <div style={{ fontSize: "0.65rem", color: "var(--muted2)", marginBottom: "0.3rem" }}>{note}</div>}
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)", cursor: "pointer" }} />
    </div>
  );
}

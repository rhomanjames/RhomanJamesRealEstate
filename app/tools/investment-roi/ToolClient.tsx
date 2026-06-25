"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function InvestmentROICalculator() {
  const [price, setPrice] = useState(220000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(7.5);
  const [rent, setRent] = useState(1650);
  const [vacancy, setVacancy] = useState(7);
  const [mgmt, setMgmt] = useState(10);
  const [maintenance, setMaintenance] = useState(1);
  const [insurance, setInsurance] = useState(1200);
  const [taxes, setTaxes] = useState(2200);
  const [appreciation, setAppreciation] = useState(3.5);
  const [holdYears, setHoldYears] = useState(5);

  const down = price * downPct / 100;
  const loan = price - down;
  const monthlyRate = rate / 100 / 12;
  const n = 30 * 12;
  const mortgage = loan > 0 ? loan * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1) : 0;

  const grossRentAnnual = rent * 12;
  const effectiveRent = grossRentAnnual * (1 - vacancy / 100);
  const mgmtFee = effectiveRent * mgmt / 100;
  const maintenanceCost = price * maintenance / 100;
  const totalExpenses = mortgage * 12 + insurance + taxes + mgmtFee + maintenanceCost;
  const noi = effectiveRent - (insurance + taxes + mgmtFee + maintenanceCost);
  const cashFlow = effectiveRent - totalExpenses;
  const capRate = (noi / price) * 100;
  const cashOnCash = down > 0 ? (cashFlow / (down + price * 0.03)) * 100 : 0; // include ~3% closing costs
  const grossYield = (grossRentAnnual / price) * 100;

  // Future value after hold period
  const futureValue = price * Math.pow(1 + appreciation / 100, holdYears);
  const appreciation$ = futureValue - price;

  // Principal paid down
  let balance = loan;
  let principalPaid = 0;
  for (let m = 0; m < holdYears * 12; m++) {
    const interest = balance * monthlyRate;
    const principal = mortgage - interest;
    principalPaid += principal;
    balance -= principal;
  }
  const totalReturn = (cashFlow * 12 * holdYears) + appreciation$ + principalPaid;
  const totalInvested = down + price * 0.03;
  const totalROI = totalInvested > 0 ? (totalReturn / totalInvested) * 100 : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const fmtPct = (n: number) => n.toFixed(2) + "%";

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Investment ROI" }]} />
      <ToolLayout num="08" title="Investment Property ROI Calculator" description="Analyze the real return on a Hardin County rental property — cash flow, cap rate, cash-on-cash return, and total ROI over your hold period.">
        <div className="tool-grid">
          <div className="tool-inputs" style={{ overflowY: "auto", maxHeight: "none" }}>
            <div style={sectionLabel}>Purchase</div>
            <SliderInput label="Purchase Price" value={price} min={50000} max={600000} step={5000} onChange={setPrice} display={fmt(price)} />
            <SliderInput label="Down Payment" value={downPct} min={0} max={40} step={5} onChange={setDownPct} display={`${downPct}% (${fmt(down)})`} />
            <SliderInput label="Interest Rate" value={rate} min={4} max={12} step={0.25} onChange={setRate} display={`${rate.toFixed(2)}%`} />

            <div style={sectionLabel}>Income & Expenses</div>
            <SliderInput label="Monthly Rent" value={rent} min={500} max={4000} step={50} onChange={setRent} display={`${fmt(rent)}/mo`} />
            <SliderInput label="Vacancy Rate" value={vacancy} min={0} max={20} step={1} onChange={setVacancy} display={`${vacancy}%`} />
            <SliderInput label="Property Management" value={mgmt} min={0} max={15} step={1} onChange={setMgmt} display={`${mgmt}% of rent`} />
            <SliderInput label="Annual Maintenance" value={maintenance} min={0} max={3} step={0.25} onChange={setMaintenance} display={`${maintenance}% of value`} />
            <SliderInput label="Annual Insurance" value={insurance} min={500} max={5000} step={100} onChange={setInsurance} display={fmt(insurance) + "/yr"} />
            <SliderInput label="Annual Property Tax" value={taxes} min={500} max={10000} step={100} onChange={setTaxes} display={fmt(taxes) + "/yr"} />

            <div style={sectionLabel}>Hold Period</div>
            <SliderInput label="Annual Appreciation" value={appreciation} min={0} max={8} step={0.5} onChange={setAppreciation} display={`${appreciation}%/yr`} />
            <SliderInput label="Hold Period" value={holdYears} min={1} max={20} step={1} onChange={setHoldYears} display={`${holdYears} years`} />
          </div>

          <div className="tool-results">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <MetricCard label="Monthly Cash Flow" value={fmt(cashFlow) + "/mo"} highlight={cashFlow > 0} good={cashFlow > 0} />
              <MetricCard label="Cap Rate" value={fmtPct(capRate)} highlight />
              <MetricCard label="Cash-on-Cash Return" value={fmtPct(cashOnCash)} highlight={cashOnCash > 6} />
              <MetricCard label="Gross Yield" value={fmtPct(grossYield)} />
            </div>

            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", margin: "1.25rem 0 0.75rem" }}>{holdYears}-Year Total Return</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
              <MiniResult label="Cash Flow Total" value={fmt(cashFlow * 12 * holdYears)} />
              <MiniResult label="Appreciation" value={fmt(appreciation$)} />
              <MiniResult label="Principal Paydown" value={fmt(principalPaid)} />
              <MiniResult label="Total Return" value={fmt(totalReturn)} highlight />
            </div>
            <div style={{ padding: "1.25rem", background: "rgba(184,151,106,0.06)", border: "1px solid rgba(184,151,106,0.25)", textAlign: "center" }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>Total ROI on Investment</div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "white" }}>{fmtPct(totalROI)}</div>
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.3rem" }}>on {fmt(totalInvested)} invested over {holdYears}yr</div>
            </div>
            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", margin: "1.25rem 0 0.75rem" }}>Annual Income Statement</div>
            {[
              { label: "Gross Rental Income", value: fmt(grossRentAnnual) },
              { label: `Vacancy (${vacancy}%)`, value: `-${fmt(grossRentAnnual * vacancy / 100)}` },
              { label: "Property Management", value: `-${fmt(mgmtFee)}` },
              { label: "Maintenance", value: `-${fmt(maintenanceCost)}` },
              { label: "Insurance", value: `-${fmt(insurance)}` },
              { label: "Property Tax", value: `-${fmt(taxes)}` },
              { label: "Net Operating Income", value: fmt(noi), bold: true },
              { label: "Mortgage (P&I)", value: `-${fmt(mortgage * 12)}` },
              { label: "Annual Cash Flow", value: fmt(cashFlow * 12), bold: true, color: cashFlow > 0 ? "var(--gold)" : "#ff8080" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(184,151,106,0.08)" }}>
                <span style={{ fontSize: "0.8rem", color: item.bold ? "var(--off-white)" : "var(--muted)", fontWeight: item.bold ? 500 : 300 }}>{item.label}</span>
                <span style={{ fontSize: "0.85rem", fontFamily: "'Cormorant Garamond', Georgia, serif", color: item.color || (item.bold ? "var(--off-white)" : "var(--off-white)") }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ToolLayout>
      <Footer />
    </>
  );
}

function SliderInput({ label, value, min, max, step, onChange, display }: any) {
  return (
    <div style={{ marginTop: "1.1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem" }}>
        <label style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted2)" }}>{label}</label>
        <span style={{ fontSize: "0.82rem", color: "var(--gold)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)", cursor: "pointer" }} />
    </div>
  );
}
function MetricCard({ label, value, highlight, good }: any) {
  return (
    <div style={{ padding: "1rem", background: highlight ? "rgba(184,151,106,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${highlight ? "rgba(184,151,106,0.3)" : "rgba(184,151,106,0.1)"}`, textAlign: "center" }}>
      <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.4rem" }}>{label}</div>
      <div style={{ fontSize: "1.3rem", fontFamily: "'Cormorant Garamond', Georgia, serif", color: good === false ? "#ff8080" : highlight ? "var(--gold)" : "white" }}>{value}</div>
    </div>
  );
}
function MiniResult({ label, value, highlight }: any) {
  return (
    <div style={{ padding: "0.75rem", background: highlight ? "rgba(184,151,106,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${highlight ? "rgba(184,151,106,0.3)" : "rgba(184,151,106,0.1)"}` }}>
      <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.2rem" }}>{label}</div>
      <div style={{ fontSize: "0.9rem", color: highlight ? "var(--gold)" : "white", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{value}</div>
    </div>
  );
}
const sectionLabel: React.CSSProperties = { fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginTop: "1.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(184,151,106,0.15)" };

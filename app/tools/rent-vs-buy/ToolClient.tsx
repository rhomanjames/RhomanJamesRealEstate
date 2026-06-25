"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function RentVsBuyCalculator() {
  const [rent, setRent] = useState(1400);
  const [rentIncrease, setRentIncrease] = useState(3);
  const [homePrice, setHomePrice] = useState(280000);
  const [downPct, setDownPct] = useState(5);
  const [rate, setRate] = useState(7.0);
  const [appreciation, setAppreciation] = useState(3.5);
  const [years, setYears] = useState(5);

  const down = homePrice * downPct / 100;
  const loan = homePrice - down;
  const monthlyRate = rate / 100 / 12;
  const n = 30 * 12;
  const payment = loan * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const tax = (homePrice * 0.0085) / 12;
  const insurance = (homePrice * 0.005) / 12;
  const maintenance = (homePrice * 0.01) / 12;
  const totalMonthlyOwn = payment + tax + insurance + maintenance;

  // Rent total over years with annual increases
  let totalRent = 0;
  let currentRent = rent;
  for (let y = 0; y < years; y++) {
    totalRent += currentRent * 12;
    currentRent *= (1 + rentIncrease / 100);
  }

  // Buy: total paid - equity gained
  const totalPaid = totalMonthlyOwn * years * 12 + down;
  const homeValueFuture = homePrice * Math.pow(1 + appreciation / 100, years);
  const equityGained = homeValueFuture - homePrice; // appreciation
  // Principal paid down over years
  let balance = loan;
  let principalPaid = 0;
  for (let m = 0; m < years * 12; m++) {
    const interest = balance * monthlyRate;
    const principal = payment - interest;
    principalPaid += principal;
    balance -= principal;
  }
  const netCostBuy = totalPaid - equityGained - principalPaid;
  const netCostRent = totalRent;
  const savings = netCostRent - netCostBuy;
  const breakEven = savings > 0 ? "Buying wins" : "Renting wins";

  const fmt = (n: number) => Math.abs(n).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Rent vs. Buy" }]} />
      <ToolLayout num="04" title="Rent vs. Buy Calculator" description="See exactly when buying becomes cheaper than renting in Elizabethtown, KY — based on your real numbers.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", borderBottom: "1px solid rgba(184,151,106,0.15)", paddingBottom: "0.5rem" }}>Renting</div>
            <SliderInput label="Current Monthly Rent" value={rent} min={500} max={4000} step={50} onChange={setRent} display={`$${rent.toLocaleString()}/mo`} />
            <SliderInput label="Annual Rent Increase" value={rentIncrease} min={0} max={10} step={0.5} onChange={setRentIncrease} display={`${rentIncrease}%/yr`} />
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", margin: "1.75rem 0 1rem", borderBottom: "1px solid rgba(184,151,106,0.15)", paddingBottom: "0.5rem" }}>Buying</div>
            <SliderInput label="Home Price" value={homePrice} min={100000} max={700000} step={5000} onChange={setHomePrice} display={`$${homePrice.toLocaleString()}`} />
            <SliderInput label="Down Payment" value={downPct} min={0} max={30} step={1} onChange={setDownPct} display={`${downPct}% ($${Math.round(down).toLocaleString()})`} />
            <SliderInput label="Interest Rate" value={rate} min={3} max={12} step={0.1} onChange={setRate} display={`${rate.toFixed(1)}%`} />
            <SliderInput label="Annual Appreciation" value={appreciation} min={0} max={8} step={0.5} onChange={setAppreciation} display={`${appreciation}%/yr`} />
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", margin: "1.75rem 0 1rem", borderBottom: "1px solid rgba(184,151,106,0.15)", paddingBottom: "0.5rem" }}>Timeline</div>
            <SliderInput label="Years to Compare" value={years} min={1} max={15} step={1} onChange={setYears} display={`${years} year${years !== 1 ? "s" : ""}`} />
          </div>

          <div className="tool-results">
            <div style={{ padding: "1.75rem", background: savings > 0 ? "rgba(184,151,106,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${savings > 0 ? "rgba(184,151,106,0.35)" : "rgba(184,151,106,0.15)"}`, textAlign: "center", marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Over {years} Year{years !== 1 ? "s" : ""}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.2rem", fontWeight: 300, color: "white", lineHeight: 1.1 }}>{breakEven}</div>
              {savings > 0 && <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.5rem" }}>by <span style={{ color: "var(--gold)" }}>{fmt(savings)}</span> net</div>}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(184,151,106,0.12)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.75rem" }}>Renting {years}yr total</div>
                <div style={{ fontSize: "1.6rem", fontFamily: "'Cormorant Garamond', Georgia, serif", color: "white", marginBottom: "0.5rem" }}>{fmt(totalRent)}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.6 }}>Equity at end: $0</div>
              </div>
              <div style={{ padding: "1.25rem", background: "rgba(184,151,106,0.04)", border: "1px solid rgba(184,151,106,0.2)" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.75rem" }}>Buying {years}yr net cost</div>
                <div style={{ fontSize: "1.6rem", fontFamily: "'Cormorant Garamond', Georgia, serif", color: "white", marginBottom: "0.5rem" }}>{fmt(netCostBuy)}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.6 }}>After appreciation & equity</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
              <MiniResult label="Monthly (own)" value={`$${Math.round(totalMonthlyOwn).toLocaleString()}/mo`} />
              <MiniResult label="Monthly (rent)" value={`$${rent.toLocaleString()}/mo`} />
              <MiniResult label="Equity Built" value={fmt(principalPaid + equityGained)} />
              <MiniResult label="Home Value in {years}yr" value={fmt(homeValueFuture)} />
            </div>
            <p style={{ fontSize: "0.7rem", color: "var(--muted2)", marginTop: "1.25rem", lineHeight: 1.6 }}>
              Net cost of buying includes principal, interest, taxes, insurance, and maintenance minus equity gained through appreciation and principal paydown.
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
    <div style={{ marginTop: "1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.4rem" }}>
        <label style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>{label}</label>
        <span style={{ fontSize: "0.85rem", color: "var(--gold)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{display}</span>
      </div>
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

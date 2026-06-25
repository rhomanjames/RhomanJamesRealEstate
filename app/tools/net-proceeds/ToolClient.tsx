"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function NetProceedsCalculator() {
  const [salePrice, setSalePrice] = useState(300000);
  const [mortgage, setMortgage] = useState(180000);
  const [commissionPct, setCommissionPct] = useState(5.5);
  const [repairs, setRepairs] = useState(2000);
  const [concessions, setConcessions] = useState(0);
  const [otherCosts, setOtherCosts] = useState(0);

  const commission = salePrice * commissionPct / 100;
  const deedTax = salePrice * 0.001;
  const deedPrep = 200;
  const proRatedTax = (salePrice * 0.0085 / 12) * 3;
  const titleFee = salePrice * 0.003;
  const attorney = 500;
  const totalCosts = commission + deedTax + deedPrep + proRatedTax + titleFee + attorney + repairs + concessions + otherCosts;
  const grossProceeds = salePrice - mortgage;
  const netProceeds = salePrice - mortgage - totalCosts;
  const effectiveRate = (totalCosts / salePrice) * 100;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Net Proceeds" }]} />
      <ToolLayout num="06" title="Home Sale Net Proceeds" description="Find out exactly how much money you walk away with after selling your home — mortgage payoff, commissions, taxes, and all closing costs included.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <SliderInput label="Expected Sale Price" value={salePrice} min={50000} max={800000} step={5000} onChange={setSalePrice} display={fmt(salePrice)} />
            <SliderInput label="Remaining Mortgage Balance" value={mortgage} min={0} max={700000} step={5000} onChange={setMortgage} display={fmt(mortgage)} />
            <SliderInput label="Commission Rate" value={commissionPct} min={1} max={7} step={0.25} onChange={setCommissionPct} display={`${commissionPct.toFixed(2)}% (${fmt(salePrice * commissionPct / 100)})`} />
            <SliderInput label="Pre-Sale Repairs / Staging" value={repairs} min={0} max={30000} step={500} onChange={setRepairs} display={fmt(repairs)} />
            <SliderInput label="Buyer Concessions" value={concessions} min={0} max={20000} step={500} onChange={setConcessions} display={fmt(concessions)} />
            <SliderInput label="Other Costs" value={otherCosts} min={0} max={20000} step={250} onChange={setOtherCosts} display={fmt(otherCosts)} />
          </div>

          <div className="tool-results">
            <div style={{ padding: "1.75rem", background: netProceeds > 0 ? "rgba(184,151,106,0.08)" : "rgba(255,80,80,0.08)", border: `1px solid ${netProceeds > 0 ? "rgba(184,151,106,0.3)" : "rgba(255,80,80,0.3)"}`, textAlign: "center", marginBottom: "1rem" }}>
              <div style={resultLabel}>Net Proceeds to You</div>
              <div style={{ ...resultBig, color: netProceeds > 0 ? "white" : "#ff8080" }}>{fmt(netProceeds)}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.4rem" }}>after payoff and all costs</div>
            </div>

            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>Full Breakdown</div>

            {[
              { label: "Sale Price", value: salePrice, positive: true },
              { label: "Mortgage Payoff", value: -mortgage },
              { label: "Commission", value: -commission },
              { label: "KY Deed Transfer Tax", value: -deedTax },
              { label: "Deed Preparation", value: -deedPrep },
              { label: "Pro-Rated Property Tax", value: -proRatedTax },
              { label: "Title / Attorney Fees", value: -(titleFee + attorney) },
              { label: "Repairs / Staging", value: -repairs },
              { label: "Buyer Concessions", value: -concessions },
              ...(otherCosts > 0 ? [{ label: "Other Costs", value: -otherCosts }] : []),
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.6rem 0", borderBottom: "1px solid rgba(184,151,106,0.08)" }}>
                <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{item.label}</span>
                <span style={{ fontSize: "0.85rem", color: item.positive ? "var(--gold)" : "var(--off-white)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {item.positive ? "+" : "-"}{fmt(Math.abs(item.value))}
                </span>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", padding: "0.85rem 0", borderTop: "2px solid rgba(184,151,106,0.3)", marginTop: "0.25rem" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Net Proceeds</span>
              <span style={{ fontSize: "1.2rem", color: netProceeds > 0 ? "var(--gold)" : "#ff8080", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{fmt(netProceeds)}</span>
            </div>
            <div style={{ marginTop: "0.75rem", fontSize: "0.72rem", color: "var(--muted2)", lineHeight: 1.6 }}>
              Total selling costs: {fmt(totalCosts)} ({effectiveRate.toFixed(1)}% of sale price)
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
        <label style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>{label}</label>
        <span style={{ fontSize: "0.85rem", color: "var(--gold)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)", cursor: "pointer" }} />
    </div>
  );
}
const resultLabel: React.CSSProperties = { fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" };
const resultBig: React.CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, lineHeight: 1 };

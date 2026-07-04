"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

const counties = [
  { name: "Hardin County", rate: 0.00874, cities: [{ name: "Elizabethtown", cityRate: 0.00156 }, { name: "Radcliff", cityRate: 0.00142 }, { name: "Vine Grove", cityRate: 0.00098 }, { name: "Unincorporated / Rineyville", cityRate: 0 }] },
  { name: "LaRue County", rate: 0.0072, cities: [{ name: "Hodgenville", cityRate: 0.0011 }, { name: "Unincorporated", cityRate: 0 }] },
  { name: "Meade County", rate: 0.0068, cities: [{ name: "Brandenburg", cityRate: 0.00135 }, { name: "Unincorporated", cityRate: 0 }] },
];

export default function PropertyTaxEstimator() {
  const [assessedValue, setAssessedValue] = useState(260000);
  const [countyIdx, setCountyIdx] = useState(0);
  const [cityIdx, setCityIdx] = useState(0);
  const [homestead, setHomestead] = useState(false);

  const county = counties[countyIdx];
  const city = county.cities[cityIdx];
  const homesteadExemption = homestead ? 46350 : 0; // KY 2024 homestead exemption
  const taxableValue = Math.max(0, assessedValue - homesteadExemption);
  const stateRate = 0.00122; // KY state rate
  const countyTax = taxableValue * county.rate;
  const cityTax = taxableValue * city.cityRate;
  const stateTax = taxableValue * stateRate;
  const schoolRate = 0.00556; // Hardin County school rate approx
  const schoolTax = taxableValue * schoolRate;
  const totalAnnual = countyTax + cityTax + stateTax + schoolTax;
  const monthly = totalAnnual / 12;
  const effectiveRate = assessedValue > 0 ? (totalAnnual / assessedValue) * 100 : 0;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const fmtD = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Property Tax Estimator" }]} />
      <ToolLayout num="09" title="Property Tax Estimator" description="Estimate annual and monthly property taxes for homes in Hardin, LaRue, and Meade counties — with Kentucky homestead exemption included.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <SliderInput label="Assessed / Market Value" value={assessedValue} min={50000} max={700000} step={5000} onChange={setAssessedValue} display={fmt(assessedValue)} />

            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>County</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                {counties.map((c, i) => (
                  <button key={c.name} onClick={() => { setCountyIdx(i); setCityIdx(0); }} style={{ padding: "0.65rem 1rem", textAlign: "left", border: `1px solid ${countyIdx === i ? "var(--blue)" : "var(--border)"}`, background: countyIdx === i ? "var(--border)" : "transparent", color: countyIdx === i ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.78rem", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "space-between" }}>
                    <span>{c.name}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>{(c.rate * 100).toFixed(3)}% county rate</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <label style={labelStyle}>City / Area</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                {county.cities.map((c, i) => (
                  <button key={c.name} onClick={() => setCityIdx(i)} style={{ padding: "0.6rem 1rem", textAlign: "left", border: `1px solid ${cityIdx === i ? "var(--blue)" : "var(--border)"}`, background: cityIdx === i ? "var(--border)" : "transparent", color: cityIdx === i ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.78rem", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "space-between" }}>
                    <span>{c.name}</span>
                    <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>{c.cityRate > 0 ? `+${(c.cityRate * 100).toFixed(3)}%` : "no city tax"}</span>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input type="checkbox" id="homestead" checked={homestead} onChange={e => setHomestead(e.target.checked)} style={{ accentColor: "var(--blue)", width: 16, height: 16, cursor: "pointer" }} />
              <label htmlFor="homestead" style={{ ...labelStyle, cursor: "pointer" }}>Kentucky Homestead Exemption ({fmt(46350)} off assessed value)</label>
            </div>
          </div>

          <div className="tool-results">
            <div style={{ padding: "1.75rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", textAlign: "center", marginBottom: "1.25rem" }}>
              <div style={resultLabel}>Estimated Annual Tax</div>
              <div style={resultBig}>{fmt(totalAnnual)}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.4rem" }}>{fmtD(monthly)}/month · {effectiveRate.toFixed(2)}% effective rate</div>
            </div>

            <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>Tax Breakdown</div>
            {[
              { label: `${county.name} Tax`, rate: county.rate, amt: countyTax },
              { label: "School District Tax", rate: schoolRate, amt: schoolTax },
              { label: "Kentucky State Tax", rate: stateRate, amt: stateTax },
              ...(city.cityRate > 0 ? [{ label: `${city.name} City Tax`, rate: city.cityRate, amt: cityTax }] : []),
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.65rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{item.label}</span>
                  <span style={{ fontSize: "0.65rem", color: "var(--muted2)", marginLeft: "0.5rem" }}>{(item.rate * 100).toFixed(3)}%</span>
                </div>
                <span style={{ fontSize: "0.9rem", color: "var(--text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{fmt(item.amt)}/yr</span>
              </div>
            ))}

            {homestead && (
              <div style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", fontSize: "0.75rem", color: "var(--muted)" }}>
                Homestead exemption applied: {fmt(homesteadExemption)} reduction in taxable value. Taxable value: {fmt(taxableValue)}.
              </div>
            )}

            <p style={{ fontSize: "0.7rem", color: "var(--muted2)", marginTop: "1.25rem", lineHeight: 1.6 }}>
              Rates are approximate and based on current publicly available millage rates. Actual tax bills may vary. Kentucky property is assessed at 100% of fair market value. School district rates vary within counties.
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
const labelStyle: React.CSSProperties = { fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" };
const resultLabel: React.CSSProperties = { fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" };
const resultBig: React.CSSProperties = { fontFamily: "'Inter', system-ui, sans-serif", fontSize: "3rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 };

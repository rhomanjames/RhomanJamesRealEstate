"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import Breadcrumb from "@/components/Breadcrumb";

export default function ClosingCostEstimator() {
  const [price, setPrice] = useState(260000);
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [loanType, setLoanType] = useState<"conventional" | "fha" | "va" | "cash">("conventional");
  const [downPct, setDownPct] = useState(5);

  const down = price * downPct / 100;
  const loan = price - down;

  // Buyer costs
  const origination = loan * 0.01;
  const appraisal = 600;
  const titleSearch = 250;
  const titleInsurance = price * 0.005;
  const attorney = 600;
  const recording = 120;
  const prepaidInterest = (loan * 0.07 / 365) * 15;
  const prepaidInsurance = (price * 0.005);
  const escrowSetup = (price * 0.0085 / 12) * 2 + (price * 0.005 / 12) * 2;
  const vaFundingFee = loanType === "va" ? loan * 0.023 : 0;
  const fhaUpfront = loanType === "fha" ? loan * 0.0175 : 0;
  const survey = 450;
  const inspection = 425;
  const totalBuyer = origination + appraisal + titleSearch + titleInsurance + attorney + recording + prepaidInterest + prepaidInsurance + escrowSetup + vaFundingFee + fhaUpfront + survey + inspection;

  // Seller costs
  const commission = price * 0.055;
  const deedTransfer = price * 0.001;
  const deedPrep = 200;
  const proRatedTax = (price * 0.0085 / 12) * 3;
  const titleInsuranceSeller = price * 0.003;
  const repairCredit = 0;
  const totalSeller = commission + deedTransfer + deedPrep + proRatedTax + titleInsuranceSeller;
  const netProceeds = price - totalSeller;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const lineItem = (label: string, value: number, note?: string) => (
    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.6rem 0", borderBottom: "1px solid var(--border)" }}>
      <div>
        <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{label}</span>
        {note && <span style={{ fontSize: "0.65rem", color: "var(--muted2)", marginLeft: "0.5rem" }}>({note})</span>}
      </div>
      <span style={{ fontSize: "0.85rem", color: "var(--text)", fontFamily: "'Inter', system-ui, sans-serif", flexShrink: 0, marginLeft: "1rem" }}>{fmt(value)}</span>
    </div>
  );

  return (
    <>
      <Navbar />
      <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Closing Cost Estimator" }]} />
      <ToolLayout num="05" title="Closing Cost Estimator" description="Estimate buyer or seller closing costs for a Kentucky real estate transaction — itemized and specific to Hardin County.">
        <div className="tool-grid">
          <div className="tool-inputs">
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {(["buyer", "seller"] as const).map((r) => (
                <button key={r} onClick={() => setRole(r)} style={{ flex: 1, padding: "0.75rem", border: `1px solid ${role === r ? "var(--blue)" : "var(--border)"}`, background: role === r ? "var(--border)" : "transparent", color: role === r ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Inter', system-ui, sans-serif" }}>
                  {r === "buyer" ? "Buyer" : "Seller"}
                </button>
              ))}
            </div>
            <SliderInput label="Sale Price" value={price} min={50000} max={750000} step={5000} onChange={setPrice} display={fmt(price)} />
            {role === "buyer" && (
              <>
                <div style={{ marginTop: "1.5rem" }}>
                  <label style={labelStyle}>Loan Type</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {(["conventional", "fha", "va", "cash"] as const).map((t) => (
                      <button key={t} onClick={() => setLoanType(t)} style={{ padding: "0.6rem", border: `1px solid ${loanType === t ? "var(--blue)" : "var(--border)"}`, background: loanType === t ? "var(--border)" : "transparent", color: loanType === t ? "var(--blue)" : "var(--muted)", cursor: "pointer", fontSize: "0.72rem", textTransform: "uppercase", fontFamily: "'Inter', system-ui, sans-serif" }}>
                        {t === "conventional" ? "Conventional" : t === "fha" ? "FHA" : t === "va" ? "VA" : "Cash"}
                      </button>
                    ))}
                  </div>
                </div>
                {loanType !== "cash" && (
                  <SliderInput label="Down Payment" value={downPct} min={0} max={30} step={1} onChange={setDownPct} display={`${downPct}% (${fmt(down)})`} />
                )}
              </>
            )}
            <div style={{ marginTop: "2rem", padding: "1rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "none" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.7 }}>
                Estimates based on typical Hardin County, KY closing costs. Actual costs vary by lender, title company, property, and negotiation. Always review your Loan Estimate and Closing Disclosure carefully.
              </p>
            </div>
          </div>

          <div className="tool-results">
            {role === "buyer" ? (
              <>
                <div style={{ padding: "1.5rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "1.5rem", textAlign: "center" }}>
                  <div style={resultLabel}>Estimated Buyer Closing Costs</div>
                  <div style={resultBig}>{fmt(totalBuyer)}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.4rem" }}>{((totalBuyer / price) * 100).toFixed(1)}% of purchase price</div>
                </div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>Itemized Breakdown</div>
                {lineItem("Loan Origination (1%)", origination)}
                {lineItem("Appraisal", appraisal)}
                {lineItem("Home Inspection", inspection)}
                {lineItem("Survey", survey)}
                {lineItem("Title Search", titleSearch)}
                {lineItem("Owner's Title Insurance", titleInsurance)}
                {lineItem("Attorney Fee", attorney, "KY required")}
                {lineItem("Recording Fees", recording)}
                {lineItem("Prepaid Interest", prepaidInterest, "~15 days")}
                {lineItem("Prepaid Homeowner's Insurance", prepaidInsurance, "1 year")}
                {lineItem("Escrow Setup", escrowSetup, "taxes & insurance")}
                {loanType === "va" && lineItem("VA Funding Fee", vaFundingFee, "first use, can be financed")}
                {loanType === "fha" && lineItem("FHA Upfront MIP", fhaUpfront, "1.75% of loan")}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderTop: "1px solid var(--border)", marginTop: "0.25rem" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--blue)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total Estimated</span>
                  <span style={{ fontSize: "1.1rem", color: "var(--blue)", fontFamily: "'Inter', system-ui, sans-serif" }}>{fmt(totalBuyer)}</span>
                </div>
              </>
            ) : (
              <>
                <div style={{ padding: "1.5rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", marginBottom: "1.5rem", textAlign: "center" }}>
                  <div style={resultLabel}>Estimated Net Proceeds</div>
                  <div style={resultBig}>{fmt(netProceeds)}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.4rem" }}>after all closing costs</div>
                </div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>Seller Cost Breakdown</div>
                {lineItem("Real Estate Commission", commission, "estimated 5.5%")}
                {lineItem("KY Deed Transfer Tax", deedTransfer, "$0.50 per $500")}
                {lineItem("Deed Preparation", deedPrep)}
                {lineItem("Pro-Rated Property Taxes", proRatedTax, "~3 months")}
                {lineItem("Owner's Title Insurance", titleInsuranceSeller, "if paid by seller")}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderTop: "1px solid var(--border)", marginTop: "0.25rem" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total Costs</span>
                  <span style={{ fontSize: "1.1rem", color: "var(--text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{fmt(totalSeller)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--blue)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Net to Seller</span>
                  <span style={{ fontSize: "1.1rem", color: "var(--blue)", fontFamily: "'Inter', system-ui, sans-serif" }}>{fmt(netProceeds)}</span>
                </div>
                <p style={{ fontSize: "0.72rem", color: "var(--muted2)", marginTop: "1rem", lineHeight: 1.6 }}>Does not include mortgage payoff. Commission is negotiable and varies by transaction.</p>
              </>
            )}
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

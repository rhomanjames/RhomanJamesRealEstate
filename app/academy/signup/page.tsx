"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function AcademySignupPage() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    interest: "", // buying, selling, both, investing, just_looking
    timeline: "",
    military: "",
    priceRange: "",
    workingWithAgent: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.name,
          phone: form.phone,
          interest: form.interest,
          timeline: form.timeline,
          military: form.military,
          price_range: form.priceRange,
          working_with_agent: form.workingWithAgent,
        },
      },
    });
    if (error) {
      setStatus("error");
      setMessage(error.message);
    } else {
      setStatus("success");
      setMessage("Check your email to confirm your account, then log in.");
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", minHeight: "80vh" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem" }}>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem", textAlign: "center" }}>
            Create your free account
          </h1>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", textAlign: "center", marginBottom: "1.5rem" }}>
            One account, every course unlocked instantly — no forms to fill out again.
          </p>

          {/* Progress indicator */}
          {status !== "success" && (
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
              <div style={{ flex: 1, height: 4, borderRadius: 2, background: step >= 1 ? "var(--blue)" : "var(--border)" }} />
              <div style={{ flex: 1, height: 4, borderRadius: 2, background: step >= 2 ? "var(--blue)" : "var(--border)" }} />
            </div>
          )}

          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <p style={{ fontSize: "0.92rem", color: "var(--text)", lineHeight: 1.7 }}>{message}</p>
              <a href="/academy/login" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>Go to Login</a>
            </div>
          ) : step === 1 ? (
            <form onSubmit={nextStep} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Step 1 of 2 — Account Info</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Full Name</label>
                <input className="form-input" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Smith" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Email</label>
                <input className="form-input" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@example.com" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Phone <span style={{ fontWeight: 400 }}>(optional)</span></label>
                <input className="form-input" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(502) 000-0000" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Password</label>
                <input className="form-input" type="password" required minLength={8} value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="At least 8 characters" />
              </div>

              <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer", marginTop: "0.5rem" }}>
                Continue →
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Step 2 of 2 — Tell Us About You</p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "-0.5rem" }}>
                This helps Rhoman personalize any follow-up and recommend the right courses first. Nothing here is required to access the courses.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>What are you most interested in?</label>
                <select className="form-input" value={form.interest} onChange={(e) => update("interest", e.target.value)} style={{ appearance: "none" }}>
                  <option value="">Select one</option>
                  <option value="buying">Buying a home</option>
                  <option value="selling">Selling a home</option>
                  <option value="both">Both buying and selling</option>
                  <option value="investing">Investing in real estate</option>
                  <option value="just_looking">Just researching for now</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Timeline</label>
                <select className="form-input" value={form.timeline} onChange={(e) => update("timeline", e.target.value)} style={{ appearance: "none" }}>
                  <option value="">Select one</option>
                  <option value="asap">As soon as possible</option>
                  <option value="3_months">Within 3 months</option>
                  <option value="6_months">3 to 6 months</option>
                  <option value="1_year">6 to 12 months</option>
                  <option value="no_timeline">No specific timeline</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Target price range <span style={{ fontWeight: 400 }}>(optional)</span></label>
                <select className="form-input" value={form.priceRange} onChange={(e) => update("priceRange", e.target.value)} style={{ appearance: "none" }}>
                  <option value="">Select one</option>
                  <option value="under_175k">Under $175,000</option>
                  <option value="175_250k">$175,000–$250,000</option>
                  <option value="250_350k">$250,000–$350,000</option>
                  <option value="350k_plus">$350,000+</option>
                  <option value="not_sure">Not sure yet</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Military / Fort Knox connection?</label>
                <select className="form-input" value={form.military} onChange={(e) => update("military", e.target.value)} style={{ appearance: "none" }}>
                  <option value="">Select one</option>
                  <option value="active_duty">Active duty, PCS-ing to Fort Knox</option>
                  <option value="veteran">Veteran</option>
                  <option value="spouse">Military spouse</option>
                  <option value="none">Not military-connected</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Already working with an agent?</label>
                <select className="form-input" value={form.workingWithAgent} onChange={(e) => update("workingWithAgent", e.target.value)} style={{ appearance: "none" }}>
                  <option value="">Select one</option>
                  <option value="no">No, not yet</option>
                  <option value="yes_exploring">Yes, but exploring options</option>
                  <option value="yes_rhoman">Yes, working with Rhoman already</option>
                </select>
              </div>

              {status === "error" && (
                <p style={{ fontSize: "0.82rem", color: "#B91C1C" }}>{message}</p>
              )}

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                <button type="button" onClick={() => setStep(1)} className="btn-outline" style={{ cursor: "pointer", border: "1px solid var(--border)", flex: 1 }}>
                  ← Back
                </button>
                <button type="submit" disabled={status === "loading"} className="btn-primary" style={{ border: "none", cursor: "pointer", flex: 2 }}>
                  {status === "loading" ? "Creating account..." : "Create My Account"}
                </button>
              </div>
            </form>
          )}

          {status !== "success" && (
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", textAlign: "center", marginTop: "1.5rem" }}>
              Already have an account? <a href="/academy/login" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}>Log in</a>
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

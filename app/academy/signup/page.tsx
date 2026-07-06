"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function AcademySignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
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
        <div style={{ maxWidth: 420, margin: "0 auto", background: "white", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem" }}>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem", textAlign: "center" }}>
            Create your free account
          </h1>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", textAlign: "center", marginBottom: "2rem" }}>
            Track your course progress and unlock courses with access codes.
          </p>

          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <p style={{ fontSize: "0.92rem", color: "var(--text)", lineHeight: 1.7 }}>{message}</p>
              <a href="/academy/login" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>Go to Login</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Full Name</label>
                <input className="form-input" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Email</label>
                <input className="form-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Password</label>
                <input className="form-input" type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" />
              </div>
              {status === "error" && (
                <p style={{ fontSize: "0.82rem", color: "#B91C1C" }}>{message}</p>
              )}
              <button type="submit" disabled={status === "loading"} className="btn-primary" style={{ border: "none", cursor: "pointer", marginTop: "0.5rem" }}>
                {status === "loading" ? "Creating account..." : "Create Account"}
              </button>
            </form>
          )}

          <p style={{ fontSize: "0.85rem", color: "var(--muted)", textAlign: "center", marginTop: "1.5rem" }}>
            Already have an account? <a href="/academy/login" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}>Log in</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

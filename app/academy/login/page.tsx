"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export default function AcademyLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus("error");
      setMessage(error.message);
    } else {
      window.location.href = "/academy/dashboard";
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", minHeight: "80vh" }}>
        <div style={{ maxWidth: 420, margin: "0 auto", background: "white", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem" }}>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem", textAlign: "center" }}>
            Welcome back
          </h1>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", textAlign: "center", marginBottom: "2rem" }}>
            Log in to continue your courses.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Email</label>
              <input className="form-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Password</label>
              <input className="form-input" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" />
            </div>
            {status === "error" && (
              <p style={{ fontSize: "0.82rem", color: "#B91C1C" }}>{message}</p>
            )}
            <button type="submit" disabled={status === "loading"} className="btn-primary" style={{ border: "none", cursor: "pointer", marginTop: "0.5rem" }}>
              {status === "loading" ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p style={{ fontSize: "0.85rem", color: "var(--muted)", textAlign: "center", marginTop: "1.5rem" }}>
            Don&apos;t have an account? <a href="/academy/signup" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}>Create one free</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

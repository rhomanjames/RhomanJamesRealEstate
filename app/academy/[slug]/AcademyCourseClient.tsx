"use client";
import { useState, useEffect } from "react";
import { useAcademyAuth, hasActiveSubscription, redeemPromoCode } from "@/lib/useAcademyAuth";
import type { AcademyCourse } from "@/lib/academyCourses";

const SUBSCRIPTION_PAYMENT_LINK = "https://buy.stripe.com/aFa3cu50m7ssa0x5VMgIo00"; // Set this once you create the Stripe recurring Payment Link

export default function AcademyCourseClient({ course }: { course: AcademyCourse }) {
  const { user, loading } = useAcademyAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [redeemStatus, setRedeemStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [redeemMessage, setRedeemMessage] = useState("");

  useEffect(() => {
    if (!user) { setCheckingAccess(false); return; }
    hasActiveSubscription(user.id).then((access) => {
      setHasAccess(access);
      setCheckingAccess(false);
    });
  }, [user]);

  const handleRedeemCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setRedeemStatus("loading");
    const result = await redeemPromoCode(user.id, promoCode);
    setRedeemMessage(result.message);
    setRedeemStatus(result.success ? "success" : "error");
    if (result.success) setHasAccess(true);
  };

  const showGate = !loading && !checkingAccess && !hasAccess;

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)", background: "var(--blue-pale)", padding: "0.35rem 0.9rem", borderRadius: "999px" }}>{course.tag}</span>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.15, margin: "1.25rem 0 1rem" }}>
            {course.title}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 1.5rem" }}>
            {course.tagline}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.85rem", color: "var(--muted2)" }}>
            <span>{course.modules} modules</span>
            <span>·</span>
            <span>{course.lessons} lessons</span>
            <span>·</span>
            <span>~{course.estimatedHours} hours</span>
            <span>·</span>
            <span>{course.level}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "4rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "2.5rem" }}>{course.description}</p>

          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>What you&apos;ll learn</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {course.outcomes.map((o) => (
              <div key={o} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--blue-pale)", color: "var(--blue)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", marginTop: 2 }}>✓</div>
                <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.6, margin: 0 }}>{o}</p>
              </div>
            ))}
          </div>

          {/* ── ACCESS GATE ── */}
          {loading || checkingAccess ? null : showGate ? (
            <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
              {!user ? (
                <>
                  <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>Create a free account to get started</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1.5rem" }}>Subscribe or redeem a code to unlock this course and every other course in the Academy.</p>
                  <a href="/academy/signup" className="btn-primary">Create Free Account</a>
                </>
              ) : (
                <>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--blue)", marginBottom: "0.5rem" }}>This course is part of the full Academy library</p>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)" }}>$24</span>
                    <span style={{ fontSize: "1rem", color: "var(--muted)" }}>/ month</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                    One subscription unlocks all {course.tag ? "" : ""}100+ courses in the Academy — including everything added going forward. Cancel anytime.
                  </p>
                  <a
                    href={SUBSCRIPTION_PAYMENT_LINK || "#"}
                    className="btn-primary"
                    style={{ display: "inline-block", marginBottom: "2rem" }}
                  >
                    Subscribe for Full Access
                  </a>

                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--muted)", marginBottom: "0.75rem" }}>Have a free access code?</p>
                    <form onSubmit={handleRedeemCode} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <input
                        className="form-input"
                        style={{ maxWidth: "220px" }}
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        required
                      />
                      <button type="submit" disabled={redeemStatus === "loading"} className="btn-outline" style={{ cursor: "pointer", border: "1px solid var(--border)" }}>
                        {redeemStatus === "loading" ? "Checking..." : "Redeem Code"}
                      </button>
                    </form>
                    {redeemMessage && (
                      <p style={{ fontSize: "0.85rem", marginTop: "0.75rem", color: redeemStatus === "success" ? "#166534" : "#B91C1C" }}>
                        {redeemMessage}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div style={{ background: "var(--blue-pale)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                You have full access to the Academy.
              </p>
              <a href={course.legacyFreeHref || `/academy/${course.slug}/watch`} className="btn-primary">
                Start Learning →
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

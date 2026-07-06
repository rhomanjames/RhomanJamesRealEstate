"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAcademyAuth, hasActiveSubscription } from "@/lib/useAcademyAuth";
import { academyCourses } from "@/lib/academyCourses";

export default function AcademyDashboardPage() {
  const { user, loading, signOut } = useAcademyAuth();
  const [subscribed, setSubscribed] = useState(false);
  const [checkingSub, setCheckingSub] = useState(true);

  useEffect(() => {
    if (!user) { setCheckingSub(false); return; }
    hasActiveSubscription(user.id).then((active) => {
      setSubscribed(active);
      setCheckingSub(false);
    });
  }, [user]);

  if (loading) return null;

  if (!user) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center", background: "var(--bg-soft)", minHeight: "70vh" }}>
          <p style={{ fontSize: "1rem", color: "var(--muted)", marginBottom: "1.5rem" }}>You need to log in to view your dashboard.</p>
          <a href="/academy/login" className="btn-primary">Log In</a>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", minHeight: "80vh" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--text)" }}>
                Welcome back{user.user_metadata?.full_name ? `, ${user.user_metadata.full_name.split(" ")[0]}` : ""}
              </h1>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginTop: "0.35rem" }}>{user.email}</p>
            </div>
            <button onClick={signOut} className="btn-outline" style={{ cursor: "pointer", border: "1px solid var(--border)" }}>Log Out</button>
          </div>

          {/* Subscription status banner */}
          {!checkingSub && (
            <div style={{
              background: subscribed ? "var(--blue-pale)" : "white",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1.5rem 2rem",
              marginBottom: "2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                  {subscribed ? "You have full library access" : "You're not subscribed yet"}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0 }}>
                  {subscribed ? "Every course below is unlocked, including anything added in the future." : "Subscribe for $24/month to unlock all courses, or redeem a code."}
                </p>
              </div>
              {!subscribed && (
                <a href={`/academy/${academyCourses[0].slug}`} className="btn-primary">Subscribe Now</a>
              )}
            </div>
          )}

          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>All Courses</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {academyCourses.map((c) => (
              <a key={c.slug} href={`/academy/${c.slug}`} style={{ textDecoration: "none" }}>
                <div className="service-card" style={{ padding: "1.5rem", opacity: subscribed ? 1 : 0.85 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--blue)", marginBottom: "0.5rem" }}>{c.tag}</p>
                    {subscribed && <span style={{ fontSize: "0.7rem", color: "var(--blue)" }}>✓ Unlocked</span>}
                  </div>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.35 }}>{c.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

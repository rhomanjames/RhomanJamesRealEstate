import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | Rhoman James Real Estate",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "3rem", paddingRight: "3rem", background: "var(--dark)", minHeight: "60vh" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "white", marginBottom: "2rem" }}>Privacy Policy</h1>
          <div style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.92rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>Last updated: January 2025</p>
            <p style={{ marginBottom: "1.5rem" }}>This website (rhomanjames.com) is operated by Rhoman James, a real estate professional based in Elizabethtown, Kentucky. License pending.</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "white", marginBottom: "1rem", marginTop: "2rem" }}>Information We Collect</h2>
            <p style={{ marginBottom: "1.5rem" }}>When you contact us through this website, we collect your name, email address, phone number, and any information you voluntarily provide in your message. We use Google Analytics to understand how visitors use this site — this data is anonymized and aggregated.</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "white", marginBottom: "1rem", marginTop: "2rem" }}>How We Use Your Information</h2>
            <p style={{ marginBottom: "1.5rem" }}>Contact information is used solely to respond to your inquiry and provide real estate services. We do not sell, rent, or share your personal information with third parties except as required by law.</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "white", marginBottom: "1rem", marginTop: "2rem" }}>Contact</h2>
            <p>Questions? Email <a href="mailto:RhomanMJames@gmail.com" style={{ color: "var(--gold)" }}>RhomanMJames@gmail.com</a> or call <a href="tel:+15022649376" style={{ color: "var(--gold)" }}>(502) 264-9376</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

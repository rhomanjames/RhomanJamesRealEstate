import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Accessibility | Rhoman James Real Estate",
  robots: { index: false, follow: false },
};

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "3rem", paddingRight: "3rem", background: "var(--dark)", minHeight: "60vh" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "white", marginBottom: "2rem" }}>Accessibility Statement</h1>
          <div style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.92rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>Rhoman James Real Estate is committed to ensuring this website is accessible to people with disabilities. We aim to meet WCAG 2.1 Level AA standards.</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "white", marginBottom: "1rem", marginTop: "2rem" }}>Our Efforts</h2>
            <p style={{ marginBottom: "1.5rem" }}>This site uses semantic HTML5, ARIA landmark roles, descriptive alt text, sufficient color contrast ratios, keyboard-navigable interactive elements, and clear focus indicators.</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "white", marginBottom: "1rem", marginTop: "2rem" }}>Known Limitations</h2>
            <p style={{ marginBottom: "1.5rem" }}>We are continuously improving accessibility. If you encounter a barrier, please contact us and we will address it promptly.</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "white", marginBottom: "1rem", marginTop: "2rem" }}>Contact</h2>
            <p>Email <a href="mailto:RhomanMJames@gmail.com" style={{ color: "var(--gold)" }}>RhomanMJames@gmail.com</a> or call <a href="tel:+15022649376" style={{ color: "var(--gold)" }}>(502) 264-9376</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

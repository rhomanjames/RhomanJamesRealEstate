import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLandingClient from "./CourseLandingClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kentucky Real Estate Investor Course | Free | Rhoman James",
  description: "How to analyze, finance, and manage rental properties in Elizabethtown and Hardin County, KY — from your first investment to a multi-property portfolio.",
  keywords: "real estate investing Elizabethtown KY, rental property Hardin County Kentucky, Fort Knox rental property investment, Kentucky real estate investor",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course" },
  openGraph: {
    title: "Kentucky Real Estate Investor Course | Rhoman James",
    description: "How to analyze, finance, and manage rental properties in Elizabethtown and Hardin County, KY — from your first investment to a multi-property portfolio.",
    url: "https://rhomanjames.com/investor-course",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Kentucky Real Estate Investor Course",
  description: "How to analyze, finance, and manage rental properties in Elizabethtown and Hardin County, KY — from your first investment to a multi-property portfolio.",
  provider: { "@type": "Person", name: "Rhoman James", url: "https://rhomanjames.com" },
  url: "https://rhomanjames.com/investor-course",
  educationalLevel: "Beginner",
  inLanguage: "en",
  isAccessibleForFree: true,
};

export default function CoursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: JSON.stringify(schema) } />
      <Navbar />
      <CourseLandingClient />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLandingClient from "./CourseLandingClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kentucky Home Sellers Course | Free | Rhoman James",
  description: "Everything you need to know about selling your home in Kentucky — from pricing strategy to closing day. Six modules, no fluff, completely free.",
  keywords: "Kentucky home sellers course free, how to sell a home in Kentucky, Elizabethtown KY home selling guide",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course" },
  openGraph: {
    title: "Kentucky Home Sellers Course | Rhoman James",
    description: "Everything you need to know about selling your home in Kentucky — from pricing strategy to closing day. Six modules, no fluff, completely free.",
    url: "https://rhomanjames.com/sellers-course",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Kentucky Home Sellers Course",
  description: "Everything you need to know about selling your home in Kentucky — from pricing strategy to closing day. Six modules, no fluff, completely free.",
  provider: { "@type": "Person", name: "Rhoman James", url: "https://rhomanjames.com" },
  url: "https://rhomanjames.com/sellers-course",
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

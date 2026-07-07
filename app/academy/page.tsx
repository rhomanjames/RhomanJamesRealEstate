import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyCatalogClient from "./AcademyCatalogClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kentucky Home Academy, by Rhoman James | 100% Free Courses",
  description: "Every Kentucky real estate course you'll ever need, completely free. Buying, selling, Fort Knox military relocation, investing, and homeownership courses. No cost, no catch.",
  keywords: "Kentucky real estate courses, Elizabethtown real estate education, Fort Knox homebuying course, Kentucky home buyer course, real estate course subscription, online real estate classes Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Kentucky Home Academy, by Rhoman James — Every Kentucky Real Estate Course, Completely Free",
    description: "Buying, selling, military relocation, and investing courses for Kentucky. All free, always.",
    url: "https://rhomanjames.com/academy",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <AcademyCatalogClient />
      <Footer />
    </>
  );
}

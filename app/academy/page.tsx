import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyCatalogClient from "./AcademyCatalogClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rhoman James Academy | Kentucky Real Estate Courses — $24/mo Full Access",
  description: "Every Kentucky real estate course you'll ever need, one subscription. Buying, selling, Fort Knox military relocation, investing, and homeownership courses. $24/month, cancel anytime. Free for Rhoman James clients.",
  keywords: "Kentucky real estate courses, Elizabethtown real estate education, Fort Knox homebuying course, Kentucky home buyer course, real estate course subscription, online real estate classes Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Rhoman James Academy — Every Kentucky Real Estate Course, One Subscription",
    description: "Buying, selling, military relocation, and investing courses for Kentucky. $24/month unlocks everything.",
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

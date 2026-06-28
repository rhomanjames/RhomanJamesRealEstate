import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLandingClient from "./CourseLandingClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fort Knox PCS Homebuying Bootcamp | Free | Rhoman James",
  description: "Everything military families need to know about buying a home near Fort Knox, KY — VA loans, BAH strategy, PCS timelines, and the best neighborhoods by gate.",
  keywords: "Fort Knox PCS home buying guide, buying home near Fort Knox Kentucky, VA loan Fort Knox KY, military home buying Elizabethtown",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course" },
  openGraph: {
    title: "Fort Knox PCS Homebuying Bootcamp | Rhoman James",
    description: "Everything military families need to know about buying a home near Fort Knox, KY — VA loans, BAH strategy, PCS timelines, and the best neighborhoods by gate.",
    url: "https://rhomanjames.com/fort-knox-course",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Fort Knox PCS Homebuying Bootcamp",
  description: "Everything military families need to know about buying a home near Fort Knox, KY — VA loans, BAH strategy, PCS timelines, and the best neighborhoods by gate.",
  provider: { "@type": "Person", name: "Rhoman James", url: "https://rhomanjames.com" },
  url: "https://rhomanjames.com/fort-knox-course",
  educationalLevel: "Beginner",
  inLanguage: "en",
  isAccessibleForFree: true,
};

export default function CoursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <CourseLandingClient />
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLandingClient from "./CourseLandingClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Kentucky Home Buyers Course | Rhoman James",
  description: "A free self-paced course covering everything first-time and repeat buyers need to know about purchasing a home in Kentucky — from credit to closing day.",
  keywords: "Kentucky home buyers course free, first time home buyer course Kentucky, how to buy a home Kentucky, Elizabethtown KY home buying guide",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course" },
  openGraph: {
    title: "Free Kentucky Home Buyers Course | Rhoman James",
    description: "Self-paced, free, and built specifically for Kentucky buyers. 6 modules covering everything from credit to closing day.",
    url: "https://rhomanjames.com/course",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Free Kentucky Home Buyers Course",
  description: "A free self-paced course covering everything buyers need to know about purchasing a home in Kentucky.",
  provider: { "@type": "Person", name: "Rhoman James", url: "https://rhomanjames.com" },
  url: "https://rhomanjames.com/course",
  educationalLevel: "Beginner",
  inLanguage: "en",
  isAccessibleForFree: true,
  hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: "PT3H" },
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

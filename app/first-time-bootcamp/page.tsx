import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLandingClient from "./CourseLandingClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "First-Time Homebuyer Bootcamp | Free | Rhoman James",
  description: "From renter to homeowner in Kentucky — a straight-talking, step-by-step bootcamp for first-time buyers in Elizabethtown and Hardin County.",
  keywords: "first time home buyer Kentucky, first time home buyer Elizabethtown KY, Kentucky first time buyer programs, how to buy first home Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp" },
  openGraph: {
    title: "First-Time Homebuyer Bootcamp | Rhoman James",
    description: "From renter to homeowner in Kentucky — a straight-talking, step-by-step bootcamp for first-time buyers in Elizabethtown and Hardin County.",
    url: "https://rhomanjames.com/first-time-bootcamp",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "First-Time Homebuyer Bootcamp",
  description: "From renter to homeowner in Kentucky — a straight-talking, step-by-step bootcamp for first-time buyers in Elizabethtown and Hardin County.",
  provider: { "@type": "Person", name: "Rhoman James", url: "https://rhomanjames.com" },
  url: "https://rhomanjames.com/first-time-bootcamp",
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

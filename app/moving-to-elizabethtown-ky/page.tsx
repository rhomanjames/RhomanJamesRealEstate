import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import MovingGuideClient from "./MovingGuideClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Moving to Elizabethtown, KY — The Complete 2025 Guide | Rhoman James",
  description:
    "The complete guide to moving to Elizabethtown, KY — neighborhoods, cost of living, schools, jobs, healthcare, and real estate in Hardin County.",
  keywords:
    "moving to Elizabethtown KY, relocating to Elizabethtown Kentucky, living in Elizabethtown KY, Elizabethtown KY pros and cons, is Elizabethtown KY a good place to live, Hardin County Kentucky relocation guide",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/moving-to-elizabethtown-ky" },
  openGraph: {
    title: "Moving to Elizabethtown, KY — The Complete Guide | Rhoman James",
    description:
      "The most comprehensive relocation guide for Elizabethtown, Kentucky — neighborhoods, schools, cost of living, jobs, and everything in between.",
    url: "https://rhomanjames.com/moving-to-elizabethtown-ky",
    siteName: "Rhoman James Real Estate",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Elizabethtown, KY a good place to live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Elizabethtown consistently ranks as one of Kentucky's most livable mid-sized cities. It offers a low cost of living, strong schools, proximity to Fort Knox and the I-65 corridor between Louisville and Nashville, and a genuine small-town community feel with growing amenities.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of living in Elizabethtown, KY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elizabethtown's cost of living runs approximately 10-15% below the national average. Housing is significantly more affordable than comparable cities in Tennessee, Ohio, or Indiana. Groceries, utilities, and services also cost less than the national average.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Elizabethtown from Louisville?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elizabethtown is approximately 42 miles south of Louisville along I-65, translating to roughly 40-55 minutes depending on traffic.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best neighborhoods in Elizabethtown, KY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popular neighborhoods include Helmwood Hills for established homes with mature trees, areas near Freeman Lake for scenic settings, and newer subdivisions on the south and east sides of town for modern floor plans. Radcliff and Vine Grove offer more affordable alternatives nearby.",
      },
    },
    {
      "@type": "Question",
      name: "What is the job market like in Elizabethtown, KY?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elizabethtown's economy is anchored by Fort Knox — one of the largest Army installations in the country — along with Hardin Memorial Hospital, manufacturing, and a strong I-65 corridor retail and logistics sector. The Fort Knox presence provides unusual economic stability.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Moving to Elizabethtown, KY — The Complete 2025 Relocation Guide",
  description:
    "The most comprehensive guide to moving to Elizabethtown, Kentucky — covering neighborhoods, cost of living, schools, jobs, healthcare, and real estate.",
  author: {
    "@type": "Person",
    name: "Rhoman James",
    jobTitle: "Real Estate Professional",
    url: "https://rhomanjames.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Rhoman James Real Estate",
    url: "https://rhomanjames.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://rhomanjames.com/moving-to-elizabethtown-ky",
  },
};

export default function MovingGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <Breadcrumb items={[{ label: "Moving to Elizabethtown, KY" }]} />
      <MovingGuideClient />
      <Footer />
    </>
  );
}

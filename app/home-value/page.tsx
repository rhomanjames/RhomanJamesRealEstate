import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeValueClient from "./HomeValueClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Home Valuation Elizabethtown KY | What Is My Home Worth?",
  description: "Find out what your Elizabethtown or Hardin County home is worth in today's market. Free home value report from a local real estate professional — no obligation, no pressure.",
  keywords: "sell my house Elizabethtown KY, home value Elizabethtown KY, what is my home worth, free home valuation Elizabethtown, listing agent Elizabethtown KY, best real estate agent Hardin County, how much is my home worth, home appraisal Elizabethtown Kentucky, sell home Hardin County, Elizabethtown KY home prices",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/home-value" },
  openGraph: {
    title: "Free Home Valuation | What Is My Elizabethtown Home Worth?",
    description: "Get a free home value report for your Elizabethtown or Hardin County property. Local market knowledge, no obligation.",
    url: "https://rhomanjames.com/home-value",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rhomanjames.com/home-value",
      url: "https://rhomanjames.com/home-value",
      name: "Free Home Valuation Elizabethtown KY",
      description: "Find out what your Elizabethtown or Hardin County home is worth. Free home value report from local real estate professional Rhoman James.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rhomanjames.com" },
          { "@type": "ListItem", position: 2, name: "Home Value", item: "https://rhomanjames.com/home-value" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is my Elizabethtown home worth?",
          acceptedAnswer: { "@type": "Answer", text: "Your home's value in Elizabethtown depends on recent comparable sales in your specific neighborhood, your home's size, condition, age, and current inventory levels in Hardin County. The most accurate way to find out is a comparative market analysis from a local professional who knows the specific streets and neighborhoods." },
        },
        {
          "@type": "Question",
          name: "What is the difference between a home appraisal and a home valuation?",
          acceptedAnswer: { "@type": "Answer", text: "A home appraisal is performed by a licensed appraiser and is typically required by a lender during a refinance or purchase. A comparative market analysis (CMA) is performed by a real estate professional using recent comparable sales to estimate market value. A CMA is free, faster, and what most sellers use to determine their list price." },
        },
        {
          "@type": "Question",
          name: "How long does it take to sell a home in Elizabethtown KY?",
          acceptedAnswer: { "@type": "Answer", text: "Well-priced and well-prepared homes in the Elizabethtown market typically sell within 1 to 3 weeks. Homes that are overpriced or need significant preparation can sit for 30 to 90 days or longer. Pricing correctly from day one is the single most important factor in how quickly your home sells." },
        },
        {
          "@type": "Question",
          name: "What are home values doing in Elizabethtown KY right now?",
          acceptedAnswer: { "@type": "Answer", text: "The Elizabethtown and Hardin County market has shown consistent demand driven by Fort Knox PCS rotation, which creates year-round buyer activity that many comparable markets do not have. For a current assessment of your specific property's value, request a free home valuation report." },
        },
        {
          "@type": "Question",
          name: "How much does it cost to sell a home in Kentucky?",
          acceptedAnswer: { "@type": "Answer", text: "Total selling costs in Kentucky typically run 7 to 9 percent of the sale price, including agent commissions, Kentucky state transfer tax, attorney fees, title insurance, and prorated property taxes. Use the free Net Proceeds Calculator at rhomanjames.com/tools/net-proceeds to estimate your specific take-home amount." },
        },
        {
          "@type": "Question",
          name: "Do I need a listing agent to sell my house in Elizabethtown?",
          acceptedAnswer: { "@type": "Answer", text: "You are not legally required to use a listing agent, but most sellers in the Elizabethtown market work with one. A listing professional provides MLS access, pricing strategy, marketing, negotiation, and transaction management that most sellers are not equipped to handle independently. The commission is paid from proceeds at closing, not out of pocket upfront." },
        },
      ],
    },
  ],
};

export default function HomeValuePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <HomeValueClient />
      <Footer />
    </>
  );
}

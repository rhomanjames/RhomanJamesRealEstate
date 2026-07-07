import SchemaOrg from "@/components/SchemaOrg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Areas from "@/components/Areas";
import SeoContent from "@/components/SeoContent";
import Contact from "@/components/Contact";
import InternalLinks from "@/components/InternalLinks";
import Footer from "@/components/Footer";
import Community from "@/components/Community";

export const dynamic = "force-static";

const homeInternalLinks = [
  {
    heading: "Services",
    links: [
      { label: "Buying a Home in Elizabethtown", href: "/services/buying-a-home", desc: "Expert buyer representation across Hardin County" },
      { label: "Selling Your Home", href: "/services/selling-your-home", desc: "Strategic pricing & marketing for Hardin County sellers" },
      { label: "First-Time Buyers", href: "/services/first-time-buyers", desc: "Patient guidance from search to keys" },
      { label: "VA Loan Buyers — Fort Knox", href: "/services/buying-a-home", desc: "Zero down, no PMI — I specialize in VA purchases" },
      { label: "Relocation to Elizabethtown", href: "/services/relocation", desc: "Remote buying and PCS support" },
      { label: "Investment Properties", href: "/services/investment-properties", desc: "Cash flow analysis for Hardin County rentals" },
    ],
  },
  {
    heading: "Neighborhoods",
    links: [
      { label: "Elizabethtown, KY", href: "/neighborhoods/elizabethtown", desc: "The county seat & most popular community" },
      { label: "Radcliff, KY", href: "/neighborhoods/radcliff", desc: "Closest city to Fort Knox" },
      { label: "Vine Grove, KY", href: "/neighborhoods/vine-grove", desc: "Affordable & community-focused" },
      { label: "Rineyville, KY", href: "/neighborhoods/rineyville", desc: "Rural lots & privacy" },
      { label: "Hodgenville, KY", href: "/neighborhoods/hodgenville", desc: "LaRue County's historic seat" },
      { label: "Fort Knox Area", href: "/neighborhoods/fort-knox", desc: "Military housing & VA loan market" },
    ],
  },
  {
    heading: "Free Tools & Resources",
    links: [
      { label: "Mortgage Calculator", href: "/tools/mortgage-calculator", desc: "Estimate your monthly payment" },
      { label: "VA Loan Calculator", href: "/tools/va-loan-calculator", desc: "Fort Knox military buyer tool" },
      { label: "Rent vs. Buy Calculator", href: "/tools/rent-vs-buy", desc: "When does buying beat renting?" },
      { label: "Home Sale Net Proceeds", href: "/tools/net-proceeds", desc: "What will you walk away with?" },
      { label: "Closing Cost Estimator", href: "/tools/closing-cost-estimator", desc: "Kentucky buyer & seller costs" },
      { label: "Real Estate FAQ", href: "/faq", desc: "70+ questions answered" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Areas />
        <Community />
        <SeoContent />
        <Contact />
      </main>
      <InternalLinks groups={homeInternalLinks} title="Everything on this site" />
      <Footer />
    </>
  );
}

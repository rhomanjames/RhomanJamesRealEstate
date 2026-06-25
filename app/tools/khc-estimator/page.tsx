import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "KHC Down Payment Assistance Estimator | Elizabethtown KY | Rhoman James",
  description: "Check your eligibility for Kentucky Housing Corporation down payment assistance — specific to Hardin County first-time buyers. Free tool.",
  keywords: "KHC down payment assistance Kentucky, first time home buyer programs Elizabethtown KY",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/khc-estimator" },
  openGraph: {
    title: "KHC Down Payment Assistance Estimator | Elizabethtown KY | Rhoman James",
    description: "Check your eligibility for Kentucky Housing Corporation down payment assistance — specific to Hardin County first-time buyers. Free tool.",
    url: "https://rhomanjames.com/tools/khc-estimator",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

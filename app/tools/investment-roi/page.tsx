import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Investment Property ROI Calculator | Elizabethtown KY | Rhoman James",
  description: "Analyze rental property returns in Elizabethtown and Hardin County, KY — cash flow, cap rate, cash-on-cash return, and total ROI. Free tool.",
  keywords: "investment property calculator Elizabethtown KY, rental property ROI Hardin County Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/investment-roi" },
  openGraph: {
    title: "Investment Property ROI Calculator | Elizabethtown KY | Rhoman James",
    description: "Analyze rental property returns in Elizabethtown and Hardin County, KY — cash flow, cap rate, cash-on-cash return, and total ROI. Free tool.",
    url: "https://rhomanjames.com/tools/investment-roi",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

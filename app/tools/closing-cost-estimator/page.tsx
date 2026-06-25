import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Closing Cost Estimator | Elizabethtown KY | Rhoman James",
  description: "Estimate buyer and seller closing costs for Elizabethtown and Hardin County, KY — itemized and Kentucky-specific. Free tool by Rhoman James.",
  keywords: "closing costs Kentucky buyer seller, Elizabethtown KY closing cost estimator",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/closing-cost-estimator" },
  openGraph: {
    title: "Closing Cost Estimator | Elizabethtown KY | Rhoman James",
    description: "Estimate buyer and seller closing costs for Elizabethtown and Hardin County, KY — itemized and Kentucky-specific. Free tool by Rhoman James.",
    url: "https://rhomanjames.com/tools/closing-cost-estimator",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

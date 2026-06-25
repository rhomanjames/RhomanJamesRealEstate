import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Property Tax Estimator | Elizabethtown KY | Rhoman James",
  description: "Estimate annual and monthly property taxes for Hardin, LaRue, and Meade County, KY properties — with Kentucky homestead exemption. Free tool.",
  keywords: "property tax calculator Hardin County KY, Elizabethtown Kentucky property tax estimator",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/property-tax-estimator" },
  openGraph: {
    title: "Property Tax Estimator | Elizabethtown KY | Rhoman James",
    description: "Estimate annual and monthly property taxes for Hardin, LaRue, and Meade County, KY properties — with Kentucky homestead exemption. Free tool.",
    url: "https://rhomanjames.com/tools/property-tax-estimator",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

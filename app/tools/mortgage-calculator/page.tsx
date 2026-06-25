import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mortgage Calculator | Elizabethtown KY | Rhoman James",
  description: "Free mortgage calculator for Elizabethtown, KY — estimate monthly principal, interest, taxes, insurance, and PMI based on current rates.",
  keywords: "mortgage calculator Elizabethtown KY, home loan calculator Hardin County Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/mortgage-calculator" },
  openGraph: {
    title: "Mortgage Calculator | Elizabethtown KY | Rhoman James",
    description: "Free mortgage calculator for Elizabethtown, KY — estimate monthly principal, interest, taxes, insurance, and PMI based on current rates.",
    url: "https://rhomanjames.com/tools/mortgage-calculator",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

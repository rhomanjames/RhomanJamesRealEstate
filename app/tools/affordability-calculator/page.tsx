import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home Affordability Calculator | Elizabethtown KY | Rhoman James",
  description: "Find out how much home you can afford in Elizabethtown, KY — based on your income, debts, and down payment. Free calculator by Rhoman James.",
  keywords: "how much home can I afford Elizabethtown KY, home affordability calculator Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/affordability-calculator" },
  openGraph: {
    title: "Home Affordability Calculator | Elizabethtown KY | Rhoman James",
    description: "Find out how much home you can afford in Elizabethtown, KY — based on your income, debts, and down payment. Free calculator by Rhoman James.",
    url: "https://rhomanjames.com/tools/affordability-calculator",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

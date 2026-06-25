import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Down Payment Savings Planner | Elizabethtown KY | Rhoman James",
  description: "See how long it takes to save for a down payment on an Elizabethtown, KY home — with KHC assistance options included. Free tool.",
  keywords: "down payment savings calculator Kentucky, how much to save for house Elizabethtown KY",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/down-payment-planner" },
  openGraph: {
    title: "Down Payment Savings Planner | Elizabethtown KY | Rhoman James",
    description: "See how long it takes to save for a down payment on an Elizabethtown, KY home — with KHC assistance options included. Free tool.",
    url: "https://rhomanjames.com/tools/down-payment-planner",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home Sale Net Proceeds Calculator | Elizabethtown KY | Rhoman James",
  description: "Find out exactly how much you walk away with after selling your Elizabethtown home — mortgage payoff, commissions, and all costs included.",
  keywords: "home sale net proceeds calculator Kentucky, how much will I make selling my house Elizabethtown KY",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/net-proceeds" },
  openGraph: {
    title: "Home Sale Net Proceeds Calculator | Elizabethtown KY | Rhoman James",
    description: "Find out exactly how much you walk away with after selling your Elizabethtown home — mortgage payoff, commissions, and all costs included.",
    url: "https://rhomanjames.com/tools/net-proceeds",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

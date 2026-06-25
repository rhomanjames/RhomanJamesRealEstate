import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rent vs. Buy Calculator | Elizabethtown KY | Rhoman James",
  description: "See exactly when buying beats renting in Elizabethtown, KY — based on your real numbers. Free rent vs buy calculator by Rhoman James.",
  keywords: "rent vs buy Elizabethtown KY, is it better to rent or buy Hardin County Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/rent-vs-buy" },
  openGraph: {
    title: "Rent vs. Buy Calculator | Elizabethtown KY | Rhoman James",
    description: "See exactly when buying beats renting in Elizabethtown, KY — based on your real numbers. Free rent vs buy calculator by Rhoman James.",
    url: "https://rhomanjames.com/tools/rent-vs-buy",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

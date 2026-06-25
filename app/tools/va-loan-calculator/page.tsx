import type { Metadata } from "next";
import ToolClient from "./ToolClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "VA Loan Calculator | Elizabethtown KY | Rhoman James",
  description: "Free VA loan calculator for Fort Knox military families — calculate your payment with the funding fee included. Zero down, no PMI.",
  keywords: "VA loan calculator Fort Knox KY, VA loan payment calculator Kentucky, military home loan Elizabethtown",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/tools/va-loan-calculator" },
  openGraph: {
    title: "VA Loan Calculator | Elizabethtown KY | Rhoman James",
    description: "Free VA loan calculator for Fort Knox military families — calculate your payment with the funding fee included. Zero down, no PMI.",
    url: "https://rhomanjames.com/tools/va-loan-calculator",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};

export default function Page() {
  return <ToolClient />;
}

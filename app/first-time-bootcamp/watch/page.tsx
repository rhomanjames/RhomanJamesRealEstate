import type { Metadata } from "next";
import CourseWatchClient from "./CourseWatchClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "First-Time Homebuyer Bootcamp | Course Dashboard | Rhoman James",
  description: "Your free First-Time Homebuyer Bootcamp — self-paced and Kentucky specific. Track your progress through every module.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch" },
  robots: { index: false, follow: true },
};

export default function WatchPage() {
  return <CourseWatchClient />;
}

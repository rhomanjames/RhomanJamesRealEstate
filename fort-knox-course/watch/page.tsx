import type { Metadata } from "next";
import CourseWatchClient from "./CourseWatchClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Fort Knox PCS Homebuying Bootcamp | Course Dashboard | Rhoman James",
  description: "Your free Fort Knox PCS Homebuying Bootcamp — self-paced and Kentucky specific. Track your progress through every module.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch" },
  robots: { index: false, follow: true },
};

export default function WatchPage() {
  return <CourseWatchClient />;
}

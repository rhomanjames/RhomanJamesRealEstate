import type { Metadata } from "next";
import CourseWatchClient from "./CourseWatchClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kentucky Home Sellers Course | Course Dashboard | Rhoman James",
  description: "Your free Kentucky Home Sellers Course — self-paced and Kentucky specific. Track your progress through every module.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch" },
  robots: { index: false, follow: true },
};

export default function WatchPage() {
  return <CourseWatchClient />;
}

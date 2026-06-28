import type { Metadata } from "next";
import CourseWatchClient from "./CourseWatchClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kentucky Home Buyers Course Dashboard | Rhoman James",
  description: "Your free Kentucky home buyers course — 6 modules, 30 lessons, self-paced. Track your progress and learn everything about buying a home in Kentucky.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch" },
  robots: { index: false, follow: true },
};

export default function CourseWatchPage() {
  return <CourseWatchClient />;
}

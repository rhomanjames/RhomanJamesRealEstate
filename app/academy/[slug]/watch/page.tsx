import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyWatchClient from "./AcademyWatchClient";
import { getCourseBySlug } from "@/lib/academyCourses";

export const dynamic = "force-static";

// Only these 3 courses have real lesson content wired up so far.
// Add a slug here once you build out a new course's content file.
const AVAILABLE_CONTENT_SLUGS = [
  "credit-repair-before-you-buy",
  "how-much-house-can-you-afford",
  "buying-with-bad-credit-or-thin-credit",
  "every-kentucky-loan-program-explained",
  "bidding-war-without-overpaying",
  "home-inspection-deep-dive",
  "appraisal-gaps-how-to-handle-them",
  "buying-a-fixer-upper",
  "buying-new-construction-in-kentucky",
  "buying-with-a-cosigner-or-joint-buyer",
  "the-kentucky-attorney-closing-explained",
  "pricing-your-home-to-sell-fast-and-high",
  "prepping-your-home-on-a-budget",
];

export function generateStaticParams() {
  return AVAILABLE_CONTENT_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} — Watch | Rhoman James Academy`,
    description: course.description,
    robots: { index: false, follow: false },
  };
}

export default function AcademyWatchPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center" }}>
          <p>Course not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <AcademyWatchClient slug={params.slug} courseTitle={course.title} />
      <Footer />
    </>
  );
}

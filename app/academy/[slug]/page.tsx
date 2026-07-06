import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyCourseClient from "./AcademyCourseClient";
import { academyCourses, getCourseBySlug } from "@/lib/academyCourses";

export const dynamic = "force-static";

export function generateStaticParams() {
  return academyCourses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} | Rhoman James Academy`,
    description: course.description,
    metadataBase: new URL("https://rhomanjames.com"),
    alternates: { canonical: `/academy/${course.slug}` },
  };
}

export default function AcademyCoursePage({ params }: { params: { slug: string } }) {
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
      <AcademyCourseClient course={course} />
      <Footer />
    </>
  );
}

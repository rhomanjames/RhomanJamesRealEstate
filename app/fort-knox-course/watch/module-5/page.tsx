import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 05: The Home Search Near Fort Knox | Rhoman James",
  description: "Module 05: The Home Search Near Fort Knox — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch/module-5" },
  robots: { index: false, follow: true },
};

export default function Module5() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="05"
        moduleTitle="The Home Search Near Fort Knox"
        totalModules={6}
        prevModule={{ slug: "module-4", title: "Buying on a PCS Timeline" }}
        nextModule={{ slug: "module-6", title: "When You PCS Out — Your Exit Strategy" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How to map your actual commute from any Fort Knox neighborhood",
            content: `This lesson covers: How to map your actual commute from any Fort Knox neighborhood

**What you will learn**

Commute time from neighborhoods to Fort Knox gates is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Military families who choose a neighborhood without mapping their actual commute often regret it within the first month. This lesson teaches you to map realistic commute times for any property you consider.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to map your actual commute from any fort knox neighborhood is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "School zones near Fort Knox — Hardin County Schools explained",
            content: `This lesson covers: School zones near Fort Knox — Hardin County Schools explained

**What you will learn**

Which schools serve which addresses near Fort Knox is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Hardin County Schools serves most of the Fort Knox area including Radcliff and Vine Grove. Understanding which high school serves each address — North Hardin, Central Hardin, or John Hardin — is essential for families with school-aged children.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding school zones near fort knox — hardin county schools explained is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "VA Minimum Property Requirements — what they mean for your search",
            content: `This lesson covers: VA Minimum Property Requirements — what they mean for your search

**What you will learn**

What VA appraisers check beyond market value is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

VA appraisers verify both market value and Minimum Property Requirements. MPRs ensure the property is safe, structurally sound, and sanitary. Most standard maintained homes pass without issue.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding va minimum property requirements — what they mean for your search is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Red flags in the Fort Knox rental market vs. buying market",
            content: `This lesson covers: Red flags in the Fort Knox rental market vs. buying market

**What you will learn**

What to watch out for when buying near Fort Knox is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

The Fort Knox market has specific characteristics that create both opportunities and risks for buyers. Understanding the red flags specific to this market protects you from common mistakes.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding red flags in the fort knox rental market vs. buying market is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useAcademyAuth, hasActiveSubscription } from "@/lib/useAcademyAuth";
import CourseLayout from "@/components/CourseLayout";
import { creditRepairLessons } from "@/lib/academyCourseContent/creditRepairBeforeYouBuy";
import { affordabilityLessons } from "@/lib/academyCourseContent/howMuchHouseCanYouAfford";
import { badCreditLessons } from "@/lib/academyCourseContent/buyingBadCreditThinCredit";
import { kyLoanProgramsLessons } from "@/lib/academyCourseContent/kyLoanProgramsExplained";
import { biddingWarLessons } from "@/lib/academyCourseContent/biddingWarWithoutOverpaying";
import { inspectionDeepDiveLessons } from "@/lib/academyCourseContent/homeInspectionDeepDive";
import { appraisalGapLessons } from "@/lib/academyCourseContent/appraisalGapsHandling";
import { fixerUpperLessons } from "@/lib/academyCourseContent/buyingFixerUpper";
import { newConstructionLessons } from "@/lib/academyCourseContent/buyingNewConstruction";
import { cosignerJointBuyerLessons } from "@/lib/academyCourseContent/cosignerJointBuyer";
import { kyAttorneyClosingLessons } from "@/lib/academyCourseContent/kyAttorneyClosingExplained";
import { pricingToSellLessons } from "@/lib/academyCourseContent/pricingToSellFastAndHigh";
import { preppingOnBudgetLessons } from "@/lib/academyCourseContent/preppingHomeOnBudget";

const CONTENT_MAP: Record<string, typeof creditRepairLessons> = {
  "credit-repair-before-you-buy": creditRepairLessons,
  "how-much-house-can-you-afford": affordabilityLessons,
  "buying-with-bad-credit-or-thin-credit": badCreditLessons,
  "every-kentucky-loan-program-explained": kyLoanProgramsLessons,
  "bidding-war-without-overpaying": biddingWarLessons,
  "home-inspection-deep-dive": inspectionDeepDiveLessons,
  "appraisal-gaps-how-to-handle-them": appraisalGapLessons,
  "buying-a-fixer-upper": fixerUpperLessons,
  "buying-new-construction-in-kentucky": newConstructionLessons,
  "buying-with-a-cosigner-or-joint-buyer": cosignerJointBuyerLessons,
  "the-kentucky-attorney-closing-explained": kyAttorneyClosingLessons,
  "pricing-your-home-to-sell-fast-and-high": pricingToSellLessons,
  "prepping-your-home-on-a-budget": preppingOnBudgetLessons,
};

export default function AcademyWatchClient({ slug, courseTitle }: { slug: string; courseTitle: string }) {
  const { user, loading } = useAcademyAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) { setChecking(false); return; }
    hasActiveSubscription(user.id).then((access) => {
      setHasAccess(access);
      setChecking(false);
    });
  }, [user]);

  if (loading || checking) return null;

  if (!user || !hasAccess) {
    return (
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", textAlign: "center", background: "var(--bg-soft)", minHeight: "70vh" }}>
        <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
          {!user ? "Log in to access this course" : "Subscribe to unlock this course"}
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
          {!user ? "Create a free account or log in to continue." : "This course is part of the full Academy subscription."}
        </p>
        <a href={!user ? "/academy/login" : `/academy/${slug}`} className="btn-primary">
          {!user ? "Log In" : "View Subscription Options"}
        </a>
      </main>
    );
  }

  const lessons = CONTENT_MAP[slug];

  if (!lessons) {
    return (
      <main style={{ paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center" }}>
        <p>Lesson content for this course is coming soon.</p>
      </main>
    );
  }

  return (
    <CourseLayout
      moduleNum="1"
      moduleTitle={courseTitle}
      totalModules={1}
      prevModule={null}
      nextModule={null}
      lessons={lessons}
    />
  );
}

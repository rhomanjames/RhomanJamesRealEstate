"use client";
import { useEffect, useState } from "react";
import { useAcademyAuth, hasActiveSubscription } from "@/lib/useAcademyAuth";
import CourseLayout from "@/components/CourseLayout";

// Flat single-module courses (5-9 lessons, no sub-modules)
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
import { sellingInheritedHomeLessons } from "@/lib/academyCourseContent/sellingInheritedHome";
import { sellingDuringDivorceLessons } from "@/lib/academyCourseContent/sellingDuringDivorce";
import { downsizingSellersGuideLessons } from "@/lib/academyCourseContent/downsizingSellersGuide";
import { fsboLessons } from "@/lib/academyCourseContent/fsboWhatYoureSigningUpFor";

// Multi-module courses (several modules, each with their own lessons)
import { multipleOffersModules } from "@/lib/academyCourseContent/handlingMultipleOffers";
import { negotiatingRepairsModules } from "@/lib/academyCourseContent/negotiatingRepairsAfterInspection";
import { underwaterSellingModules } from "@/lib/academyCourseContent/underwaterSelling";
import { stagingZeroBudgetModules } from "@/lib/academyCourseContent/stagingOnZeroBudget";

const FLAT_CONTENT_MAP: Record<string, typeof creditRepairLessons> = {
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
  "selling-an-inherited-home": sellingInheritedHomeLessons,
  "selling-during-a-divorce": sellingDuringDivorceLessons,
  "downsizing-a-sellers-guide": downsizingSellersGuideLessons,
  "for-sale-by-owner-what-youre-signing-up-for": fsboLessons,
};

const MODULE_CONTENT_MAP: Record<string, typeof multipleOffersModules> = {
  "handling-multiple-offers-like-a-pro": multipleOffersModules,
  "negotiating-repairs-after-inspection": negotiatingRepairsModules,
  "selling-while-you-still-owe-more-than-its-worth": underwaterSellingModules,
  "staging-on-zero-budget": stagingZeroBudgetModules,
};

export default function AcademyWatchClient({ slug, courseTitle }: { slug: string; courseTitle: string }) {
  const { user, loading } = useAcademyAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [checking, setChecking] = useState(true);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

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

  // Multi-module course
  const modules = MODULE_CONTENT_MAP[slug];
  if (modules) {
    const currentModule = modules[activeModuleIndex];
    return (
      <>
        {/* Module switcher tabs */}
        <div style={{ background: "white", borderBottom: "1px solid var(--border)", paddingTop: "5.5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.75rem" }}>
            {modules.map((mod, i) => (
              <button
                key={mod.num}
                onClick={() => setActiveModuleIndex(i)}
                style={{
                  flexShrink: 0, padding: "0.6rem 1.1rem", borderRadius: "10px", cursor: "pointer",
                  border: i === activeModuleIndex ? "1px solid var(--blue)" : "1px solid var(--border)",
                  background: i === activeModuleIndex ? "var(--blue-pale)" : "white",
                  color: i === activeModuleIndex ? "var(--blue)" : "var(--muted)",
                  fontSize: "0.82rem", fontWeight: 600, whiteSpace: "nowrap",
                }}
              >
                Module {mod.num}: {mod.title}
              </button>
            ))}
          </div>
        </div>

        <CourseLayout
          key={activeModuleIndex}
          moduleNum={currentModule.num}
          moduleTitle={currentModule.title}
          totalModules={modules.length}
          prevModule={null}
          nextModule={null}
          lessons={currentModule.lessons}
        />

        {/* Override default Link-based module nav with in-page state switching */}
        <style>{`
          .course-main a[href="#"] { pointer-events: none; }
        `}</style>
        <div style={{ maxWidth: 780, margin: "-4rem auto 3rem", padding: "0 1.5rem", display: "flex", justifyContent: "space-between" }}>
          {activeModuleIndex > 0 ? (
            <button onClick={() => setActiveModuleIndex(activeModuleIndex - 1)} className="btn-outline" style={{ cursor: "pointer", fontSize: "0.82rem" }}>
              ← Module {modules[activeModuleIndex - 1].num}
            </button>
          ) : <span />}
          {activeModuleIndex < modules.length - 1 && (
            <button onClick={() => setActiveModuleIndex(activeModuleIndex + 1)} className="btn-primary" style={{ cursor: "pointer", border: "none", fontSize: "0.82rem" }}>
              Module {modules[activeModuleIndex + 1].num} →
            </button>
          )}
        </div>
      </>
    );
  }

  // Flat single-module course
  const lessons = FLAT_CONTENT_MAP[slug];

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

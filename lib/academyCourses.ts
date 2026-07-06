// ─────────────────────────────────────────────────────────────
// ACADEMY COURSE CATALOG
// Add new courses here. Nothing else needs to change to add a
// course to the catalog page — just add an entry to this array.
// ─────────────────────────────────────────────────────────────

export interface AcademyCourse {
  slug: string;                 // URL: /academy/[slug]
  title: string;
  city: string;                 // "Elizabethtown", "Louisville", "Lexington", "Bowling Green"
  tagline: string;              // one-line sales hook
  description: string;          // longer sales-page description
  price: number;                // in USD, e.g. 49 for $49. 0 = free
  originalPrice?: number;       // for showing a "was $X" discount
  tag: string;                  // badge shown on catalog card, e.g. "Military"
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  modules: number;
  lessons: number;
  estimatedHours: number;
  stripePaymentLink: string;    // Stripe Payment Link URL — set after creating the product in Stripe
  legacyFreeHref?: string;      // if this course also exists as a free page on the main site
  outcomes: string[];           // "what you'll learn" bullet list
  featured?: boolean;           // show prominently on catalog page
}

export const academyCourses: AcademyCourse[] = [
  {
    slug: "kentucky-home-buyers",
    title: "The Kentucky Home Buyers Course",
    city: "Elizabethtown",
    tagline: "Everything you need to buy a home in Kentucky, from credit score to keys.",
    description: "Six modules, thirty lessons, written specifically for buyers in Elizabethtown and Hardin County. Covers KHC down payment assistance, every Kentucky loan type, Kentucky attorney closings, and real local market data.",
    price: 0,
    tag: "Buyers",
    level: "Beginner",
    modules: 6,
    lessons: 30,
    estimatedHours: 3,
    stripePaymentLink: "",
    legacyFreeHref: "/course",
    outcomes: [
      "Know exactly how much you need to buy in Kentucky",
      "Understand FHA, VA, USDA, Conventional, and KHC loan programs",
      "Navigate Kentucky attorney closings with confidence",
      "Avoid the mistakes that cost buyers thousands",
    ],
    featured: true,
  },
  {
    slug: "kentucky-home-sellers",
    title: "The Kentucky Home Sellers Course",
    city: "Elizabethtown",
    tagline: "Price it right, prepare it well, and sell for more.",
    description: "A complete guide to selling your home in Hardin County — pricing strategy, preparation, disclosures, negotiating offers, and closing day.",
    price: 0,
    tag: "Sellers",
    level: "Beginner",
    modules: 6,
    lessons: 28,
    estimatedHours: 3,
    stripePaymentLink: "",
    legacyFreeHref: "/sellers-course",
    outcomes: [
      "Price your home using real comparable sales, not guesswork",
      "Know which repairs are worth the money before listing",
      "Understand Kentucky seller disclosure requirements",
      "Handle multiple offers like a pro",
    ],
  },
  {
    slug: "fort-knox-pcs-bootcamp",
    title: "Fort Knox PCS Bootcamp",
    city: "Elizabethtown",
    tagline: "The military home-buying guide built specifically for Fort Knox.",
    description: "Everything a Fort Knox family needs — VA loans, BAH strategy, on-post vs off-post math, and buying a home remotely before you arrive.",
    price: 0,
    tag: "Military",
    level: "Beginner",
    modules: 6,
    lessons: 26,
    estimatedHours: 2.5,
    stripePaymentLink: "",
    legacyFreeHref: "/fort-knox-course",
    outcomes: [
      "Understand exactly how your BAH translates to buying power",
      "Know the real financial difference between on-post and off-post",
      "Buy a home remotely before your report date if needed",
      "Use your VA loan benefit correctly, including the funding fee exemption",
    ],
  },
  {
    slug: "first-time-buyer-bootcamp",
    title: "First-Time Homebuyer Bootcamp",
    city: "Elizabethtown",
    tagline: "Never bought a home before? Start here.",
    description: "A ground-up guide for first-time buyers — credit, KHC assistance, the entire process explained in plain English with no assumptions.",
    price: 0,
    tag: "First-Time Buyers",
    level: "Beginner",
    modules: 6,
    lessons: 24,
    estimatedHours: 2.5,
    stripePaymentLink: "",
    legacyFreeHref: "/first-time-bootcamp",
    outcomes: [
      "Understand your credit score and how to improve it fast",
      "Learn what KHC down payment assistance can cover",
      "Walk through the entire process before you start looking",
      "Know what never to do between pre-approval and closing",
    ],
  },
  {
    slug: "kentucky-investor-course",
    title: "The Kentucky Real Estate Investor Course",
    city: "Elizabethtown",
    tagline: "Build a rental portfolio in Hardin County, the right way.",
    description: "Cash flow analysis, financing strategy, and how military rotation at Fort Knox creates a uniquely stable rental market.",
    price: 0,
    tag: "Investors",
    level: "Intermediate",
    modules: 6,
    lessons: 22,
    estimatedHours: 2.5,
    stripePaymentLink: "",
    legacyFreeHref: "/investor-course",
    outcomes: [
      "Run real cash flow numbers on a Hardin County rental",
      "Understand DSCR loans and multi-unit VA financing",
      "Build a strategy around Fort Knox rental demand",
      "Know what a good cap rate looks like locally",
    ],
  },

  {
    slug: "louisville-relocation-guide",
    title: "Moving to Louisville, KY: The Complete Buyer's Guide",
    city: "Louisville",
    tagline: "Cross-shopping Louisville and Elizabethtown? Know both markets before you decide.",
    description: "A market-overview course for buyers comparing Louisville to smaller Hardin County communities — commute reality, neighborhood price tiers, and how far your money goes in each direction on I-65.",
    price: 39,
    tag: "Relocation",
    level: "Beginner",
    modules: 4,
    lessons: 16,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Compare Louisville neighborhood price tiers against Hardin County alternatives",
      "Understand the real commute tradeoffs along the I-65 corridor",
      "Know which Louisville suburbs offer the best value for families",
      "Avoid overpaying by understanding what drives Louisville pricing",
    ],
  },
  {
    slug: "lexington-relocation-guide",
    title: "Moving to Lexington, KY: The Complete Buyer's Guide",
    city: "Lexington",
    tagline: "A hometown perspective on buying in the Bluegrass.",
    description: "Built from firsthand knowledge of growing up in Lexington — horse country charm, UK-driven rental demand, and how Lexington's market compares to smaller Kentucky cities for buyers weighing their options.",
    price: 39,
    tag: "Relocation",
    level: "Beginner",
    modules: 4,
    lessons: 16,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Understand Lexington's neighborhood character from someone who grew up there",
      "Know how University of Kentucky drives rental and resale demand",
      "Compare Lexington's cost of living against other Kentucky cities",
      "Identify up-and-coming Lexington-area neighborhoods worth watching",
    ],
  },
  {
    slug: "bowling-green-relocation-guide",
    title: "Moving to Bowling Green, KY: The Complete Buyer's Guide",
    city: "Bowling Green",
    tagline: "Kentucky's fastest-growing small city, explained for buyers.",
    description: "A market overview for buyers considering Bowling Green — WKU's impact on the rental market, the Corvette plant's economic influence, and how it compares to Elizabethtown for families and investors alike.",
    price: 39,
    tag: "Relocation",
    level: "Beginner",
    modules: 4,
    lessons: 16,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Understand what's driving Bowling Green's rapid growth",
      "Know how WKU affects the local rental and resale market",
      "Compare Bowling Green and Elizabethtown side by side",
      "Identify the best neighborhoods for families versus investors",
    ],
  },

  {
    slug: "credit-repair-before-you-buy",
    title: "Credit Repair Before You Buy",
    city: "Elizabethtown",
    tagline: "A complete, step-by-step system for raising your credit score before you apply for a mortgage.",
    description: "Nine in-depth lessons covering exactly how your score is calculated, how to dispute real errors, the fastest legitimate ways to improve utilization, how to handle collections and charge-offs, and a full 90-day action plan sequenced for maximum impact before you apply for a home loan.",
    price: 39,
    tag: "Money & Mindset",
    level: "Beginner",
    modules: 1,
    lessons: 9,
    estimatedHours: 2.5,
    stripePaymentLink: "",
    outcomes: [
      "Understand exactly which five factors control your credit score and how much each one matters",
      "Know how to dispute genuine errors correctly and what to expect from the process",
      "Master the fastest legitimate lever available: credit utilization strategy",
      "Handle collections, charge-offs, and old debt with a clear, informed strategy",
      "Follow a complete 90-day action plan sequenced specifically for a mortgage timeline",
    ],
    featured: true,
  },
  {
    slug: "how-much-house-can-you-afford",
    title: "How Much House Can You Actually Afford",
    city: "Elizabethtown",
    tagline: "Build your real number — not the bank's number — before you start looking at homes.",
    description: "Eight in-depth lessons walking you through the true cost of homeownership: the difference between what a lender approves and what you can actually afford, gross vs. net income, full PITI, hidden ownership costs, debt-to-income ratio, down payment tradeoffs, and a complete step-by-step worksheet to calculate your real, honest budget.",
    price: 39,
    tag: "Money & Mindset",
    level: "Beginner",
    modules: 1,
    lessons: 8,
    estimatedHours: 2,
    stripePaymentLink: "",
    outcomes: [
      "Understand why a lender's pre-approval number is not the number you should spend",
      "Calculate your real budget using net income, not gross income",
      "Know the true full cost of a mortgage payment, including taxes, insurance, and PMI",
      "Budget for the hidden costs of homeownership most new buyers miss entirely",
      "Build a complete, personalized affordability worksheet you can actually use",
    ],
    featured: true,
  },
  {
    slug: "buying-with-bad-credit-or-thin-credit",
    title: "Buying With Bad Credit or Thin Credit",
    city: "Elizabethtown",
    tagline: "Real paths to a mortgage, whether you have credit damage or barely any credit history at all.",
    description: "Eight in-depth lessons distinguishing bad credit from thin credit, the loan programs and compensating factors that can offset a lower score, the fastest legitimate ways to build a thin file, how manual underwriting actually works, co-signer considerations, Kentucky-specific assistance programs, and a complete action plan based on your specific situation.",
    price: 39,
    tag: "Buyers",
    level: "Beginner",
    modules: 1,
    lessons: 8,
    estimatedHours: 2,
    stripePaymentLink: "",
    outcomes: [
      "Know whether your situation is bad credit, thin credit, or both — and why the strategy differs",
      "Understand which loan programs and compensating factors work in your favor",
      "Build a thin credit file quickly using proven, low-risk strategies",
      "Understand exactly what manual underwriting involves and how to find a lender who does it well",
      "Know which Kentucky-specific programs exist to support credit-challenged buyers",
    ],
    featured: true,
  },

  {
    slug: "every-kentucky-loan-program-explained",
    title: "Every Kentucky Loan Program Explained",
    city: "Elizabethtown",
    tagline: "Conventional, FHA, VA, USDA, and KHC assistance — compared side by side so you know exactly which one fits you.",
    description: "Seven in-depth lessons covering how to think about loan programs, a full breakdown of conventional, FHA, VA, and USDA loans, Kentucky Housing Corporation down payment assistance explained in detail, and a complete side-by-side comparison framework to identify which program actually fits your specific credit, income, and eligibility.",
    price: 39,
    tag: "Buyers",
    level: "Beginner",
    modules: 1,
    lessons: 7,
    estimatedHours: 2,
    stripePaymentLink: "",
    outcomes: [
      "Understand the four questions that actually differentiate one loan program from another",
      "Know the real tradeoffs between conventional and FHA financing, including long-term PMI costs",
      "Understand VA's unique advantages for eligible military buyers",
      "Know whether USDA's zero-down option applies to your target property",
      "Understand how KHC down payment assistance can pair with any of these programs",
    ],
    featured: true,
  },
  {
    slug: "bidding-war-without-overpaying",
    title: "How to Win a Bidding War Without Overpaying",
    city: "Elizabethtown",
    tagline: "Compete effectively in a multiple-offer situation without losing your financial discipline.",
    description: "Five in-depth lessons covering what actually creates competitive situations, the real pre-approval strength sellers look for, smart price strategy that protects your budget, the non-price terms that often win over the highest bidder, and a complete competitive offer checklist you can use every time.",
    price: 39,
    tag: "Buyers",
    level: "Intermediate",
    modules: 1,
    lessons: 5,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Understand what conditions actually create a bidding war in the first place",
      "Know what real financing strength looks like from a seller's perspective",
      "Set a real price ceiling and stick to it under competitive pressure",
      "Use non-price terms strategically to win without simply paying more",
    ],
  },
  {
    slug: "home-inspection-deep-dive",
    title: "The Home Inspection Deep Dive",
    city: "Elizabethtown",
    tagline: "Know exactly what an inspection covers, what it doesn't, and how to prioritize what actually matters.",
    description: "Five in-depth lessons covering what a home inspection actually is and isn't, how to choose the right inspector, what to look for in roof and structural findings, electrical/plumbing/HVAC considerations, and how to read a full report and prioritize real issues over routine maintenance notes.",
    price: 39,
    tag: "Buyers",
    level: "Beginner",
    modules: 1,
    lessons: 5,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Understand the real scope and limits of a standard home inspection",
      "Know how to choose an inspector who will actually be thorough",
      "Recognize the difference between minor settling and serious structural concern",
      "Prioritize safety and major system findings over routine maintenance items",
    ],
  },
  {
    slug: "appraisal-gaps-how-to-handle-them",
    title: "Appraisal Gaps and How to Handle Them",
    city: "Elizabethtown",
    tagline: "What actually happens when a home appraises below your offer price, and every realistic path forward.",
    description: "Five in-depth lessons covering exactly what an appraisal gap is, how the appraisal contingency protects you, every realistic option when a gap occurs, how to formally request a reconsideration of value, and how to reduce your risk of facing a gap in the first place.",
    price: 39,
    tag: "Buyers",
    level: "Intermediate",
    modules: 1,
    lessons: 5,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Understand exactly why an appraisal gap creates a financing problem",
      "Know what waiving an appraisal contingency actually commits you to",
      "Understand all five realistic paths forward when a gap occurs",
      "Know how to formally challenge an appraisal that contains real errors",
    ],
  },
  {
    slug: "buying-a-fixer-upper",
    title: "Buying a Fixer-Upper",
    city: "Elizabethtown",
    tagline: "An honest, complete guide to whether a renovation project is actually the right decision for you.",
    description: "Five in-depth lessons covering an honest self-assessment before you look, the critical difference between cosmetic and structural issues, how to get renovation estimates you can trust, real financing options for renovation projects, and a complete final decision framework for any specific property.",
    price: 39,
    tag: "Buyers",
    level: "Intermediate",
    modules: 1,
    lessons: 5,
    estimatedHours: 1.5,
    stripePaymentLink: "",
    outcomes: [
      "Honestly assess your own financial and emotional readiness for a renovation project",
      "Distinguish between lower-risk cosmetic work and higher-risk structural issues",
      "Get renovation estimates you can actually rely on, with a proper contingency built in",
      "Understand FHA 203(k), HomeStyle, and VA renovation financing options",
    ],
  },

  // ── FUTURE PAID COURSES GO HERE ──
  // Example template for a new paid course:
  // {
  //   slug: "your-new-course-slug",
  //   title: "Course Title",
  //   tagline: "One sentence hook",
  //   description: "Longer sales description...",
  //   price: 49,
  //   originalPrice: 79,
  //   tag: "Category",
  //   level: "Beginner",
  //   modules: 4,
  //   lessons: 20,
  //   estimatedHours: 2,
  //   stripePaymentLink: "https://buy.stripe.com/xxxxx",
  //   outcomes: ["...", "...", "...", "..."],
  // },
];

export function getCourseBySlug(slug: string): AcademyCourse | undefined {
  return academyCourses.find((c) => c.slug === slug);
}

export function getFreeCourses(): AcademyCourse[] {
  return academyCourses.filter((c) => c.price === 0);
}

export function getPaidCourses(): AcademyCourse[] {
  return academyCourses.filter((c) => c.price > 0);
}

export function getCoursesByCity(city: string): AcademyCourse[] {
  return academyCourses.filter((c) => c.city === city);
}

export function getAllCities(): string[] {
  return Array.from(new Set(academyCourses.map((c) => c.city)));
}

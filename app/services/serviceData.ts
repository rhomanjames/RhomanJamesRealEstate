export interface ServicePage {
  slug: string;
  num: string;
  title: string;
  shortDesc: string;
  metaDescription: string;
  tagline: string;
  heroSubtitle: string;
  intro: string[];
  steps: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  cta: string;
}

export const services: ServicePage[] = [
  {
    slug: "buying-a-home",
    num: "01",
    title: "Buying a Home",
    shortDesc:
      "I'll help you find the right property in Elizabethtown, negotiate the best terms, and guide you through inspections, financing, and closing — every step of the way.",
    metaDescription:
      "Ready to buy a home in Elizabethtown, KY? Rhoman James guides buyers through every step — search, negotiation, inspection, and closing. Free consultation.",
    tagline: "Find the right home. Pay the right price. Close with confidence.",
    heroSubtitle:
      "Expert buyer representation in Elizabethtown, Radcliff, Vine Grove, and all of Hardin County.",
    intro: [
      "Buying a home is one of the largest financial decisions you will make — and in today's market, having the right representation is not optional. I work exclusively for you as a buyer, never the seller, which means every recommendation I make is in your best interest.",
      "From your first search to the moment you hold the keys, I bring local market expertise, skilled negotiation, and clear communication to every step. My job is to make sure you find the right home at the right price, with no surprises at closing.",
    ],
    steps: [
      {
        title: "1. Buyer Consultation",
        body: "We start with a free conversation — in person, by phone, or video. I learn about your goals, timeline, must-haves, and budget. You leave knowing exactly what to expect from the process.",
      },
      {
        title: "2. Mortgage Pre-Approval",
        body: "Before we tour a single property, I connect you with a trusted local lender to get pre-approved. This defines your budget, strengthens your offer, and prevents you from losing a home you love to a more prepared buyer.",
      },
      {
        title: "3. Targeted Home Search",
        body: "I set up a custom search based on your specific criteria — neighborhood, school zone, size, style, and price range. You receive new listings the moment they hit the market, before they appear on public sites.",
      },
      {
        title: "4. Showings & Honest Feedback",
        body: "I tour every property with you and give you candid assessments — not just what you want to hear. I point out concerns as readily as I highlight strengths, so you make decisions with complete information.",
      },
      {
        title: "5. Strategic Offer",
        body: "When you find the right home, I analyze comparable sales, assess the seller's situation, and craft an offer designed to win — without overpaying. In competitive situations, I use escalation clauses and strategic terms to strengthen your position.",
      },
      {
        title: "6. Inspection & Negotiation",
        body: "I attend your inspection and help you understand the report. If issues arise, I negotiate repairs, credits, or price reductions on your behalf — protecting your investment before you close.",
      },
      {
        title: "7. Clear to Close",
        body: "I coordinate with your lender, the title company, and the listing agent to keep every deadline on track. You will always know where things stand — no surprises, no last-minute scrambles.",
      },
      {
        title: "8. Closing Day",
        body: "We review every document before you sign. You close with full confidence in what you own and what you paid, and you leave with the keys to your new home.",
      },
    ],
    benefits: [
      {
        title: "Zero Cost to You",
        body: "In most transactions, buyer representation costs you nothing out of pocket. The seller pays the commission. You get full professional representation for free.",
      },
      {
        title: "Local Market Knowledge",
        body: "I know which Elizabethtown neighborhoods are appreciating, which streets to avoid, and what comparable homes actually sold for — not just list prices.",
      },
      {
        title: "Skilled Negotiation",
        body: "Most buyers leave money on the table or lose homes they want because they negotiate without strategy. I have a process, and it works.",
      },
      {
        title: "No Pressure, No Rush",
        body: "I am not in the business of pushing buyers into homes. When the right property appears, you will know — and I will be ready to move fast.",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to use a buyer's agent in Kentucky?",
        answer:
          "In most transactions, buyer representation costs you nothing out of pocket. The seller covers the commission at closing. You receive full professional representation — search, negotiation, contract review, inspection guidance, and closing coordination — at no direct cost to you. I explain the Buyer Representation Agreement clearly before we start so there are no surprises.",
      },
      {
        question: "How long does it take to buy a home in Elizabethtown, KY?",
        answer:
          "From accepted offer to closing, the typical timeline is 30 to 45 days when financing is involved. The search process varies — some buyers find the right home in two weeks, others take two months. I work at your pace, not mine.",
      },
      {
        question: "Do I need to be pre-approved before working with you?",
        answer:
          "Not before our first conversation — but before we start touring homes, yes. Pre-approval protects you from falling in love with a home outside your budget and ensures sellers take your offer seriously. I can connect you with a trusted local lender the same day we speak.",
      },
    ],
    cta: "Ready to start your home search?",
  },
  {
    slug: "selling-your-home",
    num: "02",
    title: "Selling Your Home",
    shortDesc:
      "From pricing strategy to professional marketing and open houses, I'll position your home to attract serious buyers and achieve maximum value in today's market.",
    metaDescription:
      "Selling your home in Elizabethtown, KY? Rhoman James delivers strategic pricing, professional marketing, and skilled negotiation to maximize your sale price. Free home valuation.",
    tagline: "Priced right. Marketed well. Sold for what it's worth.",
    heroSubtitle:
      "Strategic listing services for Hardin County homeowners ready to sell with confidence.",
    intro: [
      "Selling your home is not just about putting a sign in the yard and waiting. The difference between a home that sits on the market and one that generates multiple offers within the first week almost always comes down to pricing strategy, presentation, and marketing reach.",
      "I provide every seller with an honest, data-driven market evaluation, a tailored preparation plan, and professional marketing designed to attract serious buyers — not just generate traffic. My goal is to put the maximum amount of money in your pocket, in the shortest reasonable time, with the least disruption to your life.",
    ],
    steps: [
      {
        title: "1. Free Home Valuation",
        body: "I conduct a thorough Comparative Market Analysis using recent sales within your neighborhood, your home's specific condition and features, and current market demand. No algorithms, no guesses — real local data.",
      },
      {
        title: "2. Pricing Strategy",
        body: "Pricing is the single most important decision in your sale. Too high and buyers skip you. Too low and you leave money behind. I give you a data-backed pricing recommendation with a clear rationale — and I tell you the truth, even when it is not what you hoped to hear.",
      },
      {
        title: "3. Pre-Listing Preparation",
        body: "I walk through your home before we list and give you a prioritized prep list — what to fix, what to stage, and what to leave alone. I focus on what actually moves buyers in the current Elizabethtown market, not generic advice.",
      },
      {
        title: "4. Professional Photography",
        body: "Most buyers see your home online before they ever set foot in it. Professional photography is non-negotiable for serious listings. Every home I list is photographed professionally.",
      },
      {
        title: "5. Maximum Market Exposure",
        body: "Your listing reaches buyers through the MLS, Zillow, Realtor.com, Homes.com, social media, and my professional network of buyer's agents. Every channel working together from day one.",
      },
      {
        title: "6. Showings & Feedback",
        body: "I manage showing requests, follow up with every showing agent for feedback, and keep you informed after every visit. You always know what buyers are saying.",
      },
      {
        title: "7. Offer Review & Negotiation",
        body: "When offers arrive, I break down every term — not just price. Financing type, closing date, contingencies, and concessions all affect your net. I negotiate on your behalf to maximize the final outcome.",
      },
      {
        title: "8. Contract to Close",
        body: "Once under contract, I coordinate inspections, the appraisal, buyer financing, and closing logistics. My job is to keep the deal together and make sure you reach closing day without surprises.",
      },
    ],
    benefits: [
      {
        title: "Honest Pricing",
        body: "I will not tell you what you want to hear to win your listing. Overpriced homes sit, stigmatize, and eventually sell for less. I price to sell at maximum value.",
      },
      {
        title: "Professional Photography — Every Listing",
        body: "Not a \"nice to have.\" Professional photos are standard on every home I list. Buyers decide within seconds online whether to schedule a showing.",
      },
      {
        title: "Full MLS & Syndication",
        body: "Your home appears on every major platform buyers use — instantly and completely. Maximum exposure from day one.",
      },
      {
        title: "Transparent Communication",
        body: "You will never wonder what is happening with your listing. I provide regular updates, showing feedback summaries, and honest market reads throughout.",
      },
    ],
    faqs: [
      {
        question: "How do I know what my home is worth in Elizabethtown, KY?",
        answer:
          "The most accurate answer comes from a Comparative Market Analysis conducted by a local agent using actual recent sales data — not an online estimate. Zillow's Zestimate is notoriously inaccurate in Elizabethtown because local data is incomplete. I provide free, no-obligation CMAs and walk you through the methodology so you understand the number, not just receive it.",
      },
      {
        question: "How long will it take to sell my home?",
        answer:
          "Well-priced, well-presented homes in Elizabethtown regularly go under contract within the first two weeks — sometimes faster. Overpriced homes can sit for months and typically sell for less than they would have if priced correctly from the start. Preparation and pricing are the two variables I control on your behalf.",
      },
      {
        question: "What does it cost to sell a home in Kentucky?",
        answer:
          "Sellers in Kentucky typically pay: real estate commission (negotiated and paid at closing), Kentucky deed transfer tax ($0.50 per $500 of sale price), deed preparation fee, prorated property taxes, and any agreed buyer concessions. I provide a complete seller net sheet before you list so you know your exact take-home before signing anything.",
      },
    ],
    cta: "Want to know what your home is worth?",
  },
  {
    slug: "market-analysis",
    num: "03",
    title: "Market Analysis",
    shortDesc:
      "Thinking about your next move? I offer detailed, no-pressure market evaluations so you can make informed decisions based on real, current Hardin County data.",
    metaDescription:
      "Get a free Hardin County market analysis from Rhoman James. Real data on Elizabethtown home values, sales trends, and market conditions — no pressure, no obligation.",
    tagline: "Real data. Honest perspective. No pressure.",
    heroSubtitle:
      "Free Comparative Market Analyses for homeowners and buyers across Hardin County.",
    intro: [
      "Whether you are thinking about selling, curious about your home's current value, or trying to understand the market before you buy, a Comparative Market Analysis (CMA) gives you the ground truth — not a guess, not an algorithm.",
      "I provide free, detailed market analyses with no obligation and no sales pressure. My goal is to make sure you have accurate information to make the best decision for your situation, whatever that turns out to be.",
    ],
    steps: [
      {
        title: "1. Tell Me About Your Property",
        body: "We start with a brief conversation or a quick form — your address, square footage, number of bedrooms and baths, any recent updates, and your general goals.",
      },
      {
        title: "2. I Research the Data",
        body: "I pull recent comparable sales within your neighborhood and price range, analyze active competition, and assess current demand indicators specific to your area of Hardin County.",
      },
      {
        title: "3. You Receive a Detailed Analysis",
        body: "Not just a number — a full picture. You see the comps I used, how they compare to your property, current market trends, and a realistic value range with a recommended list price if you were to sell today.",
      },
      {
        title: "4. We Talk Through It",
        body: "I walk you through the analysis and answer every question. No rush, no agenda. Your job is to understand it. My job is to explain it clearly.",
      },
    ],
    benefits: [
      {
        title: "Completely Free",
        body: "No cost, no obligation, no pressure. A market analysis is a conversation tool, not a sales trap.",
      },
      {
        title: "Real Local Data",
        body: "I use actual closed sales from the Elizabethtown and Hardin County market — not national algorithms that do not understand your neighborhood.",
      },
      {
        title: "Useful Whether or Not You Sell",
        body: "Understanding your home's value is useful for financial planning, estate planning, refinancing decisions, and more — not just for active sellers.",
      },
      {
        title: "No Obligation to List",
        body: "Many homeowners request a CMA annually just to stay informed. There is no expectation that this conversation leads to a listing.",
      },
    ],
    faqs: [
      {
        question: "What is a Comparative Market Analysis (CMA)?",
        answer:
          "A CMA is a detailed analysis of recent home sales comparable to yours — similar size, condition, location, and features — used to estimate your home's current market value. Unlike an appraisal (which is conducted by a licensed appraiser for lending purposes), a CMA is prepared by a real estate agent and is used for pricing decisions. It is the most practical and accessible way to understand what your home would sell for in the current market.",
      },
      {
        question: "How accurate is a CMA compared to a Zillow estimate?",
        answer:
          "Significantly more accurate for Elizabethtown and Hardin County. Zillow's algorithm relies on public records data that is often incomplete or lagging in Kentucky counties. A local agent's CMA uses actual MLS data — what homes really sold for, how long they sat, and what condition they were in. The difference in accuracy is meaningful and often amounts to tens of thousands of dollars in either direction.",
      },
      {
        question: "How often should I get a market analysis?",
        answer:
          "Once a year is a reasonable cadence for homeowners who want to stay informed on their equity position. If you are considering selling, refinancing, or making significant improvements, an updated CMA before the decision is always worthwhile. It costs nothing and takes very little of your time.",
      },
    ],
    cta: "Want a free market analysis for your home?",
  },
  {
    slug: "first-time-buyers",
    num: "04",
    title: "First-Time Buyers",
    shortDesc:
      "Buying your first home is one of life's biggest moments. I'll walk you through every term, document, and decision — patiently and thoroughly — until you hold the keys.",
    metaDescription:
      "First-time homebuyer in Elizabethtown, KY? Rhoman James guides you through every step — from pre-approval to closing day — with patience and local expertise. Free consultation.",
    tagline: "Your first home, done right — with someone patient enough to explain everything.",
    heroSubtitle:
      "Dedicated first-time buyer guidance in Elizabethtown and Hardin County, KY.",
    intro: [
      "Buying your first home involves a vocabulary you have never needed, a process you have never been through, and a financial commitment unlike anything before it. That can feel overwhelming — and it does not have to be.",
      "I work with first-time buyers regularly and genuinely enjoy the process of making it clear. Every term gets explained. Every document gets reviewed together. Every question gets a real answer. You will not feel rushed, pressured, or lost at any point — and you will walk away from closing day knowing exactly what you signed and why.",
    ],
    steps: [
      {
        title: "1. First Conversation — No Commitment",
        body: "We talk through where you are in the process, what you can realistically afford, what you are looking for, and what the timeline looks like. This is educational, not a sales pitch.",
      },
      {
        title: "2. Mortgage Pre-Approval Guidance",
        body: "I introduce you to lenders who specialize in first-time buyers — including those familiar with Kentucky Housing Corporation programs, FHA loans, VA loans, and USDA loans. I help you understand the difference between each before you apply.",
      },
      {
        title: "3. First-Time Buyer Education",
        body: "Before we tour a single home, I walk you through the full process — what each contingency means, what happens at inspection, what closing costs look like, and what to watch for in contracts. Knowledge removes anxiety.",
      },
      {
        title: "4. Finding the Right Home",
        body: "I listen carefully to what matters most to you and filter the search accordingly. I also point out things first-time buyers often miss — deferred maintenance, red flags in disclosures, neighborhood considerations.",
      },
      {
        title: "5. Your First Offer",
        body: "Writing your first offer is a significant moment. I walk you through every line of the contract, explain each contingency, and make sure you understand what you are agreeing to before you sign anything.",
      },
      {
        title: "6. Inspection — What to Expect",
        body: "Most first-time buyers are nervous before their first inspection. I attend it with you, help you understand what is significant versus cosmetic, and guide you on what to negotiate versus what to accept.",
      },
      {
        title: "7. Closing Day — Demystified",
        body: "Closing involves a lot of paperwork. I review the Closing Disclosure with you ahead of time so there are no surprises at the table. You sign knowing exactly what everything means.",
      },
    ],
    benefits: [
      {
        title: "Patient Explanation — Always",
        body: "There are no dumb questions. I have heard every first-time buyer question there is and I answer them all the same way: clearly and without making you feel like you should already know.",
      },
      {
        title: "Access to First-Time Buyer Programs",
        body: "Kentucky Housing Corporation offers down payment assistance and favorable loan terms for qualifying first-time buyers. I connect you with lenders who know these programs inside and out.",
      },
      {
        title: "No Pressure, Ever",
        body: "First-time buyers sometimes feel pushed into decisions. I am not in the business of rushing anyone into the most important purchase of their life.",
      },
      {
        title: "Free Representation",
        body: "Just like all buyer representation, first-time buyer services cost you nothing out of pocket. The seller covers the commission.",
      },
    ],
    faqs: [
      {
        question: "What first-time homebuyer programs are available in Kentucky?",
        answer:
          "Kentucky Housing Corporation (KHC) offers several programs including the Regular Down Payment Assistance Program (up to $10,000), below-market interest rate mortgages, and the Homebuyer Tax Credit. FHA loans allow down payments as low as 3.5%. VA loans offer zero down for eligible veterans. USDA loans offer zero down for rural-eligible properties. I match every first-time buyer with the program that fits their specific situation.",
      },
      {
        question: "How much do I need saved to buy my first home in Elizabethtown?",
        answer:
          "Less than most people assume. With a VA loan (zero down) or USDA loan (zero down), you primarily need funds for closing costs — typically 2% to 4% of the purchase price. FHA requires 3.5% down plus closing costs. KHC assistance can cover some or all of the down payment. On a $220,000 home with an FHA loan and KHC assistance, some buyers close with as little as $5,000 to $8,000 out of pocket. I give every first-time buyer a specific numbers breakdown early in our conversation.",
      },
      {
        question: "Is it better to keep renting or buy my first home in Elizabethtown?",
        answer:
          "In most cases in the Elizabethtown market, buying outperforms renting financially within two to three years. Rents have been rising, inventory is limited, and home values have appreciated steadily. Every dollar you pay in rent builds your landlord's equity, not yours. That said, buying only makes sense when your financial situation is stable, your timeline is at least two to three years, and you have done the math on the full cost of ownership. I run these numbers with every first-time buyer — honestly.",
      },
    ],
    cta: "Ready to take your first step toward homeownership?",
  },
  {
    slug: "relocation",
    num: "05",
    title: "Relocation",
    shortDesc:
      "Moving to the Elizabethtown area? I'll introduce you to the neighborhoods, schools, and communities that match your lifestyle — and make your transition seamless.",
    metaDescription:
      "Relocating to Elizabethtown, KY? Rhoman James helps out-of-state and military buyers find the right community, navigate the market remotely, and close with confidence.",
    tagline: "Move to Elizabethtown with confidence — even if you've never been here.",
    heroSubtitle:
      "Relocation specialist for incoming residents, military families, and remote buyers across Hardin County.",
    intro: [
      "Relocating to a new city means making one of the biggest decisions of your life with less information than you would like. You are choosing a community, schools, commute, and neighbors — often from hundreds of miles away, on a compressed timeline.",
      "I specialize in helping out-of-state buyers and military families navigate the Elizabethtown market remotely and efficiently. I know every neighborhood in Hardin County well enough to match your priorities to the right community before you ever visit — and I conduct detailed video walkthroughs, neighborhood tours, and remote consultations so you can make confident decisions without requiring multiple trips.",
    ],
    steps: [
      {
        title: "1. Relocation Consultation",
        body: "We start with a thorough conversation about your priorities — commute, schools, lifestyle, budget, timeline, and non-negotiables. I ask the questions most buyers do not think to ask until after they move in.",
      },
      {
        title: "2. Community Matching",
        body: "Based on your priorities, I narrow the search to the communities that genuinely fit. I give you an honest assessment of each option — including the tradeoffs — so you make an informed choice before committing to a neighborhood.",
      },
      {
        title: "3. Remote Search & Video Walkthroughs",
        body: "I conduct live video walkthroughs of every property you are serious about — showing you what the listing photos do not, including street context, neighbor proximity, and anything that gives you pause.",
      },
      {
        title: "4. Planned In-Person Visit (When Possible)",
        body: "When your schedule allows, I plan an efficient visit around your top contenders — maximizing your time on the ground and making sure you see what matters most in person.",
      },
      {
        title: "5. Remote Offer & Contract",
        body: "Everything can be handled electronically. Offers, contracts, and disclosures are signed digitally. I coordinate with your out-of-state lender or connect you with a local one who handles remote closings regularly.",
      },
      {
        title: "6. Closing from Anywhere",
        body: "Kentucky allows remote closings with a local attorney. You do not need to be physically present in Elizabethtown to close on your home. I coordinate every detail so the process is seamless regardless of where you are.",
      },
    ],
    benefits: [
      {
        title: "Remote-Ready Process",
        body: "Every step of the home-buying process can be conducted remotely. I have helped buyers purchase homes in Elizabethtown without ever physically visiting until moving day.",
      },
      {
        title: "Military PCS Expertise",
        body: "I understand the compressed timelines, VA loan process, and specific needs of military families PCS-ing to Fort Knox. I move at the pace the military requires.",
      },
      {
        title: "Community Expertise Beyond Real Estate",
        body: "I can speak to schools by specific zone, internet providers by street, neighborhood character by block, and commute realities by time of day. This is what a local expert provides.",
      },
      {
        title: "Single Point of Contact",
        body: "You should not have to coordinate between multiple people during a stressful relocation. I manage every piece of the transaction and keep you informed throughout.",
      },
    ],
    faqs: [
      {
        question: "Can I buy a home in Elizabethtown without visiting in person?",
        answer:
          "Yes — and I handle this regularly. I conduct detailed live video walkthroughs, provide thorough neighborhood context, and manage every step of the transaction remotely. Kentucky allows remote closings. Many of my relocation clients purchase without visiting until moving day and are consistently happy with the outcome because we take the time to get it right before any offer is submitted.",
      },
      {
        question: "How do I start a home search if I am relocating to Elizabethtown?",
        answer:
          "Call or email me as early as possible — ideally the moment you know you are moving. Early conversations help you understand the market, set realistic expectations, and give us time to be strategic. For PCS moves, I recommend starting the conversation as soon as orders arrive, even if the report date is months away.",
      },
      {
        question: "Which area is best for military families relocating to Fort Knox?",
        answer:
          "It depends on your priorities. Radcliff offers the shortest commute to Fort Knox's main gate and the strongest military community feel. Elizabethtown offers more amenities and school choices at a higher price point. Vine Grove splits the difference with affordability and quiet neighborhoods. I walk every incoming military family through this decision in our first conversation — there is no universal right answer, only the right answer for your specific situation.",
      },
    ],
    cta: "Relocating to Elizabethtown? Let's talk.",
  },
  {
    slug: "investment-properties",
    num: "06",
    title: "Investment Properties",
    shortDesc:
      "Hardin County's growth makes it a smart place to invest. I'll help you identify properties with strong fundamentals and guide you through the numbers.",
    metaDescription:
      "Investing in Elizabethtown or Hardin County real estate? Rhoman James helps investors identify cash-flow-positive properties, run the numbers, and close smart. Free consultation.",
    tagline: "Buy right. Rent well. Build wealth in Hardin County.",
    heroSubtitle:
      "Investment property guidance for Elizabethtown, Radcliff, and Hardin County — from single-family rentals to multi-unit acquisitions.",
    intro: [
      "Elizabethtown and Hardin County offer a combination that serious real estate investors look for: stable demand driven by Fort Knox, steady appreciation, affordable purchase prices, and rental yields that are increasingly hard to find in larger markets.",
      "I help investors identify properties with genuine fundamentals — not wishful thinking. That means running real numbers before you make an offer, understanding the rental market in specific neighborhoods, and avoiding the common mistakes that turn promising investments into expensive lessons.",
    ],
    steps: [
      {
        title: "1. Investment Strategy Session",
        body: "We start by defining your goals — cash flow, appreciation, short-term rental, multi-unit, or portfolio building. Strategy determines property type, which determines location, which determines price range. We get clear on all of it before we search.",
      },
      {
        title: "2. Market Analysis for Investors",
        body: "I pull rental comps, vacancy data, and recent sales for any submarket you are targeting. You see what similar properties actually rent for, how long they typically sit vacant, and what investors have paid for them recently.",
      },
      {
        title: "3. Property Identification",
        body: "I filter the market for properties that meet your criteria — not just properties that look good in photos. Condition, location, price relative to rent potential, and exit strategy viability all factor in.",
      },
      {
        title: "4. The Numbers — Before the Offer",
        body: "Before you commit to any property, we run the full analysis: purchase price, estimated rent, gross yield, cash-on-cash return, expenses (taxes, insurance, maintenance reserve, management if applicable), and net operating income. No surprises after closing.",
      },
      {
        title: "5. Acquisition",
        body: "I negotiate the purchase with the same discipline I apply to any transaction — targeting the price and terms that make the investment work, not just the price that wins the deal.",
      },
      {
        title: "6. Post-Close Support",
        body: "I connect investors with local property managers, contractors, and other resources to get properties rent-ready and performing. The relationship does not end at closing.",
      },
    ],
    benefits: [
      {
        title: "Fort Knox-Driven Demand",
        body: "Military PCS rotations create consistent, year-round rental demand. Tenant turnover is predictable, vacancy is low, and the tenant pool is deep — advantages most markets cannot match.",
      },
      {
        title: "Numbers-First Approach",
        body: "I will not recommend a property I would not underwrite myself. If the numbers do not work, I say so — regardless of how well the property shows.",
      },
      {
        title: "Affordable Entry Points",
        body: "Hardin County home prices remain accessible enough that cash-flow-positive acquisitions are achievable — a meaningful advantage in a national market where most metros have squeezed yields to near zero.",
      },
      {
        title: "Local Contractor & Manager Network",
        body: "I connect investors with vetted local property managers and contractors — the people who actually make an investment perform between tenants.",
      },
    ],
    faqs: [
      {
        question: "What kind of return can I expect on a rental property in Elizabethtown?",
        answer:
          "Returns vary by property, purchase price, and financing. In the Elizabethtown and Radcliff markets, well-selected single-family rentals have generated gross yields of 7% to 10% for investors buying at reasonable prices. Net cash-on-cash returns depend heavily on your financing terms and whether you self-manage or use a property manager. I model the full return for any property we are seriously considering before submitting an offer.",
      },
      {
        question: "Is Elizabethtown, KY a good real estate investment market?",
        answer:
          "For the right investor with the right strategy, yes. The Fort Knox employment base provides demand stability that most markets cannot replicate. Home prices are still low enough to generate cash flow. Appreciation has been consistent without being speculative. The risks are the same as any single market: local economic dependence on a government installation, and the need to select properties and locations carefully. I am candid about both the opportunity and the risks.",
      },
      {
        question: "Can I use a VA loan to buy an investment property near Fort Knox?",
        answer:
          "VA loans require owner-occupancy, so they cannot be used for a pure investment property. However, VA loans can be used to purchase 2 to 4 unit properties as long as you occupy one unit as your primary residence. This is one of the most powerful investment strategies available to veterans — zero down payment, no PMI, rental income from the other units, and full VA benefit on a property that builds wealth. I walk eligible veterans through this strategy regularly.",
      },
    ],
    cta: "Ready to invest in Hardin County real estate?",
  },
];

export const getService = (slug: string): ServicePage | undefined =>
  services.find((s) => s.slug === slug);

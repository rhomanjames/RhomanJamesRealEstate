export interface FAQ {
  question: string;
  answer: string;
  anchor: string;
}

export interface FAQCategory {
  category: string;
  slug: string;
  description: string;
  faqs: FAQ[];
}

export const faqData: FAQCategory[] = [
  {
    category: "Buying a Home in Elizabethtown, KY",
    slug: "buying",
    description: "Everything you need to know about purchasing a home in Elizabethtown and Hardin County.",
    faqs: [
      {
        question: "How much does it cost to buy a home in Elizabethtown, KY?",
        anchor: "home-cost-elizabethtown",
        answer:
          "Home prices in Elizabethtown, KY vary by neighborhood, size, and condition. As of 2025, the median home price in Elizabethtown typically ranges from the low $200s to the upper $300s, with luxury properties exceeding that. Neighborhoods near Fort Knox and the Helmwood Hills area tend to command higher prices, while areas like Radcliff and Vine Grove offer more affordable entry points. I provide free, no-obligation market analyses so you know exactly what to expect before you start searching.",
      },
      {
        question: "Is Elizabethtown, KY a good place to live?",
        anchor: "is-elizabethtown-good-place-to-live",
        answer:
          "Elizabethtown consistently ranks as one of Kentucky's most livable mid-sized cities. It sits along I-65 between Louisville (45 minutes north) and Nashville (90 minutes south), giving residents big-city access without big-city costs or traffic. The Hardin County school system is strong, the cost of living is well below the national average, and the community has a genuine small-town feel with growing dining, retail, and outdoor recreation options. Fort Knox also brings stable employment and a diverse, welcoming population.",
      },
      {
        question: "How long does it take to buy a home in Kentucky?",
        anchor: "how-long-to-buy-home-kentucky",
        answer:
          "From accepted offer to closing, the typical timeline in Kentucky is 30 to 45 days when financing is involved. Cash purchases can close in as little as 10 to 14 days. The process includes home inspection (usually within the first week), appraisal (ordered by your lender, typically week 2), and clear-to-close from your lender (week 3–4). I keep every step moving and communicate proactively so there are no surprises near closing day.",
      },
      {
        question: "Do I need a real estate agent to buy a home in Kentucky?",
        anchor: "do-i-need-agent-kentucky",
        answer:
          "You are not legally required to use an agent in Kentucky, but it is almost always in your best interest. As a buyer, you typically pay nothing for agent representation — the seller covers the commission. Your agent negotiates on your behalf, identifies issues in inspection reports, navigates contract contingencies, and protects you from costly mistakes. Going unrepresented against a listing agent who represents the seller puts you at a significant disadvantage.",
      },
      {
        question: "What is the first step to buying a home in Elizabethtown?",
        anchor: "first-step-buying-home-elizabethtown",
        answer:
          "The very first step is getting pre-approved for a mortgage — before you fall in love with any property. Pre-approval tells you exactly how much you can borrow, locks in your interest rate window, and shows sellers you are a serious buyer. Once you have a pre-approval letter in hand, we schedule a buyer consultation to align on neighborhoods, must-haves, and timeline. From there, I handle the search, showings, offer strategy, and everything through closing.",
      },
      {
        question: "Are there first-time homebuyer programs in Kentucky?",
        anchor: "first-time-buyer-programs-kentucky",
        answer:
          "Yes — Kentucky Housing Corporation (KHC) offers several programs for first-time buyers, including down payment assistance grants, low-interest mortgage products, and the Regular Down Payment Assistance Program which provides up to $10,000. Veterans may qualify for VA loans with zero down payment. USDA loans are also available for properties in eligible rural areas around Hardin County. I work with lenders familiar with all of these programs and can connect you with the right one.",
      },
      {
        question: "What neighborhoods in Elizabethtown are best for families?",
        anchor: "best-neighborhoods-elizabethtown-families",
        answer:
          "Elizabethtown has several family-friendly neighborhoods worth exploring. Helmwood Hills offers larger lots and established trees with easy access to shopping. The areas around Freeman Lake provide scenic settings and proximity to parks. Closer to Elizabethtown Community and Technical College, you will find newer subdivisions with modern floor plans. For buyers prioritizing school zoning, I can filter your search by specific Hardin County school districts to match your children's needs exactly.",
      },
    ],
  },
  {
    category: "Selling a Home in Elizabethtown, KY",
    slug: "selling",
    description: "What Elizabethtown sellers need to know to maximize their home's value and sell quickly.",
    faqs: [
      {
        question: "What is my home worth in Elizabethtown, KY?",
        anchor: "home-worth-elizabethtown",
        answer:
          "Your home's value depends on recent comparable sales within roughly half a mile, your home's condition and updates, current market demand, and how it is priced and marketed. Online estimators like Zillow's Zestimate are notoriously inaccurate for Elizabethtown because the local data they pull is often incomplete. The most accurate way to know what your home is worth is a Comparative Market Analysis (CMA) from a local agent — I offer these at no cost and with no obligation to list.",
      },
      {
        question: "How long does it take to sell a house in Elizabethtown, KY?",
        anchor: "how-long-to-sell-house-elizabethtown",
        answer:
          "Well-priced, well-presented homes in Elizabethtown regularly go under contract within the first two weeks — sometimes within days. Overpriced homes can sit for months and often sell for less than if they had been priced correctly from the start. Market conditions, your neighborhood, time of year, and presentation all play a role. I give every listing a detailed pricing strategy and professional marketing plan before we go live.",
      },
      {
        question: "What should I do to prepare my house for sale in Kentucky?",
        anchor: "prepare-house-for-sale-kentucky",
        answer:
          "The highest-ROI preparations are almost always the simplest: deep clean every surface, declutter ruthlessly, apply fresh neutral paint where needed, improve curb appeal with basic landscaping, and fix any obvious maintenance issues (dripping faucets, broken fixtures, damaged flooring). I walk through every home before listing and provide a prioritized prep list tailored to what actually moves buyers in the current Elizabethtown market — not generic advice.",
      },
      {
        question: "What are seller closing costs in Kentucky?",
        anchor: "seller-closing-costs-kentucky",
        answer:
          "In Kentucky, sellers typically pay: real estate commission (negotiated, paid at closing), state deed transfer tax ($0.50 per $500 of sale price), deed preparation fee, any agreed-upon buyer concessions, and prorated property taxes. Title insurance for the buyer's lender is sometimes negotiated between parties. Total seller-side closing costs typically run 1–3% of the sale price on top of commission. I provide a full net sheet so you know your exact take-home before you sign anything.",
      },
      {
        question: "Should I sell my house before buying another one in Kentucky?",
        anchor: "sell-before-buying-kentucky",
        answer:
          "It depends on your financial position and risk tolerance. Selling first gives you certainty — you know your exact proceeds and avoid carrying two mortgages. Buying first means you never risk being temporarily homeless, but requires bridge financing or a strong cash position. In the current Elizabethtown market, many sellers negotiate a leaseback or extended closing with their buyer to give themselves time to find their next home. This is a conversation we have early so your plan is built around your specific situation.",
      },
    ],
  },
  {
    category: "The Elizabethtown, KY Market",
    slug: "market",
    description: "Local market conditions, trends, and insights for Hardin County real estate.",
    faqs: [
      {
        question: "Is Elizabethtown, KY a buyer's or seller's market?",
        anchor: "buyers-or-sellers-market-elizabethtown",
        answer:
          "Market conditions shift throughout the year and by price range. Generally, Elizabethtown has seen strong seller-friendly conditions driven by Fort Knox employment stability, in-migration from higher-cost cities like Louisville and Nashville, and relatively limited inventory. Entry-level homes under $250,000 tend to move fastest and see the most competition. I track active listings, days on market, and sale-to-list ratios weekly and can give you a current, honest read before you make any decisions.",
      },
      {
        question: "Is Elizabethtown, KY growing?",
        anchor: "is-elizabethtown-growing",
        answer:
          "Yes — Elizabethtown and Hardin County have seen consistent population and economic growth. The city benefits from its I-65 corridor location, Fort Knox (one of the largest Army installations in the country), and increasing interest from people leaving larger metro areas. Several commercial and residential developments have expanded the city's footprint. This growth trajectory is one of the reasons real estate in the area has held its value well even in softer national markets.",
      },
      {
        question: "How does the Fort Knox housing market affect Elizabethtown real estate?",
        anchor: "fort-knox-elizabethtown-real-estate",
        answer:
          "Fort Knox is the single biggest driver of housing demand in the Elizabethtown and Radcliff markets. Military families rotating through the installation create a constant stream of buyers and renters, providing stability even when other markets soften. VA loan volume is high, which keeps demand active. Proximity to the gates (particularly the Radcliff and Vine Grove corridors) is a significant pricing factor for many buyers. I understand this market dynamic well and use it to your advantage whether you are buying or selling.",
      },
      {
        question: "What is the best time of year to buy or sell in Elizabethtown?",
        anchor: "best-time-to-buy-sell-elizabethtown",
        answer:
          "Spring (March–May) brings the most listings and the most competition. Summer sees continued activity driven by military PCS (Permanent Change of Station) moves. Fall can be a strategic time for buyers — less competition, motivated sellers, and similar inventory to summer. Winter listings are fewer but those sellers are serious, meaning more room to negotiate. There is no universally 'best' time — the right time is when your financial situation and life circumstances align.",
      },
    ],
  },
  {
    category: "Working with Rhoman James",
    slug: "working-with-rhoman",
    description: "What to expect when you work with Rhoman James as your Elizabethtown real estate resource.",
    faqs: [
      {
        question: "How do I get started with Rhoman James?",
        anchor: "get-started-rhoman-james",
        answer:
          "The easiest way is to call or text (502) 264-9376, or send an email to RhomanMJames@gmail.com. We will schedule a free, no-pressure consultation — by phone, video, or in person — where I learn about your goals, timeline, and questions. There is no commitment required at that stage. My job at that first meeting is simply to make sure you have the information you need to make the best decision for your situation.",
      },
      {
        question: "Does it cost anything to work with Rhoman James as a buyer?",
        anchor: "cost-to-work-with-buyer-agent",
        answer:
          "In the vast majority of transactions, buyer representation costs you nothing out of pocket. The seller pays the real estate commission at closing, which covers both agents. Recent changes to how commissions are disclosed mean you will sign a Buyer Representation Agreement upfront that clearly spells out the arrangement — every detail is walked through clearly before we tour a single property.",
      },
      {
        question: "What areas does Rhoman James serve?",
        anchor: "areas-rhoman-james-serves",
        answer:
          "I am based in Elizabethtown and primarily serve Hardin County — including Elizabethtown, Radcliff, Vine Grove, and Rineyville — as well as neighboring LaRue County (Hodgenville) and parts of Meade and Breckinridge counties. If you are relocating to the broader region and are not sure which community fits best, that conversation is exactly what my initial consultation is designed for.",
      },
      {
        question: "Can Rhoman James help with new construction in Elizabethtown?",
        anchor: "new-construction-elizabethtown",
        answer:
          "Yes — and this is an area where buyer representation is especially important. The agent at a builder's model home works for the builder, not for you. Having me represent you in a new construction purchase costs you nothing extra, but means you have someone reviewing the contract, negotiating upgrades or closing cost concessions, and ensuring the inspection process (yes, new construction should always be inspected) protects your interests.",
      },
    ],
  },
];

export const allFAQs = faqData.flatMap((cat) =>
  cat.faqs.map((faq) => ({ ...faq, category: cat.category }))
);

export const extendedFaqData: FAQCategory[] = [
  {
    category: "Mortgages & Financing in Kentucky",
    slug: "financing",
    description: "Loan types, down payments, VA loans, and financing options for Kentucky homebuyers.",
    faqs: [
      {
        question: "What credit score do I need to buy a house in Kentucky?",
        anchor: "credit-score-buy-house-kentucky",
        answer:
          "Most conventional loans require a minimum credit score of 620, though 740 or higher gets you the best interest rates. FHA loans — popular with first-time buyers — accept scores as low as 580 with a 3.5% down payment, or even 500 with 10% down. VA loans, widely used near Fort Knox, have no official minimum score set by the VA, though most lenders require at least 580–620. If your credit needs work before buying, I can connect you with a local lender who can give you a realistic roadmap to get mortgage-ready.",
      },
      {
        question: "How much down payment do I need to buy a home in Kentucky?",
        anchor: "down-payment-kentucky",
        answer:
          "It depends on your loan type. Conventional loans start as low as 3% down (for first-time buyers) or 5% for repeat buyers, though putting down 20% eliminates private mortgage insurance (PMI). FHA loans require 3.5% down with qualifying credit. VA loans for eligible veterans and service members require zero down payment — a major advantage near Fort Knox. USDA loans for rural-eligible properties in Hardin County also offer zero down. Kentucky Housing Corporation programs can provide down payment assistance on top of these loan types.",
      },
      {
        question: "What is a VA loan and who qualifies near Fort Knox?",
        anchor: "va-loan-fort-knox",
        answer:
          "A VA loan is a mortgage benefit for eligible veterans, active-duty service members, and surviving spouses, backed by the U.S. Department of Veterans Affairs. It requires no down payment, no private mortgage insurance, and typically offers competitive interest rates. Given Fort Knox's presence, VA loans are one of the most common loan types in the Elizabethtown and Radcliff markets. Eligibility generally requires a minimum period of active service. I work regularly with VA buyers and know which lenders in the area process VA loans smoothly and quickly.",
      },
      {
        question: "What is a USDA loan and are Elizabethtown properties eligible?",
        anchor: "usda-loan-elizabethtown",
        answer:
          "USDA loans are government-backed mortgages for properties in designated rural and suburban areas. They require no down payment and offer below-market interest rates. Parts of Hardin County — particularly areas outside Elizabethtown's city limits, including some communities near Vine Grove and Rineyville — may be eligible. Eligibility is determined property-by-property based on USDA maps that are periodically updated. I can quickly check any property's USDA eligibility before you get attached to it.",
      },
      {
        question: "What is PMI and how do I avoid it in Kentucky?",
        anchor: "what-is-pmi-kentucky",
        answer:
          "Private Mortgage Insurance (PMI) is a monthly premium added to your mortgage payment when you put less than 20% down on a conventional loan. It protects the lender — not you — and typically costs 0.5% to 1.5% of the loan amount annually. You can avoid it by putting 20% down, using a VA or USDA loan (which have no PMI), or using a piggyback loan structure. Once you reach 20% equity in a conventional loan, you can request PMI removal. FHA loans have their own version called MIP, which behaves differently depending on your loan terms.",
      },
      {
        question: "How do I get pre-approved for a mortgage in Kentucky?",
        anchor: "get-preapproved-mortgage-kentucky",
        answer:
          "Pre-approval involves submitting a formal mortgage application to a lender who then reviews your income, employment history, credit score, assets, and debts. You will need recent pay stubs, two years of W-2s or tax returns, bank statements, and a government-issued ID. The lender issues a pre-approval letter stating how much they will lend you. This is different from pre-qualification, which is just a rough estimate. I recommend getting pre-approved before we start touring homes — sellers in Elizabethtown will not take an offer seriously without it.",
      },
      {
        question: "What are current mortgage rates in Kentucky?",
        anchor: "mortgage-rates-kentucky",
        answer:
          "Mortgage rates change daily based on Federal Reserve policy, bond markets, and economic data — I cannot give you a rate that will be accurate tomorrow. What I can tell you is that rates vary based on your credit score, loan type, down payment, loan term, and the lender you choose. The best way to find your actual rate is to get quotes from at least three lenders on the same day. I have relationships with several local lenders who are competitive and communicative — I am happy to make introductions.",
      },
      {
        question: "Can I buy a home in Elizabethtown if I am self-employed?",
        anchor: "self-employed-buy-home-elizabethtown",
        answer:
          "Yes — self-employed buyers can absolutely get mortgages, though the documentation requirements are more involved. Lenders typically want two years of self-employment history shown on tax returns, a year-to-date profit and loss statement, and business bank statements. One challenge is that many self-employed buyers write off significant expenses, which lowers their documented income and therefore their qualifying loan amount. A good mortgage broker can help you find the right loan product for your situation before you start house hunting.",
      },
    ],
  },
  {
    category: "Neighborhoods & Communities Near Elizabethtown",
    slug: "neighborhoods",
    description: "Comparing Elizabethtown, Radcliff, Vine Grove, Rineyville, and surrounding communities.",
    faqs: [
      {
        question: "What is the difference between Elizabethtown and Radcliff, KY?",
        anchor: "elizabethtown-vs-radcliff",
        answer:
          "Elizabethtown is the Hardin County seat — the larger, more commercial of the two cities, with the courthouse, most major retail, restaurants, and healthcare. Radcliff sits directly adjacent to Fort Knox's main gates and has a strong military community feel with a high concentration of veteran-friendly services, diverse restaurants, and more affordable housing options. Many buyers who work on Fort Knox prefer Radcliff for proximity; buyers who prioritize walkability to dining and shopping often lean toward Elizabethtown. Both are excellent — it comes down to your priorities.",
      },
      {
        question: "Is Vine Grove, KY a good place to buy a home?",
        anchor: "vine-grove-ky-buy-home",
        answer:
          "Vine Grove is a small, tight-knit community in Hardin County that appeals to buyers looking for a quieter, more rural feel without being far from Elizabethtown or Fort Knox. It has its own school system — Vine Grove Elementary feeds into Central Hardin High — and a lower price point than central Elizabethtown. Newer subdivisions have expanded the housing stock in recent years. If you value community atmosphere, space, and value, Vine Grove is worth including in your search.",
      },
      {
        question: "How far is Elizabethtown from Louisville, KY?",
        anchor: "elizabethtown-to-louisville-distance",
        answer:
          "Elizabethtown is approximately 42 miles south of Louisville along I-65, translating to roughly 40 to 55 minutes depending on traffic. This makes it a realistic commuter distance for buyers who work in Louisville but want more space and lower home prices. The I-65 corridor is generally reliable outside of peak rush hour. Many Elizabethtown residents commute to Louisville for work, healthcare, or airport access while enjoying a significantly lower cost of living and a quieter lifestyle.",
      },
      {
        question: "How far is Elizabethtown from Fort Knox?",
        anchor: "elizabethtown-to-fort-knox-distance",
        answer:
          "The main gate of Fort Knox (Chaffee Gate) is approximately 12 to 15 miles from central Elizabethtown, a commute of about 15 to 20 minutes via US-31W. Radcliff is closer — typically 5 to 10 minutes from the main gates — which is why many active-duty families prefer it. Vine Grove and Rineyville also offer short commutes to the installation. When helping military buyers, I always ask which gate they use most, since Fort Knox has multiple access points and the closest neighborhood depends on your specific work location on post.",
      },
      {
        question: "What are the best subdivisions in Elizabethtown, KY?",
        anchor: "best-subdivisions-elizabethtown",
        answer:
          "Elizabethtown has a range of established and newer subdivisions worth considering. Helmwood Hills is one of the most established and sought-after areas, known for mature trees and larger lots. Brook Haven and surrounding streets near Freeman Lake offer scenic settings. Newer developments on the south and east sides of town offer modern floor plans with open concepts and energy efficiency. The best subdivision for you depends on your budget, desired square footage, school zone preferences, and commute needs — I tailor every home search to those specifics.",
      },
      {
        question: "Are there new construction homes available in Elizabethtown, KY?",
        anchor: "new-construction-homes-elizabethtown",
        answer:
          "Yes — Elizabethtown has seen active new construction from both national and regional builders. New subdivisions have been developed on the city's southern and eastern corridors, offering modern open floor plans, energy-efficient builds, and smart home features. Prices for new construction generally start in the mid $200s and go up depending on upgrades and lot size. I represent buyers in new construction purchases at no extra cost — and it is genuinely important to have representation since the builder's sales agent works for the builder, not for you.",
      },
      {
        question: "What is Hodgenville, KY like for real estate?",
        anchor: "hodgenville-ky-real-estate",
        answer:
          "Hodgenville is the LaRue County seat, located about 25 miles southeast of Elizabethtown. It is best known as the birthplace of Abraham Lincoln, which gives it a strong historic identity. Real estate in Hodgenville is generally more affordable than Elizabethtown, with a rural character and slower pace of life. It attracts buyers who want more land, lower taxes, and a genuine small-town feel. The tradeoff is fewer local amenities and a longer commute to major employers. I cover LaRue County and can help you find property there if it fits your goals.",
      },
      {
        question: "Is Elizabethtown, KY safe?",
        anchor: "is-elizabethtown-safe",
        answer:
          "Elizabethtown is considered one of the safer mid-sized cities in Kentucky. Like any community, crime rates vary by neighborhood and street. The presence of Fort Knox brings a large military population that tends to positively influence community stability. I always encourage buyers to review current crime maps for specific streets they are considering — I can walk you through that data for any address during our search process. In my experience, most areas of Elizabethtown that buyers are drawn to are family-friendly and well-maintained.",
      },
    ],
  },
  {
    category: "Schools & Family Life in Hardin County",
    slug: "schools",
    description: "Hardin County schools, districts, and what families should know before buying.",
    faqs: [
      {
        question: "How are the schools in Elizabethtown, KY?",
        anchor: "schools-elizabethtown-ky",
        answer:
          "Hardin County Schools is the public school district serving most of the Elizabethtown area, and it consistently performs above the Kentucky state average. The district includes multiple elementary schools, Bluegrass Middle School, and Elizabethtown High School. There is also Elizabethtown Independent Schools, a separate smaller district serving the city proper. For families prioritizing school quality, I can filter your home search by specific school zones so you land in the right district from day one — not after closing.",
      },
      {
        question: "What high schools are in Elizabethtown, KY?",
        anchor: "high-schools-elizabethtown-ky",
        answer:
          "The primary public high schools serving the Elizabethtown area are Elizabethtown High School (Elizabethtown Independent Schools), Central Hardin High School, North Hardin High School, and John Hardin High School — all part of Hardin County Schools. Which school your child attends depends on your home's specific address and school zone. Each school has its own programs, athletics, and culture. I map every buyer's target homes against school zones during the search process so there are no surprises after you move in.",
      },
      {
        question: "Is Elizabethtown Community and Technical College good?",
        anchor: "elizabethtown-community-technical-college",
        answer:
          "Elizabethtown Community and Technical College (ECTC) is part of the Kentucky Community and Technical College System (KCTCS) and has a strong local reputation for workforce training, associate degrees, and transfer pathways to four-year universities. It serves a large student population and is a significant employer in the area. Its presence contributes to the local economy and keeps talent in the region. For buyers with college-age children or those seeking continuing education, ECTC is a meaningful part of Elizabethtown's appeal.",
      },
      {
        question: "What is there to do in Elizabethtown, KY with kids?",
        anchor: "things-to-do-elizabethtown-kids",
        answer:
          "Elizabethtown offers a solid range of family activities. Freeman Lake Park is a centerpiece — with trails, fishing, a splash pad, and open green space. The Elizabethtown Sports Park hosts youth leagues across multiple sports. The Historic State Theatre shows films and hosts events. Swope's Cars of Yesteryear Museum is a quirky local gem. The city's parks system includes multiple neighborhood parks with playgrounds and sports courts. And with Louisville just 45 minutes north, families have easy access to the Louisville Zoo, Kentucky Kingdom, and the full range of big-city options.",
      },
      {
        question: "Are there private schools near Elizabethtown, KY?",
        anchor: "private-schools-elizabethtown",
        answer:
          "Yes — the Elizabethtown area has several private school options. St. James Catholic School offers K-8 education in a faith-based environment and has a long history in the community. There are also several smaller faith-based and charter options in the broader region. For families with specific private school requirements, I factor school proximity into the home search — there is no point in falling in love with a home that adds 40 minutes to your school run.",
      },
    ],
  },
  {
    category: "Investment & Rental Property in Hardin County",
    slug: "investment",
    description: "Buying rental properties, investment homes, and building wealth through Elizabethtown real estate.",
    faqs: [
      {
        question: "Is Elizabethtown, KY a good place to invest in rental property?",
        anchor: "rental-property-elizabethtown",
        answer:
          "Elizabethtown has several characteristics that make it attractive for rental property investors. Fort Knox creates steady, year-round demand from military families who are often reliable tenants. The population is growing, vacancy rates are relatively low, and home prices are still affordable enough that cash-flow-positive rentals are achievable — something increasingly rare in larger markets. The key is buying right: the right price, the right neighborhood, and the right property condition. I help investors run the numbers before making an offer so you are buying based on actual returns, not optimism.",
      },
      {
        question: "What kind of return can I expect on a rental property in Elizabethtown?",
        anchor: "rental-property-return-elizabethtown",
        answer:
          "Returns vary significantly by property, purchase price, and rental rate. As a general benchmark, investors in the Elizabethtown market have found single-family homes can generate gross rental yields in the 7% to 10% range when purchased at the right price. Net returns after taxes, insurance, maintenance, and vacancy depend on your financing and management approach. I can pull rental comps for any address you are considering so you have a realistic rent estimate before you commit to a purchase. I also connect investors with local property managers if self-management is not your preference.",
      },
      {
        question: "Are short-term rentals (Airbnb) viable in Elizabethtown, KY?",
        anchor: "airbnb-elizabethtown",
        answer:
          "Short-term rental demand in Elizabethtown is primarily driven by Fort Knox visiting family members, business travelers on I-65, and tourism tied to Lincoln's birthplace in nearby Hodgenville. It is not a tourism-dominant market like Louisville or Nashville, so occupancy rates for short-term rentals tend to be more modest. That said, well-located and well-managed properties can perform. Before investing in a short-term rental strategy, check current Elizabethtown city ordinances on short-term rental registration and any HOA restrictions on the specific property.",
      },
      {
        question: "Can I use a VA loan to buy an investment property?",
        anchor: "va-loan-investment-property",
        answer:
          "VA loans are intended for primary residences only — you cannot use one to purchase a pure investment property you never plan to live in. However, VA loans can be used to purchase multi-unit properties (up to four units) as long as you occupy one of the units as your primary residence. This is a common and legitimate strategy: buy a duplex or triplex with zero down, live in one unit, and collect rent from the others. Over time, when you move, the entire property becomes a rental. It is one of the most powerful wealth-building strategies available to veterans.",
      },
      {
        question: "What should I look for when buying a rental property in Hardin County?",
        anchor: "buying-rental-property-hardin-county",
        answer:
          "The fundamentals I advise every investor to focus on: location relative to Fort Knox or major employers (drives tenant demand), property condition and deferred maintenance (the biggest margin killer), realistic rent potential based on current comps, neighborhood rental saturation, and the purchase price relative to potential rent (the 1% rule is a rough starting point — monthly rent should be at least 1% of purchase price for basic cash flow viability). I also recommend a thorough inspection before closing, even for experienced investors. One surprise HVAC replacement can wipe out a year of cash flow.",
      },
    ],
  },
  {
    category: "The Home Buying & Selling Process in Kentucky",
    slug: "process",
    description: "Step-by-step guidance on contracts, inspections, appraisals, and closing in Kentucky.",
    faqs: [
      {
        question: "What happens after my offer is accepted in Kentucky?",
        anchor: "after-offer-accepted-kentucky",
        answer:
          "Once your offer is accepted, the clock starts on your contract contingencies. Typically within the first 10 days: you order a home inspection, deposit your earnest money (usually 1% of purchase price) into escrow, and your lender orders the appraisal. If the inspection reveals issues, you can negotiate repairs, a price reduction, or walk away within the inspection period. If the appraisal comes in below the purchase price, you have options — renegotiate, pay the difference, or exit if you have an appraisal contingency. I walk you through every step in real time so nothing is a surprise.",
      },
      {
        question: "What is earnest money and how much do I need in Kentucky?",
        anchor: "earnest-money-kentucky",
        answer:
          "Earnest money is a good-faith deposit you submit after your offer is accepted, held in escrow until closing. It signals to the seller that you are serious. In Kentucky, earnest money typically ranges from 1% to 3% of the purchase price — so $2,000 to $6,000 on a $200,000 home. It is applied toward your closing costs or down payment at closing. If you walk away for reasons covered by your contract contingencies (failed inspection, financing denial, low appraisal), you typically get it back. If you back out for reasons not covered, the seller may keep it.",
      },
      {
        question: "Do I need a home inspection in Kentucky?",
        anchor: "home-inspection-kentucky",
        answer:
          "You are not legally required to get a home inspection in Kentucky, but skipping it is one of the costliest mistakes a buyer can make. A thorough inspection by a licensed Kentucky home inspector typically costs $300 to $500 and can uncover issues worth tens of thousands of dollars — foundation cracks, roofing problems, HVAC failures, plumbing leaks, electrical hazards. I always recommend inspections and can refer you to inspectors I trust to be thorough and honest, not inspectors who rush through properties and miss critical items.",
      },
      {
        question: "What is a home appraisal and why does it matter?",
        anchor: "home-appraisal-kentucky",
        answer:
          "An appraisal is an independent valuation of the home ordered by your mortgage lender to confirm the property is worth what you are paying for it. The lender will not loan more than the appraised value. If the home appraises below the purchase price — common in competitive markets where buyers bid above list — you either need to renegotiate the price with the seller, pay the gap in cash, or exit the contract (if you have an appraisal contingency). I price offers strategically to reduce appraisal risk and guide you through the negotiation if a gap occurs.",
      },
      {
        question: "What are typical closing costs in Kentucky for a buyer?",
        anchor: "closing-costs-kentucky-buyer",
        answer:
          "Buyers in Kentucky typically pay 2% to 4% of the purchase price in closing costs. These include loan origination fees, title search and insurance, attorney fees (Kentucky is an attorney-closing state), prepaid homeowner's insurance, property tax escrow, recording fees, and prepaid interest. On a $250,000 home, expect roughly $5,000 to $10,000 in closing costs. You can sometimes negotiate for the seller to cover a portion of your closing costs — particularly in a buyer's market or when a seller is motivated. I factor this into offer strategy from the start.",
      },
      {
        question: "Does Kentucky require an attorney for real estate closings?",
        anchor: "attorney-required-kentucky-closing",
        answer:
          "Yes — Kentucky is an attorney-closing state, meaning a licensed Kentucky attorney must oversee the closing process, conduct the title examination, and handle the disbursement of funds. This is actually a protection for you as a buyer or seller, as the attorney ensures the title is clear, documents are properly executed, and funds transfer correctly. Attorney fees are typically included in your closing costs. I work with several closing attorneys in the Elizabethtown area who are efficient and communicative.",
      },
      {
        question: "What is title insurance and do I need it in Kentucky?",
        anchor: "title-insurance-kentucky",
        answer:
          "Title insurance protects against defects in a property's title — things like undisclosed liens, errors in public records, forgery in previous transactions, or unknown heirs making claims to the property. There are two types: lender's title insurance (required by your mortgage lender) and owner's title insurance (optional but strongly recommended for buyers). Owner's title insurance is a one-time premium paid at closing that protects you for as long as you own the home. Given that it costs a few hundred dollars and can protect against claims worth far more, I always recommend buyers purchase it.",
      },
      {
        question: "Can I back out of a home purchase in Kentucky?",
        anchor: "back-out-home-purchase-kentucky",
        answer:
          "Yes, but whether you get your earnest money back depends on when and why you exit. During your inspection contingency period, you can typically walk away for any reason and recover your earnest money. If the home fails to appraise and you have an appraisal contingency, same protection applies. If your financing falls through despite good-faith efforts, a financing contingency protects you. If you simply change your mind after all contingencies have been waived or expired, the seller may be entitled to keep your earnest money. I make sure every contract I write includes appropriate contingencies so my clients are protected.",
      },
      {
        question: "How do I make a competitive offer on a house in Elizabethtown?",
        anchor: "competitive-offer-elizabethtown",
        answer:
          "A competitive offer in Elizabethtown involves more than just price. Offer price relative to recent comps matters most. A strong earnest money deposit signals seriousness. A pre-approval letter from a reputable local lender carries more weight than an online lender. Flexible closing dates can win deals when sellers are planning their own move. Limiting contingencies (while still protecting yourself) can make your offer cleaner. In multiple-offer situations, an escalation clause can automatically increase your offer up to a set ceiling. I analyze each situation and give you a clear recommendation on how to structure your offer to win without overpaying.",
      },
      {
        question: "What is a contingency in a Kentucky real estate contract?",
        anchor: "contingency-kentucky-real-estate",
        answer:
          "A contingency is a condition that must be satisfied for the sale to proceed. Common contingencies include the inspection contingency (you can exit or negotiate if the inspection reveals problems), the financing contingency (you can exit if your loan is denied), and the appraisal contingency (you can exit if the home appraises below the purchase price). There is also a sale contingency, where your purchase depends on selling your current home first. Each contingency has a deadline. Waiving contingencies makes offers more competitive but increases your risk — a conversation we have carefully before submitting any offer.",
      },
    ],
  },
  {
    category: "Relocation to Elizabethtown, KY",
    slug: "relocation",
    description: "Everything newcomers and military families need to know about relocating to the Elizabethtown area.",
    faqs: [
      {
        question: "What do I need to know about relocating to Elizabethtown, KY?",
        anchor: "relocating-to-elizabethtown",
        answer:
          "Elizabethtown is a welcoming community that has absorbed a steady stream of newcomers — military families, remote workers, and people leaving higher-cost cities — for decades. The transition is generally smooth. Housing is more affordable than most cities of comparable quality. The pace of life is relaxed. Neighbors tend to be genuinely friendly. Practically speaking, I recommend getting your pre-approval lined up before you arrive if you are buying, and starting your rental search early if you need a short-term landing spot first. I work with relocating buyers regularly and can give you a comprehensive picture of every neighborhood before you ever set foot in town.",
      },
      {
        question: "How do I find a home in Elizabethtown if I am relocating from out of state?",
        anchor: "find-home-elizabethtown-out-of-state",
        answer:
          "Out-of-state relocations require a bit more planning but are very manageable. I conduct detailed video walkthroughs for buyers who cannot visit in person, share neighborhood context beyond what photos show, and can write offers on your behalf once we have aligned on the right property. Many of my relocating clients purchase a home without ever physically visiting Elizabethtown before closing — and are consistently happy with the result because we take the time to understand exactly what you need. A planned in-person visit timed around your top contenders is always ideal, but it is not always possible.",
      },
      {
        question: "What is a PCS move and how do I buy a home during a military PCS to Fort Knox?",
        anchor: "pcs-move-fort-knox-home-buying",
        answer:
          "A Permanent Change of Station (PCS) move is the military's relocation of a service member and their family to a new duty station — in this case, Fort Knox. PCS timelines are often compressed, which means the home search can be fast and stressful. I am experienced working with PCS buyers: I know how to move quickly when needed, understand VA loan timelines, and can make sure you are set up with a lender who processes VA loans efficiently. Key tip: start the process as soon as you receive orders — do not wait until you are weeks away from the report date.",
      },
      {
        question: "Is it better to rent or buy when moving to Elizabethtown?",
        anchor: "rent-or-buy-elizabethtown",
        answer:
          "If you plan to stay three or more years, buying almost always builds more wealth than renting in the Elizabethtown market. Rents are rising, inventory is limited, and home values have appreciated steadily. If your timeline is uncertain — common with military assignments — a shorter stay can sometimes favor renting to avoid transaction costs of buying and selling quickly. For PCS buyers, the VA loan's zero-down requirement and no PMI can make buying cost-effective even for shorter stays in some cases. I give every buyer an honest break-even analysis based on their actual numbers before recommending a direction.",
      },
      {
        question: "What utilities and services should I set up when moving to Elizabethtown?",
        anchor: "utilities-elizabethtown",
        answer:
          "For most Elizabethtown homes, you will set up electric service through Kentucky Utilities (KU), natural gas through Atmos Energy if your home is gas-heated, water and sewer through the city or county depending on your location, and trash service. Internet providers vary by neighborhood — AT&T and Spectrum are the primary options, with fiber availability expanding. I provide every buyer I work with a post-closing checklist of exactly which services to contact for their specific address so the transition into your new home is as smooth as possible.",
      },
    ],
  },
];

// Merge all FAQ data for the page
export const allFaqData = [...faqData, ...extendedFaqData];
export const allFAQsCombined = allFaqData.flatMap((cat) =>
  cat.faqs.map((faq) => ({ ...faq, category: cat.category }))
);

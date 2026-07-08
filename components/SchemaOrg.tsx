export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://rhomanjames.com/#agent",
        name: "Rhoman James",
        description: "Real estate professional serving Elizabethtown, KY and Hardin County — specializing in buying, selling, relocation, and investment properties.",
        url: "https://rhomanjames.com",
        telephone: "(859) 536-6009",
        email: "RhomanMJames@gmail.com",
        image: "https://res.cloudinary.com/usamobileappsllc/image/upload/v1782244414/Gemini_Generated_Image_iijo2biijo2biijo_1_mkv0mz.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Elizabethtown",
          addressRegion: "KY",
          postalCode: "42701",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.6993,
          longitude: -85.8591,
        },
        areaServed: [
          { "@type": "City", name: "Elizabethtown", addressRegion: "KY" },
          { "@type": "City", name: "Radcliff", addressRegion: "KY" },
          { "@type": "City", name: "Vine Grove", addressRegion: "KY" },
          { "@type": "City", name: "Rineyville", addressRegion: "KY" },
          { "@type": "City", name: "Hodgenville", addressRegion: "KY" },
          { "@type": "AdministrativeArea", name: "Hardin County", addressRegion: "KY" },
          { "@type": "AdministrativeArea", name: "LaRue County", addressRegion: "KY" },
        ],
        knowsAbout: [
          "Residential Real Estate",
          "Home Buying",
          "Home Selling",
          "VA Loans",
          "First-Time Home Buyers",
          "Real Estate Investment",
          "Relocation",
          "Military Real Estate",
          "Hardin County Kentucky Real Estate",
          "Elizabethtown KY Real Estate",
          "Fort Knox Housing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Real Estate Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Buyer Representation", description: "Full buyer representation for home purchases in Elizabethtown and Hardin County, KY." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seller Representation", description: "Strategic listing and marketing services for home sellers in Hardin County, KY." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relocation Services", description: "Specialized relocation assistance for military families and out-of-state buyers moving to Elizabethtown, KY." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Investment Property", description: "Investment property identification and acquisition guidance in Hardin County, KY." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Market Analysis", description: "No-obligation Comparative Market Analysis for Hardin County homeowners." } },
          ],
        },
        sameAs: [
          "https://www.zillow.com",
          "https://www.realtor.com",
        ],
        priceRange: "Free consultation",
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "20:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "09:00", closes: "18:00" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://rhomanjames.com/#website",
        url: "https://rhomanjames.com",
        name: "Rhoman James Real Estate",
        description: "Elizabethtown KY real estate resource — buying, selling, relocation, and investment properties in Hardin County.",
        publisher: { "@id": "https://rhomanjames.com/#agent" },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: "https://rhomanjames.com/faq#{search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

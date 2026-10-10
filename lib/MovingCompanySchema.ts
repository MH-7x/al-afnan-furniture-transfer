import { APP } from "@/lib/App";
import { ADDRESS, EMAIL, MAPS_HREF } from "@/lib/contact";

const siteUrl = APP.url.replace(/\/$/, "");
const abs = (path: string) => `${siteUrl}${path}`;

const BUSINESS_ID = `${siteUrl}/#business`;
const WEBSITE_ID = `${siteUrl}/#website`;

// Google Business Profile listing (from the CID used on the site).
const GOOGLE_BUSINESS_PROFILE =
  "https://maps.google.com/?cid=15781830796061422134";

const EMIRATES = [
  "Dubai",
  "Sharjah",
  "Abu Dhabi",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

// Kept in step with the hours shown in the footer and lib/contact.ts (HOURS).
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "17:00",
  },
];

const SERVICES: { name: string; path: string }[] = [
  { name: "House Movers in Dubai", path: "/house-movers-in-dubai" },
  { name: "Apartment Movers in Dubai", path: "/apartment-movers-in-dubai" },
  { name: "Villa Movers in Dubai", path: "/villa-movers-in-dubai" },
  { name: "Office Movers in Dubai", path: "/office-movers-in-dubai" },
  { name: "Furniture Movers in Dubai", path: "/furniture-movers-in-dubai" },
  { name: "House Movers in Sharjah", path: "/house-movers-in-sharjah" },
  { name: "Apartment Movers in Sharjah", path: "/apartment-movers-in-sharjah" },
  { name: "Villa Movers in Sharjah", path: "/villa-movers-in-sharjah" },
  { name: "Office Movers in Sharjah", path: "/office-movers-in-sharjah" },
  {
    name: "Furniture Transfer in Sharjah",
    path: "/furniture-transfer-in-sharjah",
  },
  { name: "Packing Services in Sharjah", path: "/packing-services-in-sharjah" },
];

const movingCompany = {
  "@type": "MovingCompany",
  // Absolute identifiers need the public origin; they appear once NEXT_PUBLIC_SITE_URL is set.
  ...(siteUrl && { "@id": BUSINESS_ID, url: `${siteUrl}/` }),
  name: APP.name,
  alternateName: "Al Afnan Movers and Packers",
  description:
    "Licensed and insured movers and packers based in Sharjah and serving all seven UAE emirates, with house, villa, apartment, office and furniture moving and packing services.",
  ...(siteUrl && {
    logo: {
      "@type": "ImageObject",
      url: abs("/logo.svg"),
    },
    image: [abs("/images/al-afnan-movers-and-packers-in-uae.jpg")],
  }),
  telephone: "+971567277536",
  email: EMAIL,
  priceRange: "AED 800 - AED 6,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.split(", Sharjah")[0],
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    addressCountry: "AE",
  },
  hasMap: MAPS_HREF,
  sameAs: [GOOGLE_BUSINESS_PROFILE],
  openingHoursSpecification: OPENING_HOURS,
  areaServed: EMIRATES.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  knowsLanguage: ["en", "ar", "ur", "hi"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+971567277536",
      email: EMAIL,
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Urdu", "Hindi"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving services",
    itemListElement: SERVICES.map(({ name, path }) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        serviceType: name.split(" in ")[0],
        ...(siteUrl && { url: abs(path) }),
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${siteUrl}/`,
  name: APP.name,
  inLanguage: "en-AE",
  publisher: { "@id": BUSINESS_ID },
};

export const movingCompanySchema = {
  "@context": "https://schema.org",
  "@graph": siteUrl ? [movingCompany, website] : [movingCompany],
};

/** Serialised for a <script type="application/ld+json"> tag; "<" is escaped so the payload can't close the tag. */
export const movingCompanySchemaJson = JSON.stringify(
  movingCompanySchema,
).replace(/</g, "\\u003c");

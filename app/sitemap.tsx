import type { MetadataRoute } from "next";
import { APP, DEFAULT_OG_IMAGE } from "@/lib/App";

const siteUrl = APP.url.replace(/\/$/, "");

const absoluteUrl = (path: string) =>
  path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
const absoluteImage = (path: string) => `${siteUrl}${path}`;

type Page = {
  path: string;
  image: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified: string;
};

const homePage: Page = {
  path: "/",
  image: "/images/al-afnan-movers-and-packers-in-uae.jpg",
  changeFrequency: "weekly",
  priority: 1,
  lastModified: "2026-10-11",
};

// Location (emirate) landing pages — most likely to change as coverage/pricing updates.
const locationPages: Page[] = [
  {
    path: "/movers-and-packers-in-dubai",
    image: "/images/movers-and-packers-dubai-al-afnan-hero.jpg",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-10-11",
  },
  {
    path: "/movers-in-sharjah",
    image: "/al-afnan-furniture-transfer-sharjah.jpg",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-10-11",
  },
  {
    path: "/movers-in-ajman",
    image: "/images/movers-in-ajman-al-afnan.jpg",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-10-11",
  },
  {
    path: "/movers-in-ras-al-khaimah",
    image: "/images/movers-in-ras-al-khaimah-al-afnan.jpg",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-10-11",
  },
];

// Individual service pages — stable content, updated occasionally.
const servicePages: Page[] = [
  {
    path: "/affordable-movers-in-dubai",
    image: "/images/studio-movers-dubai-al-afnan-furniture-transfer.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-13",
  },
  {
    path: "/apartment-movers-in-dubai",
    image: "/images/apartment-movers-dubai-al-afnan-furniture-transfer.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/apartment-movers-in-sharjah",
    image: "/flat-apartment-movers.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/furniture-movers-in-dubai",
    image: "/images/furniture-dismantling-reassembly-dubai-al-afnan-movers.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/furniture-transfer-in-sharjah",
    image: "/furniture-moving-transfer.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/house-movers-in-dubai",
    image: "/images/house-movers-dubai-al-afnan-furniture-transfer.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/house-movers-in-sharjah",
    image: "/house-moving-services-by-al-afnan.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/office-movers-in-dubai",
    image: "/images/office-movers-dubai-al-afnan-furniture-transfer.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/office-movers-in-sharjah",
    image: "/commercial-office-movers.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/packing-services-in-sharjah",
    image: "/packing-and-moving-services.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/villa-movers-in-dubai",
    image: "/images/villa-movers-dubai-al-afnan-furniture-transfer.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
  {
    path: "/villa-movers-in-sharjah",
    image: "/villa-moving-services.jpg",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-10-11",
  },
];

// About, contact and legal pages — rarely change.
const otherPages: Page[] = [
  {
    path: "/about-us",
    image: "/images/al-afnan-movers-crew-planning-move-with-customer.jpg",
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: "2026-10-11",
  },
  {
    path: "/contact-us",
    image: DEFAULT_OG_IMAGE,
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: "2026-10-11",
  },
  {
    path: "/privacy-policy",
    image: DEFAULT_OG_IMAGE,
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-10-11",
  },
  {
    path: "/terms-and-conditions",
    image: DEFAULT_OG_IMAGE,
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-10-11",
  },
];

const allPages = [homePage, ...locationPages, ...servicePages, ...otherPages];

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map(
    ({ path, image, changeFrequency, priority, lastModified }) => ({
      url: absoluteUrl(path),
      images: [absoluteImage(image)],
      lastModified: lastModified,
      changeFrequency,
      priority,
    }),
  );
}

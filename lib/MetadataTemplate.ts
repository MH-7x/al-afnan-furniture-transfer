import type { Metadata } from "next";
import { APP, DEFAULT_OG_IMAGE } from "@/lib/App";

interface MetadataArgs {
  /** Unique <title> for the page. */
  title: string;
  /** Unique meta description for the page. */
  desc: string;
  /** Route path, leading slash, no trailing slash. Use "/" for the homepage. */
  path: string;
  /** Page-specific social image; falls back to DEFAULT_OG_IMAGE. */
  image?: {
    /** Public path, e.g. "/images/house-movers-dubai.jpg". */
    path: string;
    /** Defaults to the page title. */
    alt?: string;
  };
}

const siteUrl = APP.url.replace(/\/$/, "");

export function MetadataTemplate({
  title,
  desc,
  path,
  image,
}: MetadataArgs): Metadata {
  // Without a configured origin, keep canonicals relative instead of guessing.
  const canonical = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
  const ogImage = {
    url: `${siteUrl}${image?.path ?? DEFAULT_OG_IMAGE}`,
    alt: image?.alt ?? title,
  };

  return {
    ...(siteUrl && { metadataBase: new URL(siteUrl) }),
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      siteName: APP.name,
      locale: "en_AE",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

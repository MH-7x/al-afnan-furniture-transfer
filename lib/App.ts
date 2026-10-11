const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

// A production deploy without the real origin would ship canonicals, the
// sitemap and schema pointing at the wrong host (or at localhost).
if (
  process.env.VERCEL_ENV === "production" &&
  (!siteUrl || siteUrl.includes("localhost"))
) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set to the live origin for production builds.",
  );
}

/** Single source for site identity used by metadata. */
export const APP = {
  /** Trading name used for SEO (schema name, og:site_name, WebSite name). */
  name: "Al Afnan Movers and Packers",
  /** Registered company name. */
  legalName: "Al Afnan Furniture Transfer",
  /**
   * Public origin of the live site, no trailing slash. Set NEXT_PUBLIC_SITE_URL
   * in the environment; while it is empty, canonicals stay relative and no
   * metadataBase is set, so nothing points at localhost.
   */
  url: siteUrl,
};

/**
 * Social preview used on pages that don't pass their own image. Swap this for
 * the 1200×630 share image (logo + crew) once it is in /public/images.
 */
export const DEFAULT_OG_IMAGE = "/images/al-afnan-movers-and-packers-in-uae.jpg";

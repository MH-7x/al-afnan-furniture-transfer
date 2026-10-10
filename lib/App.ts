/** Single source for site identity used by metadata. */
export const APP = {
  name: "Al Afnan Furniture Transfer",
  /**
   * Public origin of the live site, no trailing slash. Set NEXT_PUBLIC_SITE_URL
   * in the environment; while it is empty, canonicals stay relative and no
   * metadataBase is set, so nothing points at localhost.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
};

/**
 * Social preview used on pages that don't pass their own image. Swap this for
 * the 1200×630 share image (logo + crew) once it is in /public/images.
 */
export const DEFAULT_OG_IMAGE = "/images/al-afnan-movers-and-packers-in-uae.jpg";

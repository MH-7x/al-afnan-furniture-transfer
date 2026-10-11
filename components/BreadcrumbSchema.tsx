import { APP } from "@/lib/App";

export interface BreadcrumbItem {
  name: string;
  /** Route path with a leading slash, e.g. "/movers-in-sharjah". */
  path: string;
}

const siteUrl = APP.url.replace(/\/$/, "");

/**
 * BreadcrumbList JSON-LD for the trail shown on the page. Pass the crumbs after
 * "Home" (which is always added first), ending with the current page, using the
 * same labels as the visible breadcrumb.
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the payload can't close the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default BreadcrumbSchema;

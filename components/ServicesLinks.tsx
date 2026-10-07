import Link from "next/link";
import { getServices, type Region } from "@/lib/servicesNav";

type Variant = "desktop" | "mobile" | "footer";

const linkClasses: Record<Variant, string> = {
  desktop:
    "flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors",
  mobile:
    "block py-1 text-sm text-white/90 hover:text-white transition-colors",
  footer: "text-sm text-white/80 hover:text-white transition-colors",
};

/**
 * Renders the <li> items of a services list: the Dubai services when
 * `region` is "dubai", the Sharjah services otherwise. Server component; the
 * page decides the region and passes it down through Navbar / Footer.
 */
export function ServicesLinks({
  variant,
  region = "sharjah",
}: {
  variant: Variant;
  region?: Region;
}) {
  return (
    <>
      {getServices(region).map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={linkClasses[variant]}>
            {variant === "desktop" ? <span>{item.name}</span> : item.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default ServicesLinks;

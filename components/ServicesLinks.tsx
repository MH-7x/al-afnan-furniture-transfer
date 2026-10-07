import Link from "next/link";
import { getServices, type Region } from "@/lib/servicesNav";

type Variant = "desktop" | "mobile" | "footer";

const linkClasses: Record<Variant, string> = {
  desktop:
    "flex items-center rounded-sm px-3 py-2.5 font-medium text-ink hover:bg-paper-2 transition-colors",
  mobile: "block py-2 text-ink hover:text-signal transition-colors",
  footer: "text-fog hover:text-white transition-colors",
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

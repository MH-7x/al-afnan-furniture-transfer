import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Region } from "@/lib/servicesNav";

/**
 * Page frame shared by every route: header, main landmark and footer.
 * `region` drives the region-aware service menus; `searches` feeds the footer.
 */
export function SiteShell({
  region = "sharjah",
  searches,
  children,
}: {
  region?: Region;
  searches?: string[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar region={region} />
      <main id="main">{children}</main>
      <Footer region={region} searches={searches} />
    </>
  );
}

export default SiteShell;

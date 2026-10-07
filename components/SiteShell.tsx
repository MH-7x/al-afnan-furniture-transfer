import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyContactBar } from "@/components/StickyContactBar";
import type { Region } from "@/lib/servicesNav";

const mainLayouts = {
  /** Centered column with even gaps between sections (service, about, contact pages). */
  flow: "mx-auto flex w-full max-w-350 flex-col gap-y-16 md:gap-y-28 pb-16 md:pb-28",
  /** Full-width bands; each section owns its background and spacing (home, locations). */
  bands: "flex w-full flex-col",
};

/**
 * Page frame shared by every route: header, main landmark, footer and the
 * mobile Call/WhatsApp bar. `region` drives the region-aware service menus;
 * `searches` feeds the footer.
 */
export function SiteShell({
  region = "sharjah",
  searches,
  layout = "flow",
  children,
}: {
  region?: Region;
  searches?: string[];
  layout?: keyof typeof mainLayouts;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar region={region} />
      {/* clip (not hidden) so position: sticky keeps working inside main */}
      <main id="main" data-layout={layout} className={`${mainLayouts[layout]} overflow-x-clip`}>
        {children}
      </main>
      <Footer region={region} searches={searches} />
      {/* Room for the fixed mobile contact bar so it never covers the footer */}
      <div className="h-20 bg-ink lg:hidden" aria-hidden="true" />
      <StickyContactBar />
    </>
  );
}

export default SiteShell;

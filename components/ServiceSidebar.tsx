import Link from "next/link";
import { Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { getServices, regionNames, type Region } from "@/lib/servicesNav";

const emiratesWeCover: Record<Region, { label: string; href: string }[]> = {
  sharjah: [
    { label: "Movers in Dubai", href: "/movers-and-packers-in-dubai" },
    { label: "Movers in Ajman", href: "/movers-in-ajman" },
    { label: "Movers in Sharjah", href: "/" },
    { label: "Movers in Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
  ],
  dubai: [
    { label: "Movers in Dubai", href: "/movers-and-packer-in-dubai" },
    { label: "Movers in Sharjah", href: "/" },
    { label: "Movers in Ajman", href: "/movers-in-ajman" },
    { label: "Movers in Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
  ],
};

export interface ServiceSidebarProps {
  /** Title shown in the quick contact card */
  ctaTitle: string;
  /** Short description shown below the quick contact title */
  ctaDesc: string;
  /**
   * Which city this page belongs to. Switches the "Our Services" list, the
   * emirates list and the areas block. Defaults to "sharjah".
   */
  region?: Region;
  /** Sharjah areas served — passed per service page (region="sharjah") */
  sharjahAreas?: string[];
  /** Dubai areas served — passed per service page (region="dubai") */
  dubaiAreas?: string[];
}

export function ServiceSidebar({
  ctaTitle,
  ctaDesc,
  region = "sharjah",
  sharjahAreas = [
    "Al Nahda",
    "Al Majaz",
    "Al Taawun",
    "Al Khan",
    "Muwaileh",
    "Al Qasimia",
  ],
  dubaiAreas = [
    "Dubai Marina",
    "JVC",
    "JLT",
    "Business Bay",
    "Downtown Dubai",
    "Al Barsha",
    "Mirdif",
    "Dubai Silicon Oasis",
  ],
}: ServiceSidebarProps) {
  const regionName = regionNames[region];
  const services = getServices(region);
  const areas = region === "dubai" ? dubaiAreas : sharjahAreas;

  return (
    <aside className="flex flex-col gap-5">
      {/* ── Quick Contact Card ── */}
      <div className="relative overflow-hidden rounded-2xl bg-primary p-6 shadow-md">
        {/* Decorative ring */}
        <div
          className="pointer-events-none absolute -top-8 -right-8 size-36 rounded-full border-[20px] border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-6 -left-6 size-24 rounded-full border-[12px] border-white/8"
          aria-hidden="true"
        />

        <h3 className="font-semibold text-white">{ctaTitle}</h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed">{ctaDesc}</p>

        <a
          href="tel:0567277536"
          className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-primary shadow-xs transition-all hover:bg-white/90 active:scale-95"
        >
          <Phone className="size-4 shrink-0" />
          <span>Call: 056 7277536</span>
        </a>
      </div>

      {/* ── Our Services ── */}
      <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-xs">
        <div className="mb-4 flex items-center gap-2.5">
          <div className="h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
          <h3 className="text-base font-semibold text-foreground">
            Our Services
          </h3>
        </div>

        <ul className="flex flex-col divide-y divide-border/50">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group flex items-center justify-between py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-primary/40 transition-colors group-hover:bg-primary"
                    aria-hidden="true"
                  />
                  {service.name} in {regionName}
                </span>
                <ArrowRight className="size-3.5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Locations We Serve ── */}
      <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-xs">
        <div className="mb-4 flex items-center gap-2.5">
          <div className="h-5 w-1 rounded-full bg-primary" aria-hidden="true" />
          <h3 className="text-base font-semibold text-foreground">
            Locations We Serve
          </h3>
        </div>

        {/* Emirates */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
          Emirates We Cover
        </p>
        <ul className="flex flex-col divide-y divide-border/50 mb-5">
          {emiratesWeCover[region].map((loc) => (
            <li key={loc.label}>
              <Link
                href={loc.href}
                className="group flex items-center justify-between py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="size-1.5 shrink-0 rounded-full bg-primary/60 transition-colors group-hover:bg-primary"
                    aria-hidden="true"
                  />
                  {loc.label}
                </span>
                <ArrowRight className="size-3.5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Areas of the current city */}
        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
          {regionName} Areas
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {areas.map((area) => (
            <li key={area}>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground/70">
                <span
                  className="size-1 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {area}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default ServiceSidebar;

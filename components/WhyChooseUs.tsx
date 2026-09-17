import Image from "next/image";
import {
  Star,
  FileCheck,
  ShieldCheck,
  Award,
  Languages,
  PackageCheck,
  Calculator,
  Wrench,
} from "lucide-react";

// Six core service pillars displayed in a clean 3-column grid
const sixPillars = [
  {
    step: "01",
    id: "transparent-pricing",
    title: "Transparent Pricing You Can Verify",
    description:
      "Quotes include labor, packing materials, transport, and reassembly — zero hidden fees. Verify with line‑item breakdown tied to license (valid across 7 UAE Emirates).",
    icon: FileCheck,
    tag: "Zero Hidden Fees",
  },
  {
    step: "02",
    id: "licensed-insured",
    title: "Licensed & Insured Across the UAE",
    description:
      "Licensed Moving Company in Sharjah, covering all 7 Emirates. Verify anytime by contact us through whatsapp or phone call.",
    icon: ShieldCheck,
    tag: "7 Emirates License",
  },
  {
    step: "03",
    id: "ten-years-experience",
    title: "10 Years of Sharjah-Specific Experience",
    description:
      "Team knows Sharjah realities: Al Majaz elevator rules, Industrial Zone cargo timings, neighborhood logistics — from a decade of local moves.",
    icon: Award,
    tag: "Sharjah Reality Insights",
  },
  {
    step: "04",
    id: "free-estimates",
    title: "Free, No‑Obligation Estimates",
    description:
      "Get a detailed, property‑specific estimate at zero cost — no pressure, no hidden charges. We assess your Sharjah home, villa, apartment, or office in person or via video.",
    icon: Calculator,
    tag: "In-Person or Video",
  },
  {
    step: "05",
    id: "quality-packing",
    title: "High‑Quality Packing Materials Included",
    description:
      "Every quote includes bubble wrap, stretch film, and hanger boxes for clothes — selected for Sharjah’s climate and item safety.",
    icon: PackageCheck,
    tag: "Climate-Tested Supplies",
  },
  {
    step: "06",
    id: "multi-language",
    title: "Multi‑Language Support",
    description:
      "Service available in Arabic, English, Urdu, and Hindi — from estimate to unloading.",
    icon: Languages,
    tag: "4 Active Languages",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
    >
      {/* Top Editorial Showcase: Split 7:5 with Exact 700:523 Aspect Ratio Image Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-12">
        {/* Left Column: Title, Google Review Card & In-House Team Feature */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-[2.65rem] font-extrabold ">
              Why Customers Choose{" "}
              <span className="text-primary block mt-2">
                Al Afnan Furniture Transfer
              </span>
            </h2>
          </div>

          {/* Google Verified Review Card */}
          <div className="bg-muted/30 border border-border/70 rounded-2xl p-5 flex items-center gap-4">
            <div className="size-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Star className="size-6 text-amber-500 fill-amber-500" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-base font-extrabold text-foreground">
                4.9/5 Google Customer Rating
              </span>

              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-snug">
                See verified reviews on Google Maps — search “Al Afnan Furniture
                Transfer Sharjah”.
              </p>
            </div>
          </div>

          {/* Featured In-House Team Credential Card */}
          <div className="bg-muted/30 border border-border/70 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="size-12 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 sm:mt-0.5 shadow-xs">
              <Wrench className="size-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground tracking-tight mb-1">
                Professionally Trained Team (Carpenters &amp; Handymen)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Staff includes certified carpenters and handymen for safe
                dismantling, reassembly, and custom packing — no subcontractors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Exact Proportional Image Placeholder Box (700x523 / ~4:3) */}
        <div className="lg:col-span-5">
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-muted/20 border border-border/80 shadow-xs group">
            <Image
              src="/house-movers-in-sharjah-al-afnan-furniture-transfer.jpg"
              alt="Al Afnan Furniture Transfer Professional Moving Team in Sharjah"
              width={700}
              height={523}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: 6 Customer Guarantees in a Symmetrical 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {sixPillars.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="group bg-card rounded-2xl p-6 border border-border/80  flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="size-12 rounded-xl bg-muted/40 text-primary flex items-center justify-center shrink-0 ">
                    <IconComponent className="size-6" />
                  </div>
                </div>

                <h3 className="text-base font-semibold ">{item.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;

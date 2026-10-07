import Image from "next/image";
import {
  Star,
  FileCheck,
  ShieldCheck,
  Award,
  Languages,
  PackageCheck,
  Calculator,
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

/** Why choose us: rating and team credential beside a photo, then the six reasons as a ruled spec list. */
export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-28 section-y">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-ink">
              Why Customers Choose{" "}
              <span className="text-signal block">
                Al Afnan Furniture Transfer
              </span>
            </h2>

            {/* Google rating */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-3 border-t border-ink pt-8">
              <p className="flex items-center gap-4">
                <Image
                  src="/google-icon.svg"
                  alt="Google"
                  width={40}
                  height={40}
                  aria-hidden="true"
                />
                <span className="text-ink">
                  <span className="t-num block text-4xl font-bold leading-none">
                    4.9/5
                  </span>
                  <span className="mt-1 block font-semibold">
                    Google Customer Rating
                  </span>
                </span>
              </p>
              <p className="t-small text-muted-foreground sm:max-w-xs sm:border-s sm:border-line sm:ps-8">
                See verified reviews on Google Maps — search “Al Afnan Furniture
                Transfer Sharjah”.
              </p>
            </div>

            {/* In-house team */}
            <div className="mt-8 border-t border-line pt-8">
              <h3 className="t-h4 text-ink">
                Professionally Trained Team (Carpenters &amp; Handymen)
              </h3>
              <p className="mt-2 t-body text-muted-foreground measure">
                Staff includes certified carpenters and handymen for safe
                dismantling, reassembly, and custom packing — no subcontractors.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-paper-2">
              <Image
                src="/house-moving-services-by-al-afnan.jpg"
                alt="Al Afnan Furniture Transfer Professional Moving Team in Sharjah"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[35%_center]"
              />
            </div>
          </div>
        </div>

        {/* Six reasons as a spec list */}
        <ul className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-ink">
          {sixPillars.map((item) => (
            <li key={item.id} className="reveal border-b border-line py-7">
              <h3 className="t-h4 text-ink">{item.title}</h3>
              <p className="mt-2 t-body text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;

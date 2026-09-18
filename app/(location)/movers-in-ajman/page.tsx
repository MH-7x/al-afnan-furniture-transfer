import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Languages,
  FileCheck,
  Phone,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Services from "@/components/Services";
import MovingProcess from "@/components/MovingProcess";
import { FAQSection } from "@/components/FaqsSection";
import { AjmanFaqs } from "@/lib/FaqsData";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Movers in Ajman Services By Al Afnan Furniture Transfer",
  description:
    "Trusted movers in ajman. Al Afnan Furniture Transfer provide moving services for houses, offices & furniture. Call 056 7277536 for a free moving quote.",
};

const footerSearches = [
  "movers in ajman",
  "movers and packers in ajman",
  "best movers in ajman",
  "furniture movers in ajman",
  "movers packers ajman",
  "packers and movers ajman",
  "furniture movers ajman",
  "best movers and packers in ajman",
  "professional movers in ajman",
  "movers in ajman uae",
];

const whyChooseUsPillars = [
  {
    id: "licensed-uae",
    title: "We’re Licensed to Move Your Belongings Across the UAE",
    description:
      "Our UAE license covers all seven emirates, so your move from Ajman to Dubai or Abu Dhabi follows the same safety standards—no subcontractors, no coverage gaps.",
    icon: ShieldCheck,
    span: "lg:col-span-6",
  },
  {
    id: "ten-years-ajman",
    title: "Ten Years of Ajman-Specific Experience",
    description:
      "We know which buildings in Al Nuaimiya need elevator reservations, how to navigate Al Jurf’s narrow lanes during rush hour, and why villas in Emirates City often require extra padding for marble floors.",
    icon: Clock,
    span: "lg:col-span-6",
  },
  {
    id: "google-rating",
    title: "4.9★ From Real Ajman Customers",
    description:
      "Every rating comes from someone who moved with us here—a teacher in Al Rashidiya, a shop owner near the industrial area, a family relocating to Al Helio 2. We read every review to improve. This consistent feedback has established us as one of the most trusted movers in ajman for residential and commercial moves.",
    icon: Star,
    span: "lg:col-span-4",
  },
  {
    id: "languages",
    title: "Fluent in Your Language (Arabic, English, Urdu/Hindi)",
    description:
      "Moving day involves quick decisions: Where does the sofa go? Can we leave these boxes by the door? When your crew speaks your language fluently, those moments stay clear—no guesswork, no misplaced furniture.",
    icon: Languages,
    span: "lg:col-span-4",
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing—No Surprises",
    description:
      "Your free quote includes labor, truck, packing materials (bubble wrap, stretch film, boxes), furniture disassembly/reassembly, and basic cleanup. What you won’t see: extra charges for stairs, long carries from truck to door, or weekend moves.",
    icon: FileCheck,
    span: "lg:col-span-4",
  },
];
const servicesData = [
  {
    id: "house-movers",
    title: "House Movers in Ajman",
    category: "Home Relocation",
    number: "01",
    image: "/house-moving-services-by-al-afnan.jpg",
    imageAlt:
      "House movers in Ajman carefully handling household furniture and packing room-by-room during a residential move by Al Afnan Furniture Transfer",
    paragraphs: [
      "We pack room-by-room using labeled boxes, disconnect/reconnect appliances (like washing machines), and protect floors/walls with runners.",
      "For Ajman houses in Al Nuaimiya or Al Zahya, we handle yard equipment (lawnmowers, grills), garage organization, and shed disassembly—items apartments don’t have.",
    ],
    cta: "House Moving Services",
    href: "/house-movers-in-sharjah",
  },
  {
    id: "studio-movers",
    title: "Studio Movers in Ajman",
    category: "Studio Shifting",
    number: "02",
    image: "/studio-moving-services.jpg",
    imageAlt:
      "Studio movers in Ajman navigating narrow corridors and carefully angling furniture during a studio relocation",
    paragraphs: [
      "We specialize in studio moves in Al Jurf and Emirates City towers.",
      "Narrow corridors require precise furniture angling—we measure doorways before lifting anything.",
    ],
    cta: "Studio Moving Services",
    href: "/",
  },
  {
    id: "apartment-movers",
    title: "Apartment Movers in Ajman",
    category: "Apartment Shifting",
    number: "03",
    image: "/flat-apartment-movers.jpg",
    imageAlt:
      "Apartment movers in Ajman securing building permits and moving wrapped furniture through a residential corridor",
    paragraphs: [
      "For 2BHKs in Al Rashidiya and Al Zahya, we secure parking permits and coordinate elevator bookings with building management to avoid delays and fines.",
    ],
    cta: "Apartment Moving Services",
    href: "/apartment-movers-in-sharjah",
  },
  {
    id: "villa-movers",
    title: "Villa Movers in Ajman",
    category: "Villa Relocation",
    number: "04",
    image: "/villa-moving-services.jpg",
    imageAlt:
      "Villa movers in Ajman professionally handling heavy items, custom crating marble, and navigating narrow gates",
    paragraphs: [
      "We handle heavy items (safes, pianos, gym equipment) with proper lifting gear, wrap marble/glass surfaces in custom crating, and reassemble outdoor furniture at your new villa.",
      "We’ve moved villas in Al Mowaihat and Al Nuaimiya where narrow gates required specialized maneuvering—our crew plans the route before touching a single item.",
    ],
    cta: "Villa Moving Services",
    href: "/villa-movers-in-sharjah",
  },
  {
    id: "commercial-movers",
    title: "Office Movers in Ajman",
    category: "Office & Business",
    number: "05",
    image: "/commercial-office-movers.jpg",
    imageAlt:
      "Commercial office movers in Ajman relocating workstations, anti-static IT equipment, and office furniture",
    paragraphs: [
      "We dismantle workstations, pack IT equipment in anti-static boxes, and file documents in labeled, sealable crates.",
      "After delivery, we rebuild cubicles and place furniture per your floor plan—critical for minimizing downtime in Ajman’s business districts like the Free Zone or near City Centre.",
    ],
    cta: "Commercial Moving Services",
    href: "/office-movers-in-sharjah",
  },
  {
    id: "furniture-movers",
    title: "Furniture Movers in Ajman",
    category: "Specialized Transfer",
    number: "06",
    image: "/furniture-moving-transfer.jpg",
    imageAlt:
      "Furniture movers in Ajman carefully wrapping beds, wardrobes, and tables using furniture pads and stretch film",
    paragraphs: [
      "Crews disassemble beds, wardrobes, and tables using labeled hardware bags, wrap each piece in furniture pads + stretch film, and reload them exactly as they came apart.",
      "We use hanger boxes for clothes so suits/dresses arrive wrinkle-free no ironing needed. This is why Ajman families with vintage or custom furniture specifically request us.",
    ],
    cta: "Furniture Moving Services",
    href: "/furniture-transfer-in-sharjah",
  },
  {
    id: "packing-services",
    title: "Packing & Unpacking Services in Ajman",
    category: "Full Packaging",
    number: "07",
    image: "/packing-and-moving-services.jpg",
    imageAlt:
      "Professional packing and unpacking team in Ajman packing fragile items with bubble wrap and custom boxes",
    paragraphs: [
      "We bring all materials (boxes, tape, bubble wrap, mattress covers) and pack fragile items (glassware, electronics, art) using industry-standard techniques.",
      "Unpacking includes placing items in designated rooms, removing all debris, and reassembling furniture so your new home feels livable same-day.",
    ],
    cta: "Packing Services",
    href: "/packing-services-in-sharjah",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Survey And Fixed Quote",
    paragraphs: [
      "You call or message us. We come to your home or office in Ajman. We see what needs moving. We note special items like pianos or antiques.",
      "We give you a written price that day. No hidden fees. No obligation.",
    ],
  },
  {
    number: "02",
    title: "Professional Packing And Protection",
    paragraphs: [
      "Our team arrives on schedule. We bring all materials.",
      <>
        We wrap furniture in pads and stretch film. We use hanger boxes for
        clothes. We pack glassware in bubble wrap. We label every box by room.
        We protect floors and walls.
      </>,
    ],
  },
  {
    number: "03",
    title: "Careful Loading Transport And Delivery",
    paragraphs: [
      "We load the truck carefully. Heavy items go on first. We secure everything with straps.",
      "We drive safely to your new place in Ajman or another emirate. We unload room by room. We place boxes where you ask.",
    ],
  },
  {
    number: "04",
    title: "Placement Reassembly And Cleanup",
    paragraphs: [
      "We put furniture where you want it. We reassemble beds wardrobes and tables.",
      "We remove all packing materials. We sweep the floors. We leave your new space clean and ready.",
    ],
  },
];

export default function AjmanPage() {
  return (
    <>
      <main>
        {/* ════════════════════════════════════════════
            HERO SECTION (Unique Editorial Layout)
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-title"
          className="relative w-full overflow-hidden md:pt-20 pt-16 border-b border-border/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              {/* ── Content Column (7 cols) ── */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Breadcrumb */}
                <nav
                  aria-label="Breadcrumb"
                  className="mb-5 flex flex-wrap items-center text-xs text-muted-foreground font-medium"
                >
                  <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
                    <li className="inline-flex items-center gap-1.5">
                      <Link
                        href="/"
                        className="hover:text-primary transition-colors"
                      >
                        Home
                      </Link>
                      <ArrowRight
                        className="size-3 text-muted-foreground/40 shrink-0"
                        aria-hidden="true"
                      />
                    </li>

                    <li className="inline-flex items-center">
                      <span
                        className="text-primary font-semibold"
                        aria-current="page"
                      >
                        Movers in Ajman
                      </span>
                    </li>
                  </ol>
                </nav>

                {/* H1 Heading */}
                <h1
                  id="hero-title"
                  className="font-extrabold text-3xl sm:text-4xl leading-[1.12] "
                >
                  Movers in Ajman{" "}
                  <span className="block text-primary mt-1.5 ">
                    Professional Movers and Packers Services
                  </span>
                </h1>

                {/* Narrative Body Copy */}
                <div className="mt-6 space-y-4">
                  {/* Lead Paragraph */}
                  <p className="text-foreground/85 font-medium text-base sm:text-lg leading-relaxed">
                    Al Afnan Furniture Transfer has been trusted movers in ajman
                    for over 10 years, handling moves across Ajman and the rest
                    of the UAE.
                  </p>

                  {/* Highlighted Service Details & Credibility */}
                  <div className="border-l-2 border-primary/40 pl-4 sm:pl-5 space-y-2.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <p>
                      We move houses, villas, apartments, offices, and furniture
                      with the same crew that packs, loads, and delivers your
                      belongings.
                    </p>
                    <p>
                      Our moving company is licensed, insured, and rated 4.9
                      stars on Google by real customers in Ajman.
                    </p>
                  </div>
                </div>

                {/* CTA Action Button */}

                <Button
                  size="lg"
                  variant={"secondary"}
                  render={
                    <a
                      href="https://wa.me/971567277536"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="py-6 mt-8 md:w-max"
                >
                  Get Your Free Moving Quote
                </Button>
              </div>

              {/* ── Visual Media Column (5 cols, Aspect Ratio 4:3) ── */}
              <div className="lg:col-span-5 w-full">
                <figure
                  aria-label="Al Afnan Furniture Transfer team handling relocation in Ajman"
                  className="relative aspect-square w-full rounded-2xl overflow-hidden "
                >
                  {/* Active high-res visual placeholder — swap file name when your Ajman-specific photo is ready */}
                  <Image
                    src="/movers-in-ajman.jpg"
                    alt="Movers in Ajman — Professional Movers and Packers Services by Al Afnan"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover object-center"
                  />

                  {/* Elegant bottom gradient overlay with caption */}
                  <figcaption className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white flex flex-col justify-end">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-secondary">
                      Al Afnan Furniture Transfer
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      Movers in Ajman &amp; Across the UAE
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            WHY CHOOSE US SECTION
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="why-choose-us-title"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* Header & Intro */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <h2
              id="why-choose-us-title"
              className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground"
            >
              Why Choose Al Afnan for{" "}
              <span className="md:block">Your Move in Ajman?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Moving companies make big promises. We prefer to show you why
              customers in Ajman keep choosing us—through what we actually do,
              not just what we say.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {whyChooseUsPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className={`bg-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between ${pillar.span}`}
                >
                  <div>
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-5">
                      <IconComponent className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mt-2.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Services
          title="Complete Moving & Packing Services in Ajman"
          desc={
            <>
              <p>
                As your trusted movers and packers in ajman,{" "}
                <Link href="/" className="text-primary">
                  Al Afnan Furniture Transfer
                </Link>{" "}
                handle every step of your move so you don’t have to juggle
                multiple movers. Here’s exactly what each service includes,
                based on how we actually operate in Ajman.
              </p>
            </>
          }
          services={servicesData}
        />

        {/* ════════════════════════════════════════════
            SPECIALIZED FURNITURE MOVING SERVICES
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="specialized-furniture-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2
              id="specialized-furniture-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground"
            >
              Specialized Furniture Moving <br className="md:block hidden" />{" "}
              Services in Ajman
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Your furniture deserves movers who treat it like their own. Here’s
              how we handle it differently based on our team’s actual skills and
              materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 1. Carpenter-Led Disassembly & Reassembly (Full Width) */}
            <div className="md:col-span-2 border-t border-border/80 pt-6 sm:pt-8 space-y-3.5">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Carpenter-Led Disassembly &amp; Reassembly
              </h3>
              <div className="max-w-4xl space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Our team includes trained carpenters not just general movers.
                  They handle beds wardrobes and tables. For each piece they
                  label every screw and bolt in sealed bags.
                </p>
                <p>
                  They check joints for weakness while taking it apart. They
                  strengthen loose frames before putting it back together. This
                  means your furniture often arrives stronger than when it left.
                </p>
              </div>
            </div>

            {/* 2. Material-Specific Wrapping Protocols (1 Col, UL List) */}
            <div className="border-t border-border/80 pt-6 sm:pt-8 space-y-3.5">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Material-Specific Wrapping Protocols
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm sm:text-base">
                <li>We do not use one size fits all padding.</li>
                <li>
                  For wood surfaces we use furniture pads plus stretch film.
                </li>
                <li>We never put tape directly on the finish.</li>
                <li>
                  For glass or mirror we use double layered bubble wrap plus
                  corner protectors.
                </li>
                <li>
                  For fabric or upholstery we use breathable covers never
                  plastic.
                </li>
                <li>
                  Plastic traps moisture which damages fabric in Ajman’s
                  humidity.
                </li>
                <li>
                  For clothes we use hanger boxes so suits and dresses arrive
                  wrinkle free.
                </li>
                <li>No ironing needed.</li>
              </ul>
            </div>

            {/* 3. Heavy & Awkward Furniture Logistics (1 Col, UL List) */}
            <div className="border-t border-border/80 pt-6 sm:pt-8 space-y-3.5">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                Heavy &amp; Awkward Furniture Logistics
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm sm:text-base">
                <li>
                  For safes pianos or oversized sectionals we use special tools.
                </li>
                <li>We use furniture dollies with stair climbing tracks.</li>
                <li>
                  This helps with Ajman’s walk up villas like in Al Mowaihat.
                </li>
                <li>
                  Piano moves include keyboard lockdown and pedal protection.
                </li>
                <li>
                  Oversized items get custom crating only if hallways or
                  doorways demand it.
                </li>
                <li>We never add unnecessary extra cost.</li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <p className="p-4 sm:p-5 bg-muted/60 border border-border/60 rounded-xl text-sm sm:text-base text-foreground font-medium leading-relaxed">
                Recently we moved a 300kg safe from an Al Nuaimiya villa to Al
                Helio 2. We used tracked dollies. There was no wall damage.
                There were no delays.
              </p>
            </div>
          </div>
        </section>

        <MovingProcess
          process={processSteps}
          title="Movers in Ajman Work Process"
          desc="We keep the moving process simple. Four clear steps to understand how our movers team work in ajman."
        />

        {/* ════════════════════════════════════════════
            1. SAME-DAY & EMERGENCY MOVING IN AJMAN
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="emergency-moving-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-14 mx-auto text-center">
            <h2
              id="emergency-moving-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground"
            >
              Same-Day &amp; Emergency Moving in Ajman
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              We understand some moves can’t wait. Here’s how we handle urgent
              requests based on our actual setup.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <div className="rounded-2xl bg-primary/95 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-xl font-semibold border-b-2 border-secondary pb-2 text-white mb-3">
                  Same-Day Service Depends On Crew Availability
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  If you call early we try to send a team the same day. We are
                  based in Sharjah so we reach Ajman quickly. But we never
                  promise exact timing. We check our schedule honestly when you
                  call. If we can help we give a fixed price right then. If not
                  we tell you straight away.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl bg-primary/95 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-xl font-semibold border-b-2 border-secondary pb-2 text-white mb-3">
                  Emergency Moves For Urgent Situations
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  For sudden needs like evictions or medical relocations we
                  respond fast. Our Sharjah location means we are often closer
                  than Ajman-based companies. We bring the same crew and
                  materials as scheduled moves. We treat every emergency move
                  with care—not just speed.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl bg-primary/95 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="text-xl font-semibold border-b-2 border-secondary pb-2 text-white mb-3">
                  No Extra Charge For Urgent Service
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Same-day or emergency moves use our standard pricing. You pay
                  the same rate as a booked move. We don’t add rush fees or
                  weekend surcharges. The price we give covers labor truck
                  packing materials and basic reassembly—just like any other
                  move.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Call-Out Banner */}
          <div className="mt-8 rounded-2xl bg-muted/50 border border-border/80 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone className="size-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-foreground">
                  Need urgent moving support in Ajman right now?
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Call our dispatch directly for immediate availability and
                  transparent pricing.
                </p>
              </div>
            </div>
            <a
              href="tel:0567277536"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors shadow-xs shrink-0"
            >
              <Phone className="size-4" />
              <span>Call 056 7277536</span>
            </a>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            2. AREAS WE SERVE ACROSS AJMAN
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="areas-served-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2
              id="areas-served-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground"
            >
              Areas We Serve Across Ajman
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              We serve all neighborhoods in Ajman. Our team moves customers
              regularly in:
            </p>
            <h3 className="mt-5 font-semibold">
              We Serve All Neighborhoods in Ajman
            </h3>
          </div>

          {/* Neighborhood Badges Grid */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-14">
            {[
              "Al Nuaimiya Ajman",
              "Al Rashidiya Ajman",
              "Al Jurf Ajman",
              "Al Mowaihat Ajman",
              "Al Zahya Ajman",
              "Al Manama Ajman",
              "Emirates City Ajman",
              "City of Ajman",
              "Ajman Corniche",
              "Ajman industrial area",
              "Ajman old town",
              "Ajman marina",
              "Ajman university area",
              "Al Helio 2 Ajman",
              "Ajman free zone",
            ].map((area) => (
              <div
                key={area}
                className="p-3 rounded-xl bg-card border border-border/80 "
              >
                <h4 className="text-sm font-medium text-foreground tracking-tight">
                  Movers in {area}
                </h4>
              </div>
            ))}
          </div>

          {/* Moving Between Ajman and Other Emirates Feature Block */}
          <div className="md:rounded-2xl md:border border-border/80 bg-card p-0 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Content Column */}
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4">
                  Moving Between Ajman and Other Emirates
                </h3>
                <div className="space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    We move customers from Ajman to every emirate in the UAE.
                  </p>
                  <p>
                    Our Sharjah base means Ajman to Dubai or Sharjah moves are
                    fast and simple.
                  </p>
                  <p>
                    For Abu Dhabi Ras Al Khaimah Umm Al Quwain Fujairah or Al
                    Ain we schedule based on availability.
                  </p>
                  <div className="pt-2">
                    <div className="p-4 sm:p-5 rounded-xl bg-muted/60 border border-border/60 text-foreground font-medium text-sm sm:text-base">
                      Every cross-emirate move includes the same free survey
                      fixed price and licensed insured service as local moves.
                    </div>
                  </div>
                </div>
              </div>

              {/* 4:3 Image Column */}
              <div className="lg:col-span-5 w-full">
                <div className="relative aspect-4/3 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-border/80 bg-muted/30 shadow-xs">
                  <Image
                    src="/al-afnan-furniture-transfer-sharjah.jpg"
                    alt="Moving between Ajman and other UAE Emirates — Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            3. WHAT AFFECTS YOUR MOVING COST IN AJMAN
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="moving-cost-factors-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16 mx-auto text-center">
            <h2
              id="moving-cost-factors-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-foreground"
            >
              What Affects Your <br /> Moving Cost in Ajman
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Moving costs change based on what we actually see during your free
              survey. We explain the key factors so you understand how we build
              your quote.
            </p>
          </div>

          {/* 3 Key Cost Factors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-14">
            {/* Factor 1 */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors">
              <div>
                <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md mb-4 inline-block">
                  Factor 01
                </span>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-secondary/60 pb-2 mb-3">
                  Distance And Access Details
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    A move purely within Ajman (e.g., Al Nuaimiya to Al Zahya)
                    takes less time than one to another emirate.
                  </p>
                  <p>
                    Building access matters too: narrow streets in Al Jurf,
                    limited parking near Ajman Corniche, or elevator bookings in
                    Emirates City towers all affect truck time and labor.
                  </p>
                  <p>
                    We check these specifics during your no-obligation survey.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors">
              <div>
                <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md mb-4 inline-block">
                  Factor 02
                </span>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-secondary/60 pb-2 mb-3">
                  What You’re Moving And How Much
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    A studio move with minimal furniture requires less truck
                    space and packing material than a villa move with outdoor
                    sets.
                  </p>
                  <p>
                    Heavy or fragile items (like pianos, safes, or glass
                    cabinets) need special handling, extra padding, and
                    sometimes disassembly/reassembly—this adds to the time and
                    materials needed.
                  </p>
                  <p>
                    We note every item during our walkthrough to give you an
                    accurate quote.
                  </p>
                </div>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors">
              <div>
                <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md mb-4 inline-block">
                  Factor 03
                </span>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-secondary/60 pb-2 mb-3">
                  Your Service Choices Directly Shape The Price
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Basic service (loading transport unloading only) costs less
                    than full packing/unpacking.
                  </p>
                  <p>
                    Adding furniture disassembly reassembly increases labor
                    time.
                  </p>
                  <p>
                    You decide what fits your needs and we price only what you
                    approve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Give You A Fixed Price Box */}
          <div className="md:rounded-2xl md:border border-border/80 bg-card pt-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Bulleted Process */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                  How We Give You A Fixed Price
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  After your free survey:
                </p>
                <div className="space-y-3 pt-1">
                  {[
                    "We list every item we’ll move",
                    "We note access challenges (stairs distance parking permits)",
                    "We calculate labor truck and materials based on what we observed",
                    "We give you a written fixed price same day",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Pricing Guarantee and CTA */}
              <div className="lg:col-span-6 bg-muted/50 rounded-xl p-6 sm:p-7 border border-border/80 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-3">
                  <p className="text-sm sm:text-base font-semibold text-foreground leading-relaxed">
                    This price covers everything agreed upon—no hidden fees no
                    surprises.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    If your needs change after the survey we discuss adjustments
                    openly before any work begins.
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="lg"
                    render={
                      <a
                        href="https://wa.me/971567277536?text=Hi,%20I%20would%20like%20to%20request%20a%20free%20moving%20survey%20in%20Ajman"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="w-full sm:w-auto font-semibold shadow-sm"
                  >
                    <span>Book Your Free Moving Survey</span>
                    <ArrowRight className="size-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQSection faqs={AjmanFaqs} title="Questions About Moving in Ajman" />
        <CTASection
          heading="Ready to Move in Ajman?"
          paragraph="Available 24/7 for moves across Ajman. Get your free quote: Call 056 7277536 and talk it through with the team."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

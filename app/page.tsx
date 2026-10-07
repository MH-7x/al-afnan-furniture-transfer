import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Services } from "@/components/Services";
import { MovingProcess } from "@/components/MovingProcess";
import { MovingCosts } from "@/components/MovingCosts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";
import { HomePageFAQs } from "@/lib/FaqsData";
import { Phone, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Licensed Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "movers in sharjah: Al Afnan Furniture Transfer offers trusted moving & packing for homes, apartments and offices. Free estimates. Call 056 7277536.",
};

const homeFooterSearches = [
  "movers in Sharjah",
  "moving company Sharjah",
  "moving companies in Sharjah",
  "Sharjah movers",
  "movers and packers in Sharjah",
  "movers and packers Sharjah",
  "packers and movers Sharjah",
  "furniture movers Sharjah",
  "house movers Sharjah",
  "home movers Sharjah",
  "house shifting Sharjah",
  "home shifting services Sharjah",
  "villa movers Sharjah",
  "apartment movers Sharjah",
  "flat movers Sharjah",
  "office movers Sharjah",
  "commercial movers Sharjah",
  "moving services Sharjah",
  "packing and moving Sharjah",
  "packing services Sharjah",
  "cheap movers Sharjah",
  "affordable movers Sharjah",
  "best movers in Sharjah",
  "movers in Sharjah price",
  "moving company cost Sharjah",
  "storage in Sharjah",
  "movers Sharjah to Dubai",
  "Dubai to Sharjah movers",
  "furniture movers Sharjah to Dubai",
  "long distance movers Sharjah",
  "inter emirate movers Sharjah",
];

const activeRoutes = [
  "Dubai",
  "Abu Dhabi",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

const interEmirateNotes = [
  {
    label: "Scope of Service",
    number: "01",
    text: "Our inter-emirate service covers residential relocations, office moves, and furniture transfers between emirates.",
  },
  {
    label: "Logistics & Delivery",
    number: "02",
    text: "We manage the additional logistics that cross-emirate moves require — including route planning, transport coordination, and timely delivery — so you don’t have to figure out the logistics yourself.",
  },
  {
    label: "Transparent Pricing",
    number: "03",
    text: "Your Sharjah-based moving quote covers the full journey, whether your destination is within Sharjah or across the UAE.",
  },
];

const sharjahAreas = [
  "Al Nahda",
  "Al Majaz",
  "Al Taawun",
  "Al Khan",
  "Muwaileh",
  "Al Qasimia",
  "Al Qarayen",
  "Muwafjah",
  "Sharjah Industrial Area",
];

export default function Home() {
  return (
    <SiteShell searches={homeFooterSearches} layout="bands">
      {/* ── Hero: full-bleed crew photo, dark scrim behind the text ── */}
      <section
        id="hero"
        data-surface="dark"
        className="relative isolate overflow-hidden bg-ink text-fog"
      >
        <Image
          src="/studio-moving-services.jpg"
          alt="Al Afnan Furniture Transfer Sharjah"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[62%_center]"
        />
        {/* Scrim: even on mobile, darker on the text side from tablet up */}
        <div
          className="absolute inset-0 -z-10 bg-ink/80 md:bg-transparent md:bg-[linear-gradient(90deg,rgb(15_17_20/0.94)_0%,rgb(15_17_20/0.86)_42%,rgb(15_17_20/0.35)_100%)]"
          aria-hidden="true"
        />

        <div className="wrap flex min-h-[min(84svh,52rem)] items-center py-20 lg:py-28">
          <div className="hero-stagger max-w-3xl">
            <h1 className="t-display text-white">
              <span className="block">Movers in Sharjah </span>
              <span className="block text-signal-bright">Al Afnan Furniture Transfer</span>
            </h1>

            <p className="mt-7 t-lead text-paper measure">
              Al Afnan Furniture Transfer is a Sharjah based moving company
              providing reliable movers and packers in sharjah for homes,
              apartments, villas, offices, and furniture transfers.
            </p>

            <p className="mt-4 t-body measure">
              With 10 years of experience, transparent pricing with no hidden
              fees, and free moving estimates, we handle every relocation with
              care. Trusted Movers in Sharjah Serving all areas of Sharjah and
              across the UAE.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button render={<Link href="#estimate" />}>
                <span>Get Your Free Sharjah Moving Estimate</span>
                <ArrowRight />
              </Button>
              <Button variant="outline-light" render={<a href={PHONE_HREF} />}>
                <Phone />
                <span>Call 056 7277536</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview: portrait photo + editorial text ── */}
      <section id="overview" className="scroll-mt-28 section-y">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-paper-2">
              <Image
                src="/movers-and-packers-in-sharjah.jpg"
                alt="Professional movers and packers in Sharjah handling residential and office relocation - Al Afnan"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-ink">
              Movers and Packers in Sharjah{" "}
              <span className="text-signal">For Every Move</span>
            </h2>
            <div className="mt-8 border-t border-ink pt-8 space-y-5 measure">
              <p className="t-lead text-steel">
                Al Afnan Furniture Transfer provides moving and packing
                support for customers in Sharjah, covering the practical
                stages of residential, office, and furniture moves. Our team
                can assist with packing, furniture preparation, loading,
                transportation, unloading, and related moving requirements
                based on the needs of your move.
              </p>
              <p className="t-body text-muted-foreground">
                Whether you are shifting to another apartment in Sharjah,
                moving a villa, relocating an office, or transferring
                furniture to another UAE emirate, the right moving plan
                helps keep the process organized and reduces unnecessary
                handling of your belongings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* ── Inter-emirate: route table + three notes ── */}
      <section id="inter-emirate" className="scroll-mt-28 bg-paper-2 section-y">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
            <h2 className="lg:col-span-7 text-ink">
              Inter-Emirate Moving Services{" "}
              <span className="text-signal md:block">From Sharjah</span>
            </h2>
            <p className="lg:col-span-5 t-body text-steel">
              Al Afnan Furniture Transfer operates across all 7 UAE Emirates,
              so moving from Sharjah to Dubai, Abu Dhabi, Ajman, or any other
              emirate is handled with the same professional standard.
            </p>
          </div>

          {/* Routes */}
          <div className="mt-12">
            <span className="t-label text-signal">Active Routes:</span>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 border-t border-ink">
              {activeRoutes.map((emirate) => (
                <li
                  key={emirate}
                  className="flex items-center justify-between gap-4 border-b border-line py-4"
                >
                  <span className="t-h4 text-ink">
                    <span className="text-muted-foreground font-medium">Sharjah to</span> {emirate}
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-signal" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>

          {/* Notes */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-line">
            {interEmirateNotes.map((note) => (
              <div key={note.number} className="md:px-8 first:md:ps-0 last:md:pe-0">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
                  <span className="t-label text-ink">{note.label}</span>
                  <span className="t-num text-2xl font-bold text-signal">{note.number}</span>
                </div>
                <p className="mt-4 t-body text-muted-foreground">{note.text}</p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div
            data-surface="dark"
            className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl bg-signal p-7 sm:p-9"
          >
            <div>
              <h3 className="text-white">Planning a move outside Sharjah?</h3>
              <p className="mt-2 t-body text-white">
                Get a free inter-emirate moving estimate from our team and
                discuss your moving requirements with a professional.
              </p>
            </div>
            <Button variant="white" render={<Link href="#estimate" />} className="shrink-0">
              <span>Get Inter-Emirate Quote</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <MovingProcess />

      <WhyChooseUs />

      <MovingCosts />

      {/* ── Areas: text + area index beside a photo, local CTA below ── */}
      <section id="areas" className="scroll-mt-28 section-y">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-ink">
                Movers Serving Areas{" "}
                <span className="text-signal inline sm:block">Across Sharjah</span>
              </h2>

              <div className="mt-8 space-y-4 t-body text-muted-foreground measure">
                <p>
                  Al Afnan Furniture Transfer provides moving and relocation
                  services for customers across Sharjah. Whether you are
                  moving within the city or relocating to a different
                  property, our team can help with the practical work involved
                  in packing, furniture handling, loading, transportation,
                  unloading and placement.
                </p>
                <p>
                  Our service coverage includes residential and commercial
                  areas such as Al Nahda, Al Majaz, Al Taawun, Al Khan,
                  Muwaileh, Al Qasimia, Al Qarayen, Muwafjah and Sharjah
                  Industrial Area.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 border-t border-ink">
                {sharjahAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 border-b border-line py-3 font-semibold text-ink"
                  >
                    <span className="size-1.5 shrink-0 bg-signal" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-paper-2">
                <Image
                  src="/al-afnan-furniture-transfer-sharjah.jpg"
                  alt="Professional movers and packers in Sharjah handling residential and office relocation - Al Afnan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[30%_center]"
                />
              </div>
            </div>
          </div>

          {/* Local CTA */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-xl border border-ink/15 bg-white p-7 sm:p-9">
            <div className="lg:col-span-8">
              <h2 className="t-h3 text-ink">Trusted Local Movers in Sharjah</h2>
              <p className="mt-2 t-body text-muted-foreground measure">
                If you are searching for local movers in Sharjah, you can
                contact Al Afnan Furniture Transfer to discuss your moving
                requirements and request a free estimate. Our team can help
                you understand the services needed for your move and arrange
                the work around your planned moving date.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <Button render={<a href={PHONE_HREF} />}>
                <span>Call For Local Moving</span>
                <Phone />
              </Button>
              <Button variant="outline" render={<Link href="#areas" />}>
                <span>View Our Service Areas</span>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <div className="bg-paper-2">
        <FAQSection faqs={HomePageFAQs} layout="split" />
      </div>

      {/* ── Quote band ── */}
      <CTASection
        heading="Get a Free Quote From"
        paragraph="Planning a move in Sharjah? Get a free estimate with no hidden fees — just an honest number based on what you're actually moving. Call 056 7277536 and talk it through with the team."
      />
    </SiteShell>
  );
}

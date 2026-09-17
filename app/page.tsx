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
import { Phone, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Licensed Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "movers in sharjah: Al Afnan Furniture Transfer offers trusted moving & packing for homes, apartments and offices. Free estimates. Call 056 7277536.",
};

export default function Home() {
  return (
    <>
      <main>
        <section id="hero" className="px-0 w-full">
          <div className="overflow-hidden md:py-28 py-20 flex items-center relative">
            {/* Background Image */}
            <Image
              src="/al-afnan-furniture-transfer-sharjah.jpg"
              alt="Al Afnan Furniture Transfer Sharjah"
              fill
              priority
              className="object-cover object-center -z-20 filter blur-[0.5px] scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Dark Overlay for Text Readability & Contrast */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/95 md:via-white/85 via-white/90 md:to-white/55 to-white/75  -z-10"
              aria-hidden="true"
            />

            {/* Hero Content */}
            <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-20 max-w-6xl">
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl md:text-start text-center">
                <span className="block ">Movers in Sharjah </span>
                <span className="block text-primary mt-1 sm:mt-2">
                  Al Afnan Furniture Transfer
                </span>
              </h1>

              <p className="mt-5 text-muted-foreground md:text-start text-center md:text-base text-sm leading-relaxed">
                Al Afnan Furniture Transfer is a Sharjah based moving company
                providing reliable movers and packers in sharjah for homes,
                apartments, villas, offices, and furniture transfers.
              </p>

              <p className="mt-3 text-muted-foreground md:text-start text-center md:text-base text-sm leading-relaxed">
                With 10 years of experience, transparent pricing with no hidden
                fees, and free moving estimates, we handle every relocation with
                care. Trusted Movers in Sharjah Serving all areas of Sharjah and
                across the UAE.
              </p>

              <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3.5 sm:gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  render={<Link href="#" />}
                  className="py-6 px-6 "
                >
                  <span>Get Your Free Sharjah Moving Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
                <Button
                  size="lg"
                  render={<Link href="tel:0567277536" />}
                  className="py-6 px-6 "
                >
                  <span>Call 056 7277536</span>
                  <Phone className="size-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="overview"
          className="scroll-mt-24 relative overflow-hidden"
        >
          {/* Subtle Ambient Background */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Visual Image Column */}
              <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto">
                {/* Main Image Frame */}
                <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border/80 bg-card group">
                  <Image
                    src="/movers-and-packers-in-sharjah.jpg"
                    alt="Professional movers and packers in Sharjah handling residential and office relocation - Al Afnan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 pt-4 sm:pt-6 lg:pt-0">
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold  mb-5">
                  Movers and Packers in Sharjah{" "}
                  <span className="text-primary ">For Every Move</span>
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    Al Afnan Furniture Transfer provides moving and packing
                    support for customers in Sharjah, covering the practical
                    stages of residential, office, and furniture moves. Our team
                    can assist with packing, furniture preparation, loading,
                    transportation, unloading, and related moving requirements
                    based on the needs of your move.
                  </p>
                  <p>
                    Whether you are shifting to another apartment in Sharjah,
                    moving a villa, relocating an office, or transferring
                    furniture to another UAE emirate, the right moving plan
                    helps keep the process organized and reduces unnecessary
                    handling of your belongings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Services />

        {/* Inter-Emirate Moving Services Section */}
        <section
          id="inter-emirate"
          className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="rounded-2xl sm:rounded-3xl bg-muted/35 border border-border/70 p-8 sm:p-12 lg:p-14">
            {/* Section Header */}
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold">
                Inter-Emirate Moving Services{" "}
                <span className="text-primary md:block">From Sharjah</span>
              </h2>

              <p className="mt-4 text-foreground/80  text-sm sm:text-base leading-relaxed">
                Al Afnan Furniture Transfer operates across all 7 UAE Emirates,
                so moving from Sharjah to Dubai, Abu Dhabi, Ajman, or any other
                emirate is handled with the same professional standard.
              </p>

              {/* Active Routes Strip */}
              <div className="mt-6 pt-5 border-t border-muted-foreground/15 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mr-1">
                  Active Routes:
                </span>
                {[
                  "Dubai",
                  "Abu Dhabi",
                  "Ajman",
                  "Ras Al Khaimah",
                  "Fujairah",
                  "Umm Al Quwain",
                ].map((emirate) => (
                  <span
                    key={emirate}
                    className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground/80 text-sm font-medium shadow-2xs hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    Sharjah to {emirate}
                  </span>
                ))}
              </div>
            </div>

            {/* 3 Core Editorial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
              {/* Card 1 */}
              <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-border/50">
                    <span className="text-xs  font-semibold tracking-widest text-primary uppercase">
                      Scope of Service
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted-foreground/60">
                      01
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Our inter-emirate service covers residential relocations,
                    office moves, and furniture transfers between emirates.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-border/50">
                    <span className="text-xs  font-semibold tracking-widest text-primary uppercase">
                      Logistics &amp; Delivery
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted-foreground/60">
                      02
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    We manage the additional logistics that cross-emirate moves
                    require — including route planning, transport coordination,
                    and timely delivery — so you don’t have to figure out the
                    logistics yourself.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-border/50">
                    <span className="text-xs  font-semibold tracking-widest text-primary uppercase">
                      Transparent Pricing
                    </span>
                    <span className="text-xs font-mono font-semibold text-muted-foreground/60">
                      03
                    </span>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Your Sharjah-based moving quote covers the full journey,
                    whether your destination is within Sharjah or across the
                    UAE.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Callout Bar */}
            <div className="mt-10 rounded-2xl bg-primary p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Planning a move outside Sharjah?
                </h3>
                <p className="text-white/80 text-sm">
                  Get a free inter-emirate moving estimate from our team and
                  discuss your moving requirements with a professional.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                render={<Link href="#" />}
                className="py-6 px-6 font-semibold text-secondary-foreground shadow-md hover:brightness-105 active:scale-95 transition-all shrink-0"
              >
                <span>Get Inter-Emirate Quote</span>
              </Button>
            </div>
          </div>
        </section>
        <MovingProcess />

        <WhyChooseUs />
        <MovingCosts />
        <section id="areas" className="scroll-mt-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Content Column */}
              <div className="lg:col-span-7 pt-4 sm:pt-6 lg:pt-0">
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold  mb-5">
                  Movers Serving Areas{" "}
                  <span className="text-primary inline sm:block">
                    Across Sharjah
                  </span>
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
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

                  {/* Scannable Area Chips */}
                  <div className="flex flex-wrap gap-2 pt-1 pb-1">
                    {[
                      "Al Nahda",
                      "Al Majaz",
                      "Al Taawun",
                      "Al Khan",
                      "Muwaileh",
                      "Al Qasimia",
                      "Al Qarayen",
                      "Muwafjah",
                      "Sharjah Industrial Area",
                    ].map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/80 text-xs font-semibold text-foreground/80 shadow-2xs"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Visual Image Column */}
              <div className="lg:col-span-5 relative w-full max-w-lg lg:max-w-none mx-auto">
                {/* Main Image Frame */}
                <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border/80 bg-card group">
                  <Image
                    src="/movers-and-packers-in-sharjah.jpg"
                    alt="Professional movers and packers in Sharjah handling residential and office relocation - Al Afnan"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-muted  p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ">
              <div className="max-w-2xl">
                <h2 className="text-xl sm:text-2xl font-semibold  mb-2">
                  Trusted Local Movers in Sharjah
                </h2>
                <p className="text-muted-foreground text-sm ">
                  If you are searching for local movers in Sharjah, you can
                  contact Al Afnan Furniture Transfer to discuss your moving
                  requirements and request a free estimate. Our team can help
                  you understand the services needed for your move and arrange
                  the work around your planned moving date.
                </p>
              </div>

              <div className="flex flex-col items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
                <Button
                  size="lg"
                  render={<Link href="#" />}
                  className="py-6 px-6 font-semibold shadow-xs"
                >
                  <span>Call For Local Moving</span>
                  <Phone className="size-4 ml-1.5" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  render={<Link href="#" />}
                  className="py-6 px-6 font-semibold shadow-xs"
                >
                  <span>View Our Service Areas</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <FAQSection faqs={HomePageFAQs} />

        {/* Reusable Final CTA Section */}
        <CTASection
          heading="Get a Free Quote From"
          paragraph="Planning a move in Sharjah? Get a free estimate with no hidden fees — just an honest number based on what you're actually moving. Call 056 7277536 and talk it through with the team."
        />
      </main>
      <Footer
        searches={[
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
        ]}
      />
    </>
  );
}

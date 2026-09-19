import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { FAQSection } from "@/components/FaqsSection";

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE METADATA & SEO DATA
   ───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Apartment Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "Apartment movers in Sharjah from AED 450. Licensed, 10 years' experience, transparent pricing, free estimates. Studio to 3-BR moves, all areas. Call 056 7277536.",
};

const apartmentFaqs = [
  {
    question: "How much does it cost to move an apartment in Sharjah?",
    answer:
      "Apartment moves in Sharjah generally run from AED 450 for a studio to AED 3,000 or more for a 3-bedroom unit. The exact price depends on packing scope, disassembly needs, and building access, so a quick call with your details gets you an accurate number instead of a rough estimate.",
  },
  {
    question: "Does the price include packing materials?",
    answer:
      "Only if you choose full packing. A transport-only move (you pack, we carry and drive) doesn't include materials. If you want us to pack, the quote includes bubble wrap, stretch film, and hanger boxes as part of the service.",
  },
  {
    question: "Is furniture disassembly and reassembly included?",
    answer:
      "Yes — our team includes carpenters and handymen who take apart beds, wardrobes, and similar furniture where needed, then reassemble everything at the new address as part of the same job.",
  },
  {
    question: "Does moving from Sharjah to Dubai or Abu Dhabi cost more?",
    answer:
      "Yes, inter-emirate moves cost more than a move within Sharjah, mainly due to drive time. We're licensed across all seven emirates, so this is a standard job for us — just let us know the destination when you call for a quote.",
  },
  {
    question: "Do high-rise buildings with limited elevator access cost more?",
    answer:
      "Often, yes. A building with one shared service lift, restricted lift hours, or a long walk from the lift to the loading zone takes more labor time than ground-floor access, and that affects the price. Mention your floor and lift situation when booking so the estimate reflects the actual building.",
  },
];

const sharjahAreasList = [
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

const footerSearches = [
  "apartment movers in Sharjah",
  "flat movers Sharjah",
  "studio apartment movers Sharjah",
  "1 bedroom apartment movers Sharjah",
  "2 bedroom apartment movers Sharjah",
  "3 bedroom flat moving Sharjah",
  "high rise apartment movers Sharjah",
  "house movers in Sharjah",
  "movers and packers in Sharjah",
  "furniture movers Sharjah",
];

export default function ApartmentMoversPage() {
  const faqSchema = generateFAQSchema(apartmentFaqs);

  return (
    <>
      <main>
        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <section className="w-full px-0">
          <div className="relative overflow-hidden py-14 sm:py-20">
            {/* Background gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-muted/70 via-muted/25 to-background"
              aria-hidden="true"
            />
            {/* Decorative blobs */}
            <div
              className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-primary/7 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-1/4 size-64 rounded-full bg-primary/8 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-20 max-w-6xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground font-medium"
              >
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <ArrowRight className="size-3 text-muted-foreground/40 shrink-0" />
                <span className="text-muted-foreground">Services</span>
                <ArrowRight className="size-3 text-muted-foreground/40 shrink-0" />
                <span className="text-primary font-semibold">
                  Apartment Movers in Sharjah
                </span>
              </nav>

              {/* H1 Heading */}
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Apartment Movers in Sharjah{" "}
              </h1>

              {/* Intro Content */}
              <div className="mt-5 space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Al Afnan Furniture Transfer moves apartments and flats across
                  Sharjah, from studios to 3-bedroom units, starting at AED 450.
                </p>
                <p>
                  {" "}
                  We&apos;re licensed and insured to operate across all seven
                  emirates, we&apos;ve been doing this for 10 years, and our
                  Google rating currently sits at 4.9/5. Every job starts with a
                  free estimate based on your bedroom count, packing needs, and
                  building access — not a flat rate pulled out of thin air.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="default"
                  size="lg"
                  render={<Link href="#estimate" />}
                  className="py-6 px-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Get a Free Apartment Moving Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  render={<a href="tel:0567277536" />}
                  className="py-6 px-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Call 056 7277536</span>
                  <Phone className="size-4 ml-1.5" />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-7 pt-6 border-t border-border/50 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-primary shrink-0" />
                  10 Years Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="size-3.5 text-primary shrink-0" />
                  4.9/5 Google Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="size-3.5 text-primary shrink-0" />
                  Zero Hidden Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary shrink-0" />
                  Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  Starts at AED 450
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CONTENT + SIDEBAR
        ════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-16 items-start">
            {/* ── Left: Service Content ── */}
            <article className="min-w-0 service-content">
              {/* 16:9 main image */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/flat-apartment-movers.jpg"
                    alt="Apartment movers in Sharjah handling flat and apartment relocation — Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
                <figcaption>
                  Professional apartment movers in Sharjah — Al Afnan Furniture
                  Transfer
                </figcaption>
              </figure>

              {/* ── What Our Apartment Moving Service Covers ── */}
              <h2>What Our Apartment Moving Service Covers</h2>
              <p>
                Apartment moves aren&apos;t all the same job wearing different
                clothes. A studio move and a 3-bedroom move need different crew
                sizes, different truck space, and different amounts of time
                on-site — so we plan for that upfront rather than sending the
                same team regardless of size.
              </p>

              <h3>Studio &amp; 1-Bedroom Apartment Moves</h3>
              <p>
                These are typically the fastest jobs on our schedule — a smaller
                crew, one trip, and most can be wrapped up in half a day. We
                still disassemble beds and wardrobes where needed and wrap
                furniture properly, even on smaller moves. Just because
                it&apos;s a small job doesn&apos;t mean it gets less careful
                handling.
              </p>

              <h3>2 &amp; 3-Bedroom Apartment Moves</h3>
              <p>
                Larger apartments mean more furniture, more boxes, and usually
                more disassembly work — dining tables, wardrobes, TV units. We
                send a bigger crew and allow more time on-site so nothing gets
                rushed to hit a schedule. If you&apos;ve got a home office, a
                nursery, or a lot of kitchen items, mention it when you call so
                we bring the right packing materials with us.
              </p>

              {/* ── What Affects Apartment Moving Costs in Sharjah ── */}
              <h2>What Affects Apartment Moving Costs in Sharjah</h2>
              <p>
                Most apartment movers in Sharjah quote a range rather than one
                number, and there&apos;s a real reason for that — a handful of
                specific factors change how long the job takes and how many
                people it takes to do it properly.
              </p>

              <h3>Packing Scope — Transport-Only vs. Full Packing</h3>
              <p>
                If you&apos;ve already boxed everything, you&apos;re paying for
                labor and transport only. Full packing adds materials and time,
                since our team wraps furniture, boxes up the kitchen and
                wardrobes, and handles anything fragile with bubble wrap and
                stretch film. Somewhere in between — you pack the easy stuff, we
                handle the breakables — is common too, and it&apos;s worth
                mentioning when you call for a quote.
              </p>

              <h3>Furniture Assembly &amp; Dismantling</h3>
              <p>
                Beds, wardrobes, and flat-pack furniture usually need to come
                apart before they&apos;ll fit through a door or into a lift, and
                go back together at the other end. Our team includes carpenters
                and handymen for this, so it&apos;s not an extra call to a
                separate contractor — it&apos;s part of the same visit.
              </p>

              <h3>Building Access — Service Lifts &amp; Loading Distance</h3>
              <p>
                This is the one people underestimate most, and it&apos;s
                genuinely worth flagging early. A ground-floor flat with parking
                right outside the entrance is a different job from a 20th-floor
                apartment with one shared service lift and a long walk from the
                lift to the loading zone.
              </p>
              <p>
                If your building only allows moves during set service-lift
                hours, or the lift is small and furniture needs to go up in
                pieces, that adds labor time — and labor time is what drives
                cost on this kind of job. Tell us the floor, the lift situation,
                and the walking distance to the parking area when you call, and
                the quote will actually reflect your building instead of a
                generic one.
              </p>
              <h3>Local vs. Inter-Emirate Moves</h3>
              <p>
                Moving within Sharjah costs less than moving to or from Dubai,
                Abu Dhabi, or another emirate, simply because of drive time and
                fuel. We cover all seven emirates, so if your move is
                Sharjah-to-Dubai or similar, say so upfront and we&apos;ll price
                it accordingly rather than assuming a local move.
              </p>

              {/* Two-column 4:3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/furniture-moving-transfer.jpg"
                      alt="Apartment furniture dismantling and packing in Sharjah"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>
                    Furniture dismantling and lift preparation
                  </figcaption>
                </figure>
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/packing-and-moving-services.jpg"
                      alt="Apartment packing services in Sharjah"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Careful wrapping for apartment moves</figcaption>
                </figure>
              </div>

              {/* ── Apartment Moving Prices in Sharjah ── */}
              <h2>Apartment Moving Prices in Sharjah</h2>

              {/* Pricing Table */}
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Apartment Size</th>
                      <th scope="col">Estimated Price Range (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">Studio</td>
                      <td>
                        <span className="price-badge">450 – 1,200</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        1-Bedroom
                      </td>
                      <td>
                        <span className="price-badge">900 – 1,500</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        2-Bedroom
                      </td>
                      <td>
                        <span className="price-badge">1,500 – 2,500</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3-Bedroom
                      </td>
                      <td>
                        <span className="price-badge">2,000 – 3,000+</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These ranges cover typical local moves within Sharjah. Your
                actual price depends on packing level, how much disassembly is
                needed, and building access — so the fastest way to get an exact
                number is a quick call with your bedroom count, packing
                preference, and pickup/drop-off locations.
              </p>

              {/* ── Our Apartment Moving Process ── */}
              <h2>Our Apartment Moving Process</h2>
              <ol>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Free estimate
                    </h3>
                    <p>
                      Call or message us with your apartment size, floor, and
                      moving date. We&apos;ll ask about packing preference and
                      building access before quoting.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Packing (if you&apos;ve chosen this option)
                    </h3>
                    <p>
                      Our team wraps furniture and boxes up your belongings
                      using bubble wrap, stretch film, and hanger boxes for
                      clothes.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Disassembly
                    </h3>
                    <p>
                      Beds, wardrobes, and other furniture that won&apos;t fit
                      through doors or lifts get taken apart.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Loading
                    </h3>
                    <p>
                      Everything moves down to the truck, working around your
                      building&apos;s lift schedule and access rules.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Transport
                    </h3>
                    <p>
                      Your belongings travel to the new address, whether
                      that&apos;s across Sharjah or to another emirate.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Unloading &amp; reassembly
                    </h3>
                    <p>
                      Furniture gets carried in, reassembled, and placed where
                      you want it.
                    </p>
                  </div>
                </li>
              </ol>

              {/* ── Why Choose Al Afnan Furniture Transfer for Apartment Moving ── */}
              <h2>
                Why Choose Al Afnan Furniture Transfer for Apartment Moving
              </h2>
              <p>
                Apartment moves live and die on access — how fast you can get
                furniture in and out of tight hallways, small lifts, and shared
                service corridors.
              </p>
              <p>
                Our team handles this daily, which matters more in a high-rise
                with a 15-minute lift booking window than it does in a villa
                with a driveway. We&apos;re licensed and insured across all
                seven emirates, so a Sharjah-to-Dubai move isn&apos;t a special
                case for us — it&apos;s routine.
              </p>
              <p>
                Our team speaks Arabic, English, and Urdu/Hindi, which helps
                when a building security guard or landlord needs something
                explained on the spot. Pricing is quoted upfront with no hidden
                add-ons once you&apos;ve confirmed the details, and estimates
                are free.
              </p>
              {/* Highlight callout box */}
              <div className="callout">
                <strong>Building access expertise:</strong> Service-lift
                bookings, tight corridors, and security clearance coordination
                handled smoothly across all Sharjah residential towers and
                mid-rises.
              </div>

              {/* ── Areas We Serve ── */}
              <h2>Areas We Serve</h2>
              <p>
                We move apartments across Sharjah, including Al Nahda, Al Majaz,
                Al Taawun, Al Khan, Muwaileh, Al Qasimia, Al Qarayen, Muwafjah,
                and the Sharjah Industrial Area.
              </p>
              <p>
                Whether you&apos;re in a high-rise tower near Al Majaz or a
                mid-rise building in Muwaileh, call ahead with your
                building&apos;s access details and we&apos;ll plan the crew and
                timing around them.
              </p>
              {/* Sharjah Neighborhood Badges */}
              <div className="flex flex-wrap gap-2 my-5 not-prose">
                {sharjahAreasList.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground/80 shadow-2xs"
                  >
                    <span
                      className="size-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {area}
                  </span>
                ))}
              </div>

              {/* ── FAQs About Apartment Movers in Sharjah ── */}

              {/* ── Get a Free Estimate Callout ── */}
              <div className="callout mt-8">
                <strong>Need a quick estimate for your apartment move?</strong>{" "}
                Call our team on{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>{" "}
                with your apartment size, floor, and building access details for
                a transparent, upfront quote.
              </div>
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                ctaTitle="Moving Your Apartment in Sharjah?"
                ctaDesc="Get a free upfront estimate based on your apartment size, floor, and service-lift access. No hidden fees."
                sharjahAreas={sharjahAreasList}
              />
            </div>
          </div>
        </section>
        <FAQSection
          faqs={apartmentFaqs}
          title="Questions About Apartment Movers in Sharjah"
        />
        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Get a Free Apartment Moving Estimate in Sharjah"
          paragraph="Planning an apartment move in Sharjah? Call 056 7277536 for a transparent quote based on your flat size, floor, and packing needs. Fast, reliable service with zero hidden fees."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

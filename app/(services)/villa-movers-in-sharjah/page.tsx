import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  Home as HomeIcon,
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
  title: "Villa Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "Professional villa movers in Sharjah from AED 2,000. Licensed, insured, 10 years' experience, free estimates. 3 to 5+ BR villas, all UAE emirates. Call 056 7277536.",
};

const villaFaqs = [
  {
    question: "How much do villa movers cost in Sharjah?",
    answer:
      "Most villa moves in Sharjah cost between AED 2,000 and AED 7,500, depending on villa size and how much packing and furniture handling is involved. Larger villas or full-service moves with extensive packing can run higher. A free estimate based on your specific villa gives you an accurate number rather than a general range.",
  },
  {
    question: "What is included in a villa moving service?",
    answer:
      "A full villa moving service covers packing and protection of furniture and belongings, dismantling items like wardrobes and beds, loading, transport, unloading, and reassembly at the new address. You can also choose a lighter service, transport only, if you've already packed and don't need furniture taken apart.",
  },
  {
    question: "Do villa movers provide packing services?",
    answer:
      "Yes. We supply the packing materials, bubble wrap, stretch film, and hanger boxes for clothing, and pack fragile and bulky items as part of the move. If you'd rather pack some things yourself and have us handle the rest, that's fine too; just let us know what you need when booking.",
  },
  {
    question: "Can you move large or heavy villa furniture?",
    answer:
      "Yes. Our team includes carpenters and handymen who dismantle and reassemble larger furniture, wardrobes, beds, dining sets, and sectional sofas, and handle heavy pieces with the right technique and enough people on each item to avoid injury or damage.",
  },
  {
    question: "Do you provide villa relocation between Sharjah and Dubai?",
    answer:
      "Yes. We're licensed and insured across all seven UAE emirates, so villa moves between Sharjah and Dubai, or to any other emirate, are handled directly by our own team and trucks.",
  },
  {
    question: "How early should I book villa movers in Sharjah?",
    answer:
      "Booking a week or two ahead gives you the best flexibility on scheduling, though we also offer same-day and emergency moving for villa relocations that come up with little notice.",
  },
  {
    question: "Can you move fragile household items?",
    answer:
      "Yes. Mirrors, glass tabletops, artwork, and other fragile items get individually wrapped and, where needed, boxed separately with extra cushioning rather than packed alongside heavier items.",
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
  "villa movers in Sharjah",
  "villa relocation Sharjah",
  "luxury villa movers Sharjah",
  "3 bedroom villa moving Sharjah",
  "4 bedroom villa movers Sharjah",
  "5 bedroom villa moving Sharjah",
  "house movers in Sharjah",
  "movers and packers in Sharjah",
  "Sharjah to Dubai villa moving",
  "furniture movers Sharjah",
];

export default function VillaMoversPage() {
  const faqSchema = generateFAQSchema(villaFaqs);

  return (
    <>
      {/* FAQ Schema for Google Rich Results */}
      <script
        id="villa-movers-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

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
              className="pointer-events-none absolute -bottom-20 left-1/4 size-64 rounded-full bg-secondary/10 blur-3xl"
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
                  Villa Movers in Sharjah
                </span>
              </nav>

              {/* H1 Heading */}
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Villa Movers in Sharjah{" "}
              </h1>

              {/* Intro Content */}
              <div className="mt-5 space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Al Afnan Furniture Transfer has spent the last 10 years moving
                  villas across Sharjah and the rest of the UAE, with a trained
                  team, transparent quotes, and licensing and insurance that
                  covers all seven emirates.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="secondary"
                  size="lg"
                  render={<Link href="#estimate" />}
                  className="py-6 px-6"
                >
                  <span>Get a Free Villa Moving Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
                <Button
                  size="lg"
                  render={<a href="tel:0567277536" />}
                  className="py-6 px-6"
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
                  All 7 UAE Emirates
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
                    src="/villa-moving-services.jpg"
                    alt="Villa movers in Sharjah professionally handling furniture and household belongings during a residential move — Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
                <figcaption>
                  Professional villa movers in Sharjah — Al Afnan Furniture
                  Transfer
                </figcaption>
              </figure>

              {/* ── Villa Moving Services in Sharjah ── */}
              <h2>Villa Moving Services in Sharjah</h2>
              <p>
                A villa move isn&apos;t one task, it&apos;s several running at
                once: packing, disassembly, transport, and reassembly, often
                across multiple floors and an outdoor area. Here&apos;s how we
                break it down.
              </p>

              <h3>Complete Villa Relocation Services</h3>
              <p>
                We handle the full villa relocation from start to finish,
                planning the move around your villa&apos;s layout, coordinating
                the crew size to match how much needs to move, and managing
                loading, transport, unloading, and placement at the new address.
                Whether you&apos;re relocating within Sharjah or moving into a
                villa in another emirate, the process stays the same: we assess
                the home, plan around access points and floor count, and build a
                schedule that works for you.
              </p>

              <h3>Villa Packing and Protection</h3>
              <p>
                Villas tend to have more breakables per square meter than
                apartments: mirrors, glass tabletops, artwork, chandeliers. Our
                team wraps furniture in protective padding and stretch film,
                boxes fragile items separately with proper cushioning, and uses
                hanger boxes for clothing so it arrives ready to hang rather
                than creased at the bottom of a box. Anything identified as
                fragile gets flagged and handled by the crew members trained for
                it, not whoever&apos;s closest.
              </p>

              <h3>Villa Furniture Moving</h3>
              <p>
                Villa furniture skews heavier and larger than apartment
                furniture. Think solid wood wardrobes, sectional sofas, dining
                sets for eight or ten, and the occasional piano or gym
                equipment. Moving these safely means the right lifting
                technique, the right number of people on each piece, and padding
                at every doorway and staircase corner where a scrape is most
                likely. Our carpenters and handymen dismantle what needs to come
                apart, wardrobes, bed frames, some dining tables, and rebuild
                them at the destination.
              </p>

              <h3>Loading, Transportation and Unloading</h3>
              <p>
                Once everything is packed and disassembled, the crew loads the
                truck in a sequence that protects fragile and heavy items alike,
                usually heavier pieces first, along the walls, with softer or
                boxed items filling gaps. Transport is on our own trucks, and
                unloading follows the same care in reverse, with furniture
                carried directly to the room it belongs in rather than dumped in
                an entryway for later sorting.
              </p>

              <h3>Villa Moving With Packing and Unpacking</h3>
              <p>
                Some customers want to pack their own boxes and just need
                transport. Others want the full service: packing, moving, and
                unpacking on the other end, including putting furniture back
                together and getting boxes out of the way. Both options are
                available. If you&apos;re short on time or just don&apos;t want
                to deal with the packing side of a villa move, tell us upfront
                and we&apos;ll scope the estimate accordingly.
              </p>

              {/* Two-column 4:3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/movers-and-packers-in-sharjah.jpg"
                      alt="Movers and packers in Sharjah preparing villa furniture and fragile belongings for safe transit"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Packing and loading stage</figcaption>
                </figure>
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/furniture-moving-transfer.jpg"
                      alt="Villa furniture dismantling and safe handling in Sharjah"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Safe furniture handling and placement</figcaption>
                </figure>
              </div>

              {/* ── Our Villa Moving Process ── */}
              <h2>Our Villa Moving Process</h2>
              <ol>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Tell us about your villa move.
                    </h3>
                    <p>
                      Give us the villa size, roughly how much furniture is
                      involved, your moving date, and the destination (within
                      Sharjah, another emirate, or international).
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Get your villa moving estimate.
                    </h3>
                    <p>
                      Based on what you&apos;ve shared, or a quick site visit
                      for larger villas, we put together a clear, itemized quote
                      with no hidden line items added later.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Plan your moving date.
                    </h3>
                    <p>
                      We confirm timing around your schedule and, if relevant,
                      any building or community access rules at either end.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Pack and prepare your belongings.
                    </h3>
                    <p>
                      Our crew packs fragile and bulky items with appropriate
                      materials, or works alongside packing you&apos;ve already
                      done.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Load and secure your furniture.
                    </h3>
                    <p>
                      Everything goes into the truck in a sequence built to
                      prevent shifting and damage in transit.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Transport your belongings.
                    </h3>
                    <p>
                      The move happens on schedule, with the crew accounting for
                      traffic and any access restrictions along the route.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Unload, place and reassemble.
                    </h3>
                    <p>
                      Furniture goes into the correct rooms, and anything
                      dismantled gets put back together before the crew leaves.
                    </p>
                  </div>
                </li>
              </ol>

              {/* ── Why Choose Us for Villa Moving in Sharjah? ── */}
              <h2>Why Choose Us for Villa Moving in Sharjah?</h2>

              <h3>Experienced Villa Moving Team</h3>
              <p>
                Ten years of moving villas across Sharjah means the crew has
                seen most of what a villa move throws at them: narrow gates,
                spiral staircases, oversized sectional sofas that barely clear a
                doorway. That experience shows up in fewer surprises on moving
                day.
              </p>

              <h3>Careful Furniture and Household Handling</h3>
              <p>
                Furniture gets wrapped, corners get padded, and heavy pieces get
                carried by enough people to do it safely rather than rushed by
                two. Our team includes trained carpenters and handymen, not just
                laborers, which matters when a wardrobe needs to come apart
                correctly to go back together the same way.
              </p>

              <h3>Flexible Moving Options</h3>
              <p>
                We offer same-day and emergency moving for villa relocations
                that come up on short notice, alongside standard scheduled
                moves. If your move is local, within Sharjah&apos;s
                neighborhoods, or crosses into another emirate, the same team
                and process apply either way, since we&apos;re licensed and
                insured across all seven emirates.
              </p>

              <h3>Clear Moving Estimates</h3>
              <p>
                You get a moving quotation before anything is loaded onto a
                truck, not a number that changes halfway through the day.
                Transparent pricing means no hidden fees added at the end.
              </p>

              {/* ── Villa Moving Prices in Sharjah ── */}
              <h2>Villa Moving Prices in Sharjah</h2>
              <p>
                Villa moving costs in Sharjah generally fall between AED 2,000
                and AED 7,500, and can run higher for larger homes or
                full-service luxury relocations. The final number depends on the
                villa&apos;s size, how much furniture and how many belongings
                need to move, and how much packing and dismantling work is
                involved.
              </p>
              <p>
                Because every villa move is different, most Sharjah moving
                companies, Al Afnan included, work from an estimate rather than
                a flat price list. The ranges below give you a realistic
                starting point before you request your own quote.
              </p>

              {/* Pricing Table */}
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Villa Size</th>
                      <th scope="col">Typical Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3-bedroom villa or townhouse
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 2,000 – AED 5,500
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        4-bedroom villa
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 2,999 – AED 7,000+
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        5-bedroom villa or larger
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 3,500 – AED 15,000+ for full-service relocations
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These figures reflect typical market pricing for villa moves in
                Sharjah and nearby emirates. Your actual cost depends on the
                specifics of your move, which is why a walkthrough or a few
                photos of your villa gets you a far more accurate number than a
                size-based estimate alone.
              </p>

              {/* ── What Affects Villa Moving Costs? ── */}
              <h2>What Affects Villa Moving Costs?</h2>
              <p>
                A few factors move the price up or down more than anything else.
              </p>

              <p>
                <strong>Packing and dismantling.</strong> A move where
                everything is already boxed and furniture is ready to load costs
                less than one where the crew needs to wrap fragile pieces, crate
                mirrors or glass tabletops, and take apart wardrobes, beds, or
                modular sofas before loading.
              </p>
              <p>
                {" "}
                Reassembly on the other end adds labor time too, so a villa with
                a lot of built-in or oversized furniture tends to sit toward the
                higher end of the range.
              </p>

              <p>
                <strong>Inventory and outdoor items.</strong> Villas often come
                with more than what&apos;s inside the walls. Garden furniture,
                planters, outdoor seating, gym equipment, and extra appliances
                like a second fridge or a chest freezer all add volume and
                weight. More volume means a bigger truck and more people on the
                job, and that shows up in the estimate.
              </p>

              <p>
                <strong>Access and permits.</strong> Some Sharjah communities
                require gate passes or advance notice before a moving truck can
                enter, and villas with long driveways or strict parking rules
                can add time to loading and unloading.
              </p>
              <p>
                Community or building management rules occasionally limit which
                days or hours moving is allowed. On its own this rarely adds
                much cost, but it can affect scheduling and crew size.
              </p>
              {/* ── Get a Villa Moving Quote ── */}
              <h2>Get a Villa Moving Quote</h2>
              <p>
                The most accurate way to price your villa move is a free
                estimate based on your actual home and belongings. Al Afnan
                Furniture Transfer provides free, no-obligation villa moving
                quotes with transparent, all-inclusive pricing.
              </p>
              <p>
                Call{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>
                , or share your villa size, moving date, and any special items,
                a piano, gym equipment, heavy marble furniture, and we&apos;ll
                confirm a clear price before moving day.
              </p>
              {/* ── Local and Inter-Emirate Villa Moving From Sharjah ── */}
              <h2>Local and Inter-Emirate Villa Moving From Sharjah</h2>

              <h3>Villa Moving Within Sharjah</h3>
              <p>
                Most villa moves we handle stay within Sharjah, between
                neighborhoods like Al Nahda, Al Majaz, and Al Taawun. Local
                moves are typically the most straightforward to schedule since
                there&apos;s no cross-emirate travel time or paperwork to plan
                around.
              </p>

              <h3>Sharjah to Dubai Villa Moving</h3>
              <p>
                Villa moves between Sharjah and Dubai are common given how many
                people live in one emirate and work in the other. We plan these
                around Dubai traffic patterns and any building access
                requirements at the delivery address.
              </p>

              <h3>Dubai to Sharjah Villa Moving</h3>
              <p>
                The route works the same way in reverse. If you&apos;re
                relocating a villa from Dubai into Sharjah, the crew, trucks,
                and process are the same as any local Sharjah move, just with a
                longer transport leg.
              </p>

              <h3>Inter-Emirate Villa Relocation</h3>
              <p>
                Because Al Afnan is licensed and insured across all seven UAE
                emirates, villa relocations to Abu Dhabi, Ajman, Ras Al Khaimah,
                Fujairah, or Umm Al Quwain are handled by the same team rather
                than handed off to a subcontractor. Distance affects the
                estimate, but not the level of care your furniture gets.
              </p>

              {/* ── Areas We Serve for Villa Moving in Sharjah ── */}
              <h2>Areas We Serve for Villa Moving in Sharjah</h2>
              <p>
                We move villas across Sharjah, including Al Nahda, Al Majaz, Al
                Taawun, Al Khan, Muwaileh, Al Qasimia, Al Qarayen, Muwafjah, and
                the Sharjah Industrial Area, along with surrounding
                neighborhoods throughout the city. If you&apos;re not sure
                whether your area is covered, call us, chances are it is.
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
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                ctaTitle="Need Help Moving Your Villa?"
                ctaDesc="Call us now for a free estimate with no hidden fees. Our trained team handles villas of all sizes across Sharjah and the UAE."
                sharjahAreas={sharjahAreasList}
              />
            </div>
          </div>
        </section>

        <FAQSection title="Questions About Villa Movers in Sharjah" />
        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Get a Free Villa Moving Estimate in Sharjah"
          paragraph="Al Afnan Furniture Transfer has moved villas across Sharjah and all seven UAE emirates for over 10 years. Call 056 7277536 for a free, no-obligation villa moving quote with transparent, upfront pricing."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

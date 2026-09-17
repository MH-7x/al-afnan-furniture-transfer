import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { FAQSection } from "@/components/FaqsSection";

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE DATA — SEO metadata & structural content
   ───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "House Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "Professional house movers in Sharjah. Licensed, insured, 10 years' experience, free estimates, 24/7 service. Call 056 7277536.",
};

const houseMoversFaqs = [
  {
    question: "How much does it cost to move a house in Sharjah?",
    answer:
      "It depends on the size of your home, how much needs packing, distance, and any dismantling required. We give free estimates based on your specific move rather than a flat rate that doesn't reflect what you actually need moved.",
  },
  {
    question: "How early should I book house movers in Sharjah?",
    answer:
      "Booking a week or two ahead gives you more flexibility on dates, especially around weekends and month-end when demand is higher. That said, we also handle same-day and urgent moves when schedules allow — worth calling to check availability if your move is last-minute.",
  },
  {
    question: "Do house movers provide packing services?",
    answer:
      "Yes. We pack using bubble wrap, stretch film, and hanger boxes for clothes as part of our house moving service, or we can work around boxes you've already packed yourself.",
  },
  {
    question: "Do you move furniture and household items?",
    answer:
      "Yes — beds, wardrobes, sofas, appliances, and general household items are all covered as part of a standard house move.",
  },
  {
    question: "Do you dismantle and reassemble furniture?",
    answer:
      "Yes. Our team includes trained carpenters and handymen who dismantle furniture that won't clear doorways or stairwells and reassemble it properly at your new home.",
  },
  {
    question: "Can you handle local house shifting within Sharjah?",
    answer:
      "Yes, most of our moves are local — within neighborhoods like Al Majaz, Al Nahda, Al Taawun, and across the city generally.",
  },
  {
    question: "Can you provide an estimate before moving day?",
    answer:
      "Yes, we give free estimates upfront based on the details of your move, and the quoted price is what you pay — no hidden fees added later.",
  },
  {
    question: "Can you handle urgent or last-minute house moves?",
    answer:
      "We offer same-day and emergency moving service where scheduling allows, so it's worth a call even if your move date is close.",
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
  "house movers in Sharjah",
  "house moving company Sharjah",
  "residential movers Sharjah",
  "home movers Sharjah",
  "house shifting Sharjah",
  "home shifting services Sharjah",
  "house movers and packers Sharjah",
  "furniture movers Sharjah",
  "villa movers Sharjah",
  "apartment movers Sharjah",
];

export default function HouseMoversPage() {
  const faqSchema = generateFAQSchema(houseMoversFaqs);

  return (
    <>
      {/* FAQ Schema for Google Rich Results */}
      <script
        id="house-movers-faq-schema"
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
                  House Movers in Sharjah
                </span>
              </nav>

              {/* H1 Heading */}
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                House Movers in Sharjah{" "}
              </h1>

              {/* Intro Content */}
              <div className="mt-5 space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Moving house is one of those jobs that looks simple until
                  you&apos;re standing in a half-packed living room at 9pm
                  wondering where the box with the kitchen knives went.
                </p>
                <p>
                  Al Afnan Furniture Transfer handles house moves across Sharjah
                  — from single-room apartments to full family homes — with a
                  team that&apos;s been doing this for ten years and knows
                  exactly how a Sharjah move tends to go sideways if it
                  isn&apos;t planned properly.
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
                  <span>Get a Free House Moving Estimate</span>
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
                  Zero Hidden Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary shrink-0" />
                  Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  24/7 Moving Service
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
              <p>
                We&apos;re licensed and insured to operate across all seven UAE
                emirates, and most of our work is right here in Sharjah, in
                neighborhoods like Al Nahda, Al Majaz, Al Taawun, Al Khan and
                Muwaileh. If you&apos;re relocating within the city, moving in
                from another emirate, or need packing and furniture handling
                without the full move, this is the service page for that.
              </p>
              <p>
                <strong className="text-foreground font-semibold">
                  Call{" "}
                  <a
                    href="tel:0567277536"
                    className="text-primary hover:underline font-semibold"
                  >
                    056 7277536
                  </a>{" "}
                  for a free estimate
                </strong>
                , or keep reading for how the process works, what&apos;s
                included, and what a house move in Sharjah typically involves.
              </p>
              {/* 16:9 main image */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/house-movers-in-sharjah-al-afnan-furniture-transfer.jpg"
                    alt="House movers in Sharjah carefully handling household furniture during a residential move — Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
                <figcaption>
                  Professional house movers in Sharjah — Al Afnan Furniture
                  Transfer
                </figcaption>
              </figure>

              {/* ── House Moving Services in Sharjah ── */}
              <h2>House Moving Services in Sharjah</h2>
              <p>
                A house move isn&apos;t one task, it&apos;s several stacked on
                top of each other: packing, dismantling furniture that
                won&apos;t fit through the door otherwise, loading a truck
                without damaging anything, driving across the city, then doing
                the whole thing in reverse at the other end. We cover each part.
              </p>

              <h3>Complete House Moving</h3>
              <p>
                We handle the move start to finish — packing, furniture
                dismantling, loading, transport, unloading, and placing items
                where you want them in the new home. You don&apos;t have to
                split the job between different companies for packing and
                transport; one team does the whole thing, which also means one
                point of contact if something needs adjusting mid-move.
              </p>

              <h3>Household Furniture and Belongings Moving</h3>
              <p>
                Beds, wardrobes, sofas, dining sets, appliances, boxes of
                everything else a home accumulates over the years — our team is
                trained to handle household items without the improvised lifting
                and dragging that causes most moving damage. Awkward pieces (a
                large wardrobe, a fridge, a dining table that doesn&apos;t fold)
                get carried properly, not shoved through a doorway and hoped for
                the best.
              </p>

              <h3>House Packing and Protection</h3>
              <p>
                We pack using bubble wrap, stretch film, and hanger boxes for
                clothes, which matters more than it sounds like it should.
                Stretch film keeps drawers and doors from swinging open
                mid-move. Hanger boxes mean your wardrobe arrives ready to hang
                up rather than as a pile of wrinkled clothes at the bottom of a
                box. Fragile items get wrapped individually, not just tossed in
                with padding around the edges of the box.
              </p>

              <h3>Loading, Transportation and Unloading</h3>
              <p>
                Loading order matters — heavier furniture goes in first and is
                secured so it doesn&apos;t shift during transport, with boxes
                and lighter items placed to avoid crushing anything underneath.
                At the new home, we unload in a sequence that gets large
                furniture into rooms before boxes start piling up in doorways.
              </p>

              <h3>Local House Relocation in Sharjah</h3>
              <p>
                Most of our house moves are local — within Sharjah, sometimes
                just a few streets over, sometimes across the city from Al Nahda
                to Muwaileh. Local knowledge helps here more than people expect:
                knowing which buildings have service elevators, which streets
                get blocked during school pickup hours, and which parking
                situations need a permit sorted in advance.
              </p>

              {/* ── What Our House Moving Service Includes ── */}
              <h2>What Our House Moving Service Includes</h2>

              <h3>Moving Preparation and Planning</h3>
              <p>
                Before moving day, we walk through what&apos;s being moved, flag
                anything that needs special handling (glass tabletops, artwork,
                electronics), and confirm timing around building access —
                elevator bookings, parking permits, loading bay hours, whatever
                your specific building requires.
              </p>

              <h3>Packing and Protective Wrapping</h3>
              <p>
                Items are wrapped and boxed using materials matched to what they
                are — bubble wrap for anything fragile, stretch film for
                furniture, sturdy cartons for books and kitchenware. Boxes are
                labeled by room so unpacking doesn&apos;t turn into a guessing
                game.
              </p>

              <h3>Furniture Dismantling and Handling</h3>
              <p>
                Wardrobes, bed frames, and larger furniture that won&apos;t
                clear a doorway or stairwell intact get dismantled by our
                trained team — carpenters and handymen who reassemble everything
                correctly at the destination, not just enough to hold weight
                until you notice a wobble a week later.
              </p>

              <h3>Loading and Secure Transportation</h3>
              <p>
                Furniture and boxes are loaded and secured in the truck to
                prevent shifting or damage in transit, whether the drive is ten
                minutes across Al Majaz or an hour to another emirate.
              </p>

              <h3>Unloading and Placement</h3>
              <p>
                Items are carried in and placed in the rooms you specify, so
                you&apos;re not the one moving a wardrobe for the second time in
                one day.
              </p>

              <h3>Unpacking and Moving Assistance</h3>
              <p>
                If you want help unpacking rather than facing a stack of boxes
                for the next week, we can do that too — this is arranged as part
                of your estimate, not something added on unannounced afterward.
              </p>

              {/* Two-column 4:3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/movers-and-packers-in-sharjah.jpg"
                      alt="Movers and packers in Sharjah preparing household items for safe transport"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Packing and loading stage</figcaption>
                </figure>
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/villa-movers-in-sharjah-al-afnan-furniture-transfer.jpg"
                      alt="Villa movers in Sharjah unloading furniture at the new property"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Unloading at the new home</figcaption>
                </figure>
              </div>

              {/* ── Why Choose Us as Your House Movers in Sharjah? ── */}
              <h2>Why Choose Us as Your House Movers in Sharjah?</h2>

              <h3>Experienced and Trained Moving Team</h3>
              <p>
                Ten years of house moves in Sharjah means the team has handled
                the awkward cases — narrow stairwells, buildings with no service
                lift, apartments on the fifth floor with an elevator that&apos;s
                &ldquo;temporarily out of service.&rdquo; Our movers,
                carpenters, and handymen are trained specifically for household
                furniture, not general labor pulled in for the day.
              </p>

              <h3>Careful Handling of Household Items</h3>
              <p>
                Damage during a house move almost always comes down to rushing
                or improvising. We don&apos;t do either — items are wrapped,
                carried, and loaded the same careful way whether it&apos;s a
                2-bedroom apartment or a full villa&apos;s worth of furniture.
              </p>

              <h3>Reliable Moving Schedule</h3>
              <p>
                We show up when we say we will and work to the timeline agreed
                at booking, not a rough estimate that slips by hours.
              </p>

              <h3>Suitable Moving Vehicles and Equipment</h3>
              <p>
                Trucks, trolleys, and moving equipment sized to the job — an
                apartment move doesn&apos;t need the same setup as a full house,
                and using the right vehicle keeps costs reasonable instead of
                padded.
              </p>

              <h3>Clear Moving Estimates</h3>
              <p>
                Pricing is transparent, with no hidden fees added once the truck
                is loaded. What&apos;s quoted is what&apos;s charged, based on
                the details you give us upfront.
              </p>

              <h3>Safe and Organized House Relocation</h3>
              <p>
                We&apos;re recognized as one of the more trusted movers in
                Sharjah, and that reputation is built on moves that go the way
                they&apos;re supposed to — nothing broken, nothing missing,
                nothing that shows up as a surprise charge.
              </p>

              <div className="callout">
                <strong>Multi-language support</strong> is available in Arabic,
                English, and Urdu/Hindi, so instructions and questions
                don&apos;t get lost in translation on moving day itself.
              </div>

              {/* ── House Moving Prices in Sharjah ── */}
              <h2>House Moving Prices in Sharjah</h2>
              <p>
                House moving costs in Sharjah come down to how much you&apos;re
                moving, how much packing you need, and how accessible your
                building is. Here&apos;s what local moves typically run:
              </p>

              {/* Pricing Table */}
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Property Size</th>
                      <th scope="col">Typical Cost Range</th>
                      <th scope="col">What&apos;s Usually Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Studio / 1-Bedroom Apartment
                      </td>
                      <td>
                        <span className="price-badge">AED 400 – AED 1,200</span>
                      </td>
                      <td>
                        Basic transport at the lower end; full-service packing
                        pushes it toward AED 1,200
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        2-Bedroom Apartment
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 1,000 – AED 2,700
                        </span>
                      </td>
                      <td>
                        Dismantling and a larger truck to fit the extra
                        furniture
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3-Bedroom Apartment / Small Villa
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 1,500 – AED 4,500
                        </span>
                      </td>
                      <td>
                        Varies mainly with how much you own and how many movers
                        the job needs
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        4-Bedroom Villa or Larger
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 3,000 – AED 7,500+
                        </span>
                      </td>
                      <td>
                        Multiple rooms, outdoor furniture, and more extensive
                        packing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are ranges, not quotes — the actual number depends on your
                specific move, and we won&apos;t know it until we know what
                you&apos;re moving.
              </p>

              <h3>What Pushes the Price Up or Down</h3>
              <ul>
                <li>
                  <div>
                    <strong>Packing services.</strong> Basic transport, where
                    you&apos;ve already boxed everything, is the cheapest
                    option. Full-service packing — bubble wrap, stretch film,
                    hanger boxes, someone else doing the wrapping — costs more,
                    but it&apos;s also where most moving damage gets prevented.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Disassembly and assembly.</strong> Taking apart a
                    standard bed frame or wardrobe is usually built into the
                    price. Custom furniture, or anything with an unusual
                    mounting or mechanism, can add to the cost since it takes
                    more time and sometimes more hands.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Access conditions.</strong> A high-rise with a
                    service elevator you need to book in advance, or a long
                    carry from where the truck can park to your front door, adds
                    time — and time is most of what you&apos;re paying for on a
                    move.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Timing.</strong> Weekends and month-end dates are
                    when everyone wants to move, so they tend to cost more.
                    Booking on a weekday, or giving us more notice, generally
                    works out cheaper than a last-minute weekend slot.
                  </div>
                </li>
              </ul>

              <h3>How Much Does It Cost to Move a House in Sharjah?</h3>
              <p>
                For most Sharjah house moves, expect somewhere between AED 400
                for a light studio move and AED 7,500+ for a full villa with
                extensive packing. Where you land in that range depends on the
                four factors above — size, packing, access, and timing. The way
                to get an exact number is a quick conversation about what
                you&apos;re moving and where, which is also how we make sure the
                quote actually covers everything instead of leaving something
                out.
              </p>

              <h3>Get a House Moving Estimate</h3>
              <p>
                Call{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>{" "}
                and tell us about your home — size, roughly how much needs
                packing, and your building&apos;s access situation. We&apos;ll
                give you a clear number before you commit to a date, and it
                won&apos;t change once the truck shows up.
              </p>

              {/* ── Our House Moving Process ── */}
              <h2>Our House Moving Process</h2>
              <ol>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Tell Us About Your Move
                    </h3>
                    <p>
                      Share the size of your home, what needs moving, and your
                      target date. This is where you flag anything unusual — a
                      piano, an oversized wardrobe, a building with restricted
                      loading hours.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Get Your Moving Estimate
                    </h3>
                    <p>
                      Based on what you&apos;ve told us, we give you a
                      transparent quote with no hidden fees.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Schedule Your Moving Date
                    </h3>
                    <p>
                      We confirm a date and time, including any building
                      permissions or elevator bookings that need arranging in
                      advance.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Prepare and Pack Your Household Items
                    </h3>
                    <p>
                      Our team packs using bubble wrap, stretch film, and hanger
                      boxes, or works around packing you&apos;ve already done —
                      whichever fits what you&apos;ve booked.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Load and Transport Your Belongings
                    </h3>
                    <p>
                      Everything is loaded securely and transported to your new
                      home, whether that&apos;s across the street or across an
                      emirate.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-semibold text-foreground">
                      Unload and Place Items at Your New Home
                    </h3>
                    <p>
                      Furniture and boxes go into the rooms you specify, and we
                      can help with unpacking if that&apos;s part of your
                      booking.
                    </p>
                  </div>
                </li>
              </ol>

              {/* ── House Movers Serving Areas Across Sharjah ── */}
              <h2>House Movers Serving Areas Across Sharjah</h2>
              <p>
                We move households across Sharjah, including Al Nahda, Al Majaz,
                Al Taawun, Al Khan, Muwaileh, Al Qasimia, Al Qarayen, Muwafjah,
                and the Sharjah Industrial Area.
              </p>
              <p>
                Wherever you&apos;re relocating within the city — or into it —
                the same trained team, packing materials, and transparent
                pricing apply. If you&apos;re moving between emirates,
                we&apos;re licensed to operate across all seven, so a
                Sharjah-to-Dubai or Sharjah-to-Ajman house move is handled the
                same way, start to finish.
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

              {/* ── FAQs About House Moving in Sharjah ── */}
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                ctaTitle="Need Help Moving Your Home?"
                ctaDesc="Call us now for a free estimate with no hidden fees. Our team is ready to help plan your house move in Sharjah."
                sharjahAreas={sharjahAreasList}
              />
            </div>
          </div>
        </section>

        <FAQSection
          title="Questions About House Moving in Sharjah"
          faqs={houseMoversFaqs}
        />
        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Get a Free House Moving Estimate in Sharjah"
          paragraph="If you're planning a house move in Sharjah — or need one sorted quickly — call 056 7277536 for a free, no-obligation estimate. We're based on Jamal Abdul Naser Street near Al Majaz 2, and we serve households across Sharjah with transparent pricing, a trained team, and no surprises once the truck is loaded."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

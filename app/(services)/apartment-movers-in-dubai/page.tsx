import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { ServiceCTAButton } from "@/components/ServiceCTAButton";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";
import { whatsappLink } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE METADATA & SEO DATA
   ───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Apartment Movers in Dubai | Studio to 3BHK – Al Afnan",
  description:
    "Apartment movers in Dubai for studio, 1BHK, 2BHK and 3BHK flats. Moves planned around your building's lift slot and permits. 24/7 team. Call 056 7277536.",
};

const WHATSAPP_PHOTOS = whatsappLink(
  "Hi, I would like a free quote for an apartment move in Dubai",
);

const apartmentFaqs = [
  {
    question: "How much does a 1BHK or 2BHK move cost in Dubai?",
    answer: (
      <p>
        A 1BHK move within Dubai usually costs AED 1,100 to 1,600, and a 2BHK
        AED 1,700 to 2,600, with packing, dismantling and refitting included.
        Floor level, lift size and timing change the final price. You get a
        written quote after we see photos of the flat. See{" "}
        <a href="#apartment-moving-prices-in-dubai-from-studio-to-3bhk">
          apartment moving prices
        </a>{" "}
        for studios and 3BHKs.
      </p>
    ),
  },
  {
    question: "Do you book the service lift?",
    answer: (
      <p>
        Most buildings only accept a lift booking from the resident or owner, so
        you usually make the request through building management. We tell you
        how long a slot to ask for, send any mover details the building needs,
        and plan the move around the slots you get.
      </p>
    ),
  },
  {
    question: "Do I need a move-out permit from my building?",
    answer: (
      <p>
        Usually, yes. Most Dubai apartment buildings need a move-out permit at
        the old building and a move-in permit at the new one. They usually ask
        for your tenancy contract or title deed, your Emirates ID and the
        mover&apos;s details, and some take a refundable deposit.
      </p>
    ),
  },
  {
    question: "How long does a studio or 1BHK move take?",
    answer: (
      <p>
        A studio usually takes a few hours and a 1BHK part of a day, if the
        service lift is booked at both ends. A high floor with a small lift, or
        a long walk from the loading bay, adds time.
      </p>
    ),
  },
  {
    question: "Can you move my flat at night?",
    answer: (
      <p>
        Yes. Our Dubai team works 24/7, so we can work to an evening or night
        lift slot if your building offers one.
      </p>
    ),
  },
  {
    question: "Do you move within the same building?",
    answer: (
      <p>
        Yes. Moving to a different floor or unit in the same building works the
        same way, with packing, dismantling and refitting. You&apos;ll usually
        need one lift booking instead of two, which keeps it simpler.
      </p>
    ),
  },
  {
    question: "Do you move apartments from Dubai to Sharjah?",
    answer: (
      <p>
        Yes. We&apos;re based in Sharjah and move flats between Dubai and every
        emirate. Trucks can&apos;t use Sheikh Mohammed bin Zayed Road between
        Ras Al Khor Road and the Sharjah border from 6:30 to 8:30 am, so we plan
        the departure around it.
      </p>
    ),
  },
];

const dubaiAreasList = [
  "Dubai Marina",
  "JVC",
  "JLT",
  "Dubai Silicon Oasis",
  "Business Bay",
  "Downtown Dubai",
  "Al Barsha",
  "International City",
  "Al Nahda Dubai",
  "Dubai Creek Harbour",
];

const footerSearches = [
  "apartment movers in Dubai",
  "apartment movers and packers in Dubai",
  "flat shifting in Dubai",
  "studio movers in Dubai",
  "1BHK moving in Dubai",
  "2BHK shifting in Dubai",
  "3BHK moving in Dubai",
  "apartment moving prices in Dubai",
  "house movers in Dubai",
  "movers and packers in Dubai",
];

export default function ApartmentMoversInDubaiPage() {
  return (
    <SiteShell region="dubai" searches={footerSearches}>

        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <ServiceHero
          breadcrumb={[
            {
              label: "Movers and Packers in Dubai",
              href: "/movers-and-packer-in-dubai",
            },
          ]}
          current="Apartment Movers in Dubai"
          title="Apartment Movers in Dubai"
          tagline="Studio to 3BHK flat shifting, planned around your building's lift and permit rules"
          badges={[
            { icon: Star, text: "4.9★ Google rating" },
            { icon: ShieldCheck, text: "Licensed and insured" },
            {
              icon: Clock,
              text: "10 years moving homes across the UAE",
            },
            { icon: Clock, text: "24/7 Dubai team" },
          ]}
          primaryCta={{
            label: "WhatsApp photos and your building name",
            href: WHATSAPP_PHOTOS,
            icon: MessageCircle,
          }}
          secondaryCta={{
            label: "Call 056 7277536",
            href: "tel:0567277536",
            icon: Phone,
          }}
        >
          <p>
            Our apartment movers in Dubai pack your flat, take apart the
            furniture, move it through the service lift and set it up again at
            the new apartment. A 1BHK move within Dubai usually costs AED 1,100
            to 1,600 with packing included, and a studio starts from AED 800.
          </p>
        </ServiceHero>

        {/* ════════════════════════════════════════════
            CONTENT + SIDEBAR
        ════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-16 items-start">
            {/* ── Left: Service Content ── */}

            <article className="min-w-0 service-content">
              {/* 16:9 main image (placeholder photo: swap for a real Dubai crew photo) */}
              <p>
                In a Dubai tower, the hardest part of flat shifting is usually
                the building, not the furniture. You need a move permit, a
                service lift slot and a loading bay time, at both ends. Our
                Dubai team works 24/7, so if your building only gives evening or
                night slots, we can work to them. Send a few photos, both
                building names and the floor numbers on WhatsApp, and we&apos;ll
                reply with a free written quote.
              </p>
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/flat-apartment-movers.jpg"
                    alt="Apartment movers in Dubai loading a service lift"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
              </figure>

              {/* ── Apartment movers and packers in Dubai: what's included ── */}
              <h2>
                Apartment movers and packers in Dubai: what&apos;s included
              </h2>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Part of the move</th>
                      <th scope="col">What we do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">Packing</td>
                      <td>
                        Kitchen, wardrobes and fragile items packed, every
                        carton labelled by room
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Dismantling
                      </td>
                      <td>
                        Beds, wardrobes, TV units and dining tables taken apart
                        by our carpenters
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Loading</td>
                      <td>
                        Furniture wrapped in stretch film and taken down in the
                        goods lift
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Transport
                      </td>
                      <td>
                        Driven to the new building and timed to its loading bay
                        slot
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Refitting
                      </td>
                      <td>
                        Beds and wardrobes rebuilt, furniture placed in the
                        right rooms
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Clothes travel in hanger boxes and glassware goes in bubble
                wrap. If you&apos;d rather pack some things yourself, tell us
                which rooms and we&apos;ll price only the rest. For the
                household side of a move, like Ejari, DEWA and the internet, see
                the checklist on our{" "}
                <Link href="/house-movers-in-dubai">house movers in Dubai</Link>{" "}
                page. Moving only one or two pieces? Our{" "}
                <Link href="/furniture-movers-in-dubai">
                  furniture movers in Dubai
                </Link>{" "}
                handle single items.
              </p>

              <figure>
                <div className="img-wide">
                  <Image
                    src="/furniture-moving-transfer.jpg"
                    alt="Flat shifting in Dubai with wardrobes dismantled"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                  />
                </div>
              </figure>

              <ServiceCTAButton href={WHATSAPP_PHOTOS}>
                Get a free apartment moving quote on WhatsApp
              </ServiceCTAButton>

              {/* ── Apartment moving prices in Dubai, from studio to 3BHK ── */}
              <h2
                id="apartment-moving-prices-in-dubai-from-studio-to-3bhk"
                className="scroll-mt-28"
              >
                Apartment moving prices in Dubai, from studio to 3BHK
              </h2>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Apartment</th>
                      <th scope="col">Typical price (AED)</th>
                      <th scope="col">Usually takes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">Studio</td>
                      <td>
                        <span className="price-badge">800 – 1,200</span>
                      </td>
                      <td>A few hours</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">1BHK</td>
                      <td>
                        <span className="price-badge">1,100 – 1,600</span>
                      </td>
                      <td>Part of a day</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">2BHK</td>
                      <td>
                        <span className="price-badge">1,700 – 2,600</span>
                      </td>
                      <td>Most of a day</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">3BHK</td>
                      <td>
                        <span className="price-badge">2,800 – 4,000</span>
                      </td>
                      <td>A full day, sometimes with packing the day before</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are guide prices for moves within Dubai with full packing.
                Your written quote is all-inclusive and stays the same on the
                day unless the job changes, for example furniture you
                didn&apos;t show us. Building permit fees and lift deposits,
                where they apply, are paid directly to building management.
              </p>

              <h3>Studio apartment moving</h3>
              <p>
                Studio movers in Dubai deal with less furniture but the same
                building rules as a big flat. A studio usually has a bed, a
                wardrobe, a small sofa, a dining table and a kitchen&apos;s
                worth of boxes. The furniture is quick. The lift slot often
                decides how long the move takes. If you&apos;re moving out of a
                furnished studio, only your own things come with us, so tell us
                what belongs to the landlord.
              </p>

              <h3>1BHK moving</h3>
              <p>
                A 1BHK adds a separate bedroom, so there&apos;s usually a bed
                frame and a full wardrobe to take apart. The kitchen is the
                slowest room to pack. With a booked service lift at both ends,
                most 1BHK moves fit into one part of the day.
              </p>

              <h3>2BHK shifting</h3>
              <p>
                Two bedrooms means two sets of beds and wardrobes, a dining set
                and a lot more cartons. This is where lift size starts to
                matter. A small service lift on a high floor means more trips,
                and more trips mean more hours. Tell us the floor and the lift
                size when you ask for a quote.
              </p>

              <h3>3BHK moving</h3>
              <p>
                A 3BHK is a full-day job. Many have a maid&apos;s room or study
                as well, and the kitchen is usually fully stocked. For a full
                packing service, we may suggest packing the day before, so
                moving day is only loading, transport and setup. Check how long
                your building lets you hold the service lift, because a 3BHK can
                need a longer slot than the standard one.
              </p>

              <h3>What changes the price of an apartment move</h3>
              <ul>
                <li>
                  <span>
                    Floor level, and the size of the service lift at both
                    buildings
                  </span>
                </li>
                <li>
                  <span>How far the loading bay is from the lift</span>
                </li>
                <li>
                  <span>
                    How much packing we do, and whether you&apos;re packing some
                    rooms yourself
                  </span>
                </li>
                <li>
                  <span>
                    Heavy items, like a piano, a safe or gym equipment
                  </span>
                </li>
                <li>
                  <span>
                    Distance between the buildings, or a move to another emirate
                  </span>
                </li>
                <li>
                  <span>Night, weekend or short-notice timing</span>
                </li>
              </ul>

              <ServiceCTAButton href={WHATSAPP_PHOTOS}>
                Send photos for your exact price
              </ServiceCTAButton>

              {/* ── Service lifts, move permits and loading bays ── */}
              <h2>Service lifts, move permits and loading bays</h2>
              <p>
                Most apartment buildings in Dubai won&apos;t let a mover use the
                lift or the loading bay without notice. The paperwork is usually
                quick, but it has to be done at both buildings before moving
                day.
              </p>

              <h3>Move-out and move-in permits</h3>
              <p>
                Building management or the community office issues the permit,
                sometimes called an NOC. They usually ask for:
              </p>
              <ul>
                <li>
                  <span>Your tenancy contract (Ejari) or title deed</span>
                </li>
                <li>
                  <span>A copy of your Emirates ID</span>
                </li>
                <li>
                  <span>The move date and time</span>
                </li>
                <li>
                  <span>The moving company&apos;s details</span>
                </li>
              </ul>
              <p>
                Some buildings also take a refundable deposit against damage to
                the lift or common areas. The amount and the process differ from
                building to building. Apply as soon as you have a date, and ask
                us for the company documents your building wants.
              </p>

              <h3>Booking the service lift and loading bay</h3>
              <p>
                Each building gives you a time slot for its service lift and
                loading bay. Book both buildings for the same day and leave a
                gap between them for the drive. If the crew misses the slot,
                some buildings won&apos;t let the move continue until a new one
                is booked, so the timing has to be right. When you get your
                slots, send them to us and we&apos;ll plan the day around them.
              </p>

              <h3>Towers and mid-rise buildings work differently</h3>
              <p>
                These are general patterns. Every building sets its own rules,
                so check yours.
              </p>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <td className="px-4 py-3.5" />
                      <th scope="col">High-rise towers</th>
                      <th scope="col">Mid-rise buildings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Examples
                      </td>
                      <td>Dubai Marina, JLT, Business Bay, Downtown</td>
                      <td>
                        JVC, Al Barsha, International City, Dubai Silicon Oasis
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Lift</td>
                      <td>Dedicated service lift, booked in slots</td>
                      <td>
                        Often one lift shared with residents, sometimes stairs
                        only
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">Loading</td>
                      <td>Basement or podium loading bay</td>
                      <td>Street or building parking</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Typical issue
                      </td>
                      <td>
                        Tight slots and long walks from the bay to the lift
                      </td>
                      <td>
                        Stairs, smaller lifts and parking space for the truck
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Truck timing after the October 2026 RTA rules</h3>
              <p>
                Under rules the{" "}
                <a
                  href="https://www.rta.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RTA
                </a>{" "}
                and Dubai Police enforce from 1 October 2026, trucks are
                restricted on Sheikh Zayed Road from 6 am to 10 pm every day.
                Trucks usually reach the towers in Dubai Marina, JLT and Al
                Barsha from that road. Whether the rule affects your move
                depends on the truck and the exact route. We check both
                addresses when we plan. If it applies, we&apos;ll tell you to
                ask both buildings for an early-morning or night slot, and our
                24/7 team works to it.
              </p>

              {/* ── Flat shifting checklist for moving week ── */}
              <h2>Flat shifting checklist for moving week</h2>
              <ul>
                <li>
                  <span>
                    Book the service lift and loading bay at both buildings, and
                    get the move permits
                  </span>
                </li>
                <li>
                  <span>
                    Check if your new building limits truck height in the
                    basement
                  </span>
                </li>
                <li>
                  <span>
                    Empty wardrobes, drawers and kitchen cupboards you&apos;re
                    packing yourself
                  </span>
                </li>
                <li>
                  <span>
                    Defrost the fridge the night before and drain the washing
                    machine
                  </span>
                </li>
                <li>
                  <span>
                    Keep access cards, parking passes and keys for both
                    buildings with you
                  </span>
                </li>
                <li>
                  <span>
                    Photograph the old flat after it&apos;s empty, in case of
                    any deposit dispute
                  </span>
                </li>
                <li>
                  <span>
                    Keep passports, Emirates IDs, jewellery and laptops with
                    you, not in the boxes
                  </span>
                </li>
              </ul>

              {/* ── How your apartment move works ── */}
              <h2>How your apartment move works</h2>
              <ol>
                <li>
                  <div>
                    <strong>Send photos.</strong> Include each room, both
                    building names and the floor numbers.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Get a written quote.</strong> It lists packing,
                    dismantling, transport and refitting.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Book the slots.</strong> You get the lift and
                    loading bay slots from both buildings, and we plan the day
                    around them.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Packing.</strong> The crew packs and labels each
                    room, or only the rooms you&apos;ve left for us.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Moving.</strong> Furniture comes apart, goes down in
                    the lift and is driven to the new building.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Setup.</strong> Beds and wardrobes are rebuilt, and
                    you check each room with the crew before they leave.
                  </div>
                </li>
              </ol>

              {/* ── Why tenants choose Al Afnan as their apartment movers ── */}
              <h2>Why tenants choose Al Afnan as their apartment movers</h2>
              <p>
                Building security and management offices want to deal with
                someone who understands their rules. Our crews speak Arabic,
                English, Urdu and Hindi, so they can sort out a lift key or a
                loading bay question on the spot. The Dubai team works 24/7,
                which helps when the only free lift slot is at night. Our
                carpenters take apart and rebuild the furniture, so you&apos;re
                not left with a pile of wardrobe panels in the new flat.
              </p>
              <p>
                We&apos;re licensed and insured, which many buildings ask about
                before they approve a mover. We&apos;ve moved homes across the
                UAE for 10 years, and our customers rate us 4.9 out of 5 on
                Google. Every quote is written and all-inclusive.
              </p>

              {/* TODO: add 2–3 real Google reviews from apartment moves here
                  (ideally from towers in Dubai Marina or JLT). */}

              <h3>Moving at the end of the month</h3>
              <p>
                Many Dubai leases end at the end of the month, so the last few
                days are when lift slots and moving crews are hardest to get. If
                your dates allow, move a few days earlier. If they don&apos;t,
                book us and your lift slots as soon as you know the date. We
                also take same-day and emergency moves when a crew is free.
              </p>

              {/* ── Areas we cover for apartment moves ── */}
              <h2>Areas we cover for apartment moves</h2>
              <p>
                Our flat movers cover apartments across Dubai, including{" "}
                Dubai Marina, JVC, JLT, Dubai Silicon Oasis, Business Bay, Downtown Dubai, Al Barsha, International City,
                Al Nahda Dubai and Dubai Creek Harbour. We&apos;re based in Al
                Majaz, Sharjah, and also move flats between Dubai and{" "}
                <Link href="/">Sharjah</Link>,{" "}
                <Link href="/movers-in-ajman">Ajman</Link> and the other
                emirates. Moving a villa instead? See{" "}
                <Link href="/villa-movers-in-dubai">villa movers in Dubai</Link>
                , or{" "}
                <Link href="/movers-and-packer-in-dubai">
                  movers and packers in Dubai
                </Link>{" "}
                for every type of move.
              </p>
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                region="dubai"
                ctaTitle="Moving Out of a Flat?"
                ctaDesc="Send photos, both building names and the floor numbers on WhatsApp, or call us. Our Dubai team answers 24 hours a day, and quotes are free and written."
                dubaiAreas={dubaiAreasList}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ SECTION (also outputs the FAQPage schema)
        ════════════════════════════════════════════ */}
        <FAQSection
          title="Apartment movers in Dubai: FAQs"
          subtitle=""
          faqs={apartmentFaqs}
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Book your apartment move"
          paragraph="Send photos of your flat, both building names and the floor numbers on WhatsApp, or call 056 7277536 to book our apartment movers in Dubai. The team answers 24 hours a day, and quotes are free and written."
          whatsappButtonText="WhatsApp us"
          whatsappButtonHref={WHATSAPP_PHOTOS}
          callButtonText="Call 056 7277536"
        />
    </SiteShell>
  );
}

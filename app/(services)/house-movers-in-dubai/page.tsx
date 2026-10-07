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
  title: "House Movers in Dubai | House Shifting Services – Al Afnan",
  description:
    "House movers in Dubai for full home shifting: packing, dismantling, transport and setup in one booking. Free estimate, 24/7 team. Call 056 7277536.",
};

const WHATSAPP_PHOTOS = whatsappLink(
  "Hi, I would like a free quote for a house move in Dubai. I'm sending photos of each room.",
);

const houseFaqs = [
  {
    question: "How much do house movers cost in Dubai?",
    answer: (
      <p>
        A 1-bedroom home usually costs AED 1,100 to 1,600 to move within Dubai,
        a 2-bedroom home AED 1,700 to 2,600, and a 3-bedroom home AED 2,800 to
        4,000, with packing included. Villas start from AED 4,000. You get a
        written, all-inclusive quote after we see your home by photos, video or
        a visit. See{" "}
        <a href="#house-moving-costs-in-dubai">house moving costs</a> for what
        changes the price.
      </p>
    ),
  },
  {
    question: "How do I prepare for house shifting in Dubai?",
    answer: (
      <p>
        Give notice on your current home, book your movers, apply for building
        permits and set up the DEWA move. Then clear out what you won&apos;t
        take and pack an overnight bag for each person. Our{" "}
        <a href="#home-shifting-in-dubai-your-moving-checklist">
          moving checklist
        </a>{" "}
        lists what to do and when.
      </p>
    ),
  },
  {
    question: "Do I need to transfer DEWA and Ejari before moving?",
    answer: (
      <p>
        Register your new tenancy on Ejari first, because DEWA asks for the
        Ejari certificate. Then use DEWA&apos;s Move-to service a few days
        before moving day. It transfers your account and deposit, and DEWA
        activates the new connection within 15 working hours after the deposit
        is paid or transferred.
      </p>
    ),
  },
  {
    question: "Can you move my house on a weekend or at night?",
    answer: (
      <p>
        Yes. Our Dubai team works 24/7, including weekends and evenings. Some
        buildings and communities only allow moves at set hours, so we confirm
        those with you before fixing the time.
      </p>
    ),
  },
  {
    question: "How long does a house move take?",
    answer: (
      <p>
        Most one- and two-bedroom homes are moved in a single day. Larger homes,
        or moves where we pack everything, can need packing the day before. We
        give you the expected timing with your quote.
      </p>
    ),
  },
  {
    question: "Should I pack myself or let the movers pack?",
    answer: (
      <p>
        Either works. Many families pack clothes and books themselves and leave
        the kitchen, glassware and furniture to us, which keeps the cost down
        without risking breakages. Tell us which rooms you&apos;ll pack when you
        ask for a quote.
      </p>
    ),
  },
  {
    question: "What shouldn't go on the moving truck?",
    answer: (
      <p>
        Keep passports, Emirates IDs, tenancy papers, jewellery, cash, medicines
        and laptops with you. Gas cylinders, fuel and cleaning chemicals
        shouldn&apos;t travel on the truck. Pets go with you too.
      </p>
    ),
  },
  {
    question: "Can you move just part of my house?",
    answer: (
      <p>
        Yes. If you only need a few rooms or some furniture moved, tell us
        what&apos;s going and we&apos;ll price only that. For one or two pieces,
        our{" "}
        <Link href="/furniture-movers-in-dubai">furniture movers in Dubai</Link>{" "}
        are the better fit.
      </p>
    ),
  },
];

const dubaiAreasList = [
  "Dubai Marina",
  "JVC",
  "JLT",
  "Al Barsha",
  "Mirdif",
  "Al Warqa",
  "International City",
  "Al Nahda Dubai",
  "Dubai Silicon Oasis",
  "Dubai South",
];

const footerSearches = [
  "house movers in Dubai",
  "house shifting services in Dubai",
  "home shifting in Dubai",
  "home movers in Dubai",
  "family house shifting in Dubai",
  "house moving costs in Dubai",
  "villa movers in Dubai",
  "apartment movers in Dubai",
  "furniture movers in Dubai",
  "movers and packers in Dubai",
];

export default function HouseMoversInDubaiPage() {
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
          current="House Movers in Dubai"
          title="House Movers in Dubai"
          tagline="One team for the whole house shift, from the first box to the last wardrobe refitted"
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
            label: "WhatsApp photos of your home",
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
            Our house movers in Dubai handle the whole move in one booking. We
            pack every room, take apart the beds and wardrobes, drive everything
            to your new home and put it back together there. A 2-bedroom home
            usually costs AED 1,700 to 2,600 to move within Dubai, with packing
            included.
          </p>
        </ServiceHero>

        {/* ════════════════════════════════════════════
            CONTENT + SIDEBAR
        ════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-16 items-start">
            {/* ── Left: Service Content ── */}
            <article className="min-w-0 service-content">
              <p>
                The Dubai team works 24 hours a day, including weekends, so the
                move can fit around school, work and your handover date. If a
                date changes at short notice, we also take same-day moves when a
                crew is free. Send a few photos or a short video of each room on
                WhatsApp and we&apos;ll come back with a free written quote. If
                you&apos;d rather someone sees the house first, we&apos;ll book
                a free home visit.
              </p>
              {/* 16:9 main image (placeholder photo: swap for a real Dubai crew photo) */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/house-moving-services-by-al-afnan.jpg"
                    alt="House movers in Dubai carrying a wrapped sofa"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
              </figure>

              {/* ── House shifting services in Dubai: what one booking covers ── */}
              <h2>House shifting services in Dubai: what one booking covers</h2>
              <p>
                Most people hiring home movers in Dubai want one thing: to hand
                over the whole job and not chase five different people. A full
                house shift with us includes:
              </p>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Stage</th>
                      <th scope="col">What we do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">Packing</td>
                      <td>
                        Every room packed and labelled with where it goes in the
                        new home
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Dismantling
                      </td>
                      <td>
                        Beds, wardrobes, dining tables and TV units taken apart
                        by our carpenters
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Loading and transport
                      </td>
                      <td>
                        Furniture wrapped, loaded and driven to the new address
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Unloading and refitting
                      </td>
                      <td>
                        Everything carried to the right room and rebuilt the
                        same day
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Unpacking (on request)
                      </td>
                      <td>
                        Kitchen and wardrobes unpacked so the house works on the
                        first night
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Packing every room</h3>
              <p>
                The kitchen takes the longest. Plates, glasses and pans go in
                bubble wrap and cartons marked &quot;fragile, kitchen&quot;.
                Clothes go in hanger boxes, straight from your wardrobe rail to
                the new one, so nothing needs ironing on day one. Sofas and
                mattresses are wrapped in stretch film. Every carton gets the
                name of the room it&apos;s going to, which means the crew can
                unload in order instead of stacking boxes in the living room.
              </p>

              <figure>
                <div className="img-wide">
                  <Image
                    src="/packing-and-moving-services.jpg"
                    alt="House shifting services in Dubai packing a kitchen"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                  />
                </div>
              </figure>

              <h3>Furniture dismantling and refitting</h3>
              <p>
                Our carpenters take apart beds, wardrobes, bunk beds, cots and
                dining tables, keep the screws for each piece in a labelled bag,
                and rebuild them at the new house before the crew leaves. If a
                sofa, wardrobe or fridge looks too big for a door or lift, point
                it out in your photos. The carpenters will plan how to take it
                apart, or which route it takes, before moving day.
              </p>

              <h3>Appliances</h3>
              <p>
                Defrost the fridge the night before and leave the door open so
                it dries. Drain the washing machine. Water lines and gas cookers
                need disconnecting before anyone lifts them, so show us
                what&apos;s connected when you send your photos. Fridges travel
                upright.
              </p>

              <h3>Packing some rooms yourself</h3>
              <p>
                Our home shifting services don&apos;t have to be all or nothing.
                Plenty of families pack clothes, books and personal things
                themselves and leave the kitchen, the glassware and the
                furniture to us. Tell us which rooms you&apos;ll do when you ask
                for the quote and we&apos;ll price only the rest. We can drop
                off cartons and hanger boxes before the day.
              </p>
              <p>
                Moving out of a flat? Our{" "}
                <Link href="/apartment-movers-in-dubai">
                  apartment movers in Dubai
                </Link>{" "}
                page covers service lifts and building permits. Moving a villa?
                See{" "}
                <Link href="/villa-movers-in-dubai">villa movers in Dubai</Link>{" "}
                for gated communities and garden furniture.
              </p>

              <ServiceCTAButton href={WHATSAPP_PHOTOS}>
                Get a free house moving quote on WhatsApp
              </ServiceCTAButton>

              {/* ── House moving costs in Dubai ── */}
              <h2 id="house-moving-costs-in-dubai" className="scroll-mt-28">
                House moving costs in Dubai
              </h2>
              <p>
                Guide prices run from AED 1,100 for a 1-bedroom home to AED
                6,000 for a 4-bedroom villa, depending on the size of the home
                and how much packing you want us to do. All of these include
                full packing:
              </p>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Home size</th>
                      <th scope="col">Typical price (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        1-bedroom home
                      </td>
                      <td>
                        <span className="price-badge">1,100 – 1,600</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        2-bedroom home
                      </td>
                      <td>
                        <span className="price-badge">1,700 – 2,600</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3-bedroom home
                      </td>
                      <td>
                        <span className="price-badge">2,800 – 4,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3 to 4 bedroom villa
                      </td>
                      <td>
                        <span className="price-badge">4,000 – 6,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        5+ bedroom villa
                      </td>
                      <td>
                        <span className="price-badge">
                          From 6,500, on estimate
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Your written quote is all-inclusive: crew, truck, packing
                materials, dismantling and refitting. It stays the same on
                moving day unless the job changes, for example furniture you
                didn&apos;t show us. Building or community permit fees, where
                they apply, are paid directly to the building or community.
              </p>

              <h3>What changes your quote</h3>
              <ul>
                <li>
                  <span>
                    The number of rooms, and how full the storage cupboards and
                    balconies are
                  </span>
                </li>
                <li>
                  <span>
                    How much packing we do, and whether you want unpacking too
                  </span>
                </li>
                <li>
                  <span>
                    Floor level, lift access or stairs, and parking at both
                    homes
                  </span>
                </li>
                <li>
                  <span>
                    Heavy or awkward items, like a piano, a safe or gym
                    equipment
                  </span>
                </li>
                <li>
                  <span>
                    The distance between homes, and whether you&apos;re moving
                    to another emirate
                  </span>
                </li>
                <li>
                  <span>
                    Moving at night, at the weekend or at short notice
                  </span>
                </li>
              </ul>

              <ServiceCTAButton href={WHATSAPP_PHOTOS}>
                Send photos for your exact price
              </ServiceCTAButton>

              {/* ── Home shifting in Dubai: your moving checklist ── */}
              <h2
                id="home-shifting-in-dubai-your-moving-checklist"
                className="scroll-mt-28"
              >
                Home shifting in Dubai: your moving checklist
              </h2>
              <p>
                The moving day itself is usually the easy part. What catches
                people out is the paperwork around it.
              </p>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">When</th>
                      <th scope="col">What to do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        As soon as you have a date
                      </td>
                      <td>
                        Give notice as your tenancy contract requires, book your
                        movers, start clearing out what you won&apos;t take
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        2 weeks before
                      </td>
                      <td>
                        Apply for building or community move permits, arrange
                        the DEWA move, book the internet transfer
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        1 week before
                      </td>
                      <td>
                        Pack the rooms you&apos;re doing yourself, confirm the
                        time slot with both buildings
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        The day before
                      </td>
                      <td>
                        Defrost the fridge, drain the washing machine, pack an
                        overnight bag for each person
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Moving day
                      </td>
                      <td>
                        Keep documents and valuables with you, check every
                        cupboard before the truck leaves
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Tenancy notice and the move-out inspection</h3>
              <p>
                Check your tenancy contract for the notice period and give
                written notice in good time. Before you hand back the keys, the
                landlord or agent usually inspects the home before returning
                your security deposit, so leave time to clean, patch nail holes
                and take photos of each room.
              </p>

              <h3>Ejari and DEWA</h3>
              <p>
                Your new tenancy needs to be registered on Ejari, and
                you&apos;ll need that Ejari certificate for DEWA. DEWA&apos;s{" "}
                <a
                  href="https://www.dewa.gov.ae/en/about-us/service-guide/consumer-services/move-to"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Move-to service
                </a>{" "}
                moves your electricity and water account from your old home to
                the new one and carries your security deposit across. DEWA says
                the new connection is activated within 15 working hours after
                the deposit is paid or transferred, and the old one is
                disconnected within 24 working hours of the date and time you
                choose. Set it up a few days before moving day so you don&apos;t
                arrive to a house with no power.
              </p>

              <h3>Building and community permits</h3>
              <p>
                Most apartment buildings and gated villa communities need a
                move-out permit at the old home and a move-in permit at the new
                one. The details depend on the property, and our{" "}
                <Link href="/apartment-movers-in-dubai">apartment movers</Link>{" "}
                and <Link href="/villa-movers-in-dubai">villa movers</Link>{" "}
                pages explain how each one works.
              </p>

              <h3>Internet, address changes and school routes</h3>
              <p>
                Book the internet move with du or e&amp; as soon as you have the
                new address. Update your address with your bank, your employer
                and the delivery apps you use. If your children take a school
                bus, check the new address is on a route before you sign.
              </p>

              {/* ── Family house shifting within Dubai ── */}
              <h2>Family house shifting within Dubai</h2>
              <p>
                Moving a family is mostly about keeping the first night calm. A
                few things help:
              </p>
              <ul>
                <li>
                  <span>
                    Pack one &quot;open first&quot; box per person: bedding, a
                    change of clothes, toothbrushes, chargers and any medicines
                  </span>
                </li>
                <li>
                  <span>
                    Ask us to rebuild the children&apos;s beds first, so they
                    can go to sleep while the rest of the house comes together
                  </span>
                </li>
                <li>
                  <span>
                    Keep a small kitchen box with the kettle, a few plates, cups
                    and snacks
                  </span>
                </li>
                <li>
                  <span>
                    Pets travel with you, not on the truck, and are best kept in
                    one closed room on both ends
                  </span>
                </li>
                <li>
                  <span>
                    If you have a helper or nanny, agree who stays at the old
                    house and who waits at the new one
                  </span>
                </li>
              </ul>
              <p>
                Our crews speak Arabic, English, Urdu and Hindi, so whoever is
                at home can tell the crew where things go in their own language.
              </p>

              {/* ── How house moving in Dubai works with Al Afnan ── */}
              <h2>How house moving in Dubai works with Al Afnan</h2>
              <ol>
                <li>
                  <div>
                    <strong>Send photos or a video.</strong> Show each room on
                    WhatsApp, or book a free home visit.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Get a written quote.</strong> It lists packing,
                    dismantling, transport and refitting, with no hidden fees.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Fix the date.</strong> We agree a time with you that
                    fits both buildings&apos; moving hours, including evenings
                    and weekends.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Packing.</strong> The crew packs and labels every
                    room, or only the rooms you&apos;ve left for us.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Moving day.</strong> Furniture is taken apart and
                    loaded, driven to the new home and carried room by room.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Setup.</strong> Beds and wardrobes are rebuilt, and
                    you check each room with the crew before they leave.
                  </div>
                </li>
              </ol>

              {/* ── Why families choose Al Afnan as their house moving company ── */}
              <h2>
                Why families choose Al Afnan as their house moving company
              </h2>
              <p>
                Our carpenters and handymen are on our own team, so the person
                who takes your wardrobe apart is the one who knows how to put it
                back. The Dubai team works 24/7, which is useful when your old
                building only allows moves in the evening or your handover moves
                by a day. Quotes are written and all-inclusive, so you know the
                full cost before you book.
              </p>
              <p>
                We&apos;ve moved homes across the UAE for 10 years. We&apos;re
                licensed and insured, and our customers rate us 4.9 out of 5 on
                Google.
              </p>

              {/* TODO: add 2–3 real Google reviews from house moves in Dubai here. */}

              <h3>Same-day and short-notice house moves</h3>
              <p>
                Leases end early, handovers get pushed, and sometimes you need
                to move this week. We take same-day and emergency house moves
                when a crew and truck are free. Building permits can still take
                time, so call as early as you can and tell us both addresses.
              </p>

              {/* ── Areas we cover for house moves in Dubai ── */}
              <h2>Areas we cover for house moves in Dubai</h2>
              <p>
                We move homes across the whole city, including{" "}
                Dubai Marina, JVC, JLT, Al Barsha, Mirdif,
                Al Warqa, International City, Al Nahda Dubai, Dubai Silicon
                Oasis and Dubai South. The service is the same everywhere. What
                changes from one area to the next is access: tower lifts and
                loading bays in Dubai Marina and JLT, street parking around
                low-rise buildings in Al Barsha, and community permits in gated
                areas. We check both addresses when we plan your move.
              </p>

              {/* ── Moving house from Dubai to another emirate ── */}
              <h2>Moving house from Dubai to another emirate</h2>
              <p>
                We&apos;re based in Al Majaz, Sharjah, and we handle home
                relocation between Dubai and every emirate, including{" "}
                <Link href="/">Sharjah</Link>,{" "}
                <Link href="/movers-in-ajman">Ajman</Link>, Abu Dhabi and{" "}
                <Link href="/movers-in-ras-al-khaimah">Ras Al Khaimah</Link>.
                The service is the same, with packing, dismantling and
                refitting, but the timing needs more planning. Trucks can&apos;t
                use Sheikh Mohammed bin Zayed Road between Ras Al Khor Road and
                the Sharjah border from 6:30 to 8:30 am, so we plan departures
                around it. For every type of move across the city, see our{" "}
                <Link href="/movers-and-packer-in-dubai">
                  movers and packers in Dubai
                </Link>{" "}
                page.
              </p>
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                region="dubai"
                ctaTitle="Planning a House Move?"
                ctaDesc="Send a few photos of your home on WhatsApp or call us. Our Dubai team answers 24 hours a day, and quotes are free and written."
                dubaiAreas={dubaiAreasList}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ SECTION (also outputs the FAQPage schema)
        ════════════════════════════════════════════ */}
        <FAQSection
          title="House movers in Dubai: FAQs"
          subtitle=""
          faqs={houseFaqs}
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Book your house move"
          paragraph="Send photos of your home on WhatsApp or call 056 7277536 to book our house movers in Dubai. The team answers 24 hours a day, and quotes are free and written."
          whatsappButtonText="WhatsApp us"
          whatsappButtonHref={WHATSAPP_PHOTOS}
          callButtonText="Call 056 7277536"
        />
    </SiteShell>
  );
}

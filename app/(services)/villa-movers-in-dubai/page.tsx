import Image from "next/image";
import Link from "next/link";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { Clock, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { ServiceCTAButton } from "@/components/ServiceCTAButton";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { whatsappLink } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE METADATA & SEO DATA
   ───────────────────────────────────────────────────────────────────────────── */
export const metadata = MetadataTemplate({
  title: "Villa Movers in Dubai | 24/7 Villa Moving – Al Afnan",
  desc:
    "Villa movers in Dubai for family villas and townhouses. Full packing, carpenters to dismantle and refit, free written quote, 24/7 team. Call 056 7277536.",
  path: "/villa-movers-in-dubai",
  image: { path: "/images/villa-movers-dubai-al-afnan-furniture-transfer.jpg" },
});

const WHATSAPP_VIDEO = whatsappLink(
  "Hi, I would like a free quote for a villa move in Dubai. I'm sending a video of the villa.",
);

const villaFaqs = [
  {
    question: "How much do villa movers cost in Dubai?",
    answer: (
      <p>
        A 3 to 4 bedroom villa usually costs AED 4,000 to 6,000 to move within
        Dubai, including packing, dismantling and refitting. Villas with five or
        more bedrooms start from AED 6,500. Townhouses are priced on estimate.
        You get a written quote after we see the villa by video or a home visit.
        See <a href="#villa-moving-costs-in-dubai">villa moving costs</a> for
        what changes the price.
      </p>
    ),
  },
  {
    question: "How long does a villa move take?",
    answer: (
      <p>
        A fully packed 3 to 4 bedroom villa usually takes most of a day. Larger
        villas, or moves with a lot of packing, can run over two days, with
        packing on the first. We give you the expected timing with your quote so
        you can plan permits and the handover.
      </p>
    ),
  },
  {
    question: "Do you dismantle wardrobes, beds and outdoor furniture?",
    answer: (
      <p>
        Yes. Our carpenters take apart wardrobes, beds, dining sets, trampolines
        and climbing frames, keep the fittings labelled and rebuild everything
        at the new villa. Built-in wardrobes and anything fixed to the ground
        stay where they are.
      </p>
    ),
  },
  {
    question: "Do I need a permit to move out of a gated villa community?",
    answer: (
      <p>
        Usually, yes. Most gated communities need a move-out permit at the old
        villa and a move-in permit at the new one, issued by community
        management. Apply as soon as you have a date. See{" "}
        <a href="#gated-communities-move-permits-and-truck-timing">
          gated communities and permits
        </a>{" "}
        for what they usually ask for.
      </p>
    ),
  },
  {
    question: "Can you do an urgent or same-day villa move?",
    answer: (
      <p>
        Often, yes. Our Dubai team works 24/7 and takes same-day and emergency
        moves when a crew and truck are free. Gated communities may still need a
        permit before the truck can enter, so call as early as you can and tell
        us the community name.
      </p>
    ),
  },
  {
    question: "Can you move my villa at night or early in the morning?",
    answer: (
      <p>
        Yes. We can load before 6 am or in the evening. Some communities set
        their own moving hours, so we confirm those along with any truck
        restrictions on your route before we fix the time.
      </p>
    ),
  },
  {
    question: "Can you give me a price without visiting the villa?",
    answer: (
      <p>
        Yes. A WhatsApp video of every room, the garage, the storage areas and
        the garden is enough for most villa quotes. If you prefer, we&apos;ll
        arrange a free home visit instead.
      </p>
    ),
  },
  {
    question: "What should I keep with me on moving day?",
    answer: (
      <p>
        Keep passports, Emirates IDs, tenancy papers, jewellery, cash,
        medicines, laptops, keys and access cards with you, not on the truck.
        Pets should travel with you too. For Ejari, DEWA and the rest of the
        household checklist, see our{" "}
        <Link href="/house-movers-in-dubai">house movers in Dubai</Link> page.
      </p>
    ),
  },
  {
    question: "Do you move townhouses?",
    answer: (
      <p>
        Yes. Townhouses get the same service as villas, including packing,
        dismantling and refitting. Staircases are usually narrower, so we plan
        which pieces need taking apart before moving day.
      </p>
    ),
  },
];

const dubaiAreasList = [
  "Arabian Ranches",
  "Dubai Hills Estate",
  "The Springs",
  "The Meadows",
  "Jumeirah Park",
  "Palm Jumeirah",
  "Damac Hills",
  "Mirdif",
  "Al Warqa",
  "Jumeirah",
];

const footerSearches = [
  "villa movers in Dubai",
  "villa movers and packers in Dubai",
  "villa moving costs in Dubai",
  "townhouse movers in Dubai",
  "villa relocation in Dubai",
  "gated community movers in Dubai",
  "house movers in Dubai",
  "apartment movers in Dubai",
  "furniture movers in Dubai",
  "movers and packers in Dubai",
];

export default function VillaMoversInDubaiPage() {
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
          current="Villa Movers in Dubai"
          title="Villa Movers in Dubai"
          tagline="Villa and townhouse moves across Dubai, garden included, with our own carpenters on the team"
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
            label: "WhatsApp a video of your villa",
            href: WHATSAPP_VIDEO,
            icon: MessageCircle,
          }}
          secondaryCta={{
            label: "Call 056 7277536",
            href: "tel:0567277536",
            icon: Phone,
          }}
        >
          <p>
            Our villa movers in Dubai pack, move and set up villas and
            townhouses anywhere in the city. One team handles the whole job.
            They wrap every room, take apart the beds and wardrobes, load the
            garden furniture and put it all back together at the new villa. A 3
            to 4 bedroom villa move within Dubai usually costs AED 4,000 to
            6,000 with full packing.
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
                The Dubai team works 24 hours a day, so a move can start early
                in the morning, run late into the evening, or happen at short
                notice when a handover date changes. The fastest way to get a
                price is a short video walk-through on WhatsApp. Include the
                garage, the storage room and the garden, because that&apos;s
                where most villa quotes go wrong. We&apos;ll send a free written
                quote. If you&apos;d rather someone looks in person, we&apos;ll
                book a free home visit.
              </p>
              {/* 16:9 main image (placeholder photo: swap for a real Dubai crew photo) */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/images/villa-movers-dubai-al-afnan-furniture-transfer.jpg"
                    alt="Villa movers in Dubai loading furniture from a family villa"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
              </figure>

              {/* ── Villa movers and packers in Dubai: what the service covers ── */}
              <h2>
                Villa movers and packers in Dubai: what the service covers
              </h2>
              <p>
                A villa relocation in Dubai is a different job from a flat.
                There&apos;s usually no lift, just stairs. There are more rooms,
                and then there&apos;s everything outside them: the maid&apos;s
                room, the cupboard under the stairs, the garage shelves, the
                garden. We plan for all of it from the start.
              </p>

              <h3>Packing every room, including the ones people forget</h3>
              <p>
                The crew packs room by room. Glassware and crockery go in bubble
                wrap. Sofas and mattresses get covered in stretch film so they
                stay clean through the dust of loading. Clothes move in hanger
                boxes, straight from one wardrobe rail to the next without
                folding.
              </p>
              <p>
                Every box is marked with the room it&apos;s going to in the new
                villa, not the one it came from. That way the crew can unload in
                order and you aren&apos;t hunting for the kettle at 10 pm. If
                you&apos;d like to pack books, clothes or personal things
                yourself, tell us when you ask for the quote and we&apos;ll
                price only what&apos;s left.
              </p>

              <figure>
                <div className="img-wide">
                  <Image
                    src="/images/packing-unpacking-services-dubai-al-afnan-movers.jpg"
                    alt="Villa movers and packers in Dubai wrapping a sofa in stretch film"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                  />
                </div>
              </figure>

              <h3>
                Taking apart and refitting beds, wardrobes and dining sets
              </h3>
              <p>
                Large wardrobes and king-size beds often won&apos;t make it
                around a villa staircase in one piece. Our carpenters take them
                apart upstairs, bag and label the screws and fittings for each
                piece, and rebuild them in the right room at the new address
                before the crew leaves. Glass and marble table tops come off
                their bases and travel separately, standing on edge. Built-in
                wardrobes stay where they are. Only moving a few pieces? Our{" "}
                <Link href="/furniture-movers-in-dubai">
                  furniture movers in Dubai
                </Link>{" "}
                handle single items.
              </p>

              <h3>Garden and outdoor furniture</h3>
              <p>
                Villa moves come with outdoor sofa sets, sun loungers, dining
                tables, planters, trampolines, swing sets and BBQ grills. We
                take apart trampolines and climbing frames for the truck and put
                them back up at the other end.
              </p>
              <p>
                Before moving day, disconnect the gas cylinder from the BBQ and
                keep it off the truck, along with fuel from the lawnmower and
                any pool chemicals. Plants can travel, but a closed truck gets
                very hot in Dubai, so it&apos;s better to move delicate ones in
                your own car early in the day.
              </p>

              <h3>Appliances, gym equipment and heavy items</h3>
              <p>
                Fridges travel upright and should be defrosted the night before.
                Washing machines need draining and their drum secured.
                Treadmills fold or come apart, and we box weights so they
                can&apos;t shift. Water lines and gas cookers need disconnecting
                before the crew lifts anything, so show us what&apos;s connected
                in your video and we&apos;ll plan for it.
              </p>

              <h3>Unpacking and setup in the new villa</h3>
              <p>
                At the new villa, furniture goes into the rooms you choose, and
                beds and wardrobes are rebuilt the same day. Our handymen can
                rehang curtains, mount TVs and fix mirrors while the rest of the
                crew finishes unloading. Ask for this when you book so we send
                the right people.
              </p>

              <ServiceCTAButton href={WHATSAPP_VIDEO}>
                Get a free villa moving quote on WhatsApp
              </ServiceCTAButton>

              {/* ── Villa moving costs in Dubai ── */}
              <h2 id="villa-moving-costs-in-dubai" className="scroll-mt-28">
                Villa moving costs in Dubai
              </h2>
              <p>
                A 3 to 4 bedroom villa move within Dubai usually costs AED 4,000
                to 6,000 with full packing, dismantling and refitting. Villas
                with five or more bedrooms start from AED 6,500 and are priced
                after we&apos;ve seen the villa.
              </p>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Villa size</th>
                      <th scope="col">Typical price (AED)</th>
                      <th scope="col">What&apos;s included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        2 to 3 bedroom townhouse
                      </td>
                      <td>
                        <span className="price-badge">On estimate</span>
                      </td>
                      <td>Packing, dismantling, transport, refitting</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3 to 4 bedroom villa
                      </td>
                      <td>
                        <span className="price-badge">4,000 – 6,000</span>
                      </td>
                      <td>Packing, dismantling, transport, refitting</td>
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
                      <td>Same, and may need two trucks or two days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are guide prices for moves within Dubai. Your written
                quote is all-inclusive and stays the same on moving day unless
                the job changes, for example extra furniture you didn&apos;t
                show us. Community permit fees or deposits, where they apply,
                are paid directly to community management.
              </p>

              <h3>What changes the price of a villa move</h3>
              <ul>
                <li>
                  <span>
                    How much is in the garage, storage room and maid&apos;s
                    room, not just the bedrooms
                  </span>
                </li>
                <li>
                  <span>How much of the packing you want us to do</span>
                </li>
                <li>
                  <span>
                    Stairs inside the villa, and how far the truck can park from
                    your front door
                  </span>
                </li>
                <li>
                  <span>
                    Outdoor furniture, play equipment and gym equipment
                  </span>
                </li>
                <li>
                  <span>
                    Distance between the two villas, and whether you&apos;re
                    moving to another emirate
                  </span>
                </li>
                <li>
                  <span>
                    Early-morning or late-evening timing to fit community hours
                    or truck restrictions
                  </span>
                </li>
              </ul>

              <h3>Cutting the cost without hiring cheap villa movers</h3>
              <p>
                A very low quote usually leaves something out. It might be the
                packing materials, the carpenter or a second truck, and the
                price goes up on the day. Instead, sell or give away what you
                won&apos;t take before we arrive. Pack books and clothes
                yourself if you have the time. Avoid the last few days of the
                month if you can, because that&apos;s when many leases end and
                moving days fill up first. Every quote from us is all-inclusive,
                with no hidden fees.
              </p>

              <ServiceCTAButton href={WHATSAPP_VIDEO}>
                Send a video for your exact price
              </ServiceCTAButton>

              {/* ── Villa moving by size ── */}
              <h2>
                Villa moving by size: townhouses, family villas and larger homes
              </h2>

              <h3>Townhouse moves</h3>
              <p>
                Townhouse movers in Dubai deal with narrower staircases than
                most villas, and often three levels counting the roof terrace.
                Sofas sometimes have to go over the banister instead of round
                the turn. Cluster communities also tend to have shared parking,
                so we work out where the truck stands before moving day.
              </p>

              <h3>4 and 5 bedroom villas</h3>
              <p>
                In a 4 or 5 bedroom villa moving job, most of the volume sits
                upstairs in the bedrooms and in the maid&apos;s room. For a full
                packing service at this size, we may suggest packing the day
                before. Moving day is then only loading, transport and
                unloading, which keeps it shorter for your family.
              </p>

              <h3>Larger villas and two-day moves</h3>
              <p>
                For the biggest homes we usually split the job. Day one is
                packing, with beds left up so you can sleep there. Day two is
                the move. Majlis seating, large dining sets and chandeliers get
                their own planning. Chandeliers need an electrician to
                disconnect them before the crew takes them down.
              </p>
              <p>
                Moving from a flat instead? Lift bookings and building permits
                work differently, and our{" "}
                <Link href="/apartment-movers-in-dubai">
                  apartment movers in Dubai
                </Link>{" "}
                page covers them.
              </p>

              {/* ── Gated communities, move permits and truck timing ── */}
              <h2
                id="gated-communities-move-permits-and-truck-timing"
                className="scroll-mt-28"
              >
                Gated communities, move permits and truck timing
              </h2>
              <p>
                Most gated villa communities in Dubai won&apos;t let a moving
                truck through the gate without a move-out or move-in permit,
                often called an NOC, from community management. Which office you
                deal with depends on the master developer. Arabian Ranches,
                Dubai Hills Estate, The Springs and The Meadows are Emaar
                communities. Jumeirah Park and Palm Jumeirah are Nakheel
                communities, and Damac Hills is managed under DAMAC.
              </p>
              <p>Communities usually ask for:</p>
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
                Some charge a fee or take a refundable deposit, and processing
                times vary. Apply for both the old and the new villa as soon as
                you have a date. Ask us for the company documents your community
                needs and we&apos;ll send them for your application.
              </p>
              <p>
                Open communities like Mirdif, Al Warqa and Jumeirah usually
                don&apos;t need a gate permit. Street parking and narrow
                internal roads still matter there, so we check where the truck
                can stop. See{" "}
                movers in Mirdif and movers in Palm Jumeirah for those areas.
              </p>

              <h3>Truck restrictions from October 2026</h3>
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
                restricted on Sheikh Zayed Road, Beirut Street and residential
                areas including Al Mizhar, Muhaisnah and Oud Al Muteena from 6
                am to 10 pm every day. Trucks also can&apos;t use Sheikh
                Mohammed bin Zayed Road between Ras Al Khor Road and the Sharjah
                border from 6:30 to 8:30 am.
              </p>
              <p>
                Whether a restriction affects your move depends on the truck and
                the exact route. When you book, we check both addresses against
                the current rules and pick a time that works. Because our Dubai
                team runs 24/7, that might mean loading at night or leaving
                before 6 am.
              </p>

              {/* ── How villa moving in Dubai works with Al Afnan ── */}
              <h2>How villa moving in Dubai works with Al Afnan</h2>
              <ol>
                <li>
                  <div>
                    <strong>Show us the villa.</strong> Send a video on WhatsApp
                    or book a free home visit. Include the outside areas.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Get a written quote.</strong> It lists what&apos;s
                    included: packing, dismantling, transport and refitting.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Plan the date.</strong> We agree a time that fits
                    your community&apos;s moving hours and the truck rules, and
                    send any documents your permit application needs.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Packing.</strong> The crew wraps and labels
                    everything by destination room. On large villas this can be
                    the day before.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Moving day.</strong> Furniture comes down, the truck
                    is loaded with the heaviest pieces first, and everything is
                    unloaded room by room at the new villa.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Setup and check.</strong> Beds and wardrobes are
                    rebuilt, and you walk through every room with the crew
                    before they leave.
                  </div>
                </li>
              </ol>

              {/* ── Why families choose Al Afnan as their villa movers ── */}
              <h2>Why families choose Al Afnan as their villa movers</h2>
              <p>
                Our carpenters and handymen are part of the team, so taking
                apart a wardrobe and putting it back together doesn&apos;t
                depend on someone we&apos;ve called in for the day. The Dubai
                team works 24/7 and takes same-day and emergency moves, which
                helps when a handover date moves or a community only allows
                trucks at certain hours. Our crews speak Arabic, English, Urdu
                and Hindi, so they can talk to gate security, your community
                office and your household staff without any back and forth
                through you.
              </p>
              <p>
                We&apos;ve moved homes across the UAE for 10 years. We&apos;re
                licensed and insured, and our customers rate us 4.9 out of 5 on
                Google. Every quote is written and all-inclusive.
              </p>

              <h3>What to check before you book villa movers in Dubai</h3>
              <p>
                The best villa movers in Dubai for your move are the ones that
                can answer these clearly:
              </p>
              <ul>
                <li>
                  <span>
                    Did they see the villa, by video or a visit, before giving a
                    price?
                  </span>
                </li>
                <li>
                  <span>
                    Is the quote in writing, and does it list packing,
                    dismantling and refitting?
                  </span>
                </li>
                <li>
                  <span>
                    Who handles the permit paperwork, and what do they need from
                    you?
                  </span>
                </li>
                <li>
                  <span>Are they licensed and insured?</span>
                </li>
                <li>
                  <span>
                    Do their recent Google reviews mention villa moves?
                  </span>
                </li>
              </ul>

              {/* ── Moving a villa between Dubai and another emirate ── */}
              <h2>Moving a villa between Dubai and another emirate</h2>
              <p>
                We&apos;re based in Al Majaz, Sharjah, and we move villas
                between Dubai and every emirate, including{" "}
                <Link href="/movers-in-sharjah">Sharjah</Link>,{" "}
                <Link href="/movers-in-ajman">Ajman</Link>, Abu Dhabi and{" "}
                <Link href="/movers-in-ras-al-khaimah">Ras Al Khaimah</Link>. On
                the Dubai–Sharjah route we plan the departure around the morning
                truck restriction on Sheikh Mohammed bin Zayed Road. For
                apartment and office moves across the city, see our{" "}
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
                ctaTitle="Need Help Moving Your Villa?"
                ctaDesc="Send a short video of your villa on WhatsApp or call us. Our Dubai team answers 24 hours a day, and quotes are free and written."
                dubaiAreas={dubaiAreasList}
              />
            </div>
          </div>
        </section>

        <GoogleReviewsSection />

        {/* ════════════════════════════════════════════
            FAQ SECTION (also outputs the FAQPage schema)
        ════════════════════════════════════════════ */}
        <FAQSection
          title="Villa movers in Dubai: FAQs"
          subtitle=""
          faqs={villaFaqs}
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Book your villa move"
          paragraph="Send a short video of your villa on WhatsApp or call 056 7277536. Our Dubai team answers 24 hours a day, and quotes are free and written."
          whatsappButtonText="WhatsApp us"
          whatsappButtonHref={WHATSAPP_VIDEO}
          callButtonText="Call 056 7277536"
        />
    </SiteShell>
  );
}

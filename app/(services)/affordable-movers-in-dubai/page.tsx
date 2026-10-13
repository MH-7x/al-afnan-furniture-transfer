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
  title: "Affordable Movers in Dubai | No Hidden Fees – Al Afnan",
  desc: "Cheap, affordable movers and packers in Dubai with written, all-inclusive quotes. Studio moves from AED 800, no hidden fees, 24/7 team. Call 056 7277536.",
  path: "/affordable-movers-in-dubai",
  image: {
    path: "/images/studio-movers-dubai-al-afnan-furniture-transfer.jpg",
  },
});

const WHATSAPP_PHOTOS = whatsappLink(
  "Hi, I would like a free written quote from your affordable movers in Dubai. I'm sending photos of each room now.",
);

const affordableFaqs = [
  {
    question: "Who are the cheapest movers and packers in Dubai?",
    answer: (
      <p>
        The cheapest quote isn&apos;t always the cheapest move, because some low
        quotes leave out packing materials or dismantling and add them on the
        day. Compare written, all-inclusive quotes. Ours start from AED 800 for
        a studio and AED 1,100 for a 1-bedroom flat, with packing included.
      </p>
    ),
  },
  {
    question: "How much does a cheap move cost in Dubai?",
    answer: (
      <p>
        A studio move within Dubai starts from AED 800, a 1-bedroom flat from
        AED 1,100 and a 2-bedroom flat from AED 1,700, with packing, dismantling
        and refitting included. Villas start from AED 4,000. See{" "}
        <a href="#affordable-moving-prices-in-dubai">
          affordable moving prices
        </a>{" "}
        for what changes the price.
      </p>
    ),
  },
  {
    question: "Are packing materials included in the price?",
    answer: (
      <p>
        Yes. Cartons, bubble wrap, stretch film and hanger boxes are part of
        every quote, along with the crew, the truck and dismantling and
        refitting.
      </p>
    ),
  },
  {
    question: "Can I pack myself to save money?",
    answer: (
      <p>
        Yes. Pack clothes, books, bedding and other unbreakable things yourself,
        and leave the kitchen, glassware and anything fragile to us. Tell us
        which rooms you&apos;ll do and we&apos;ll price only the rest.
      </p>
    ),
  },
  {
    question: "Is it cheaper to move mid-month or on a weekday?",
    answer: (
      <p>
        It&apos;s usually easier to book. The last days of the month are the
        busiest, because many leases end then. If your dates are flexible, tell
        us and we&apos;ll quote you for more than one date.
      </p>
    ),
  },
  {
    question: "Will there be extra charges on moving day?",
    answer: (
      <p>
        No hidden fees. The written quote only changes if the job changes, for
        example furniture that wasn&apos;t in your photos. Building permit fees
        or deposits, if your building charges them, are paid directly to the
        building.
      </p>
    ),
  },
  {
    question: "Are affordable movers insured?",
    answer: (
      <p>
        We&apos;re licensed and insured. Ask us what the cover includes for your
        move when you get your quote, and check the same with any other mover
        you compare.
      </p>
    ),
  },
  {
    question: "Do you do cheap moves from Dubai to Sharjah?",
    answer: (
      <p>
        Yes. We&apos;re based in Sharjah and move homes between Dubai and every
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
  "International City",
  "Al Nahda Dubai",
  "Al Warqa",
  "Mirdif",
  "Al Barsha",
  "Dubai Silicon Oasis",
  "Dubai South",
];

const footerSearches = [
  "affordable movers in Dubai",
  "cheap movers in Dubai",
  "cheap movers and packers in Dubai",
  "cheap moving company in Dubai",
  "low cost movers in Dubai",
  "affordable moving prices in Dubai",
  "budget movers in Dubai",
  "movers and packers in Dubai",
  "house movers in Dubai",
  "apartment movers in Dubai",
];

export default function AffordableMoversInDubaiPage() {
  return (
    <SiteShell region="dubai" searches={footerSearches}>
      {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
      <ServiceHero
        breadcrumb={[
          {
            label: "Movers and Packers in Dubai",
            href: "/movers-and-packers-in-dubai",
          },
        ]}
        current="Affordable Movers in Dubai"
        path="/affordable-movers-in-dubai"
        title="Affordable Movers in Dubai"
        tagline="Low, clear prices for flats, villas and offices, with packing and refitting already in the quote"
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
          label: "WhatsApp photos for a free quote",
          href: WHATSAPP_PHOTOS,
          icon: MessageCircle,
        }}
        secondaryCta={{
          label: "Call 056 7277536",
          href: "tel:+971567277536",
          icon: Phone,
        }}
      >
        <p>
          Our affordable movers in Dubai start from AED 800 for a studio and AED
          1,100 for a 1-bedroom flat, with packing, dismantling and refitting
          included. You get the price in writing before you book, and it covers
          the crew, the truck and the packing materials. Nothing gets added when
          the crew arrives, unless the job itself has changed.
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
              Cheap only helps if the price you&apos;re quoted is the price you
              pay. So instead of a low headline number, we give you an
              all-inclusive quote from your photos and show you where you can
              bring it down yourself. Send a few photos of each room on WhatsApp
              and we&apos;ll reply with a free written quote.
            </p>
            {/* 16:9 main image (swap for a real Dubai crew photo when available) */}
            <figure className="!mt-0">
              <div className="img-wide">
                <Image
                  src="/images/studio-movers-dubai-al-afnan-furniture-transfer.jpg"
                  alt="Affordable movers in Dubai carrying a wrapped mattress out of a flat"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                  preload
                />
              </div>
            </figure>

            {/* ── Cheap movers and packers in Dubai: what our price includes ── */}
            <h2>Cheap movers and packers in Dubai: what our price includes</h2>
            <p>Every quote includes:</p>
            <ul>
              <li>
                <span>The crew and the truck</span>
              </li>
              <li>
                <span>
                  Packing materials: cartons, bubble wrap, stretch film and
                  hanger boxes
                </span>
              </li>
              <li>
                <span>Dismantling and refitting beds, wardrobes and tables</span>
              </li>
              <li>
                <span>Loading, transport and unloading room by room</span>
              </li>
            </ul>
            <p>
              The only costs outside our quote are building charges, like a move
              permit fee or a refundable lift deposit. Those go straight to
              building management, not to us, and not every building charges
              them.
            </p>

            <ServiceCTAButton href={WHATSAPP_PHOTOS}>
              Get a free written quote on WhatsApp
            </ServiceCTAButton>

            {/* ── Budget moves we handle across Dubai ── */}
            <h2>Budget moves we handle across Dubai</h2>
            <ul>
              <li>
                <span>
                  Studio and flat shifting, from a single room to a 3BHK. See{" "}
                  <Link href="/apartment-movers-in-dubai">
                    apartment movers in Dubai
                  </Link>{" "}
                  for lifts and permits.
                </span>
              </li>
              <li>
                <span>
                  Full house shifting, with the Ejari and DEWA checklist on our{" "}
                  <Link href="/house-movers-in-dubai">
                    house movers in Dubai
                  </Link>{" "}
                  page
                </span>
              </li>
              <li>
                <span>
                  Villa and townhouse moves, including garden furniture. See{" "}
                  <Link href="/villa-movers-in-dubai">
                    villa movers in Dubai
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  Small office moves, overnight or at the weekend. See{" "}
                  <Link href="/office-movers-in-dubai">
                    office movers in Dubai
                  </Link>
                  .
                </span>
              </li>
              <li>
                <span>
                  One sofa, a wardrobe or a few pieces. See{" "}
                  <Link href="/furniture-movers-in-dubai">
                    furniture movers in Dubai
                  </Link>
                  .
                </span>
              </li>
            </ul>

            <figure>
              <div className="img-wide">
                <Image
                  src="/images/ajman-to-dubai-sharjah-moving-truck-al-afnan.jpg"
                  alt="Cheap movers and packers in Dubai: an Al Afnan moving truck on the road"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                />
              </div>
            </figure>

            {/* ── Affordable moving prices in Dubai ── */}
            <h2
              id="affordable-moving-prices-in-dubai"
              className="scroll-mt-28"
            >
              Affordable moving prices in Dubai
            </h2>
            <p>
              These are starting prices for moves within Dubai, with full
              packing included:
            </p>

            <div className="service-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Home</th>
                    <th scope="col">Starting price (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-foreground">Studio</td>
                    <td>
                      <span className="price-badge">From 800</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-foreground">
                      1-bedroom flat
                    </td>
                    <td>
                      <span className="price-badge">From 1,100</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-foreground">
                      2-bedroom flat
                    </td>
                    <td>
                      <span className="price-badge">From 1,700</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-foreground">
                      3-bedroom flat
                    </td>
                    <td>
                      <span className="price-badge">From 2,800</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-foreground">
                      3 to 4 bedroom villa
                    </td>
                    <td>
                      <span className="price-badge">From 4,000</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-foreground">Office</td>
                    <td>
                      <span className="price-badge">
                        Priced after a free site visit
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If you pack some rooms yourself, your quote comes down from there.
              Your written quote is all-inclusive and stays the same on moving
              day unless the job changes, for example furniture you
              didn&apos;t show us.
            </p>

            <h3>What pushes a moving price up</h3>
            <ul>
              <li>
                <span>More furniture and fuller storage cupboards</span>
              </li>
              <li>
                <span>
                  Full packing of every room, rather than only the kitchen and
                  fragile items
                </span>
              </li>
              <li>
                <span>
                  High floors, small service lifts and long walks from the truck
                </span>
              </li>
              <li>
                <span>Heavy items, like a piano, a safe or gym equipment</span>
              </li>
              <li>
                <span>Moving to another emirate</span>
              </li>
              <li>
                <span>Night, weekend or same-day timing</span>
              </li>
            </ul>

            <ServiceCTAButton href={WHATSAPP_PHOTOS}>
              Send photos for your exact price
            </ServiceCTAButton>

            {/* ── How to make your move cheaper ── */}
            <h2>How to make your move cheaper</h2>
            <p>
              The biggest savings come from you, before the crew arrives. Every
              piece you don&apos;t move and every box you pack yourself comes
              off the quote.
            </p>

            <h3>Clear out before you ask for a quote</h3>
            <p>
              Sell, donate or throw away what you won&apos;t use in the new home
              before you send your photos. Dubizzle and Facebook Marketplace are
              the usual places to sell furniture in Dubai, and an old sofa you
              sell is one less thing to wrap and carry.
            </p>

            <h3>Pack the easy rooms yourself</h3>
            <p>
              Some things are cheap to pack and hard to break. Others are worth
              paying for.
            </p>

            <div className="service-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Pack it yourself</th>
                    <th scope="col">Leave it to us</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Clothes, shoes and bedding</td>
                    <td>Glassware, crockery and the kitchen</td>
                  </tr>
                  <tr>
                    <td>Books and paperwork</td>
                    <td>TVs, mirrors and artwork</td>
                  </tr>
                  <tr>
                    <td>Toys and soft furnishings</td>
                    <td>Wardrobes and beds that need dismantling</td>
                  </tr>
                  <tr>
                    <td>Bathroom items</td>
                    <td>Anything you&apos;d be upset to see break</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Tell us which rooms you&apos;re doing when you ask for the quote.
              We&apos;ll price only the rest.
            </p>

            <h3>Be flexible on the date</h3>
            <p>
              Many Dubai leases end at the end of the month, so the last few
              days are the hardest to book. If your dates allow, a mid-month or
              weekday move is easier to fit in. Tell us if you&apos;re flexible
              and we&apos;ll quote you for more than one date.
            </p>

            <h3>Get your building slots booked early</h3>
            <p>
              A missed lift slot or a permit that isn&apos;t ready means
              rescheduling, and rescheduling costs everyone time. Apply for move
              permits at both buildings as soon as you have a date.
            </p>

            <h3>Move only what&apos;s worth moving</h3>
            <p>
              Cheap flat-pack furniture gets looser every time it&apos;s taken
              apart. Sometimes it&apos;s cheaper to sell it and buy new than to
              pay for dismantling and refitting. Our carpenters will tell you
              honestly if a piece is too loose to move well.
            </p>

            {/* ── Cheap moving company or cheap quote? What to check ── */}
            <h2>Cheap moving company or cheap quote? What to check</h2>
            <p>
              Plenty of cheap movers in Dubai quote honestly. Some quotes,
              though, look cheap because something has been left out, and it
              gets added on moving day. Before you book any cheap moving company
              in Dubai, check the quote against these:
            </p>
            <ul>
              <li>
                <span>
                  Is it in writing, and does it list packing materials,
                  dismantling and refitting?
                </span>
              </li>
              <li>
                <span>
                  Did the company see your home, by photos, video or a visit,
                  before giving a price?
                </span>
              </li>
              <li>
                <span>
                  Does it say what happens if the job takes longer than
                  expected?
                </span>
              </li>
              <li>
                <span>
                  Is the company licensed and insured, and will it show you?
                </span>
              </li>
              <li>
                <span>
                  Do its recent Google reviews mention the final price matching
                  the quote?
                </span>
              </li>
            </ul>
            <p>
              If a mover only gives a price over the phone without seeing
              anything, expect it to change.
            </p>

            {/* ── How booking an affordable move works ── */}
            <h2>How booking an affordable move works</h2>
            <ol>
              <li>
                <div>
                  <strong>Send photos.</strong> Show each room, plus both
                  addresses and floor numbers, on WhatsApp.
                </div>
              </li>
              <li>
                <div>
                  <strong>Get a written quote.</strong> It lists everything
                  included, with no hidden fees.
                </div>
              </li>
              <li>
                <div>
                  <strong>Pick your date.</strong> Tell us if you&apos;re
                  flexible, and we&apos;ll fit the move to your building&apos;s
                  lift slots.
                </div>
              </li>
              <li>
                <div>
                  <strong>Packing.</strong> The crew packs what you&apos;ve left
                  for us and labels every carton by room.
                </div>
              </li>
              <li>
                <div>
                  <strong>Moving day.</strong> Furniture is taken apart, moved
                  and rebuilt in the right rooms.
                </div>
              </li>
            </ol>

            {/* ── Why Al Afnan is an affordable moving company you can trust ── */}
            <h2>Why Al Afnan is an affordable moving company you can trust</h2>
            <p>
              A low price means little if the crew can&apos;t rebuild your
              wardrobe. As affordable movers and packers in Dubai, we keep the
              skilled work in the price. Our carpenters and handymen are on our
              own team, so dismantling and refitting are part of the job, not an
              extra. We&apos;re licensed and insured, we&apos;ve moved homes
              across the UAE for 10 years, and our customers rate us 4.9 out of
              5 on Google.
            </p>
            <p>
              Our Dubai team works 24/7 and takes same-day and emergency moves
              when a crew is free. Our crews speak Arabic, English, Urdu and
              Hindi, so nothing about the job or the price gets lost between you
              and the people doing the work.
            </p>

            {/* ── Areas we cover in Dubai ── */}
            <h2>Areas we cover in Dubai</h2>
            <p>
              We move homes and offices across Dubai, including Dubai Marina,
              JVC, JLT, International City, Al Nahda Dubai, Al Warqa, Mirdif, Al
              Barsha, Dubai Silicon Oasis and Dubai South. We&apos;re based in Al
              Majaz, Sharjah, so low-cost moves between Dubai and{" "}
              <Link href="/movers-in-sharjah">Sharjah</Link> are easy to plan,
              and we also cover <Link href="/movers-in-ajman">Ajman</Link> and
              the other emirates. For every type of move, see our{" "}
              <Link href="/movers-and-packers-in-dubai">
                movers and packers in Dubai
              </Link>{" "}
              page.
            </p>
          </article>

          {/* ── Right: Sidebar ── */}
          <div className="sticky top-24">
            <ServiceSidebar
              region="dubai"
              ctaTitle="Want a Low, Clear Price?"
              ctaDesc="Send photos of each room on WhatsApp, or call us. Our Dubai team answers 24 hours a day, and quotes are free and written."
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
        title="Affordable movers in Dubai: FAQs"
        subtitle=""
        faqs={affordableFaqs}
      />

      {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
      <CTASection
        heading="Book your affordable move"
        paragraph="Send photos of your home on WhatsApp or call 056 7277536 to book our affordable movers in Dubai. The team answers 24 hours a day, and quotes are free and written."
        whatsappButtonText="WhatsApp us"
        whatsappButtonHref={WHATSAPP_PHOTOS}
        callButtonText="Call 056 7277536"
      />
    </SiteShell>
  );
}

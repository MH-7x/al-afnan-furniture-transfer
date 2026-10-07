import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  title: "Furniture Movers in Dubai | Furniture Transfer – Al Afnan",
  description:
    "Furniture movers in Dubai for one sofa or a full home. Carpenters dismantle and refit, same-day jobs, free quote on WhatsApp. Call 056 7277536.",
};

const WHATSAPP_PHOTO = whatsappLink(
  "Hi, I would like a free quote to move furniture in Dubai. I'm sending a photo of the item and both addresses.",
);

const furnitureFaqs = [
  {
    question: "Can you move just one sofa or wardrobe?",
    answer: (
      <p>
        Yes. Send a photo of the piece and both addresses on WhatsApp, and
        we&apos;ll quote from that. The price includes wrapping, carrying and,
        for a wardrobe or bed, taking it apart and rebuilding it.
      </p>
    ),
  },
  {
    question: "Do you dismantle and refit furniture?",
    answer: (
      <p>
        Yes. Our carpenters take apart beds, wardrobes, dining tables, TV units
        and L-shaped sofas, keep the fittings labelled for each piece, and
        rebuild everything at the new address before they leave.
      </p>
    ),
  },
  {
    question: "How much do furniture movers charge in Dubai?",
    answer: (
      <p>
        Single items are quoted from a photo, depending on size, floors and
        distance. A full home move starts from AED 1,100 for a 1-bedroom home
        within Dubai, with packing and refitting included. See the{" "}
        <a href="#furniture-movers-in-dubai-price-guide">price guide</a> for
        what changes the price.
      </p>
    ),
  },
  {
    question: "Can you collect furniture I bought on Dubizzle or from IKEA?",
    answer: (
      <p>
        Yes. We collect from the seller or the store, wrap the piece and deliver
        it to the room you want. For second-hand items, agree payment with the
        seller before we arrive, and check that their building allows a mover to
        collect.
      </p>
    ),
  },
  {
    question: "My sofa doesn't fit in the lift. What happens?",
    answer: (
      <p>
        Our carpenters look at whether it can come apart, like the legs, the
        back or the sections of an L-shape. Often the service lift is large
        enough. If you send the sofa and lift measurements beforehand, we can
        plan this before the day.
      </p>
    ),
  },
  {
    question: "Can you move furniture the same day?",
    answer: (
      <p>
        Often, yes. Our Dubai team works 24/7 and takes same-day jobs when a
        crew and truck are free. Send your photo and addresses as early as you
        can.
      </p>
    ),
  },
  {
    question: "Do you move furniture between Dubai and Sharjah?",
    answer: (
      <p>
        Yes. We&apos;re based in Sharjah and move furniture between Dubai and
        every emirate. Trucks can&apos;t use Sheikh Mohammed bin Zayed Road
        between Ras Al Khor Road and the Sharjah border from 6:30 to 8:30 am, so
        we time morning trips around it.
      </p>
    ),
  },
  {
    question: "Can you assemble new flat-pack furniture when you deliver it?",
    answer: (
      <p>
        Yes. Our carpenters can assemble new flat-pack furniture after delivery.
        Mention it when you book so we send the right people and allow the time.
      </p>
    ),
  },
];

const dubaiAreasList = [
  "Dubai Marina",
  "JVC",
  "JLT",
  "Business Bay",
  "Al Barsha",
  "Mirdif",
  "International City",
  "Al Nahda Dubai",
  "Dubai Silicon Oasis",
  "Dubai South",
];

const footerSearches = [
  "furniture movers in Dubai",
  "furniture moving in Dubai",
  "furniture pickup and delivery in Dubai",
  "furniture removal in Dubai",
  "sofa moving in Dubai",
  "wardrobe moving in Dubai",
  "bed dismantling in Dubai",
  "home furniture movers in Dubai",
  "house movers in Dubai",
  "movers and packers in Dubai",
];

export default function FurnitureMoversInDubaiPage() {
  return (
    <>
      <Navbar region="dubai" />

      <main>
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
          current="Furniture Movers in Dubai"
          title="Furniture Movers in Dubai"
          tagline="One sofa or a whole home's furniture, dismantled, wrapped, moved and refitted"
          badges={[
            { icon: Star, text: "4.9★ Google rating" },
            { icon: ShieldCheck, text: "Licensed and insured" },
            {
              icon: Clock,
              text: "10 years moving furniture across the UAE",
            },
            { icon: Clock, text: "24/7 Dubai team" },
          ]}
          primaryCta={{
            label: "WhatsApp a photo of the item",
            href: WHATSAPP_PHOTO,
            icon: MessageCircle,
          }}
          secondaryCta={{
            label: "Call 056 7277536",
            href: "tel:0567277536",
            icon: Phone,
          }}
        >
          <p>
            Furniture transfer is in our name. Our furniture movers in Dubai
            move single pieces, a few items or a full home&apos;s furniture
            across the city. Our own carpenters take apart beds and wardrobes,
            the crew wraps everything, and we rebuild it in the right room at
            the other end.
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
                For one sofa, a wardrobe or a bed, a clear photo and the two
                addresses are enough for a price, and we reply with a free quote
                on WhatsApp. The Dubai team works 24 hours a day and takes
                same-day jobs when a crew is free, which helps when you&apos;ve
                just bought something on Dubizzle and the seller wants it gone
                today.
              </p>
              {/* 16:9 main image (placeholder photo: swap for a real Dubai crew photo) */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/furniture-moving-transfer.jpg"
                    alt="Furniture movers in Dubai wrapping a sofa in stretch film"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
              </figure>

              {/* ── Furniture moving in Dubai: one item, a few pieces or a full home ── */}
              <h2>
                Furniture moving in Dubai: one item, a few pieces or a full home
              </h2>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Job</th>
                      <th scope="col">Good for</th>
                      <th scope="col">How to get a price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Single item
                      </td>
                      <td>A sofa, wardrobe, bed, dining table or fridge</td>
                      <td>Photo + both addresses on WhatsApp</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        A few pieces
                      </td>
                      <td>
                        A bedroom set, a living room, or what&apos;s left after
                        a partial move
                      </td>
                      <td>Photos of each piece</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Full home furniture
                      </td>
                      <td>
                        Every room, with packing, dismantling and refitting
                      </td>
                      <td>Video walk-through or a free home visit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Furniture pickup and delivery for Dubizzle and IKEA buys</h3>
              <p>
                Many single-item moves start with a purchase. Someone buys a
                second-hand sofa on Dubizzle or Facebook Marketplace, or a
                wardrobe from IKEA or Home Centre, and needs it collected and
                carried in. We pick it up, wrap it and deliver it to the room
                you want it in. With us, furniture delivery in Dubai includes
                the carrying and the stairs, not just the drive.
              </p>
              <p>For second-hand pickups, a few things save time on the day:</p>
              <ul>
                <li>
                  <span>
                    Check with the seller that their building allows a mover to
                    collect, and whether the service lift needs booking
                  </span>
                </li>
                <li>
                  <span>
                    Agree the price and payment with the seller before we
                    arrive, since that stays between you and them
                  </span>
                </li>
                <li>
                  <span>
                    Ask the seller to empty drawers and remove anything loose
                  </span>
                </li>
                <li>
                  <span>
                    Look at the item yourself, in person or on a video call,
                    before it&apos;s loaded
                  </span>
                </li>
              </ul>

              <h3>Furniture removal from a home you&apos;re leaving</h3>
              <p>
                Furniture removal in Dubai often means taking some pieces out of
                a flat and leaving the rest. That happens when you&apos;re
                downsizing, moving into a furnished place or splitting a shared
                home. Tell us which pieces go where and we&apos;ll move them to
                the new address, a family member&apos;s home or a storage unit
                you&apos;ve rented.
              </p>

              <ServiceCTAButton href={WHATSAPP_PHOTO}>
                Get a free furniture moving quote on WhatsApp
              </ServiceCTAButton>

              {/* ── How we handle each type of furniture ── */}
              <h2>How we handle each type of furniture</h2>
              <p>
                The risky part of moving furniture is getting it out of one home
                and into the next, through doorways, stairwells and lifts.
                That&apos;s why each piece gets prepared before it leaves the
                room.
              </p>

              <h3>Sofa moving</h3>
              <p>
                We take the legs off first where they unscrew, because a sofa
                usually goes through a door on its side. Fabric sofas get
                wrapped in stretch film so they stay clean. Leather and velvet
                get a protective layer underneath, because film pressed straight
                onto them in Dubai heat can leave marks. Large L-shaped sofas
                usually split into sections, and we wrap each one separately.
              </p>

              <h3>Wardrobe moving</h3>
              <p>
                Empty the wardrobe first. Our carpenters take it apart panel by
                panel and bag the hinges and screws for each door. Mirror and
                glass doors come off and travel on their own, standing on edge
                in bubble wrap. Built-in wardrobes stay where they are.
              </p>

              <h3>Bed dismantling and moving</h3>
              <p>
                Bed frames come apart into the headboard, side rails and slats.
                The bolts go in a labelled bag taped to the frame, so nothing
                goes missing between homes. Mattresses are wrapped in stretch
                film to keep them clean, and the bed is rebuilt before we leave.
              </p>

              <figure>
                <div className="img-wide">
                  <Image
                    src="/packing-and-moving-services.jpg"
                    alt="Bed dismantling and moving in Dubai"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                  />
                </div>
              </figure>

              <h3>Dining tables with glass or marble tops</h3>
              <p>
                The top comes off the base and travels separately, on its edge,
                wrapped in bubble wrap. Glass and marble laid flat in a moving
                truck can crack over a bump. Chairs are wrapped together so
                their legs don&apos;t scratch each other.
              </p>

              <h3>Flat-pack furniture: move it assembled or take it apart?</h3>
              <p>
                IKEA-style furniture isn&apos;t made to be taken apart many
                times. Each time it comes apart, the cam locks and dowel holes
                loosen a little. Our carpenters check the joints first. If a
                piece is solid and fits through the doors, it moves assembled.
                If it&apos;s already wobbly, or it won&apos;t fit, it comes
                apart and we rebuild it with the original fittings.
              </p>

              <h3>Fridges and washing machines</h3>
              <p>
                Fridges travel upright. Defrost yours the night before. Washing
                machines need draining and the water line disconnecting before
                the crew can lift them.
              </p>

              {/* ── Will it fit? Measure doors, lifts and stairs first ── */}
              <h2>Will it fit? Measure doors, lifts and stairs first</h2>
              <p>
                Measuring first catches &quot;it won&apos;t fit&quot; problems
                before moving day. Send these numbers with your photos:
              </p>
              <ul>
                <li>
                  <span>The largest piece: its width, depth and height</span>
                </li>
                <li>
                  <span>The narrowest door on the route at both homes</span>
                </li>
                <li>
                  <span>
                    The service lift: door width, cabin depth and height
                  </span>
                </li>
                <li>
                  <span>Any tight turn on a staircase</span>
                </li>
              </ul>
              <p>
                If something is too big, our carpenters plan how to take it
                apart before we arrive. Sometimes it&apos;s as simple as using
                the service lift instead of the passenger lift, which is usually
                larger. Booking that lift at an apartment building is covered on
                our{" "}
                <Link href="/apartment-movers-in-dubai">
                  apartment movers in Dubai
                </Link>{" "}
                page.
              </p>

              {/* ── Furniture movers in Dubai: price guide ── */}
              <h2
                id="furniture-movers-in-dubai-price-guide"
                className="scroll-mt-28"
              >
                Furniture movers in Dubai: price guide
              </h2>
              <p>
                Single items are priced from a photo, because a two-seater sofa
                on the ground floor and a three-door wardrobe on the 30th floor
                are different jobs.
              </p>

              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Job</th>
                      <th scope="col">Typical price (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Single item (sofa, wardrobe, bed, table)
                      </td>
                      <td>
                        <span className="price-badge">Quoted from a photo</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        A few pieces
                      </td>
                      <td>
                        <span className="price-badge">Quoted from photos</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Full home move, with packing and refitting
                      </td>
                      <td>
                        <span className="price-badge">
                          From 1,100 for a 1-bedroom home
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                For full home prices by size, see the{" "}
                <Link href="/house-movers-in-dubai">house movers in Dubai</Link>{" "}
                price guide. Every quote is written and all-inclusive, with no
                hidden fees. It stays the same on the day unless the job
                changes, for example an extra piece you didn&apos;t show us.
              </p>

              <h3>What changes the price of a furniture move</h3>
              <ul>
                <li>
                  <span>The size and weight of each piece</span>
                </li>
                <li>
                  <span>Whether it needs taking apart and rebuilding</span>
                </li>
                <li>
                  <span>
                    Floor level, and whether there&apos;s a lift at both ends
                  </span>
                </li>
                <li>
                  <span>How far the truck can park from the door</span>
                </li>
                <li>
                  <span>
                    Distance, and whether it&apos;s going to another emirate
                  </span>
                </li>
                <li>
                  <span>Same-day or late-night timing</span>
                </li>
              </ul>

              <h3>Cheapest furniture movers vs the best value</h3>
              <p>
                The cheapest furniture movers in Dubai often send a pickup and
                two people to lift. That can be fine for a plastic garden chair.
                For a wardrobe, a marble table or a sofa you care about, the
                lowest price often means no wrapping, no carpenter and no one to
                rebuild the piece at the other end. Our quotes include all of
                that, so compare what&apos;s included, not only the number.
              </p>

              <ServiceCTAButton href={WHATSAPP_PHOTO}>
                Send a photo for your exact price
              </ServiceCTAButton>

              {/* ── How furniture shifting works with Al Afnan ── */}
              <h2>How furniture shifting works with Al Afnan</h2>
              <ol>
                <li>
                  <div>
                    <strong>Send photos.</strong> Include each piece, both
                    addresses and the floor levels.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Get a quote.</strong> Single items are usually
                    quoted from the photo. Bigger jobs may need a video or a
                    free visit.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Fix the time.</strong> We agree a slot that suits
                    you, the seller if it&apos;s a pickup, and both buildings.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Wrap and dismantle.</strong> The crew prepares each
                    piece in the room before it moves.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Deliver and refit.</strong> Furniture is carried to
                    the room you choose, rebuilt and unwrapped there.
                  </div>
                </li>
              </ol>

              {/* ── Why choose Al Afnan as your furniture movers ── */}
              <h2>Why choose Al Afnan as your furniture movers</h2>
              <p>
                Our carpenters and handymen are on our own team, so taking apart
                and rebuilding a wardrobe isn&apos;t left to whoever is lifting
                that day. As home furniture movers, we use bubble wrap, stretch
                film and hanger boxes as standard. We&apos;re licensed and
                insured, we&apos;ve moved furniture across the UAE for 10 years,
                and our customers rate us 4.9 out of 5 on Google. Our crews
                speak Arabic, English, Urdu and Hindi, which helps when the
                seller, the building guard and you all need to be on the same
                page.
              </p>

              {/* TODO: add 2–3 real Google reviews from furniture moves here. */}

              <h3>Same-day furniture moves</h3>
              <p>
                Our Dubai team works 24/7 and takes same-day and emergency jobs
                when a crew and truck are free. Send the photo and both
                addresses as early as you can. If the building needs a lift
                booking, that can set the earliest time we&apos;re able to come.
              </p>

              {/* ── Areas we cover in Dubai and across the UAE ── */}
              <h2>Areas we cover in Dubai and across the UAE</h2>
              <p>
                We move furniture across Dubai, including{" "}
                Dubai Marina, JVC, JLT, Business Bay, Al
                Barsha, Mirdif, International City, Al Nahda Dubai, Dubai
                Silicon Oasis and Dubai South. We&apos;re based in Al Majaz,
                Sharjah, so furniture transfer between Dubai and{" "}
                <Link href="/">Sharjah</Link> is straightforward to plan, along
                with moves to <Link href="/movers-in-ajman">Ajman</Link>, Abu
                Dhabi and{" "}
                <Link href="/movers-in-ras-al-khaimah">Ras Al Khaimah</Link>.
                Moving the whole household? See our{" "}
                <Link href="/house-movers-in-dubai">house movers in Dubai</Link>{" "}
                or{" "}
                <Link href="/villa-movers-in-dubai">villa movers in Dubai</Link>{" "}
                pages, or{" "}
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
                ctaTitle="Moving a Few Pieces?"
                ctaDesc="Send a photo of the piece and both addresses on WhatsApp, or call us. Our Dubai team answers 24 hours a day and takes same-day jobs."
                dubaiAreas={dubaiAreasList}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ SECTION (also outputs the FAQPage schema)
        ════════════════════════════════════════════ */}
        <FAQSection
          title="Furniture movers in Dubai: FAQs"
          subtitle=""
          faqs={furnitureFaqs}
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Book your furniture move"
          paragraph="Send a photo of the piece and both addresses on WhatsApp, or call 056 7277536. Our Dubai team answers 24 hours a day, and quotes are free."
          whatsappButtonText="WhatsApp us"
          whatsappButtonHref={WHATSAPP_PHOTO}
          callButtonText="Call 056 7277536"
        />
      </main>

      <Footer searches={footerSearches} region="dubai" />
    </>
  );
}

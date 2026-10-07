import { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/SiteShell";
import MovingProcess from "@/components/MovingProcess";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { LocationHero } from "@/components/LocationHero";
import { EditorialRows } from "@/components/EditorialRows";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Movers in Ras Al Khaimah | Professional House, Villa & Office Moving",
  description:
    "Movers in Ras Al Khaimah from Al Afnan Furniture Transfer. House, villa, apartment & office moving. Licensed, insured, free quotes. Call 056 7277536.",
};

const footerSearches = [
  "movers in Ras Al Khaimah",
  "movers and packers in Ras Al Khaimah",
  "movers and packers Ras Al Khaimah",
  "moving companies in Ras Al Khaimah",
  "moving company in Ras Al Khaimah",
  "movers Ras Al Khaimah",
  "RAK movers",
  "Ras Al Khaimah movers",
  "professional movers in Ras Al Khaimah",
  "professional movers Ras Al Khaimah",
  "professional moving company in Ras Al Khaimah",
  "relocation company Ras Al Khaimah",
  "moving services Ras Al Khaimah",
  "relocation services Ras Al Khaimah",
  "movers and packers RAK",
];
const rakFaqs = [
  {
    question: "How much do movers in Ras Al Khaimah cost?",
    answer: (
      <>
        <p>
          There&apos;s no single price, because a studio apartment and a
          six-bedroom villa are completely different jobs.
        </p>
        <p>
          Prices range from AED 400 to AED 500 for studios up to AED 7,000 to
          AED 13,500+ for larger villas, depending on property size, packing
          scope, distance, building access, and any items needing special
          handling.
        </p>
        <p>
          Inter-emirate moves from RAK to Dubai or Sharjah generally range from
          AED 1,000 to AED 3,500+. Our quotes are all-inclusive with no hidden
          fees, and the number you see is the number you pay.
        </p>
      </>
    ),
  },
  {
    question: "How far in advance should I book a move?",
    answer: (
      <>
        <p>
          For a standard move, booking a week or two ahead is usually enough,
          because we plan around your schedule and the crew&apos;s availability.
        </p>
        <p>
          If you need same-day or emergency service, we can still help, but
          it&apos;s easier to plan if you give us a few days&apos; notice.
        </p>
        <p>
          Weekend moves and busy months (summer, end of the financial year) fill
          up faster, so the earlier you book, the better.
        </p>
      </>
    ),
  },
  {
    question: "Do you provide packing materials, or should I supply my own?",
    answer: (
      <>
        <p>
          We provide everything, including bubble wrap, stretch film, hanger
          boxes for clothes, furniture blankets, corner guards, cardboard boxes,
          and mattress covers.
        </p>
        <p>
          It&apos;s all included if you want it. If you&apos;d rather pack some
          things yourself, we&apos;ll tell you what to handle and what to leave
          to us.
        </p>
      </>
    ),
  },
  {
    question: "Are my belongings insured during the move?",
    answer: (
      <>
        <p>
          Yes. We&apos;re a licensed and insured moving company operating across
          all seven UAE Emirates, so there&apos;s coverage in place if anything
          is damaged, lost, or delayed.
        </p>
        <p>
          We also document items with an inventory list before anything leaves
          your property, which helps if there&apos;s ever a question about what
          was moved and in what condition.
        </p>
      </>
    ),
  },
  {
    question: "Can you move offices or businesses on weekends?",
    answer: (
      <>
        <p>
          Yes. Office moves are part of our service, and we can work weekends to
          minimise disruption to your business.
        </p>
        <p>
          We handle workstations, desks, chairs, IT equipment, servers, files,
          and documents, and we can schedule around your working hours so your
          team isn&apos;t out of action for long.
        </p>
      </>
    ),
  },
  {
    question: "Do you handle single items, or only full moves?",
    answer: (
      <>
        <p>
          Both. If you need one sofa moved across town, a bed shifted to a new
          apartment, or a wardrobe relocated within the same building, we can do
          it.
        </p>
        <p>
          if you need a full villa move, we can do that too. Single items and
          bulky furniture get the same care, with bubble wrap, stretch film, and
          proper handling, just on a smaller scale.
        </p>
      </>
    ),
  },
  {
    question: "What if the new property isn't ready on moving day?",
    answer: (
      <>
        <p>
          It happens more than you&apos;d think. If your new place isn&apos;t
          ready, because the landlord&apos;s delayed, the keys aren&apos;t
          available, or the contractor&apos;s still working, we can discuss
          storage options.
        </p>
        <p>
          We have partners who handle short and long-term storage in the area,
          so your belongings don&apos;t end up sitting in a hallway. We&apos;ll
          work with you on the best solution.
        </p>
      </>
    ),
  },
  {
    question: "Do you move between Ras Al Khaimah and the other emirates?",
    answer: (
      <>
        <p>
          Yes, and we&apos;ve been doing it for over 10 years. We handle moves
          from RAK to Dubai, Sharjah, Ajman, Abu Dhabi, and the reverse, and we
          operate across all seven UAE Emirates.
        </p>
        <p>
          The routes are familiar, the logistics are planned out, and we know
          what to expect at the emirate border checkpoints and access roads.
        </p>
      </>
    ),
  },
];

const rakAreas = [
  "Al Hamra Village",
  "Mina Al Arab",
  "Al Marjan Island",
  "Al Nakheel",
  "Al Dhait",
  "Khuzam",
  "Al Rams",
  "Al Qusaidat",
  "Al Mairid",
  "Julphar",
  "Dafan Al Nakheel",
  "Al Jazeera Al Hamra",
  "Al Jazeera",
  "Al Mamourah",
  "Al Seer",
  "Al Riffa",
  "Al Kharran",
  "Yasmin Village",
  "RAKEZ",
  "RAK Economic Zone",
];

const whyChoosePoints = [
  "We're a licensed and insured moving company across all seven UAE Emirates, so if your belongings are damaged, lost, or delayed, there's coverage in place, and there's a real company behind the phone number.",
  "We've been doing this for over 10 years, long enough to know the routes, building rules, access issues, and what actually goes wrong on a move day.",
  "We're recognized as among the most trusted Ras Al Khaimah movers, rated 4.9 out of 5 on Google.",
  "Our team includes professionally trained carpenters and handymen, so your wardrobes get dismantled properly, your beds reassembled correctly, and your furniture fixed if something needs adjusting.",
  "We speak Arabic, English, and Urdu/Hindi, so if you're a family that's just landed, a long-term RAK resident, or a business with a mixed team, communication is never a problem.",
  "Our quotes are all-inclusive with no hidden fees, and we're available 24/7 with same-day and emergency service.",
];

const emergencyPoints = [
  `Our 24/7 availability means there's no "we're closed", whether it's 3pm or 3am, a weekend move or a last-minute rush, we're available.`,
  "Emergency movers Ras Al Khaimah is a service we take seriously: if you're stuck with a flooded apartment, a sudden job transfer, or a landlord who changed the lock, we'll handle the logistics so you don't have to.",
  "You'll get the same care, bubble wrap, stretch film, proper loading, trained hands, just on a tighter timeline.",
];

const quoteLink = (label: string, href: string) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link inline-flex w-full items-center justify-between font-semibold text-ink hover:text-signal transition-colors"
  >
    <span>{label}</span>
    <ArrowRight
      className="size-5 text-signal transition-transform duration-150 group-hover/link:translate-x-0.5"
      aria-hidden="true"
    />
  </a>
);

export default function RasAlKhaimahPage() {
  return (
    <SiteShell searches={footerSearches} layout="bands">
      {/* ════ HERO ════ */}
      <LocationHero
        id="hero-title"
        current="Movers in Ras Al Khaimah"
        title={
          <>
            Movers in Ras Al Khaimah <br /> Professional Moving &amp;
            Packing Services
          </>
        }
        image="/movers-in-ras-al-khaimah.jpg"
        imageAlt="Movers in Ras Al Khaimah — Professional Moving &amp; Packing Services by Al Afnan"
      >
        <h2 className="mt-6 t-h3 font-medium text-paper measure">
          Trusted Movers and Packers in Ras Al Khaimah | House, Villa,
          Apartment &amp; Office Moves Across All Seven Emirates
        </h2>
        <p className="mt-5 t-lead text-paper measure">
          Looking for reliable movers in Ras Al Khaimah? Al Afnan
          Furniture Transfer has been handling house moves, villa
          relocations, apartment shifts, and office moves across all
          seven UAE Emirates for over 10 years.
        </p>
        <p className="mt-4 border-t border-white/20 pt-4 t-body measure">
          We&apos;re a licensed and insured moving company rated 4.9
          out of 5 on Google, with trained carpenters and handymen
          who dismantle, pack, move, and reassemble your furniture,
          from a single sofa to an entire villa.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button render={<a href="https://wa.me/971567277536" target="_blank" rel="noopener noreferrer" />}>
            <WhatsAppIcon />
            <span>Get Your Free Moving Quote</span>
          </Button>
          <Button variant="outline-light" render={<a href="tel:0567277536" />}>
            <Phone aria-hidden="true" />
            <span>Call 056 7277536</span>
          </Button>
        </div>
      </LocationHero>

      {/* ════ HOUSE, VILLA & APARTMENT ════ */}
      <section aria-labelledby="residential-movers-heading" className="bg-white section-y">
        <div className="wrap">
          <SectionHeader
            id="residential-movers-heading"
            title="House, Villa & Apartment Movers in Ras Al Khaimah"
            lead={
              <>
                When you&apos;re planning a house move in Ras Al Khaimah, the
                biggest question is usually simple: will they treat my stuff
                with care? We do.
              </>
            }
          />
          <p className="mt-6 t-body text-muted-foreground measure">
            Our movers and packers in Ras Al Khaimah handle residential
            moves of every size, from a studio apartment to a full villa
            relocation. Whether it&apos;s a 1BHK flat or a standalone villa,
            we handle it the same way: carefully, on schedule, without
            surprises.
          </p>

          <EditorialRows
            items={[
              {
                id: "villa",
                title: "Villa Moving in Ras Al Khaimah",
                image: "/villa-moving-services.jpg",
                imageAlt: "Villa Moving in Ras Al Khaimah",
                body: (
                  <>
                    <p>
                      Villas are a different job than apartments, with more
                      rooms, more furniture, more stairs, and sometimes tricky
                      access routes.
                    </p>
                    <p>
                      If you&apos;re moving a villa in Al Hamra Village, Mina Al
                      Arab, Al Marjan Island, Al Dhait, Khuzam, Yasmin Village,
                      or any other RAK neighbourhood, we know the layout
                      challenges.
                    </p>
                    <p>
                      Large properties mean bigger loads and longer loading
                      times, so we plan for all of that before we show up.
                    </p>
                  </>
                ),
              },
              {
                id: "apartment",
                title: "Apartment, Flat & Studio Moving in Ras Al Khaimah",
                image: "/flat-apartment-movers.jpg",
                imageAlt: "Apartment, Flat & Studio Moving in Ras Al Khaimah",
                body: (
                  <>
                    <p>
                      Apartment moves come with their own headaches: elevator
                      bookings, corridor protection, parking permits, building
                      rules nobody warned you about.
                    </p>
                    <p>
                      We&apos;ve moved everything from a single studio to large
                      3BHK apartments across Ras Al Khaimah. We handle the
                      building logistics so you don&apos;t have to figure out
                      which floor the elevator is reserved for.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* ════ OFFICE & COMMERCIAL ════ */}
      <section aria-labelledby="commercial-movers-heading" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="commercial-movers-heading"
            title="Office & Commercial Movers in Ras Al Khaimah"
            lead="Moving an office requires more professional handling than other types of moving."
          />
          <div className="mt-6 space-y-3 t-body text-muted-foreground measure">
            <p>
              There are computers to secure, files to label, workstations to
              dismantle, and a whole business that can&apos;t afford to be
              down for long.
            </p>
            <p>
              At Al Afnan Furniture Transfer, we&apos;ve handled office
              relocations across Ras Al Khaimah and the other emirates for
              over a decade, from small corporate offices to warehouse-style
              commercial spaces in RAKEZ and the RAK Economic Zone.
            </p>
          </div>

          <EditorialRows
            variant="columns"
            items={[
              {
                id: "office",
                title: "Office Relocation in Ras Al Khaimah",
                image: "/commercial-office-movers.jpg",
                imageAlt: "Office Relocation in Ras Al Khaimah by Al Afnan Furniture Transfer",
                body: (
                  <>
                    <p>
                      Office moving means more than loading boxes into a truck.
                      Your desks, chairs, filing cabinets, and IT equipment all
                      need to come apart, travel safely, and go back together on
                      the other side, preferably without disrupting your
                      business more than necessary.
                    </p>
                    <p>
                      We handle the whole thing: dismantling workstations,
                      wrapping electronics, loading computers and servers
                      carefully, and keeping files and documents accounted for
                      from start to finish.
                    </p>
                  </>
                ),
                action: quoteLink(
                  "Request Office Relocation Quote",
                  "https://wa.me/971567277536?text=Hi,%20I%20need%20a%20quote%20for%20office%20relocation%20in%20Ras%20Al%20Khaimah",
                ),
              },
              {
                id: "warehouse",
                title: "Warehouse & RAKEZ Commercial Moves",
                image: "/al-afnan-furniture-transfer-sharjah.jpg",
                imageAlt: "Warehouse & RAKEZ Commercial Moves in Ras Al Khaimah",
                body: (
                  <>
                    <p>
                      Commercial moves in Ras Al Khaimah come with their own
                      logistics, especially when you&apos;re shifting warehouse
                      stock, heavy equipment, or inventory across a large space.
                    </p>
                    <p>
                      We&apos;ve moved commercial goods for businesses operating
                      in RAKEZ and the RAK Economic Zone, and we understand the
                      access routes, loading requirements, and regulations that
                      apply to commercial properties in the area.
                    </p>
                  </>
                ),
                action: quoteLink(
                  "Request Commercial Moving Quote",
                  "https://wa.me/971567277536?text=Hi,%20I%20need%20a%20quote%20for%20warehouse%20commercial%20moving%20in%20RAKEZ",
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* ════ FURNITURE & PACKING ════ */}
      <section
        aria-labelledby="furniture-packing-heading"
        data-surface="dark"
        className="bg-ink text-fog section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="furniture-packing-heading"
            tone="dark"
            title={
              <>
                Furniture Movers &amp; <br className="md:block hidden" /> Packing
                Services in Ras Al Khaimah
              </>
            }
            lead="At Al Afnan Furniture Transfer, our team includes trained carpenters and handymen who handle furniture dismantling, moving, and reassembly as a core part of what we do."
          />
          <p className="mt-6 t-body measure">
            Whether it&apos;s a single item or an entire home&apos;s worth,
            we treat it with the same care.
          </p>

          <EditorialRows
            tone="dark"
            items={[
              {
                id: "dismantling",
                title: "Furniture Dismantling, Assembly & Reassembly in Ras Al Khaimah",
                image: "/furniture-moving-transfer.jpg",
                imageAlt: "Furniture Dismantling, Assembly & Reassembly in Ras Al Khaimah",
                body: (
                  <>
                    <p>
                      Big furniture doesn&apos;t always fit through doors,
                      staircases, or elevator doors, especially in older RAK
                      buildings or tightly designed villa layouts.
                    </p>
                    <p>
                      Our carpenters can dismantle your wardrobes, beds, desks,
                      dining tables, and cabinets before the move, transport
                      them safely, and reassemble everything at your new place.
                    </p>
                    <p>
                      We also handle furniture fixing and setup, so you
                      don&apos;t need to chase down a separate handyman after
                      the movers leave. It&apos;s one team, one schedule, one
                      point of contact.
                    </p>
                  </>
                ),
              },
              {
                id: "sofa-bed",
                title: "Sofa, Bed & Wardrobe Moving in Ras Al Khaimah",
                image: "/house-moving-services-by-al-afnan.jpg",
                imageAlt: "Sofa, Bed & Wardrobe Moving in Ras Al Khaimah",
                body: (
                  <>
                    <p>
                      Some moves are small, and you just need one sofa moved
                      across town, or a bed shifted to a new apartment.
                    </p>
                    <p>
                      We handle single furniture pieces and bulky items alike:
                      sofas, beds, wardrobes, dining tables, cabinets. Our
                      packing materials, bubble wrap, stretch film, corner
                      guards, and furniture blankets, go on everything to
                      prevent damage during transport.
                    </p>
                  </>
                ),
              },
              {
                id: "packing",
                title: "Professional Packing Services in Ras Al Khaimah",
                image: "/packing-and-moving-services.jpg",
                imageAlt: "Professional Packing Services in Ras Al Khaimah",
                body: (
                  <>
                    <p>
                      Packing is where most moves either go smoothly or fall
                      apart. We do it the proper way. Your clothes go into
                      hanger boxes so they stay wrinkle-free and ready to hang
                      up directly in your new wardrobe.
                    </p>
                    <p>
                      Electronics, glassware, kitchenware, and fragile items get
                      bubble wrap and protective wrapping. Mattresses get
                      covers. Everything gets labelled and tracked on an
                      inventory list so you know what came from which room.
                    </p>
                    <p>
                      If you want us to pack the whole house or just the
                      kitchen, we&apos;ll handle it, and if you prefer to do it
                      yourself, we&apos;ll supply the materials and advice.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* ════ WHY CHOOSE ════ */}
      <section aria-labelledby="why-choose-heading" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="why-choose-heading"
            title="Why Choose Al Afnan Furniture Transfer"
            lead="You'll hear a lot of promises from movers in Ras Al Khaimah. The difference with us is what we actually do."
          />
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-ink [counter-reset:why]">
            {whyChoosePoints.map((point) => (
              <li
                key={point}
                className="reveal grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-7 [counter-increment:why]"
              >
                <span
                  className="t-num text-3xl font-bold leading-none text-signal before:content-[counter(why,decimal-leading-zero)]"
                  aria-hidden="true"
                />
                <p className="t-body text-steel">{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════ PROCESS ════ */}
      <MovingProcess
        title="Movers in Ras Al Khaimah Work Process"
        desc="We keep the moving process simple and organized across Ras Al Khaimah. From your initial free quote and careful packing to safe transport, unloading, and furniture reassembly."
      />

      {/* ════ LONG-DISTANCE & INTER-EMIRATE ════ */}
      <section aria-labelledby="inter-emirate-heading" className="bg-paper-2 section-y">
        <div className="wrap">
          <SectionHeader
            id="inter-emirate-heading"
            title="Long-Distance & Inter-Emirate Moving"
            lead="We've been doing inter-emirate moves for over 10 years, so the routes are familiar, the logistics are worked out, and you're not left wondering what happens after the truck leaves your old address."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-14">
            <article className="border-t-2 border-ink pt-6">
              <h3 className="text-ink">
                Moving From Ras Al Khaimah to Dubai, Sharjah, Ajman &amp; Abu Dhabi
              </h3>
              <div className="mt-4 space-y-3 t-body text-steel">
                <p>
                  If you&apos;re heading out of RAK, whether it&apos;s movers
                  from Ras Al Khaimah to Dubai, RAK to Sharjah, or RAK to Abu
                  Dhabi, we handle the full journey.
                </p>
                <p>
                  Long-distance moves need proper planning, route timing,
                  vehicle scaling, load securing for highway driving, and
                  knowing which emirate border checkpoints and access roads to
                  expect.
                </p>
                <p>
                  Our crews have done these runs enough times that the drive
                  is the least of your worries.
                </p>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 border-t border-ink">
                {["RAK → Dubai", "RAK → Sharjah", "RAK → Abu Dhabi", "RAK → Ajman"].map((route) => (
                  <li key={route} className="border-b border-line py-3 t-num text-xl font-bold text-ink">
                    {route}
                  </li>
                ))}
              </ul>
            </article>

            <article className="border-t-2 border-signal pt-6">
              <h3 className="text-ink">Moving To Ras Al Khaimah from Anywhere in the UAE</h3>
              <div className="mt-4 space-y-3 t-body text-steel">
                <p>
                  Coming into RAK? Whether it&apos;s Dubai to RAK movers,
                  Sharjah to RAK movers, or movers from Abu Dhabi to Ras Al
                  Khaimah, we meet you at your old place, pack everything up,
                  and deliver it to your new address.
                </p>
                <p>
                  We know the routes, the highway conditions, and what kind of
                  access your new neighbourhood might have, so nothing catches
                  you off guard on arrival day.
                </p>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 border-t border-ink">
                {["Dubai → RAK", "Sharjah → RAK", "Abu Dhabi → RAK", "All 7 Emirates"].map((route) => (
                  <li key={route} className="border-b border-line py-3 t-num text-xl font-bold text-ink">
                    {route}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ════ SAME-DAY & EMERGENCY ════ */}
      <section aria-labelledby="emergency-moving-heading" className="bg-white section-y">
        <div className="wrap">
          <SectionHeader
            id="emergency-moving-heading"
            title="Same-Day & Emergency Moving in Ras Al Khaimah"
            lead="Need same day movers in Ras Al Khaimah? We can dispatch a crew quickly, assess what needs to happen, and get your move underway the same day."
          />

          <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {emergencyPoints.map((point, i) => (
              <li
                key={point}
                className={`reveal border-t-2 pt-6 t-body text-steel ${i === 1 ? "border-signal" : "border-ink"}`}
              >
                {point}
              </li>
            ))}
          </ul>

          <div
            data-surface="dark"
            className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl bg-ink p-7 sm:p-9"
          >
            <div>
              <p className="t-h3 text-white">Need urgent moving support in Ras Al Khaimah?</p>
              <p className="mt-2 t-body text-fog">
                Available 24/7 for prompt emergency dispatch and transparent
                pricing.
              </p>
            </div>
            <Button render={<a href="tel:0567277536" />} className="shrink-0">
              <Phone aria-hidden="true" />
              <span>Call 056 7277536</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ════ WHAT DETERMINES YOUR QUOTE ════ */}
      <section aria-labelledby="pricing-factors-heading" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="pricing-factors-heading"
            title={
              <>
                What Determines Your <br /> Moving Quote in Ras Al Khaimah
              </>
            }
            lead="Before you commit to a mover, the first question is almost always about cost."
          />
          <p className="mt-6 t-body text-muted-foreground measure">
            But moving quotes aren&apos;t just a flat number, they shift
            based on real factors. Understanding those factors helps you get
            a fair price and avoid surprises later.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
            <article className="reveal border-t-2 border-ink pt-6">
              <h3 className="text-ink">Property Size &amp; Type</h3>
              <div className="mt-4 space-y-3 t-body text-muted-foreground">
                <p>
                  A studio apartment in Ras Al Khaimah is a fundamentally
                  different job than a 4-bedroom villa in Al Hamra Village.
                </p>
                <p>
                  Local moving services in Ras Al Khaimah typically start
                  around AED 400 to AED 500 for basic studio relocations and
                  scale up depending on property size and service level.
                </p>
                <p>
                  The range goes from AED 800 to AED 2,000 for a 1-bedroom,
                  AED 1,500 to AED 3,300 for a 2-bedroom, AED 2,000 to AED
                  7,000 for a 3-bedroom or smaller villa, and AED 7,000 to AED
                  13,500+ for larger 4 to 6 bedroom villas, with each tier
                  reflecting crew size, vehicle type, and whether packing,
                  dismantling, or assembly is included.
                </p>
              </div>
            </article>

            <article className="reveal border-t-2 border-ink pt-6 lg:col-span-2">
              <h3 className="text-ink">Packing Scope, Distance &amp; Building Access</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 t-body text-muted-foreground">
                <div className="space-y-3">
                  <p>
                    Full-service packing costs more than labor-only loading,
                    because you&apos;re paying for the materials and the work.
                  </p>
                  <p>
                    Bubble wrap, stretch film, hanger boxes, furniture blankets,
                    corner guards, and cardboard boxes all add up.
                  </p>
                  <p>
                    Distance matters too: inter-emirate moves from RAK to Dubai
                    or Sharjah typically range from AED 1,000 to AED 3,500+
                    depending on volume and apartment size, while moves to Abu
                    Dhabi or Al Ain start around AED 2,500 for smaller homes.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    Some RAK communities also require a Move No Objection
                    Certificate, a digital NOC from building administration
                    before a crew can enter.
                  </p>
                  <p>
                    Gated communities like Al Hamra Village and Mina Al Arab are
                    known for this, and that coordination can add a small cost
                    or extra time.
                  </p>
                </div>
              </div>
            </article>

            <article className="reveal border-t-2 border-ink pt-6 lg:col-span-3">
              <h3 className="text-ink">Specialized Items &amp; Timing</h3>
              <div className="mt-4 space-y-3 t-body text-muted-foreground measure">
                <p>
                  Not everything fits into a standard moving box. If
                  you&apos;re moving a grand piano, fine art, antique
                  furniture, a chandelier, or heavy medical equipment, the
                  handling changes entirely.
                </p>
                <p>
                  Specialty items need custom crating, protective padding, and
                  sometimes specialized lifting equipment.
                </p>
                <p>
                  And timing matters too: standard booking gives you the best
                  rate, while same-day or emergency moves cost more because
                  they require crew to be pulled from other schedules.
                </p>
              </div>
            </article>
          </div>

          <div
            data-surface="dark"
            className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-xl bg-ink p-7 sm:p-10"
          >
            <div className="lg:col-span-8 space-y-4">
              <p className="t-lead font-semibold text-white">
                Our quote is all-inclusive, with no hidden fees and no
                last-minute additions. Once you see the number, that&apos;s
                what you pay.
              </p>
              <p className="t-body text-fog">
                To get yours, share your property size, whether you&apos;re
                moving within RAK or to another emirate, and if you need full
                packing or just transport. We&apos;ll send you a written
                estimate with no obligation.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                render={
                  <a
                    href="https://wa.me/971567277536?text=Hi,%20I%20would%20like%20a%20written%20moving%20estimate%20in%20Ras%20Al%20Khaimah"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <WhatsAppIcon />
                <span>Get Your Moving Estimate</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════ AREAS WE SERVE ════ */}
      <section aria-labelledby="areas-served-heading" className="bg-white section-y">
        <div className="wrap">
          <SectionHeader
            id="areas-served-heading"
            title="Areas We Serve in Ras Al Khaimah"
            lead="If you're moving within RAK, knowing which area you're in matters, because access, building rules, and traffic patterns differ across the emirate. We serve all of them."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
            <article className="border-t-2 border-ink pt-6">
              <h3 className="text-ink">Popular Residential Communities</h3>
              <div className="mt-4 space-y-3 t-body text-muted-foreground">
                <p>
                  Al Hamra Village, Mina Al Arab, Al Marjan Island, Al
                  Nakheel, Al Dhait, Khuzam, Al Rams, Al Qusaidat, Al Mairid,
                  Julphar, and Dafan Al Nakheel.
                </p>
                <p>
                  Many of them are gated, which means NOC coordination and
                  designated move windows. We handle the building paperwork so
                  you don&apos;t have to chase down the admin office yourself.
                </p>
              </div>
            </article>
            <article className="border-t-2 border-ink pt-6">
              <h3 className="text-ink">Other Areas</h3>
              <div className="mt-4 space-y-3 t-body text-muted-foreground">
                <p>
                  Al Jazeera Al Hamra, Al Jazeera, Al Mamourah, Al Seer, Al
                  Riffa, Al Kharran, Yasmin Village, RAKEZ, and the RAK
                  Economic Zone.
                </p>
                <p>
                  Whether it&apos;s a residential apartment in a newer
                  development or a commercial unit inside the economic zone,
                  we&apos;ve moved goods in and out of these areas enough
                  times to know the logistics.
                </p>
              </div>
            </article>
          </div>

          <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 border-t border-ink">
            {rakAreas.map((area) => (
              <li key={area} className="flex items-center gap-2.5 border-b border-line py-3.5">
                <span className="size-1.5 shrink-0 bg-signal" aria-hidden="true" />
                <h4 className="t-body font-semibold text-ink">Movers in {area}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <div className="bg-paper-2">
        <FAQSection
          faqs={rakFaqs}
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about house, villa, office, and furniture moving in Ras Al Khaimah."
          layout="split"
        />
      </div>

      {/* ════ BOOK YOUR MOVE ════ */}
      <CTASection
        heading="Book Your Move in Ras Al Khaimah"
        paragraph={
          <div className="space-y-3">
            <p>
              Get a free, all-inclusive estimate, with no obligation and no
              hidden fees, just an honest price based on what you&apos;re
              actually moving.
            </p>
            <p>
              To get yours, tell us your property size, whether you&apos;re
              moving within RAK or to another emirate, and if you need full
              packing or just transport.
            </p>
            <p>
              Then call 056 7277536, and we&apos;ll talk through your move and
              give you a quote over the phone, or share your details and
              we&apos;ll send you a written estimate, usually the same day.
            </p>
          </div>
        }
      />
    </SiteShell>
  );
}

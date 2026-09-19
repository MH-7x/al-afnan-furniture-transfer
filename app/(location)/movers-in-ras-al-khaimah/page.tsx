import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Star,
  Languages,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import MovingProcess from "@/components/MovingProcess";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";

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

export default function RasAlKhaimahPage() {
  return (
    <>
      <main>
        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-title"
          className="relative w-full overflow-hidden md:pt-20 pt-16 border-b border-border/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="col-span-full text-center lg:px-32 flex items-center justify-center flex-col">
                {/* Breadcrumb */}
                <nav
                  aria-label="Breadcrumb"
                  className="mb-5 flex flex-wrap items-center text-xs text-muted-foreground font-medium"
                >
                  <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
                    <li className="inline-flex items-center gap-1.5">
                      <Link
                        href="/"
                        className="hover:text-primary transition-colors"
                      >
                        Home
                      </Link>
                      <ArrowRight
                        className="size-3 text-muted-foreground/40 shrink-0"
                        aria-hidden="true"
                      />
                    </li>
                    <li className="inline-flex items-center">
                      <span
                        className="text-primary font-semibold"
                        aria-current="page"
                      >
                        Movers in Ras Al Khaimah
                      </span>
                    </li>
                  </ol>
                </nav>

                {/* H1 Heading */}
                <h1
                  id="hero-title"
                  className="font-extrabold text-3xl sm:text-4xl lg:text-[2.50rem] leading-[1.14]"
                >
                  Movers in Ras Al Khaimah <br /> Professional Moving &amp;
                  Packing Services
                </h1>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* H2 Heading */}
                <h2 className="text-lg sm:text-2xl font-semibold text-foreground/90 mt-5 leading-snug">
                  Trusted Movers and Packers in Ras Al Khaimah | House, Villa,
                  Apartment &amp; Office Moves Across All Seven Emirates
                </h2>

                {/* Narrative Body Copy */}
                <div className="mt-5 space-y-4">
                  <p className="text-foreground/85 font-medium text-sm sm:text-lg leading-relaxed">
                    Looking for reliable movers in Ras Al Khaimah? Al Afnan
                    Furniture Transfer has been handling house moves, villa
                    relocations, apartment shifts, and office moves across all
                    seven UAE Emirates for over 10 years.
                  </p>

                  <div className="border-l-2 border-primary/40 pl-4 sm:pl-5 space-y-2.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <p>
                      We&apos;re a licensed and insured moving company rated 4.9
                      out of 5 on Google, with trained carpenters and handymen
                      who dismantle, pack, move, and reassemble your furniture,
                      from a single sofa to an entire villa.
                    </p>
                  </div>
                </div>

                {/* Hero CTAs */}
                <Button
                  size="lg"
                  variant={"secondary"}
                  render={
                    <a
                      href="https://wa.me/971567277536"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="py-6 mt-8 md:w-max"
                >
                  Get Your Free Moving Quote
                </Button>
              </div>

              {/* Visual Media Column (5 cols, Aspect Ratio Square) */}
              <div className="lg:col-span-5 w-full">
                <figure
                  aria-label="Al Afnan Furniture Transfer team handling relocation in Ras Al Khaimah"
                  className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-border/80"
                >
                  <Image
                    src="/movers-in-ras-al-khaimah.jpg"
                    alt="Movers in Ras Al Khaimah — Professional Moving &amp; Packing Services by Al Afnan"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover object-center"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white flex flex-col justify-end text-left">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-primary">
                      Al Afnan Furniture Transfer
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      Movers in Ras Al Khaimah &amp; Across the UAE
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            HOUSE, VILLA & APARTMENT MOVERS
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="residential-movers-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2
              id="residential-movers-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              House, Villa &amp; Apartment Movers in Ras Al Khaimah
            </h2>
            <div className="mt-4 space-y-3 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                When you&apos;re planning a house move in Ras Al Khaimah, the
                biggest question is usually simple: will they treat my stuff
                with care? We do.
              </p>
              <p>
                Our movers and packers in Ras Al Khaimah handle residential
                moves of every size, from a studio apartment to a full villa
                relocation. Whether it&apos;s a 1BHK flat or a standalone villa,
                we handle it the same way: carefully, on schedule, without
                surprises.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Villa Moving Card */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/villa-moving-services.jpg"
                  alt="Villa Moving in Ras Al Khaimah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-3">
                    Villa Moving in Ras Al Khaimah
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>
              </div>
            </article>

            {/* Apartment Moving Card */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden ">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/flat-apartment-movers.jpg"
                  alt="Apartment, Flat & Studio Moving in Ras Al Khaimah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-3">
                    Apartment, Flat &amp; Studio Moving in Ras Al Khaimah
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            OFFICE & COMMERCIAL MOVERS
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="commercial-movers-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          {/* Section Header */}
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2
              id="commercial-movers-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Office &amp; Commercial Movers in Ras Al Khaimah
            </h2>
            <div className="mt-4 space-y-3 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p className="text-foreground/90 font-medium">
                Moving an office requires more professional handling than other
                types of moving.
              </p>
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
          </div>

          {/* 2 Dedicated Commercial Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Office Relocation */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden ">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/commercial-office-movers.jpg"
                  alt="Office Relocation in Ras Al Khaimah by Al Afnan Furniture Transfer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-3">
                    Office Relocation in Ras Al Khaimah
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/50">
                  <a
                    href="https://wa.me/971567277536?text=Hi,%20I%20need%20a%20quote%20for%20office%20relocation%20in%20Ras%20Al%20Khaimah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                  >
                    <span>Request Office Relocation Quote</span>
                    <ArrowRight
                      className="size-4 text-primary group-hover/link:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>

            {/* Card 2: Warehouse & RAKEZ Commercial Moves */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden ">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/al-afnan-furniture-transfer-sharjah.jpg"
                  alt="Warehouse & RAKEZ Commercial Moves in Ras Al Khaimah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-3">
                    Warehouse &amp; RAKEZ Commercial Moves
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/50">
                  <a
                    href="https://wa.me/971567277536?text=Hi,%20I%20need%20a%20quote%20for%20warehouse%20commercial%20moving%20in%20RAKEZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                  >
                    <span>Request Commercial Moving Quote</span>
                    <ArrowRight
                      className="size-4 text-primary group-hover/link:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FURNITURE MOVERS & PACKING SERVICES
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="furniture-packing-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-3xl mb-10 sm:mb-12 mx-auto text-center">
            <h2
              id="furniture-packing-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Furniture Movers &amp; <br className="md:block hidden" /> Packing
              Services in Ras Al Khaimah
            </h2>
            <div className="mt-4 space-y-3 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                At Al Afnan Furniture Transfer, our team includes trained
                carpenters and handymen who handle furniture dismantling,
                moving, and reassembly as a core part of what we do.
              </p>
              <p>
                Whether it&apos;s a single item or an entire home&apos;s worth,
                we treat it with the same care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Subsection 1 */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden ">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/furniture-moving-transfer.jpg"
                  alt="Furniture Dismantling, Assembly & Reassembly in Ras Al Khaimah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                    Furniture Dismantling, Assembly &amp; Reassembly in Ras Al
                    Khaimah
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>
              </div>
            </article>

            {/* Subsection 2 */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden ">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/house-moving-services-by-al-afnan.jpg"
                  alt="Sofa, Bed & Wardrobe Moving in Ras Al Khaimah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                    Sofa, Bed &amp; Wardrobe Moving in Ras Al Khaimah
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>
              </div>
            </article>

            {/* Subsection 3 */}
            <article className="group relative flex flex-col bg-card rounded-2xl drop-shadow-xl overflow-hidden ">
              <div className="aspect-4/3 w-full relative overflow-hidden">
                <Image
                  src="/packing-and-moving-services.jpg"
                  alt="Professional Packing Services in Ras Al Khaimah"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center "
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                    Professional Packing Services in Ras Al Khaimah
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* ════════════════════════════════════════════
            WHY CHOOSE AL AFNAN FURNITURE TRANSFER
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="why-choose-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2
              id="why-choose-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Why Choose Al Afnan Furniture Transfer
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              You&apos;ll hear a lot of promises from movers in Ras Al Khaimah.
              The difference with us is what we actually do.
            </p>
          </div>

          {/* 6 Exact Paragraphs as Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80  flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                  We&apos;re a licensed and insured moving company across all
                  seven UAE Emirates, so if your belongings are damaged, lost,
                  or delayed, there&apos;s coverage in place, and there&apos;s a
                  real company behind the phone number.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80  flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                  <Clock className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                  We&apos;ve been doing this for over 10 years, long enough to
                  know the routes, building rules, access issues, and what
                  actually goes wrong on a move day.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80  flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                  <Star className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                  We&apos;re recognized as among the most trusted Ras Al Khaimah
                  movers, rated 4.9 out of 5 on Google.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80  flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                  <Wrench className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                  Our team includes professionally trained carpenters and
                  handymen, so your wardrobes get dismantled properly, your beds
                  reassembled correctly, and your furniture fixed if something
                  needs adjusting.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80  flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                  <Languages className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                  We speak Arabic, English, and Urdu/Hindi, so if you&apos;re a
                  family that&apos;s just landed, a long-term RAK resident, or a
                  business with a mixed team, communication is never a problem.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80  flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                  <CheckCircle2 className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                  Our quotes are all-inclusive with no hidden fees, and
                  we&apos;re available 24/7 with same-day and emergency service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            MOVING PROCESS SECTION
        ════════════════════════════════════════════ */}
        <MovingProcess
          title="Movers in Ras Al Khaimah Work Process"
          desc="We keep the moving process simple and organized across Ras Al Khaimah. From your initial free quote and careful packing to safe transport, unloading, and furniture reassembly."
        />

        {/* ════════════════════════════════════════════
            LONG-DISTANCE & INTER-EMIRATE MOVING
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="inter-emirate-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2
              id="inter-emirate-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Long-Distance &amp; Inter-Emirate Moving
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              We&apos;ve been doing inter-emirate moves for over 10 years, so
              the routes are familiar, the logistics are worked out, and
              you&apos;re not left wondering what happens after the truck leaves
              your old address.
            </p>
          </div>

          {/* 2 Route Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Outbound Route Card */}
            <article className="rounded-2xl bg-primary p-6 sm:p-14  flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 border-b-2 border-white/30 pb-3">
                  Moving From Ras Al Khaimah to Dubai, Sharjah, Ajman &amp; Abu
                  Dhabi
                </h3>
                <div className="space-y-3 text-white/80 text-sm sm:text-base leading-relaxed">
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
              </div>

              <div className="mt-6 pt-5 border-t border-border/60 flex flex-wrap gap-2">
                {[
                  "RAK → Dubai",
                  "RAK → Sharjah",
                  "RAK → Abu Dhabi",
                  "RAK → Ajman",
                ].map((route) => (
                  <span
                    key={route}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-border/50 text-xs font-semibold text-white/90"
                  >
                    {route}
                  </span>
                ))}
              </div>
            </article>

            {/* Inbound Route Card */}
            <article className="rounded-2xl bg-primary p-6 sm:p-14  flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 border-b-2 border-white/30 pb-3">
                  Moving To Ras Al Khaimah from Anywhere in the UAE
                </h3>
                <div className="space-y-3 text-white/80 text-sm sm:text-base leading-relaxed">
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
              </div>

              <div className="mt-6 pt-5 border-t border-border/60 flex flex-wrap gap-2">
                {[
                  "Dubai → RAK",
                  "Sharjah → RAK",
                  "Abu Dhabi → RAK",
                  "All 7 Emirates",
                ].map((route) => (
                  <span
                    key={route}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-border/50 text-xs font-semibold text-muted"
                  >
                    {route}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SAME-DAY & EMERGENCY MOVING
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="emergency-moving-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="rounded-3xl  bg-gradient-to-br from-primary/[0.04] via-card to-card p-6 sm:p-8 lg:p-10 shadow-xs">
            {/* Header & Intro */}
            <div className="max-w-3xl mb-8 mx-auto text-center">
              <h2
                id="emergency-moving-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground md:px-16"
              >
                Same-Day &amp; Emergency Moving in Ras Al Khaimah
              </h2>
              <p className="mt-4 text-foreground/90 font-medium text-base sm:text-lg leading-relaxed">
                Need same day movers in Ras Al Khaimah? We can dispatch a crew
                quickly, assess what needs to happen, and get your move underway
                the same day.
              </p>
            </div>

            {/* 3 Structured Delivery Standards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs  flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                    <Clock className="size-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                    Our 24/7 availability means there&apos;s no &quot;we&apos;re
                    closed&quot;, whether it&apos;s 3pm or 3am, a weekend move
                    or a last-minute rush, we&apos;re available.
                  </p>
                </div>
              </article>

              {/* Pillar 2 */}
              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs  flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                    Emergency movers Ras Al Khaimah is a service we take
                    seriously: if you&apos;re stuck with a flooded apartment, a
                    sudden job transfer, or a landlord who changed the lock,
                    we&apos;ll handle the logistics so you don&apos;t have to.
                  </p>
                </div>
              </article>

              {/* Pillar 3 */}
              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs  flex flex-col justify-between">
                <div>
                  <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal">
                    You&apos;ll get the same care, bubble wrap, stretch film,
                    proper loading, trained hands, just on a tighter timeline.
                  </p>
                </div>
              </article>
            </div>

            {/* Emergency Call-Out Action Banner */}
            <div className="mt-8 rounded-2xl bg-primary text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                  <Phone className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-bold text-white">
                    Need urgent moving support in Ras Al Khaimah?
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                    Available 24/7 for prompt emergency dispatch and transparent
                    pricing.
                  </p>
                </div>
              </div>
              <a
                href="tel:0567277536"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-secondary font-bold text-sm hover:bg-white/90 transition-all shadow-xs shrink-0 cursor-pointer"
              >
                <Phone className="size-4" aria-hidden="true" />
                <span>Call 056 7277536</span>
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            WHAT DETERMINES YOUR MOVING QUOTE
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="pricing-factors-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2
              id="pricing-factors-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              What Determines Your <br /> Moving Quote in Ras Al Khaimah
            </h2>
            <div className="mt-4 space-y-3 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                Before you commit to a mover, the first question is almost
                always about cost.
              </p>
              <p>
                But moving quotes aren&apos;t just a flat number, they shift
                based on real factors. Understanding those factors helps you get
                a fair price and avoid surprises later.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {/* Factor 1 */}
            <article className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between ">
              <div>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-4 tracking-tight">
                  Property Size &amp; Type
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
              </div>
            </article>

            {/* Factor 2 */}
            <article className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between lg:col-span-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-4 tracking-tight">
                  Packing Scope, Distance &amp; Building Access
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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

            {/* Factor 3 */}
            <article className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between lg:col-span-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-4 tracking-tight">
                  Specialized Items &amp; Timing
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
              </div>
            </article>
          </div>

          {/* Pricing Details & Quote Guarantee Callout */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-base sm:text-lg font-semibold text-foreground leading-relaxed">
                  Our quote is all-inclusive, with no hidden fees and no
                  last-minute additions. Once you see the number, that&apos;s
                  what you pay.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To get yours, share your property size, whether you&apos;re
                  moving within RAK or to another emirate, and if you need full
                  packing or just transport. We&apos;ll send you a written
                  estimate with no obligation.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-start lg:justify-end">
                <Button
                  variant="default"
                  size="lg"
                  render={
                    <a
                      href="https://wa.me/971567277536?text=Hi,%20I%20would%20like%20a%20written%20moving%20estimate%20in%20Ras%20Al%20Khaimah"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="w-full sm:w-auto py-6 px-6 font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Get Your Moving Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            AREAS WE SERVE IN RAS AL KHAIMAH
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="areas-served-heading"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2
              id="areas-served-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground"
            >
              Areas We Serve in Ras Al Khaimah
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              If you&apos;re moving within RAK, knowing which area you&apos;re
              in matters, because access, building rules, and traffic patterns
              differ across the emirate. We serve all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {/* Block 1 */}
            <article className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3 tracking-tight">
                  Popular Residential Communities
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
              </div>
            </article>

            {/* Block 2 */}
            <article className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3 tracking-tight">
                  Other Areas
                </h3>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
              </div>
            </article>
          </div>

          {/* Area Tiles Grid */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
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
            ].map((area) => (
              <div
                key={area}
                className="p-3 rounded-xl bg-card border border-border/80 shadow-2xs hover:border-primary/40 transition-colors"
              >
                <h4 className="text-sm font-medium text-foreground tracking-tight">
                  Movers in {area}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FREQUENTLY ASKED QUESTIONS
        ════════════════════════════════════════════ */}
        <FAQSection
          faqs={rakFaqs}
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about house, villa, office, and furniture moving in Ras Al Khaimah."
        />

        {/* ════════════════════════════════════════════
            BOOK YOUR MOVE IN RAS AL KHAIMAH
        ════════════════════════════════════════════ */}
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
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

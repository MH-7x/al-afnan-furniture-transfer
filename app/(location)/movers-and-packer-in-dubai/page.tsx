import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Armchair,
  CalendarCheck,
  Check,
  Clock,
  Languages,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Shirt,
  ShieldCheck,
  Star,
  Tv,
  Wine,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/SiteShell";
import MovingProcess from "@/components/MovingProcess";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContentTable } from "@/components/ContentTable";

export const metadata: Metadata = {
  title: "Movers and Packers in Dubai | 24/7 Moving Company – Al Afnan",
  description:
    "Movers and packers in Dubai, licensed and insured. 24/7 moving company for apartments, villas and offices. Free WhatsApp estimates. Call 056 7277536.",
};

/* ─────────────────────────────────────────────────────────────────────────────
   LINKS & SHARED STYLES
   ───────────────────────────────────────────────────────────────────────────── */
const whatsapp = (text: string) =>
  `https://wa.me/971567277536?text=${encodeURIComponent(text)}`;

const WHATSAPP_QUOTE = whatsapp(
  "Hi, I would like a free moving quote in Dubai",
);

// Google listing for Al Afnan (derived from the CID in the site's map embed).
const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=15781830796061422134";

const sectionClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full";
const h2Class =
  "text-foreground";
const leadClass =
  "mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed";
const bodyClass = "text-muted-foreground text-sm sm:text-base leading-relaxed";
const linkClass =
  "text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors";

const footerSearches = [
  "movers and packers in dubai",
  "movers in dubai",
  "moving company in dubai",
  "moving services in dubai",
  "24/7 movers in dubai",
  "24 hour movers in dubai",
  "best moving company in dubai",
  "cheap movers and packers in dubai",
  "affordable movers in dubai",
  "house movers in dubai",
  "apartment movers in dubai",
  "villa movers in dubai",
  "office movers in dubai",
  "furniture movers in dubai",
  "movers and packers near me dubai",
];

/* ─────────────────────────────────────────────────────────────────────────────
   STRUCTURED DATA
   Sharjah address only; Dubai is declared as the served area (no Dubai address).
   ───────────────────────────────────────────────────────────────────────────── */
const movingCompanySchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Al Afnan Furniture Transfer",
  telephone: "+971567277536",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Jamal Abdul Naser St, near Al Majaz 2, Al Majaz 2 - Al Majaz",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  areaServed: { "@type": "City", name: "Dubai" },
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE CONTENT
   ───────────────────────────────────────────────────────────────────────────── */
const trustStrip = [
  { icon: Star, text: "Google rating", lead: "4.9★" },
  { icon: ShieldCheck, text: "Licensed and insured" },
  { icon: Clock, text: "10 years moving homes across the UAE" },
  { icon: MapPin, text: "All 7 emirates" },
];

const serviceCards: {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  body: React.ReactNode;
}[] = [
  {
    id: "house-movers",
    title: "House Movers in Dubai",
    image: "/house-moving-services-by-al-afnan.jpg",
    imageAlt:
      "House movers in Dubai carrying a stretch-wrapped sofa through a villa hall with boxes ready to load",
    body: (
      <>
        A full house move means the kitchen, the appliances, the kids&apos;
        rooms and everything stored at the back of cupboards. Our house shifting
        crews pack room by room and unload each box into the right room at the
        new address, so you aren&apos;t searching for the kettle at midnight.
        See how our{" "}
        <Link href="/house-movers-in-dubai" className={linkClass}>
          house movers in Dubai
        </Link>{" "}
        plan a complete home move.
      </>
    ),
  },
  {
    id: "apartment-movers",
    title: "Apartment Movers in Dubai",
    image: "/flat-apartment-movers.jpg",
    imageAlt: "Movers in Dubai carrying wrapped furniture into a service lift",
    body: (
      <>
        In a Dubai tower, the hard part is usually the service lift. Your
        building gives you a fixed time slot and a loading bay shared with every
        other resident, so we plan the crew size and packing around that window.
        We move studios and 1 to 3 bedroom flats. Read more about our{" "}
        <Link href="/apartment-movers-in-dubai" className={linkClass}>
          apartment movers in Dubai
        </Link>
        .
      </>
    ),
  },
  {
    id: "villa-movers",
    title: "Villa Movers in Dubai",
    image: "/villa-moving-services.jpg",
    imageAlt: "Moving company in Dubai loading furniture at a villa",
    body: (
      <>
        Villas mean more of everything: bigger wardrobes, garden furniture,
        sometimes a home gym in the garage. Our carpenters take apart the large
        pieces and rebuild them at the new house. We move villas and townhouses
        in communities like Mirdif, Dubai Hills and Dubailand. Our{" "}
        <Link href="/villa-movers-in-dubai" className={linkClass}>
          villa movers in Dubai
        </Link>{" "}
        page covers villa moves step by step.
      </>
    ),
  },
  {
    id: "office-movers",
    title: "Office Movers in Dubai",
    image: "/commercial-office-movers.jpg",
    imageAlt:
      "Office movers in Dubai wheeling filing boxes and a wrapped office chair out of an office",
    body: (
      <>
        Every hour your office is closed costs money, which is why many
        businesses move after hours or over a weekend. Our team works 24 hours,
        so we can move workstations, filing cabinets and computers overnight and
        your staff can come back to a working office. Find out how our{" "}
        <Link href="/office-movers-in-dubai" className={linkClass}>
          office movers in Dubai
        </Link>{" "}
        handle business moves.
      </>
    ),
  },
  {
    id: "furniture-movers",
    title: "Furniture Movers in Dubai",
    image: "/furniture-moving-transfer.jpg",
    imageAlt:
      "Furniture movers in Dubai carrying a wardrobe wrapped in a furniture pad and stretch film",
    body: (
      <>
        Need to shift one wardrobe, a sofa you bought on Dubizzle, or a bed that
        won&apos;t fit through the door in one piece? We wrap, dismantle and
        refit single items or a few pieces without you booking a full house
        move. See our{" "}
        <Link href="/furniture-movers-in-dubai" className={linkClass}>
          furniture movers in Dubai
        </Link>{" "}
        service.
      </>
    ),
  },
  {
    id: "packing-unpacking",
    title: "Packing and Unpacking Services",
    image: "/packing-and-moving-services.jpg",
    imageAlt:
      "Packers and movers in Dubai wrapping furniture and glassware in bubble wrap and stretch film",
    body: (
      <>
        Our packers box up your whole home room by room. At the new place, we
        unpack and put things back in cupboards and drawers, so you aren&apos;t
        living out of boxes for a week.
      </>
    ),
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Licensed and Insured in All Seven Emirates",
    body: "We're a licensed moving company operating in every emirate. Our insurance covers your belongings on the road and while our crew is handling them, so a mirror cracked in the service lift falls under the same cover as an accident in transit.",
    span: "lg:col-span-6",
  },
  {
    icon: CalendarCheck,
    title: "10 Years of Moving Experience",
    body: "Ten years of moves across the UAE means our team has dealt with most of what Dubai buildings throw at movers: narrow service corridors, strict lift timings, villa staircases too tight for a king-size bed frame. We plan for these before moving day instead of discovering them on your doorstep.",
    span: "lg:col-span-6",
  },
  {
    icon: Clock,
    title: "A Dubai Team Working 24 Hours",
    body: "Our Dubai movers work day and night. You can book a same-day move, an emergency move after a lease falls through, or a night move whenever your building allows one.",
    span: "lg:col-span-4",
  },
  {
    icon: Wrench,
    title: "Carpenters and Handymen on the Team",
    body: "Trained carpenters take apart your beds, wardrobes and office desks and rebuild them at the new place, so nothing goes back together with screws left over.",
    span: "lg:col-span-4",
  },
  {
    icon: Languages,
    title: "Crews Who Speak Arabic, English, Urdu and Hindi",
    body: "You can explain what's fragile, what goes where and what stays behind in the language you're most comfortable with.",
    span: "lg:col-span-4",
  },
];

const chooseChecklist = [
  "Does your insurance cover my belongings, or only the truck?",
  "Is the quote written, and is it based on photos, a video or a visit?",
  "Does the price include packing materials, dismantling and reassembly?",
  "Which building fees will I pay separately?",
  "Do your recent Google reviews mention moves like mine?",
];

const reviews = [
  {
    quote:
      "EXTREMELY helpful guys. Had to move ton of stuff from Ajman to Dubai. Most reasonable priced people also. I 100% recommend these guys.",
    author: "Sid Java",
    details: ["Ajman to Dubai", "October 2026"],
  },
  {
    quote:
      "Used them for a local move-in service. Very efficient. On time and Quick. I would highly recommend them. Also, very reasonable prices. Kudos to Waqar Ahmed and his team. Great Job guys. Thanks",
    author: "MK DXB",
    details: ["Local move in Dubai", "August 2026"],
  },
  {
    quote:
      "Thank you Ahmed for your great service from Sharjah to Dubai South. On time and efficient and very careful in handling our stuffs. 100% Effective and Hassle Free!",
    author: "Sarah Orchid O. Fernandez",
    details: ["Sharjah to Dubai South", "July 2026"],
  },
  {
    quote:
      "Hey it was wonderful experience and they have managed everything so well it was very easy and smooth for us to shift from Sharjah to Dubai they made every process very well",
    author: "Murtaza Ali",
    details: ["Sharjah to Dubai", "July 2026"],
  },
  {
    quote:
      "Excellent service! Professional movers. They came and did the job as requested and made sure to leave the place clean after they left. Well done!",
    author: "Alice Aoun",
    details: ["August 2026"],
  },
];

const processSteps = [
  {
    number: "01",
    title: (
      <>
        <span className="sr-only">1. </span>Send Photos or a Video on WhatsApp
      </>
    ),
    paragraphs: [
      "Walk through your home with your phone and send us the video, or snap photos of each room, the big furniture and anything fragile. Tell us both addresses, your preferred date and the floor you're on. If you'd rather we see it in person, we can also arrange a home visit.",
    ],
  },
  {
    number: "02",
    title: (
      <>
        <span className="sr-only">2. </span>Receive a Written, All-Inclusive
        Quote
      </>
    ),
    paragraphs: [
      "We send back a written price that covers packing materials, labour, dismantling, transport and reassembly. Building charges such as move permits and lift deposits are paid to your building, and we'll tell you about them upfront.",
    ],
  },
  {
    number: "03",
    title: (
      <>
        <span className="sr-only">3. </span>Packing Day
      </>
    ),
    paragraphs: [
      "We pack room by room and label each box for the room it's going to. Keep your passports, jewellery and important documents with you rather than in the boxes.",
    ],
  },
  {
    number: "04",
    title: (
      <>
        <span className="sr-only">4. </span>Dismantling, Loading and Transport
      </>
    ),
    paragraphs: [
      "Our carpenters take apart beds, wardrobes and large tables, and bag and label the fittings for each piece. The crew loads the heaviest furniture first and packs boxes around it so nothing shifts on the road.",
    ],
  },
  {
    number: "05",
    title: (
      <>
        <span className="sr-only">5. </span>Unloading, Reassembly and Setup
      </>
    ),
    paragraphs: [
      "We carry each box into the room it belongs in, rebuild your furniture and put it where you want it. Check everything with the team before they leave so anything that needs moving can be fixed on the spot.",
    ],
  },
];

const permitDocuments = [
  "Your tenancy contract or Ejari, or title deed if you own the property",
  "A copy of your Emirates ID or passport",
  "A no-objection letter from the landlord, if you're renting",
  "Proof that your DEWA bill is cleared, for move-outs",
  "The moving company's details",
];

const buildingComparison = [
  [
    "Main challenge",
    "Service lift slot and loading bay",
    "Gate access and the carry from road to front door",
  ],
  [
    "Permits",
    "Building management move permit",
    "Community management permit and gate pass for the truck",
  ],
  ["Time limits", "Fixed lift windows", "Set moving hours in many communities"],
  [
    "Items needing care",
    "Glass tables, mirrors, appliances in tight corridors",
    "Large wardrobes, outdoor furniture, gym equipment",
  ],
  [
    "What we plan",
    "Crew size to match the lift slot",
    "Truck size for internal roads and carpenters for large pieces",
  ],
];

const protectionItems = [
  {
    icon: Wine,
    text: "Glass, crockery, mirrors and lamps wrapped in bubble wrap",
  },
  {
    icon: Armchair,
    text: "Sofas, mattresses and upholstered chairs sealed in stretch film",
  },
  { icon: Shirt, text: "Clothes moved on their hangers in hanger boxes" },
  { icon: Tv, text: "TVs and screens wrapped and carried upright" },
];

const areaGroups = [
  {
    title: "Apartment and Tower Communities",
    description:
      "We plan around service lift slots and loading bay rules in Dubai's busiest residential towers.",
    areas: [
      "Movers in Dubai Marina",
      "Movers in JLT",
      "Movers in JVC",
      "Business Bay",
      "Dubai Creek Harbour",
    ],
  },
  {
    title: "Villa and Family Communities",
    description:
      "Larger homes with gate access, outdoor furniture and bigger loads.",
    areas: [
      "Movers in Palm Jumeirah",
      "Movers in Mirdif",
      "Dubai Hills",
      "Al Warqa",
      "Dubailand",
    ],
  },
  {
    title: "Mixed and Growing Communities",
    description: "Apartments and villas side by side, often with gated access.",
    areas: [
      "Movers and packers in Dubai Silicon Oasis",
      "Al Barsha",
      "Jumeirah",
      "Dubai South",
      "International City",
      "Al Nahda Dubai",
    ],
  },
];

const priceRows = [
  ["Studio", "800 – 1,200"],
  ["1 bedroom apartment", "1,100 – 1,600"],
  ["2 bedroom apartment", "1,700 – 2,600"],
  ["3 bedroom apartment", "2,800 – 4,000"],
  ["3–4 bedroom villa", "4,000 – 6,000"],
  ["5+ bedroom villa", "From 6,500"],
  ["Office", "Price on estimate"],
];

const priceChangers = [
  "How much furniture and how many boxes you have",
  "Floor level, lift access and the distance from the truck to your door",
  "Large items that need dismantling",
  "Moves between Dubai and another emirate",
];

const dubaiFaqs = [
  {
    question: "How much do movers and packers cost in Dubai?",
    answer: (
      <p>
        Within Dubai, a studio move usually costs AED 800–1,200, a 2-bedroom
        apartment AED 1,700–2,600 and a 3–4 bedroom villa AED 4,000–6,000. Your
        final price depends on how much you&apos;re moving and how easy your
        building is to access. See our{" "}
        <Link href="#moving-prices">price guide</Link> or send photos on
        WhatsApp for an exact quote.
      </p>
    ),
  },
  {
    question: "What is included in your moving service in Dubai?",
    answer: (
      <p>
        Packing materials, packing, furniture dismantling, loading, transport,
        unloading, reassembly and insurance for your belongings. You can also
        add unpacking if you&apos;d like your things put back in cupboards and
        drawers.
      </p>
    ),
  },
  {
    question:
      "Do I need a move-out or move-in permit for my building in Dubai?",
    answer: (
      <p>
        Yes, most towers and gated communities in Dubai ask for a permit to move
        out and another to move in, both from building or community management.
        Apply as soon as you know your date, as some buildings take a few
        working days to approve.{" "}
        <Link href="#building-permits">
          See what buildings usually ask for.
        </Link>
      </p>
    ),
  },
  {
    question: "Can you move me the same day or at night in Dubai?",
    answer: (
      <p>
        Yes. Our Dubai team works 24 hours. Same-day moves depend on the size of
        the job and your building&apos;s lift availability, and night moves
        depend on your building&apos;s permitted moving hours.
      </p>
    ),
  },
  {
    question: "Do you dismantle and reassemble furniture?",
    answer: (
      <p>
        Yes. Our carpenters take apart beds, wardrobes, tables and flat-pack
        furniture and rebuild them at your new home. This is included in your
        quote.
      </p>
    ),
  },
  {
    question: "Do you move from Dubai to Abu Dhabi, Sharjah or other emirates?",
    answer: (
      <p>
        Yes. We&apos;re licensed to move across all seven emirates, and our base
        is in Sharjah. Moves between emirates are priced by distance and volume,
        so send your details for a quote.
      </p>
    ),
  },
  {
    question: "Is my furniture insured during the move?",
    answer: (
      <p>
        Yes. Our insurance covers your belongings in transit and while our crew
        is handling them.
      </p>
    ),
  },
  {
    question: "Can I get an estimate without a home visit?",
    answer: (
      <p>
        Yes. Send photos or a short video of your home on WhatsApp and
        we&apos;ll reply with a written quote. If you prefer, we can also
        arrange a home visit.
      </p>
    ),
  },
  {
    question: "How far in advance should I book movers in Dubai?",
    answer: (
      <p>
        Booking one to two weeks ahead gives you the widest choice of dates,
        especially around the end of the month when many leases finish. For
        urgent moves, we also take same-day bookings.
      </p>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────────── */
export default function MoversAndPackersInDubaiPage() {
  return (
    <SiteShell region="dubai" searches={footerSearches}>
      <script
        id="MovingCompanySchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(movingCompanySchema),
        }}
      />

        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="hero-title"
          className="relative w-full overflow-hidden md:pt-20 pt-16 border-b border-border/40"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
              {/* ── Content Column ── */}
              <div className="lg:col-span-7 flex flex-col justify-center">
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
                        Movers and Packers in Dubai
                      </span>
                    </li>
                  </ol>
                </nav>

                <h1
                  id="hero-title"
                  className=""
                >
                  Movers and Packers in Dubai
                </h1>

                <p className="mt-6 text-foreground/85 font-medium text-base sm:text-lg leading-relaxed">
                  24-hour movers in Dubai for apartments, villas and offices.
                  Send a few photos of your place on WhatsApp and we&apos;ll
                  reply with a free quote that already covers packing, transport
                  and setup.
                </p>

                {/* Trust strip */}
                <ul className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 list-none p-0">
                  {trustStrip.map(({ icon: Icon, text, lead }) => (
                    <li
                      key={text}
                      className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-3 py-2 t-small font-semibold text-foreground shadow-2xs"
                    >
                      <Icon
                        className="size-4 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      <span>
                        {lead && <>{lead} </>}
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    render={
                      <a
                        href={WHATSAPP_QUOTE}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="md:w-max"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    <span>Get a Free Quote on WhatsApp</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    render={<a href="tel:0567277536" />}
                    className="md:w-max"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    <span>Call 056 7277536</span>
                  </Button>
                </div>

                <a
                  href="#moving-prices"
                  className="mt-5 w-fit t-body font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  See moving prices →
                </a>
              </div>

              {/* ── Visual Media Column ── */}
              <div className="lg:col-span-5 w-full">
                <figure className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md border border-border/80">
                  {/* Placeholder crew photo: swap for a Dubai-specific photo when ready */}
                  <Image
                    src="/studio-moving-services.jpg"
                    alt="Al Afnan movers and packers in Dubai wrapping a sofa in stretch film before loading the truck"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover object-center"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            INTRO (no heading)
        ════════════════════════════════════════════ */}
        <section aria-label="Introduction" className={sectionClass}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <p className="lg:col-span-5 border-l-4 border-primary pl-5 sm:pl-6 text-foreground font-medium text-lg sm:text-xl lg:text-2xl leading-snug">
              Al Afnan Furniture Transfer is a licensed and insured moving
              company. Our team of movers in Dubai works around the clock, and
              we provide moving services across Dubai and the rest of the UAE.
            </p>
            <div
              className={`lg:col-span-7 space-y-4 text-base sm:text-lg ${bodyClass}`}
            >
              <p>
                As movers and packers in Dubai, we take on the whole job. We
                wrap and box your belongings, take apart beds and wardrobes,
                load the truck, and our carpenters put everything back together
                at your new place.
              </p>
              <p>
                Moving in Dubai usually means booking a service lift, finding
                the loading bay and getting building approval before anything
                leaves the flat. We plan around those details with you before
                moving day. Ten years of moving homes and offices across the UAE
                has taught us to sort them out early.
              </p>
              <p>
                For a price, send photos or a short video of your home on
                WhatsApp. You&apos;ll get a written quote with everything
                included and no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            MOVING SERVICES IN DUBAI
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="dubai-services-heading"
          className={sectionClass}
        >
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 id="dubai-services-heading" className={h2Class}>
              Moving Services in Dubai for Homes, Villas and Offices
            </h2>
            <p className={leadClass}>
              Our moving services in Dubai range from one sofa to a whole
              office. One customer needs local movers for a short hop from JLT
              to Dubai Marina. Another needs a removal company to empty a
              five-bedroom villa and drive it to Abu Dhabi. Pick the service
              that matches your move type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCards.map((card) => (
              <article
                key={card.id}
                className="group relative flex flex-col bg-card rounded-2xl border border-border/80 shadow-xs hover:shadow-xl duration-300 overflow-hidden"
              >
                <div className="aspect-4/3 w-full relative overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className={`mt-3.5 ${bodyClass}`}>{card.body}</p>
                </div>
              </article>
            ))}

            {/* Moves between Dubai and other emirates (full width) */}
            <article className="md:col-span-2 lg:col-span-3 bg-card rounded-2xl border border-border/80 shadow-xs overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto lg:min-h-72">
                  <Image
                    src="/al-afnan-furniture-transfer-sharjah.jpg"
                    alt="Movers loading boxes into a truck for a move between Dubai and other emirates"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-semibold text-foreground">
                    Moves Between Dubai and Other Emirates
                  </h3>
                  <p className={`mt-3.5 ${bodyClass}`}>
                    We&apos;re licensed to move across all seven emirates. Our
                    base is in Sharjah, right next door to Dubai, so moves
                    between the two cities are straightforward for us. We also
                    handle long-distance moves from Dubai to Abu Dhabi, Ajman,
                    Ras Al Khaimah and the northern emirates. See our{" "}
                    <Link href="/" className={linkClass}>
                      movers in Sharjah
                    </Link>
                    ,{" "}
                    <Link href="/movers-in-ajman" className={linkClass}>
                      movers in Ajman
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/movers-in-ras-al-khaimah"
                      className={linkClass}
                    >
                      movers in Ras Al Khaimah
                    </Link>{" "}
                    pages.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <p className="mt-8 p-4 sm:p-5 bg-muted/60 border border-border/60 rounded-xl t-body text-foreground font-medium leading-relaxed">
            Not sure which service fits your move?{" "}
            <a
              href={whatsapp(
                "Hi, I need help choosing a moving service in Dubai",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Message us on WhatsApp
            </a>{" "}
            with a few details and we&apos;ll point you to the right one.
          </p>
        </section>

        {/* ════════════════════════════════════════════
            WHY CHOOSE AL AFNAN
        ════════════════════════════════════════════ */}
        <section aria-labelledby="why-choose-heading" className={sectionClass}>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 id="why-choose-heading" className={h2Class}>
              Why Choose Al Afnan Among Moving Companies in Dubai
            </h2>
            <p className={leadClass}>
              Dubai has no shortage of moving companies, and most of them
              promise the same things. These are the parts of our service you
              can check for yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, body, span }) => (
              <div
                key={title}
                className={`bg-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-xs hover:border-primary/40 transition-colors ${span}`}
              >
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-5">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mt-2.5">
                  {body}
                </p>
              </div>
            ))}

            {/* How to choose */}
            <div className="md:col-span-2 lg:col-span-12 rounded-2xl bg-muted/50 border border-border/80 p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  <h3 className="font-semibold text-foreground">
                    How to Choose the Best Moving Company in Dubai
                  </h3>
                  <p className={`mt-4 ${bodyClass}`}>
                    The best moving company in Dubai for your move is the one
                    that can answer these clearly:
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <ol className="space-y-3 list-none p-0 m-0">
                    {chooseChecklist.map((question, index) => (
                      <li
                        key={question}
                        className="flex items-start gap-3.5 rounded-xl border border-border/70 bg-card px-4 py-3.5"
                      >
                        <span
                          className="size-7 rounded-full bg-primary text-white text-xs font-semibold font-mono flex items-center justify-center shrink-0 mt-px"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </span>
                        <span className="t-body text-foreground font-medium leading-relaxed">
                          {question}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-5 t-body text-foreground font-semibold">
                    We&apos;re happy to answer all five before you book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            REVIEWS
        ════════════════════════════════════════════ */}
        <ReviewsSection
          id="reviews"
          title="Movers and Packers Dubai Reviews"
          intro="We're rated 4.9★ on Google. Read through the reviews and the same things keep coming up: crews arriving on time, careful packing and prices people describe as reasonable. Several come from customers moving into Dubai from Sharjah and Ajman."
          reviews={reviews}
          actions={
            <>
              <Button
                variant="outline"
                size="lg"
                render={
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="font-semibold"
              >
                <span>Read All Reviews on Google</span>
              </Button>
              <Button
                size="lg"
                render={
                  <a
                    href={WHATSAPP_QUOTE}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="font-semibold"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>Get a Free Quote on WhatsApp</span>
              </Button>
            </>
          }
        />

        {/* ════════════════════════════════════════════
            HOW YOUR DUBAI MOVE WORKS
        ════════════════════════════════════════════ */}
        <MovingProcess
          title="How Your Dubai Move Works, From First Message to Final Setup"
          desc={null}
          process={processSteps}
          ctaHref={WHATSAPP_QUOTE}
          ctaLabel="Start Your Move Today"
        />

        {/* ════════════════════════════════════════════
            AVAILABLE 24 HOURS
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="available-24-hours-heading"
          className={sectionClass}
        >
          <div className="max-w-3xl mb-10 sm:mb-12 mx-auto text-center">
            <h2 id="available-24-hours-heading" className={h2Class}>
              Trusted Movers in Dubai, Available 24 Hours
            </h2>
            <p className={leadClass}>
              Moves in Dubai rarely land on a convenient Tuesday morning. Leases
              end on awkward dates, handovers get pushed back, and some
              buildings only let movers in at set hours. As 24/7 movers in
              Dubai, we take bookings and work at any hour, including late
              nights and weekends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl bg-primary/95 p-6 sm:p-8 shadow-xs">
              <div className="size-11 rounded-xl bg-white/15 text-white flex items-center justify-center mb-4">
                <Zap className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold border-b-2 border-white/30 pb-2 text-white mb-3">
                Same-Day and Emergency Moves
              </h3>
              <p className="t-body text-white/90 leading-relaxed">
                Need to move today? Call or WhatsApp us with both addresses and
                a few photos. Whether we can do it the same day depends on the
                size of the job and your building&apos;s lift availability, so
                the earlier you message, the more options you&apos;ll have.
              </p>
            </div>

            <div className="rounded-2xl bg-primary/95 p-6 sm:p-8 shadow-xs">
              <div className="size-11 rounded-xl bg-white/15 text-white flex items-center justify-center mb-4">
                <Moon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold border-b-2 border-white/30 pb-2 text-white mb-3">
                Night and Weekend Moves
              </h3>
              <p className="t-body text-white/90 leading-relaxed">
                Our 24-hour movers in Dubai can work through the night, which
                suits offices that can&apos;t close during working hours. Many
                towers and gated communities set fixed moving hours, so send us
                your building&apos;s rules and we&apos;ll schedule the move to
                fit.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            BUILDING PERMITS, SERVICE LIFTS & ACCESS
        ════════════════════════════════════════════ */}
        <section aria-labelledby="building-permits" className={sectionClass}>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 id="building-permits" className={`scroll-mt-28 ${h2Class}`}>
              Moving in a Dubai Building: Permits, Service Lifts and Access
            </h2>
            <p className={leadClass}>
              A move can be fully packed and still stuck in the lobby because
              the building hasn&apos;t approved it. In Dubai, building and
              community rules decide when your move can happen and how long the
              crew has, so sort them out before you book a date.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Permits */}
            <article className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
              <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-4">
                Move-Out and Move-In Permits
              </h3>
              <div className={`space-y-4 ${bodyClass}`}>
                <p>
                  Most towers and gated communities ask for a move permit from
                  building or community management, usually one to leave your
                  old home and another to enter the new one. Buildings commonly
                  ask for:
                </p>
                <ul className="space-y-2.5 list-none p-0">
                  {permitDocuments.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p>
                  Some towers also take a refundable deposit against damage to
                  lifts and corridors. In master communities run by developers
                  such as Emaar or Nakheel, the permit usually goes through the
                  community app or portal. Apply as soon as you know your date,
                  because some buildings need a few working days to approve.
                </p>
              </div>
            </article>

            {/* Service lift */}
            <article className="lg:col-span-5 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
              <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-4">
                Booking the Service Lift and Loading Bay
              </h3>
              <p className={bodyClass}>
                Most buildings don&apos;t allow furniture in the passenger
                lifts, so you&apos;ll book the service lift through building
                management for a fixed time window. We size the crew so your
                belongings move out within that slot. Also check where the truck
                can park, because some loading bays have height limits or are
                shared with deliveries.
              </p>
            </article>

            {/* Towers vs villa communities */}
            <div className="lg:col-span-12 mt-2">
              <h3 className="font-semibold text-foreground mb-5">
                High-Rise Towers vs Gated Villa Communities
              </h3>
              <ContentTable
                label="High-rise towers compared with gated villa communities"
                headers={[
                  "",
                  "High-rise towers (e.g. Dubai Marina, JLT, Business Bay)",
                  "Gated villa communities (e.g. Mirdif, Dubai Hills, Dubailand)",
                ]}
                rows={buildingComparison}
              />
              <p className="mt-6 p-4 sm:p-5 bg-muted/60 border border-border/60 rounded-xl t-body text-foreground font-medium leading-relaxed">
                Before you confirm your moving date, make sure you have an
                approved permit, a booked lift slot or gate pass, and a parking
                spot for the truck.
              </p>
              <Button
                size="lg"
                render={
                  <a
                    href={whatsapp(
                      "Hi, here are my building's moving rules for a move in Dubai",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="mt-6 font-semibold w-full sm:w-auto"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>Send Us Your Building&apos;s Rules on WhatsApp</span>
              </Button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            HOW WE PROTECT YOUR BELONGINGS
        ════════════════════════════════════════════ */}
        <section aria-labelledby="protect-heading" className={sectionClass}>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 id="protect-heading" className={h2Class}>
              How Our Packers and Movers in Dubai Protect Your Belongings
            </h2>
            <p className={leadClass}>
              A lot of moving damage happens in corridors, lifts and doorways,
              so we pack for the tight spots as well as the drive:
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 list-none p-0">
            {protectionItems.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs hover:border-primary/40 transition-colors"
              >
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p className="text-sm sm:text-[15px] text-foreground/90 font-medium leading-relaxed">
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 p-4 sm:p-5 bg-muted/60 border border-border/60 rounded-xl t-body text-foreground font-medium leading-relaxed">
            All packing materials are included in your quote, and everything we
            move is insured in transit and while our crew is handling it.
          </p>
        </section>

        {/* ════════════════════════════════════════════
            AREAS WE COVER ACROSS DUBAI
        ════════════════════════════════════════════ */}
        <section aria-labelledby="areas-heading" className={sectionClass}>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 id="areas-heading" className={h2Class}>
              Areas We Cover Across Dubai
            </h2>
            <p className={leadClass}>
              Searching for movers and packers near you in Dubai? Our team
              covers the whole city, from high-rise towers to gated villa
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {areaGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col"
              >
                <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3">
                  {group.title}
                </h3>
                <p className={bodyClass}>{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2.5 list-none p-0">
                  {group.areas.map((area) => (
                    <li
                      key={area}
                      className="px-3 py-2 rounded-xl bg-muted/50 border border-border/80 text-sm font-medium text-foreground tracking-tight"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className={`mt-8 max-w-4xl ${bodyClass} sm:text-lg`}>
            We also move homes and offices in Downtown Dubai, Deira, Bur Dubai
            and other areas across the city. Don&apos;t see your area?{" "}
            <a
              href={whatsapp("Hi, I need movers in Dubai. My area is: ")}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Message us on WhatsApp.
            </a>
          </p>
        </section>

        {/* ════════════════════════════════════════════
            PRICE GUIDE
        ════════════════════════════════════════════ */}
        <section aria-labelledby="moving-prices" className={sectionClass}>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 id="moving-prices" className={`scroll-mt-28 ${h2Class}`}>
              Movers and Packers Dubai Price Guide
            </h2>
            <p className={leadClass}>
              What do movers in Dubai charge? Mostly it depends on how much you
              own and how easy your building is to work in. These ranges are for
              moves within Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ContentTable
                label="Typical moving prices in Dubai by move size, in AED"
                headers={["Move size", "Typical price (AED)"]}
                rows={priceRows}
                className="min-w-0"
              />
              <p className="mt-3 t-small text-muted-foreground font-medium">
                Updated October 2026
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3">
                  What Every Quote Includes
                </h3>
                <p className={bodyClass}>
                  Packing materials, labour, dismantling, transport, reassembly
                  and insurance for your belongings.
                </p>
              </article>

              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3">
                  What Changes Your Price
                </h3>
                <ul className="space-y-2 list-none p-0 m-0">
                  {priceChangers.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="size-1.5 rounded-full bg-primary shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      <span className={bodyClass}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3">
                  Building Fees Paid Separately
                </h3>
                <p className={bodyClass}>
                  Move permit fees and refundable lift deposits are paid
                  directly to your building. We&apos;ll tell you about them
                  upfront so they don&apos;t come as a surprise.
                </p>
              </article>

              <article className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs">
                <h3 className="font-semibold text-foreground border-b-2 border-primary/30 pb-2 mb-3">
                  Affordable Movers in Dubai Without Hidden Fees
                </h3>
                <p className={bodyClass}>
                  Comparing cheap movers and packers in Dubai? A low price only
                  saves you money if it holds on moving day. Our written quote
                  is all-inclusive and stays the same unless you add items to
                  the move.
                </p>
              </article>
            </div>
          </div>

          <Button
            size="lg"
            render={
              <a
                href={whatsapp(
                  "Hi, I'd like an exact quote for my move in Dubai. I'm sending photos now.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="mt-8 font-semibold w-full sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span>Send Photos for Your Exact Quote on WhatsApp</span>
          </Button>
        </section>

        {/* ════════════════════════════════════════════
            FREQUENTLY ASKED QUESTIONS
        ════════════════════════════════════════════ */}
        <FAQSection
          faqs={dubaiFaqs}
          title="Frequently Asked Questions About Movers and Packers in Dubai"
          subtitle=""
        />

        {/* ════════════════════════════════════════════
            BOOK YOUR DUBAI MOVE
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Book Your Dubai Move"
          paragraph="Getting started takes one message, for a studio in JLT or a villa in Mirdif. Send photos or a short video of your home on WhatsApp, tell us both addresses and your preferred date, and we'll reply with a written, all-inclusive quote. Our Dubai team works 24 hours, so you can book a move for tomorrow morning, this weekend or tonight."
          whatsappButtonText="Get a Free Quote on WhatsApp"
          whatsappButtonHref={WHATSAPP_QUOTE}
          callButtonText="Call 056 7277536"
        />
    </SiteShell>
  );
}

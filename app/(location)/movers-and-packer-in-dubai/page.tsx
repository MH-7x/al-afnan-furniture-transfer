import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import {
  Armchair,
  CalendarCheck,
  Check,
  Clock,
  Languages,
  MapPin,
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
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ContentTable } from "@/components/ContentTable";
import { SectionHeader } from "@/components/SectionHeader";
import { LocationHero } from "@/components/LocationHero";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata = MetadataTemplate({
  title: "Movers and Packers in Dubai | 24/7 Moving Company – Al Afnan",
  desc:
    "Movers and packers in Dubai, licensed and insured. 24/7 moving company for apartments, villas and offices. Free WhatsApp estimates. Call 056 7277536.",
  path: "/movers-and-packer-in-dubai",
  image: { path: "/images/movers-and-packers-dubai-al-afnan-hero.jpg" },
});

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

const bodyClass = "t-body text-muted-foreground";
const linkClass =
  "font-semibold text-signal underline decoration-1 underline-offset-4 hover:decoration-2";

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
    image: "/images/house-movers-dubai-al-afnan-furniture-transfer.jpg",
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
    image: "/images/apartment-movers-dubai-al-afnan-furniture-transfer.jpg",
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
    image: "/images/villa-movers-dubai-al-afnan-furniture-transfer.jpg",
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
    image: "/images/office-movers-dubai-al-afnan-furniture-transfer.jpg",
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
    image: "/images/furniture-dismantling-reassembly-dubai-al-afnan-movers.jpg",
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
    image: "/images/packing-unpacking-services-dubai-al-afnan-movers.jpg",
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

/** Service rows: the six services plus moves between emirates. */
const serviceRows = [
  ...serviceCards,
  {
    id: "other-emirates",
    title: "Moves Between Dubai and Other Emirates",
    image: "/images/long-distance-inter-emirate-movers-uae-al-afnan.jpg",
    imageAlt: "Movers loading boxes into a truck for a move between Dubai and other emirates",
    body: (
      <>
        We&apos;re licensed to move across all seven emirates. Our
        base is in Sharjah, right next door to Dubai, so moves
        between the two cities are straightforward for us. We also
        handle long-distance moves from Dubai to Abu Dhabi, Ajman,
        Ras Al Khaimah and the northern emirates. See our{" "}
        <Link href="/movers-in-sharjah" className={linkClass}>
          movers in Sharjah
        </Link>
        ,{" "}
        <Link href="/movers-in-ajman" className={linkClass}>
          movers in Ajman
        </Link>{" "}
        and{" "}
        <Link href="/movers-in-ras-al-khaimah" className={linkClass}>
          movers in Ras Al Khaimah
        </Link>{" "}
        pages.
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
    <SiteShell region="dubai" searches={footerSearches} layout="bands">
      {/* ════ HERO ════ */}
      <LocationHero
        id="hero-title"
        current="Movers and Packers in Dubai"
        title="Movers and Packers in Dubai"
        image="/images/movers-and-packers-dubai-al-afnan-hero.jpg"
        imageAlt="Al Afnan movers and packers in Dubai wrapping a sofa in stretch film before loading the truck"
      >
        <p className="mt-7 t-lead text-paper measure">
          24-hour movers in Dubai for apartments, villas and offices.
          Send a few photos of your place on WhatsApp and we&apos;ll
          reply with a free quote that already covers packing, transport
          and setup.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button render={<a href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer" />}>
            <WhatsAppIcon />
            <span>Get a Free Quote on WhatsApp</span>
          </Button>
          <Button variant="outline-light" render={<a href="tel:0567277536" />}>
            <Phone aria-hidden="true" />
            <span>Call 056 7277536</span>
          </Button>
        </div>

        <a
          href="#moving-prices"
          className="mt-6 inline-block t-body font-semibold text-white underline decoration-signal-bright decoration-2 underline-offset-4 hover:text-signal-bright transition-colors"
        >
          See moving prices →
        </a>

        {/* Trust strip */}
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 border-t border-white/20 pt-6">
          {trustStrip.map(({ icon: Icon, text, lead }) => (
            <li key={text} className="flex items-start gap-2.5 t-small text-paper">
              <Icon className="mt-0.5 size-4 shrink-0 text-signal-bright" aria-hidden="true" />
              <span>
                {lead && <strong className="font-semibold text-white">{lead} </strong>}
                {text}
              </span>
            </li>
          ))}
        </ul>
      </LocationHero>

      {/* ════ INTRO (no heading) ════ */}
      <section aria-label="Introduction" className="section-y">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <p className="lg:col-span-5 border-t-4 border-signal pt-6 t-pull text-ink">
            Al Afnan Furniture Transfer is a licensed and insured moving
            company. Our team of movers in Dubai works around the clock, and
            we provide moving services across Dubai and the rest of the UAE.
          </p>
          <div className="lg:col-span-7 space-y-5 t-body text-muted-foreground measure">
            <p className="t-lead text-steel">
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

      {/* ════ MOVING SERVICES IN DUBAI ════ */}
      <section aria-labelledby="dubai-services-heading" className="bg-white section-y">
        <div className="wrap">
          <SectionHeader
            id="dubai-services-heading"
            title="Moving Services in Dubai for Homes, Villas and Offices"
            lead="Our moving services in Dubai range from one sofa to a whole office. One customer needs local movers for a short hop from JLT to Dubai Marina. Another needs a removal company to empty a five-bedroom villa and drive it to Abu Dhabi. Pick the service that matches your move type."
          />

          <ol className="mt-14 border-t border-ink [counter-reset:service]">
            {serviceRows.map((row, index) => (
              <li
                key={row.id}
                className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center border-b border-line py-10 lg:py-14 [counter-increment:service]"
              >
                <div
                  className={`md:col-span-5 relative aspect-4/3 overflow-hidden rounded-xl bg-paper-2 ${
                    index % 2 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={row.image}
                    alt={row.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
                <div className={`md:col-span-7 ${index % 2 ? "md:order-1" : ""}`}>
                  <span
                    className="t-num block text-4xl font-bold leading-none text-signal before:content-[counter(service,decimal-leading-zero)]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-ink">{row.title}</h3>
                  <p className={`mt-4 measure ${bodyClass}`}>{row.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl bg-paper-2 p-6 sm:p-7 t-body font-medium text-ink">
            <WhatsAppIcon className="size-6 shrink-0 text-signal" />
            <span>
              Not sure which service fits your move?{" "}
              <a
                href={whatsapp("Hi, I need help choosing a moving service in Dubai")}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Message us on WhatsApp
              </a>{" "}
              with a few details and we&apos;ll point you to the right one.
            </span>
          </p>
        </div>
      </section>

      {/* ════ WHY CHOOSE AL AFNAN ════ */}
      <section aria-labelledby="why-choose-heading" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="why-choose-heading"
            title="Why Choose Al Afnan Among Moving Companies in Dubai"
            lead="Dubai has no shortage of moving companies, and most of them promise the same things. These are the parts of our service you can check for yourself."
          />

          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-ink">
            {whyChooseUs.map(({ title, body }) => (
              <li key={title} className="reveal border-b border-line py-8">
                <h3 className="t-h4 text-ink">{title}</h3>
                <p className="mt-2 t-body text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>

          {/* How to choose */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 rounded-xl bg-paper-2 p-7 sm:p-10">
            <div className="lg:col-span-5">
              <h3 className="text-ink">How to Choose the Best Moving Company in Dubai</h3>
              <p className="mt-4 t-body text-muted-foreground">
                The best moving company in Dubai for your move is the one
                that can answer these clearly:
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol className="border-t border-ink">
                {chooseChecklist.map((question, index) => (
                  <li
                    key={question}
                    className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-4"
                  >
                    <span className="t-num text-2xl font-bold leading-none text-signal" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="t-body font-medium text-ink">{question}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 t-body font-semibold text-ink">
                We&apos;re happy to answer all five before you book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ REVIEWS ════ */}
      <GoogleReviewsSection
        id="reviews"
        title="Movers and Packers Dubai Reviews"
        intro="We're rated 4.9★ on Google. Read through the reviews and the same things keep coming up: crews arriving on time, careful packing and prices people describe as reasonable. Several come from customers moving into Dubai from Sharjah and Ajman."
        actions={
          <>
            <Button
              variant="outline"
              render={<a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" />}
            >
              <span>Read All Reviews on Google</span>
            </Button>
            <Button render={<a href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer" />}>
              <WhatsAppIcon />
              <span>Get a Free Quote on WhatsApp</span>
            </Button>
          </>
        }
      />

      {/* ════ HOW YOUR DUBAI MOVE WORKS ════ */}
      <MovingProcess
        title="How Your Dubai Move Works, From First Message to Final Setup"
        desc={null}
        process={processSteps}
        ctaHref={WHATSAPP_QUOTE}
        ctaLabel="Start Your Move Today"
      />

      {/* ════ AVAILABLE 24 HOURS ════ */}
      <section aria-labelledby="available-24-hours-heading" className="bg-paper-2 section-y">
        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="available-24-hours-heading" className="text-ink">
              Trusted Movers in Dubai, Available 24 Hours
            </h2>
            <p className="mt-5 t-lead text-steel">
              Moves in Dubai rarely land on a convenient Tuesday morning. Leases
              end on awkward dates, handovers get pushed back, and some
              buildings only let movers in at set hours. As 24/7 movers in
              Dubai, we take bookings and work at any hour, including late
              nights and weekends.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            <div className="border-t-2 border-signal pt-6 pb-2">
              <Zap className="size-6 text-signal" aria-hidden="true" />
              <h3 className="mt-4 text-ink">Same-Day and Emergency Moves</h3>
              <p className="mt-3 t-body text-muted-foreground">
                Need to move today? Call or WhatsApp us with both addresses and
                a few photos. Whether we can do it the same day depends on the
                size of the job and your building&apos;s lift availability, so
                the earlier you message, the more options you&apos;ll have.
              </p>
            </div>
            <div className="mt-8 sm:mt-0 border-t-2 border-ink pt-6 pb-2">
              <Moon className="size-6 text-ink" aria-hidden="true" />
              <h3 className="mt-4 text-ink">Night and Weekend Moves</h3>
              <p className="mt-3 t-body text-muted-foreground">
                Our 24-hour movers in Dubai can work through the night, which
                suits offices that can&apos;t close during working hours. Many
                towers and gated communities set fixed moving hours, so send us
                your building&apos;s rules and we&apos;ll schedule the move to
                fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ BUILDING PERMITS, SERVICE LIFTS & ACCESS ════ */}
      <section aria-labelledby="building-permits" className="bg-white section-y">
        <div className="wrap">
          <SectionHeader
            id="building-permits"
            title="Moving in a Dubai Building: Permits, Service Lifts and Access"
            lead={
              <>
                A move can be fully packed and still stuck in the lobby because
                the building hasn&apos;t approved it. In Dubai, building and
                community rules decide when your move can happen and how long the
                crew has, so sort them out before you book a date.
              </>
            }
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Permits */}
            <article className="lg:col-span-7 border-t-2 border-ink pt-6">
              <h3 className="text-ink">Move-Out and Move-In Permits</h3>
              <div className={`mt-4 space-y-5 ${bodyClass}`}>
                <p>
                  Most towers and gated communities ask for a move permit from
                  building or community management, usually one to leave your
                  old home and another to enter the new one. Buildings commonly
                  ask for:
                </p>
                <ul className="border-t border-line">
                  {permitDocuments.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-line py-3">
                      <Check className="mt-1 size-4.5 shrink-0 text-signal" aria-hidden="true" />
                      <span className="font-medium text-ink">{item}</span>
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
            <article className="lg:col-span-5 rounded-xl bg-paper-2 p-7 sm:p-9">
              <h3 className="text-ink">Booking the Service Lift and Loading Bay</h3>
              <p className={`mt-4 ${bodyClass}`}>
                Most buildings don&apos;t allow furniture in the passenger
                lifts, so you&apos;ll book the service lift through building
                management for a fixed time window. We size the crew so your
                belongings move out within that slot. Also check where the truck
                can park, because some loading bays have height limits or are
                shared with deliveries.
              </p>
            </article>
          </div>

          {/* Towers vs villa communities */}
          <div className="mt-16">
            <h3 className="text-ink">High-Rise Towers vs Gated Villa Communities</h3>
            <ContentTable
              label="High-rise towers compared with gated villa communities"
              headers={[
                "",
                "High-rise towers (e.g. Dubai Marina, JLT, Business Bay)",
                "Gated villa communities (e.g. Mirdif, Dubai Hills, Dubailand)",
              ]}
              rows={buildingComparison}
              className="mt-6"
            />
            <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 rounded-xl border border-ink/15 p-6 sm:p-7">
              <p className="t-body font-medium text-ink measure">
                Before you confirm your moving date, make sure you have an
                approved permit, a booked lift slot or gate pass, and a parking
                spot for the truck.
              </p>
              <Button
                render={
                  <a
                    href={whatsapp("Hi, here are my building's moving rules for a move in Dubai")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="shrink-0"
              >
                <WhatsAppIcon />
                <span>Send Us Your Building&apos;s Rules on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════ HOW WE PROTECT YOUR BELONGINGS ════ */}
      <section aria-labelledby="protect-heading" data-surface="dark" className="bg-ink text-fog section-y">
        <div className="wrap">
          <SectionHeader
            id="protect-heading"
            tone="dark"
            title="How Our Packers and Movers in Dubai Protect Your Belongings"
            lead="A lot of moving damage happens in corridors, lifts and doorways, so we pack for the tight spots as well as the drive:"
          />

          <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {protectionItems.map(({ icon: Icon, text }) => (
              <li key={text} className="reveal border-t border-ink-3 pt-6">
                <Icon className="size-7 text-signal-bright" aria-hidden="true" />
                <p className="mt-4 t-body font-medium text-white">{text}</p>
              </li>
            ))}
          </ul>

          <p className="mt-12 border-t border-ink-3 pt-6 t-body text-fog measure">
            All packing materials are included in your quote, and everything we
            move is insured in transit and while our crew is handling it.
          </p>
        </div>
      </section>

      {/* ════ AREAS WE COVER ACROSS DUBAI ════ */}
      <section aria-labelledby="areas-heading" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="areas-heading"
            title="Areas We Cover Across Dubai"
            lead="Searching for movers and packers near you in Dubai? Our team covers the whole city, from high-rise towers to gated villa communities."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
            {areaGroups.map((group) => (
              <article key={group.title} className="border-t-2 border-ink pt-6">
                <h3 className="t-h4 text-ink">{group.title}</h3>
                <p className={`mt-2 ${bodyClass}`}>{group.description}</p>
                <ul className="mt-5 border-t border-line">
                  {group.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2.5 border-b border-line py-3 font-semibold text-ink"
                    >
                      <span className="size-1.5 shrink-0 bg-signal" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-10 t-lead text-steel measure">
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
        </div>
      </section>

      {/* ════ PRICE GUIDE ════ */}
      <section aria-labelledby="moving-prices" className="bg-white section-y">
        <div className="wrap">
          <SectionHeader
            id="moving-prices"
            title="Movers and Packers Dubai Price Guide"
            lead="What do movers in Dubai charge? Mostly it depends on how much you own and how easy your building is to work in. These ranges are for moves within Dubai."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <ContentTable
                label="Typical moving prices in Dubai by move size, in AED"
                headers={["Move size", "Typical price (AED)"]}
                rows={priceRows.map(([size, price]) => [
                  size,
                  <span key={size} className="t-num text-xl font-bold text-ink">
                    {price}
                  </span>,
                ])}
                className="[&_table]:min-w-0"
              />
              <p className="mt-3 t-small text-muted-foreground">Updated October 2026</p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              <article className="border-t-2 border-ink pt-6">
                <h3 className="t-h4 text-ink">What Every Quote Includes</h3>
                <p className={`mt-2 ${bodyClass}`}>
                  Packing materials, labour, dismantling, transport, reassembly
                  and insurance for your belongings.
                </p>
              </article>

              <article className="border-t-2 border-ink pt-6">
                <h3 className="t-h4 text-ink">What Changes Your Price</h3>
                <ul className="mt-2 space-y-2">
                  {priceChangers.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 size-1.5 shrink-0 bg-signal" aria-hidden="true" />
                      <span className={bodyClass}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="border-t-2 border-ink pt-6">
                <h3 className="t-h4 text-ink">Building Fees Paid Separately</h3>
                <p className={`mt-2 ${bodyClass}`}>
                  Move permit fees and refundable lift deposits are paid
                  directly to your building. We&apos;ll tell you about them
                  upfront so they don&apos;t come as a surprise.
                </p>
              </article>

              <article className="border-t-2 border-signal pt-6">
                <h3 className="t-h4 text-ink">Affordable Movers in Dubai Without Hidden Fees</h3>
                <p className={`mt-2 ${bodyClass}`}>
                  Comparing cheap movers and packers in Dubai? A low price only
                  saves you money if it holds on moving day. Our written quote
                  is all-inclusive and stays the same unless you add items to
                  the move.
                </p>
              </article>

              <div className="sm:col-span-2">
                <Button
                  render={
                    <a
                      href={whatsapp(
                        "Hi, I'd like an exact quote for my move in Dubai. I'm sending photos now.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="w-full sm:w-auto"
                >
                  <WhatsAppIcon />
                  <span>Send Photos for Your Exact Quote on WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FREQUENTLY ASKED QUESTIONS ════ */}
      <div className="bg-paper-2">
        <FAQSection
          faqs={dubaiFaqs}
          title="Frequently Asked Questions About Movers and Packers in Dubai"
          subtitle=""
          layout="split"
        />
      </div>

      {/* ════ BOOK YOUR DUBAI MOVE ════ */}
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

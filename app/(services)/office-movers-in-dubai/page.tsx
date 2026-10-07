import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarCheck,
  Clock,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";
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
  title: "Office Movers in Dubai | 24/7 Office Relocation – Al Afnan",
  description:
    "Office movers in Dubai for overnight and weekend relocations. Workstations, IT and files moved and set up. Free site visit, 24/7 team. Call 056 7277536.",
};

const WHATSAPP_SITE_VISIT = whatsappLink(
  "Hi, I would like to book a free site visit for an office move in Dubai.",
);
const WHATSAPP_FLOOR_PLAN = whatsappLink(
  "Hi, I'm sending my floor plan and a few photos for an office move in Dubai.",
);

const officeFaqs = [
  {
    question: "Can you move our office overnight or over the weekend?",
    answer: (
      <p>
        Yes. Our Dubai team works 24/7, so we can pack in the evening and move
        overnight, or run the move from Friday afternoon to Sunday. Your
        building may set its own moving hours, so we confirm those before fixing
        the time.
      </p>
    ),
  },
  {
    question: "Do you move servers and IT equipment?",
    answer: (
      <p>
        Yes. We pack, move and place computers, screens, printers, networking
        hardware and server racks, with cables tagged to each machine. Your IT
        team or provider should handle shutdown, backups and reconnection. We
        agree the server rack plan with them before moving day.
      </p>
    ),
  },
  {
    question: "How much do office movers cost in Dubai?",
    answer: (
      <p>
        It depends on the number of workstations, the IT equipment, the building
        access at both ends and whether the move runs overnight or at the
        weekend. We price after a free site visit and give you a written,
        all-inclusive quote. See{" "}
        <a href="#office-moving-costs-in-dubai">office moving costs</a> for what
        changes the price.
      </p>
    ),
  },
  {
    question: "How long does an office move take?",
    answer: (
      <p>
        Smaller offices usually fit into one overnight or weekend window. Larger
        offices are often moved in phases over several nights or weekends so the
        business keeps running. You get the planned timing with your quote.
      </p>
    ),
  },
  {
    question: "Do you dismantle and reassemble workstations?",
    answer: (
      <p>
        Yes. Our carpenters take apart workstations, desks, meeting tables and
        partitions, label each part to your new floor plan and rebuild them at
        the new office.
      </p>
    ),
  },
  {
    question: "Who arranges the building NOC and service lift?",
    answer: (
      <p>
        The building issues it, usually to the tenant or facilities team. We
        send the company documents and truck details the building asks for and
        work to the time slot it gives. See{" "}
        <a href="#building-rules-free-zones-and-business-districts">
          building rules
        </a>{" "}
        for what buildings usually ask for.
      </p>
    ),
  },
  {
    question: "Can you move an office at short notice?",
    answer: (
      <p>
        Often, yes. We take same-day and emergency moves when a crew and truck
        are free. Building approvals can still take time, so call as early as
        you can and tell us both building names.
      </p>
    ),
  },
  {
    question: "Do you move shops and showrooms?",
    answer: (
      <p>
        Yes. We move display units, racks and stock after closing time. Malls
        usually have their own delivery and fit-out rules, so check them with
        mall management first.
      </p>
    ),
  },
];

const dubaiAreasList = [
  "Business Bay",
  "JLT",
  "DMCC",
  "DIFC",
  "Sheikh Zayed Road",
  "Dubai Internet City",
  "Dubai Media City",
  "Al Quoz",
  "Dubai Silicon Oasis",
];

const footerSearches = [
  "office movers in Dubai",
  "office relocation in Dubai",
  "commercial movers in Dubai",
  "office furniture movers in Dubai",
  "office movers and packers in Dubai",
  "IT equipment moving in Dubai",
  "corporate relocation in Dubai",
  "shop shifting in Dubai",
  "movers and packers in Dubai",
  "furniture movers in Dubai",
];

export default function OfficeMoversInDubaiPage() {
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
          current="Office Movers in Dubai"
          title="Office Movers in Dubai"
          tagline="Office relocation planned around your working hours, including overnight and weekend moves"
          badges={[
            { icon: Star, text: "4.9★ Google rating" },
            { icon: ShieldCheck, text: "Licensed and insured" },
            { icon: Clock, text: "10 years moving across the UAE" },
            { icon: Clock, text: "24/7 Dubai team" },
          ]}
          primaryCta={{
            label: "Book a free site visit",
            href: WHATSAPP_SITE_VISIT,
            icon: CalendarCheck,
          }}
          secondaryCta={{
            label: "WhatsApp your floor plan",
            href: WHATSAPP_FLOOR_PLAN,
            icon: MessageCircle,
          }}
        >
          <p>
            Our office movers in Dubai pack up workstations, IT equipment and
            files, move them to your new office and set the floor up again,
            mostly outside your working hours. The Dubai team runs 24/7, so we
            can start after your staff log off on Friday and have desks back in
            place for Monday morning.
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
                We price every office move after a free site visit. Two offices
                of the same size can need very different crews, depending on the
                furniture, the IT and each building&apos;s rules. You get a
                written, all-inclusive quote with no hidden fees. The quickest
                way to start is to send your floor plan and a few photos on
                WhatsApp.
              </p>
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/commercial-office-movers.jpg"
                    alt="Office movers in Dubai dismantling workstations"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
              </figure>

              {/* ── What our office movers in Dubai move and set up ── */}
              <h2>What our office movers in Dubai move and set up</h2>
              <p>
                An office move is really a set of smaller jobs running at once:
                desks to take apart, cables to keep track of, files that
                can&apos;t go missing, and a service lift booked at two
                different buildings. We plan each one before moving day, so
                moving night runs to a plan instead of being worked out on the
                spot.
              </p>

              <h3>
                Office furniture movers: workstations, desks and partitions
              </h3>
              <p>
                Workstation dismantling is carpentry work, so our carpenters
                take apart the workstations, modular desks, meeting tables and
                partitions. Every part gets the desk number from your new floor
                plan, so the crew rebuilds the layout you drew, not a rough
                version of the old one. Chairs are wrapped in stretch film.
                Filing cabinets travel locked, and heavy ones are emptied into
                cartons first so they&apos;re safe to lift.
              </p>
              <p>
                Moving only a few desks or a boardroom table? Our{" "}
                <Link href="/furniture-movers-in-dubai">
                  furniture movers in Dubai
                </Link>{" "}
                handle smaller jobs.
              </p>

              <h3>IT equipment moving: computers, screens and server racks</h3>
              <p>
                Monitors go upright in bubble wrap. Cables are tagged so they go
                back with the right machine, and desktops, printers and
                networking hardware travel as a separate load. At the new
                office, each machine goes to the desk your floor plan shows.
              </p>
              <p>
                Leave shutdown, data backups and network reconnection with your
                IT team or provider. Our crew handles the hardware. For a server
                rack, we agree with your IT contact how it comes apart and goes
                back together before anyone touches it.
              </p>

              <h3>
                Office movers and packers: labelling by department and desk
              </h3>
              <p>
                We bring the cartons and packing materials. Staff can pack their
                own drawers into a carton marked with their desk number, while
                our packers handle shared areas, the pantry, the storeroom and
                anything fragile. On the other side, cartons go straight to the
                right desk instead of piling up in reception.
              </p>

              <figure>
                <div className="img-wide">
                  <Image
                    src="/packing-and-moving-services.jpg"
                    alt="Office movers and packers in Dubai labelling cartons by desk"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                  />
                </div>
              </figure>

              <h3>Files and confidential documents</h3>
              <p>
                Files go into sealed cartons, labelled by department, and stay
                together as one load. We unload them first, into a room you
                choose. If you&apos;re a law firm, clinic or finance office,
                it&apos;s worth having one of your own people present while the
                file cartons are packed and opened.
              </p>

              <h3>Commercial movers for shops and showrooms</h3>
              <p>
                Shop shifting in Dubai works the same way, just with display
                units, racks and stock instead of desks. We move after closing
                time so you lose as little trading as possible. Malls usually
                set their own hours and rules for deliveries and fit-out work,
                so check those with mall management first.
              </p>

              <ServiceCTAButton href={WHATSAPP_SITE_VISIT}>
                Book a free office site visit
              </ServiceCTAButton>

              {/* ── Office relocation in Dubai without losing working days ── */}
              <h2>Office relocation in Dubai without losing working days</h2>
              <p>
                The first thing most office managers ask is how long the
                business will be down. Most of the answer comes down to timing.
              </p>

              <h3>Overnight office moves</h3>
              <p>
                We pack in the evening, move overnight, and set up before your
                staff arrive. This suits small offices and single-floor moves.
                Our 24/7 team can start as late as your building allows.
              </p>

              <h3>Weekend office moves</h3>
              <p>
                Start on Friday afternoon and finish by Sunday. Your IT team
                then has Sunday afternoon to test the network and phones before
                Monday.
              </p>

              <h3>Phased moves for larger offices</h3>
              <p>
                For a larger corporate relocation in Dubai, moving everything in
                one go can be too much for one building&apos;s service lift. We
                move one department or one floor at a time, over several nights
                or weekends, while the rest of the office keeps working.
              </p>

              <h3>Truck rules for office towers after October 2026</h3>
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
                restricted on Sheikh Zayed Road and Beirut Street from 6 am to
                10 pm every day. Many of Dubai&apos;s office towers sit on or
                just off Sheikh Zayed Road. Whether the rule affects your move
                depends on the truck and the exact route. We check both
                addresses when we plan, and if it does apply, the move runs at
                night.
              </p>

              {/* ── Office moving costs in Dubai ── */}
              <h2 id="office-moving-costs-in-dubai" className="scroll-mt-28">
                Office moving costs in Dubai
              </h2>
              <p>
                Office moves are priced after a free site visit rather than by
                square foot. The same 2,000 sq ft can hold 15 workstations or
                40, and that changes the crew, the trucks and the hours.
              </p>

              <h3>What changes the price of an office move</h3>
              <ul>
                <li>
                  <span>
                    How many workstations there are, and how much needs taking
                    apart
                  </span>
                </li>
                <li>
                  <span>
                    How much IT equipment you have, and whether there&apos;s a
                    server rack
                  </span>
                </li>
                <li>
                  <span>Files and archive boxes</span>
                </li>
                <li>
                  <span>
                    Floors, service lift size and the walk from the loading bay,
                    at both buildings
                  </span>
                </li>
                <li>
                  <span>Overnight or weekend timing</span>
                </li>
                <li>
                  <span>
                    Distance between offices, or a move to another emirate
                  </span>
                </li>
                <li>
                  <span>Whether the move happens in one go or in phases</span>
                </li>
              </ul>

              <h3>What every office moving quote includes</h3>
              <p>
                Each quote covers the crew, the truck, packing materials,
                dismantling and refitting, labelling and transport. It&apos;s
                written and all-inclusive, with no hidden fees. Any NOC fees or
                deposits your building charges are paid directly to building
                management.
              </p>

              <ServiceCTAButton href={WHATSAPP_SITE_VISIT}>
                Get a free written quote
              </ServiceCTAButton>

              {/* ── Building rules, free zones and business districts ── */}
              <h2
                id="building-rules-free-zones-and-business-districts"
                className="scroll-mt-28"
              >
                Building rules, free zones and business districts
              </h2>
              <p>
                Most commercial buildings in Dubai want notice before a move.
                Facilities management usually asks for:
              </p>
              <ul>
                <li>
                  <span>A move permit or NOC from the building</span>
                </li>
                <li>
                  <span>
                    The moving company&apos;s details and trade licence
                  </span>
                </li>
                <li>
                  <span>An insurance certificate, in some buildings</span>
                </li>
                <li>
                  <span>A booked service-lift slot and loading bay time</span>
                </li>
                <li>
                  <span>The hours when moving is allowed</span>
                </li>
              </ul>
              <p>
                You&apos;ll need these at both the old and the new building. Ask
                us for the company documents your building wants and we&apos;ll
                send them for your application.
              </p>

              <h3>Free zones and business parks</h3>
              <p>
                Offices in free zones answer to that free zone&apos;s authority
                as well as the building. That includes DMCC in JLT, DIFC, the
                TECOM business parks like Dubai Internet City and Dubai Media
                City, and Dubai Silicon Oasis. Some control which vehicles can
                enter and when. Your landlord or facilities team can confirm the
                process, and we plan the date around it.
              </p>

              <h3>Business districts we move offices in</h3>
              <ul>
                <li>
                  <span>
                    Business Bay has mostly tower offices with booked service
                    lifts. Some buildings mix offices and apartments, which can
                    narrow the hours you&apos;re allowed to move.
                  </span>
                </li>
                <li>
                  <span>
                    In JLT, the tower management usually books the service lift
                    and loading bay, and DMCC free zone rules apply on top. See
                    movers in JLT for the area.
                  </span>
                </li>
                <li>
                  <span>
                    DIFC buildings have their own property teams, so expect to
                    book a time and send contractor details in advance.
                  </span>
                </li>
                <li>
                  <span>
                    Offices on Sheikh Zayed Road face the daytime truck
                    restriction, so night moves are usually the practical
                    choice.
                  </span>
                </li>
                <li>
                  <span>
                    In Dubai Internet City and Dubai Media City, each
                    building&apos;s facilities team sets the lift and loading
                    times, with TECOM free zone rules alongside.
                  </span>
                </li>
                <li>
                  <span>
                    Al Quoz has low-rise offices, showrooms and warehouses.
                    Truck access is easier, but routes on and off Sheikh Zayed
                    Road still need planning.
                  </span>
                </li>
                <li>
                  <span>
                    Dubai Silicon Oasis mixes offices and homes under its own
                    authority. See
                    movers in Dubai Silicon Oasis.
                  </span>
                </li>
              </ul>

              {/* ── How office moving in Dubai works with Al Afnan ── */}
              <h2>How office moving in Dubai works with Al Afnan</h2>
              <ol>
                <li>
                  <div>
                    <strong>Site visit.</strong> We look at both offices, the
                    furniture, the IT and how the crew gets in and out of each
                    building.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Written quote.</strong> It lists the crew, the
                    timing, what we dismantle and refit, and how we handle IT
                    and files.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Approvals and timing.</strong> You apply to both
                    buildings, we send our company documents, and we fix the
                    move window around the building hours and the truck rules.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Packing.</strong> Staff pack their desks. We pack
                    shared areas, IT equipment, files and anything fragile, and
                    label everything to your new floor plan.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Moving.</strong> Furniture comes apart, the trucks
                    are loaded, and everything is unloaded to the right desk and
                    room at the new office.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Setup and walk-through.</strong> Workstations are
                    rebuilt to the floor plan, and you walk the floor with the
                    crew before they leave.
                  </div>
                </li>
              </ol>

              <h3>What we need from you before moving night</h3>
              <ul>
                <li>
                  <span>A floor plan of the new office with desk numbers</span>
                </li>
                <li>
                  <span>
                    One contact from your IT team or provider, and one from
                    facilities
                  </span>
                </li>
                <li>
                  <span>
                    Approvals from both buildings, with the time slot each one
                    gives
                  </span>
                </li>
                <li>
                  <span>
                    Staff drawers emptied into the cartons we provide, marked
                    with desk numbers
                  </span>
                </li>
                <li>
                  <span>
                    Access cards, keys and parking details for both buildings
                  </span>
                </li>
                <li>
                  <span>
                    Backups done and systems shut down before the crew starts on
                    IT
                  </span>
                </li>
              </ul>

              {/* ── Why businesses choose Al Afnan as their office moving company ── */}
              <h2>
                Why businesses choose Al Afnan as their office moving company
              </h2>
              <p>
                Our carpenters are on our own team, so your workstations are
                taken apart and rebuilt by people trained for it rather than
                general loaders. The Dubai team works 24/7 and takes same-day
                and emergency moves, which helps when a lease end or handover
                date moves at short notice. Our crews speak Arabic, English,
                Urdu and Hindi, so they can deal with building security,
                facilities management and your staff directly.
              </p>
              <p>
                We&apos;ve been moving homes and businesses across the UAE for
                10 years. We&apos;re licensed and insured, which many buildings
                ask about before they approve a move, and our customers rate us
                4.9 out of 5 on Google.
              </p>

              {/* TODO: add 2–3 real Google reviews from office moves here. */}

              <h3>What to ask before you hire office movers in Dubai</h3>
              <p>
                The best office movers in Dubai for your business are the ones
                that can give clear answers to these:
              </p>
              <ul>
                <li>
                  <span>Will they visit both offices before they quote?</span>
                </li>
                <li>
                  <span>
                    Does the written quote list dismantling, IT handling and
                    setup?
                  </span>
                </li>
                <li>
                  <span>Can they work overnight or over a weekend?</span>
                </li>
                <li>
                  <span>
                    Can they send the trade licence and insurance documents your
                    building asks for?
                  </span>
                </li>
                <li>
                  <span>Who will be your contact on moving night?</span>
                </li>
              </ul>

              {/* ── Moving your office to Sharjah or another emirate ── */}
              <h2>Moving your office to Sharjah or another emirate</h2>
              <p>
                We&apos;re based in Al Majaz, Sharjah, and our Dubai office
                movers handle moves between Dubai and every emirate, including{" "}
                <Link href="/">Sharjah</Link>,{" "}
                <Link href="/movers-in-ajman">Ajman</Link>, Abu Dhabi and{" "}
                <Link href="/movers-in-ras-al-khaimah">Ras Al Khaimah</Link>.
                Trucks can&apos;t use Sheikh Mohammed bin Zayed Road between Ras
                Al Khor Road and the Sharjah border from 6:30 to 8:30 am, so we
                plan Dubai–Sharjah departures around it. For home moves across
                the city, see our{" "}
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
                ctaTitle="Planning an Office Move?"
                ctaDesc="Send your floor plan on WhatsApp or book a free site visit. Our Dubai team works 24/7, including overnight and weekend office moves."
                dubaiAreas={dubaiAreasList}
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ SECTION (also outputs the FAQPage schema)
        ════════════════════════════════════════════ */}
        <FAQSection
          title="Office movers in Dubai: FAQs"
          subtitle=""
          faqs={officeFaqs}
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Plan your office move"
          paragraph="Send your floor plan and a few photos on WhatsApp, or call 056 7277536 to book a free site visit. Our Dubai team answers 24 hours a day."
          whatsappButtonText="WhatsApp us"
          whatsappButtonHref={WHATSAPP_FLOOR_PLAN}
          callButtonText="Call 056 7277536"
        />
    </SiteShell>
  );
}

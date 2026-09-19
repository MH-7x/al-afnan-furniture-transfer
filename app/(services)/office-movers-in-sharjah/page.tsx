import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  ChevronDown,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { ServiceSidebar } from "@/components/ServiceSidebar";
import { Metadata } from "next";
import { Footer } from "@/components/footer";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { FAQSection } from "@/components/FaqsSection";

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE METADATA & SEO DATA
   ───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Office Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "Office movers in Sharjah with 10 years' experience, licensed across all 7 emirates. Free estimates, careful IT handling. Call 056 7277536.",
};

const officeFaqs = [
  {
    question: "How much do office movers in Sharjah charge?",
    answer:
      "Office moves in Sharjah generally cost between AED 800 and AED 7,000+, depending on office size and whether IT equipment needs specialized handling. A small office with up to 10 desks tends to fall in the AED 800–2,499 range, while a large corporate floor with 30+ workstations can run AED 7,999–15,000 or more. The exact number depends on your specific setup — request a free estimate for an accurate figure.",
  },
  {
    question: "What's included in office moving services?",
    answer:
      "Our office moving service covers furniture disassembly, packing and protection of furniture and equipment, loading, transport, unloading, and reassembly at the new location. IT equipment like servers and networking hardware is packed and handled separately from general furniture.",
  },
  {
    question: "Can you pack and move office furniture?",
    answer:
      "Yes. We disassemble larger pieces like desks and cabinets where needed, wrap and pack them appropriately, and reassemble everything at the destination.",
  },
  {
    question: "Do you provide office shifting within Sharjah?",
    answer:
      "Yes, local moves within Sharjah — between any of the areas we serve — make up most of the office relocations we handle.",
  },
  {
    question: "Can you move an office from Sharjah to Dubai?",
    answer:
      "Yes. We're licensed and insured across all seven UAE emirates, so a Sharjah-to-Dubai office move (or to Ajman, Abu Dhabi, or elsewhere) is covered under the same process as a local move, with pricing adjusted for distance and logistics.",
  },
  {
    question: "How early should I book an office moving service?",
    answer:
      "The earlier the better, especially for larger offices or moves tied to a lease deadline. We do accommodate same-day and emergency moves when notice is short, but booking ahead gives more flexibility on scheduling around your business hours.",
  },
  {
    question: "Do you provide an estimate before the office move?",
    answer:
      "Yes — every office move starts with a free estimate. For larger offices, this may involve a quick site visit so the quote reflects the actual scope of the job rather than a rough guess.",
  },
];

const sharjahAreasList = [
  "Al Nahda",
  "Al Majaz",
  "Al Taawun",
  "Al Khan",
  "Muwaileh",
  "Al Qasimia",
  "Al Qarayen",
  "Muwafjah",
  "Sharjah Industrial Area",
];

const footerSearches = [
  "office movers in Sharjah",
  "office movers in Dubai",
  "commercial movers Sharjah",
  "corporate relocation Sharjah",
  "office shifting services Sharjah",
  "IT equipment movers Sharjah",
  "Sharjah to Dubai office movers",
  "business movers Sharjah",
  "furniture movers Sharjah",
  "commercial movers and packers Sharjah",
];

export default function OfficeMoversPage() {
  const faqSchema = generateFAQSchema(officeFaqs);

  return (
    <>
      {/* FAQ Schema for Google Rich Results */}
      <script
        id="office-movers-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      <main>
        {/* ════════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════════ */}
        <section className="w-full px-0">
          <div className="relative overflow-hidden py-14 sm:py-20">
            {/* Background gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-muted/70 via-muted/25 to-background"
              aria-hidden="true"
            />
            {/* Decorative blobs */}
            <div
              className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-primary/7 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-1/4 size-64 rounded-full bg-primary/8 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-20 max-w-6xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground font-medium"
              >
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <ArrowRight className="size-3 text-muted-foreground/40 shrink-0" />
                <span className="text-muted-foreground">Services</span>
                <ArrowRight className="size-3 text-muted-foreground/40 shrink-0" />
                <span className="text-primary font-semibold">
                  Office Movers in Sharjah
                </span>
              </nav>

              {/* H1 Heading */}
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Office Movers in Sharjah{" "}
              </h1>

              {/* Intro Content */}
              <div className="mt-5 space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Al Afnan Furniture Transfer handles office moves across
                  Sharjah — from a single-room startup to a full corporate
                  floor. We&apos;re licensed and insured to operate across all
                  seven UAE emirates, with 10 years in the moving business, and
                  every quote starts with a free estimate so you know the cost
                  before you commit to a date.
                </p>
                <p>
                  If your business needs an office movers in Sharjah team that
                  understands both furniture and functioning IT equipment, this
                  is what we do and how we do it.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="default"
                  size="lg"
                  render={<Link href="#estimate" />}
                  className="py-6 px-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Get a Free Office Moving Estimate</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  render={<a href="tel:0567277536" />}
                  className="py-6 px-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Call 056 7277536</span>
                  <Phone className="size-4 ml-1.5" />
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-7 pt-6 border-t border-border/50 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-primary shrink-0" />
                  10 Years Experience
                </span>
                <span className="flex items-center gap-1.5">
                  <Server className="size-3.5 text-primary shrink-0" />
                  Careful IT &amp; Server Handling
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-primary shrink-0" />
                  24/7 &amp; Weekend Moves
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary shrink-0" />
                  Licensed Across All 7 Emirates
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="size-3.5 text-primary shrink-0" />
                  Zero Hidden Fees
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CONTENT + SIDEBAR
        ════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-16 items-start">
            {/* ── Left: Service Content ── */}
            <article className="min-w-0 service-content">
              {/* 16:9 main image */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/commercial-office-movers.jpg"
                    alt="Office movers in Sharjah professionally handling commercial relocation, desks, and office equipment — Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
                <figcaption>
                  Professional office movers in Sharjah — Al Afnan Furniture
                  Transfer
                </figcaption>
              </figure>

              {/* ── Our Office Moving Services in Sharjah ── */}
              <h2>Our Office Moving Services in Sharjah</h2>
              <p>
                An office move isn&apos;t one task. It&apos;s several smaller
                ones happening in sequence, usually against a deadline you
                didn&apos;t choose.
              </p>

              <h3>Office Furniture Moving</h3>
              <p>
                Desks, chairs, filing cabinets, meeting tables, reception
                furniture — office furniture is often bulkier and heavier than
                home furniture, and a lot of it is modular, built to be taken
                apart and reassembled rather than carried as one piece. Our team
                handles the disassembly, the move itself, and the reassembly at
                the new site.
              </p>

              <h3>Office Packing and Protection</h3>
              <p>
                Not everything in an office can be wrapped the same way. Loose
                paperwork, monitors, and glass partitions need different
                protection than a wooden desk. We use bubble wrap, stretch film,
                and purpose-built boxes for smaller items, and we pack IT
                equipment separately from general furniture so nothing gets
                crushed under something heavier.
              </p>

              <h3>Office Loading and Transportation</h3>
              <p>
                Once everything is packed, it has to get onto the truck in an
                order that makes sense — fragile and IT items loaded last so
                they come off first, heavier furniture secured so it
                doesn&apos;t shift in transit. This part of the job matters more
                than people expect; a badly loaded truck is where most damage
                happens, not on the road.
              </p>

              <h3>Office Unloading and Placement</h3>
              <p>
                At the new office, we unload in reverse: furniture goes into
                position first, then boxes and equipment follow. Where it&apos;s
                part of the agreed scope, we&apos;ll reassemble desks and
                cabinets on-site rather than leaving that for your staff to
                figure out on their first day back.
              </p>

              <h3>Small and Large Office Relocation</h3>
              <p>
                A two-person consultancy and a 40-desk corporate floor need the
                same care but different resources. We scale the crew size, the
                truck, and the schedule to the office, so a small business
                isn&apos;t paying for capacity it doesn&apos;t need and a large
                one isn&apos;t under-resourced on moving day.
              </p>

              <h3>Office Shifting Within Sharjah</h3>
              <p>
                Most of our office moves are local — a business relocating from
                one Sharjah building or neighborhood to another. Local moves
                within Sharjah are generally more straightforward to schedule
                and price, since travel time and route planning are simpler.
              </p>

              <h3>Office Moves From Sharjah to Other Emirates</h3>
              <p>
                Some businesses relocate across emirate lines — Sharjah to
                Dubai, Sharjah to Ajman, and further afield. We cover this too.
                It&apos;s a longer job with more moving parts, so it&apos;s
                worth reading further down for how inter-emirate pricing differs
                from a local move.
              </p>

              {/* Two-column 4:3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/furniture-moving-transfer.jpg"
                      alt="Office furniture dismantling and packing in Sharjah"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>
                    Modular desk disassembly and preparation
                  </figcaption>
                </figure>
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/packing-and-moving-services.jpg"
                      alt="Office packing and IT protection in Sharjah"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>
                    Protective wrapping for IT equipment and files
                  </figcaption>
                </figure>
              </div>

              {/* ── Why Choose Al Afnan for Office Moving in Sharjah? ── */}
              <h2>Why Choose Al Afnan for Office Moving in Sharjah?</h2>
              <p>
                A business owner comparing movers usually isn&apos;t asking
                &ldquo;who&apos;s cheapest&rdquo; first. They&apos;re asking
                &ldquo;who&apos;s not going to cost me a day of downtime.&rdquo;
              </p>

              <ul>
                <li>
                  <div>
                    <strong>Experienced moving team.</strong> Ten years of
                    moving households and offices across Sharjah means
                    we&apos;ve seen most of what can go wrong on a moving day,
                    and planned around it before it happens.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>
                      Careful handling of office furniture and equipment.
                    </strong>{" "}
                    Modular desks, glass tables, and electronics get handled
                    differently than a sofa. Our crew is trained on the
                    difference.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Organized moving and loading.</strong> A move plan
                    is written before the truck arrives, not improvised on-site.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Protective packing options.</strong> Bubble wrap,
                    stretch film, and dedicated boxes for anything that
                    shouldn&apos;t be treated like the rest of the load.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Reliable transportation.</strong> We operate across
                    all seven UAE emirates under proper licensing and insurance,
                    so your equipment is covered in transit, not just while it
                    sits in your old office.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Flexible moving schedules.</strong> Office moves
                    often happen outside business hours to avoid disrupting
                    operations. We offer 24/7 availability, including same-day
                    and emergency moves when a lease deadline doesn&apos;t leave
                    much notice.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Clear moving estimates.</strong> You get a free
                    estimate up front, with no hidden add-ons appearing on the
                    invoice afterward.
                  </div>
                </li>
              </ul>

              <div className="callout">
                We&apos;re also a multilingual team — Arabic, English, and
                Urdu/Hindi — which matters more than it sounds like it should
                when you&apos;re coordinating a move with an office manager, a
                landlord, and a building&apos;s facilities team who may not all
                speak the same first language.
              </div>

              {/* ── Our Office Moving Process ── */}
              <h2>Our Office Moving Process</h2>
              <p>
                Here&apos;s roughly how an office move with us goes, from first
                contact to the last box unloaded.
              </p>
              <ol>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Discuss your office move.
                    </h3>
                    <p>
                      We talk through the size of your space, what needs to
                      move, any IT or specialized equipment, and your timeline.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Get an office moving estimate.
                    </h3>
                    <p>
                      Based on that conversation — and a site visit for larger
                      offices — we give you a free, itemized estimate.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Plan your moving date.
                    </h3>
                    <p>
                      Many businesses want this done after hours or over a
                      weekend. We work around your operating schedule, not the
                      other way around.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Prepare and pack office items.
                    </h3>
                    <p>
                      Furniture is disassembled where needed, and everything is
                      wrapped and boxed according to what it is.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Load and secure your belongings.
                    </h3>
                    <p>
                      The truck is loaded in the order that protects fragile and
                      sensitive items and keeps everything stable in transit.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Transport to the new location.
                    </h3>
                    <p>
                      Local Sharjah moves and inter-emirate moves are both
                      covered under our licensing across the UAE.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base! font-medium!">
                      Unload and position office furniture.
                    </h3>
                    <p>
                      Furniture goes where you want it, and reassembly happens
                      on-site so your team can get back to work with minimal
                      disruption.
                    </p>
                  </div>
                </li>
              </ol>

              {/* ── Office Moving Prices in Sharjah ── */}
              <h2>Office Moving Prices in Sharjah</h2>
              <p>
                This is usually the first thing a business owner wants to know,
                and it&apos;s a fair question — office moving costs vary more
                than most people expect, because &ldquo;office&rdquo; can mean
                anywhere from a single room to a corporate floor with a server
                rack.
              </p>
              <p>
                As a general guide, office moving prices in Sharjah run from
                around AED 800 to AED 7,000+, depending mainly on office size,
                the number of workstations, and whether IT equipment is
                involved.
              </p>
              <p>Estimated price ranges by office size:</p>

              {/* Pricing Table */}
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Office Size</th>
                      <th scope="col">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Small office (1–3 staff / up to 10 desks)
                      </td>
                      <td>
                        <span className="price-badge">AED 800 – AED 2,499</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Medium office (4–5 staff or 10–30 workstations)
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 1,500 – AED 4,999
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Large office / corporate (30+ workstations)
                      </td>
                      <td>
                        <span className="price-badge">
                          AED 7,999 – AED 15,000+
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>What Affects the Cost?</h3>
              <ul>
                <li>
                  <div>
                    <strong>IT and server relocation.</strong> Servers and
                    networking equipment need anti-static wrapping and careful
                    reconnection at the new site — this takes more time and care
                    than moving a desk, and it shows up in the price.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Timing.</strong> Moving after hours, overnight, or
                    on weekends to avoid business downtime is common for
                    offices, but it typically adds a 15–20% premium over a
                    daytime weekday move.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Logistics.</strong> Building permits, elevator
                    access rules, and the disassembly and reassembly of modular
                    furniture all affect how long the job takes — and time is a
                    big part of what you&apos;re paying for.
                  </div>
                </li>
              </ul>

              <p>
                These figures are a starting point, not a quote. Two
                &ldquo;medium offices&rdquo; can cost quite differently
                depending on how much of that 10–30 workstation range they sit
                at and how much IT equipment is involved.
              </p>

              <h3>Get an Office Moving Quote</h3>
              <p>
                To get an estimate that actually reflects your move, it helps to
                have a few answers ready:
              </p>
              <ul>
                <li>
                  <div>How many workstations or staff members are moving?</div>
                </li>
                <li>
                  <div>
                    Is there server hardware or other equipment that needs
                    specialized handling?
                  </div>
                </li>
                <li>
                  <div>Is the move within Sharjah, or to another emirate?</div>
                </li>
              </ul>

              <p>
                Call{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>{" "}
                with those details, or request a free estimate and we&apos;ll
                follow up with what it actually looks like for your office.
              </p>

              {/* ── Office Relocation for Different Businesses ── */}
              <h2>Office Relocation for Different Businesses</h2>
              <p>
                Office moving isn&apos;t one-size-fits-all, and the keyword a
                business searches often reflects what kind of operation
                they&apos;re running.
              </p>

              <h3>Corporate Office Relocation</h3>
              <p>
                Larger corporate relocations usually mean more workstations,
                more coordination with building management, and often a stricter
                deadline tied to a lease. Ten years of moving experience across
                Sharjah has taught us to plan these in phases rather than treat
                them as one giant task.
              </p>

              <h3>Small Business Office Moving</h3>
              <p>
                A smaller office move is lower-risk in some ways — fewer desks,
                less IT — but it&apos;s often still squeezed into a weekend or a
                single evening because the business can&apos;t afford to close
                for a day.
              </p>

              <h3>Commercial Office Shifting</h3>
              <p>
                Whether it&apos;s a professional services office, a clinic
                reception area, or a small agency, the core job is the same:
                furniture, files, and equipment moved without damage or missing
                items.
              </p>

              {/* ── Areas We Serve for Office Moving in Sharjah ── */}
              <h2>Areas We Serve for Office Moving in Sharjah</h2>
              <p>
                We move offices across Sharjah, including Al Nahda, Al Majaz, Al
                Taawun, Al Khan, Muwaileh, Al Qasimia, Al Qarayen, Muwafjah, and
                Sharjah Industrial Area. If your office is somewhere else in the
                city, call us — coverage isn&apos;t limited to this list.
              </p>

              {/* Neighborhood Badges */}
              <div className="flex flex-wrap gap-2 my-5 not-prose">
                {sharjahAreasList.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground/80 shadow-2xs"
                  >
                    <span
                      className="size-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {area}
                  </span>
                ))}
              </div>

              {/* ── Office Moving From Sharjah to Other Emirates ── */}
              <h2>Office Moving From Sharjah to Other Emirates</h2>
              <p>
                Not every relocation stays inside Sharjah. Businesses expand,
                downsize, or simply find better rent elsewhere in the UAE, and
                that often means an inter-emirate move — Sharjah to Dubai being
                the most common route we see, along with moves to Ajman and Abu
                Dhabi.
              </p>
              <p>
                Inter-emirate office moves involve more than an extra hour of
                driving. There&apos;s more to plan around: cross-emirate traffic
                timing, longer loading and unloading windows, and coordinating
                access at two separate buildings rather than one. Because
                we&apos;re licensed across all seven UAE emirates, this is
                covered under the same insurance and process as a local Sharjah
                move — it just takes more planning and generally costs more than
                staying within the city.
              </p>
              <p>
                If you&apos;re relocating your office out of Sharjah, mention
                the destination emirate when you request your estimate so the
                quote reflects the actual distance and logistics involved.
              </p>

              {/* ── Get a Free Office Moving Estimate ── */}
              <h2>Get a Free Office Moving Estimate</h2>
              <p>
                Tell us the size of your office and your target moving date, and
                we&apos;ll get back to you with a clear estimate — no hidden
                charges added later. Call{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>
                , available 24/7, for a free office moving quote in Sharjah.
              </p>
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                ctaTitle="Planning an Office Move?"
                ctaDesc="Call us 24/7 for a free, itemized estimate. We handle weekend and overnight office moves to minimize business downtime."
                sharjahAreas={sharjahAreasList}
              />
            </div>
          </div>
        </section>

        <FAQSection
          faqs={officeFaqs}
          title="Questions About Office Movers in Sharjah"
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Get a Free Office Moving Estimate in Sharjah"
          paragraph="Tell us the size of your office and your target moving date, and we'll get back to you with a clear estimate — no hidden charges added later. Call 056 7277536, available 24/7, for a free office moving quote in Sharjah."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

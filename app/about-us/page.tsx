import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Armchair,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Briefcase,
  Building2,
  CalendarCheck,
  Castle,
  Clock,
  FileBadge,
  Hammer,
  House,
  Languages,
  MapPin,
  PackageCheck,
  PackageOpen,
  Phone,
  Receipt,
  Route,
  ShieldCheck,
  Sofa,
  Star,
  Truck,
  Users,
  Wallet,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FaqsSection";
import { SiteShell } from "@/components/SiteShell";
import { whatsappLink } from "@/lib/whatsapp";

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE DATA — SEO metadata & content
   ───────────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Al Afnan Furniture Transfer | Sharjah Movers",
  description:
    "Al Afnan Furniture Transfer is a licensed Sharjah moving company in Al Majaz since 2015, with a 20+ trained team and a 4.9/5 Google rating.",
};

const credentials: {
  icon: LucideIcon;
  before?: string;
  accent: string;
  after?: string;
}[] = [
  { icon: CalendarCheck, before: "Moving in Sharjah since ", accent: "2015" },
  { icon: Star, accent: "4.9/5", after: " Google customer rating" },
  { icon: Users, accent: "20+", after: " trained team members" },
  {
    icon: BadgeCheck,
    before: "Licensed by the ",
    accent: "Sharjah Economic Development Department",
  },
  {
    icon: ShieldCheck,
    before: "Insured, operating across all ",
    accent: "7 emirates",
  },
  {
    icon: Languages,
    before: "Service in ",
    accent: "Arabic, English, Urdu and Hindi",
  },
];

const teamRoles: { icon: LucideIcon; role: string; text: string }[] = [
  {
    icon: Boxes,
    role: "Movers and packers",
    text: "wrap, box, carry and load your belongings.",
  },
  {
    icon: Hammer,
    role: "Carpenters and handymen",
    text: "dismantle and reassemble wardrobes, beds, dining tables and office workstations.",
  },
  {
    icon: Truck,
    role: "Drivers",
    text: "handle local routes within Sharjah and longer inter-emirate journeys.",
  },
];

const trainingSteps: { lead: string; text: string }[] = [
  {
    lead: "Wrapping:",
    text: "using padding, stretch film and bubble wrap so that items don't scrape, crack or shift in the truck.",
  },
  {
    lead: "Dismantling:",
    text: "taking furniture apart in the right order and keeping fittings together, so every piece can be reassembled properly.",
  },
  {
    lead: "Lifting:",
    text: "using safe carrying techniques and enough people for each piece, especially on stairs, in narrow corridors and in service lifts.",
  },
];

const expectations: { icon: LucideIcon; lead: string; text: string }[] = [
  {
    icon: Receipt,
    lead: "A clear price before anything is loaded.",
    text: "Estimates are free and based on your actual move. The quote covers labour, packing materials, transport and reassembly, and no fees are added on the day.",
  },
  {
    icon: PackageCheck,
    lead: "Packing materials included.",
    text: "We bring bubble wrap, stretch film and hanger boxes, so clothes travel on their hangers instead of being folded into cartons.",
  },
  {
    icon: Truck,
    lead: "The right truck for the job.",
    text: "We choose the truck size based on how much you're moving, the access at both properties and the distance.",
  },
  {
    icon: Armchair,
    lead: "Furniture put back together.",
    text: "Anything we dismantle is reassembled and placed in the right room before the crew leaves.",
  },
  {
    icon: ShieldCheck,
    lead: "Damage repaired or replaced.",
    text: "Your goods are insured in transit and during handling. If something is damaged during your move, we repair it or replace it.",
  },
  {
    icon: Wallet,
    lead: "Flexible payment.",
    text: "Pay by cash, card, bank transfer or contactless mobile payment.",
  },
  {
    icon: Clock,
    lead: "Hours that fit your schedule.",
    text: "We're open 24 hours from Sunday to Friday, and from 9 AM to 5 PM on Saturday. Same-day and emergency moves can also be arranged. Call us to check availability.",
  },
];

const services: {
  icon: LucideIcon;
  name: string;
  href?: string;
  description: string;
}[] = [
  {
    icon: House,
    name: "House Movers in Sharjah",
    href: "/house-movers-in-sharjah",
    description: "full household moves, from packing to reassembly",
  },
  {
    icon: Building2,
    name: "Apartment Movers in Sharjah",
    href: "/apartment-movers-in-sharjah",
    description: "flat moves planned around lifts, corridors and building rules",
  },
  {
    icon: Castle,
    name: "Villa Movers in Sharjah",
    href: "/villa-movers-in-sharjah",
    description: "larger homes with heavier furniture and outdoor items",
  },
  {
    icon: Briefcase,
    name: "Office Movers in Sharjah",
    href: "/office-movers-in-sharjah",
    description:
      "workstations, equipment and documents moved in an organised way",
  },
  {
    icon: Sofa,
    name: "Furniture Transfer in Sharjah",
    href: "/furniture-transfer-in-sharjah",
    description: "single items or a few pieces, without booking a full move",
  },
  {
    icon: PackageOpen,
    name: "Packing Services in Sharjah",
    href: "/packing-services-in-sharjah",
    description: "packing on its own or as part of your move",
  },
  {
    icon: Warehouse,
    name: "Storage",
    description:
      "short-term or long-term storage arranged through a partner facility",
  },
];

const sharjahAreas = [
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

const otherEmirates = [
  "Dubai",
  "Abu Dhabi",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];

const aboutFaqs = [
  {
    question: "Is Al Afnan Furniture Transfer a licensed moving company?",
    answer:
      "Yes. Al Afnan Furniture Transfer holds a trade licence issued by the Sharjah Economic Development Department, and we operate across all seven UAE emirates. We don't publish the licence number online, but you can ask to see it before you book.",
  },
  {
    question: "Can I check your trade licence before booking?",
    answer:
      "Yes. Ask our team by phone or WhatsApp on 056 7277536 and we'll share it with you. Checking a mover's licence before your belongings leave the house is a sensible step.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Our insurance covers your goods while they are in transit and damage that happens during handling, on moves across all seven emirates.",
  },
  {
    question: "What happens if something is damaged during my move?",
    answer:
      "We repair it or replace it. Report the damage to our team by phone or WhatsApp on 056 7277536, and we'll arrange the repair or a replacement.",
  },
  {
    question: "How big is your team?",
    answer:
      "We have more than 20 people, including movers, packers, carpenters, handymen and drivers. The crew for your move is sized to the job, so a single-item transfer and a full villa move get different teams.",
  },
  {
    question: "How are your movers trained?",
    answer:
      "New team members work alongside senior movers before they handle jobs on their own. They are also trained in wrapping, dismantling and lifting, the three skills that matter most for keeping furniture undamaged.",
  },
  {
    question: "Where is your office?",
    answer:
      "Our office is on Jamal Abdul Naser St, near Al Majaz 2, in Al Majaz, Sharjah. You're welcome to visit or call 056 7277536 first.",
  },
  {
    question: "Can you arrange storage between moves?",
    answer:
      "Yes. If your move-out and move-in dates don't line up, we arrange storage through a partner facility, short term or long term. Share your dates when you request an estimate.",
  },
  {
    question: "Which languages does your team speak?",
    answer:
      "Arabic, English, Urdu and Hindi. You can talk to us in any of these, from the first call to unloading.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We're open 24 hours from Sunday to Friday, and from 9 AM to 5 PM on Saturday. Same-day and emergency moves can be arranged, so call to check availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, card, bank transfer and contactless mobile payments. Let our team know your preferred method when you book.",
  },
  {
    question: "How long have you been moving people in Sharjah?",
    answer:
      "Since 2015. Al Afnan Furniture Transfer has more than a decade of experience moving homes, apartments, villas, offices and furniture in Sharjah and across the UAE.",
  },
];

const aboutFooterSearches = [
  "al afnan furniture transfer",
  "al afnan movers sharjah",
  "about al afnan furniture transfer",
  "licensed moving company sharjah",
  "licensed movers in sharjah",
  "insured movers in sharjah",
  "movers in al majaz sharjah",
  "furniture transfer company sharjah",
  "trusted movers in sharjah",
  "movers and packers in sharjah uae",
];

/* ─────────────────────────────────────────────────────────────────────────────
   SMALL SHARED PIECES
   ───────────────────────────────────────────────────────────────────────────── */
const sectionWrap = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full";
const h2Class =
  "text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-[1.1] text-foreground";
const enter =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:fill-mode-backwards";
const phoneLink =
  "font-semibold text-primary underline-offset-4 hover:underline";

/** Decorative "ledger" index above each section heading. */
function SectionMark({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <div aria-hidden="true" className="mb-4 flex items-center gap-3">
      <span className="font-mono text-xs font-semibold tracking-[0.25em] text-primary">
        {n}
      </span>
      <span className={`h-px w-12 ${light ? "bg-white/25" : "bg-primary/35"}`} />
    </div>
  );
}

/** Decorative dot grid used to add texture behind photos. */
function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute size-32 opacity-40 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
        backgroundSize: "14px 14px",
      }}
    />
  );
}

export default function AboutUsPage() {
  return (
    <SiteShell searches={aboutFooterSearches}>
        {/* ════════════════════════════════════════════
            HERO + CREDENTIALS
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative w-full overflow-hidden pt-12 pb-4 sm:pt-16"
        >
          <div
            className="absolute inset-0 bg-linear-to-br from-muted/70 via-muted/25 to-background"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-primary/7 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-1/4 size-64 rounded-full bg-primary/8 blur-3xl"
            aria-hidden="true"
          />

          <div className={`relative z-10 ${sectionWrap}`}>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Copy */}
              <div className={`lg:col-span-7 ${enter}`}>
                <nav
                  aria-label="Breadcrumb"
                  className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground"
                >
                  <Link
                    href="/"
                    className="transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                  <ArrowRight
                    className="size-3 shrink-0 text-muted-foreground/40"
                    aria-hidden="true"
                  />
                  <span
                    className="font-semibold text-primary"
                    aria-current="page"
                  >
                    About Us
                  </span>
                </nav>

                <h1
                  id="about-hero-heading"
                  className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
                >
                  About <span className="text-primary">Al Afnan Furniture Transfer</span>
                </h1>

                <div className="mt-6 space-y-4 leading-relaxed">
                  <p className="text-base font-medium text-foreground/85 sm:text-lg">
                    Al Afnan Furniture Transfer is a licensed moving company
                    based in Al Majaz, Sharjah. Since 2015, our team has moved
                    homes, apartments, villas, offices and single pieces of
                    furniture across Sharjah and all seven UAE emirates.
                  </p>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    We are a team of more than 20 movers, packers, carpenters,
                    handymen and drivers, working from our office on Jamal
                    Abdul Naser Street. Our customers rate us 4.9/5 on Google.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Button
                    variant="default"
                    size="lg"
                    render={<Link href="#estimate" />}
                  >
                    <span>Get a Free Estimate</span>
                    <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    render={<a href="tel:0567277536" />}
                  >
                    <span>Call 056 7277536</span>
                    <Phone className="ml-1.5 size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              {/* Photo */}
              <div
                className={`relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none motion-safe:delay-150 ${enter}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-primary/35 sm:translate-x-4 sm:translate-y-4"
                />
                <DotGrid className="-top-6 -left-6" />
                <div className="relative aspect-5/4 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
                  <Image
                    src="/al-afnan-furniture-transfer-sharjah.jpg"
                    alt="Al Afnan Furniture Transfer movers planning a move with customers in Sharjah"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Credentials ledger */}
            <ul
              role="list"
              className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 shadow-xl ring-1 ring-black/10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {credentials.map(({ icon: Icon, before, accent, after }) => (
                <li
                  key={accent}
                  className="flex items-center gap-4 bg-secondary p-5 text-secondary-foreground sm:p-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-snug text-white/70 sm:text-base">
                    {before}
                    <span className="font-semibold text-white">{accent}</span>
                    {after}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            A SHARJAH MOVING COMPANY, BASED IN AL MAJAZ
        ════════════════════════════════════════════ */}
        <section
          id="based-in-al-majaz"
          aria-labelledby="based-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 translate-y-3 rounded-3xl border-2 border-secondary/20 sm:-translate-x-4 sm:translate-y-4"
              />
              <DotGrid className="-right-6 -bottom-6" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl lg:aspect-4/5">
                <Image
                  src="/movers-and-packers-in-sharjah.jpg"
                  alt="Al Afnan movers confirming move details with a customer outside a Sharjah villa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionMark n="01" />
              <h2 id="based-heading" className={h2Class}>
                A Sharjah Moving Company,{" "}
                <span className="text-primary">Based in Al Majaz</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                Most of our moves are inside Sharjah, in areas such as Al
                Nahda, Al Majaz, Al Taawun, Al Khan, Muwaileh, Al Qasimia and
                the Sharjah Industrial Area. Our licence and insurance cover
                all seven emirates, so we also move customers from Sharjah to
                Dubai, Abu Dhabi, Ajman, Umm Al Quwain, Ras Al Khaimah and
                Fujairah, and back again. The crew and the process are the same
                for local and inter-emirate moves.
              </p>
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-l-4 border-border/80 border-l-primary bg-muted/40 p-5 sm:p-6">
                <Route
                  className="mt-1 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Moving in Sharjah follows its own routine. Residential towers
                  need service lifts booked in advance, many buildings limit
                  moving hours, villa communities control truck access, and
                  routes into Dubai need planning around traffic. After more
                  than a decade of local work, our team plans for these things
                  before moving day rather than discovering them at the door.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            WHAT WE STAND FOR
        ════════════════════════════════════════════ */}
        <section
          id="what-we-stand-for"
          aria-labelledby="stand-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -bottom-16 size-56 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1.5 bg-primary"
            />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <SectionMark n="02" light />
                <h2
                  id="stand-heading"
                  className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
                >
                  What We Stand For
                </h2>
              </div>
              <p className="text-xl font-medium leading-[1.4] text-white/90 sm:text-2xl lg:col-span-8 lg:text-[1.9rem]">
                Our aim is to make moving in Sharjah{" "}
                <span className="text-primary">predictable</span>. That means
                you know the price before the truck arrives, a trained crew
                protects your belongings, and you get the same care whether we
                move one wardrobe or a whole villa.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            THE TEAM BEHIND YOUR MOVE
        ════════════════════════════════════════════ */}
        <section
          id="team"
          aria-labelledby="team-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="max-w-3xl">
            <SectionMark n="03" />
            <h2 id="team-heading" className={h2Class}>
              The Team Behind Your Move
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Al Afnan Furniture Transfer has more than 20 people on its team.
              Each crew is put together from the roles a particular move needs:
            </p>
          </div>

          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3"
          >
            {teamRoles.map(({ icon: Icon, role, text }) => (
              <li
                key={role}
                className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-colors hover:border-primary/40 sm:p-7"
              >
                <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <strong className="mb-1 block text-lg font-semibold text-foreground">
                    {role}
                  </strong>{" "}
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-l-4 border-border/80 border-l-primary bg-card p-5 sm:p-6">
            <Users
              className="mt-1 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A studio apartment needs a small crew. A large villa or an office
              relocation needs more people and more than one truck. We set the
              crew size during the estimate, so you know who is coming and how
              much they will handle.
            </p>
          </div>

          {/* How We Train Our Movers */}
          <div className="mt-14 rounded-3xl border border-border/70 bg-muted/40 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  How We Train Our Movers
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  New team members don&apos;t work on jobs alone straight away.
                  They first work alongside senior movers and learn how an
                  experienced crew handles real homes and offices. They are
                  also trained in the three skills that decide whether
                  furniture arrives undamaged:
                </p>
              </div>
              <ol
                role="list"
                className="space-y-4 [counter-reset:step] lg:col-span-7"
              >
                {trainingSteps.map(({ lead, text }) => (
                  <li
                    key={lead}
                    className="flex items-start gap-5 rounded-2xl border border-border/70 bg-card p-5 shadow-xs [counter-increment:step] before:w-11 before:shrink-0 before:font-mono before:text-3xl before:leading-none before:font-bold before:text-primary before:content-[counter(step,decimal-leading-zero)] sm:p-6"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <strong className="font-semibold text-foreground">
                        {lead}
                      </strong>{" "}
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-primary/20 bg-primary/6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <Languages className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  Arabic, English, Urdu and Hindi Support
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Our team speaks Arabic, English, Urdu and Hindi. You can
                  discuss your move, your estimate and any special instructions
                  in the language you&apos;re most comfortable with, from the
                  first call through to unloading.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="grid shrink-0 grid-cols-2 gap-2.5 text-center text-lg font-semibold text-foreground md:w-64"
            >
              <span
                lang="ar"
                dir="rtl"
                className="rounded-xl border border-border/70 bg-card px-4 py-3"
              >
                العربية
              </span>
              <span className="rounded-xl border border-border/70 bg-card px-4 py-3">
                English
              </span>
              <span
                lang="ur"
                dir="rtl"
                className="rounded-xl border border-border/70 bg-card px-4 py-3"
              >
                اردو
              </span>
              <span
                lang="hi"
                className="rounded-xl border border-border/70 bg-card px-4 py-3"
              >
                हिन्दी
              </span>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            WHAT YOU CAN EXPECT ON EVERY MOVE
        ════════════════════════════════════════════ */}
        <section
          id="what-to-expect"
          aria-labelledby="expect-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionMark n="04" />
              <h2 id="expect-heading" className={h2Class}>
                What You Can Expect on Every Move
              </h2>
              <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl lg:aspect-4/5">
                <Image
                  src="/furniture-moving-transfer.jpg"
                  alt="Al Afnan Furniture Transfer crew carrying a wrapped, padded wardrobe through a doorway"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <ul
              role="list"
              className="divide-y divide-border/70 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xs lg:col-span-7"
            >
              {expectations.map(({ icon: Icon, lead, text }) => (
                <li
                  key={lead}
                  className="flex items-start gap-5 p-6 transition-colors hover:bg-primary/3 sm:p-7"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <strong className="mb-1 block text-base font-semibold text-foreground sm:text-lg">
                      {lead}
                    </strong>{" "}
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            OUR TRUCKS, PACKING MATERIALS AND STORAGE
        ════════════════════════════════════════════ */}
        <section
          id="trucks-and-storage"
          aria-labelledby="trucks-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionMark n="05" />
              <h2 id="trucks-heading" className={h2Class}>
                Our Trucks, Packing Materials and Storage
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-5 rounded-2xl border border-border/80 bg-card p-5 shadow-xs sm:p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                    <Truck className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    We run several trucks in different sizes. That means a
                    single sofa doesn&apos;t take up a large truck, and a
                    five-bedroom villa isn&apos;t squeezed into a pickup.
                    Matching the truck to the load keeps your quote fair and
                    avoids unnecessary trips.
                  </p>
                </div>
                <div className="flex items-start gap-5 rounded-2xl border border-border/80 bg-card p-5 shadow-xs sm:p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-xs">
                    <Warehouse className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    If there&apos;s a gap between moving out and moving in, we
                    arrange storage for your furniture and belongings through a
                    partner facility, for a few days or for several months. Give
                    us your dates when you request an estimate, and we&apos;ll
                    include storage in the plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-primary/35 sm:translate-x-4 sm:translate-y-4"
              />
              <DotGrid className="-top-6 -right-6" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl">
                <Image
                  src="/packing-and-moving-services.jpg"
                  alt="Al Afnan movers wrapping furniture with padding, stretch film and bubble wrap"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            LICENSED IN SHARJAH, INSURED ACROSS THE UAE
        ════════════════════════════════════════════ */}
        <section
          id="licence-and-insurance"
          aria-labelledby="licence-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="rounded-3xl border border-border/70 bg-muted/40 p-3 sm:p-4">
            <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-card px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
              <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row">
                <div className="max-w-3xl">
                  <SectionMark n="06" />
                  <h2 id="licence-heading" className={h2Class}>
                    Licensed in Sharjah, Insured Across the UAE
                  </h2>
                </div>
                {/* Seal */}
                <div
                  aria-hidden="true"
                  className="size-24 shrink-0 -rotate-12 rounded-full border-2 border-primary/40 p-1.5"
                >
                  <div className="flex size-full items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary">
                    <BadgeCheck className="size-9" />
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                Al Afnan Furniture Transfer holds a trade licence issued by the
                Sharjah Economic Development Department. Our licensing and
                insurance cover moves in all seven emirates.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border/70 pt-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border/70">
                <div className="flex items-start gap-5 md:pr-10">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                    <FileBadge className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    We don&apos;t publish our licence number online, but
                    you&apos;re welcome to see the licence before you book. Ask
                    our team by phone or WhatsApp on{" "}
                    <a href="tel:0567277536" className={phoneLink}>
                      056 7277536
                    </a>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-5 md:pl-10">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-xs">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Our insurance covers your goods while they are in transit
                    and any damage that happens during handling. If something is
                    damaged during your move, we repair it or replace it. Report
                    it to our team on{" "}
                    <a href="tel:0567277536" className={phoneLink}>
                      056 7277536
                    </a>{" "}
                    and we&apos;ll arrange the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            MOVING SERVICES WE OFFER
        ════════════════════════════════════════════ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="max-w-3xl">
            <SectionMark n="07" />
            <h2 id="services-heading" className={h2Class}>
              Moving Services We Offer
            </h2>
          </div>

          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          >
            {services.map(({ icon: Icon, name, href, description }, index) => (
              <li
                key={name}
                className={`group relative flex items-start gap-4 rounded-2xl border p-5 transition-all sm:p-6 ${
                  href
                    ? "border-border/80 bg-card shadow-xs hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary/60"
                    : "border-border/60 bg-muted/40"
                } ${index === services.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    href
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="min-w-0 flex-1 pt-0.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {href ? (
                    <Link
                      href={href}
                      className="font-semibold text-foreground transition-colors outline-none after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
                    >
                      {name}
                    </Link>
                  ) : (
                    <strong className="font-semibold text-foreground">
                      {name}
                    </strong>
                  )}
                  : {description}
                </p>
                {href && (
                  <ArrowUpRight
                    className="mt-1 size-5 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* ════════════════════════════════════════════
            AREAS WE SERVE
        ════════════════════════════════════════════ */}
        <section
          id="areas"
          aria-labelledby="areas-heading"
          className={`scroll-mt-24 ${sectionWrap}`}
        >
          <div className="rounded-3xl border border-border/70 bg-muted/35 p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <SectionMark n="08" />
                <h2 id="areas-heading" className={h2Class}>
                  Areas We Serve
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  We work across Sharjah, including Al Nahda, Al Majaz, Al
                  Taawun, Al Khan, Muwaileh, Al Qasimia, Al Qarayen, Muwafjah
                  and the Sharjah Industrial Area. Outside Sharjah, we move
                  customers to and from Dubai, Abu Dhabi, Ajman, Umm Al Quwain,
                  Ras Al Khaimah and Fujairah.
                </p>
              </div>

              {/* Visual index of the same places (decorative, hidden from assistive tech) */}
              <div aria-hidden="true" className="lg:col-span-6">
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {sharjahAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground/80 shadow-2xs sm:text-sm"
                    >
                      <MapPin className="size-3.5 text-primary" />
                      {area}
                    </span>
                  ))}
                </div>
                <div className="my-6 flex items-center gap-3 text-primary">
                  <span className="h-px flex-1 border-t border-dashed border-primary/40" />
                  <Route className="size-5" />
                  <span className="h-px flex-1 border-t border-dashed border-primary/40" />
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {otherEmirates.map((emirate) => (
                    <span
                      key={emirate}
                      className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground shadow-2xs sm:text-sm"
                    >
                      {emirate}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            TALK TO OUR SHARJAH TEAM (CTA)
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Talk to Our Sharjah Team"
          paragraph={
            <div className="space-y-3.5">
              <p>
                Call or WhatsApp{" "}
                <a href="tel:0567277536" className={phoneLink}>
                  056 7277536
                </a>{" "}
                for a free, no-obligation estimate. To get an accurate quote
                quickly, tell us what you&apos;re moving, the pickup and
                delivery locations, and your preferred date.
              </p>
              <p>
                You can also visit our office at Jamal Abdul Naser St, near Al
                Majaz 2, Al Majaz, Sharjah.
              </p>
              <p>
                <strong className="font-semibold text-foreground">
                  Opening hours:
                </strong>{" "}
                Sunday to Friday, open 24 hours. Saturday, 9 AM to 5 PM.
              </p>
            </div>
          }
          quoteButtonText="Get a Free Estimate"
          whatsappButtonText="WhatsApp Us"
          whatsappButtonHref={whatsappLink(
            "Hi, I would like a free moving estimate from Al Afnan Furniture Transfer",
          )}
          callButtonText="Call 056 7277536"
        />

        {/* ════════════════════════════════════════════
            FAQS
        ════════════════════════════════════════════ */}
        <FAQSection title="FAQs" subtitle="" faqs={aboutFaqs} />
    </SiteShell>
  );
}

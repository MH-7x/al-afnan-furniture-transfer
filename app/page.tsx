import Image from "next/image";
import Link from "next/link";
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import {
  CalendarCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/SiteShell";
import { SectionHeader } from "@/components/SectionHeader";
import { MovingProcess } from "@/components/MovingProcess";
import { ContentTable } from "@/components/ContentTable";
import { FAQSection } from "@/components/FaqsSection";
import { CTASection } from "@/components/CTASection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import {
  WHATSAPP_BOOK,
  WHATSAPP_CHOOSE,
  WHATSAPP_EXACT,
  WHATSAPP_QUESTION,
  WHATSAPP_QUOTE,
} from "@/lib/utils";
import {
  bookingPoints,
  checklistQuestions,
  emirateCards,
  linkClass,
  priceChangers,
  priceRows,
  processSteps,
  reasons,
  serviceRows,
  uaeFaqs,
} from "@/lib/HomeData";

export const metadata = MetadataTemplate({
  title: "Movers and Packers in UAE | 24/7 Movers and Packers",
  desc:
    "Al Afnan movers and packers across all 7 UAE emirates. 10 years' experience, 4.9★ rated, licensed and insured, 24/7 service. Call 056 7277536 for a free quote.",
  path: "/",
  image: { path: "/images/al-afnan-movers-and-packers-in-uae.jpg" },
});

const bodyClass = "t-body text-muted-foreground";

const footerSearches = [
  "movers and packers in UAE",
  "movers in UAE",
  "moving company in UAE",
  "packers and movers UAE",
  "24/7 movers in UAE",
  "best movers and packers in UAE",
  "cheap movers and packers in UAE",
  "affordable movers in UAE",
  "house movers in UAE",
  "villa movers in UAE",
  "apartment movers in UAE",
  "office movers in UAE",
  "furniture movers in UAE",
  "packing and unpacking services UAE",
  "movers and packers near me",
  "inter emirate movers UAE",
  "Dubai to Sharjah movers",
  "Sharjah to Dubai movers",
  "Ajman to Dubai movers",
  "Dubai to Abu Dhabi movers",
  "long distance movers UAE",
  "movers and packers UAE price",
  "moving company cost UAE",
  "same day movers UAE",
  "emergency movers UAE",
];

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE CONTENT
   ───────────────────────────────────────────────────────────────────────────── */
const trustBadges = [
  { icon: Star, text: "4.9★ Google rating" },
  { icon: ShieldCheck, text: "Licensed and insured in all 7 emirates" },
  {
    icon: CalendarCheck,
    text: "10 years moving homes and offices across the UAE",
  },
  { icon: Wrench, text: "Trained carpenters and handymen" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <SiteShell region="dubai" searches={footerSearches} layout="bands">
      {/* ════ HERO ════ */}
      <section
        id="hero"
        aria-labelledby="hero-title"
        data-surface="dark"
        className="relative isolate flex min-h-[min(92svh,56rem)] flex-col overflow-hidden bg-ink text-fog"
      >
        <Image
          src="/images/al-afnan-movers-and-packers-in-uae.jpg"
          alt="Al Afnan movers and packers in UAE loading wrapped furniture and boxes into a moving truck"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[62%_center]"
        />
        <div
          className="absolute inset-0 -z-10 bg-ink/82 md:bg-transparent md:bg-[linear-gradient(90deg,rgb(15_17_20/0.95)_0%,rgb(15_17_20/0.88)_45%,rgb(15_17_20/0.45)_100%)]"
          aria-hidden="true"
        />

        <div className="wrap flex flex-1 items-center py-20 lg:py-24">
          <div className="hero-stagger max-w-4xl">
            <h1 id="hero-title" className="t-display normal-case text-white">
              <span className="block">Movers and Packers in UAE — </span>
              <span className="block text-signal-bright">
                Serving All 7 Emirates
              </span>
            </h1>

            <p className="mt-7 t-lead text-paper measure">
              24/7 movers and packers in the UAE for apartments, villas and
              offices. Send a few photos of your home on WhatsApp and we&apos;ll
              reply with a written quote that covers packing, transport and
              setup, with no hidden fees.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                render={
                  <a
                    href={WHATSAPP_QUOTE}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <WhatsAppIcon />
                <span>Get a Free Quote on WhatsApp</span>
              </Button>
              <Button variant="outline-light" render={<a href={PHONE_HREF} />}>
                <Phone aria-hidden="true" />
                <span>Call {PHONE_DISPLAY}</span>
              </Button>
            </div>

            <a
              href="#moving-prices"
              className="mt-6 inline-block t-body font-semibold text-white underline decoration-signal-bright decoration-2 underline-offset-4 transition-colors hover:text-signal-bright"
            >
              See moving prices →
            </a>
          </div>
        </div>

        {/*
          Credentials run full width along the base of the photo as a solid
          docket strip, divided like a job sheet, instead of floating as chips
          inside the text column.
        */}
        <div className="relative border-t-2 border-signal bg-ink">
          <ul className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 py-7 lg:gap-y-0 lg:divide-x lg:divide-white/15">
            {trustBadges.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 t-small text-paper lg:px-7 lg:first:ps-0 lg:last:pe-0"
              >
                <Icon
                  className="mt-0.5 size-4.5 shrink-0 text-signal-bright"
                  aria-hidden="true"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════ THE COMPANY + ESTIMATE FORM ════ */}
      <section
        id="estimate"
        aria-labelledby="company-heading"
        className="scroll-mt-28 section-y"
      >
        <div className="wrap">
          <h2 id="company-heading" className="max-w-4xl text-ink">
            Al Afnan Movers and Packers:{" "}
            <span className="text-signal">
              10 Years as a Licensed Moving Company in the UAE
            </span>
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12 border-t border-ink pt-10 items-center">
            {/* The case for the company */}
            <div className="lg:col-span-7">
              <p className="border-s-4 border-signal ps-6  t-pull font-normal text-ink">
                Al Afnan Movers and Packers (Al Afnan Furniture Transfer) is a
                licensed and insured moving company based in Al Majaz, Sharjah.
                For 10 years our crews have moved studios, family villas and
                offices within and between Dubai, Sharjah, Abu Dhabi and the
                northern emirates.
              </p>

              <div className={`mt-8 space-y-4 measure ${bodyClass}`}>
                <p>
                  On a typical job, our team wraps and boxes your belongings,
                  takes apart beds, wardrobes and desks, and loads the truck. At
                  the new address, our carpenters rebuild everything. Packing
                  materials, labour and insurance are part of the quote you
                  approve, so the price doesn&apos;t grow on moving day.
                </p>

                <p>
                  For a quote, send photos or a short video of your home on
                  WhatsApp. If you&apos;d rather we see it in person, we&apos;ll
                  arrange a home visit. Estimates are free either way.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3 border-t border-line pt-8">
                <Button render={<Link href="/contact-us" />}>
                  <span>Contact Us for Moving in UAE</span>
                </Button>
                <Button variant="outline" render={<a href={PHONE_HREF} />}>
                  <Phone aria-hidden="true" />
                  <span>Call {PHONE_DISPLAY}</span>
                </Button>
              </div>
            </div>

            {/* Estimate form, then a crew photo to anchor the column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="rounded-xl  bg-white shadow-lg">
                <QuoteForm
                  quoteButtonText="Get My Free Quote"
                  callButtonHref={PHONE_HREF}
                  description={
                    "Fill in your move details for an upfront quote with no hidden fees."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-28 bg-white section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="services-heading"
            title="Our Moving and Packing Services Across the UAE"
            lead="As professional packers and movers, we handle everything from a single sofa to a full villa or office relocation. Most customers book one of the services below. If your move doesn't fit neatly into one, tell us what you're moving and we'll put the right crew together."
          />

          {/*
            A numbered service index. Photo and text alternate sides, rows are
            divided by hairlines, and each photo carries a stencilled plate with
            the job number — the crate-marking language of the trade rather than
            a row of product cards.
          */}
          <ol className="mt-16 border-t-2 border-ink">
            {serviceRows.map((row, index) => (
              <li
                key={row.id}
                className="reveal group grid grid-cols-1 md:grid-cols-12 gap-x-10 lg:gap-x-16 gap-y-7 items-center border-b border-line py-12 lg:py-16"
              >
                <div
                  className={`md:col-span-5 ${index % 2 ? "md:order-2" : ""}`}
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-paper-2">
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover "
                    />
                  </div>
                </div>

                <div
                  className={`md:col-span-7 ${index % 2 ? "md:order-1" : ""}`}
                >
                  <h3 className="text-ink">{row.title}</h3>
                  <div
                    className={`mt-5 border-t border-line pt-5 measure ${bodyClass}`}
                  >
                    {row.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 t-lead text-steel measure">
            Not sure which service fits?{" "}
            <a
              href={WHATSAPP_CHOOSE}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Message us on WhatsApp
            </a>{" "}
            with a few details and we&apos;ll recommend the right one.
          </p>
        </div>
      </section>

      {/* ════ WHY CUSTOMERS CHOOSE AL AFNAN ════ */}
      <section
        id="why-choose"
        aria-labelledby="why-choose-heading"
        className="scroll-mt-28 bg-paper-2 section-y"
      >
        <div className="wrap">
          {/*
            One ruled sheet: the masthead is a dark cell set into the same grid
            as the reasons, so the section reads as a single specification
            panel rather than a heading above a row of cards. Cells carry the
            hairlines (bottom + end) and the container closes the top and start
            edges. Each cell spans three parent rows and picks them up with
            `grid-rows-subgrid`, so the index, title and body of every reason
            land on shared baselines across the row.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-xl border-t border-s border-line">
            <div
              data-surface="dark"
              className="row-span-3 flex flex-col border-b border-e border-line bg-ink p-8 lg:p-10 text-fog md:col-span-2"
            >
              <h2 id="why-choose-heading" className="text-white">
                Why Customers Choose Al Afnan Over Other UAE Movers and Packers
              </h2>
              <p className="mt-10 border-t-2 border-signal pt-6 t-body lg:mt-auto">
                Plenty of moving companies in the UAE promise careful handling
                and fair prices. Here is what backs those words up at Al Afnan,
                and how you can check it before you book.
              </p>
            </div>

            {reasons.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                className={`reveal group row-span-3 grid grid-rows-subgrid border-b border-e border-line bg-paper p-7 lg:p-8  ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex md:items-start justify-between gap-4">
                  <Icon
                    className="size-5 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 self-start t-h4 text-ink">{title}</h3>
                <p className={`mt-3 ${bodyClass}`}>{body}</p>
              </div>
            ))}
          </div>

          {/* Buyer's checklist: the argument on the left, the five tests on the right */}
          <div
            data-surface="dark"
            className="mt-16 overflow-hidden rounded-xl bg-ink text-fog"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 border-b border-ink-3 p-7 sm:p-10 lg:border-b-0 lg:border-e">
                <h3 className="border-t-4 border-signal pt-6 text-white">
                  How to Choose the Best Movers and Packers in UAE
                </h3>
                <p className="mt-4 t-body">
                  Comparing the best moving companies in the UAE? Get clear
                  answers to these five questions before you book any of them:
                </p>
                <p className="mt-8 font-semibold text-xl text-white">
                  The best packers and movers will answer all five without
                  hesitation. Ask us.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    render={
                      <a
                        href={WHATSAPP_QUOTE}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <WhatsAppIcon />
                    <span>Get a Free Quote on WhatsApp</span>
                  </Button>
                  <Button
                    variant="outline-light"
                    render={<a href={PHONE_HREF} />}
                  >
                    <Phone aria-hidden="true" />
                    <span>Call {PHONE_DISPLAY}</span>
                  </Button>
                </div>
              </div>

              <ol className="lg:col-span-7 p-7 sm:p-10">
                {checklistQuestions.map((question, index) => (
                  <li
                    key={question}
                    className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-ink-3 py-6 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <span className="t-num text-3xl font-bold leading-none text-signal-bright">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="t-lead text-paper">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ════ HOW YOUR MOVE WORKS ════ */}
      <MovingProcess
        title="How Your Move Works, From First Message to Final Setup"
        desc="Every Al Afnan move follows the same five steps, whether it's a studio across town or a villa going to another emirate. It's a door-to-door service: we pack at the old address and unpack at the new one."
        process={processSteps}
        ctaHref={WHATSAPP_QUOTE}
        ctaLabel="Get a Free Quote on WhatsApp"
        footer={
          <p>
            Ready to start?{" "}
            <a href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer">
              Send photos on WhatsApp
            </a>{" "}
            and we&apos;ll reply with a written quote.
          </p>
        }
      />

      {/* ════ EMIRATES WE COVER ════ */}
      <section
        id="emirates"
        aria-labelledby="emirates-heading"
        className="scroll-mt-28 bg-white section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="emirates-heading"
            title="Emirates We Cover: Movers and Packers Across the UAE"
            lead={
              <>
                We&apos;re licensed to move in all seven emirates from our base
                on Jamal Abdul Naser Street in Al Majaz, Sharjah. Looking for
                packers and movers near you? The areas below show where we work
                in each emirate.
              </>
            }
          />

          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emirateCards.map((card, index) => (
              <li
                key={card.title}
                className="reveal flex flex-col rounded-xl  bg-paper p-7 transition-colors hover:bg-paper-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <MapPin
                    strokeWidth={1.3}
                    className="size-5 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <span
                    className="t-num text-2xl font-bold leading-none text-ink/20"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 t-h4 text-ink">{card.title}</h3>
                <p className={`mt-3 ${bodyClass}`}>{card.body}</p>
              </li>
            ))}
          </ul>

          {/* Routes and paperwork: the two things that decide an inter-emirate move */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <article className="lg:col-span-7 rounded-xl bg-paper-2 p-8 sm:p-10">
              <h3 className="border-t-4 border-signal pt-6 text-ink">
                Inter-Emirate Moves: Dubai to Sharjah, Sharjah to Abu Dhabi and
                More
              </h3>
              <p className="mt-5 t-lead text-steel">
                Common routes include Dubai to Sharjah, Sharjah to Dubai, Ajman
                to Dubai, Dubai to Abu Dhabi, Sharjah to Ras Al Khaimah and
                Dubai to Fujairah. The paperwork for these moves happens at the
                buildings: a move-out permit at one end, a move-in permit and
                lift booking at the other, and set moving hours at both. We plan
                loading and arrival around both buildings and price the move on
                volume and distance, not a flat rate per emirate.
              </p>
            </article>

            <article className="lg:col-span-5 rounded-xl border border-line p-8 sm:p-10">
              <h3 className="border-t-2 border-ink pt-5 t-h4 text-ink">
                What Else Changes When You Move Between Emirates
              </h3>
              <p className={`mt-4 ${bodyClass}`}>
                Changing emirate usually means a new utility account and a new
                tenancy registration too. Dubai uses DEWA for electricity and
                water and Ejari for tenancy registration, Sharjah homes are
                served by SEWA, and Abu Dhabi registers tenancy contracts
                through Tawtheeq. Settle the final bill at your old address
                early, because many buildings ask for a utility clearance before
                they approve a move-out permit.
              </p>
            </article>
          </div>

          <p className="mt-10 t-lead text-steel measure">
            Don&apos;t see your area?{" "}
            <Link href="/contact-us" className={linkClass}>
              Contact us
            </Link>{" "}
            with your location and we&apos;ll confirm whether we cover it.
          </p>
        </div>
      </section>

      {/* ════ PRICE GUIDE ════ */}
      <section
        id="moving-prices"
        aria-labelledby="moving-prices-heading"
        className="scroll-mt-28 bg-paper-2 section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="moving-prices-heading"
            title="Movers and Packers UAE Price Guide"
            lead="What do movers and packers in the UAE charge? Mostly it depends on how much you own, how easy your buildings are to work in, and whether you're moving within one emirate or between two. The ranges below are for moves within a single emirate; inter-emirate moves add distance to the price."
          />

          {/* The rate card, with the all-inclusive promise alongside it */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h3 className="text-ink">What Moving Costs Across the UAE</h3>
              <ContentTable
                label="Typical moving prices across the UAE by move size, in AED"
                headers={["Move size", "Typical price (AED)"]}
                rows={priceRows.map(([size, price]) => [
                  size,
                  <span
                    key={size}
                    className="t-num text-2xl font-bold text-ink whitespace-nowrap"
                  >
                    {price}
                  </span>,
                ])}
                className="mt-6 [&_table]:min-w-0 [&_thead_th:last-child]:text-end [&_tbody_td]:text-end [&_tbody_td]:align-middle"
              />
              <p className="mt-4 t-small text-muted-foreground">
                Updated October 2026. Prices are for moves within one emirate.
                Inter-emirate moves, such as Dubai to Sharjah or Sharjah to Abu
                Dhabi, are quoted on volume and distance.
              </p>
            </div>

            <article
              data-surface="dark"
              className="lg:col-span-5 rounded-xl bg-ink p-8 sm:p-10 text-fog"
            >
              <h3 className="border-t-4 border-signal pt-6 text-white">
                What Every Quote Includes
              </h3>
              <p className="mt-5 t-lead">
                Every written quote covers packing materials, labour,
                dismantling of large furniture, loading, transport, unloading,
                reassembly, and insurance for your belongings in transit and
                while our crew handles them. Unpacking can be added if you want
                things put back in cupboards and drawers.
              </p>
            </article>
          </div>

          {/* The three things people get caught out by */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 border-t-2 border-ink pt-10 items-start">
            <article>
              <h3 className="t-h4 text-ink">What Changes Your Price</h3>
              <ul className="mt-4 space-y-2.5">
                {priceChangers.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 bg-signal"
                      aria-hidden="true"
                    />
                    <span className={bodyClass}>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="md:border-s md:border-line md:ps-10">
              <h3 className="t-h4 text-ink">Building Fees Paid Separately</h3>
              <p className={`mt-4 ${bodyClass}`}>
                Move permit fees and refundable lift deposits are paid directly
                to your building or community management, not to us. Many towers
                and gated communities in Dubai, Sharjah and Abu Dhabi charge a
                permit fee, and some hold a refundable deposit against damage to
                lifts and corridors. We tell you what to expect before you book.
              </p>
            </article>

            <article className="md:border-s md:border-line md:ps-10">
              <h3 className="t-h4 text-ink">
                Affordable Movers and Packers Without Hidden Fees
              </h3>
              <p className={`mt-4 ${bodyClass}`}>
                Comparing cheap movers and packers in the UAE? A low quote only
                saves money if it holds on moving day. Before you book any
                company, check whether stairs, packing materials, dismantling or
                waiting time can be added later. With Al Afnan, the written
                quote is all-inclusive and only changes if you add items to the
                move.
              </p>
            </article>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              render={
                <a
                  href={WHATSAPP_EXACT}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <WhatsAppIcon />
              <span>Send Photos for Your Exact Quote on WhatsApp</span>
            </Button>
            <Button variant="outline" render={<a href={PHONE_HREF} />}>
              <Phone aria-hidden="true" />
              <span>Call {PHONE_DISPLAY}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ════ REVIEWS ════ */}
      <GoogleReviewsSection
        id="reviews"
        title="What Our Customers Say About Al Afnan Movers"
        intro="We're rated 4.9★ on Google. Reviewers keep mentioning the same things: crews who turn up on time, careful handling and fair prices. Several of the moves below crossed from one emirate to another, which is why customers recommend us as trusted movers in the UAE for inter-emirate moves."
        actions={
          <>
            <Button
              variant="outline"
              render={
                <a
                  href={"https://maps.google.com/?cid=15781830796061422134"}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Star aria-hidden="true" />
              <span>Read All Reviews on Google</span>
            </Button>
            <Button
              render={
                <a
                  href={WHATSAPP_QUOTE}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <WhatsAppIcon />
              <span>Get a Free Quote on WhatsApp</span>
            </Button>
          </>
        }
      />

      {/* ════ FREQUENTLY ASKED QUESTIONS ════ */}
      <div className="bg-paper-2">
        <FAQSection
          faqs={uaeFaqs}
          title="FAQs About Movers and Packers in UAE"
          subtitle=""
          layout="split"
          note={
            <p>
              Still have questions? Call {PHONE_DISPLAY} or{" "}
              <a
                href={WHATSAPP_QUESTION}
                target="_blank"
                rel="noopener noreferrer"
              >
                message us on WhatsApp
              </a>
              .
            </p>
          }
        />
      </div>

      {/* ════ BOOK YOUR UAE MOVE ════ */}
      <CTASection
        id="book"
        heading="Book Your UAE Move With Al Afnan Movers"
        paragraph="Getting started takes one message. Send photos or a short video of your home on WhatsApp with both addresses and your preferred date, and we'll come back with a written quote. Our team works 24/7, so you can book a move for tomorrow morning, this weekend or tonight."
        whatsappButtonText="Get a Free Quote on WhatsApp"
        whatsappButtonHref={WHATSAPP_BOOK}
        callButtonText={`Call ${PHONE_DISPLAY}`}
        quoteButtonText="Get My Free Quote"
        formDescription={
          "Fill in your move details for an upfront quote with no hidden fees."
        }
        trustPoints={bookingPoints}
      />
    </SiteShell>
  );
}

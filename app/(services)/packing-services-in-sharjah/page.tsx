import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Clock,
  Award,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  Package,
  Boxes,
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
  title: "Packing Services in Sharjah | Al Afnan Furniture Transfer",
  description:
    "Standalone or move-day packing in Sharjah — fragile items, furniture, full unpacking included. Licensed, 10 years' experience. Free estimate.",
};

const packingFaqs = [
  {
    question: "Can I book packing without booking the full move?",
    answer:
      "Yes. Packing is available as a standalone service if you've arranged your own transport or just need the boxes handled professionally.",
  },
  {
    question: "Do you pack fragile and specialty items differently?",
    answer:
      "Fragile items like glassware and mirrors get individually wrapped and cushioned as standard. Specialty items — pianos, artwork, wine — get the same careful handling at the same price, not a separate quote.",
  },
  {
    question: "Is unpacking included?",
    answer:
      "Yes, unpacking at your new location is included as standard, not an add-on.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "The sooner the better, especially for larger homes or move dates around weekends and month-end, when demand is higher. A free assessment early on also gives you a firmer number to plan around.",
  },
  {
    question: "What if I only need part of the packing done?",
    answer:
      "That's fine — we can quote for specific rooms or item types, or supply materials only if you're doing some of it yourself.",
  },
  {
    question: "How is pricing worked out?",
    answer:
      "Either as a flat rate by home size (covers labor and materials), materials only if you're packing yourself, or hourly/daily labor if you've already got boxes. We'll tell you which makes sense once we see the job.",
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
  "packing services in Sharjah",
  "packers and movers Sharjah",
  "packing and unpacking services Sharjah",
  "packing materials Sharjah",
  "boxes for moving Sharjah",
  "bubble wrap Sharjah",
  "fragile item packing Sharjah",
  "furniture packing Sharjah",
  "home packing services Sharjah",
  "office packing services Sharjah",
];

export default function PackingServicesPage() {
  const faqSchema = generateFAQSchema(packingFaqs);

  return (
    <>
      {/* FAQ Schema for Google Rich Results */}
      <script
        id="packing-services-faq-schema"
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
              className="pointer-events-none absolute -bottom-20 left-1/4 size-64 rounded-full bg-secondary/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-20 max-w-5xl">
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
                  Packing Services in Sharjah
                </span>
              </nav>

              {/* H1 Heading */}
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Packing Services in Sharjah
              </h1>

              {/* Intro Content */}
              <div className="mt-5 space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Al Afnan Furniture Transfer packs homes and offices across
                  Sharjah — on its own, or as part of a full move. If
                  you&apos;ve already booked a truck and just need someone to
                  handle the boxes, we can do that.
                </p>
                <p>
                  {" "}
                  If you want the whole thing sorted, packing through unpacking
                  at the other end, we do that too.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="secondary"
                  size="lg"
                  render={<Link href="#estimate" />}
                  className="py-6 px-6"
                >
                  <span>Get a Free Packing Assessment</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
                <Button
                  size="lg"
                  render={<a href="tel:0567277536" />}
                  className="py-6 px-6"
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
                  <Award className="size-3.5 text-primary shrink-0" />
                  4.9/5 Google Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <Boxes className="size-3.5 text-primary shrink-0" />
                  Full Unpacking Included
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary shrink-0" />
                  Licensed &amp; Insured Across UAE
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  No Hidden Per-Box Charges
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
              <p>
                Ten years of doing this in Sharjah means we&apos;ve packed the
                easy jobs and the awkward ones — top-floor apartments with a
                single working lift, villas with more glassware than cabinet
                space, offices that need to be back in business by Monday
                morning.
              </p>
              <p>
                We&apos;re licensed and insured across all seven emirates, and
                our team works in Arabic, English, and Urdu/Hindi, so
                instructions don&apos;t get lost in translation on move day.
              </p>
              {/* 16:9 main image */}
              <figure className="!mt-0">
                <div className="img-wide">
                  <Image
                    src="/packing-and-moving-services.jpg"
                    alt="Professional packing services in Sharjah by Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
                <figcaption>
                  Professional packing services in Sharjah — Al Afnan Furniture
                  Transfer
                </figcaption>
              </figure>

              {/* ── What We Pack ── */}
              <h2>What We Pack</h2>
              <ul>
                <li>
                  <div>
                    <strong>Kitchen and fragile items.</strong> Dishes,
                    glassware, mirrors, decorative pieces — wrapped
                    individually, cushioned, and boxed so nothing shifts in
                    transit.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Furniture and large household items.</strong> Sofas,
                    mattresses, wardrobes, and anything that needs disassembly
                    gets padded and wrapped before it leaves the room.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Clothes and wardrobe items.</strong> Hanger boxes
                    keep clothes on their hangers and out of suitcases, which
                    saves you the ironing later.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Electronics and appliances.</strong> TVs, computers,
                    and kitchen appliances are packed with anti-static and
                    shock-protective materials, not just wrapped in a blanket
                    and hoped for.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Specialty items.</strong> Pianos, artwork, wine
                    collections — these get the same careful attention as
                    everything else, at no extra charge. A lot of companies
                    quote a &ldquo;custom fee&rdquo; for anything unusual. We
                    don&apos;t.
                  </div>
                </li>
              </ul>

              {/* ── Packing Materials We Use ── */}
              <h2>Packing Materials We Use</h2>
              <ul>
                <li>
                  <div>
                    Bubble wrap and stretch film for furniture surfaces and
                    anything with a finish worth protecting
                  </div>
                </li>
                <li>
                  <div>
                    Sturdy moving cartons in sizes matched to what&apos;s going
                    inside, so boxes don&apos;t buckle under their own weight
                  </div>
                </li>
                <li>
                  <div>
                    Wardrobe boxes with hanging rails for clothes that need to
                    stay on hangers
                  </div>
                </li>
                <li>
                  <div>
                    Packing tape and labeling so every box gets to the right
                    room without you having to guess
                  </div>
                </li>
              </ul>
              <p>
                If you only need materials — say you&apos;re packing part of the
                move yourself — we can supply those separately too.
              </p>

              {/* Two-column 4:3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/movers-and-packers-in-sharjah.jpg"
                      alt="Movers and packers in Sharjah packing and securing boxes"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Professional packing stage</figcaption>
                </figure>
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/furniture-moving-transfer.jpg"
                      alt="Furniture wrapping and protective cushioning"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>
                    Furniture wrapping and protective cushioning
                  </figcaption>
                </figure>
              </div>

              {/* ── Our Packing Process ── */}
              <h2>Our Packing Process</h2>
              <ol>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base font-semibold text-foreground">
                      Free assessment.
                    </h3>
                    <p>
                      We look at what you&apos;re packing and how much of it
                      there is before we quote anything.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base font-semibold text-foreground">
                      Sorting and labeling.
                    </h3>
                    <p>
                      Items get grouped by room and fragility so nothing ends up
                      in the wrong box, or worse, unpacked twice.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base font-semibold text-foreground">
                      Packing day.
                    </h3>
                    <p>
                      We work fast without cutting corners — fragile items get
                      wrapped properly whether we&apos;re doing one room or the
                      whole villa.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 text-base font-semibold text-foreground">
                      Unpacking.
                    </h3>
                    <p>
                      Included as standard. We unpack at your new place and can
                      help arrange items where you want them, so you&apos;re not
                      left surrounded by boxes for a week.
                    </p>
                  </div>
                </li>
              </ol>

              {/* ── Standalone Packing vs. Full-Service Packing ── */}
              <h2>Standalone Packing vs. Full-Service Packing</h2>
              <p>
                Standalone packing makes sense if you&apos;ve already arranged
                your own transport, or if you just want the packing done
                professionally while you handle logistics elsewhere.
              </p>
              <p>
                Full-service packing covers everything — packing, loading,
                transport, unloading, unpacking — so you don&apos;t have to
                coordinate separate teams for the same move.
              </p>
              <p>
                Either way, the packing itself is done to the same standard. The
                difference is just what happens around it.
              </p>

              {/* ── Why Choose Al Afnan for Packing in Sharjah ── */}
              <h2>Why Choose Al Afnan for Packing in Sharjah</h2>
              <ul>
                <li>
                  <div>
                    10 years of packing and moving experience in Sharjah and
                    across the UAE
                  </div>
                </li>
                <li>
                  <div>Licensed and insured to operate in all 7 emirates</div>
                </li>
                <li>
                  <div>4.9/5 rating from Google customers</div>
                </li>
                <li>
                  <div>
                    Trained packing crews, including carpenters and handymen for
                    furniture that needs to come apart before it can be wrapped
                  </div>
                </li>
                <li>
                  <div>Arabic, English, and Urdu/Hindi spoken on-site</div>
                </li>
                <li>
                  <div>Transparent quotes with no hidden per-box charges</div>
                </li>
              </ul>

              <div className="callout">
                That last point matters more than it sounds like it should. A
                common trick in this industry is a cheap flat rate with a hidden
                AED 20–30 charge per box packed — which can quietly double your
                bill. We quote up front, and that&apos;s what you pay.
              </div>

              {/* ── Packing Services Pricing in Sharjah ── */}
              <h2>Packing Services Pricing in Sharjah</h2>
              <p>
                Pricing depends on how much needs packing and how you want it
                handled. Three ways we can structure it:
              </p>

              {/* By home size */}
              <h3>By home size (labor and materials included)</h3>
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Home Size</th>
                      <th scope="col">Price Range (AED)</th>
                      <th scope="col">What&apos;s Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Studio Apartment
                      </td>
                      <td>
                        <span className="price-badge">300 – 600</span>
                      </td>
                      <td>2–3 packers, kitchenware, clothes, standard items</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        1-Bedroom Apartment
                      </td>
                      <td>
                        <span className="price-badge">500 – 900</span>
                      </td>
                      <td>
                        3–4 packers, focus on kitchen breakables and fragile
                        items
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        2-Bedroom Apartment
                      </td>
                      <td>
                        <span className="price-badge">800 – 1,500</span>
                      </td>
                      <td>Full team, packed and labeled by room</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3-Bedroom / Small Villa
                      </td>
                      <td>
                        <span className="price-badge">1,200 – 2,200</span>
                      </td>
                      <td>
                        Full team, larger volumes of clothes, linens, and
                        household items
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Large Villa (4+ Bedrooms)
                      </td>
                      <td>
                        <span className="price-badge">2,000 – 4,000+</span>
                      </td>
                      <td>Extensive crew, sometimes spread across two days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* By materials only */}
              <h3>
                By materials only (if you&apos;re packing part of the move
                yourself)
              </h3>
              <ul>
                <li>
                  <div>
                    <strong>Standard carton box:</strong> AED 10 – 15
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Wardrobe box with hanging rail:</strong> AED 20 – 30
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Large bubble wrap roll:</strong> AED 50 – 80
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Stretch/shrink film roll:</strong> AED 20 – 35
                  </div>
                </li>
              </ul>

              {/* By labor only */}
              <h3>By labor only (if you&apos;ve already got your own boxes)</h3>
              <ul>
                <li>
                  <div>
                    <strong>Per packer, hourly:</strong> AED 30 – 50 (minimum
                    3–4 hour booking)
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Per packer, full day:</strong> AED 250 – 350 (8-hour
                    shift)
                  </div>
                </li>
              </ul>

              <p>
                Actual cost depends on how much you have, how fragile it is, and
                how you want the job split between materials and labor. A free
                assessment gets you an exact number.
              </p>

              {/* ── Areas We Serve for Packing Services in Sharjah ── */}
              <h2>Areas We Serve for Packing Services in Sharjah</h2>
              <p>
                We pack homes and offices across Al Nahda, Al Majaz, Al Taawun,
                Al Khan, Muwaileh, Al Qasimia, Al Qarayen, Muwafjah, Sharjah
                Industrial Area, and the rest of Sharjah — including packing
                ahead of moves to Dubai, Ajman, and the other emirates.
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

              <p className="mt-4">
                Call{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>{" "}
                for a free packing assessment.
              </p>

              {/* ── Quick Callout ── */}
              <div className="callout mt-8">
                <strong>Need packing help today?</strong> Call our team on{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>{" "}
                for a free assessment. Standalone packing or full move day —
                honest pricing with zero hidden per-box fees.
              </div>
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                ctaTitle="Need Professional Packing?"
                ctaDesc="Call us for a free assessment. Standalone packing or move-day packing with full unpacking included."
                sharjahAreas={sharjahAreasList}
              />
            </div>
          </div>
        </section>
        <FAQSection
          faqs={packingFaqs}
          title="Questions  About Packing Services in Sharjah"
        />
        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Get a Free Packing Assessment in Sharjah"
          paragraph="Al Afnan Furniture Transfer packs homes and offices across Sharjah — standalone or as part of a full move. Call 056 7277536 for a free assessment with transparent quotes and zero hidden per-box fees."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

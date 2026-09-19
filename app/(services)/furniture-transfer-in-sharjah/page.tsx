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
  Truck,
  Armchair,
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
  title: "Furniture Transfer & Movers in Sharjah | Al Afnan",
  description:
    "Single item or a full room — Al Afnan moves furniture across Sharjah and the UAE. Free assessment, transparent pricing, 10 years' experience. Call 056 7277536.",
};

const furnitureFaqs = [
  {
    question:
      "Can you move just one piece of furniture, like a single sofa or bed?",
    answer:
      "Yes — single-item transfer is one of our most common jobs, priced by the item rather than folded into a full moving package.",
  },
  {
    question:
      "Do you dismantle and reassemble furniture, or do I need to do that myself?",
    answer:
      "Our carpenters handle it. It's already built into the price for large or complex items, and added as a per-component fee if it comes up unexpectedly with smaller ones.",
  },
  {
    question:
      "Do you transfer furniture between emirates, like Sharjah to Dubai?",
    answer:
      "Yes. We're licensed across all seven emirates, and inter-emirate jobs just carry a distance-based surcharge on top of the normal price.",
  },
  {
    question: "How is this priced compared to a full house move?",
    answer:
      "By item, volume, or truck size — whichever fits. A full house move is priced around the size of the home. If you're only moving a few pieces, this comes out cheaper than booking a whole-house package.",
  },
  {
    question:
      "What if I'm buying furniture from a marketplace seller or a showroom?",
    answer:
      "We collect from both, and we treat marketplace pickups and showroom deliveries the same way — same wrapping, same care, whether the item is new or secondhand.",
  },
  {
    question: "Do you charge extra for stairs or building access issues?",
    answer:
      "Usually yes — around 10–20% more when there's no elevator, a long walk to the loading area, or a building with a tight service-elevator booking window.",
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
  "furniture transfer Sharjah",
  "furniture movers Sharjah",
  "single item movers Sharjah",
  "sofa movers Sharjah",
  "bed dismantling and moving Sharjah",
  "pickup truck for furniture Sharjah",
  "marketplace furniture delivery Sharjah",
  "furniture transport Sharjah to Dubai",
  "small move movers Sharjah",
  "movers and packers in Sharjah",
];

export default function FurnitureTransferPage() {
  const faqSchema = generateFAQSchema(furnitureFaqs);

  return (
    <>
      {/* FAQ Schema for Google Rich Results */}
      <script
        id="furniture-transfer-faq-schema"
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
                  Furniture Transfer &amp; Movers in Sharjah
                </span>
              </nav>

              {/* H1 Heading */}
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Professional Furniture Transfer &amp; Movers in Sharjah{" "}
                <span className="text-primary block sm:inline"></span>
              </h1>

              {/* Intro Content */}
              <div className="mt-5 space-y-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Sometimes you don&apos;t need a whole house moved — just one
                  sofa you bought off Facebook Marketplace, a wardrobe headed to
                  storage, or a bedroom set going from Sharjah to Dubai.
                  That&apos;s what this service is for.
                </p>
                <p>
                  Al Afnan Furniture Transfer moves single items and small
                  batches of furniture across Sharjah, priced by what&apos;s
                  actually moving, not bundled into a full house-move package
                  you don&apos;t need. We&apos;ve done this for 10 years and
                  we&apos;re licensed and insured to move furniture anywhere
                  across the UAE&apos;s seven emirates.
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
                  <span>Get a Free Furniture Transfer Estimate</span>
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
                  <Award className="size-3.5 text-primary shrink-0" />
                  4.9/5 Google Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="size-3.5 text-primary shrink-0" />
                  Single Item &amp; Partial Loads
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-primary shrink-0" />
                  Licensed &amp; Insured Across UAE
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
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
                    src="/furniture-moving-transfer.jpg"
                    alt="Furniture transfer and movers in Sharjah handling single-item and partial furniture moves — Al Afnan Furniture Transfer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 740px"
                    priority
                  />
                </div>
                <figcaption>
                  Professional furniture transfer in Sharjah — Al Afnan
                  Furniture Transfer
                </figcaption>
              </figure>

              {/* ── What Counts as a Furniture Transfer ── */}
              <h2>What Counts as a Furniture Transfer</h2>

              <h3>Single-Item Transfer</h3>
              <p>
                One piece — a sofa, a wardrobe, a fridge, a dining table —
                picked up and delivered. This is the most common job: showroom
                deliveries, marketplace purchases, or clearing out one piece
                while everything else stays put.
              </p>

              <h3>Multiple-Item and Partial-Load Transfer</h3>
              <p>
                A few pieces at once, or a full room&apos;s worth — a bedroom
                set, a living room set, a mix of furniture and boxes. Bigger
                than a single item, smaller than a full house move.
              </p>

              <h3>New Purchases, Showroom Pickups, and Used Furniture</h3>
              <p>
                We pick up from showrooms and warehouses, and we handle
                secondhand furniture from marketplace sellers the same way —
                same wrapping, same handling. New or used doesn&apos;t change
                how carefully an item gets treated.
              </p>

              <h3>Inter-Emirate Furniture Transfer</h3>
              <p>
                Sharjah to Dubai, Abu Dhabi, or elsewhere. Same process, with
                extra time and, where relevant, toll costs built into the price.
              </p>

              {/* Two-column 4:3 images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-7">
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/packing-and-moving-services.jpg"
                      alt="Careful protective wrapping for furniture transfer in Sharjah"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>
                    Protective wrapping and cushioning for furniture
                  </figcaption>
                </figure>
                <figure className="!my-0">
                  <div className="img-portrait">
                    <Image
                      src="/movers-and-packers-in-sharjah.jpg"
                      alt="Movers and packers in Sharjah handling furniture loading into pickup truck"
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption>Safe loading and pickup transport</figcaption>
                </figure>
              </div>

              {/* ── How It Works ── */}
              <h2>How It Works</h2>
              <ol>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 !text-base font-semibold text-foreground">
                      Tell us what&apos;s moving
                    </h3>
                    <p>
                      The item(s), pickup and drop-off points, and roughly when.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 !text-base font-semibold text-foreground">
                      Free assessment
                    </h3>
                    <p>
                      We check what needs dismantling and whether there&apos;s a
                      staircase or a service elevator involved, then confirm a
                      price before you book anything.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 !text-base font-semibold text-foreground">
                      Wrapping and dismantling
                    </h3>
                    <p>
                      Bubble wrap, stretch film, hanger boxes for clothes. Beds,
                      wardrobes, and other large pieces get taken apart by our
                      carpenters if the item calls for it.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 !text-base font-semibold text-foreground">
                      Transport
                    </h3>
                    <p>
                      Loaded, driven, delivered, whether that&apos;s across
                      Sharjah or across an emirate line.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="!mt-0 !mb-1 !border-l-0 !pl-0 !text-base font-semibold text-foreground">
                      Reassembly and placement
                    </h3>
                    <p>Put back together and set down where you want it.</p>
                  </div>
                </li>
              </ol>

              {/* ── Why Al Afnan for Furniture Transfer in Sharjah ── */}
              <h2>Why Al Afnan for Furniture Transfer in Sharjah</h2>
              <p>
                10 years moving furniture around Sharjah means we already know
                which buildings have awkward service-elevator booking windows
                and which don&apos;t. We&apos;re licensed and insured across all
                seven emirates, so an inter-emirate transfer isn&apos;t a
                special case — it&apos;s a normal Tuesday for us.
              </p>
              <p>
                Dismantling and reassembly is done by trained carpenters and
                handymen, not whoever was free that day. Our team speaks Arabic,
                English, Urdu, and Hindi, so instructions don&apos;t get lost
                between you and the crew. Pricing is transparent — no hidden
                fees, and what we quote after the assessment is what you pay.
                We&apos;re rated 4.9/5 on Google, and we&apos;re available 24/7,
                including same-day transfers when your timeline doesn&apos;t
                leave room to plan ahead.
              </p>

              {/* ── Furniture Transfer Prices in Sharjah ── */}
              <h2>Furniture Transfer Prices in Sharjah</h2>
              <p>
                Pricing depends on what&apos;s moving — by item, by volume, or
                by truck size, whichever fits the job. These are typical ranges;
                your exact price depends on the item, access at both ends, and
                distance, which is why we confirm it after a free assessment
                instead of quoting blind over the phone.
              </p>

              {/* Table 1: Priced Per Item */}
              <h3>Priced Per Item</h3>
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Item Type</th>
                      <th scope="col">Examples</th>
                      <th scope="col">Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Small items
                      </td>
                      <td>Chair, side table, stool</td>
                      <td>
                        <span className="price-badge">AED 150 – 350</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Medium items
                      </td>
                      <td>Sofa, washing machine, fridge</td>
                      <td>
                        <span className="price-badge">AED 299 – 500</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Large / complex items
                      </td>
                      <td>King-size bed, wardrobe, double-door fridge</td>
                      <td>
                        <span className="price-badge">AED 450 – 800</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Large items sit at the higher end because they usually need
                dismantling and reassembly, not just loading and driving.
              </p>

              {/* Table 2: Priced by Volume */}
              <h3>Priced by Volume (Multiple Items)</h3>
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Load Size</th>
                      <th scope="col">Price Range</th>
                      <th scope="col">Typically Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Few items (2–5 pieces)
                      </td>
                      <td>
                        <span className="price-badge">AED 300 – 800</span>
                      </td>
                      <td>
                        A chest of drawers, coffee table, a couple of boxes
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Partial load (5–10 pieces)
                      </td>
                      <td>
                        <span className="price-badge">AED 400 – 1,500</span>
                      </td>
                      <td>
                        A mix of medium furniture, nothing structurally complex
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Full bedroom set
                      </td>
                      <td>
                        <span className="price-badge">AED 800 – 1,800</span>
                      </td>
                      <td>
                        Dismantling, wrapping, transport, and reassembly of bed
                        frame, wardrobe, side tables
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        Full living room set
                      </td>
                      <td>
                        <span className="price-badge">AED 1,200 – 2,500</span>
                      </td>
                      <td>
                        Wrapped transit for multi-seater sofas, entertainment
                        units, coffee tables, shelving
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Commercial inventory or bulk storage moves are sometimes
                calculated by volume instead — around AED 75–85 per cubic metre.
              </p>

              {/* Table 3: Priced by Truck Size */}
              <h3>Priced by Truck Size</h3>
              <div className="service-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Truck</th>
                      <th scope="col">Best For</th>
                      <th scope="col">Price Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-foreground">
                        1-ton pickup
                      </td>
                      <td>A single large appliance or small delivery</td>
                      <td>
                        <span className="price-badge">AED 150 – 400</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        3-ton pickup
                      </td>
                      <td>A small apartment&apos;s worth, or a full room</td>
                      <td>
                        <span className="price-badge">AED 700 – 1,500</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-foreground">
                        7-ton to 10-ton truck
                      </td>
                      <td>Large villas or office-scale furniture moves</td>
                      <td>
                        <span className="price-badge">AED 2,000 – 4,500+</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The 1-ton pickup usually covers just the vehicle and driver —
                add helpers if you need lifting hands. The 3-ton truck normally
                comes with a crew of 2–3.
              </p>

              {/* What Changes the Price */}
              <h3>What Changes the Price</h3>
              <ul>
                <li>
                  <div>
                    <strong>Dismantling and reassembly</strong> — AED 100–300
                    per major component if a carpenter has to break it down and
                    rebuild it.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Access</strong> — stairs, long corridor walks, or a
                    restrictive service-elevator booking window can add 10–20%
                    to labor time.
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Inter-emirate distance</strong> — moving between
                    emirates adds AED 150–500+ for road time and tolls.
                  </div>
                </li>
              </ul>
              <p>
                Tell us the item, the distance, and whether your building needs
                a move-in/move-out permit, and we&apos;ll get you an exact
                number.
              </p>

              {/* ── Areas We Serve for Furniture Transfer ── */}
              <h2>Areas We Serve for Furniture Transfer</h2>
              <p>
                Al Nahda, Al Majaz, Al Taawun, Al Khan, Muwaileh, Al Qasimia, Al
                Qarayen, Muwafjah, and Sharjah Industrial Area — plus
                inter-emirate transfer to Dubai, Abu Dhabi, Ajman, Ras Al
                Khaimah, Fujairah, and Umm Al Quwain.
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

              {/* ── Quick Callout ── */}
              <div className="callout mt-8">
                <strong>Need a single item or room moved today?</strong> Call
                our team on{" "}
                <a
                  href="tel:0567277536"
                  className="font-semibold text-primary hover:underline"
                >
                  056 7277536
                </a>{" "}
                with what needs moving, pickup, and drop-off points for an
                immediate, honest quote.
              </div>
            </article>

            {/* ── Right: Sidebar ── */}
            <div className="sticky top-24">
              <ServiceSidebar
                ctaTitle="Need Furniture Transferred?"
                ctaDesc="Call us for a free assessment on single items, partial loads, or showroom deliveries across Sharjah and the UAE."
                sharjahAreas={sharjahAreasList}
              />
            </div>
          </div>
        </section>

        <FAQSection
          faqs={furnitureFaqs}
          title="Questions About Furniture Transfer in Sharjah"
        />

        {/* ════════════════════════════════════════════
            CTA SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Get a Free Furniture Transfer Estimate"
          paragraph="Sometimes you don't need a whole house moved — just one sofa, a wardrobe, or a room set. Call 056 7277536 for a free assessment and transparent pricing with zero hidden fees."
        />
      </main>

      <Footer searches={footerSearches} />
    </>
  );
}

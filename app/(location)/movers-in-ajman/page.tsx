import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/SiteShell";
import Services from "@/components/Services";
import MovingProcess from "@/components/MovingProcess";
import { FAQSection } from "@/components/FaqsSection";
import { AjmanFaqs } from "@/lib/FaqsData";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { LocationHero } from "@/components/LocationHero";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Movers in Ajman Services By Al Afnan Furniture Transfer",
  description:
    "Trusted movers in ajman. Al Afnan Furniture Transfer provide moving services for houses, offices & furniture. Call 056 7277536 for a free moving quote.",
};

const footerSearches = [
  "movers in ajman",
  "movers and packers in ajman",
  "best movers in ajman",
  "furniture movers in ajman",
  "movers packers ajman",
  "packers and movers ajman",
  "furniture movers ajman",
  "best movers and packers in ajman",
  "professional movers in ajman",
  "movers in ajman uae",
];

const whyChooseUsPillars = [
  {
    id: "licensed-uae",
    title: "We’re Licensed to Move Your Belongings Across the UAE",
    description:
      "Our UAE license covers all seven emirates, so your move from Ajman to Dubai or Abu Dhabi follows the same safety standards—no subcontractors, no coverage gaps.",
  },
  {
    id: "ten-years-ajman",
    title: "Ten Years of Ajman-Specific Experience",
    description:
      "We know which buildings in Al Nuaimiya need elevator reservations, how to navigate Al Jurf’s narrow lanes during rush hour, and why villas in Emirates City often require extra padding for marble floors.",
  },
  {
    id: "google-rating",
    title: "4.9★ From Real Ajman Customers",
    description:
      "Every rating comes from someone who moved with us here—a teacher in Al Rashidiya, a shop owner near the industrial area, a family relocating to Al Helio 2. We read every review to improve. This consistent feedback has established us as one of the most trusted movers in ajman for residential and commercial moves.",
  },
  {
    id: "languages",
    title: "Fluent in Your Language (Arabic, English, Urdu/Hindi)",
    description:
      "Moving day involves quick decisions: Where does the sofa go? Can we leave these boxes by the door? When your crew speaks your language fluently, those moments stay clear—no guesswork, no misplaced furniture.",
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing—No Surprises",
    description:
      "Your free quote includes labor, truck, packing materials (bubble wrap, stretch film, boxes), furniture disassembly/reassembly, and basic cleanup. What you won’t see: extra charges for stairs, long carries from truck to door, or weekend moves.",
  },
];
const servicesData = [
  {
    id: "house-movers",
    title: "House Movers in Ajman",
    category: "Home Relocation",
    number: "01",
    image: "/house-moving-services-by-al-afnan.jpg",
    imageAlt:
      "House movers in Ajman carefully handling household furniture and packing room-by-room during a residential move by Al Afnan Furniture Transfer",
    paragraphs: [
      "We pack room-by-room using labeled boxes, disconnect/reconnect appliances (like washing machines), and protect floors/walls with runners.",
      "For Ajman houses in Al Nuaimiya or Al Zahya, we handle yard equipment (lawnmowers, grills), garage organization, and shed disassembly—items apartments don’t have.",
    ],
    cta: "House Moving Services",
    href: "/house-movers-in-sharjah",
  },
  {
    id: "studio-movers",
    title: "Studio Movers in Ajman",
    category: "Studio Shifting",
    number: "02",
    image: "/studio-moving-services.jpg",
    imageAlt:
      "Studio movers in Ajman navigating narrow corridors and carefully angling furniture during a studio relocation",
    paragraphs: [
      "We specialize in studio moves in Al Jurf and Emirates City towers.",
      "Narrow corridors require precise furniture angling—we measure doorways before lifting anything.",
    ],
    cta: "Studio Moving Services",
    href: "/",
  },
  {
    id: "apartment-movers",
    title: "Apartment Movers in Ajman",
    category: "Apartment Shifting",
    number: "03",
    image: "/flat-apartment-movers.jpg",
    imageAlt:
      "Apartment movers in Ajman securing building permits and moving wrapped furniture through a residential corridor",
    paragraphs: [
      "For 2BHKs in Al Rashidiya and Al Zahya, we secure parking permits and coordinate elevator bookings with building management to avoid delays and fines.",
    ],
    cta: "Apartment Moving Services",
    href: "/apartment-movers-in-sharjah",
  },
  {
    id: "villa-movers",
    title: "Villa Movers in Ajman",
    category: "Villa Relocation",
    number: "04",
    image: "/villa-moving-services.jpg",
    imageAlt:
      "Villa movers in Ajman professionally handling heavy items, custom crating marble, and navigating narrow gates",
    paragraphs: [
      "We handle heavy items (safes, pianos, gym equipment) with proper lifting gear, wrap marble/glass surfaces in custom crating, and reassemble outdoor furniture at your new villa.",
      "We’ve moved villas in Al Mowaihat and Al Nuaimiya where narrow gates required specialized maneuvering—our crew plans the route before touching a single item.",
    ],
    cta: "Villa Moving Services",
    href: "/villa-movers-in-sharjah",
  },
  {
    id: "commercial-movers",
    title: "Office Movers in Ajman",
    category: "Office & Business",
    number: "05",
    image: "/commercial-office-movers.jpg",
    imageAlt:
      "Commercial office movers in Ajman relocating workstations, anti-static IT equipment, and office furniture",
    paragraphs: [
      "We dismantle workstations, pack IT equipment in anti-static boxes, and file documents in labeled, sealable crates.",
      "After delivery, we rebuild cubicles and place furniture per your floor plan—critical for minimizing downtime in Ajman’s business districts like the Free Zone or near City Centre.",
    ],
    cta: "Commercial Moving Services",
    href: "/office-movers-in-sharjah",
  },
  {
    id: "furniture-movers",
    title: "Furniture Movers in Ajman",
    category: "Specialized Transfer",
    number: "06",
    image: "/furniture-moving-transfer.jpg",
    imageAlt:
      "Furniture movers in Ajman carefully wrapping beds, wardrobes, and tables using furniture pads and stretch film",
    paragraphs: [
      "Crews disassemble beds, wardrobes, and tables using labeled hardware bags, wrap each piece in furniture pads + stretch film, and reload them exactly as they came apart.",
      "We use hanger boxes for clothes so suits/dresses arrive wrinkle-free no ironing needed. This is why Ajman families with vintage or custom furniture specifically request us.",
    ],
    cta: "Furniture Moving Services",
    href: "/furniture-transfer-in-sharjah",
  },
  {
    id: "packing-services",
    title: "Packing & Unpacking Services in Ajman",
    category: "Full Packaging",
    number: "07",
    image: "/packing-and-moving-services.jpg",
    imageAlt:
      "Professional packing and unpacking team in Ajman packing fragile items with bubble wrap and custom boxes",
    paragraphs: [
      "We bring all materials (boxes, tape, bubble wrap, mattress covers) and pack fragile items (glassware, electronics, art) using industry-standard techniques.",
      "Unpacking includes placing items in designated rooms, removing all debris, and reassembling furniture so your new home feels livable same-day.",
    ],
    cta: "Packing Services",
    href: "/packing-services-in-sharjah",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Survey And Fixed Quote",
    paragraphs: [
      "You call or message us. We come to your home or office in Ajman. We see what needs moving. We note special items like pianos or antiques.",
      "We give you a written price that day. No hidden fees. No obligation.",
    ],
  },
  {
    number: "02",
    title: "Professional Packing And Protection",
    paragraphs: [
      "Our team arrives on schedule. We bring all materials.",
      <>
        We wrap furniture in pads and stretch film. We use hanger boxes for
        clothes. We pack glassware in bubble wrap. We label every box by room.
        We protect floors and walls.
      </>,
    ],
  },
  {
    number: "03",
    title: "Careful Loading Transport And Delivery",
    paragraphs: [
      "We load the truck carefully. Heavy items go on first. We secure everything with straps.",
      "We drive safely to your new place in Ajman or another emirate. We unload room by room. We place boxes where you ask.",
    ],
  },
  {
    number: "04",
    title: "Placement Reassembly And Cleanup",
    paragraphs: [
      "We put furniture where you want it. We reassemble beds wardrobes and tables.",
      "We remove all packing materials. We sweep the floors. We leave your new space clean and ready.",
    ],
  },
];

const areaList = [
  "Al Nuaimiya Ajman",
  "Al Rashidiya Ajman",
  "Al Jurf Ajman",
  "Al Mowaihat Ajman",
  "Al Zahya Ajman",
  "Al Manama Ajman",
  "Emirates City Ajman",
  "City of Ajman",
  "Ajman Corniche",
  "Ajman industrial area",
  "Ajman old town",
  "Ajman marina",
  "Ajman university area",
  "Al Helio 2 Ajman",
  "Ajman free zone",
];

const fixedPriceSteps = [
  "We list every item we’ll move",
  "We note access challenges (stairs distance parking permits)",
  "We calculate labor truck and materials based on what we observed",
  "We give you a written fixed price same day",
];

const WHATSAPP_QUOTE = "https://wa.me/971567277536";

export default function AjmanPage() {
  return (
    <SiteShell searches={footerSearches} layout="bands">
      {/* ════ HERO ════ */}
      <LocationHero
        id="hero-title"
        current="Movers in Ajman"
        title={
          <>
            Movers in Ajman{" "}
            <span className="block mt-2 text-signal-bright text-[0.6em] leading-[1.02]">
              Professional Movers and Packers Services
            </span>
          </>
        }
        image="/movers-in-ajman.jpg"
        imageAlt="Movers in Ajman — Professional Movers and Packers Services by Al Afnan"
      >
        <p className="mt-7 t-lead text-paper measure">
          Al Afnan Furniture Transfer has been trusted movers in ajman for over
          10 years, handling moves across Ajman and the rest of the UAE.
        </p>
        <div className="mt-5 space-y-3 border-t border-white/20 pt-5 t-body measure">
          <p>
            We move houses, villas, apartments, offices, and furniture with the
            same crew that packs, loads, and delivers your belongings.
          </p>
          <p>
            Our moving company is licensed, insured, and rated 4.9 stars on
            Google by real customers in Ajman.
          </p>
        </div>
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
            <span>Get Your Free Moving Quote</span>
          </Button>
          <Button variant="outline-light" render={<a href="tel:0567277536" />}>
            <Phone aria-hidden="true" />
            <span>Call 056 7277536</span>
          </Button>
        </div>
      </LocationHero>

      {/* ════ WHY CHOOSE US ════ */}
      <section aria-labelledby="why-choose-us-title" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="why-choose-us-title"
            title={
              <>
                Why Choose Al Afnan for{" "}
                <span className="md:block">Your Move in Ajman?</span>
              </>
            }
            lead="Moving companies make big promises. We prefer to show you why customers in Ajman keep choosing us—through what we actually do, not just what we say."
          />
          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-ink">
            {whyChooseUsPillars.map((pillar) => (
              <li key={pillar.id} className="reveal border-b border-line py-8">
                <h3 className="t-h4 text-ink">{pillar.title}</h3>
                <p className="mt-2 t-body text-muted-foreground">
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Services
        title="Complete Moving & Packing Services in Ajman"
        desc={
          <>
            <p>
              As your trusted movers and packers in ajman,{" "}
              <Link
                href="/"
                className="font-semibold text-signal underline underline-offset-4"
              >
                Al Afnan Furniture Transfer
              </Link>{" "}
              handle every step of your move so you don’t have to juggle
              multiple movers. Here’s exactly what each service includes, based
              on how we actually operate in Ajman.
            </p>
          </>
        }
        services={servicesData}
      />

      {/* ════ SPECIALIZED FURNITURE MOVING ════ */}
      <section
        aria-labelledby="specialized-furniture-heading"
        className="section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="specialized-furniture-heading"
            title={
              <>
                Specialized Furniture Moving <br className="md:block hidden" />{" "}
                Services in Ajman
              </>
            }
            lead="Your furniture deserves movers who treat it like their own. Here’s how we handle it differently based on our team’s actual skills and materials."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12">
            <div className="md:col-span-2 border-t-2 border-ink pt-6">
              <h3 className="text-ink">
                Carpenter-Led Disassembly &amp; Reassembly
              </h3>
              <div className="mt-4 space-y-4 t-body text-muted-foreground measure">
                <p>
                  Our team includes trained carpenters not just general movers.
                  They handle beds wardrobes and tables. For each piece they
                  label every screw and bolt in sealed bags.
                </p>
                <p>
                  They check joints for weakness while taking it apart. They
                  strengthen loose frames before putting it back together. This
                  means your furniture often arrives stronger than when it left.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-ink pt-6">
              <h3 className="text-ink">Material-Specific Wrapping Protocols</h3>
              <ul className="mt-4 border-t border-line">
                {[
                  "We do not use one size fits all padding.",
                  "For wood surfaces we use furniture pads plus stretch film.",
                  "We never put tape directly on the finish.",
                  "For glass or mirror we use double layered bubble wrap plus corner protectors.",
                  "For fabric or upholstery we use breathable covers never plastic.",
                  "Plastic traps moisture which damages fabric in Ajman’s humidity.",
                  "For clothes we use hanger boxes so suits and dresses arrive wrinkle free.",
                  "No ironing needed.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3 t-body text-steel"
                  >
                    <span
                      className="mt-2.5 size-1.5 shrink-0 bg-signal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-2 border-ink pt-6">
              <h3 className="text-ink">
                Heavy &amp; Awkward Furniture Logistics
              </h3>
              <ul className="mt-4 border-t border-line">
                {[
                  "For safes pianos or oversized sectionals we use special tools.",
                  "We use furniture dollies with stair climbing tracks.",
                  "This helps with Ajman’s walk up villas like in Al Mowaihat.",
                  "Piano moves include keyboard lockdown and pedal protection.",
                  "Oversized items get custom crating only if hallways or doorways demand it.",
                  "We never add unnecessary extra cost.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3 t-body text-steel"
                  >
                    <span
                      className="mt-2.5 size-1.5 shrink-0 bg-signal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="md:col-span-2 rounded-xl bg-paper-2 p-6 sm:p-8 t-lead font-medium text-ink">
              Recently we moved a 300kg safe from an Al Nuaimiya villa to Al
              Helio 2. We used tracked dollies. There was no wall damage. There
              were no delays.
            </p>
          </div>
        </div>
      </section>

      <MovingProcess
        process={processSteps}
        title="Movers in Ajman Work Process"
        desc="We keep the moving process simple. Four clear steps to understand how our movers team work in ajman."
      />

      {/* ════ SAME-DAY & EMERGENCY ════ */}
      <section
        aria-labelledby="emergency-moving-heading"
        className="bg-paper-2 section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="emergency-moving-heading"
            title="Same-Day & Emergency Moving in Ajman"
            lead="We understand some moves can’t wait. Here’s how we handle urgent requests based on our actual setup."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {[
              {
                title: "Same-Day Service Depends On Crew Availability",
                body: "If you call early we try to send a team the same day. We are based in Sharjah so we reach Ajman quickly. But we never promise exact timing. We check our schedule honestly when you call. If we can help we give a fixed price right then. If not we tell you straight away.",
              },
              {
                title: "Emergency Moves For Urgent Situations",
                body: "For sudden needs like evictions or medical relocations we respond fast. Our Sharjah location means we are often closer than Ajman-based companies. We bring the same crew and materials as scheduled moves. We treat every emergency move with care—not just speed.",
              },
              {
                title: "No Extra Charge For Urgent Service",
                body: "Same-day or emergency moves use our standard pricing. You pay the same rate as a booked move. We don’t add rush fees or weekend surcharges. The price we give covers labor truck packing materials and basic reassembly—just like any other move.",
              },
            ].map((item, i) => (
              <article
                key={item.title}
                className={`border-t-2 pt-6 ${i === 2 ? "border-signal" : "border-ink"}`}
              >
                <h3 className="t-h4 text-ink">{item.title}</h3>
                <p className="mt-3 t-body text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>

          <div
            data-surface="dark"
            className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-xl bg-ink p-7 sm:p-9"
          >
            <div>
              <p className="t-h3 text-white">
                Need urgent moving support in Ajman right now?
              </p>
              <p className="mt-2 t-body text-fog">
                Call our dispatch directly for immediate availability and
                transparent pricing.
              </p>
            </div>
            <Button render={<a href="tel:0567277536" />} className="shrink-0">
              <Phone aria-hidden="true" />
              <span>Call 056 7277536</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ════ AREAS WE SERVE ════ */}
      <section aria-labelledby="areas-served-heading" className="section-y">
        <div className="wrap">
          <SectionHeader
            id="areas-served-heading"
            title="Areas We Serve Across Ajman"
            lead="We serve all neighborhoods in Ajman. Our team moves customers regularly in:"
          />
          <h3 className="mt-10 text-ink">
            We Serve All Neighborhoods in Ajman
          </h3>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 border-t border-ink">
            {areaList.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2.5 border-b border-line py-3.5"
              >
                <span
                  className="size-1.5 shrink-0 bg-signal"
                  aria-hidden="true"
                />
                <h4 className="t-body font-semibold text-ink">
                  Movers in {area}
                </h4>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-ink">
                Moving Between Ajman and Other Emirates
              </h3>
              <div className="mt-5 space-y-4 t-body text-muted-foreground measure">
                <p>We move customers from Ajman to every emirate in the UAE.</p>
                <p>
                  Our Sharjah base means Ajman to Dubai or Sharjah moves are
                  fast and simple.
                </p>
                <p>
                  For Abu Dhabi Ras Al Khaimah Umm Al Quwain Fujairah or Al Ain
                  we schedule based on availability.
                </p>
              </div>
              <p className="mt-6 rounded-xl bg-paper-2 p-6 t-body font-medium text-ink">
                Every cross-emirate move includes the same free survey fixed
                price and licensed insured service as local moves.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-paper-2">
                <Image
                  src="/al-afnan-furniture-transfer-sharjah.jpg"
                  alt="Moving between Ajman and other UAE Emirates — Al Afnan Furniture Transfer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ WHAT AFFECTS YOUR MOVING COST ════ */}
      <section
        aria-labelledby="moving-cost-factors-heading"
        className="bg-white section-y"
      >
        <div className="wrap">
          <SectionHeader
            id="moving-cost-factors-heading"
            title={
              <>
                What Affects Your <br /> Moving Cost in Ajman
              </>
            }
            lead="Moving costs change based on what we actually see during your free survey. We explain the key factors so you understand how we build your quote."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
            {[
              {
                n: "01",
                title: "Distance And Access Details",
                body: [
                  "A move purely within Ajman (e.g., Al Nuaimiya to Al Zahya) takes less time than one to another emirate.",
                  "Building access matters too: narrow streets in Al Jurf, limited parking near Ajman Corniche, or elevator bookings in Emirates City towers all affect truck time and labor.",
                  "We check these specifics during your no-obligation survey.",
                ],
              },
              {
                n: "02",
                title: "What You’re Moving And How Much",
                body: [
                  "A studio move with minimal furniture requires less truck space and packing material than a villa move with outdoor sets.",
                  "Heavy or fragile items (like pianos, safes, or glass cabinets) need special handling, extra padding, and sometimes disassembly/reassembly—this adds to the time and materials needed.",
                  "We note every item during our walkthrough to give you an accurate quote.",
                ],
              },
              {
                n: "03",
                title: "Your Service Choices Directly Shape The Price",
                body: [
                  "Basic service (loading transport unloading only) costs less than full packing/unpacking.",
                  "Adding furniture disassembly reassembly increases labor time.",
                  "You decide what fits your needs and we price only what you approve.",
                ],
              },
            ].map((f) => (
              <article key={f.n} className="reveal border-t-2 border-ink pt-6">
                <p className="t-label text-muted-foreground">
                  Factor{" "}
                  <span className="t-num text-2xl font-bold normal-case text-signal">
                    {f.n}
                  </span>
                </p>
                <h3 className="mt-3 text-ink">{f.title}</h3>
                <div className="mt-4 space-y-3 t-body text-muted-foreground">
                  {f.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Fixed price */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <h3 className="text-ink">How We Give You A Fixed Price</h3>
              <p className="mt-3 t-body text-muted-foreground">
                After your free survey:
              </p>
              <ol className="mt-5 border-t border-ink">
                {fixedPriceSteps.map((item, i) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-4"
                  >
                    <span
                      className="t-num text-2xl font-bold leading-none text-signal"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="t-body font-medium text-ink">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div
              data-surface="dark"
              className="lg:col-span-6 flex flex-col gap-6 rounded-xl bg-ink p-7 sm:p-9 text-fog"
            >
              <p className="t-lead font-semibold text-white">
                This price covers everything agreed upon—no hidden fees no
                surprises.
              </p>
              <p className="t-body">
                If your needs change after the survey we discuss adjustments
                openly before any work begins.
              </p>
              <Button
                render={
                  <a
                    href="https://wa.me/971567277536?text=Hi,%20I%20would%20like%20to%20request%20a%20free%20moving%20survey%20in%20Ajman"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="self-start"
              >
                <WhatsAppIcon />
                <span>Book Your Free Moving Survey</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-paper-2">
        <FAQSection
          faqs={AjmanFaqs}
          title="Questions About Moving in Ajman"
          layout="split"
        />
      </div>
      <CTASection
        heading="Ready to Move in Ajman?"
        paragraph="Available 24/7 for moves across Ajman. Get your free quote: Call 056 7277536 and talk it through with the team."
      />
    </SiteShell>
  );
}

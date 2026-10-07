import type { Metadata } from "next";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Internal review page for the redesign (Gate A). Remove before merging to master.
export const metadata: Metadata = {
  title: "Design system (internal)",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "ink", hex: "#0F1114", role: "Black bands, header, footer, headings", cls: "bg-ink", dark: true },
  { name: "ink-2", hex: "#1A1D22", role: "Raised surface on black", cls: "bg-ink-2", dark: true },
  { name: "paper", hex: "#F4F2EE", role: "Page background", cls: "bg-paper" },
  { name: "paper-2", hex: "#EAE7E1", role: "Alternate band, zebra rows", cls: "bg-paper-2" },
  { name: "white", hex: "#FFFFFF", role: "Form panels", cls: "bg-white" },
  { name: "signal", hex: "#C8321E", role: "Actions only · white text 5.34:1", cls: "bg-signal", dark: true },
  { name: "signal-hover", hex: "#A92717", role: "Hover / pressed", cls: "bg-signal-hover", dark: true },
  { name: "signal-bright", hex: "#FF5C45", role: "Red text on black · 6.18:1", cls: "bg-signal-bright" },
  { name: "steel", hex: "#2B2F36", role: "Body text · 12.0:1 on paper", cls: "bg-steel", dark: true },
  { name: "line", hex: "#D6D2CA", role: "Hairline rules", cls: "bg-line" },
];

const rows = [
  { n: "01", title: "House Movers in Sharjah", meta: "Home Relocation" },
  { n: "02", title: "Flat & Apartment Movers in Sharjah", meta: "Apartment Shifting" },
  { n: "03", title: "Villa Movers in Sharjah", meta: "Villa Relocation" },
];

export default function DesignSystemPage() {
  return (
    <div className="bg-paper text-steel">
      <header className="bg-ink text-paper">
        <div className="wrap py-10">
          <p className="t-label text-fog">Internal · Gate A</p>
          <h1 className="t-h2 text-white mt-2">Work Order design system</h1>
        </div>
      </header>

      {/* Palette */}
      <section className="wrap section-y">
        <h2 className="t-h2">Colour</h2>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-5 border-t border-line">
          {swatches.map((s) => (
            <li key={s.name} className="border-b border-e border-line p-4">
              <div className={`${s.cls} h-20 rounded-md border border-line`} />
              <p className="t-h4 text-ink mt-3">{s.name}</p>
              <p className="t-num text-sm text-muted-foreground">{s.hex}</p>
              <p className="t-small text-muted-foreground mt-1">{s.role}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Type */}
      <section className="bg-white border-y border-line">
        <div className="wrap section-y grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="t-h2">Type</h2>
            <p className="t-small text-muted-foreground mt-3">
              Barlow Condensed for headings and numerals. Barlow for reading.
            </p>
          </div>
          <div className="lg:col-span-9 space-y-10">
            <div>
              <p className="t-label text-muted-foreground">Display · H1</p>
              <p className="t-display text-ink mt-2">
                Movers in Sharjah
                <span className="block text-signal">Al Afnan Furniture Transfer</span>
              </p>
            </div>
            <div>
              <p className="t-label text-muted-foreground">H2</p>
              <p className="t-h2 text-ink mt-2">Our Moving Services in Sharjah</p>
            </div>
            <div>
              <p className="t-label text-muted-foreground">H3 · sentence case</p>
              <p className="t-h3 text-ink mt-2">
                What is included in our villa moving service in Sharjah
              </p>
            </div>
            <div className="max-w-[68ch]">
              <p className="t-label text-muted-foreground">Lead</p>
              <p className="t-lead text-ink mt-2">
                Al Afnan Furniture Transfer is a Sharjah based moving company providing
                reliable movers and packers in sharjah for homes, apartments, villas,
                offices, and furniture transfers.
              </p>
              <p className="t-label text-muted-foreground mt-6">Body</p>
              <p className="t-body mt-2">
                With 10 years of experience, transparent pricing with no hidden fees, and
                free moving estimates, we handle every relocation with care. Trusted Movers
                in Sharjah Serving all areas of Sharjah and across the UAE.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6 items-end">
              <div>
                <p className="t-label text-muted-foreground">Numerals</p>
                <p className="t-num text-5xl font-bold text-ink mt-2">056 7277536</p>
              </div>
              <div>
                <p className="t-num text-5xl font-bold text-signal">4.9/5</p>
              </div>
              <div>
                <p className="t-num text-5xl font-bold text-ink">10 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="wrap section-y">
        <h2 className="t-h2">Actions</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button>
            WhatsApp Us <ArrowRight />
          </Button>
          <Button variant="secondary">
            <Phone /> Call 056 7277536
          </Button>
          <Button variant="outline">View Our Service Areas</Button>
          <Button variant="link">request a free estimate</Button>
        </div>
        <div className="mt-6 bg-ink rounded-md p-6 flex flex-wrap gap-4">
          <Button>Get Your Free Sharjah Moving Estimate</Button>
          <Button variant="white">
            <Phone /> Call 056 7277536
          </Button>
          <Button variant="outline-light">View Our Service Areas</Button>
        </div>
      </section>

      {/* Ruled index (P2) + spec table (P3) */}
      <section className="bg-paper-2 border-y border-line">
        <div className="wrap section-y grid gap-12 lg:grid-cols-2">
          <div>
            <p className="t-label text-muted-foreground">P2 · Ruled index</p>
            <ol className="mt-4 border-t border-ink">
              {rows.map((r) => (
                <li key={r.n} className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-line py-5">
                  <span className="t-num text-2xl font-bold text-signal">{r.n}</span>
                  <span>
                    <span className="t-h3 text-ink block">{r.title}</span>
                    <span className="t-small text-muted-foreground">{r.meta}</span>
                  </span>
                  <ArrowRight className="size-5 text-ink" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="t-label text-muted-foreground">P3 · Spec table</p>
            <table className="mt-4 w-full border-collapse t-small">
              <thead>
                <tr className="bg-ink text-white">
                  <th scope="col" className="t-label text-start px-4 py-3">Move type</th>
                  <th scope="col" className="t-label text-start px-4 py-3">Typical scope</th>
                </tr>
              </thead>
              <tbody>
                {["Studio apartment", "2 bedroom apartment", "4 bedroom villa"].map((t, i) => (
                  <tr key={t} className={`border-b border-line ${i % 2 ? "bg-paper" : "bg-white"}`}>
                    <td className="px-4 py-3 font-semibold text-ink">{t}</td>
                    <td className="px-4 py-3 t-num text-lg font-bold text-ink">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Black band (P4) */}
      <section className="bg-ink text-paper">
        <div className="wrap section-y">
          <p className="t-label text-fog">P4 · Black band timeline</p>
          <h2 className="t-h2 text-white mt-3">How our moving process works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4 border-t border-ink-3">
            {["Free estimate", "Packing", "Loading & transport", "Unloading & placement"].map((s, i) => (
              <li key={s} className="pt-6 border-t-2 border-signal -mt-px">
                <span className="t-num text-5xl font-bold text-signal-bright">0{i + 1}</span>
                <p className="t-h3 text-white mt-3">{s}</p>
                <p className="t-small text-fog mt-2">Step description in fog grey, 9.6:1 on ink.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Form field */}
      <section className="wrap section-y max-w-2xl">
        <h2 className="t-h2">Form</h2>
        <label htmlFor="ds-name" className="block t-small font-semibold text-ink mt-6">
          Name *
        </label>
        <input
          id="ds-name"
          placeholder="Your Full Name"
          className="mt-1.5 w-full min-h-12 rounded-md border border-input bg-white px-3.5 text-base text-ink placeholder:text-muted-foreground focus-visible:border-ink"
        />
      </section>
    </div>
  );
}

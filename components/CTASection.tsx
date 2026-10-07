import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PHONE_HREF } from "@/lib/contact";

export interface CTASectionProps {
  /** Main heading */
  heading: React.ReactNode;
  /** Description (string or rich content) */
  paragraph: React.ReactNode;
  /** Form submit button text (default: "Get a Quote") */
  quoteButtonText?: string;
  /** Optional WhatsApp button, shown before the call button when set */
  whatsappButtonText?: string;
  whatsappButtonHref?: string;
  /** Call button text (default: "Call: 056 7277536") */
  callButtonText?: string;
  /** Call button link (default: tel link) */
  callButtonHref?: string;
  /** Optional extra classes on the section */
  className?: string;
}

const trustPoints = [
  "Free & Transparent Quotes",
  "No Hidden Handling Fees",
  "Serving All 7 Emirates",
];

/** End-of-page quote band: contact options on black, estimate form on white. */
export function CTASection({
  heading,
  paragraph,
  quoteButtonText = "Get a Quote",
  whatsappButtonText,
  whatsappButtonHref,
  callButtonText = "Call: 056 7277536",
  callButtonHref = PHONE_HREF,
  className = "",
}: CTASectionProps) {
  return (
    <section
      id="estimate"
      data-surface="dark"
      // Inside the centered "flow" layout the band gets rounded corners once it stops touching the screen edges.
      className={`scroll-mt-28 bg-ink text-fog min-[1400px]:in-data-[layout=flow]:rounded-xl ${className}`}
    >
      <div className="wrap section-y grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 lg:sticky lg:top-32">
          <h2 className="text-white">{heading}</h2>

          <div className="mt-5 t-lead measure">{paragraph}</div>

          <div className="mt-8 flex flex-wrap gap-3">
            {whatsappButtonText && whatsappButtonHref && (
              <Button render={<a href={whatsappButtonHref} target="_blank" rel="noopener noreferrer" />}>
                <WhatsAppIcon />
                <span>{whatsappButtonText}</span>
              </Button>
            )}
            <Button
              variant={whatsappButtonText ? "outline-light" : "default"}
              render={<a href={callButtonHref} />}
            >
              <Phone />
              <span>{callButtonText}</span>
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 border-t border-ink-3 pt-6 t-small">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="h-0.5 w-5 shrink-0 bg-signal" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <QuoteForm quoteButtonText={quoteButtonText} callButtonHref={callButtonHref} />
        </div>
      </div>
    </section>
  );
}

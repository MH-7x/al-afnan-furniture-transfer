"use client";

import { useId, useState } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contact";

const field =
  "w-full min-h-12 rounded-md border border-input bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted-foreground transition-colors focus:outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink/15";
const label = "block t-small font-semibold text-ink mb-1.5";

/**
 * Estimate form. On submit it opens WhatsApp with the details pre-filled,
 * so the request reaches the team directly (there is no form backend).
 */
export function QuoteForm({
  quoteButtonText,
  callButtonHref,
  description = "Fill in your move details below for an upfront quote with no hidden fees.",
}: {
  quoteButtonText: string;
  callButtonHref: string;
  /** Line under the form heading. */
  description?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  // Namespaced so a page can render more than one of these forms.
  const uid = useId();
  const fieldId = (name: string) => `quote-${name}-${uid}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      ["Name", data.get("name")],
      ["Phone No", data.get("phone")],
      ["Moving From", data.get("from")],
      ["Moving To", data.get("to")],
      ["Date", data.get("date")],
      ["Message", data.get("message")],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setSubmitted(true);
  };

  return (
    <div data-surface="light" className="rounded-xl bg-white p-6 sm:p-8 text-steel">
      <div className="mb-6 border-b border-line pb-5">
        <h3 className="text-ink">Get a Fast Moving Estimate</h3>
        <p className="mt-1.5 t-small text-muted-foreground">{description}</p>
      </div>

      {submitted ? (
        <div className="py-6 text-center" role="status">
          <CheckCircle2 className="mx-auto size-10 text-signal" aria-hidden="true" />
          <h4 className="mt-4 text-ink">Estimate Request Received!</h4>
          <p className="mx-auto mt-2 max-w-sm t-small text-muted-foreground">
            Thank you. Our team will review your moving details and
            contact you shortly with your transparent quote.
          </p>
          <Button render={<a href={callButtonHref} />} className="mt-5">
            <Phone />
            <span>Need Urgent Help? Call Us</span>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={fieldId("name")} className={label}>Name *</label>
              <input type="text" id={fieldId("name")} name="name" autoComplete="name" required placeholder="Your Full Name" className={field} />
            </div>
            <div>
              <label htmlFor={fieldId("phone")} className={label}>Phone No *</label>
              <input type="tel" id={fieldId("phone")} name="phone" autoComplete="tel" inputMode="tel" required placeholder="056 7277536" className={field} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={fieldId("from")} className={label}>Moving From *</label>
              <input type="text" id={fieldId("from")} name="from" required placeholder="e.g. Al Majaz, Sharjah" className={field} />
            </div>
            <div>
              <label htmlFor={fieldId("to")} className={label}>Moving To *</label>
              <input type="text" id={fieldId("to")} name="to" required placeholder="e.g. Dubai / Al Nahda" className={field} />
            </div>
          </div>
          <div>
            <label htmlFor={fieldId("date")} className={label}>Date *</label>
            <input type="date" id={fieldId("date")} name="date" required className={field} />
          </div>
          <div>
            <label htmlFor={fieldId("message")} className={label}>Message</label>
            <textarea
              id={fieldId("message")}
              name="message"
              rows={3}
              placeholder="Tell us about the property type, key furniture items, or packing services needed..."
              className={`${field} resize-y`}
            />
          </div>
          <Button type="submit" className="w-full">
            <span>{quoteButtonText}</span>
            <Send />
          </Button>
        </form>
      )}
    </div>
  );
}

export default QuoteForm;

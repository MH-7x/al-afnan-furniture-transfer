"use client";

import { useActionState, useId } from "react";
import { Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendQuote } from "@/actions/send-quote";
import { initialQuoteState, type QuoteFieldName } from "@/lib/Quote";

const field =
  "w-full min-h-12 rounded-md border border-input bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-muted-foreground transition-colors focus:outline-none focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ink/15 aria-invalid:border-signal aria-invalid:ring-2 aria-invalid:ring-signal/20";
const label = "block t-small font-semibold text-ink mb-1.5";

/**
 * The interactive part of the estimate form: validation messages, the pending
 * state and the success card. Rendered inside the server-side `QuoteForm`.
 */
export function QuoteFormBody({
  quoteButtonText,
  callButtonHref,
}: {
  quoteButtonText: string;
  callButtonHref: string;
}) {
  const [state, formAction, pending] = useActionState(
    sendQuote,
    initialQuoteState,
  );
  // Namespaced so a page can render more than one of these forms.
  const uid = useId();
  const fieldId = (name: QuoteFieldName) => `quote-${name}-${uid}`;
  const errorId = (name: QuoteFieldName) => `quote-${name}-error-${uid}`;
  // Shared input wiring: id, name, the value kept after a failed submit, and
  // the error association for assistive tech.
  const fieldProps = (name: QuoteFieldName) => ({
    id: fieldId(name),
    name,
    defaultValue: state.values[name],
    "aria-invalid": state.errors[name] ? true : undefined,
    "aria-describedby": state.errors[name] ? errorId(name) : undefined,
  });
  const fieldError = (name: QuoteFieldName) =>
    state.errors[name] ? (
      <p id={errorId(name)} className="mt-1.5 t-small font-medium text-signal">
        {state.errors[name]}
      </p>
    ) : null;

  return (
    <>
      {state.status === "success" ? (
        <div className="py-6 text-center" role="status">
          <CheckCircle2
            className="mx-auto size-10 text-signal"
            aria-hidden="true"
          />
          <h4 className="mt-4 text-ink">Estimate Request Received!</h4>
          <p className="mx-auto mt-2 max-w-sm t-small text-muted-foreground">
            Thank you. Our team will review your moving details and contact you
            shortly with your transparent quote.
          </p>
          <Button render={<a href={callButtonHref} />} className="mt-5">
            <Phone />
            <span>Need Urgent Help? Call Us</span>
          </Button>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          {/* Honeypot: hidden from people, filled in by bots. */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          >
            <label>
              Company
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          {state.status === "error" && state.message && (
            <p
              role="alert"
              className="rounded-md border border-signal/40 bg-signal/5 px-3.5 py-2.5 t-small font-medium text-ink"
            >
              {state.message}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={fieldId("name")} className={label}>
                Name *
              </label>
              <input
                type="text"
                {...fieldProps("name")}
                autoComplete="name"
                required
                placeholder="Your Full Name"
                className={field}
              />
              {fieldError("name")}
            </div>
            <div>
              <label htmlFor={fieldId("phone")} className={label}>
                Phone No *
              </label>
              <input
                type="tel"
                {...fieldProps("phone")}
                autoComplete="tel"
                inputMode="tel"
                required
                placeholder="056 7277536"
                className={field}
              />
              {fieldError("phone")}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={fieldId("from")} className={label}>
                Moving From *
              </label>
              <input
                type="text"
                {...fieldProps("from")}
                required
                placeholder="e.g. Al Majaz, Sharjah"
                className={field}
              />
              {fieldError("from")}
            </div>
            <div>
              <label htmlFor={fieldId("to")} className={label}>
                Moving To *
              </label>
              <input
                type="text"
                {...fieldProps("to")}
                required
                placeholder="e.g. Dubai / Al Nahda"
                className={field}
              />
              {fieldError("to")}
            </div>
          </div>
          <div>
            <label htmlFor={fieldId("date")} className={label}>
              Date *
            </label>
            <input
              type="date"
              {...fieldProps("date")}
              required
              className={field}
            />
          </div>
          <div>
            <label htmlFor={fieldId("message")} className={label}>
              Message
            </label>
            <textarea
              {...fieldProps("message")}
              rows={3}
              placeholder="Tell us about the property type, key furniture items, or packing services needed..."
              className={`${field} resize-y`}
            />
          </div>
          <Button type="submit" disabled={pending} className="w-full">
            <span>{pending ? "Sending…" : quoteButtonText}</span>
            <Send />
          </Button>
        </form>
      )}
    </>
  );
}

export default QuoteFormBody;

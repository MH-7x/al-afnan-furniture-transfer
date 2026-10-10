import { QuoteFormBody } from "@/components/QuoteFormBody";

/**
 * Estimate form card. The card and heading render on the server; the form
 * itself (`QuoteFormBody`) is the only client code, since it needs action
 * state for errors, the pending state and the success message.
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
  return (
    <div
      data-surface="light"
      className="rounded-xl bg-white p-6 sm:p-8 text-steel"
    >
      <div className="mb-6 border-b border-line pb-5">
        <h3 className="text-ink">Get a Fast Moving Estimate</h3>
        <p className="mt-1.5 t-small text-muted-foreground">{description}</p>
      </div>

      <QuoteFormBody
        quoteButtonText={quoteButtonText}
        callButtonHref={callButtonHref}
      />
    </div>
  );
}

export default QuoteForm;

export type QuoteFieldName = "name" | "phone" | "from" | "to" | "date" | "message";

export interface QuoteFormState {
  status: "idle" | "success" | "error";
  message: string;
  /** Per-field messages, keyed by input name. */
  errors: Partial<Record<QuoteFieldName, string>>;
  /** Submitted values, so a failed submit doesn't wipe what the visitor typed. */
  values: Partial<Record<QuoteFieldName, string>>;
}

export const initialQuoteState: QuoteFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};

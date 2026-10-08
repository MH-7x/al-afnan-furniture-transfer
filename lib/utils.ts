import { whatsappLink } from "./contact";

export { cn } from "cn";
export const WHATSAPP_QUOTE = whatsappLink(
  "Hi, I would like a free moving quote in the UAE",
);
export const WHATSAPP_CHOOSE = whatsappLink(
  "Hi, I need help choosing a moving service in the UAE",
);
export const WHATSAPP_EXACT = whatsappLink(
  "Hi, I'd like an exact moving quote in the UAE. I'm sending photos now.",
);
export const WHATSAPP_BOOK = whatsappLink(
  "Hi, I would like to book a move in the UAE",
);
export const WHATSAPP_QUESTION = whatsappLink(
  "Hi, I have a question about my UAE move",
);

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
export function datePublished(details: string[]): string | undefined {
  for (const detail of details) {
    const [month, year] = detail.toLowerCase().split(" ");
    const index = MONTHS.indexOf(month);
    if (index >= 0 && /^\d{4}$/.test(year ?? "")) {
      return `${year}-${String(index + 1).padStart(2, "0")}`;
    }
  }
  return undefined;
}

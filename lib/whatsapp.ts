const WHATSAPP_NUMBER = "971567277536";

/** wa.me link that opens a chat with a pre-filled message. */
export const whatsappLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

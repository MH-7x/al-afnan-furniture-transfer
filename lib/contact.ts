/** Single source for contact details used across the site. */
export const PHONE_DISPLAY = "056 7277536";
export const PHONE_HREF = "tel:0567277536";

export const WHATSAPP_NUMBER = "971567277536";
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

export const EMAIL = "afanfurnituretransfer@gmail.com";

export const ADDRESS = "Jamal Abdul Naser St, near Al Majaz 2 - Al Majaz 2 - Al Majaz, Sharjah";
export const MAPS_HREF =
  "https://maps.google.com/?q=Jamal+Abdul+Naser+St+near+Al+Majaz+2+Al+Majaz+Sharjah";

export const HOURS = "Sun To Fri, Open 24 hours. Sat, 9 AM–5 PM";

/** wa.me link that opens a chat with a pre-filled message. */
export const whatsappLink = (text: string) =>
  `${WHATSAPP_HREF}?text=${encodeURIComponent(text)}`;

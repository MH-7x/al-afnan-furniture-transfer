"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";

/**
 * Mobile-only Call + WhatsApp bar pinned to the bottom of the screen.
 * Slides away while the quote form (#estimate) is on screen so it never covers it.
 */
export function StickyContactBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById("estimate");
    if (!form) return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-xl lg:hidden motion-safe:transition-transform motion-safe:duration-200 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      inert={hidden}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={PHONE_HREF}
          className="flex min-h-13 items-center justify-center gap-2 rounded-md bg-ink px-3 font-semibold text-white"
        >
          <Phone className="size-4.5 shrink-0" aria-hidden="true" />
          <span>Call {PHONE_DISPLAY}</span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-13 items-center justify-center gap-2 rounded-md bg-signal px-3 font-semibold text-white"
        >
          <WhatsAppIcon className="size-5 shrink-0" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}

export default StickyContactBar;

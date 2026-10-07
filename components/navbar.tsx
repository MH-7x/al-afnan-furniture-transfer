import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicesLinks } from "@/components/ServicesLinks";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { HOURS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from "@/lib/contact";
import type { Region } from "@/lib/servicesNav";

const locations = [
  { name: "Movers in Dubai", href: "/movers-and-packer-in-dubai" },
  { name: "Movers in Sharjah", href: "/" },
  { name: "Movers in Ajman", href: "/movers-in-ajman" },
  { name: "Movers in Ras Al Khaimah", href: "/movers-in-ras-al-khaimah" },
];

const navLink =
  "inline-flex items-center gap-1.5 py-2 font-semibold text-ink hover:text-signal transition-colors";

// Hover/focus-within dropdown panel shared by Locations and Services.
const dropdownPanel =
  "absolute start-0 top-full z-50 pt-3 opacity-0 invisible -translate-y-1 transition duration-150 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto";

/** `region` picks which services the Services menu lists (default: Sharjah). */
export function Navbar({ region = "sharjah" }: { region?: Region }) {
  return (
    <>
      {/* Info strip: hours and phone. Scrolls away; the header below stays. */}
      <div data-surface="dark" className="bg-ink text-fog t-small">
        <div className="wrap flex min-h-10 items-center justify-center sm:justify-between gap-6 py-1.5">
          <p className="hidden sm:flex items-center gap-2">
            <Clock className="size-4 text-signal-bright" aria-hidden="true" />
            <span>{HOURS}</span>
          </p>
          <address className="not-italic flex items-center gap-2">
            <span>Call Us Today</span>
            <a
              href={PHONE_HREF}
              className="t-num text-lg font-bold text-white hover:text-signal-bright transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </address>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-line bg-white">
        <nav aria-label="Main Navigation" className="wrap relative flex h-18 lg:h-20 items-center gap-6">
          <Link
            href="/"
            className="shrink-0 flex items-center rounded-sm"
            aria-label="Al Afan Furniture Transfer Home"
          >
            <Image
              src="/logo.svg"
              alt="Al Afan Furniture Transfer"
              width={260}
              height={58}
              loading="eager"
              className="h-9 sm:h-11 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7 ms-auto">
            <li>
              <Link href="/" className={navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={navLink}>
                About Us
              </Link>
            </li>
            <li className="relative group">
              <button type="button" className={`${navLink} cursor-pointer`} aria-haspopup="true">
                <span>Locations</span>
                <ChevronDown
                  className="size-4 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className={dropdownPanel}>
                <ul className="w-64 rounded-xl border border-line bg-white p-2 shadow-xl">
                  {locations.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center rounded-sm px-3 py-2.5 font-medium text-ink hover:bg-paper-2 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button type="button" className={`${navLink} cursor-pointer`} aria-haspopup="true">
                <span>Services</span>
                <ChevronDown
                  className="size-4 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div className={dropdownPanel}>
                <ul className="w-64 rounded-xl border border-line bg-white p-2 shadow-xl">
                  <ServicesLinks variant="desktop" region={region} />
                </ul>
              </div>
            </li>
            <li>
              <Link href="/contact-us" className={navLink}>
                Contact Us
              </Link>
            </li>
          </ul>

          <Button
            render={<a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" />}
            className="hidden sm:inline-flex ms-auto lg:ms-0"
          >
            <WhatsAppIcon />
            <span>WhatsApp Us</span>
          </Button>

          {/* Mobile menu: <details> keeps this a server component and works without JS */}
          <details className="group/mobile lg:hidden ms-auto sm:ms-0 [&_summary::-webkit-details-marker]:hidden">
            <summary
              aria-label="Menu"
              className="list-none flex size-12 items-center justify-center rounded-md border border-ink/20 text-ink cursor-pointer select-none hover:border-ink"
            >
              <Menu className="size-6 group-open/mobile:hidden" aria-hidden="true" />
              <X className="size-6 hidden group-open/mobile:block" aria-hidden="true" />
            </summary>

            <div className="absolute inset-x-0 top-full border-b border-line bg-white shadow-xl">
              <ul className="wrap flex flex-col py-4 text-lg">
                <li>
                  <Link href="/" className="block py-3 font-semibold text-ink">
                    Home
                  </Link>
                </li>
                <li className="border-t border-line">
                  <Link href="/about-us" className="block py-3 font-semibold text-ink">
                    About Us
                  </Link>
                </li>
                <li className="border-t border-line">
                  <details className="group/loc [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between py-3 font-semibold text-ink cursor-pointer list-none select-none">
                      <span>Locations</span>
                      <ChevronDown className="size-5 transition-transform group-open/loc:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="mb-3 ms-1 border-s-2 border-signal ps-4 text-base">
                      {locations.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="block py-2 text-ink hover:text-signal">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li className="border-t border-line">
                  <details className="group/srv [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between py-3 font-semibold text-ink cursor-pointer list-none select-none">
                      <span>Services</span>
                      <ChevronDown className="size-5 transition-transform group-open/srv:rotate-180" aria-hidden="true" />
                    </summary>
                    <ul className="mb-3 ms-1 border-s-2 border-signal ps-4 text-base">
                      <ServicesLinks variant="mobile" region={region} />
                    </ul>
                  </details>
                </li>
                <li className="border-t border-line">
                  <Link href="/contact-us" className="block py-3 font-semibold text-ink">
                    Contact Us
                  </Link>
                </li>
                <li className="border-t border-line pt-4 t-small text-muted-foreground">
                  <p className="font-semibold text-ink">Opening Hours:</p>
                  <p className="mt-0.5">{HOURS}</p>
                </li>
              </ul>
            </div>
          </details>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

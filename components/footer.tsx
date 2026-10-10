import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { ServicesLinks } from "@/components/ServicesLinks";
import {
  ADDRESS,
  EMAIL,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/contact";
import type { Region } from "@/lib/servicesNav";

const colTitle = "t-label text-white";
const colLink = "text-fog hover:text-white transition-colors";
const social =
  "flex size-11 items-center justify-center rounded-md border border-ink-3 text-white hover:border-white transition-colors";

/** `region` picks which services the "Our Services" column lists (default: Sharjah). */
export function Footer({
  searches,
  region = "sharjah",
}: {
  searches?: string[];
  region?: Region;
}) {
  return (
    <footer
      data-surface="dark"
      className="w-full border-t border-ink-3 bg-ink text-fog relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="-z-2 pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="-z-2 pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="-z-2 pointer-events-none absolute -right-8 -bottom-16 size-56 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="-z-2 absolute inset-y-0 top-0 h-1.5 bg-primary"
      />

      <div className="wrap py-16 lg:py-20 z-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand & social */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              href="/"
              className="inline-block rounded-sm"
              aria-label="Al Afan Furniture Transfer Home"
            >
              <Image
                src="/logo-white.svg"
                alt="Al Afan Furniture Transfer"
                width={240}
                height={52}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm t-small">
              Quam pharetra lobortis integer magna aliquam rhoncus arcu
              porttitor eget augue. Maximus fusce pharetra molestie accumsan
              habitant metus tincidunt.
            </p>

            <div className="mt-8">
              <span className="block t-small font-semibold text-white">
                Connect with us
              </span>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={social}
                >
                  <svg
                    className="size-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className={social}
                >
                  <svg
                    className="size-3.5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={social}
                >
                  <svg
                    className="size-4 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={social}
                >
                  <svg
                    className="size-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Locations (currently holds the policy links) */}
          <div className="lg:col-span-2">
            <h3 className={colTitle}>Locations</h3>
            <ul className="mt-5 space-y-3 t-small">
              <li>
                <Link href="/movers-and-packer-in-dubai" className={colLink}>
                  Movers in Dubai
                </Link>
              </li>
              <li>
                <Link href="/movers-in-sharjah" className={colLink}>
                  Movers in Sharjah
                </Link>
              </li>
              <li>
                <Link href="/movers-in-ajman" className={colLink}>
                  Movers in Ajman
                </Link>
              </li>
              <li>
                <Link href="/movers-in-ras-al-khaimah" className={colLink}>
                  Movers in Ras Al Khaimah
                </Link>
              </li>
              <li>
                <Link href="/" className={colLink}>
                  Movers and Packers
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful links */}
          <div className="lg:col-span-2">
            <h3 className={colTitle}>Useful Links</h3>
            <ul className="mt-5 space-y-3 t-small">
              <li>
                <Link href="/about-us" className={colLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className={colLink}>
                  Our Contact
                </Link>
              </li>
              <li>
                <Link href="/#services" className={colLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className={colLink}>
                  Free Quote
                </Link>
              </li>
              <li>
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={colLink}
                >
                  Map Location
                </a>
              </li>
            </ul>
          </div>

          {/* Region-aware services */}
          <div className="lg:col-span-2">
            <h3 className={colTitle}>Our Services</h3>
            <ul className="mt-5 space-y-3 t-small">
              <ServicesLinks variant="footer" region={region} />
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className={colTitle}>Contact Us</h3>
            <address className="not-italic mt-5 space-y-5 t-small">
              <div className="flex gap-3">
                <Phone
                  className="mt-0.5 size-4.5 shrink-0 text-signal-bright"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-fog">Phone No</span>
                  <a
                    href={PHONE_HREF}
                    className="t-num text-lg font-bold text-white hover:text-signal-bright transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail
                  className="mt-0.5 size-4.5 shrink-0 text-signal-bright"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span className="block text-fog">Email</span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-white [overflow-wrap:anywhere] hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4.5 shrink-0 text-signal-bright"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-fog">Address</span>
                  <a
                    href={MAPS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:underline"
                  >
                    {ADDRESS}
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-ink-3 z-10">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-4 py-5 t-small">
          <p className="text-center md:text-start">
            Copyright &copy; 2026 Al Afnan Furniture Transfer. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>Dev. by Mashal Huraira</span>
            <span className="text-ink-3" aria-hidden="true">
              |
            </span>
            <Link
              href="/privacy-policy"
              className="hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-ink-3" aria-hidden="true">
              |
            </span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white hover:underline"
            >
              Terms
            </Link>
            <span className="text-ink-3" aria-hidden="true">
              |
            </span>

            <a
              href="#top"
              aria-label="Scroll to top"
              className="ms-2 flex size-11 items-center justify-center rounded-md border border-ink-3 text-white hover:border-white transition-colors"
            >
              <ArrowUp className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <details className="group border-t border-ink-3 [&_summary::-webkit-details-marker]:hidden">
        <summary className="wrap cursor-pointer list-none py-3 text-center t-small text-fog hover:text-white">
          popular searches
        </summary>
        <div className="wrap flex flex-wrap justify-center gap-x-4 gap-y-1 pb-6 t-small">
          {searches?.map((search, index) => (
            <p key={index}>{search}</p>
          ))}
        </div>
      </details>
    </footer>
  );
}

export default Footer;

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
              aria-label="Al Afnan Movers and Packers Home"
            >
              <Image
                src="/logo-white.svg"
                alt="Al Afnan Movers and Packers"
                width={240}
                height={52}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm t-small">
              Al Afnan Movers and Packers is a licensed and insured moving
              company based in Al Majaz, Sharjah. Since 2015, our crews have
              moved homes, villas and offices across all 7 UAE emirates, 24
              hours a day.
            </p>

            <div className="mt-8">
              <span className="block t-small font-semibold text-white">
                Connect with us
              </span>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/alafnanmoversandpackers.ae"
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
                  href="https://x.com/alafnanmovers"
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
                  href="https://www.instagram.com/alafnanmoversandpackers.ae/"
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
                  href="https://www.pinterest.com/alafnanmoversandpackers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className={social}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.697-2.433-2.881-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.223 7.462-1.214 0-2.35-.63-2.74-1.379l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
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
                <Link href="/movers-and-packers-in-dubai" className={colLink}>
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mashalhuraira.vercel.app"
            >
              Dev. by Mashal Huraira
            </a>
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

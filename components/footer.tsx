import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export function Footer({ searches }: { searches?: string[] }) {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-8 lg:gap-12">
            {/* Column 1: Brand & Social Links */}
            <div className="flex flex-col md:col-span-3">
              <Link
                href="/"
                className="inline-block shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
                aria-label="Al Afan Furniture Transfer Home"
              >
                <Image
                  src="/logo-white.svg"
                  alt="Al Afan Furniture Transfer"
                  width={240}
                  height={52}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-sm">
                Quam pharetra lobortis integer magna aliquam rhoncus arcu
                porttitor eget augue. Maximus fusce pharetra molestie accumsan
                habitant metus tincidunt.
              </p>

              <div className="mt-6">
                <span className="block text-white font-semibold text-base mb-3">
                  Connect with us
                </span>
                <div className="flex items-center gap-2.5">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="size-10 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="size-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>

                  {/* X (formerly Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="size-10 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="size-3.5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="size-10 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
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

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="size-10 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
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

            {/* Column 2: Locations */}
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold text-xl tracking-tight">
                Locations
              </h3>
              <div
                className="w-10 h-1 bg-secondary rounded-full mt-2 mb-5"
                aria-hidden="true"
              />
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    FAQ&apos;s
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold text-xl tracking-tight">
                Useful Links
              </h3>
              <div
                className="w-10 h-1 bg-secondary rounded-full mt-2 mb-5"
                aria-hidden="true"
              />
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Our Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="md:col-span-3">
              <h3 className="text-white font-semibold text-xl tracking-tight">
                Contact Us
              </h3>
              <div
                className="w-10 h-1 bg-secondary rounded-full mt-2 mb-5"
                aria-hidden="true"
              />
              <address className="not-italic space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div
                    className="size-11 rounded-xl border border-white/30 flex items-center justify-center text-white shrink-0"
                    aria-hidden="true"
                  >
                    <Phone className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/80 leading-tight">
                      Phone No
                    </span>
                    <a
                      href="tel:0567277536"
                      className="text-sm font-semibold text-white hover:text-secondary transition-colors mt-0.5"
                    >
                      056 7277536
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div
                    className="size-11 rounded-xl border border-white/30 flex items-center justify-center text-white shrink-0"
                    aria-hidden="true"
                  >
                    <Mail className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/80 leading-tight">
                      Email
                    </span>
                    <a
                      href="mailto:afanfurnituretransfer@gmail.com"
                      className="text-sm font-semibold text-white hover:text-secondary transition-colors mt-0.5 break-all"
                    >
                      afanfurnituretransfer@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div
                    className="size-11 rounded-xl border border-white/30 flex items-center justify-center text-white shrink-0"
                    aria-hidden="true"
                  >
                    <MapPin className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/80 leading-tight">
                      Address
                    </span>
                    <a
                      href="https://maps.google.com/?q=Jamal+Abdul+Naser+St+near+Al+Majaz+2+Al+Majaz+Sharjah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-secondary transition-colors leading-snug mt-0.5"
                    >
                      Jamal Abdul Naser St, near Al Majaz 2 - Al Majaz 2 - Al
                      Majaz, Sharjah
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            {/* Copyright */}
            <p className="font-medium text-center md:text-left">
              Copyright &copy; 2026 Al Afnan Furniture Transfer. All rights
              reserved.
            </p>

            {/* Links & Scroll to top */}
            <div className="flex items-center gap-3 sm:gap-4 font-medium flex-wrap justify-center">
              <span>Dev. by Mashal Huraira</span>
              <span className="text-secondary-foreground/40" aria-hidden="true">
                |
              </span>
              <Link href="#" className="hover:underline transition-colors">
                Privacy Policy
              </Link>
              <span className="text-secondary-foreground/40" aria-hidden="true">
                |
              </span>
              <Link href="#" className="hover:underline transition-colors">
                Cookie Policy
              </Link>

              {/* Scroll to top button */}
              <a
                href="#top"
                aria-label="Scroll to top"
                className="size-9 sm:size-10 rounded-full bg-white/25 hover:bg-white/35 text-white flex items-center justify-center transition-colors ml-1 sm:ml-2 shadow-xs"
              >
                <ArrowUp className="size-5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <details className="group py-1 [&_summary::-webkit-details-marker]:hidden flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        <summary>popular searches</summary>
        <div className="flex flex-wrap items-center justify-center gap-1">
          {searches?.map((search, index) => (
            <p key={index} className="hover:underline cursor-pointer">
              {search}
            </p>
          ))}
        </div>
      </details>
    </footer>
  );
}

export default Footer;

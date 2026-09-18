import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown, ArrowRight, Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  { name: "Movers in Dubai", href: "#" },
  { name: "Movers in Ajman", href: "#" },
  { name: "Movers in Ras Al Khaimah", href: "#" },
];

const services = [
  { name: "House Movers", href: "/house-movers-in-sharjah" },
  {
    name: "Apartment Movers",
    href: "/apartment-movers-in-sharjah",
  },
  { name: "Villa Movers", href: "/villa-movers-in-sharjah" },
  { name: "Office Movers", href: "/office-movers-in-sharjah" },
  {
    name: "Furniture Transfer",
    href: "/furniture-transfer-in-sharjah",
  },
  {
    name: "Packing Services",
    href: "/packing-services-in-sharjah",
  },
];

export function Navbar() {
  return (
    <>
      {/* Upper Header Bar (scrolls away naturally) */}
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2.5">
          <div className="flex items-center md:justify-between justify-center gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="shrink-0 flex items-center transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label="Al Afan Furniture Transfer Home"
            >
              <Image
                src="/logo.svg"
                alt="Al Afan Furniture Transfer"
                width={260}
                height={58}
                priority
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Quick Contact & Working Hours (Desktop) */}
            <div className="hidden md:flex items-center gap-3 sm:gap-6 lg:gap-8">
              {/* Call Us Today */}
              <address className="not-italic flex items-center gap-2.5 sm:gap-3">
                <div
                  className="size-10 sm:size-11 md:size-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-xs"
                  aria-hidden="true"
                >
                  <Phone className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-semibold text-xs sm:text-sm leading-tight">
                    Call Us Today
                  </span>
                  <a
                    href="tel:0567277536"
                    className="text-foreground font-semibold text-sm sm:text-base md:text-lg tracking-tight hover:text-primary transition-colors"
                  >
                    056 7277536
                  </a>
                </div>
              </address>

              {/* Vertical Separator */}
              <div
                className="hidden md:block h-9 w-px bg-border"
                aria-hidden="true"
              />

              {/* Address */}
              <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
                <div
                  className="size-10 sm:size-11 md:size-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-xs"
                  aria-hidden="true"
                >
                  <MapPin className="size-4 sm:size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-semibold text-xs sm:text-sm leading-tight">
                    Address
                  </span>
                  <a
                    href="https://maps.google.com/?q=Jamal+Abdul+Naser+St+near+Al+Majaz+2+Al+Majaz+Sharjah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground text-sm hover:text-primary transition-colors"
                  >
                    Jamal Abdul Naser St - near Al Majaz 2 <br /> Al Majaz 2 -
                    Al Majaz - Sharjah
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Sticky at top on scroll) */}
      <header className="sticky top-0 z-50 w-full ">
        <nav
          aria-label="Main Navigation"
          className="relative bg-primary text-white  px-4 sm:px-6 lg:px-16 py-2.5 lg:py-3.5 shadow-md flex items-center justify-between"
        >
          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-7 xl:gap-8">
            {/* Home */}
            <li>
              <Link
                href="/"
                className="font-semibold text-sm xl:text-base text-white hover:text-secondary transition-colors"
              >
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link
                href="#"
                className="font-semibold text-sm xl:text-base text-white hover:text-secondary transition-colors"
              >
                About Us
              </Link>
            </li>

            {/* Locations (Dropdown) */}
            <li className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 font-semibold text-sm xl:text-base text-white hover:text-secondary transition-colors cursor-pointer py-1"
                aria-haspopup="true"
              >
                <span>Locations</span>
                <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              {/* Locations Dropdown Menu */}
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                <ul className="w-60 rounded-xl bg-card border border-border p-2 shadow-xl">
                  {locations.map((item, idx) => (
                    <li key={`${item.name}-${idx}`}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Services (Dropdown) */}
            <li className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 font-semibold text-sm xl:text-base text-white hover:text-secondary transition-colors cursor-pointer py-1"
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              {/* Services Dropdown Menu */}
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                <ul className="w-60 rounded-xl bg-card border border-border p-2 shadow-xl">
                  {services.map((item, idx) => (
                    <li key={`${item.name}-${idx}`}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Contact Us */}
            <li>
              <Link
                href="#"
                className="font-semibold text-sm xl:text-base text-white hover:text-secondary transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle (Semantic HTML Details/Summary, 100% Server Component) */}
          <div className="lg:hidden flex items-center">
            <details className="group/mobile">
              <summary className="list-none px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 text-white cursor-pointer select-none ">
                <Menu className="size-7 block group-open/mobile:hidden" />
                <X className="size-7 hidden group-open/mobile:block" />
              </summary>

              {/* Mobile Drawer */}
              <div className="absolute left-0 right-0 top-full mt-2 mx-4 z-50 rounded-2xl bg-primary text-white p-5 shadow-2xl border border-white/20">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      className="block py-2 text-base font-semibold text-white hover:text-secondary transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block py-2 text-base font-semibold text-white hover:text-secondary transition-colors"
                    >
                      About Us
                    </Link>
                  </li>

                  {/* Locations Accordion */}
                  <li className="border-t border-white/10 pt-2">
                    <details className="group/loc">
                      <summary className="flex items-center justify-between py-2 text-base font-semibold text-white cursor-pointer list-none select-none">
                        <span>Locations</span>
                        <ChevronDown className="size-4 transition-transform duration-200 group-open/loc:rotate-180" />
                      </summary>
                      <ul className="mt-1 pl-3 space-y-1.5 border-l-2 border-secondary/60 ml-1">
                        {locations.map((item, idx) => (
                          <li key={`mobile-${item.name}-${idx}`}>
                            <Link
                              href={item.href}
                              className="block py-1 text-sm text-white/90 hover:text-secondary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>

                  {/* Services Accordion */}
                  <li className="border-t border-white/10 pt-2">
                    <details className="group/srv">
                      <summary className="flex items-center justify-between py-2 text-base font-semibold text-white cursor-pointer list-none select-none">
                        <span>Services</span>
                        <ChevronDown className="size-4 transition-transform duration-200 group-open/srv:rotate-180" />
                      </summary>
                      <ul className="mt-1 pl-3 space-y-1.5 border-l-2 border-secondary/60 ml-1">
                        {services.map((item, idx) => (
                          <li key={`mobile-${item.name}-${idx}`}>
                            <Link
                              href={item.href}
                              className="block py-1 text-sm text-white/90 hover:text-secondary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>

                  <li className="border-t border-white/10 pt-2">
                    <Link
                      href="#"
                      className="block py-2 text-base font-semibold text-white hover:text-secondary transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>

                  {/* Mobile Hours Info */}
                  <li className="border-t border-white/10 pt-3 text-xs text-white/80 md:hidden">
                    <p className="font-semibold text-secondary">
                      Opening Hours:
                    </p>
                    <p className="mt-0.5">
                      Sun To Fri, Open 24 hours. Sat, 9 AM–5 PM
                    </p>
                  </li>
                </ul>
              </div>
            </details>
          </div>

          {/* CTA "Get A Quote" Button */}
          <div className="shrink-0">
            <Button variant="secondary" size="lg" render={<Link href="#" />}>
              <span>WhatsApp Us</span>
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

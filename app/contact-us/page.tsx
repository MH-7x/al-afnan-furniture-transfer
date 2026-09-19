import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us | Al Afnan Furniture Transfer Sharjah",
  description:
    "Contact Al Afnan Furniture Transfer. Call 056 7277536 for free moving quotes in Sharjah, Dubai, Ajman and across the UAE. Available 24/7. Central Sharjah location.",
};

const contactFooterSearches = [
  "contact movers in sharjah",
  "sharjah movers phone number",
  "moving company sharjah contact",
  "movers in sharjah uae",
  "furniture transfer sharjah contact",
  "al afnan movers contact number",
  "cheap movers in sharjah contact",
  "villa movers sharjah contact",
  "office movers in sharjah contact",
  "movers and packers in sharjah phone",
];

export default function ContactUsPage() {
  return (
    <>
      <main>
        {/* ════════════════════════════════════════════
            HERO SECTION WITH CONTACT DETAILS
        ════════════════════════════════════════════ */}
        <section
          aria-labelledby="contact-hero-heading"
          className="relative overflow-hidden bg-linear-to-b from-muted/60 via-muted/20 to-background py-20 w-full"
        >
          {/* Subtle Ambient Decorative Glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-primary/8 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex items-center flex-col justify-center ">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground font-medium"
            >
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ArrowRight
                className="size-3 text-muted-foreground/40 shrink-0"
                aria-hidden="true"
              />
              <span className="text-primary font-semibold">Contact Us</span>
            </nav>

            {/* H1 Heading */}
            <h1
              id="contact-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]"
            >
              Contact Afnan Furniture Transfer
            </h1>

            {/* Introductory Paragraph */}
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Have a question about your upcoming move, need an instant moving
              estimate, or want to book an on-site survey? Reach out to our
              Sharjah team today — we are available 24/7 to assist you across
              all seven emirates with upfront pricing and zero hidden fees.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-12 items-stretch max-w-7xl mx-auto px-4">
            {/* Phone No */}
            <div className="group rounded-2xl bg-card drop-shadow-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl flex items-center justify-center shrink-0 mb-5  bg-primary  text-primary-foreground">
                  <Phone className="size-6" aria-hidden="true" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Call &amp; WhatsApp
                </span>
                <h2 className="text-xl font-bold text-foreground mt-1 mb-2 tracking-tight">
                  <a
                    href="tel:0567277536"
                    className="hover:text-primary transition-colors focus:outline-hidden focus-visible:underline"
                  >
                    056 7277536
                  </a>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Direct dispatch line. Call anytime for emergency relocations,
                  same-day moving slots, or immediate price guidance.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                <a
                  href="tel:0567277536"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Call Directly</span>
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </a>
                <span className="text-border" aria-hidden="true">
                  |
                </span>
                <a
                  href="https://wa.me/971567277536?text=Hi,%20I%20would%20like%20to%20inquire%20about%20moving%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <MessageSquare className="size-3.5" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="group rounded-2xl bg-card drop-shadow-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl flex items-center justify-center shrink-0 mb-5  bg-primary  text-primary-foreground">
                  <MapPin className="size-6" aria-hidden="true" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Our Headquarters
                </span>
                <h2 className="text-xl font-bold text-foreground mt-1 mb-2 tracking-tight">
                  Sharjah Office
                </h2>

                <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                  Jamal Abdul Naser St - near Al Majaz 2, Al Majaz 2 - Al Majaz
                  - Sharjah, United Arab Emirates
                </address>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href="https://maps.google.com/?q=Jamal+Abdul+Naser+St+near+Al+Majaz+2+Al+Majaz+Sharjah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="group rounded-2xl bg-card drop-shadow-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl flex items-center justify-center shrink-0 mb-5  bg-primary  text-primary-foreground">
                  <Clock className="size-6" aria-hidden="true" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Availability
                </span>
                <h2 className="text-xl font-bold text-foreground mt-1 mb-2 tracking-tight">
                  Opening Hours
                </h2>

                <div className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                  <p className="flex items-center justify-between text-foreground font-medium">
                    <span>Sunday – Friday:</span>
                    <span className="font-bold text-primary">
                      Open 24 Hours
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold text-foreground">
                      9:00 AM – 5:00 PM
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span
                    className="size-2 rounded-full bg-primary animate-pulse"
                    aria-hidden="true"
                  />
                  <span>24/7 Active Moving Dispatch</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            LIVE GOOGLE MAPS EMBED SECTION
        ════════════════════════════════════════════ */}
        <section
          aria-label="Al Afan Office Location on Google Maps"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 sm:mb-16"
        >
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.535754323657!2d55.3842195!3d25.3197972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b1a7e39d2ff%3A0xdb04537e488fb236!2sAl%20Afan%20furniture%20trasfer!5e0!3m2!1sen!2sae!4v1789788910464!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Al Afan Furniture Transfer Office Location"
              className="w-full h-[360px] sm:h-[450px] block"
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CTA & ESTIMATE SECTION
        ════════════════════════════════════════════ */}
        <CTASection
          heading="Send Us a Message or Request a Free Moving Quote"
          paragraph="Planning a move in Sharjah, Dubai, Ajman, or any other emirate? Fill out the quote form below or reach out directly. We will provide you with a transparent, written estimate with zero hidden fees and no obligations."
          quoteButtonText="Submit Quote Request"
        />
      </main>

      <Footer searches={contactFooterSearches} />
    </>
  );
}

"use client";

import React, { useState } from "react";
import { Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CTASectionProps {
  /** Main heading */
  heading: React.ReactNode;
  /** Description paragraph */
  paragraph: React.ReactNode;
  /** Primary CTA button text (default: "Get a Quote") */
  quoteButtonText?: string;
  /** Primary CTA button link (default: "#") */
  quoteButtonHref?: string;
  /** Call button text (default: "Call: 056 7277536") */
  callButtonText?: string;
  /** Call button link (default: "tel:0567277536") */
  callButtonHref?: string;
  /** Google Maps embed iframe URL */
  mapSrc?: string;
  /** Custom Google Maps embed element (overrides mapSrc if provided) */
  mapEmbed?: React.ReactNode;
  /** Optional custom section wrapper classes */
  className?: string;
}

// Default map view centered on Al Majaz, Sharjah
const DEFAULT_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.535754323657!2d55.3842195!3d25.3197972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b1a7e39d2ff%3A0xdb04537e488fb236!2sAl%20Afan%20furniture%20trasfer!5e0!3m2!1sen!2sae!4v1789324943447!5m2!1sen!2sae";

export function CTASection({
  heading,
  paragraph,
  quoteButtonText = "Get a Quote",
  callButtonText = "Call: 056 7277536",
  callButtonHref = "tel:0567277536",
  mapSrc = DEFAULT_MAP_SRC,
  mapEmbed,
  className = "",
}: CTASectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimate" className={`scroll-mt-24 ${className} mb-16`}>
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="md:rounded-3xl bg-muted/25 p-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-13 gap-10 lg:gap-12 items-center justify-center">
            {/* Content & Direct Contact Column */}
            <div className="lg:col-span-7 ">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  {heading}{" "}
                </h2>

                <div className="mt-4 sm:mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </div>

                {/* Direct Call Button */}
                <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <a
                    href={callButtonHref}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-4xl bg-card border border-border text-foreground hover:text-primary hover:border-primary/50 font-semibold text-sm transition-all shadow-2xs active:scale-95"
                  >
                    <Phone className="size-4 text-primary shrink-0" />
                    <span>{callButtonText}</span>
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="mt-6 pt-5 border-t border-border/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Free &amp; Transparent Quotes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" />
                    No Hidden Handling Fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Serving All 7 Emirates
                  </span>
                </div>
              </div>
            </div>

            {/* Clean & Simple Quote Form Column */}
            <div className="lg:col-span-6 ">
              <div className="bg-card rounded-2xl sm:rounded-3xl border border-border/80 p-6 sm:p-8 shadow-sm">
                <div className="mb-5 pb-4 border-b border-border/60">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    Get a Fast Moving Estimate
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Fill in your move details below for an upfront quote with no
                    hidden fees.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 text-center space-y-3.5 my-4">
                    <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="size-6" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Estimate Request Received!
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you. Our team will review your moving details and
                      contact you shortly with your transparent quote.
                    </p>
                    <a
                      href={callButtonHref}
                      className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-xs hover:bg-primary/90 transition-all shadow-xs"
                    >
                      <Phone className="size-3.5" />
                      <span>Need Urgent Help? Call Us</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block text-xs font-semibold text-foreground/80 mb-1"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="quote-name"
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block text-xs font-semibold text-foreground/80 mb-1"
                        >
                          Phone No *
                        </label>
                        <input
                          type="tel"
                          id="quote-phone"
                          required
                          placeholder="056 7277536"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>
                    </div>

                    {/* Moving From & Moving To */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label
                          htmlFor="quote-from"
                          className="block text-xs font-semibold text-foreground/80 mb-1"
                        >
                          Moving From *
                        </label>
                        <input
                          type="text"
                          id="quote-from"
                          required
                          placeholder="e.g. Al Majaz, Sharjah"
                          value={formData.movingFrom}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              movingFrom: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-to"
                          className="block text-xs font-semibold text-foreground/80 mb-1"
                        >
                          Moving To *
                        </label>
                        <input
                          type="text"
                          id="quote-to"
                          required
                          placeholder="e.g. Dubai / Al Nahda"
                          value={formData.movingTo}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              movingTo: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60"
                        />
                      </div>
                    </div>

                    {/* Date */}
                    <div>
                      <label
                        htmlFor="quote-date"
                        className="block text-xs font-semibold text-foreground/80 mb-1"
                      >
                        Date *
                      </label>
                      <input
                        type="date"
                        id="quote-date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="quote-message"
                        className="block text-xs font-semibold text-foreground/80 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="quote-message"
                        rows={3}
                        placeholder="Tell us about the property type, key furniture items, or packing services needed..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all placeholder:text-muted-foreground/60 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full py-5.5 font-semibold text-primary-foreground shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer mt-1"
                    >
                      <span>{quoteButtonText}</span>
                      <Send className="size-4 ml-1.5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

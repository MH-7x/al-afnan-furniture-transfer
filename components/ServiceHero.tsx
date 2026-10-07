import React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ServiceHeroCta {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ServiceHeroProps {
  /** Crumbs between "Home" and the current page. */
  breadcrumb: { label: string; href?: string }[];
  /** Current page name, shown as the last crumb. */
  current: string;
  /** The page H1. */
  title: string;
  /** Bold line directly under the H1. */
  tagline: string;
  /** Short trust badges shown under the buttons. */
  badges: { icon: LucideIcon; text: string }[];
  primaryCta: ServiceHeroCta;
  secondaryCta: ServiceHeroCta;
  /** Intro paragraphs rendered under the tagline. */
  children: React.ReactNode;
}

function CtaButton({
  cta,
  variant,
}: {
  cta: ServiceHeroCta;
  variant: "default" | "secondary";
}) {
  const external = cta.href.startsWith("http");
  return (
    <Button
      variant={variant}
      size="lg"
      render={
        <a
          href={cta.href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : null)}
        />
      }
    >
      <cta.icon className="size-4 mr-1.5" aria-hidden="true" />
      <span>{cta.label}</span>
    </Button>
  );
}

/** Hero used by the Dubai service pages; same look as the Sharjah service heroes. */
export function ServiceHero({
  breadcrumb,
  current,
  title,
  tagline,
  badges,
  primaryCta,
  secondaryCta,
  children,
}: ServiceHeroProps) {
  return (
    <section className="w-full px-0">
      <div className="relative overflow-hidden py-14 sm:py-20">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted/70 via-muted/25 to-background"
          aria-hidden="true"
        />
        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full bg-primary/7 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-1/4 size-64 rounded-full bg-primary/8 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-20 max-w-6xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground font-medium"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <React.Fragment key={crumb.label}>
                <ArrowRight
                  className="size-3 text-muted-foreground/40 shrink-0"
                  aria-hidden="true"
                />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-muted-foreground">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
            <ArrowRight
              className="size-3 text-muted-foreground/40 shrink-0"
              aria-hidden="true"
            />
            <span className="text-primary font-semibold" aria-current="page">
              {current}
            </span>
          </nav>

          {/* H1 Heading */}
          <h1 className="">
            {title}
          </h1>

          {/* Tagline + intro content */}
          <p className="mt-4 text-foreground/85 font-semibold text-base sm:text-lg leading-snug">
            {tagline}
          </p>
          <div className="mt-4 space-y-3.5 text-muted-foreground t-body leading-relaxed">
            {children}
          </div>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <CtaButton cta={primaryCta} variant="default" />
            <CtaButton cta={secondaryCta} variant="secondary" />
          </div>

          {/* Trust badges */}
          <ul className="mt-7 pt-6 border-t border-border/50 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-muted-foreground font-medium list-none p-0">
            {badges.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-1.5">
                <Icon
                  className="size-3.5 text-primary shrink-0"
                  aria-hidden="true"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;

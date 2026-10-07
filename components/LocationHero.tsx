import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Full-bleed photo hero for location pages: breadcrumb, H1 and the page's own
 * hero content (children) on a dark scrim over a crew photo.
 */
export function LocationHero({
  id,
  current,
  title,
  image,
  imageAlt,
  children,
}: {
  /** id of the h1 (for aria-labelledby on the section) */
  id: string;
  /** Breadcrumb label for this page */
  current: string;
  title: React.ReactNode;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      data-surface="dark"
      className="relative isolate overflow-hidden bg-ink text-fog"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center]"
      />
      <div
        className="absolute inset-0 -z-10 bg-ink/80 md:bg-transparent md:bg-[linear-gradient(90deg,rgb(15_17_20/0.94)_0%,rgb(15_17_20/0.86)_45%,rgb(15_17_20/0.4)_100%)]"
        aria-hidden="true"
      />

      <div className="wrap flex min-h-[min(80svh,50rem)] items-center py-16 lg:py-24">
        <div className="hero-stagger max-w-3xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 t-small">
              <li className="inline-flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ArrowRight className="size-3.5 opacity-60" aria-hidden="true" />
              </li>
              <li>
                <span className="font-semibold text-signal-bright" aria-current="page">
                  {current}
                </span>
              </li>
            </ol>
          </nav>

          <h1 id={id} className="mt-5 t-display text-white">
            {title}
          </h1>

          {children}
        </div>
      </div>
    </section>
  );
}

export default LocationHero;

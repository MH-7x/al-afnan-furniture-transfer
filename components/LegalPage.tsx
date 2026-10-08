import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface LegalSection {
  id: string;
  title: string;
  body: React.ReactNode;
}

/** Running text and lists inside a legal section. */
export function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 first:mt-0">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 first:mt-0 space-y-2 ps-5 list-disc marker:text-signal">
      {children}
    </ul>
  );
}

/**
 * Shared layout for the privacy policy and terms pages: dark title band, then a
 * sticky contents list beside numbered sections.
 */
export function LegalPage({
  id,
  current,
  title,
  updated,
  intro,
  sections,
}: {
  /** id of the h1 (for aria-labelledby on the hero) */
  id: string;
  /** Breadcrumb label */
  current: string;
  title: string;
  /** Human-readable "last updated" date */
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <section aria-labelledby={id} data-surface="dark" className="bg-ink text-fog">
        <div className="wrap py-14 lg:py-20">
          <div className="hero-stagger max-w-4xl">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 t-small">
                <li className="inline-flex items-center gap-2">
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                  <ArrowRight className="size-3.5 opacity-60" aria-hidden="true" />
                </li>
                <li>
                  <span aria-current="page" className="text-white font-semibold">
                    {current}
                  </span>
                </li>
              </ol>
            </nav>
            <h1 id={id} className="mt-5 text-white">
              {title}
            </h1>
            <p className="mt-4 t-label text-fog">Last updated: {updated}</p>
          </div>
        </div>
      </section>

      <section data-surface="light" className="bg-paper text-steel">
        <div className="wrap section-y grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <nav
              aria-label="Contents"
              className="lg:sticky lg:top-28 rounded-xl border border-line bg-white p-5"
            >
              <p className="t-label text-ink">Contents</p>
              <ol className="mt-3 space-y-1 t-small">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 rounded-md py-1.5 hover:text-ink hover:underline"
                    >
                      <span className="t-num w-5 shrink-0 text-signal font-bold">
                        {i + 1}
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-8">
            <div className="t-lead text-ink measure">{intro}</div>

            <div className="mt-10 border-t border-line">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  aria-labelledby={s.id}
                  className="border-b border-line py-8 lg:py-10"
                >
                  <h2 id={s.id} className="scroll-mt-28 text-ink t-h3 !font-semibold">
                    <span className="t-num me-3 text-signal">{i + 1}.</span>
                    {s.title}
                  </h2>
                  <div className="mt-4 t-body measure">{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

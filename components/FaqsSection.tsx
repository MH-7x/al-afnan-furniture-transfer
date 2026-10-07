import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { HomePageFAQs } from "@/lib/FaqsData";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export interface FAQData {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQData[];
  /** "center": single centered column. "split": heading left, questions right (wide screens). */
  layout?: "center" | "split";
}

export const FAQItem: React.FC<{ faq: FAQData }> = ({ faq }) => {
  return (
    <details className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-start select-none rounded-sm">
        <h3 className="t-h4 text-ink group-hover:text-signal transition-colors">{faq.question}</h3>
        <span
          className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-signal transition-[rotate,border-color] duration-200 group-open:rotate-45 group-open:border-signal"
          aria-hidden="true"
        >
          <Plus className="size-4.5" />
        </span>
      </summary>
      <div className="pb-7 pe-14 text-muted-foreground t-body measure space-y-3 [&_a]:font-semibold [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-4">
        {faq.answer}
      </div>
    </details>
  );
};

export const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find clear answers to common questions about moving, packing, and relocation services in Sharjah.",
  faqs = HomePageFAQs,
  layout = "center",
}) => {
  const FaqsSchema = generateFAQSchema(convertFaqsForSchema(faqs));
  const split = layout === "split";

  const note = (
    <p className={`t-small text-muted-foreground ${split ? "mt-6" : "mt-8 text-center"}`}>
      Still have questions? Call us at{" "}
      <a href={PHONE_HREF} className="font-semibold text-signal underline underline-offset-4">
        {PHONE_DISPLAY}
      </a>{" "}
      or{" "}
      <Link href="#estimate" className="font-semibold text-signal underline underline-offset-4">
        request a free estimate
      </Link>
      .
    </p>
  );

  return (
    <>
      <script
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <section id="faqs" className="scroll-mt-28 w-full" aria-labelledby="faq-heading">
        {split ? (
          <div className="wrap section-y grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 id="faq-heading" className="text-ink">
                  {title}
                </h2>
                {subtitle && <p className="mt-4 t-body text-muted-foreground">{subtitle}</p>}
                {note}
              </div>
            </div>
            <div className="lg:col-span-8 border-t border-ink">
              {faqs.map((faq, index) => (
                <FAQItem key={`faq-${index}`} faq={faq} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <div className="mb-10 text-center">
              <h2 id="faq-heading" className="text-ink">
                {title}
              </h2>
              {subtitle && (
                <p className="mx-auto mt-4 max-w-xl t-body text-muted-foreground">{subtitle}</p>
              )}
            </div>
            <div className="border-t border-ink">
              {faqs.map((faq, index) => (
                <FAQItem key={`faq-${index}`} faq={faq} />
              ))}
            </div>
            {note}
          </div>
        )}
      </section>
    </>
  );
};

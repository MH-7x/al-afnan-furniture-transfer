import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { HomePageFAQs } from "@/lib/FaqsData";

export interface FAQData {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQData[];
}

export const FAQItem: React.FC<{ faq: FAQData }> = ({ faq }) => {
  return (
    <details className="group border-b border-border [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 sm:py-6 text-left select-none list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
        <span className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-2">
          {faq.question}
        </span>
        <ChevronDown
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-hover:text-primary"
          aria-hidden="true"
        />
      </summary>
      <div className="pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed space-y-3 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline">
        {faq.answer}
      </div>
    </details>
  );
};

export const FAQSection: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Find clear answers to common questions about moving, packing, and relocation services in Sharjah.",
  faqs = HomePageFAQs,
}) => {
  const FaqsSchema = generateFAQSchema(convertFaqsForSchema(faqs));

  return (
    <>
      <script
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <section
        id="faqs"
        className="scroll-mt-24 w-full"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* Accordion List */}
          <div className="border-t border-border">
            {faqs.map((faq, index) => (
              <FAQItem key={`faq-${index}`} faq={faq} />
            ))}
          </div>

          {/* Lightweight Footer Note */}
          <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground">
            Still have questions? Call us at{" "}
            <a
              href="tel:0567277536"
              className="font-semibold text-primary hover:underline"
            >
              056 7277536
            </a>{" "}
            or{" "}
            <Link
              href="#"
              className="font-semibold text-primary hover:underline"
            >
              request a free estimate
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};

import React from "react";
import { Quote } from "lucide-react";

export interface Review {
  quote: string;
  author: string;
  /** Extra attribution parts, e.g. route and month. Rendered as "Author · part · part". */
  details?: string[];
}

export interface ReviewsSectionProps {
  id?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  reviews: Review[];
  /** Buttons / links rendered under the review cards */
  actions?: React.ReactNode;
}

export function ReviewsSection({
  id = "reviews",
  title,
  intro,
  reviews,
  actions,
}: ReviewsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="max-w-3xl mb-10 sm:mb-12">
        <h2
          id={headingId}
          className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-foreground"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            {intro}
          </p>
        )}
      </div>

      {/* 3 + 2 card layout on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {reviews.map((review, index) => (
          <figure
            key={review.author + index}
            className={`bg-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-xs hover:border-primary/40 transition-colors flex flex-col justify-between ${
              index < 3 ? "lg:col-span-2" : "lg:col-span-3"
            }`}
          >
            <div>
              <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4">
                <Quote className="size-5" aria-hidden="true" />
              </div>
              <blockquote className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed">
                {review.quote}
              </blockquote>
            </div>
            <figcaption className="mt-5 pt-4 border-t border-border/60 text-xs sm:text-sm text-muted-foreground">
              <cite className="not-italic font-semibold text-foreground">
                {review.author}
              </cite>
              {review.details?.map((detail) => (
                <span key={detail}>
                  {" · "}
                  {detail}
                </span>
              ))}
            </figcaption>
          </figure>
        ))}
      </div>

      {actions && (
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          {actions}
        </div>
      )}
    </section>
  );
}

export default ReviewsSection;

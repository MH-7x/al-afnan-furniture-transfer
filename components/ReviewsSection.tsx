import React from "react";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

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
  /** Buttons / links rendered under the reviews */
  actions?: React.ReactNode;
}

/** Customer reviews on a white band: three across, then two wider, separated by rules. */
export function ReviewsSection({
  id = "reviews",
  title,
  intro,
  reviews,
  actions,
}: ReviewsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-28 bg-white section-y">
      <div className="wrap">
        <SectionHeader id={headingId} title={title} lead={intro} />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-10 gap-y-12">
          {reviews.map((review, index) => (
            <figure
              key={review.author + index}
              className={`reveal flex flex-col justify-between border-t-2 border-ink pt-6 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div>
                <Quote className="size-7 fill-signal text-signal" aria-hidden="true" />
                <blockquote className="mt-4 t-body text-steel">{review.quote}</blockquote>
              </div>
              <figcaption className="mt-6 t-small text-muted-foreground">
                <cite className="not-italic font-semibold text-ink">{review.author}</cite>
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

        {actions && <div className="mt-12 flex flex-wrap items-center gap-3">{actions}</div>}
      </div>
    </section>
  );
}

export default ReviewsSection;

import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  GoogleReviewsSlider,
  type GoogleReviewsSliderProps,
} from "@/components/GoogleReviewsSlider";

export interface GoogleReviewsSectionProps {
  id?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  /** Buttons / links rendered under the slider */
  actions?: React.ReactNode;
  slider?: GoogleReviewsSliderProps;
}

/** Full-width white band holding the Google reviews slider, with the site's section header. */
export function GoogleReviewsSection({
  id = "reviews",
  title = "Customer Reviews on Google",
  intro,
  actions,
  slider,
}: GoogleReviewsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      data-surface="light"
      className="scroll-mt-28 bg-white section-y"
    >
      <div className="wrap">
        <SectionHeader id={headingId} title={title} lead={intro} />
        <GoogleReviewsSlider className="mt-10 lg:mt-12" {...slider} />
        {actions && <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>}
      </div>
    </section>
  );
}

export default GoogleReviewsSection;

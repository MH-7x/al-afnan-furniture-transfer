import Image, { getImageProps } from "next/image";
import { MAPS_HREF } from "@/lib/contact";
import {
  GOOGLE_RATING,
  googleReviews,
  type GoogleReview,
} from "@/lib/GoogleReviewsData";

export interface GoogleReviewsSliderProps {
  reviews?: GoogleReview[];
  score?: string;
  label?: string;
  count?: number;
  /** Where "Write a review" points. */
  writeReviewHref?: string;
  className?: string;
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="flex" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`size-3.5 ${i < rating ? "fill-[#fbbc04]" : "fill-[#d4d4d4]"}`}
          aria-hidden="true"
        >
          <path d="M12 1.8l3.2 6.5 7.1 1-5.15 5 1.2 7.1L12 18.1l-6.35 3.3 1.2-7.1-5.15-5 7.1-1z" />
        </svg>
      ))}
    </span>
  );
}

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-3 shrink-0"
      role="img"
      aria-label="Verified review"
    >
      <circle cx="8" cy="8" r="8" fill="#4285f4" />
      <path
        d="m4.6 8.3 2.3 2.3 4.5-4.7"
        fill="none"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Avatar({ review }: { review: GoogleReview }) {
  // Drawn as a CSS background so a photo that is missing or fails to load shows the initial instead of a broken image.
  const photo = review.image
    ? getImageProps({ src: review.image, alt: "", width: 60, height: 60 }).props
        .src
    : undefined;

  return (
    <span
      className="relative grid size-7.5 shrink-0 place-items-center overflow-hidden rounded-full text-[15px] font-medium text-white"
      style={{ backgroundColor: review.color ?? "#5e35b1" }}
    >
      <span aria-hidden="true">
        {review.name.trim().charAt(0).toLowerCase()}
      </span>
      {photo && (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${photo}")` }}
        />
      )}
    </span>
  );
}

/**
 * Google reviews strip: rating bar on top, then a CSS scroll-snap slider.
 * Server component, no JavaScript. Swipe, trackpad, and keyboard scrolling work
 * everywhere; the round arrows are native `::scroll-button()` controls (see globals.css).
 */
export function GoogleReviewsSlider({
  reviews = googleReviews,
  score = GOOGLE_RATING.score,
  label = GOOGLE_RATING.label,
  count = GOOGLE_RATING.count,
  writeReviewHref = MAPS_HREF,
  className = "",
}: GoogleReviewsSliderProps) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-xl bg-[#f3f3f3] px-4 py-3 text-[#111]">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1  font-semibold">
          <Image
            src="/google-logo.svg"
            alt="Google"
            width={62}
            height={20}
            className="h-5 w-auto"
          />
          <span>{label}</span>
          <Stars />
          <span>{score}</span>
          <span aria-hidden="true" className="font-normal text-[#888]">
            |
          </span>
          <span>{count} reviews</span>
        </div>

        <a
          href={writeReviewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#222] bg-white px-3.5 py-2 text-[13px] font-semibold leading-none text-[#111] transition-colors hover:bg-[#111] hover:text-white"
        >
          Write a review
        </a>
      </div>

      <ul className="g-reviews mt-3" aria-label="Google reviews" tabIndex={0}>
        {reviews.map((review, index) => (
          <li key={review.name + index} className="g-reviews__slide">
            <article className="flex h-full min-h-38.75 flex-col gap-2.5 rounded-xl bg-[#f3f3f3] px-4 py-3.5 text-[#111]">
              <header className="flex items-start gap-2.5">
                <Avatar review={review} />
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-[14px] font-semibold">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[#767676]">{review.time}</p>
                </div>
                <Image
                  src="/google-icon.svg"
                  alt="Google"
                  width={18}
                  height={18}
                  className="size-4.5 shrink-0"
                />
              </header>

              <div className="flex items-center gap-1.5">
                <Stars rating={review.rating} />
                <VerifiedBadge />
              </div>

              <p className="line-clamp-5 text-sm leading-snug">{review.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleReviewsSlider;

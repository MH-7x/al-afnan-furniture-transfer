import React from "react";

/**
 * Split section header: heading on the left, lead text on the right (stacked on mobile).
 * `tone="dark"` for use on black bands.
 */
export function SectionHeader({
  id,
  title,
  lead,
  tone = "light",
  className = "",
}: {
  id?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16 items-start ${className}`}
    >
      <h2
        id={id}
        className={`scroll-mt-28 lg:col-span-6 ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`lg:col-span-6 lg:pt-2 t-lead text-lg measure ${dark ? "text-fog" : "text-steel"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;

import React from "react";
import Image from "next/image";

export interface EditorialItem {
  id: string;
  title: React.ReactNode;
  image: string;
  imageAlt: string;
  /** Paragraphs (already wrapped in <p>) or any rich content */
  body: React.ReactNode;
  /** Optional action under the text (e.g. a quote link) */
  action?: React.ReactNode;
}

/**
 * Photo + text items separated by hairlines.
 * - "rows": photo and text side by side, alternating sides (on desktop)
 * - "columns": photo on top, text below, items side by side
 * `tone="dark"` for use on black bands.
 */
export function EditorialRows({
  items,
  variant = "rows",
  tone = "light",
}: {
  items: EditorialItem[];
  variant?: "rows" | "columns";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const rule = dark ? "border-ink-3" : "border-line";
  const strong = dark ? "border-signal" : "border-ink";
  const heading = dark ? "text-white" : "text-ink";
  const text = dark ? "text-fog" : "text-muted-foreground";

  if (variant === "columns") {
    return (
      <ul
        className={`mt-14 grid grid-cols-1 gap-x-10 gap-y-14 ${
          items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {items.map((item) => (
          <li key={item.id} className="reveal flex flex-col">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-paper-2">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className={`mt-6 flex flex-1 flex-col border-t-2 pt-6 ${strong}`}>
              <h3 className={heading}>{item.title}</h3>
              <div className={`mt-4 space-y-3 t-body ${text}`}>{item.body}</div>
              {item.action && <div className={`mt-6 border-t pt-4 ${rule}`}>{item.action}</div>}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`mt-14 border-t ${dark ? "border-signal border-t-2" : "border-ink"}`}>
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center border-b py-10 lg:py-14 ${rule}`}
        >
          <div
            className={`md:col-span-5 relative aspect-4/3 overflow-hidden rounded-xl bg-paper-2 ${
              index % 2 ? "md:order-2" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className={`md:col-span-7 ${index % 2 ? "md:order-1" : ""}`}>
            <h3 className={heading}>{item.title}</h3>
            <div className={`mt-4 space-y-3 t-body measure ${text}`}>{item.body}</div>
            {item.action && <div className="mt-6">{item.action}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EditorialRows;

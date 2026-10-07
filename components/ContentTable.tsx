import React from "react";

export interface ContentTableProps {
  /** Accessible name for the table (not rendered visibly) */
  label: string;
  /** Column headings. Use "" for an empty corner cell. */
  headers: string[];
  /** Each row's first cell is rendered as a row header. */
  rows: React.ReactNode[][];
  className?: string;
}

/**
 * Responsive data table styled to match the site cards: dark header row,
 * zebra body rows, horizontal scroll on narrow screens.
 */
export function ContentTable({
  label,
  headers,
  rows,
  className = "",
}: ContentTableProps) {
  return (
    <div
      className={`w-full overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-xs ${className}`}
    >
      <table
        aria-label={label}
        className="w-full min-w-[520px] border-collapse text-left text-sm"
      >
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            {headers.map((header, index) =>
              header ? (
                <th
                  key={header}
                  scope="col"
                  className="px-4 py-3.5 sm:px-5 text-xs font-semibold uppercase tracking-wider align-bottom"
                >
                  {header}
                </th>
              ) : (
                <td key={`empty-${index}`} className="px-4 py-3.5 sm:px-5" />
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-border/60 even:bg-muted/40"
            >
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th
                    key={cellIndex}
                    scope="row"
                    className="px-4 py-3.5 sm:px-5 align-top font-semibold text-foreground"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={cellIndex}
                    className="px-4 py-3.5 sm:px-5 align-top text-muted-foreground"
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContentTable;

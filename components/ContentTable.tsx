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
 * Spec-sheet table: black header row, hairline rows, horizontal scroll on
 * narrow screens.
 */
export function ContentTable({
  label,
  headers,
  rows,
  className = "",
}: ContentTableProps) {
  return (
    <div
      className={`w-full overflow-x-auto rounded-xl border border-line bg-white ${className}`}
    >
      <table aria-label={label} className="w-full min-w-130 border-collapse text-start">
        <thead>
          <tr className="bg-ink text-white">
            {headers.map((header, index) =>
              header ? (
                <th key={header} scope="col" className="t-label px-5 py-4 text-start align-bottom">
                  {header}
                </th>
              ) : (
                <td key={`empty-${index}`} className="px-5 py-4" />
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-line even:bg-paper">
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th
                    key={cellIndex}
                    scope="row"
                    className="px-5 py-4 text-start align-top font-semibold text-ink"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex} className="px-5 py-4 align-top text-steel">
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

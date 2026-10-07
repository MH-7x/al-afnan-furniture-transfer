import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

// Body / UI face
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Display face for headings, numerals and labels
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movers in Sharjah | Al Afnan Furniture Transfer",
  description:
    "Professional movers and packers in Sharjah for homes, apartments, villas, offices, and furniture transfers across all 7 UAE Emirates. Transparent pricing with free estimates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      dir="ltr"
      className={`antialiased ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body
        id="top"
        className="min-h-screen flex flex-col bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}

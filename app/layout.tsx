import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
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
      className={`antialiased ${inter.variable}`}
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

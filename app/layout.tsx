import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { movingCompanySchemaJson } from "@/lib/MovingCompanySchema";
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
  applicationName: "Al Afnan Movers and Packers",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
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
        <script
          id="MovingCompanySchema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: movingCompanySchemaJson }}
        />
        {children}
      </body>
    </html>
  );
}

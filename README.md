This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
website
├─ actions
│  └─ send-quote.ts
├─ AGENTS.md
├─ app
│  ├─ (location)
│  │  ├─ movers-and-packer-in-dubai
│  │  │  └─ page.tsx
│  │  ├─ movers-in-ajman
│  │  │  └─ page.tsx
│  │  ├─ movers-in-ras-al-khaimah
│  │  │  └─ page.tsx
│  │  └─ movers-in-sharjah
│  │     └─ page.tsx
│  ├─ (services)
│  │  ├─ apartment-movers-in-dubai
│  │  │  └─ page.tsx
│  │  ├─ apartment-movers-in-sharjah
│  │  │  └─ page.tsx
│  │  ├─ furniture-movers-in-dubai
│  │  │  └─ page.tsx
│  │  ├─ furniture-transfer-in-sharjah
│  │  │  └─ page.tsx
│  │  ├─ house-movers-in-dubai
│  │  │  └─ page.tsx
│  │  ├─ house-movers-in-sharjah
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ office-movers-in-dubai
│  │  │  └─ page.tsx
│  │  ├─ office-movers-in-sharjah
│  │  │  └─ page.tsx
│  │  ├─ packing-services-in-sharjah
│  │  │  └─ page.tsx
│  │  ├─ villa-movers-in-dubai
│  │  │  └─ page.tsx
│  │  └─ villa-movers-in-sharjah
│  │     └─ page.tsx
│  ├─ about-us
│  │  └─ page.tsx
│  ├─ contact-us
│  │  └─ page.tsx
│  ├─ design-system
│  │  └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ privacy-policy
│  │  └─ page.tsx
│  └─ terms-and-conditions
│     └─ page.tsx
├─ CLAUDE.md
├─ components
│  ├─ ContentTable.tsx
│  ├─ CTASection.tsx
│  ├─ EditorialRows.tsx
│  ├─ FaqsSection.tsx
│  ├─ footer.tsx
│  ├─ icons
│  │  └─ WhatsAppIcon.tsx
│  ├─ LegalPage.tsx
│  ├─ LocationHero.tsx
│  ├─ MovingCosts.tsx
│  ├─ MovingProcess.tsx
│  ├─ navbar.tsx
│  ├─ QuoteForm.tsx
│  ├─ QuoteFormBody.tsx
│  ├─ ReviewsSection.tsx
│  ├─ SectionHeader.tsx
│  ├─ ServiceCTAButton.tsx
│  ├─ ServiceHero.tsx
│  ├─ Services.tsx
│  ├─ ServiceSidebar.tsx
│  ├─ ServicesLinks.tsx
│  ├─ SiteShell.tsx
│  ├─ StickyContactBar.tsx
│  ├─ ui
│  │  └─ button.tsx
│  └─ WhyChooseUs.tsx
├─ components.json
├─ eslint.config.mjs
├─ lib
│  ├─ apartment-movers-in-dubai-content.md
│  ├─ App.ts
│  ├─ contact.ts
│  ├─ ConvertFaqsInRaw.tsx
│  ├─ FaqsData.tsx
│  ├─ footer.png
│  ├─ furniture-movers-in-dubai-content.md
│  ├─ GenerateFaqSchema.ts
│  ├─ hero.png
│  ├─ home-page.md
│  ├─ HomeData.tsx
│  ├─ house-movers-in-dubai-content.md
│  ├─ MetadataTemplate.ts
│  ├─ navbar.png
│  ├─ office-movers-in-dubai-content.md
│  ├─ Quote.ts
│  ├─ servicesNav.ts
│  ├─ utils.ts
│  ├─ villa-movers-in-dubai-content.md
│  └─ whatsapp.ts
├─ next.config.ts
├─ package.json
├─ pages.md
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ postcss.config.mjs
├─ public
│  ├─ al-afnan-furniture-transfer-sharjah.jpg
│  ├─ commercial-office-movers.jpg
│  ├─ flat-apartment-movers.jpg
│  ├─ furniture-moving-transfer.jpg
│  ├─ google-icon.svg
│  ├─ house-moving-services-by-al-afnan.jpg
│  ├─ images
│  │  ├─ ajman-to-dubai-sharjah-moving-truck-al-afnan.jpg
│  │  ├─ al-afnan-movers-and-packers-in-uae.jpg
│  │  ├─ al-afnan-movers-carrying-wardrobe-through-doorway.jpg
│  │  ├─ al-afnan-movers-confirming-details-customer-sharjah.jpg
│  │  ├─ al-afnan-movers-crew-planning-move-with-customer.jpg
│  │  ├─ apartment-movers-dubai-al-afnan-furniture-transfer.jpg
│  │  ├─ furniture-dismantling-reassembly-dubai-al-afnan-movers.jpg
│  │  ├─ house-movers-dubai-al-afnan-furniture-transfer.jpg
│  │  ├─ long-distance-inter-emirate-movers-uae-al-afnan.jpg
│  │  ├─ movers-and-packers-dubai-al-afnan-hero.jpg
│  │  ├─ movers-in-ajman-al-afnan.jpg
│  │  ├─ movers-in-ras-al-khaimah-al-afnan.jpg
│  │  ├─ office-movers-dubai-al-afnan-furniture-transfer.jpg
│  │  ├─ packing-unpacking-services-dubai-al-afnan-movers.jpg
│  │  ├─ studio-movers-dubai-al-afnan-furniture-transfer.jpg
│  │  └─ villa-movers-dubai-al-afnan-furniture-transfer.jpg
│  ├─ logo-white.svg
│  ├─ logo.svg
│  ├─ movers-and-packers-in-sharjah.jpg
│  ├─ movers-in-ajman.jpg
│  ├─ movers-in-ras-al-khaimah.jpg
│  ├─ packing-and-moving-services.jpg
│  ├─ studio-moving-services.jpg
│  └─ villa-moving-services.jpg
├─ README.md
└─ tsconfig.json

```
import { MetadataTemplate } from "@/lib/MetadataTemplate";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { LegalPage, P, UL, type LegalSection } from "@/components/LegalPage";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export const metadata = MetadataTemplate({
  title: "Terms and Conditions | Al Afnan Furniture Transfer",
  desc:
    "The terms that apply to quotes, bookings and moving services from Al Afnan Furniture Transfer in Sharjah, Dubai and across the UAE, plus the rules for using this website.",
  path: "/terms-and-conditions",
});

const link = "underline hover:text-ink";

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <P>
          These terms apply to your use of this website and to every quote,
          booking and moving, packing or furniture transfer service supplied by Al
          Afnan Furniture Transfer (&ldquo;we&rdquo;, &ldquo;us&rdquo;), Sharjah,
          United Arab Emirates. &ldquo;You&rdquo; means the person or business that
          requests or pays for our services.
        </P>
        <P>
          By using the website or booking a service you agree to these terms. If
          you do not agree, please do not use the website or book with us.
        </P>
      </>
    ),
  },
  {
    id: "services",
    title: "Our services",
    body: (
      <P>
        We provide packing, loading, transport, unloading and, where agreed,
        dismantling, reassembly and storage of household and office goods within
        the UAE. The exact services for your move are those set out in your
        confirmed quote or booking. Anything not listed there is not included.
      </P>
    ),
  },
  {
    id: "quotes",
    title: "Quotes and bookings",
    body: (
      <UL>
        <li>
          Quotes are based on the information you give us about the items, access,
          distance and date. Please make it as complete and accurate as you can.
        </li>
        <li>
          A booking is confirmed when we confirm it to you in writing, including
          by WhatsApp or email, for an agreed date and price.
        </li>
        <li>
          A quote may change if the real job differs from what you described, for
          example more items, a longer carry, no lift access, extra stops or
          restricted parking. We will tell you before extra work starts.
        </li>
        <li>
          Estimates given by phone, WhatsApp or the website form are not binding
          until confirmed as a booking.
        </li>
      </UL>
    ),
  },
  {
    id: "payment",
    title: "Prices and payment",
    body: (
      <>
        <P>
          Prices are in UAE dirhams (AED). Unless your quote says otherwise,
          payment is due on completion of the move, in cash, bank transfer or
          another method we agree with you. We may ask for a deposit to secure a
          booking, and for large or long-distance jobs we may ask for part payment
          before the move.
        </P>
        <P>
          Charges that depend on the job, such as extra labour time, waiting time,
          additional stops, storage days, or parking and access fees charged by a
          building, are payable by you. We may hold goods in storage or on the
          vehicle until payment due is made.
        </P>
      </>
    ),
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    body: (
      <>
        <P>You agree to:</P>
        <UL>
          <li>
            arrange building access, lift bookings, security passes and parking at
            both addresses, and tell us about any rules or restrictions in
            advance;
          </li>
          <li>
            have someone present at pick-up and delivery who can show us what is
            to be moved and sign for the job;
          </li>
          <li>
            keep cash, jewellery, passports and other documents, and valuables,
            with you and not packed in the load;
          </li>
          <li>
            disconnect and empty appliances unless we have agreed to do it, and
            drain washing machines and fridges in good time; and
          </li>
          <li>
            not ask us to move illegal goods, hazardous or flammable materials,
            perishable food, or live plants or animals.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "packing",
    title: "Packing and handling",
    body: (
      <P>
        Where we pack your items, we use materials suited to the goods. Items you
        pack yourself are carried at your risk as to the condition of the
        contents, because we cannot see how they were packed. We will handle all
        items with reasonable care, but we are not responsible for wear that
        already exists, for items that are not fit to be moved, or for the working
        condition of electrical and electronic items we did not disconnect or
        pack.
      </P>
    ),
  },
  {
    id: "changes-and-cancellation",
    title: "Changes and cancellation",
    body: (
      <UL>
        <li>
          You can reschedule or cancel by telling us as early as possible. If you
          do so with at least 24 hours&apos; notice, we will not charge you, and
          we will return any deposit less costs we have already incurred.
        </li>
        <li>
          If you cancel with less than 24 hours&apos; notice, or our crew arrives
          and cannot do the job because access or goods are not ready, we may
          charge a reasonable fee for the time and costs lost.
        </li>
        <li>
          If we must change a time because of traffic, weather, vehicle breakdown
          or other things outside our control, we will contact you as soon as we
          can and agree a new time.
        </li>
      </UL>
    ),
  },
  {
    id: "liability",
    title: "Damage, loss and our liability",
    body: (
      <>
        <P>
          We take care of your belongings, and we are responsible for damage or
          loss caused by our negligence or that of our crew while goods are in our
          care. To make a claim:
        </P>
        <UL>
          <li>
            check your items on delivery and tell the crew about any visible
            damage or missing items before they leave; and
          </li>
          <li>
            send us details and photos within 48 hours of delivery, with a
            description of the item and the damage, so we can review it.
          </li>
        </UL>
        <P>
          Unless the law says otherwise, our liability for any one claim is
          limited to the lower of the repair cost or the reasonable current value
          of the item, and to the total charge for the move. We are not liable for
          loss of profit or any indirect loss, or for damage caused by something
          outside our control, by the nature of the goods (such as inherent
          defects or fragile items you did not tell us about), or by incorrect
          information. Nothing in these terms limits liability that cannot lawfully
          be limited.
        </P>
        <P>We recommend you take out your own insurance for high-value items.</P>
      </>
    ),
  },
  {
    id: "storage",
    title: "Storage",
    body: (
      <P>
        If we store your goods, storage fees are charged for the period agreed and
        must be paid on time. If fees go unpaid for an extended period after we
        have given you written notice, we may take the steps allowed by UAE law to
        recover what is owed. You must not store illegal, hazardous, perishable or
        flammable items.
      </P>
    ),
  },
  {
    id: "website-use",
    title: "Using this website",
    body: (
      <>
        <P>
          The website is provided for general information about our services. We
          work to keep it accurate, but we do not promise that it is always
          complete, up to date or free of errors, and any prices or timings shown
          are a guide only.
        </P>
        <P>
          You agree not to misuse the site, try to gain unauthorised access to it,
          copy it in bulk, or send us false or abusive enquiries. All text,
          images, logos and design on the website belong to us or our licensors,
          and you may not reproduce them without our written permission.
        </P>
        <P>
          Links to other websites, such as Google Maps or WhatsApp, are provided
          for convenience. We are not responsible for their content or practices.
        </P>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <P>
        How we collect and use your personal information is explained in our{" "}
        <Link href="/privacy-policy" className={link}>
          Privacy Policy
        </Link>
        .
      </P>
    ),
  },
  {
    id: "force-majeure",
    title: "Events outside our control",
    body: (
      <P>
        We are not responsible for delay or failure to perform that is caused by
        events outside our reasonable control, including severe weather, road
        closures, accidents, government action, strikes, or power or system
        failures. We will tell you as soon as possible and work with you to
        complete the move at the earliest practical time.
      </P>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <P>
        These terms are governed by the laws of the United Arab Emirates as
        applied in the Emirate of Sharjah. We hope to resolve any complaint
        directly with you first. If we cannot, the competent courts of Sharjah
        have jurisdiction.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <P>
        We may update these terms from time to time. The version published on this
        page on the day you book is the one that applies to your booking. The
        &ldquo;last updated&rdquo; date shows when the terms last changed.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        Questions about these terms? Call{" "}
        <a href={PHONE_HREF} className={link}>
          {PHONE_DISPLAY}
        </a>
        , email{" "}
        <a href={`mailto:${EMAIL}`} className={link}>
          {EMAIL}
        </a>
        , or visit us at {ADDRESS}.
      </P>
    ),
  },
];

export default function TermsPage() {
  return (
    <SiteShell layout="bands">
      <LegalPage
        id="terms-heading"
        current="Terms and Conditions"
        title="Terms and Conditions"
        updated="9 October 2026"
        intro={
          <p>
            Please read these terms carefully. They set out the rules for using
            our website and the basis on which Al Afnan Furniture Transfer quotes
            for and carries out your move.
          </p>
        }
        sections={sections}
      />
    </SiteShell>
  );
}

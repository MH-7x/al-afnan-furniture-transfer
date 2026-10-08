import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { LegalPage, P, UL, type LegalSection } from "@/components/LegalPage";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | Al Afnan Furniture Transfer",
  description:
    "How Al Afnan Furniture Transfer collects, uses and protects your personal information when you visit our website, request a quote or book a move in the UAE.",
};

const link = "underline hover:text-ink";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <P>
          Al Afnan Furniture Transfer (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;) is a moving and furniture transfer company based in
          Sharjah, United Arab Emirates. We are the controller of the personal
          information described in this policy.
        </P>
        <P>
          Address: {ADDRESS}. Phone:{" "}
          <a href={PHONE_HREF} className={link}>
            {PHONE_DISPLAY}
          </a>
          . Email:{" "}
          <a href={`mailto:${EMAIL}`} className={link}>
            {EMAIL}
          </a>
          .
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <P>
          We collect only what we need to quote for, plan and carry out your move.
        </P>
        <UL>
          <li>
            <strong className="text-ink">Details you give us.</strong> Your name,
            phone number, the addresses you are moving from and to, your preferred
            moving date, and any message or inventory details you send us through
            the estimate form, by phone, by WhatsApp or by email.
          </li>
          <li>
            <strong className="text-ink">Details gathered during a job.</strong>{" "}
            Access instructions, building and parking arrangements, a list of the
            items to be moved, and any photos you choose to send so we can price
            the work accurately.
          </li>
          <li>
            <strong className="text-ink">Payment records.</strong> Invoices and
            proof of payment for completed jobs. We do not store card numbers on
            this website.
          </li>
          <li>
            <strong className="text-ink">Technical data.</strong> Like most
            websites, our hosting provider may log basic information such as IP
            address, browser type and the pages requested, for security and to
            keep the site running.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "estimate-form-and-whatsapp",
    title: "The estimate form and WhatsApp",
    body: (
      <>
        <P>
          Our estimate form does not send your details to a server on this
          website. When you press the submit button, it opens WhatsApp with your
          details pre-filled in a message addressed to our team, and you choose
          whether to send it.
        </P>
        <P>
          Once you send a message, it is handled through WhatsApp and is subject
          to WhatsApp&apos;s own terms and privacy policy. We recommend you do not
          include sensitive information, such as ID numbers or payment details, in
          that first message.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <P>We use your information to:</P>
        <UL>
          <li>prepare quotes and respond to your enquiries;</li>
          <li>schedule, staff and carry out your move or storage;</li>
          <li>contact you about your booking, such as arrival times or changes;</li>
          <li>issue invoices and keep the financial records the law requires;</li>
          <li>handle complaints and damage or loss claims;</li>
          <li>keep our website secure and working properly; and</li>
          <li>comply with our legal obligations.</li>
        </UL>
        <P>
          We do not sell your personal information and we do not use it for
          automated decision-making. We will only send you marketing messages if
          you have asked to receive them, and you can opt out at any time.
        </P>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Why we are allowed to use it",
    body: (
      <>
        <P>
          We process personal information under the UAE Federal Decree-Law No. 45
          of 2021 on the Protection of Personal Data and related regulations.
          Depending on the situation, we rely on:
        </P>
        <UL>
          <li>
            <strong className="text-ink">Your consent</strong>, for example when
            you send us an enquiry or ask us to contact you;
          </li>
          <li>
            <strong className="text-ink">Performing a contract</strong> with you,
            or taking steps you ask for before one is made;
          </li>
          <li>
            <strong className="text-ink">Legal obligations</strong>, such as
            accounting and record keeping; and
          </li>
          <li>
            <strong className="text-ink">Our legitimate interests</strong> in
            running a safe, reliable business, where these do not override your
            rights.
          </li>
        </UL>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <P>We share personal information only where it is needed:</P>
        <UL>
          <li>
            with our own crew, drivers and subcontracted movers or packers, who
            see the addresses, contact number and job details required to do the
            work;
          </li>
          <li>
            with service providers that support us, such as our website host,
            messaging and email services, and accountants;
          </li>
          <li>
            with building management or security when access passes or lift
            bookings are needed for your move; and
          </li>
          <li>
            with authorities or courts where the law requires it, or to protect
            our rights or safety.
          </li>
        </UL>
        <P>
          Some of these providers may store data outside the UAE. Where that
          happens, we take reasonable steps to make sure your information stays
          protected.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and tracking",
    body: (
      <>
        <P>
          This website does not currently use advertising or analytics cookies.
          We may use strictly necessary technologies to make the site load and
          work. If we add analytics or marketing tools in the future, we will
          update this policy and, where required, ask for your consent first.
        </P>
        <P>
          Our pages link to third-party services such as Google Maps and
          WhatsApp. If you follow those links, the third party may set its own
          cookies and its own privacy policy applies.
        </P>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <P>
        We keep enquiry details for as long as it takes to deal with your request
        and for a reasonable period afterwards in case you come back to us. Job
        and invoice records are kept for the period required by UAE law, then
        deleted or anonymised. If you ask us to delete your details sooner, we
        will do so unless we must keep them by law or to deal with an open claim.
      </P>
    ),
  },
  {
    id: "security",
    title: "Keeping it secure",
    body: (
      <P>
        We limit access to your information to the people who need it, and we use
        reasonable technical and organisational measures to protect it. No method
        of transmission or storage is completely secure, so we cannot guarantee
        absolute security. If a breach affecting you occurs, we will tell you and
        the authorities as the law requires.
      </P>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <P>Subject to the law, you may ask us to:</P>
        <UL>
          <li>
            tell you what personal information we hold about you and give you a
            copy;
          </li>
          <li>correct information that is wrong or incomplete;</li>
          <li>delete your information or restrict how we use it;</li>
          <li>stop contacting you for marketing; and</li>
          <li>stop processing that is based on your consent, by withdrawing it.</li>
        </UL>
        <P>
          To make a request, email us at{" "}
          <a href={`mailto:${EMAIL}`} className={link}>
            {EMAIL}
          </a>
          . We may need to confirm who you are first, and we aim to reply within
          30 days.
        </P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <P>
        Our services are for adults. We do not knowingly collect personal
        information from anyone under 18 through this website. If you believe a
        child has sent us their details, contact us and we will delete them.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <P>
        We may update this policy from time to time. The &ldquo;last
        updated&rdquo; date at the top shows when it last changed. Continued use
        of the website after an update means you accept the revised policy.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        Questions about this policy or how we handle your information? Call{" "}
        <a href={PHONE_HREF} className={link}>
          {PHONE_DISPLAY}
        </a>
        , email{" "}
        <a href={`mailto:${EMAIL}`} className={link}>
          {EMAIL}
        </a>
        , or write to us at {ADDRESS}.
      </P>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell layout="bands">
      <LegalPage
        id="privacy-heading"
        current="Privacy Policy"
        title="Privacy Policy"
        updated="9 October 2026"
        intro={
          <p>
            This policy explains what personal information Al Afnan Furniture
            Transfer collects when you use our website or hire us, how we use and
            protect it, and the choices you have.
          </p>
        }
        sections={sections}
      />
    </SiteShell>
  );
}

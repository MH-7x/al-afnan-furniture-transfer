import { MetadataTemplate } from "@/lib/MetadataTemplate";
import { SiteShell } from "@/components/SiteShell";
import { LegalPage, P, UL, type LegalSection } from "@/components/LegalPage";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export const metadata = MetadataTemplate({
  title: "Privacy Policy | Al Afnan Furniture Transfer",
  desc:
    "How Al Afnan Furniture Transfer collects, uses and protects your personal information when you visit our website, request a quote or book a move in the UAE.",
  path: "/privacy-policy",
});

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
            keep the site running, and our analytics tools (see Cookies and
            tracking) record how the site is used.
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
          When you submit our estimate form, the details you enter (your name,
          phone number, where you are moving from and to, your moving date and
          your message) are sent by email to our team so we can prepare your
          quote. The email is delivered through an email service provider that
          works on our behalf. We use these details only to reply to you and to
          plan your move. Please do not include sensitive information, such as ID
          numbers or payment details, in the form.
        </P>
        <P>
          If you contact us on WhatsApp instead, your message is handled through
          WhatsApp and is subject to WhatsApp&apos;s own terms and privacy
          policy. We recommend you do not include sensitive information in that
          first message.
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
          This website uses Google Tag Manager and Google Analytics to understand
          how visitors use the site, such as which pages are viewed and how
          people find us. These tools may set cookies and collect information
          such as your IP address, device and browser type, and the pages you
          view. We use this information to improve the website and our services.
          We also use Google Search Console, which reports how our pages perform
          in Google search.
        </P>
        <P>
          You can block or delete cookies in your browser settings, or opt out of
          Google Analytics with Google&apos;s browser add-on at{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            tools.google.com/dlpage/gaoptout
          </a>
          . Blocking cookies will not stop the website from working.
        </P>
        <P>
          Our pages link to or embed third-party services such as Google Maps and
          WhatsApp. These providers may set their own cookies, and their own
          privacy policies apply.
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
        path="/privacy-policy"
        title="Privacy Policy"
        updated="12 October 2026"
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

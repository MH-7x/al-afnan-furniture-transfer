export interface PlainFAQ {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: PlainFAQ[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // "<" is escaped so the payload can't close the <script> tag.
  return JSON.stringify(schema).replace(/</g, "\\u003c");
};

export interface GoogleReview {
  name: string;
  /** Relative time as Google shows it, e.g. "2 weeks ago". */
  time: string;
  text: string;
  /** 1–5, defaults to 5. */
  rating?: number;
  /** Reviewer photo in /public, e.g. "/reviews/1.jpg". Initials show if it is missing or fails to load. */
  image?: string;
  /** Background of the initials circle. */
  color?: string;
}

/** Overall figures shown in the header bar. */
export const GOOGLE_RATING = {
  score: "5.0",
  label: "Excellent",
  count: 14,
};

/** Add the remaining reviews here; photos go in public/reviews as 1.jpg, 2.jpg, … */
export const googleReviews: GoogleReview[] = [
  {
    name: "Ayesha Rahman",
    time: "2 weeks ago",
    text: "Shifted my 2BHK from Al Nahda Sharjah to Dubai Marina last weekend. Team showed up on time, wrapped everything properly (even my wine glasses survived) and the price matched exactly what they quoted on WhatsApp. No surprise charges which is rare honestly.",
    rating: 5,
    color: "#D97706",
  },
  {
    name: "Mohammed Al Hashimi",
    time: "a month ago",
    text: "Used Al Afnan for our office relocation from Business Bay to JLT. 3 floors of furniture, computers, files everything. Finished in one day with zero damage. The supervisor spoke Arabic which made coordination much easier for our staff.",
    rating: 5,
    color: "#1E40AF",
  },
  {
    name: "Priya Nair",
    time: "3 weeks ago",
    text: "Called them at 9pm because our landlord gave us short notice to vacate. They sent a team the very next morning. The guys were polite, careful with our baby's furniture, and helped reassemble the crib. Fair price for same-day service.",
    rating: 5,
    color: "#059669",
  },
  {
    name: "Hassan Qureshi",
    time: "a week ago",
    text: "Villa shift from Sharjah to Ajman. Heavy wooden dining table, 3 wardrobes, the works. Team disassembled everything, loaded 2 trucks and set it up again at the new villa. Took around 7 hours total. Hardworking boys and owner is responsive on calls.",
    rating: 5,
    color: "#7C3AED",
  },
  {
    name: "Sarah Thompson",
    time: "2 months ago",
    text: "As an expat moving within Dubai, I was worried about finding a trustworthy mover. Al Afnan was recommended by a colleague and they didn't disappoint. Proper packing materials, careful handling, everything arrived in perfect condition at my new place in Downtown.",
    rating: 5,
    color: "#DC2626",
  },
  {
    name: "Khalid Al Mansouri",
    time: "a month ago",
    text: "ممتاز جدا. نقلوا أثاث البيت من راس الخيمة الى ابوظبي بدون أي خدش. الفريق محترم والأسعار معقولة.",
    rating: 5,
    color: "#0891B2",
  },
  {
    name: "Ravi Kumar",
    time: "3 weeks ago",
    text: "Best movers I have used in 6 years of living in UAE. Moved from a studio in Al Majaz to a 1BHK in Al Barsha. Clear quote on WhatsApp with no hidden fees, team arrived on time and worked fast. Final bill matched the quote exactly. 10/10.",
    rating: 5,
    color: "#B45309",
  },
  {
    name: "Fatima Zahra",
    time: "5 days ago",
    text: "Needed just packing service because I was shipping items back home. They came with professional materials and packed around 40 boxes in 4 hours. Very organized with labelling. Extra care with my grandmother's crockery set 🙏",
    rating: 5,
    color: "#BE185D",
  },
  {
    name: "James O'Brien",
    time: "a month ago",
    text: "Second time using Al Afnan. First time was office furniture, this time my villa in Mirdif. What I like is they remember repeat customers. The lead mover knows how to handle solid wood furniture without a scratch. Will use again.",
    rating: 5,
    color: "#374151",
  },
  {
    name: "Noor Jahan",
    time: "2 weeks ago",
    text: "Got 4 quotes before choosing them. Al Afnan wasn't the cheapest but the most transparent on WhatsApp — explained exactly what's included: truck, labour, packing, assembly. Moving day was smooth and the price did not change at the end.",
    rating: 5,
    color: "#15803D",
  },
];

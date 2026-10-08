import {
  Award,
  Clock,
  FileCheck,
  Languages,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";
export const linkClass =
  "font-semibold text-signal underline decoration-1 underline-offset-4 hover:decoration-2";
export const serviceRows = [
  {
    id: "house-movers",
    title: "House Movers in UAE",
    image: "/house-moving-services-by-al-afnan.jpg",
    imageAlt:
      "Al Afnan house movers carrying a stretch-wrapped sofa through a hallway with labelled boxes ready to load",
    body: (
      <p>
        A house move is more than furniture. It&apos;s the kitchen cupboards,
        the appliances, the kids&apos; toys and whatever has collected in the
        storeroom. Our house shifting crews pack one room at a time and label
        every box with the room it&apos;s going to, so unpacking starts in the
        right place. Our{" "}
        <Link href="/house-movers-in-dubai" className={linkClass}>
          house movers in Dubai
        </Link>{" "}
        follow the same room-by-room method we use for family homes in Sharjah,
        Abu Dhabi and the northern emirates.
      </p>
    ),
  },
  {
    id: "villa-movers",
    title: "Villa Movers in UAE",
    image: "/villa-moving-services.jpg",
    imageAlt:
      "Al Afnan villa movers loading wrapped furniture into a truck outside a villa",
    body: (
      <p>
        A villa usually means larger wardrobes, outdoor furniture, maybe gym
        equipment in the garage, and a longer carry from the front door to the
        truck. Our carpenters dismantle the big pieces, bag and label the
        fittings, and rebuild them in the new villa. Our{" "}
        <Link href="/villa-movers-in-dubai" className={linkClass}>
          villa movers
        </Link>{" "}
        work in gated communities where moving hours and gate passes are set by
        the community, and we plan villa shifting in other emirates the same
        way.
      </p>
    ),
  },
  {
    id: "apartment-movers",
    title: "Apartment Movers in UAE",
    image: "/flat-apartment-movers.jpg",
    imageAlt:
      "Al Afnan apartment movers carrying wrapped furniture into a building service lift",
    body: (
      <p>
        Apartment moves in the UAE are usually decided by the service lift. Your
        building assigns a time slot and a shared loading bay, so we size the
        crew and pack in advance to finish inside that window. From studios to
        3-bedroom flats, our{" "}
        <Link href="/apartment-movers-in-dubai" className={linkClass}>
          apartment movers
        </Link>{" "}
        plan around tower rules, and we bring the same planning to apartment
        shifting in Sharjah, Ajman and Abu Dhabi.
      </p>
    ),
  },
  {
    id: "office-movers",
    title: "Office and Commercial Movers",
    image: "/commercial-office-movers.jpg",
    imageAlt:
      "Al Afnan office movers wheeling filing boxes and a wrapped office chair out of an office",
    body: (
      <p>
        A business loses money for every hour its office is closed, so most
        office relocations happen at night or over a weekend. Our 24/7 team can
        move workstations, filing cabinets and computers out after closing and
        set them up before staff return. Our{" "}
        <Link href="/office-movers-in-dubai" className={linkClass}>
          office movers
        </Link>{" "}
        handle commercial relocation services for small offices and full floors,
        and office moves in other emirates are quoted after a survey.
      </p>
    ),
  },
  {
    id: "furniture-movers",
    title: "Furniture Movers: Dismantling and Reassembly",
    image: "/furniture-moving-transfer.jpg",
    imageAlt:
      "Al Afnan furniture movers carrying a wardrobe wrapped in a furniture pad and stretch film",
    body: (
      <p>
        Sometimes you only need one wardrobe moved, or a second-hand sofa
        collected and delivered. We dismantle, wrap and refit single items or
        small loads without you booking a full house move. Our{" "}
        <Link href="/furniture-movers-in-dubai" className={linkClass}>
          furniture movers
        </Link>{" "}
        bag the fittings for each piece, so your bed goes back together with
        every bolt it came apart with.
      </p>
    ),
  },
  {
    id: "packing-services",
    title: "Professional Packing and Unpacking Services",
    image: "/packing-and-moving-services.jpg",
    imageAlt:
      "Al Afnan packers wrapping glassware and furniture in bubble wrap and stretch film",
    body: (
      <p>
        Packing takes longer than most people expect, and rushed packing is a
        common cause of breakages. Our packers use bubble wrap for glass,
        crockery and mirrors, stretch film for sofas and mattresses, and hanger
        boxes so clothes travel on their hangers. Book our{" "}
        <Link href="/packing-services-in-sharjah" className={linkClass}>
          packing and unpacking services
        </Link>{" "}
        on their own or as part of a full move, and add unpacking if you want
        cupboards and drawers filled at the new place.
      </p>
    ),
  },
  {
    id: "long-distance",
    title: "Long-Distance and Inter-Emirate Moving",
    image: "/movers-and-packers-in-sharjah.jpg",
    imageAlt:
      "Al Afnan moving crew preparing wrapped furniture and boxes for a move between emirates",
    body: (
      <p>
        On a long-distance move, the drive is only part of the job. The truck
        leaves one building and arrives at another, often with different moving
        hours, permit rules and lift bookings, so we coordinate both ends before
        moving day. Our Sharjah base puts Dubai and Ajman a short drive away,
        and we also run longer routes to Abu Dhabi, Al Ain, Ras Al Khaimah,
        Fujairah and Umm Al Quwain. Long-distance quotes are based on volume and
        distance.
      </p>
    ),
  },
];

export const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed and Insured in All 7 Emirates",
    body: "We're a licensed moving company in every UAE emirate. Our insurance covers your belongings from packing to setup, including accidents in corridors and service lifts, not only on the road.",
  },
  {
    icon: Award,
    title: "10 Years of Moving Experience in the UAE",
    body: "Ten years of UAE moves taught us to check lift sizes, truck hours and building permits at the quote stage, so problems get solved before moving day, not in the lobby.",
  },
  {
    icon: Star,
    title: "4.9★ Google Rating From Real Customers",
    body: "Customers rate us 4.9★ on Google for punctual crews, careful handling and fair prices, which is why they recommend us as reliable movers and packers in the UAE.",
  },
  {
    icon: FileCheck,
    title: "All-Inclusive Written Quotes With No Hidden Fees",
    body: "Your written quote covers packing materials, labour, dismantling, transport, reassembly and insurance, and only changes if you add items. Building permit fees go to your building, and we flag them upfront.",
  },
  {
    icon: Clock,
    title: "24/7 Availability for Same-Day and Emergency Moves",
    body: "Our team works around the clock for same-day, emergency, night and weekend moves. Same-day slots depend on the job size and your building's lift schedule, so call early.",
  },
  {
    icon: Wrench,
    title: "Trained Carpenters and Handymen in Our Team",
    body: "Our carpenters dismantle beds, wardrobes and desks, keep every fitting bagged and labelled, and rebuild everything properly at your new place.",
  },
  {
    icon: Languages,
    title: "Arabic, English, Urdu and Hindi Speaking Crews",
    body: "Our crews speak Arabic, English, Urdu and Hindi, so you can explain what's fragile and where each piece goes in the language you're comfortable with.",
  },
];

export const checklistQuestions = [
  "Is the company licensed, and does its insurance cover your belongings or only its truck?",
  "Is the quote in writing, and is it based on photos, a video or a visit rather than a guess over the phone?",
  "Are packing materials, dismantling and reassembly included, or charged on the day?",
  "For a move between emirates, does the company know the move rules at both buildings?",
  "Do recent Google reviews mention moves similar to yours in size and route?",
];

export const processSteps = [
  {
    number: "01",
    title: "Share Your Move Details",
    paragraphs: [
      "Send photos or a short video of each room on WhatsApp, along with both addresses, floor numbers and your preferred date. Mention anything heavy, fragile or valuable. For larger homes and offices, we can visit in person instead.",
    ],
  },
  {
    number: "02",
    title: "Get a Written Quote and Plan the Day",
    paragraphs: [
      "We reply with a written, all-inclusive price. Once you confirm, we agree on the start time, crew size and truck, and check the move rules for both buildings so permits and lift slots are booked in time.",
    ],
  },
  {
    number: "03",
    title: "Packing With the Right Materials",
    paragraphs: [
      "Each room is boxed and labelled for its new room. Fragile items get bubble wrap, upholstered furniture gets stretch film, and clothes go into hanger boxes. Set aside passports, cash, jewellery and documents beforehand; they travel with you, not in the truck.",
    ],
  },
  {
    number: "04",
    title: "Dismantling, Loading and the Drive",
    paragraphs: [
      "Our carpenters dismantle beds, wardrobes and desks and bag the fittings for each piece. Heavy furniture goes in first and boxes are packed around it so the load stays put, whether it's a short local move or a long drive to another emirate.",
    ],
  },
  {
    number: "05",
    title: "Unloading, Reassembly and Final Check",
    paragraphs: [
      "Boxes go straight to their labelled rooms, and furniture is rebuilt and placed where you want it. Before we leave, we walk through the home with you so anything that needs adjusting is fixed on the spot. Add unpacking if you want the boxes emptied too.",
    ],
  },
];

export const emirateCards: { title: string; body: React.ReactNode }[] = [
  {
    title: "Movers and Packers in Dubai",
    body: (
      <>
        Our{" "}
        <Link href="/movers-and-packer-in-dubai" className={linkClass}>
          movers and packers in Dubai
        </Link>{" "}
        handle tower moves in Dubai Marina, JLT and Business Bay, where service
        lift slots set the pace, and villa moves in Mirdif and Dubai Hills,
        where gate passes and community moving hours apply. We also cover JVC,
        Palm Jumeirah, Dubai Silicon Oasis, Al Barsha, Downtown Dubai and Deira.
      </>
    ),
  },
  {
    title: "Movers and Packers in Sharjah",
    body: (
      <>
        Sharjah is where we&apos;re based, so local moves here are quick to
        arrange. Our{" "}
        <Link href="/movers-in-sharjah" className={linkClass}>
          movers in Sharjah
        </Link>{" "}
        cover Al Majaz, Al Nahda, Al Qasimia, Al Khan, Muwaileh and Al Zahia,
        along with the rest of the emirate. Moves between Sharjah and Dubai come
        up often in our reviews.
      </>
    ),
  },
  {
    title: "Movers and Packers in Ajman",
    body: (
      <>
        Ajman sits right next to Sharjah, so short moves between the two are
        straightforward to schedule. Our{" "}
        <Link href="/movers-in-ajman" className={linkClass}>
          movers in Ajman
        </Link>{" "}
        work in Al Nuaimiya, Al Rashidiya, Al Jurf and along the Corniche, and
        handle moves from Ajman to Dubai and further afield.
      </>
    ),
  },
  {
    title: "Movers and Packers in Ras Al Khaimah",
    body: (
      <>
        Our{" "}
        <Link href="/movers-in-ras-al-khaimah" className={linkClass}>
          movers in Ras Al Khaimah
        </Link>{" "}
        cover Al Nakheel, Al Hamra, Al Rams and the rest of the emirate, for
        local moves and for longer runs to Dubai, Sharjah and Abu Dhabi.
      </>
    ),
  },
  {
    title: "Movers and Packers in Abu Dhabi",
    body: (
      <>
        We move homes and offices across Abu Dhabi, including Al Reem Island,
        Khalifa City, Al Raha Beach, Yas Island and Mussafah, as well as Al Ain.
        Many of these moves start in another emirate, so we confirm the arrival
        window with your Abu Dhabi building before the truck is loaded.
      </>
    ),
  },
  {
    title: "Movers and Packers in Fujairah and Umm Al Quwain",
    body: (
      <>
        We also move apartments, villas and offices in Fujairah city, Dibba and
        Umm Al Quwain. These are usually long-distance moves, quoted on volume
        and distance, with the start time planned around the drive.
      </>
    ),
  },
];

export const priceRows: [string, string][] = [
  ["Studio", "800 – 1,200"],
  ["1 bedroom apartment", "1,100 – 1,600"],
  ["2 bedroom apartment", "1,700 – 2,600"],
  ["3 bedroom apartment", "2,800 – 4,000"],
  ["3–4 bedroom villa", "4,000 – 6,000"],
  ["5+ bedroom villa", "From 6,500"],
  ["Office and commercial", "Price on estimate"],
];

export const priceChangers = [
  "How much furniture and how many boxes you have",
  "Floor level, lift access and the distance from the truck to your door",
  "Large items that need dismantling, like wardrobes and king-size beds",
  "Whether the move stays in one emirate or crosses into another",
  "Access at both ends: service lift slots, truck parking and gate passes",
  "Heavy or specialty items that need extra crew or equipment",
];

export const uaeFaqs = [
  {
    question: "How much do movers and packers charge in the UAE?",
    answer: (
      <p>
        Within one emirate, a studio move typically costs AED 800–1,200, a
        2-bedroom apartment AED 1,700–2,600 and a 3–4 bedroom villa AED
        4,000–6,000. Office moves and moves between emirates, such as Dubai to
        Abu Dhabi, are quoted on size, access and distance. See the{" "}
        <Link href="#moving-prices">price guide</Link> above, or send photos on
        WhatsApp for an exact figure.
      </p>
    ),
  },
  {
    question: "What is included in a full-service move with Al Afnan?",
    answer: (
      <p>
        A full-service move covers packing materials, packing, dismantling of
        large furniture, loading, transport, unloading, reassembly and insurance
        for your belongings while we handle them. Unpacking can be added.
        Building permit fees and refundable lift deposits are separate and paid
        to your building.
      </p>
    ),
  },
  {
    question: "Are Al Afnan movers licensed and insured in the UAE?",
    answer: (
      <p>
        Yes. Al Afnan is a licensed moving company operating in all seven UAE
        emirates. Our insurance covers your belongings during packing, loading,
        the drive, unloading and reassembly. We&apos;re happy to share licensing
        and insurance details before you book.
      </p>
    ),
  },
  {
    question: "Which emirates do you cover?",
    answer: (
      <p>
        We cover all seven emirates: Dubai, Sharjah, Abu Dhabi (including Al
        Ain), Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Our base is in
        Al Majaz, Sharjah. Send both addresses and we&apos;ll confirm the
        details for your move.
      </p>
    ),
  },
  {
    question: "Do you provide packing materials?",
    answer: (
      <p>
        Yes, and they&apos;re included in your written quote. We bring moving
        boxes, bubble wrap for glass and crockery, stretch film for sofas and
        mattresses, and hanger boxes so clothes travel on their hangers.
      </p>
    ),
  },
  {
    question:
      "Can movers handle fragile items like glass tables, mirrors and TVs?",
    answer: (
      <p>
        Yes. Glass, mirrors and framed pictures are wrapped in bubble wrap, and
        TVs and screens are wrapped and carried upright. Point out anything
        fragile or high-value when you send photos so we bring enough materials.
        Jewellery, cash and important documents should stay with you rather than
        go in the truck.
      </p>
    ),
  },
  {
    question: "Do your movers dismantle and reassemble furniture?",
    answer: (
      <p>
        Yes. Our trained carpenters take apart beds, wardrobes, dining tables,
        office desks and flat-pack furniture, bag the fittings for each piece,
        and rebuild everything at the new address. This is included in your
        quote. Mention very large items when you send photos so we bring the
        right tools.
      </p>
    ),
  },
  {
    question: "How far in advance should I book my UAE move?",
    answer: (
      <p>
        One to two weeks ahead gives you the widest choice of dates, especially
        near month-end when many UAE leases finish. For large villas, offices
        and inter-emirate moves, allow extra time for lift bookings and
        community permits. For urgent moves, we also take same-day and next-day
        bookings when a crew and truck are free.
      </p>
    ),
  },
  {
    question: "When is the best time to move in the UAE?",
    answer: (
      <p>
        Mid-month weekdays usually give you the most choice, because buildings
        get busy around month-end lease changeovers. In summer, roughly June to
        September, daytime temperatures often pass 40°C, so early morning or
        evening moves are easier on the crew and on heat-sensitive items like
        electronics, candles and cosmetics. Check your building&apos;s permitted
        moving hours before you pick a time.
      </p>
    ),
  },
  {
    question:
      "Do you handle inter-emirate moves like Dubai to Sharjah or Sharjah to Abu Dhabi?",
    answer: (
      <p>
        Yes. Common routes include Dubai to Sharjah, Sharjah to Dubai, Ajman to
        Dubai, Dubai to Abu Dhabi and Sharjah to Ras Al Khaimah. We plan loading
        and arrival times around the moving hours at both buildings, and price
        the move on volume and distance.
      </p>
    ),
  },
  {
    question: "Do you offer same-day or emergency moving services?",
    answer: (
      <p>
        Yes. Our team works 24/7, so same-day and emergency moves are possible
        when a crew and truck are free. Whether we can move you today depends on
        the size of the job and your building&apos;s lift availability, so call
        as early as you can and we&apos;ll tell you straight away what&apos;s
        possible.
      </p>
    ),
  },
  {
    question: "Do you work on weekends and at night?",
    answer: (
      <p>
        Yes. We work day shifts, night shifts and weekends. Night moves suit
        offices that can&apos;t close during business hours, and weekend moves
        suit people with weekday jobs. Many towers set fixed moving hours, so
        send us your building&apos;s rules and we&apos;ll schedule inside them.
      </p>
    ),
  },
  {
    question: "Can I get a free quote without a home visit?",
    answer: (
      <p>
        Yes. Send photos or a short video on WhatsApp with both addresses, your
        preferred date and the floor you&apos;re on, and we&apos;ll reply with a
        written quote. For large villas and offices, a home visit gives a more
        accurate price, and estimates are free either way.
      </p>
    ),
  },
  {
    question: "Should I hire movers and packers or just rent a truck?",
    answer: (
      <p>
        It depends on how much help you need. A truck rental usually gives you
        the vehicle and a driver, while you handle packing, dismantling and
        carrying. Packers and movers handle the whole job, including packing
        materials, carpenters for furniture and insurance for your belongings.
        For a whole apartment or villa, the full service usually saves time and
        breakages.
      </p>
    ),
  },
  {
    question: "What languages does your moving team speak?",
    answer: (
      <p>
        Our crews speak Arabic, English, Urdu and Hindi. You can explain
        what&apos;s fragile, what goes where and what stays behind in the
        language you&apos;re most comfortable with, which also helps when
        dealing with building security and community guards.
      </p>
    ),
  },
  {
    question: "Do you move offices and commercial spaces?",
    answer: (
      <p>
        Yes. We relocate workstations, filing cabinets, computers and reception
        furniture across the UAE. Most offices move after hours or over a
        weekend, and our 24/7 team can run the move overnight so staff return to
        a working office. Office moves are priced on estimate, so send a floor
        plan or photos.
      </p>
    ),
  },
  {
    question:
      "What makes Al Afnan different from other movers and packers in UAE?",
    answer: (
      <p>
        With Al Afnan you get a written all-inclusive quote that only changes if
        you add items, trained carpenters who dismantle and rebuild furniture as
        part of the job, and a team that works 24/7 for same-day, night and
        weekend moves. Add 10 years of UAE moves, a 4.9★ Google rating and crews
        who speak four languages. Use the{" "}
        <Link href="#why-choose">checklist above</Link> to compare us with any
        other mover.
      </p>
    ),
  },
];

export const bookingPoints = [
  "Free, written quotes",
  "No hidden handling fees",
  "Licensed and insured in all 7 emirates",
  "24/7 moving team",
];

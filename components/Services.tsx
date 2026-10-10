import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  number: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  cta?: string;
  href?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "house-movers",
    title: "House Movers in Sharjah",
    category: "Home Relocation",
    number: "01",
    image: "/house-moving-services-by-al-afnan.jpg",
    imageAlt:
      "House movers in Sharjah carefully handling household furniture during a residential move by Al Afnan Furniture Transfer",
    paragraphs: [
      "Our house moving service in sharjah is designed for residential relocations where household furniture, appliances, personal belongings, and other items need to be prepared, handled, transported, and unloaded at the new property.",
      "We can support the different stages of a home move, from packing and furniture preparation to loading, transportation, and unloading.",
    ],
    cta: "House Moving Services",
    href: "/house-movers-in-sharjah",
  },
  {
    id: "apartment-movers",
    title: "Flat & Apartment Movers in Sharjah",
    category: "Apartment Shifting",
    number: "02",
    image: "/flat-apartment-movers.jpg",
    imageAlt:
      "Apartment movers in Sharjah carefully moving wrapped furniture through a residential building corridor",
    paragraphs: [
      "Apartment moves often involve working within building access arrangements, lifts, corridors, parking areas, and limited loading spaces. Our moving team handles the practical stages of apartment shifting while taking care of your furniture and belongings during the move.",
      "Whether you are changing apartments within Sharjah or relocating to another UAE emirate, the service can be planned around the requirements of your move.",
    ],
    cta: "Apartment Moving Services",
    href: "/apartment-movers-in-sharjah",
  },
  {
    id: "villa-movers",
    title: "Villa Movers in Sharjah",
    category: "Villa Relocation",
    number: "03",
    image: "/villa-moving-services.jpg",
    imageAlt:
      "Villa movers in Sharjah professionally handling furniture and household belongings during a large residential relocation",
    paragraphs: [
      "Villa relocations can involve a larger number of rooms and different types of furniture and household belongings. Proper preparation helps make the move easier to organize and reduces unnecessary handling.",
      "Our villa moving service in sharjah covers the key moving stages, including packing, furniture preparation, loading, transportation, unloading, and furniture reassembly where required.",
    ],
    cta: "Villa Moving Services",
    href: "/villa-movers-in-sharjah",
  },
  {
    id: "commercial-movers",
    title: "Commercial & Office Movers in Sharjah",
    category: "Office & Business",
    number: "04",
    image: "/commercial-office-movers.jpg",
    imageAlt:
      "Commercial office movers in Sharjah carefully relocating desks, office furniture and equipment",
    paragraphs: [
      "An office relocation in sharjah requires more than moving desks and chairs. Workstations, office furniture, equipment, documents, and other business items need to be handled in an organized way.",
      "Al Afnan Furniture Transfer provides office and commercial moving support for businesses relocating within Sharjah or moving between UAE emirates.",
    ],
    cta: "Commercial Moving Services",
    href: "/office-movers-in-sharjah",
  },
  {
    id: "furniture-movers",
    title: "Furniture Moving & Transfer in Sharjah",
    category: "Specialized Transfer",
    number: "05",
    image: "/furniture-moving-transfer.jpg",
    imageAlt:
      "Furniture movers in Sharjah carefully wrapping and transporting individual furniture items",
    paragraphs: [
      "If you only need specific furniture moved, a complete household relocation may not be necessary. Our furniture moving service in sharjah can help with the transportation of individual or multiple furniture items between locations.",
      "Furniture may require preparation, dismantling, protective wrapping, careful loading, transportation, unloading, and reassembly depending on its size and condition.",
    ],
    cta: "Furniture Moving Services",
    href: "/furniture-transfer-in-sharjah",
  },
  {
    id: "packing-services",
    title: "Packing and Moving Services in Sharjah",
    category: "Full Packaging",
    number: "06",
    image: "/packing-and-moving-services.jpg",
    imageAlt:
      "Professional packing and moving team in Sharjah wrapping household furniture with protective packing materials",
    paragraphs: [
      "Packing is an important part of a safe and organized move. We provide packing support using quality materials including bubble wrap, stretch film, and hanger boxes for clothes.",
      "Our packing and moving service brings preparation and transportation together, helping customers manage the move through a more coordinated process.",
    ],
    cta: "Packing Services",
    href: "/packing-services-in-sharjah",
  },
];

/**
 * Services as a numbered editorial index: photo and text alternate sides,
 * rows separated by hairlines. Numbers come from a CSS counter.
 */
export function Services({
  title,
  desc,
  services,
}: {
  title?: string;
  desc?: ReactNode;
  services?: ServiceItem[];
}) {
  return (
    <section id="services" className="scroll-mt-28 bg-white section-y">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
          <h2 className="lg:col-span-5 text-ink">
            {title || "Our Moving Services in Sharjah"}
          </h2>
          <div className="lg:col-span-7 space-y-4 t-body text-muted-foreground measure">
            {desc || (
              <>
                <p>
                  Every move has different requirements. A family moving from an
                  apartment may need careful packing and furniture handling, while
                  a villa relocation can involve larger household items and more
                  extensive preparation. Office moves often require a more
                  organized approach to minimize disruption.
                </p>
                <p>
                  Al Afnan Furniture Transfer provides moving services in Sharjah
                  for homes, apartments, villas, offices, and individual furniture
                  transfers.
                </p>
              </>
            )}
          </div>
        </div>

        <ol className="mt-14 border-t border-ink [counter-reset:service]">
          {(services ? services : servicesData).map((service, index) => (
            <li
              key={service.id}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 lg:gap-14 items-center border-b border-line py-10 lg:py-14 [counter-increment:service]"
            >
              <div
                className={`md:col-span-5 relative aspect-4/3 overflow-hidden rounded-xl bg-paper-2 ${
                  index % 2 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className={`md:col-span-7 ${index % 2 ? "md:order-1" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span
                    className="t-num text-4xl font-bold leading-none text-signal before:content-[counter(service,decimal-leading-zero)]"
                    aria-hidden="true"
                  />
                  <span className="t-label text-muted-foreground">{service.category}</span>
                </div>
                <h3 className="mt-4 text-ink">{service.title}</h3>
                <div className="mt-4 space-y-3 t-body text-muted-foreground measure">
                  {service.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
                {service.href && service.cta && (
                  <Button
                    variant="outline"
                    render={<Link href={service.href} />}
                    className="mt-7 group/btn"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Services;

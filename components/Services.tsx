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
  cta: string;
  href: string;
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
    href: "#",
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
    href: "#",
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
    href: "#",
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
    href: "#",
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
    href: "#",
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
    href: "#",
  },
];

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
    <section
      id="services"
      className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-[2.65rem] text-center font-extrabold ">
          {title || "Our Moving Services in Sharjah"}
        </h2>

        <div className="space-y-3.5 mt-4 text-muted-foreground text-sm sm:text-base text-center">
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

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 sm:mt-12">
        {(services ? services : servicesData).map((service) => (
          <article
            key={service.id}
            className="group relative flex flex-col bg-card rounded-2xl border border-border/80 shadow-xs hover:shadow-xl duration-300 overflow-hidden"
          >
            {/* 4:3 Ratio Image Container */}
            <div className="aspect-4/3 w-full relative overflow-hidden flex flex-col justify-between p-5 select-none">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center "
              />

              {/* Top Header inside 4:3 area */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-full bg-background/95 backdrop-blur-xs text-xs font-semibold text-primary shadow-2xs">
                  {service.category}
                </span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold ">
                  {service.title}
                </h3>

                <div className="space-y-3 mt-3.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {service.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Action Button Link */}
              <div className="mt-6 pt-5 border-t border-border/50">
                <Button
                  variant="outline"
                  size="lg"
                  render={<Link href={service.href} />}
                  className="w-full justify-between rounded-xl font-semibold text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 group/btn"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="size-4 text-primary group-hover:text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

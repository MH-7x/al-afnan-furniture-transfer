import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CostFactor {
  id: string;
  title: string;
  description: string;
}

const costFactors: CostFactor[] = [
  {
    id: "property-size",
    title: "Size and type of property",
    description:
      "Moving a studio or apartment generally involves a different workload from relocating a larger house, villa or office.",
  },
  {
    id: "belongings-volume",
    title: "Volume of belongings",
    description:
      "The amount of furniture, appliances, boxes and household items affects the labour and transportation required.",
  },
  {
    id: "packing-requirements",
    title: "Packing requirements",
    description:
      "If you need complete packing services, the quantity and type of packing materials required can affect the overall quotation. Fragile or delicate belongings may require additional protective wrapping.",
  },
  {
    id: "furniture-dismantling",
    title: "Furniture dismantling and reassembly",
    description:
      "Large wardrobes, beds, tables and other furniture may need to be dismantled before transportation and reassembled at the destination.",
  },
  {
    id: "moving-distance",
    title: "Moving distance",
    description:
      "A local move within Sharjah has different transportation requirements from a move between Sharjah and another UAE emirate.",
  },
  {
    id: "access-conditions",
    title: "Access and handling conditions",
    description:
      "Floors, lifts, stairs, parking access and the distance between the property and moving vehicle can affect the amount of time and labour involved.",
  },
  {
    id: "schedule-timing",
    title: "Moving date and schedule",
    description:
      "The planned moving date and the scope of work can influence how the move needs to be organized.",
  },
  {
    id: "additional-services",
    title: "Additional services",
    description:
      "Unpacking, furniture handling, specialized moving assistance or other requested services can change the scope of the move.",
  },
];

export function MovingCosts() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24"
      aria-labelledby="moving-costs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="max-w-4xl">
          <span className="sm:text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Transparent Moving Estimates
          </span>
          <h2
            id="moving-costs-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold "
          >
            Moving Costs in Sharjah
          </h2>

          <div className="mt-5 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              The cost of hiring movers in Sharjah depends on the details of
              your move rather than a single fixed rate. A small apartment move
              with limited furniture will usually require a different level of
              packing, labour and transportation than a villa or full office
              relocation. The moving company cost can also change depending on
              the distance, number of items and services you need.
            </p>
            <p>
              At Al Afnan Furniture Transfer, we provide{" "}
              <strong className="text-foreground font-semibold">
                free moving estimates
              </strong>{" "}
              so you can understand the expected cost based on your actual
              moving requirements. Our approach is to provide transparent,
              all-inclusive quotes with no hidden fees.
            </p>
          </div>
        </div>

        {/* Factors Sub-section */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-border">
          <div className="max-w-3xl">
            <h3
              id="factors-heading"
              className="text-2xl sm:text-3xl font-semibold "
            >
              What Affects the Cost of Moving?
            </h3>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Several practical factors can influence{" "}
              <strong className="text-foreground font-semibold">
                moving costs in Sharjah
              </strong>
              , including:
            </p>
          </div>

          {/* Accessible, Semantic Factors List */}
          <ul
            role="list"
            aria-labelledby="factors-heading"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {costFactors.map((factor, index) => (
              <li
                key={factor.id}
                className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <strong className="text-base font-semibold text-foreground">
                      {factor.title}
                    </strong>
                    <span
                      className="text-xs font-mono font-semibold text-primary bg-muted px-2 py-1 rounded-md shrink-0"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Editorial Takeaway Note */}
        <section
          aria-label="Moving estimate guidance"
          className="mt-10 rounded-2xl bg-muted/40  p-6 sm:p-8"
        >
          <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
            Because every relocation is different, an accurate{" "}
            <strong className="text-foreground font-semibold">
              moving estimate in Sharjah
            </strong>{" "}
            is more useful than relying on a generic advertised price. Providing
            details about your property, belongings, locations and required
            services allows the moving team to understand the work involved and
            prepare a quotation suited to your move.
          </p>
        </section>

        {/* Action / Free Estimate Banner */}
        <div className="mt-8 rounded-2xl bg-primary text-primary-foreground p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Contact For Free Moving Estimates in Sharjah
            </h3>
            <p className="text-white/85 text-sm ">
              For a clear idea of your expected moving charges, contact{" "}
              <strong className="text-white font-semibold">
                Al Afnan Furniture Transfer
              </strong>{" "}
              for a free estimate. We can discuss your requirements and help you
              plan the services you actually need.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Button
              variant="white"
              size="lg"
              render={<Link href="#" />}
              className="py-6 px-6 font-semibold shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="size-4 ml-1.5 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovingCosts;

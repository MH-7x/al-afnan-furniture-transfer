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

/** Moving costs: intro split, numbered cost factors, guidance note and estimate panel. */
export function MovingCosts() {
  return (
    <section
      id="pricing"
      className="scroll-mt-28 bg-white section-y"
      aria-labelledby="moving-costs-heading"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="t-label text-signal block">Transparent Moving Estimates</span>
            <h2 id="moving-costs-heading" className="mt-3 text-ink">
              Moving Costs in Sharjah
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 t-body text-muted-foreground measure lg:pt-9">
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
              <strong className="text-ink font-semibold">free moving estimates</strong>{" "}
              so you can understand the expected cost based on your actual
              moving requirements. Our approach is to provide transparent,
              all-inclusive quotes with no hidden fees.
            </p>
          </div>
        </div>

        {/* Cost factors */}
        <div className="mt-16 lg:mt-20">
          <h3 id="factors-heading" className="text-ink">
            What Affects the Cost of Moving?
          </h3>
          <p className="mt-3 t-body text-muted-foreground">
            Several practical factors can influence{" "}
            <strong className="text-ink font-semibold">moving costs in Sharjah</strong>
            , including:
          </p>

          <ul
            role="list"
            aria-labelledby="factors-heading"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 border-t border-ink"
          >
            {costFactors.map((factor, index) => (
              <li
                key={factor.id}
                className="reveal grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-7"
              >
                <span className="t-num text-3xl font-bold leading-none text-signal" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong className="t-h4 block text-ink">{factor.title}</strong>
                  <p className="mt-2 t-body text-muted-foreground">{factor.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Guidance note */}
          <section
            aria-label="Moving estimate guidance"
            className="lg:col-span-6 rounded-xl bg-paper-2 p-7 sm:p-9"
          >
            <p className="t-body text-steel">
              Because every relocation is different, an accurate{" "}
              <strong className="text-ink font-semibold">moving estimate in Sharjah</strong>{" "}
              is more useful than relying on a generic advertised price. Providing
              details about your property, belongings, locations and required
              services allows the moving team to understand the work involved and
              prepare a quotation suited to your move.
            </p>
          </section>

          {/* Estimate panel */}
          <div
            data-surface="dark"
            className="lg:col-span-6 flex flex-col justify-between gap-6 rounded-xl bg-ink p-7 sm:p-9 text-fog"
          >
            <div>
              <h3 className="text-white">Contact For Free Moving Estimates in Sharjah</h3>
              <p className="mt-3 t-body">
                For a clear idea of your expected moving charges, contact{" "}
                <strong className="text-white font-semibold">Al Afnan Furniture Transfer</strong>{" "}
                for a free estimate. We can discuss your requirements and help you
                plan the services you actually need.
              </p>
            </div>
            <Button render={<Link href="#estimate" />} className="self-start">
              <span>Request Free Estimate</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovingCosts;

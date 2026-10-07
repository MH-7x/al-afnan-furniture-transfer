import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessStep {
  number: string;
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us About Your Move",
    paragraphs: [
      "Start by sharing the basic details of your move with our team. This may include the type of property, the items that need to be moved, the collection and destination locations, and whether you require packing or furniture preparation.",
      "Understanding your requirements helps us plan the appropriate moving support for your relocation.",
    ],
  },
  {
    number: "02",
    title: "Get Your Moving Estimate",
    paragraphs: [
      <>
        Once we understand the requirements of your move, we provide a{" "}
        <strong className="text-foreground font-semibold">
          free moving estimate
        </strong>
        . Our transparent pricing approach is designed to make the expected cost
        clear, with{" "}
        <strong className="text-foreground font-semibold">
          no hidden fees
        </strong>
        .
      </>,
      "The estimate can take into account the scope of the move, the belongings involved, packing requirements, and other services needed.",
    ],
  },
  {
    number: "03",
    title: "Plan Your Moving Date",
    paragraphs: [
      "After discussing the moving requirements and estimate, you can arrange a suitable moving date with our team.",
      "Planning ahead gives you time to prepare your belongings, coordinate access to the current and new property, and organize any building or office requirements related to the move.",
    ],
  },
  {
    number: "04",
    title: "Pack and Prepare Your Belongings",
    paragraphs: [
      "Before transportation, your belongings are prepared for handling. Depending on the requirements of the move, this can include packing household or office items, protecting furniture, and dismantling furniture where necessary.",
      <>
        We use quality packing materials such as{" "}
        <strong className="text-foreground font-semibold">
          bubble wrap, stretch film, and hanger boxes for clothes
        </strong>{" "}
        to help protect items during handling and transportation.
      </>,
    ],
  },
  {
    number: "05",
    title: "Load and Transport Your Items",
    paragraphs: [
      "Once everything is prepared, the moving team loads the items for transportation. Furniture and belongings are handled and organized during loading before being transported to the destination.",
      <>
        Al Afnan Furniture Transfer provides moving services within Sharjah and
        across{" "}
        <strong className="text-foreground font-semibold">
          all seven UAE emirates
        </strong>
        , supporting both local and inter-emirate relocations.
      </>,
    ],
  },
  {
    number: "06",
    title: "Unload, Place and Reassemble Furniture",
    paragraphs: [
      "At the destination, the team unloads the transported belongings and assists with the final stage of the move. Furniture can be placed as required, and items that were dismantled for transportation can be reassembled where needed.",
      "This completes the main moving process and leaves you with your belongings ready for the next stage of settling into your home, office, or new space.",
    ],
  },
];

/** Moving process on a black band: sticky intro left, numbered steps right. */
export function MovingProcess({
  title,
  desc,
  process,
  ctaHref = "#estimate",
  ctaLabel = "Start Your Move Today",
}: {
  title?: string;
  /** Pass null to hide the description paragraph entirely. */
  desc?: string | null;
  process?: ProcessStep[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const steps = process && process.length > 0 ? process : processSteps;

  return (
    <section id="process" data-surface="dark" className="scroll-mt-28 bg-ink text-fog section-y">
      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-white">{title || "How Our Moving Process Works"}</h2>

            {desc !== null && (
              <p className="mt-5 t-lead measure">
                {desc || (
                  <>
                    A well-planned move is easier to manage when you know what
                    to expect at each stage. At Al Afnan Furniture Transfer, we
                    organize the moving process around your requirements, from
                    the initial discussion and estimate through packing,
                    transportation, unloading, and furniture reassembly.
                  </>
                )}
              </p>
            )}

            <Button
              render={
                ctaHref.startsWith("http") ? (
                  <a href={ctaHref} target="_blank" rel="noopener noreferrer" />
                ) : (
                  <Link href={ctaHref} />
                )
              }
              className="mt-8"
            >
              <span>{ctaLabel}</span>
              <ArrowRight />
            </Button>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {steps.map((step) => (
            <li
              key={step.number}
              className="reveal grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 border-t border-ink-3 py-8 first:border-t-2 first:border-signal"
            >
              <span className="t-num text-4xl sm:text-5xl font-bold leading-none text-signal-bright">
                {step.number}
              </span>
              <div>
                <h3 className="text-white">{step.title}</h3>
                <div className="mt-3 space-y-3 t-body [&_strong]:text-white [&_a]:text-signal-bright [&_a]:underline">
                  {step.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default MovingProcess;

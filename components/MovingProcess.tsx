import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessStep {
  number: string;
  title: string;
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

export function MovingProcess({
  title,
  desc,
  process,
}: {
  title?: string;
  desc?: string;
  process?: ProcessStep[];
}) {
  const steps = process && process.length > 0 ? process : processSteps;

  return (
    <section
      id="process"
      className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left Column: Outer Column stretches to full height of timeline */}
        <div className="lg:col-span-5">
          {/* Inner container with sticky positioning */}
          <div className="lg:sticky lg:top-28 flex flex-col">
            <h2 className="text-3xl sm:text-5xl tracking-tight font-extrabold">
              {title || "How Our Moving Process Works"}
            </h2>

            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              {desc || (
                <>
                  A well-planned move is easier to manage when you know what to
                  expect at each stage. At Al Afnan Furniture Transfer, we
                  organize the moving process around your requirements, from the
                  initial discussion and estimate through packing,
                  transportation, unloading, and furniture reassembly.
                </>
              )}
            </p>

            <Button
              variant="secondary"
              size="lg"
              render={<Link href="#" />}
              className="w-fit mt-6 font-semibold shadow-sm"
            >
              <span>Start Your Move Today</span>
              <ArrowRight className="size-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Right Column: Connected Vertical Timeline */}
        <div className="lg:col-span-7 flex flex-col">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex items-stretch gap-4 sm:gap-6 group"
            >
              {/* Numbered Node Pin & Line Segment */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="size-9 sm:size-10 rounded-full bg-primary text-white font-semibold text-xs sm:text-sm flex items-center justify-center shrink-0 ring-4 ring-background z-10 font-mono shadow-xs group-hover:scale-105 transition-transform"
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 bg-gradient-to-b from-primary via-primary/50 to-secondary/60 my-1"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Step Card Content */}
              <div className="flex-1 bg-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-2xs hover:border-primary/40 hover:shadow-md transition-all duration-200 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <div className="space-y-2.5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {step.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovingProcess;

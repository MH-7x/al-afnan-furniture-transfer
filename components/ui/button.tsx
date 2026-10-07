import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent font-sans font-semibold leading-tight text-center whitespace-normal cursor-pointer transition-colors duration-150 outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--focus) disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /** Signal red: the one primary action in a block. */
        default: "bg-primary text-primary-foreground hover:bg-signal-hover",
        /** Ink: secondary action on paper. */
        secondary: "bg-ink text-white hover:bg-ink-3",
        /** Hairline on paper. */
        outline:
          "border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
        /** Hairline on ink or red surfaces. */
        "outline-light":
          "border-white/45 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink",
        /** White fill on ink or red surfaces. */
        white: "bg-white text-ink hover:bg-paper-2",
        ghost: "text-ink hover:bg-muted aria-expanded:bg-muted",
        link: "px-0 text-primary underline decoration-1 underline-offset-4 hover:decoration-2",
      },
      size: {
        xs: "min-h-7 gap-1 px-2.5 py-1 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "min-h-9 gap-1.5 px-3 py-1.5 text-sm",
        lg: "min-h-12 px-5 py-2.5 text-base",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "lg",
  render,
  nativeButton,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      render={render}
      nativeButton={nativeButton ?? (render ? false : undefined)}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Standalone WhatsApp call-to-action for use inside `.service-content`
 * articles. The `!` modifiers keep the button's own colours: the article
 * stylesheet otherwise paints every `<a>` as an underlined primary-coloured link.
 */
export function ServiceCTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6">
      <Button
        size="lg"
        render={<a href={href} target="_blank" rel="noopener noreferrer" />}
        className="h-auto py-3.5 px-6 font-semibold whitespace-normal text-center text-primary-foreground! no-underline! hover:text-primary-foreground!"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        <span>{children}</span>
      </Button>
    </div>
  );
}

export default ServiceCTAButton;

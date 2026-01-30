import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="article"
    tabIndex={0}
    className={cn(
      "rounded-2xl border border-white/10 bg-[#00416a] text-white shadow-sm transition-all duration-200",
      "hover:shadow-lg hover:-translate-y-1",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00416a]",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 leading-relaxed text-white/90", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };

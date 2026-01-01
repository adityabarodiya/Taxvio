import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default" &&
            "bg-[#00416a] text-white hover:bg-[#003355]",
          variant === "outline" &&
            "border border-[#00416a] text-[#00416a] hover:bg-[#00416a] hover:text-white",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

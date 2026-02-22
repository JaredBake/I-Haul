import React from "react";
import { cn } from "@/lib/utils";

type BadgeElement = HTMLDivElement | HTMLButtonElement;

interface BadgeProps extends React.HTMLAttributes<BadgeElement> {
  variant?: "default" | "outline" | "secondary" | "destructive";
  asButton?: boolean;
}

const Badge = React.forwardRef<BadgeElement, BadgeProps>(
  ({ className, variant = "default", asButton, onClick, ...props }, ref) => {
    const variants = {
      default: "bg-[#2563EB] text-white",
      outline: "border border-gray-300 bg-white text-gray-900",
      secondary: "bg-gray-200 text-gray-900",
      destructive: "bg-red-600 text-white",
    };

    const baseClasses = cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
      variants[variant],
      className,
    );

    // Render as button if onClick is provided or asButton is explicitly set
    const shouldRenderButton = asButton || onClick;

    if (shouldRenderButton) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={baseClasses}
          onClick={onClick}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={baseClasses}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { Badge };

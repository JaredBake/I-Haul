import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary" | "destructive";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[#2563EB] text-white",
      outline: "border border-gray-300 bg-white text-gray-900",
      secondary: "bg-gray-200 text-gray-900",
      destructive: "bg-red-600 text-white",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { Badge };

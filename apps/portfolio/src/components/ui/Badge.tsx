import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "accent" | "neutral";
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "accent"
          ? "bg-accent-soft text-accent-dark"
          : "border border-line bg-surface-soft text-muted",
        className,
      )}
      {...props}
    />
  );
}

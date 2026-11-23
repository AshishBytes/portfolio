import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
};

export function Card({ className, padded = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "surface-card min-w-0 w-full",
        padded && "p-5 sm:p-6",
        className,
      )}
      {...props}
    />
  );
}

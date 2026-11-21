import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../../lib/cn";

type NavigationLinkProps = NavLinkProps & {
  compact?: boolean;
};

export function NavigationLink({
  className,
  compact = false,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive, isPending, isTransitioning }) =>
        cn(
          "rounded-full px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-accent-soft text-accent-dark"
            : "text-muted hover:text-ink",
          compact && "block rounded-xl px-4 py-3 text-base",
          typeof className === "function"
            ? className({ isActive, isPending, isTransitioning })
            : className,
        )
      }
      {...props}
    />
  );
}

import { cn } from "../../lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "display-heading mt-3 text-3xl leading-tight sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

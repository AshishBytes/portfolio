import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "quiet";
type ButtonSize = "small" | "medium";

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-dark",
  secondary: "border border-line bg-surface text-ink hover:bg-surface-soft",
  quiet: "text-muted hover:bg-surface-soft hover:text-ink",
};

const sizeClass: Record<ButtonSize, string> = {
  small: "min-h-9 px-4 text-xs",
  medium: "min-h-11 px-5 text-sm",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "medium",
  icon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}

type ButtonLinkBase = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
};

type InternalButtonLinkProps = ButtonLinkBase &
  Omit<LinkProps, "className" | "children"> & {
    to: LinkProps["to"];
    href?: never;
  };
type ExternalButtonLinkProps = ButtonLinkBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
    to?: never;
  };

export function ButtonLink(
  props: InternalButtonLinkProps | ExternalButtonLinkProps,
) {
  const className = cn(
    baseClass,
    variantClass[props.variant ?? "primary"],
    sizeClass[props.size ?? "medium"],
    props.className,
  );
  const content = (
    <>
      {props.children}
      {props.icon}
    </>
  );

  if ("href" in props && props.href) {
    const {
      href,
      children: _children,
      variant: _variant,
      size: _size,
      className: _className,
      icon: _icon,
      ...anchorProps
    } = props;
    const isExternal =
      href.startsWith("https://") || href.startsWith("http://");
    return (
      <a
        href={href}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const {
    to,
    children: _children,
    variant: _variant,
    size: _size,
    className: _className,
    icon: _icon,
    ...linkProps
  } = props as InternalButtonLinkProps;
  return (
    <Link to={to} className={className} {...linkProps}>
      {content}
    </Link>
  );
}

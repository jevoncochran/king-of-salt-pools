import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "solid" | "soft" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  // Solid gold — the default, high-contrast call to action.
  solid: "bg-gold text-navy hover:bg-gold-light",
  // Translucent gold — for sitting on top of photos without blocking them.
  soft: "border-2 border-gold bg-gold/10 text-gold-light hover:bg-gold/20",
  // Transparent with a white outline — secondary action on dark/photo backgrounds.
  outline: "border border-white/30 text-white hover:bg-white/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

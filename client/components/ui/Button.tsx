import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-2 " +
  "font-body text-[13px] tracking-[0.06em] uppercase min-h-9 no-underline " +
  "transition-colors duration-150 cursor-pointer";

// Classical: outlined, never filled.
const variants: Record<Variant, string> = {
  primary:
    "border border-accent text-white bg-[#E74932] hover:bg-[#5C1F19] transition-colors duration-200 active:border-accent-600 active:text-accent-900",
  secondary:
    "border border-divider text-ink bg-transparent hover:bg-[#864F42] active:border-neutral-500",
  ghost:
    "border border-transparent text-accent-700 bg-transparent hover:bg-accent-100 active:text-accent-900",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

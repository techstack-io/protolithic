import type { ReactNode } from "react";

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[4px] border border-divider bg-transparent p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardKicker({ children }: { children: ReactNode }) {
  return (
    <span className="tnum block text-[13px] leading-[14px] tracking-[0.08em] uppercase text-accent-700">
      {children}
    </span>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-4 font-heading text-[22px] leading-[26px] text-ink">
      {children}
    </h3>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-[26px] text-ink/78">{children}</p>
  );
}

export function CardMeta({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 border-t border-divider pt-4 text-[12px] tracking-[0.06em] uppercase text-ink/55">
      {children}
    </div>
  );
}

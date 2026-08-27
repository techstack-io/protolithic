import type { ReactNode } from "react";

type Tone = "accent" | "neutral" | "outline";

const tones: Record<Tone, string> = {
  accent: "bg-accent-100 text-accent-700 border-transparent",
  neutral: "bg-neutral-100 text-neutral-700 border-transparent",
  outline: "bg-transparent text-ink/70 border-divider",
};

export function Tag({
  tone = "outline",
  children,
}: {
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-[4px] border px-3 py-1 text-[12px] leading-[18px] tracking-[0.06em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

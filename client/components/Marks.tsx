import type { SVGProps } from "react";

const stroke: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 88 88",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  "aria-hidden": true,
};

/** Layers accumulating — each venture a bed laid on the last. */
export function StrataMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...props}>
      <rect x="12.5" y="12.5" width="63" height="63" />
      <path d="M12.5 62.5H75.5M12.5 47.5H60.5M12.5 32.5H45.5" />
    </svg>
  );
}

/** A core sample: the square of proof cut out of a whole market. */
export function CoreMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="44" cy="44" r="31.5" />
      <rect x="30.5" y="30.5" width="27" height="27" />
    </svg>
  );
}

/** A monolith with one corner struck off — the first cut of many. */
export function ChiselMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...props}>
      <path d="M27.5 12.5H60.5L75.5 27.5V75.5H27.5Z" />
      <path d="M60.5 12.5V27.5H75.5" />
    </svg>
  );
}

/** Two halves meeting at a founder's line — where the venture splits off. */
export function SeamMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...stroke} {...props}>
      <path d="M14.5 66.5L44 21.5L73.5 66.5" />
      <path d="M14.5 66.5H73.5" />
      <path d="M44 21.5V66.5" strokeDasharray="4 5" />
    </svg>
  );
}

export const marks = [
  {
    id: "strata",
    name: "Strata",
    note: "Layers accumulating — each venture a bed laid on the last.",
    Mark: StrataMark,
  },
  {
    id: "core",
    name: "Core",
    note: "A core sample: the square of proof cut out of a whole market.",
    Mark: CoreMark,
  },
  {
    id: "chisel",
    name: "Chisel",
    note: "A monolith with one corner struck off — the first cut of many.",
    Mark: ChiselMark,
  },
  {
    id: "seam",
    name: "Seam",
    note: "Two halves meeting at a founder's line — where the venture splits off.",
    Mark: SeamMark,
  },
] as const;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-heading tracking-[0.2em] uppercase text-ink ${className}`}
    >
      Protolithic
    </span>
  );
}

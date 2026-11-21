"use client";

import DomeGallery from "./DomeGallery";
import { ButtonLink } from "./ui/Button";
import { theses } from "@/lib/theses";

const thesisImages = theses.flatMap(({ src, label }) => src ? [{ src, alt: label }] : []);

export function Hero() {
  return (
    <section
      aria-label="The opportunity dome"
      className="relative h-[86vh] min-h-[620px] overflow-hidden border-b border-divider"
    >
      <DomeGallery
        images={thesisImages.length ? thesisImages : undefined}
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
      />

      {/* Two washes keep the type legible over the moving plates. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, var(--color-bg) 0 26%, color-mix(in srgb, var(--color-bg) 88%, transparent) 46%, color-mix(in srgb, var(--color-bg) 40%, transparent) 74%, color-mix(in srgb, var(--color-bg) 55%, transparent) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 50%, transparent 40%, color-mix(in srgb, var(--color-bg) 70%, transparent) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1200px] content-center px-5 sm:px-10 lg:px-[72px]">
        <span className="tnum mb-7 block text-[13px] leading-[14px] tracking-[0.14em] uppercase text-[#5C1F19]">
          240 theses in the ground · 31 assayed · 4 spun out
        </span>
        <h1 className="-ml-[0.042em] font-heading text-[#244857] text-[clamp(36px,4vw,68px)] leading-[1.2] tracking-[-0.01em]">
          <span className="block">Have an idea</span>
          <span className="block">for a startup?</span>
        </h1>
        <p className="mt-10 max-w-[54ch] text-[17px] leading-[28px]">
          Protolithic exists to change the status quo. Bring us an idea, and we'll survey the market, validate the problem, and build the first working version. No pitch deck required. No round to raise before you know if it's real.
        </p>
        <div className="pointer-events-auto mt-7 flex flex-wrap gap-3">
          <ButtonLink href="#cofound">Cofound with us</ButtonLink>
          <ButtonLink href="#model" variant="ghost">
            Read the model
          </ButtonLink>
        </div>
        <span className="mt-10 block text-[11px] tracking-[0.1em] uppercase text-ink/45">
          Drag the dome — every plate is a thesis on file
        </span>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description: "A suite of task management tools for individuals, households, and teams.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist)] leading-normal text-[#1D1B18]">
      <header className="border-b border-[#244855]/15">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="inline-flex items-center gap-2.5 font-heading text-2xl font-semibold text-inherit">
            <span aria-hidden="true" className="grid size-7 place-items-center rounded bg-[#1D1B18]">
              <span className="size-2.5 rotate-45 bg-[#E64833]" />
            </span>
            Protolithic
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link href="/rooms" className="text-inherit">Rooms</Link>
            <Link href="/workflows" className="text-inherit">Workflows</Link>
            <Link href="/early-access" className="rounded-xl bg-[#E64833] px-4 py-2 font-semibold text-[#1D1B18] hover:bg-[#D9402D] hover:text-[#1D1B18]">Request early access</Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

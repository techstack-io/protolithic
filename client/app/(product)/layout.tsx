import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakartaSans = localFont({
  src: "../../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  description: "A suite of task management tools for individuals, households, and teams.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${spaceGrotesk.className} ${spaceGrotesk.variable} min-h-screen bg-white leading-normal text-[#1D1B18]`}>
      <header className="border-b border-[#244855]/15">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Image
              src="/brand/protolithic-logo-p.png"
              alt="Protolithic"
              width={2160}
              height={720}
              className="h-auto w-44 sm:w-52"
            />
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link href="/rooms" className="text-inherit">Rooms</Link>
            <Link href="/workflows" className="text-inherit">Workflows</Link>
            <Link href="/early-access" className="rounded-xl bg-[#E64833] px-4 py-2 font-semibold text-white hover:bg-[#D9402D] hover:text-white/90">Request early access</Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = localFont({
  src: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

const heading = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/lora/files/lora-latin-wght-normal.woff2", weight: "400 700", style: "normal" },
    { path: "../node_modules/@fontsource-variable/lora/files/lora-latin-wght-italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Protolithic — companies are quarried, not conjured",
  description:
    "A venture builder: we survey markets, validate the problem before a line of product is written, build working software, then hand the strongest ventures to a cofounder.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        heading.variable,
        body.variable,
        geist.variable
      )}
    >
      <body>{children}</body>
    </html>
  );
}
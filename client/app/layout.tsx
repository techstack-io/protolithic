import type { Metadata } from "next";
import { Fraunces, Lora, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const heading = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const body = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
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
import Link from "next/link";
import { ButtonLink } from "./ui/Button";
import Image from "next/image";

const links = [
  { href: "#model", label: "The model" },
  { href: "#stages", label: "Stages" },
  { href: "#ventures", label: "Ventures" },
  { href: "#marks", label: "Marks" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-divider bg-bg">
      <div className="mx-auto flex max-w-[1200px] items-center gap-8 px-5 py-4 sm:px-10 lg:px-[72px]">
      <Link
        href="/"
        className="flex items-center gap-2.5 font-heading text-[18px] tracking-[0.16em] uppercase text-ink no-underline"
      >
        <Image
          src="/brand/protolithic-logo.png"
          alt=""
          width={28}
          height={28}
          className="h-8 w-8 object-contain"
          priority
        />

        <span>Protolithic</span>
      </Link>
        <div className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-[0.06em] uppercase text-ink/70 no-underline hover:text-accent-700"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

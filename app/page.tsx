import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { marks, Wordmark, StrataMark } from "@/components/Marks";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardBody,
  CardKicker,
  CardMeta,
  CardTitle,
} from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { stages, ventures } from "@/lib/theses";

const model = [
  {
    title: "Opportunity",
    body: "We read markets the way a surveyor reads ground: where demand is shifting, where incumbents are structurally slow, where a small team can hold an advantage long enough to matter. Theses are written down, dated, and argued against.",
  },
  {
    title: "Validation",
    body: "Before anything is built, the problem is tested against the people who have it — interviews, pilots, letters of intent, money on the table. Most theses die here, on purpose, and the reasons are kept for the next one.",
  },
  {
    title: "Development",
    body: "Our own engineers and designers take the survivors to working software: the initial structure, the technology, the first customers. What leaves the studio is a product in use, not a deck about one.",
  },
];

const capabilities = [
  "Product & design",
  "Engineering",
  "Market research",
  "Incorporation",
  "First capital",
];

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-[72px]">
        <section id="model" className="scroll-mt-24 py-[84px]">
          <span className="kicker mb-4">The model</span>
          <div className="mt-4 grid gap-10 md:grid-cols-3 md:gap-0">
            {model.map((m, i) => (
              <div
                key={m.title}
                className={
                  i === 0
                    ? "md:pr-10"
                    : "md:border-l md:border-divider md:px-10 last:md:pr-0"
                }
              >
                <h2 className="font-heading text-[26px] leading-[28px]">
                  {m.title}
                </h2>
                <p className="just mt-5 text-[15.5px] leading-[28px] text-ink/78">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-divider" />

        <section id="stages" className="scroll-mt-24 py-[84px]">
          <span className="kicker mb-4">From thesis to company</span>
          <h2 className="mb-10 font-heading text-[34px] leading-[42px]">
            Four stages, each with a way out
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <Card key={s.title}>
                <CardKicker>{s.kicker}</CardKicker>
                <CardTitle>{s.title}</CardTitle>
                <CardBody>{s.body}</CardBody>
                <CardMeta>{s.gate}</CardMeta>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid items-center gap-7 pb-[84px] pt-14 lg:grid-cols-[7fr_5fr] lg:gap-24">
          <div>
            <span className="kicker mb-4">The studio</span>
            <h2 className="font-heading text-[34px] leading-[42px]">
              We do the first two years, so a founder doesn&rsquo;t have to do
              them alone
            </h2>
            <p className="just mt-5 max-w-[48ch] text-[15.5px] leading-[28px] text-ink/78">
              Design, engineering, research, legal setup, first hires, first
              revenue. A cofounder joins a venture that already has a validated
              problem, a working product and users — and takes majority
              ownership of what comes next.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>
          {/* .plate — a photograph matted inside a thin surface-colored mat. */}
          <figure className="m-0 w-full max-w-[420px] justify-self-end border border-divider bg-surface p-3">
            <div className="relative aspect-4/5 w-full bg-neutral-100">
              <Image
                src="/studio.jpg"
                alt="The Protolithic studio floor"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                style={{ filter: "sepia(0.12) saturate(0.92)" }}
              />
            </div>
          </figure>
        </section>

        <hr className="border-0 border-t border-divider" />

        <section id="ventures" className="scroll-mt-24 py-[84px]">
          <span className="kicker mb-4">Ventures</span>
          <h2 className="mb-10 font-heading text-[34px] leading-[42px]">
            What is on the bench right now
          </h2>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-ink/25">
                {["Venture", "Market", "Stage", "Status"].map((h) => (
                  <th
                    key={h}
                    className="py-3 pr-6 text-[12px] font-normal tracking-[0.08em] uppercase text-ink/60"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ventures.map((v) => (
                <tr key={v.name} className="border-b border-divider">
                  <td className="py-4 pr-6 font-heading text-[19px]">
                    {v.name}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-ink/78">
                    {v.market}
                  </td>
                  <td className="tnum py-4 pr-6 text-[15px] text-ink/78">
                    {v.stage}
                  </td>
                  <td className="py-4">
                    <Tag tone={v.tone}>{v.status}</Tag>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr className="border-0 border-t border-divider" />

        <section id="marks" className="scroll-mt-24 py-[84px]">
          <span className="kicker mb-4">Identity</span>
          <h2 className="mb-4 font-heading text-[34px] leading-[42px]">
            Four marks to choose between
          </h2>
          <p className="just mb-10 max-w-[58ch] text-[15.5px] leading-[28px] text-ink/78">
            Each is drawn in one hairline weight so it holds at a favicon and
            engraves on a page — proto (first) and lithic (stone) read as
            strata, core, chisel and seam.
          </p>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {marks.map(({ id, name, note, Mark }) => (
              <Card key={id} className="grid justify-items-start gap-7">
                <Mark width={88} height={88} className="text-accent" />
                <figcaption className="text-[13px] leading-[20px]">
                  <span className="block font-heading text-[18px]">{name}</span>
                  <span className="mt-1 block text-ink/70">{note}</span>
                </figcaption>
              </Card>
            ))}
          </div>

          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <Card className="flex flex-row items-center gap-7">
              <StrataMark
                width={52}
                height={52}
                strokeWidth={1.6}
                className="shrink-0 text-accent"
              />
              <Wordmark className="text-[26px]" />
            </Card>
            <Card className="grid justify-items-start gap-4">
              <Wordmark className="text-[26px]" />
              <span className="block h-px w-full bg-accent" />
              <span className="text-[11px] tracking-[0.16em] uppercase text-ink/70">
                Venture builder · founded 2021
              </span>
            </Card>
          </div>
        </section>

        <section className="pb-[98px] pt-[70px]">
          <figure className="m-0">
            <blockquote className="m-0 max-w-[34ch] -indent-[0.34em] font-heading text-[clamp(26px,2.8vw,36px)] leading-[42px]">
              &ldquo;I joined a company that already had users. Two years of
              guessing had been done, written down, and handed to me.&rdquo;
            </blockquote>
            <figcaption className="mt-5 -indent-[1.1em] text-[15.5px] leading-[28px] text-ink/70">
              — M. Oyelaran, cofounder &amp; CEO, Ledgerwork
            </figcaption>
          </figure>
        </section>

        <hr className="border-0 border-t border-divider" />

        <section id="cofound" className="scroll-mt-24 pb-14 pt-[70px]">
          <h3 className="font-heading text-[26px] leading-[28px]">
            Cofound with us
          </h3>
          <p className="mt-5 max-w-[58ch] text-[15.5px] leading-[28px] text-ink/78">
            Two ventures are looking for their cofounder this year, and one
            thesis is looking for an operator who knows the market better than
            we do. Tell us which and we&rsquo;ll send the file.
          </p>
          <form
            className="mt-7 flex max-w-[480px] items-center gap-3"
            action="/api/subscribe"
            method="post"
          >
            <input
              type="email"
              name="email"
              required
              aria-label="Email address"
              placeholder="you@company.com"
              className="min-h-9 flex-1 rounded-[4px] border border-divider bg-transparent px-4 py-2 font-body text-[15px] text-ink placeholder:text-ink/40"
            />
            <Button type="submit">Request the file</Button>
          </form>
        </section>

        <footer className="flex flex-wrap justify-between gap-7 border-t border-divider py-14 text-[13px] leading-[28px] text-ink/70">
          <span>Protolithic — a venture builder. Theses on file since 2021.</span>
          <a href="mailto:hello@protolithic.co">hello@protolithic.co</a>
        </footer>
      </div>
    </main>
  );
}

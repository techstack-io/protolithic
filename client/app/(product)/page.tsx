import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

export const metadata: Metadata = {
  title: "Protolithic — Task management for life and work",
  description: "A suite of task management tools for individuals, households, and teams.",
};

const tasks = ["Pick a day for groceries and errands", "Set aside an hour for a personal project", "Send the team an update on Friday"];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 pt-24 pb-12 md:grid-cols-[1.05fr_1fr] md:gap-16 md:pt-48 md:pb-8">
        <div>
        <h1 className="flex flex-col gap-0 text-4xl sm:text-5xl font-semibold tracking-tight text-[#1E1B18]">
          life logistics
          <em
            className="mt-2 block text-[0.80em] font-light italic text-[#C75A3C]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
           on auto-pilot.
          </em>
        </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#244855]/85">
            Protolithic is a suite of task management tools for life and work. Organize your day, plan a personal project, or coordinate with your team.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#products" className="inline-flex items-center gap-3 rounded-xl text-white bg-[#E64833] px-5 py-3 font-semibold text-[#1D1B18] hover:bg-[#D9402D] hover:text-white/90">
              Explore products <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <Link href="/workflows" className="rounded-xl border border-[#244855]/25 px-5 py-3 font-semibold text-[#244855] hover:bg-[#F7FAFC]">
              See how it works
            </Link>
          </div>
        </div>

        <figure className="m-0 rounded-3xl border border-[#244855]/15 bg-white p-6 shadow-[0_16px_48px_-22px_#24485555] sm:p-8">
          <figcaption className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-[#244855]">Plan your week</h2>
            <span className="rounded-full bg-[#FCE9D0] px-3 py-1 text-xs font-semibold text-[#874F41]">Example</span>
          </figcaption>
          <blockquote className="mx-0 mt-6 rounded-xl border border-[#244855]/10 bg-[#F7FAFC] p-4 text-[#244855]">
            “I want to get my errands done, make time for my own project, and keep my team in the loop.”
          </blockquote>
          <div className="mt-5 rounded-xl border border-[#244855]/15 px-4 py-1">
            <h3 className="py-3 font-semibold text-[#244855]">Next steps</h3>
            <ul className="divide-y divide-[#244855]/10 border-t border-[#244855]/10">
              {tasks.map((task) => (
                <li key={task} className="flex items-start gap-3 py-3 text-sm text-[#244855]">
                  <Circle aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-[#C75A3C]" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </figure>
      </section>
      <section id="products" className="scroll-mt-8 border-t border-[#244855]/15 bg-[#F7FAFC]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-heading text-3xl">Products</h2>
          <article className="mt-5 max-w-xl rounded-xl border border-[#244855]/15 bg-white p-6">
            <h3 className="font-heading text-xl">UAT Workspace</h3>
            <p className="mt-2 text-[#244855]">For teams that need to turn software testing feedback into tasks, review them, and prepare approved issues for handoff.</p>
            <a href="https://uat.protolithic.app/" className="mt-4 inline-flex items-center gap-2 font-semibold">
              Open UAT Workspace <ArrowRight aria-hidden="true" size={16} />
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

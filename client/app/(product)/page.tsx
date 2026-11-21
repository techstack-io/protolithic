import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorkflowFolder from "@/components/WorkflowFolder";

export const metadata: Metadata = {
  title: "Protolithic — Task management for life and work",
  description: "A suite of task management tools for individuals, households, and teams.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#1D1B18]">
      <main className="bg-[linear-gradient(to_right,#24485512_1px,transparent_1px),linear-gradient(to_bottom,#24485512_1px,transparent_1px)] bg-[size:32px_32px]">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:py-28">
          <div>
            <h1 className="max-w-2xl font-heading text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Make a plan for <em className="text-[#C75A3C]">what’s next.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#244855]">
              Protolithic is a suite of task management tools for life and work. Organize your day, plan a personal project, or coordinate tasks and reviews with a team.
            </p>
            <Link href="/workflows" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#1D1B18] px-5 py-3 font-semibold text-white hover:text-white hover:bg-[#244855]">
              Explore workflows <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <WorkflowFolder />
        </section>
        <section className="border-t border-[#244855]/15 bg-[#F7FAFC]">
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
    </div>
  );
}

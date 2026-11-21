import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorkflowFolder from "@/components/WorkflowFolder";

export const metadata: Metadata = {
  title: "Protolithic — Turn business problems into workflows",
  description: "Describe a business problem and turn it into a workflow with clear tasks, owners, and review steps.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#1D1B18]">
      <main className="bg-[linear-gradient(to_right,#24485512_1px,transparent_1px),linear-gradient(to_bottom,#24485512_1px,transparent_1px)] bg-[size:32px_32px]">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:py-28">
          <div>
            <h1 className="max-w-2xl font-heading text-5xl leading-[1.02] tracking-tight md:text-7xl">
              From <em className="text-[#C75A3C]">“we should fix this”</em> to work that gets done.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#244855]">
              Describe a business problem in plain language. Protolithic helps you turn it into clear tasks, assign owners, and decide what needs review.
            </p>
            <Link href="/workflows" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#1D1B18] px-5 py-3 font-semibold text-white hover:text-white hover:bg-[#244855]">
              Explore workflows <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <WorkflowFolder />
        </section>
      </main>
    </div>
  );
}

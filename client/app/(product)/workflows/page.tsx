import type { Metadata } from "next";

export const metadata: Metadata = { title: "Workflows | Protolithic" };

const examples = [
  {
    title: "Plan a household move",
    request: "I need to move in six weeks and I’m not sure where to start.",
    steps: ["Book movers or reserve a truck.", "Make a room-by-room packing list.", "Schedule address changes and utility transfers."],
  },
  {
    title: "Website feedback to Jira-ready tickets",
    request: "I need my team to review website feedback before it goes into Jira.",
    steps: ["Draft tickets with acceptance criteria.", "Send drafts for human review.", "Queue approved tickets for the project lead to submit."],
  },
  {
    title: "Correct inaccurate industry labels",
    request: "I need to correct the industries in Leadfeeder.",
    steps: ["Flag questionable industry labels.", "Verify and record the correct industry.", "Submit corrections and track what’s pending."],
  },
];

export default function WorkflowsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="max-w-3xl text-5xl">See how a goal becomes a plan.</h1>
      <p className="mt-5 text-[#244855]">Break personal projects and team goals into steps you can follow.</p>
      <div className="mt-12 grid gap-6">
        {examples.map(({ title, request, steps }) => (
          <section key={title} className="grid gap-8 rounded-xl border border-[#244855]/15 bg-white p-7 md:grid-cols-[1fr_1.15fr] md:p-10">
            <div>
              <h2 className="text-3xl">{title}</h2>
              <blockquote className="mt-4 rounded-md bg-[#F0F5F7] p-4 font-mono text-sm">“{request}”</blockquote>
            </div>
            <ol className="list-decimal divide-y divide-[#244855]/15 pl-5 text-[#244855]">
              {steps.map((step) => <li key={step} className="py-3 pl-2">{step}</li>)}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}

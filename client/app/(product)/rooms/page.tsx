import type { Metadata } from "next";

export const metadata: Metadata = { title: "Rooms | Protolithic" };

const rooms = [
  ["Website testing", "Collect tester feedback, draft issues with acceptance criteria, and route them for review."],
  ["Data cleanup", "Find inconsistent records, verify corrections, and track what still needs to be updated."],
  ["Weekly reporting", "Collect the numbers, draft the update, and assign someone to review it before it goes out."],
  ["Customer onboarding", "Track setup, training, and the handoff to the person managing the account."],
];

export default function RoomsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl">A home for the work you do again and again.</h1>
      <p className="mt-5 max-w-xl text-[#244855]">Each Room keeps the goal, tasks, owners, and review steps for recurring work in one place.</p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {rooms.map(([title, description]) => (
          <section key={title} className="rounded-xl border border-[#244855]/15 bg-white p-7">
            <h2 className="text-2xl">{title}</h2>
            <p className="mt-3 text-[#244855]">{description}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

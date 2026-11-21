"use client";

import { useState } from "react";
import FolderFloat from "@/components/FolderFloat";

const workflows = [
  { label: "Website testing", example: "Turn tester feedback into tickets with acceptance criteria. Route approved tickets to the project lead for Jira submission." },
  { label: "Data cleanup", example: "Review incorrect industry labels, record verified corrections, and track what still needs to be submitted." },
  { label: "Weekly reporting", example: "Collect this week’s numbers, draft the report, and assign someone to review it before it goes out." },
];

export default function WorkflowFolder() {
  const [selected, setSelected] = useState(0);
  const workflow = workflows[selected];

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-[#244855]/15 bg-white/85 px-5 pb-6 pt-24 sm:px-8">
      <FolderFloat
        items={workflows.map(({ label }) => label)}
        label="Workflow examples"
        sublabel="Open to explore"
        trigger="click"
        closeOnSelect={false}
        folderColor="#303b3a"
        frontColor="#244855"
        paperColor="#FCE9D0"
        itemColor="#FCE9D0"
        itemTextColor="#1D1B18"
        spread={122}
        width={220}
        height={132}
        onSelect={(_, index) => setSelected(index)}
      />
      <div aria-live="polite" className="mt-7 min-h-32 w-full border-t border-[#244855]/15 pt-5">
        <h2 className="font-heading text-xl text-[#1D1B18]">{workflow.label}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#244855]">{workflow.example}</p>
      </div>
    </div>
  );
}

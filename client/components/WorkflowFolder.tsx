"use client";

import { useState } from "react";
import FolderFloat from "@/components/FolderFloat";

const workflows = [
  { label: "Plan your week", example: "Pull errands, appointments, and deadlines into one list, then decide what to tackle each day." },
  { label: "Plan a move", example: "Break packing, address changes, and utility transfers into tasks you can share with your household." },
  { label: "Launch a project", example: "Agree on the milestones, assign owners, and track what’s ready for review." },
];

export default function WorkflowFolder() {
  const [selected, setSelected] = useState(0);
  const workflow = workflows[selected];

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-[#244855]/15 bg-white/85 px-5 pb-6 pt-24 sm:px-8">
      <FolderFloat
        items={workflows.map(({ label }) => label)}
        label="Task planning examples"
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

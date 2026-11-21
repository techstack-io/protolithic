"use client";

import { useActionState } from "react";
import { requestEarlyAccess } from "./actions";

const inputClass = "mt-2 w-full rounded-md border border-[#244855]/25 bg-white px-3 py-2";

export default function EarlyAccessPage() {
  const [message, submit, pending] = useActionState(requestEarlyAccess, "");
  return (
    <main className="mx-auto max-w-xl px-6 py-20">
      <h1 className="text-5xl">What would you like to organize?</h1>
      <p className="mt-5 text-[#244855]">Tell us what you’d like help organizing in your life or work.</p>
      <form action={submit} className="mt-8 grid gap-5">
        <label>Name<input name="name" autoComplete="name" required maxLength={100} className={inputClass} /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></label>
        <label>What would you like to plan? (optional)<textarea name="problem" rows={4} maxLength={2000} className={inputClass} /></label>
        <button type="submit" disabled={pending} className="justify-self-start rounded-md bg-[#1D1B18] px-4 py-2 text-white disabled:opacity-60">
          {pending ? "Sending…" : "Request early access"}
        </button>
        <p role="status">{message}</p>
      </form>
    </main>
  );
}

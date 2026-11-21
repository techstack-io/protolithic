"use server";

export async function requestEarlyAccess(_previous: string, form: FormData): Promise<string> {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const problem = String(form.get("problem") ?? "").trim();

  if (!name || name.length > 100 || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || problem.length > 2000) {
    return "Enter a name, a valid email, and up to 2,000 characters for your workflow.";
  }

  try {
    const server = process.env.PROTOLITHIC_SERVER_URL ?? "http://127.0.0.1:4000";
    const response = await fetch(new URL("/early-access", server), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, problem }),
      signal: AbortSignal.timeout(5000),
    });
    if (response.ok) return "Request received.";
  } catch {
    return "We couldn’t save your request. Please try again.";
  }
  return "We couldn’t save your request. Please try again.";
}

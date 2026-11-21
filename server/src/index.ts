import { createServer } from "node:http";
import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync(process.env.DATABASE_PATH ?? "protolithic.sqlite");
database.exec(`
  CREATE TABLE IF NOT EXISTS early_access (
    email TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    problem TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`);

const register = database.prepare(
  "INSERT INTO early_access (email, name, problem) VALUES (?, ?, ?) ON CONFLICT (email) DO NOTHING",
);

createServer(async (request, response) => {
  const reply = (status: number, body: object) => {
    response.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    response.end(JSON.stringify(body));
  };

  if (request.method === "GET" && request.url === "/health") {
    return reply(200, { status: "ok" });
  }

  if (request.method !== "POST" || request.url !== "/early-access") {
    return reply(404, { error: "Not found" });
  }

  const chunks: Buffer[] = [];
  let bytes = 0;
  let input: unknown;
  try {
    for await (const chunk of request.iterator({ destroyOnReturn: false })) {
      const buffer = Buffer.from(chunk);
      bytes += buffer.length;
      if (bytes > 16_384) {
        request.resume();
        return reply(413, { error: "Request is too large" });
      }
      chunks.push(buffer);
    }
    input = JSON.parse(Buffer.concat(chunks).toString());
  } catch {
    return reply(400, { error: "Invalid request" });
  }

  if (!input || typeof input !== "object") {
    return reply(400, { error: "Invalid request" });
  }

  const fields = input as Record<string, unknown>;
  const email = typeof fields.email === "string" ? fields.email.trim().toLowerCase() : "";
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const problem = typeof fields.problem === "string" ? fields.problem.trim() : "";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !name || name.length > 100 || problem.length > 2000) {
    return reply(400, { error: "Enter a name and a valid work email." });
  }

  try {
    register.run(email, name, problem);
    return reply(200, { status: "received" });
  } catch {
    return reply(500, { error: "Unable to save request" });
  }
}).listen(Number(process.env.PORT ?? 4000), process.env.HOST ?? "127.0.0.1");

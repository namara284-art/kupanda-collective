// Minimal in-memory rate limiter for demo/local use only.
//
// This resets whenever the server process restarts and is NOT shared across
// multiple server instances, so it is not sufficient protection in a
// production, multi-instance deployment (e.g. Vercel serverless functions
// scale horizontally with no shared memory). Before public launch, replace
// this with a durable store such as Upstash Redis (@upstash/ratelimit),
// Vercel KV, or a WAF/edge rate-limiting rule in front of /api/*.

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

export function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() ?? "unknown";
}

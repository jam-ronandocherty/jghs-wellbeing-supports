// Cloudflare Pages Function: logs anonymised zero-result search terms so
// maintainers can see what's missing from resources.json. Fire-and-forget —
// the client never waits on or surfaces the result of this call.
//
// Requires a KV namespace bound as MISSED_SEARCHES in the Pages project
// settings (Settings → Functions → KV namespace bindings). Without that
// binding this quietly no-ops rather than erroring.

function normalize(raw) {
  if (typeof raw !== "string") return "";
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .slice(0, 60);
}

export async function onRequestPost(context) {
  try {
    const { q } = await context.request.json();
    const key = normalize(q);
    if (key.length < 3 || !context.env.MISSED_SEARCHES) {
      return new Response(null, { status: 204 });
    }

    const kv = context.env.MISSED_SEARCHES;
    const storeKey = `miss:${key}`;
    const existing = await kv.get(storeKey, "json");
    const count = (existing && existing.count) || 0;
    await kv.put(storeKey, JSON.stringify({
      count: count + 1,
      lastSeen: new Date().toISOString(),
    }));
  } catch {
    // Malformed request or KV unavailable — never surface an error to the client.
  }
  return new Response(null, { status: 204 });
}

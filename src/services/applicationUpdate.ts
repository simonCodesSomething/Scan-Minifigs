import type { ApplicationUpdate } from "@/models/applicationUpdate";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export async function fetchLatestApplicationUpdate(): Promise<ApplicationUpdate | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase environment variables.");
  }

  const params = new URLSearchParams({
    select:
      "id,title,description,category,app_version,published_at,link_url,sort_order",
    is_published: "eq.true",
    order: "published_at.desc",
    limit: "1",
  });

  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/application_updates?${params.toString()}`,
    {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch application update: ${response.status} ${response.statusText}`,
    );
  }

  const updates = (await response.json()) as ApplicationUpdate[];

  return updates[0] ?? null;
}

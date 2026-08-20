const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export async function getSeries() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/series?select=*`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
}

export async function getSeriesById(id: string) {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/series?id=eq.${encodeURIComponent(id)}&select=*`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();

  // REST returns an array, so return the first match
  return data.length > 0 ? data[0] : null;
}

export async function getMinifigureCount(): Promise<number> {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/minifigures?select=id`,
    {
      method: "HEAD",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "count=exact",
      },
    },
  );

  const contentRange = response.headers.get("Content-Range");

  return contentRange ? parseInt(contentRange.split("/")[1], 10) : 0;
}

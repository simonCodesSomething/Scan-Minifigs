import { Minifigure } from "@/models/minifigure";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

const MINIFIGURE_TABLE = "minifigures";
const DATA_MATRIX_TABLE = "minifigures_codes";
const CATALOG_METADATA_TABLE = "catalog_metadata";

export type DataMatrixMapping = {
  id: number | string;
  minifigure_id: string;
  code: string;
};

export type MinifigureCatalog = {
  minifigures: Minifigure[];
  dataMatrix: DataMatrixMapping[];
};

function getSupabaseHeaders() {
  if (!SUPABASE_ANON_KEY) {
    throw new Error("EXPO_PUBLIC_SUPABASE_ANON_KEY is not configured.");
  }

  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

/**
 * Fetch the catalog's last updated timestamp.
 *
 * This is intentionally a very small request.
 */
export async function fetchCatalogUpdatedAt(): Promise<string> {
  if (!SUPABASE_URL) {
    throw new Error("EXPO_PUBLIC_SUPABASE_URL is not configured.");
  }

  const url =
    `${SUPABASE_URL}/rest/v1/${CATALOG_METADATA_TABLE}` +
    `?id=eq.1&select=updated_at`;

  const response = await fetch(url, {
    method: "GET",
    headers: getSupabaseHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Supabase catalog metadata request failed: ` +
        `${response.status} ${response.statusText}` +
        `${errorText ? ` - ${errorText}` : ""}`,
    );
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error("Supabase catalog metadata was not found.");
  }

  if (!data[0]?.updated_at) {
    throw new Error("Supabase catalog metadata has no updated_at value.");
  }

  return data[0].updated_at;
}

/**
 * Fetch all minifigures from Supabase.
 */
async function fetchMinifigures(): Promise<Minifigure[]> {
  if (!SUPABASE_URL) {
    throw new Error("EXPO_PUBLIC_SUPABASE_URL is not configured.");
  }

  const url =
    `${SUPABASE_URL}/rest/v1/${MINIFIGURE_TABLE}` +
    `?select=id,seriesId,Set,name,image`;

  const response = await fetch(url, {
    method: "GET",
    headers: getSupabaseHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Supabase minifigure request failed: ` +
        `${response.status} ${response.statusText}` +
        `${errorText ? ` - ${errorText}` : ""}`,
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Supabase returned invalid minifigure data.");
  }

  return data.map(
    (figure) =>
      ({
        id: figure.id,
        seriesId: figure.seriesId,
        Set: figure.Set,
        name: figure.name,
        image: figure.image,
      }) as Minifigure,
  );
}

/**
 * Fetch all Data Matrix mappings from Supabase.
 */
async function fetchDataMatrixMappings(): Promise<DataMatrixMapping[]> {
  if (!SUPABASE_URL) {
    throw new Error("EXPO_PUBLIC_SUPABASE_URL is not configured.");
  }

  const url =
    `${SUPABASE_URL}/rest/v1/${DATA_MATRIX_TABLE}` +
    `?select=id,minifigure_id,code`;

  const response = await fetch(url, {
    method: "GET",
    headers: getSupabaseHeaders(),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Supabase Data Matrix request failed: ` +
        `${response.status} ${response.statusText}` +
        `${errorText ? ` - ${errorText}` : ""}`,
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Supabase returned invalid Data Matrix data.");
  }

  return data as DataMatrixMapping[];
}

/**
 * Fetch the complete minifigure catalog.
 *
 * Includes:
 * - Minifigure data
 * - Data Matrix mappings
 */
export async function fetchMinifigureCatalog(): Promise<MinifigureCatalog> {
  if (!SUPABASE_URL) {
    throw new Error("EXPO_PUBLIC_SUPABASE_URL is not configured.");
  }

  if (!SUPABASE_ANON_KEY) {
    throw new Error("EXPO_PUBLIC_SUPABASE_ANON_KEY is not configured.");
  }

  const [minifigures, dataMatrix] = await Promise.all([
    fetchMinifigures(),
    fetchDataMatrixMappings(),
  ]);

  return {
    minifigures,
    dataMatrix,
  };
}

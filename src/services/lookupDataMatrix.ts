//import { DATA_MATRIX_LOOKUP } from "@/data/dataMatrixLookup";
//import { MINIFIGURES } from "@/models/minifigures";
//import { SERIES } from "@/models/minifigureSeries";

import { useMinifigureStore } from "@/store/minifigureStore";

export function lookupDataMatrixResult(code: string) {
  console.log("Code", code);
  const normalizedCode = code.trim();

  if (!normalizedCode) {
    return undefined;
  }

  return useMinifigureStore.getState().lookupDataMatrix(normalizedCode);
}

/*export interface DataMatrixLookupResult {
  id: string;
  name: string;
  imageURL: string;
  dataMatrixCode: string;
  seriesId: string;
  seriesName: string;
}

// Build lookup tables once when this module is loaded
const MINIFIGURE_BY_ID: Record<string, (typeof MINIFIGURES)[number]> =
  Object.fromEntries(
    MINIFIGURES.map((minifigure) => [minifigure.id, minifigure]),
  );

const SERIES_BY_ID: Record<string, (typeof SERIES)[number]> =
  Object.fromEntries(SERIES.map((series) => [series.id, series]));

export function lookupDataMatrix(
  scannedData: string,
): DataMatrixLookupResult | null {
  // Convert scanned Data Matrix code -> Minifigure ID
  const code = scannedData.trim().split(/\s+/)[0];

  const minifigureId = DATA_MATRIX_LOOKUP[code];

  if (!minifigureId) {
    return null;
  }

  // Get the minifigure
  const minifigure = MINIFIGURE_BY_ID[minifigureId];

  if (!minifigure) {
    return null;
  }

  // Get the series
  const series = SERIES_BY_ID[minifigure.seriesId];

  return {
    id: minifigure.id,
    name: minifigure.name,
    imageURL: minifigure.image,
    dataMatrixCode: code,
    seriesId: minifigure.seriesId,
    seriesName: series?.name ?? "",
  };
}*/

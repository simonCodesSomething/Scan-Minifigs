import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Minifigure } from "@/models/minifigure";

import {
  DataMatrixMapping,
  fetchCatalogUpdatedAt,
  fetchMinifigureCatalog,
} from "@/services/minifigureService";

type MinifigureState = {
  minifigures: Minifigure[];

  dataMatrix: DataMatrixMapping[];

  loading: boolean;

  loaded: boolean;

  catalogUpdatedAt: string | null;

  error: string | null;

  loadMinifigures: () => Promise<void>;

  clearMinifigures: () => void;

  lookupDataMatrix: (code: string) => Minifigure | undefined;
};

export const useMinifigureStore = create<MinifigureState>()(
  persist(
    (set, get) => ({
      minifigures: [],

      dataMatrix: [],

      loading: false,

      loaded: false,

      catalogUpdatedAt: null,

      error: null,

      loadMinifigures: async () => {
        /*
         * Prevent multiple simultaneous requests.
         */
        if (get().loading) {
          console.log("⏭️ Minifigure catalog is already loading.");

          return;
        }

        set({
          loading: true,
          error: null,
        });

        try {
          console.log("🔎 Checking for minifigure catalog updates...");

          /*
           * Get the timestamp from Supabase.
           *
           * This is a very small request and avoids
           * downloading the entire catalog unnecessarily.
           */
          const serverUpdatedAt = await fetchCatalogUpdatedAt();

          const localUpdatedAt = get().catalogUpdatedAt;

          console.log("📅 Local catalog:", localUpdatedAt);

          console.log("📅 Server catalog:", serverUpdatedAt);

          /*
           * If we already have a catalog and the timestamps
           * match, there is nothing to download.
           */
          if (
            get().loaded &&
            get().minifigures.length > 0 &&
            get().dataMatrix.length > 0 &&
            localUpdatedAt === serverUpdatedAt
          ) {
            console.log("✅ Catalog is already up to date.");

            set({
              loading: false,
              error: null,
            });

            return;
          }

          /*
           * Either:
           *
           * - This is the first launch
           * - The catalog was cleared
           * - The server catalog has changed
           * - Cached data is incomplete
           */
          console.log("🔄 Catalog update detected. Downloading catalog...");

          const { minifigures, dataMatrix } = await fetchMinifigureCatalog();

          /*
           * Don't mark the catalog as loaded if Supabase
           * returned empty data.
           */
          if (minifigures.length === 0 || dataMatrix.length === 0) {
            throw new Error(
              `Catalog download returned incomplete data. ` +
                `Minifigures: ${minifigures.length}, ` +
                `Data Matrix mappings: ${dataMatrix.length}`,
            );
          }

          /*
           * Save the new catalog and the server timestamp.
           */
          set({
            minifigures,

            dataMatrix,

            loading: false,

            loaded: true,

            catalogUpdatedAt: serverUpdatedAt,

            error: null,
          });

          console.log(`✅ Loaded ${minifigures.length} minifigures.`);

          console.log(`✅ Loaded ${dataMatrix.length} Data Matrix mappings.`);

          console.log(`✅ Catalog synchronized at ${serverUpdatedAt}.`);
        } catch (error) {
          console.error("❌ Failed to load minifigure catalog:", error);

          set({
            loading: false,

            error:
              error instanceof Error
                ? error.message
                : "Failed to load minifigure catalog.",
          });
        }
      },

      /*
       * Find a minifigure using a
       * scanned Data Matrix code.
       */
      lookupDataMatrix: (code: string) => {
        const normalizedCode = code.trim();

        console.log("Lookup Data Matrix Code:", normalizedCode);

        const mapping = get().dataMatrix.find(
          (item) => item.code === normalizedCode,
        );

        if (!mapping) {
          console.log("❌ No Data Matrix mapping found.");

          return undefined;
        }

        const minifigure = get().minifigures.find(
          (figure) => figure.id === mapping.minifigure_id,
        );

        if (!minifigure) {
          console.log(
            "❌ Data Matrix mapping found, but minifigure was not found:",
            mapping.minifigure_id,
          );

          return undefined;
        }

        console.log("✅ Data Matrix matched:", minifigure.name);

        return minifigure;
      },

      clearMinifigures: () => {
        console.log("🗑️ Clearing cached minifigure catalog.");

        set({
          minifigures: [],

          dataMatrix: [],

          loaded: false,

          loading: false,

          catalogUpdatedAt: null,

          error: null,
        });
      },
    }),

    {
      name: "minifigure-storage",

      storage: createJSONStorage(() => AsyncStorage),

      /*
       * Persist the catalog so the app doesn't need
       * to download it every time it starts.
       *
       * catalogUpdatedAt lets us determine whether
       * the cached catalog is still current.
       */
      partialize: (state) => ({
        minifigures: state.minifigures,

        dataMatrix: state.dataMatrix,

        loaded: state.loaded,

        catalogUpdatedAt: state.catalogUpdatedAt,
      }),
    },
  ),
);

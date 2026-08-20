import AsyncStorage from "@react-native-async-storage/async-storage";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Minifigure } from "@/models/minifigure";

import {
    DataMatrixMapping,
    fetchMinifigureCatalog,
} from "@/services/minifigureService";

type MinifigureState = {
  minifigures: Minifigure[];

  dataMatrix: DataMatrixMapping[];

  loading: boolean;

  loaded: boolean;

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

      error: null,

      loadMinifigures: async () => {
        /*
         * Don't make another request if
         * the catalog is already loaded.
         */
        if (get().loaded || get().loading) {
          return;
        }

        set({
          loading: true,
          error: null,
        });

        try {
          const { minifigures, dataMatrix } = await fetchMinifigureCatalog();

          set({
            minifigures,

            dataMatrix,

            loading: false,

            loaded: true,

            error: null,
          });

          console.log(`Loaded ${minifigures.length} ` + `minifigures.`);

          console.log(`Loaded ${dataMatrix.length} ` + `Data Matrix mappings.`);
        } catch (error) {
          console.error("Failed to load minifigure catalog:", error);

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

        const mapping = get().dataMatrix.find(
          (item) => item.code === normalizedCode,
        );

        if (!mapping) {
          return undefined;
        }

        return get().minifigures.find(
          (figure) => figure.id === mapping.minifigure_id,
        );
      },

      clearMinifigures: () => {
        set({
          minifigures: [],

          dataMatrix: [],

          loaded: false,

          loading: false,

          error: null,
        });
      },
    }),

    {
      name: "minifigure-storage",

      storage: createJSONStorage(() => AsyncStorage),

      /*
       * Persist the catalog so the app
       * doesn't need to download it every
       * time the app starts.
       */
      partialize: (state) => ({
        minifigures: state.minifigures,

        dataMatrix: state.dataMatrix,

        loaded: state.loaded,
      }),
    },
  ),
);

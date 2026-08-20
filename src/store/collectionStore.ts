import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { RecentScan, ScannedMinifigure } from "@/models/scannedMinifig";

interface CollectionState {
  collection: ScannedMinifigure[];
  recentScans: RecentScan[];

  addScan: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  addScanToHistory: (id: string) => void;
  clearCollection: () => void;
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set) => ({
      collection: [],
      recentScans: [],
      addScan: (id) =>
        set((state) => {
          const existing = state.collection.find((item) => item.id === id);

          if (existing) {
            return {
              collection: state.collection.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      lastScanned: new Date().toISOString(),
                    }
                  : item,
              ),
            };
          }

          return {
            collection: [
              ...state.collection,
              {
                id,
                quantity: 1,
                firstScanned: new Date().toISOString(),
                lastScanned: new Date().toISOString(),
              },
            ],
          };
        }),
      addScanToHistory: (id: string) =>
        set((state) => ({
          recentScans: [
            {
              id,
              scannedAt: new Date().toISOString(),
            },
            ...state.recentScans,
          ].slice(0, 20),
        })),
      increment: (id) =>
        set((state) => {
          const existing = state.collection.find((item) => item.id === id);

          if (existing) {
            return {
              collection: state.collection.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      lastScanned: new Date().toISOString(),
                    }
                  : item,
              ),
            };
          }

          return {
            collection: [
              ...state.collection,
              {
                id,
                quantity: 1,
                firstScanned: new Date().toISOString(),
                lastScanned: new Date().toISOString(),
              },
            ],
          };
        }),

      decrement: (id) =>
        set((state) => ({
          collection: state.collection
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: Math.max(0, item.quantity - 1),
                  }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCollection: () =>
        set({
          collection: [],
          recentScans: [],
        }),
    }),
    {
      name: "minifigure-collection",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

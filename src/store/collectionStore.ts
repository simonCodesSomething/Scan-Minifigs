import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { RecentScan, ScannedMinifigure } from "@/models/scannedMinifig";

interface CollectionState {
  collection: ScannedMinifigure[];
  recentScans: RecentScan[];
  favorites: string[];

  addScan: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  addScanToHistory: (id: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearCollection: () => void;
}

export const useCollectionStore = create<CollectionState>()(
  persist(
    (set, get) => ({
      collection: [],
      recentScans: [],
      favorites: [],

      addScan: (id) =>
        set((state) => {
          const existing = state.collection.find((item) => item.id === id);
          const now = new Date().toISOString();

          if (existing) {
            return {
              collection: state.collection.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      lastScanned: now,
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
                firstScanned: now,
                lastScanned: now,
              },
            ],
          };
        }),

      addScanToHistory: (id) =>
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
          const now = new Date().toISOString();

          if (existing) {
            return {
              collection: state.collection.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
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
                firstScanned: now,
                lastScanned: now,
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

      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favoriteId) => favoriteId !== id)
            : [...state.favorites, id],
        })),

      isFavorite: (id) => get().favorites.includes(id),

      clearCollection: () =>
        set({
          collection: [],
          recentScans: [],
          favorites: [],
        }),
    }),
    {
      name: "minifigure-collection",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

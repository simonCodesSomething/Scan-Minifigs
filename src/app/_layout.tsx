import { useMinifigureStore } from "@/store/minifigureStore";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

// Keep the native splash screen visible while the app initializes.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loadMinifigures = useMinifigureStore(
    (state) => state.loadMinifigures
  );

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadMinifigures();
      } catch (error) {
        console.error("Failed to load minifigures:", error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, [loadMinifigures]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  // Don't render the app until initialization is complete.
  if (!isReady) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
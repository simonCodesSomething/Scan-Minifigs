import { useMinifigureStore } from "@/store/minifigureStore";
import { Stack } from "expo-router";
import React, { useEffect } from "react";


export default function RootLayout() {
  const loadMinifigures =
  useMinifigureStore(
    (state) => state.loadMinifigures
  );

useEffect(() => {
  loadMinifigures();
}, [loadMinifigures]);
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name='(tabs)' />


    </Stack>

  );
}

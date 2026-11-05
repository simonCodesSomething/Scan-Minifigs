
import { useMinifigureStore } from "@/store/minifigureStore";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { AdsConsent, MobileAds } from "react-native-google-mobile-ads";


// Keep the native splash screen visible while the app initializes.
SplashScreen.preventAutoHideAsync();

// Prevent duplicate SDK initialization.
let adsInitializationPromise: Promise<unknown> | null = null;

async function initializeAdsWithConsent() {
  let canRequestAds = false;

  try {
    // Refresh consent information and show a form if required.
    const consentInfo = await AdsConsent.gatherConsent();
    canRequestAds = consentInfo.canRequestAds;
  } catch (error) {
    console.warn("Failed to gather ad consent:", error);

    // Check whether a previous consent session still permits ad requests.
    try {
      const consentInfo = await AdsConsent.getConsentInfo();
      canRequestAds = consentInfo.canRequestAds;
    } catch (consentError) {
      console.warn("Failed to retrieve saved consent information:", consentError);
    }
  }

  if (!canRequestAds) {
    console.log("Ads not initialized: consent does not permit ad requests.");
    return;
  }

  try {
    if (!adsInitializationPromise) {
      adsInitializationPromise = MobileAds().initialize();
    }

    await adsInitializationPromise;
    console.log("Google Mobile Ads initialized.");
  } catch (error) {
    console.error("Failed to initialize Google Mobile Ads:", error);
  }
}

export default function RootLayout() {
  const loadMinifigures = useMinifigureStore(
    (state) => state.loadMinifigures
  );

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([
          loadMinifigures().catch((error) => {
            console.error("Failed to load minifigures:", error);
          }),
          initializeAdsWithConsent(),
        ]);
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

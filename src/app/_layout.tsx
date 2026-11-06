
import ForceUpdateScreen from "@/app/components/updates/ForceUpdateScreen";
import {
  AppVersionCheckResult,
  checkAppVersion,
} from "@/services/appVersionService";
import { useMinifigureStore } from "@/store/minifigureStore";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { AppState } from "react-native";
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
      console.warn(
        "Failed to retrieve saved consent information:",
        consentError,
      );
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
    (state) => state.loadMinifigures,
  );

  const [isReady, setIsReady] = useState(false);

  const [versionResult, setVersionResult] =
    useState<AppVersionCheckResult | null>(null);

  const versionCheckInProgress = useRef(false);
  const versionCheckSequence = useRef(0);

  // Check the minimum supported app version.
  const refreshAppVersion = async () => {
    if (versionCheckInProgress.current) {
      return;
    }

    versionCheckInProgress.current = true;
    const sequence = ++versionCheckSequence.current;

    try {
      const result = await checkAppVersion();

      if (sequence === versionCheckSequence.current) {
        setVersionResult(result);
      }
    } finally {
      versionCheckInProgress.current = false;
    }
  };

  useEffect(() => {
    let isActive = true;

    async function prepare() {
      try {
        await Promise.all([
          loadMinifigures().catch((error) => {
            console.error("Failed to load minifigures:", error);
          }),
          initializeAdsWithConsent(),
          refreshAppVersion(),
        ]);
      } finally {
        if (isActive) {
          setIsReady(true);
        }
      }
    }

    prepare();

    return () => {
      isActive = false;
      versionCheckSequence.current += 1;
    };
  }, [loadMinifigures]);

  // Recheck when returning from Google Play or the App Store.
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      (nextState) => {
        if (nextState === "active" && isReady) {
          refreshAppVersion();
        }
      },
    );

    return () => {
      subscription.remove();
    };
  }, [isReady]);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  // Don't render the app until initialization is complete.
  if (!isReady) {
    return null;
  }

  // Block unsupported app versions.
  if (
    versionResult?.updateRequired &&
    versionResult.storeUrl
  ) {
    return (
      <ForceUpdateScreen
        currentVersion={versionResult.currentVersion}
        latestVersion={versionResult.latestVersion}
        storeUrl={versionResult.storeUrl}
      />
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

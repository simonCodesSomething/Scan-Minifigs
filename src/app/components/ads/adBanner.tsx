
import { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

import {
  AdsConsent,
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

type AdPlacement = "home" | "series" | "collection";

interface AdBannerProps {
  placement: AdPlacement;
}

// ---------------------------------------------------------
// SCREENSHOT MODE
// ---------------------------------------------------------

const HIDE_ADS_FOR_SCREENSHOTS = false;

// ---------------------------------------------------------
// ADMOB UNIT IDS
// ---------------------------------------------------------

const AD_UNIT_IDS = {
  android: {
    home: "ca-app-pub-5794787274519836/7078289406",
    series: "ca-app-pub-5794787274519836/7189970045",
    collection: "ca-app-pub-5794787274519836/1595074615",
  },
  ios: {
    home: "ca-app-pub-5794787274519836/2612858416",
    series: "ca-app-pub-5794787274519836/9940684094",
    collection: "ca-app-pub-5794787274519836/1052539740",
  },
};

// ---------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------

export default function AdBanner({
  placement,
}: AdBannerProps) {
  const [canRequestAds, setCanRequestAds] = useState(false);
  const [adFailed, setAdFailed] = useState(false);

  useEffect(() => {
    if (HIDE_ADS_FOR_SCREENSHOTS) {
      return;
    }

    let isActive = true;

    async function checkConsent() {
      try {
        const consentInfo = await AdsConsent.getConsentInfo();

        if (isActive) {
          setCanRequestAds(consentInfo.canRequestAds);
        }
      } catch (error) {
        console.warn("Unable to check ad consent:", error);
      }
    }

    checkConsent();

    return () => {
      isActive = false;
    };
  }, []);

  if (HIDE_ADS_FOR_SCREENSHOTS) {
    return null;
  }

  if (!canRequestAds || adFailed) {
    return null;
  }

  const adUnitId = __DEV__
    ? TestIds.ADAPTIVE_BANNER
    : Platform.OS === "ios"
      ? AD_UNIT_IDS.ios[placement]
      : AD_UNIT_IDS.android[placement];

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdLoaded={() => {
          console.log(`[AdBanner] ${placement} loaded`);
        }}
        onAdFailedToLoad={(error) => {
          console.warn(
            `[AdBanner] ${placement} failed:`,
            error
          );
          setAdFailed(true);
        }}
      />
    </View>
  );
}

// ---------------------------------------------------------
// STYLES
// ---------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F172A",
  },
});

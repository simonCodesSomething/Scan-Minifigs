
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

export default function AdBanner({
  placement,
}: AdBannerProps) {
  const [canRequestAds, setCanRequestAds] = useState(false);
  const [adFailed, setAdFailed] = useState(false);

  useEffect(() => {
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
        size={BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => {
          console.warn("Banner ad failed to load:", error);
          setAdFailed(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F172A",
  },
});

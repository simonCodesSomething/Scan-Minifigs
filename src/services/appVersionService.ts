import * as Application from "expo-application";
import { Platform } from "react-native";

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export type AppVersionPolicy = {
  platform: "android" | "ios";
  minimum_version: string;
  latest_version: string;
  store_url: string;
  updated_at: string;
};

export type AppVersionCheckResult = {
  updateRequired: boolean;
  currentVersion: string;
  latestVersion: string;
  storeUrl: string | null;
};

function compareVersions(current: string, required: string): number {
  const currentParts = current.split(".").map(Number);
  const requiredParts = required.split(".").map(Number);

  const length = Math.max(currentParts.length, requiredParts.length);

  for (let i = 0; i < length; i++) {
    const currentPart = currentParts[i] ?? 0;
    const requiredPart = requiredParts[i] ?? 0;

    if (currentPart < requiredPart) return -1;
    if (currentPart > requiredPart) return 1;
  }

  return 0;
}

export async function checkAppVersion(): Promise<AppVersionCheckResult> {
  const currentVersion = Application.nativeApplicationVersion ?? "0.0.0";

  const defaultResult: AppVersionCheckResult = {
    updateRequired: false,
    currentVersion,
    latestVersion: currentVersion,
    storeUrl: null,
  };

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn("[AppVersion] Supabase configuration missing.");
    return defaultResult;
  }

  if (Platform.OS !== "android" && Platform.OS !== "ios") {
    return defaultResult;
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/app_version_policy?platform=eq.${Platform.OS}&select=*`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const policies: AppVersionPolicy[] = await response.json();
    const policy = policies[0];

    if (!policy) {
      return defaultResult;
    }

    const updateRequired =
      compareVersions(currentVersion, policy.minimum_version) < 0;

    return {
      updateRequired,
      currentVersion,
      latestVersion: policy.latest_version,
      storeUrl: policy.store_url,
    };
  } catch (error) {
    console.warn("[AppVersion] Unable to check app version:", error);

    // Fail open: temporary network errors should not lock users out.
    return defaultResult;
  }
}

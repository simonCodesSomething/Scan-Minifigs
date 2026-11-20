import AsyncStorage from "@react-native-async-storage/async-storage";
import * as StoreReview from "expo-store-review";

const STORAGE_KEY = "@scanminifigs_review_v1";

const MIN_SCANS = 10;
const MIN_ACTIVE_DAYS = 3;
const MIN_APP_AGE_DAYS = 3;
const REVIEW_COOLDOWN_DAYS = 90;

//const MIN_SCANS = 1;
//const MIN_ACTIVE_DAYS = 1;
//const MIN_APP_AGE_DAYS = 0;
//const REVIEW_COOLDOWN_DAYS = 0;

const DAY_MS = 24 * 60 * 60 * 1000;

type ReviewState = {
  firstScanAt: number;
  successfulScans: number;
  activeDays: string[];
  lastRequestAt: number | null;
};

let requestInProgress = false;

function localDayKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

async function readReviewState(): Promise<ReviewState> {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored) as ReviewState;
  }

  return {
    firstScanAt: Date.now(),
    successfulScans: 0,
    activeDays: [],
    lastRequestAt: null,
  };
}

/**
 * Call ONLY after the user successfully adds a
 * scanned minifigure to their collection.
 */
export async function recordSuccessfulScanForReview() {
  try {
    const state = await readReviewState();
    const today = localDayKey(new Date());

    state.successfulScans += 1;

    if (!state.activeDays.includes(today)) {
      state.activeDays.push(today);
    }

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("[AppReview] Could not record scan:", error);
  }
}

/**
 * Call when the Home screen becomes active.
 */
export async function maybeRequestAppReview() {
  if (requestInProgress) return;

  requestInProgress = true;

  try {
    const state = await readReviewState();
    const now = Date.now();
    console.log("[AppReview] Checking eligibility:", state);

    const enoughScans = state.successfulScans >= MIN_SCANS;
    const enoughDays = state.activeDays.length >= MIN_ACTIVE_DAYS;

    const oldEnough = now - state.firstScanAt >= MIN_APP_AGE_DAYS * DAY_MS;

    const cooldownPassed =
      state.lastRequestAt === null ||
      now - state.lastRequestAt >= REVIEW_COOLDOWN_DAYS * DAY_MS;

    if (!enoughScans || !enoughDays || !oldEnough || !cooldownPassed) {
      return;
    }

    const available = await StoreReview.isAvailableAsync();

    if (!available) return;

    // Store before requesting, because the platform does not
    // tell us whether a review dialog was actually displayed.
    await StoreReview.requestReview();

    state.lastRequestAt = Date.now();

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log("[AppReview] Requesting native review");
  } catch (error) {
    console.warn("[AppReview] Review request failed:", error);
  } finally {
    requestInProgress = false;
  }
}

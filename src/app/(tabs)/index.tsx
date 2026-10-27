
import { useEffect, useState } from "react";

import { useCollectionStore } from "@/store/collectionStore";
import { useMinifigureStore } from "@/store/minifigureStore";

import { styles } from "@/styles/screens/home.styles";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { router } from "expo-router";

import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import type { ApplicationUpdate } from "@/models/applicationUpdate";
import { fetchLatestApplicationUpdate } from "@/services/applicationUpdate";

function getCategoryLabel(category: ApplicationUpdate["category"]) {
  switch (category) {
    case "feature":
      return "NEW FEATURE";
    case "improvement":
      return "IMPROVEMENT";
    case "bug_fix":
      return "BUG FIX";
    case "catalog":
      return "CATALOG UPDATE";
    default:
      return "APPLICATION UPDATE";
  }
}

export default function Index() {
  const collection = useCollectionStore(
    (state) => state.collection
  );

  const recentScans = useCollectionStore(
    (state) => state.recentScans
  );

  const minifigures = useMinifigureStore(
    (state) => state.minifigures
  );

  const minifiguresLoaded = useMinifigureStore(
    (state) => state.loaded
  );

  const favorites = useCollectionStore(
    (state) => state.favorites ?? []
  );

  const favoritedFigures = favorites.length;

  const [applicationUpdate, setApplicationUpdate] =
    useState<ApplicationUpdate | null>(null);

  const [updateLoading, setUpdateLoading] = useState(true);

  const [updateError, setUpdateError] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function loadApplicationUpdate() {
      try {
        const update = await fetchLatestApplicationUpdate();

        if (isActive) {
          setApplicationUpdate(update);
          setUpdateError(false);
        }
      } catch (error) {
        console.error(
          "Failed to load application update:",
          error
        );

        if (isActive) {
          setUpdateError(true);
        }
      } finally {
        if (isActive) {
          setUpdateLoading(false);
        }
      }
    }

    loadApplicationUpdate();

    return () => {
      isActive = false;
    };
  }, []);

  /*
   * Number of unique minifigures
   * currently in the collection.
   */
  const uniqueFigures = collection.filter(
    (item) => item.quantity > 0
  ).length;

  /*
   * Find the most recently scanned
   * minifigure from the preloaded catalog.
   */
  const latestMinifig =
    recentScans.length > 0
      ? minifigures.find(
          (figure) => figure.id === recentScans[0].id
        )
      : undefined;

  const handleScan = () => {
    router.push("/(tabs)/scanScreen");
  };

  /*
   * Total minifigures comes from
   * the preloaded Supabase catalog.
   */
  const totalMinifigures = minifigures.length;

  const collectionPercent =
    totalMinifigures > 0
      ? Math.round(
          (uniqueFigures / totalMinifigures) * 100
        )
      : 0;

  /*
   * Wait until the catalog has been
   * preloaded by _layout.tsx.
   */
  if (!minifiguresLoaded) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <ActivityIndicator size="large" />

        <Text
          style={{
            color: "white",
            marginTop: 12,
          }}
        >
          Loading minifigures...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Scan Minifigs
        </Text>

        <Text style={styles.subtitle}>
          Discover what's inside
          before you open it.
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Scan */}

        <TouchableOpacity
          activeOpacity={0.88}
          style={styles.scanCard}
          onPress={handleScan}
        >
          <View style={styles.scanHeader}>
            <View style={styles.scanIconContainer}>
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={42}
                color="#FBBF24"
              />

              <View style={styles.scanIconBadge}>
                <Ionicons
                  name="scan-outline"
                  size={14}
                  color="#111827"
                />
              </View>
            </View>

            <View style={styles.scanTextContainer}>
              <Text style={styles.scanTitle}>
                Scan a Box
              </Text>

              <Text style={styles.scanSubtitle}>
                Reveal what's inside the box
              </Text>
            </View>
          </View>

          <View style={styles.scanAction}>
            <Ionicons
              name="scan-outline"
              size={20}
              color="#111827"
            />

            <Text style={styles.scanActionText}>
              Scan Now
            </Text>
          </View>
        </TouchableOpacity>

        {/* Last Scanned Minifigure */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Last Scanned Minifigure
          </Text>

          {!latestMinifig ? (
            <View style={styles.placeholderCard}>
              <Text style={styles.placeholderText}>
                Scan your first minifigure.
              </Text>
            </View>
          ) : (
            <View style={styles.recentCard}>
              <Image
                source={{
                  uri: latestMinifig.image,
                }}
                style={styles.recentImage}
              />

              <View style={styles.recentInfo}>
                <Text style={styles.recentName}>
                  {latestMinifig.name}
                </Text>

                <Text style={styles.recentSeries}>
                  Set {latestMinifig.set}
                </Text>
              </View>
            </View>
          )}
        </View>

        {/* Collection */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Collection Progress
          </Text>

          <View style={styles.progressCard}>
            <Text style={styles.progressNumber}>
              {uniqueFigures} of {totalMinifigures}
            </Text>

            <Text style={styles.progressLabel}>
              Minifigures Collected
            </Text>

            <View style={styles.progressBackground}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${collectionPercent}%`,
                  },
                ]}
              />
            </View>

            <Text style={styles.progressPercent}>
              {collectionPercent}% Complete
            </Text>

            <View style={styles.progressDivider} />

            <View style={styles.favoritesCount}>
              <Ionicons
                name="bookmark"
                size={16}
                color="#FBBF24"
              />

              <Text style={styles.favoritesCountText}>
                {favoritedFigures} Favorited{" "}
                {favoritedFigures === 1
                  ? "Minifigure"
                  : "Minifigures"}
              </Text>
            </View>
          </View>
        </View>

        {/* Application Updates */}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Application Updates
          </Text>

          <View
            style={[
              styles.placeholderCard,
              {
                alignItems: "flex-start",
              },
            ]}
          >
            {updateLoading ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <ActivityIndicator color="#FBBF24" />

                <Text style={styles.placeholderText}>
                  Loading application update...
                </Text>
              </View>
            ) : updateError ? (
              <Text style={styles.placeholderText}>
                Application updates couldn't be loaded.
                Please try again later.
              </Text>
            ) : !applicationUpdate ? (
              <Text style={styles.placeholderText}>
                No application updates available right now.
              </Text>
            ) : (
              <View style={{ width: "100%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#334155",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      style={{
                        color: "#FBBF24",
                        fontSize: 11,
                        fontWeight: "700",
                        letterSpacing: 0.5,
                      }}
                    >
                      {getCategoryLabel(
                        applicationUpdate.category
                      )}
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#F8FAFC",
                    fontSize: 17,
                    fontWeight: "700",
                    marginBottom: 8,
                  }}
                >
                  {applicationUpdate.title}
                </Text>

                <Text
                  style={{
                    color: "#CBD5E1",
                    fontSize: 14,
                    lineHeight: 21,
                  }}
                >
                  {applicationUpdate.description}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


import { styles } from "@/styles/screens/seriesDetail.styles";
import { Ionicons } from "@expo/vector-icons";

import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router, useLocalSearchParams } from "expo-router";

import { useCollectionStore } from "@/store/collectionStore";
import { useMinifigureStore } from "@/store/minifigureStore";
import { useEffect, useState } from "react";
import { getSeriesById } from "../../../services/series";

export default function SeriesDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [series, setSeries] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const collection = useCollectionStore((state) => state.collection);
  const increment = useCollectionStore((state) => state.increment);
  const decrement = useCollectionStore((state) => state.decrement);

  // Safe defaults for data persisted before favorites were introduced.
  const favorites = useCollectionStore((state) => state.favorites ?? []);
  const toggleFavorite = useCollectionStore(
    (state) => state.toggleFavorite,
  );

  const minifigures = useMinifigureStore((state) => state.minifigures);

  useEffect(() => {
    async function loadSeries() {
      try {
        const data = await getSeriesById(id);
        setSeries(data);
      } catch (error) {
        console.error("Failed to load series:", error);
        setSeries(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadSeries();
    }
  }, [id]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/SeriesDetails");
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!series) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Series not found</Text>
      </SafeAreaView>
    );
  }

  const figures = minifigures
    .filter((f) => f.seriesId === series.id)
    .map((f) => ({
      ...f,
      owned: collection.find((c) => c.id === f.id)?.quantity ?? 0,
      isFavorite: favorites.includes(f.id),
    }));

  const visibleFigures = favoritesOnly
    ? figures.filter((f) => f.isFavorite)
    : figures;

  // Collection statistics always use the full series, not the filtered list.
  const ownedUnique = figures.filter((f) => f.owned > 0).length;
  const ownedTotal = figures.reduce((sum, f) => sum + f.owned, 0);
  const duplicates = figures.reduce(
    (sum, f) => sum + Math.max(0, f.owned - 1),
    0,
  );

  const progress =
    figures.length === 0 ? 0 : (ownedUnique / figures.length) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backButton} onPress={handleBack}>
        <Ionicons name="chevron-back" size={24} color="#FFF" />
      </Pressable>

      <View style={styles.collectionHeader}>
        <View style={styles.collectionHeaderTop}>
          <View style={styles.collectionHeaderTitleContainer}>
            <Text
              style={styles.collectionHeaderTitle}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {series.name}
            </Text>

            <Text style={styles.collectionHeaderSubtitle}>
              Collection Progress
            </Text>
          </View>

          <View style={styles.collectionCount}>
            <Text style={styles.collectionCountNumber}>
              {ownedUnique}
            </Text>

            <Text style={styles.collectionCountTotal}>
              / {figures.length}
            </Text>
          </View>
        </View>

        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${progress}%` },
            ]}
          />
        </View>

        

        <View style={styles.collectionStats}>
          <Text style={styles.collectionStatsText}>
            {Math.round(progress)}% collected
          </Text>

          <Text style={styles.collectionStatsText}>
            {figures.length - ownedUnique} remaining
          </Text>
        </View>
        <View style={styles.filterDivider} />
        <View style={styles.filterContainer}>
  <Pressable
    onPress={() => setFavoritesOnly(false)}
    style={[
      styles.filterPill,
      !favoritesOnly && styles.filterPillActive,
    ]}
    accessibilityRole="button"
    accessibilityLabel="Show all minifigures"
  >
    <Text
      style={[
        styles.filterText,
        !favoritesOnly && styles.filterTextActive,
      ]}
    >
      All
    </Text>
  </Pressable>

  <Pressable
    onPress={() => setFavoritesOnly(true)}
    style={[
      styles.filterPill,
      favoritesOnly && styles.filterPillActive,
    ]}
    accessibilityRole="button"
    accessibilityLabel="Show favorite minifigures"
  >
    <Ionicons
      name="bookmark"
      size={14}
      color={favoritesOnly ? "#0F172A" : "#94A3B8"}
    />
    <Text
      style={[
        styles.filterText,
        favoritesOnly && styles.filterTextActive,
      ]}
    >
      Favorites ({figures.filter((f) => f.isFavorite).length})
    </Text>
  </Pressable>
</View>
      </View>



      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={visibleFigures}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          favoritesOnly ? (
            <Text
              style={{
                color: "#94A3B8",
                textAlign: "center",
                marginTop: 24,
              }}
            >
              No favorites yet. Tap the bookmark to add a favorite.
            </Text>
          ) : null
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              item.owned > 1
                ? styles.duplicate
                : item.owned > 0
                  ? styles.owned
                  : styles.missing,
            ]}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.status}>
                {item.owned === 0
                  ? "Missing"
                  : item.owned === 1
                    ? "Owned"
                    : `${item.owned} Owned`}
              </Text>
            </View>

            <Pressable
              onPress={() => toggleFavorite(item.id)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={
                item.isFavorite
                  ? `Remove ${item.name} from favorites`
                  : `Add ${item.name} to favorites`
              }
              style={{ padding: 8 }}
            >
              <Ionicons
                name={item.isFavorite ? "bookmark" : "bookmark-outline"}
                size={22}
                color={item.isFavorite ? "#FBBF24" : "#94A3B8"}
              />
            </Pressable>

            {/* Existing counter — unchanged */}
            <View style={styles.counter}>
              <Pressable
                onPress={() => decrement(item.id)}
                style={styles.button}
              >
                <Ionicons
                  name="remove"
                  size={16}
                  color="#1E293B"
                />
              </Pressable>

              <Text style={styles.count}>{item.owned}</Text>

              <Pressable
                onPress={() => increment(item.id)}
                style={styles.button}
              >
                <Ionicons
                  name="add"
                  size={16}
                  color="#1E293B"
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

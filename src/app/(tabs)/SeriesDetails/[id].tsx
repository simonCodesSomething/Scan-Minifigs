//import { styles } from "@/styles/seriesDetailScreen.styles";
import { styles } from "@/styles/screens/seriesDetail.styles";
import { Ionicons } from "@expo/vector-icons";

import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View
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

const collection = useCollectionStore((state) => state.collection);
const minifigures = useMinifigureStore((state) => state.minifigures);
const increment = useCollectionStore((state) => state.increment);
const decrement = useCollectionStore((state) => state.decrement);

useEffect(() => {
  async function loadSeries() {
    try {
      const data = await getSeriesById(id);
      setSeries(data);
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
    router.back(); // Preserves the glide-out animation
  } else {
    router.replace("/SeriesDetails");
   } // Fallback to the main series screen

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
        <Text style={styles.title}>
          Series not found
        </Text>
      </SafeAreaView>
    );
  }

   const figures = minifigures
  .filter(f => f.seriesId === series.id)
  .map(f => ({
    ...f,
    owned:
      collection.find(c => c.id === f.id)
        ?.quantity ?? 0,
  }));


  const ownedUnique = figures.filter((f) => f.owned > 0).length;

  const ownedTotal = figures.reduce((sum, f) => sum + f.owned, 0);

  const duplicates = figures.reduce(
    (sum, f) => sum + Math.max(0, f.owned - 1),
    0
  );

  const progress =
  figures.length === 0
    ? 0
    : (ownedUnique / figures.length) * 100;



return (
  <SafeAreaView style={styles.container}>
    <Pressable
      style={styles.backButton}
      onPress={handleBack}
    >
      <Ionicons
        name="chevron-back"
        size={24}
        color="#FFF"
      />
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

  {/* Full-width progress bar */}
  <View style={styles.progressBarBackground}>
    <View
      style={[
        styles.progressBarFill,
        {
          width: `${progress}%`,
        },
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
</View>

    {/* Only this scrolls */}
    <FlatList
     style={styles.list}
  contentContainerStyle={styles.listContent}
      data={figures}
      keyExtractor={(item) => item.id}
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
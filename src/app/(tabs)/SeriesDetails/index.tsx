import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useCollectionStore } from "@/store/collectionStore";
import { useMinifigureStore } from "@/store/minifigureStore";

import { styles } from "@/styles/seriesScreen.styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useEffect, useState } from "react";

import { getSeries } from "../../../services/series";


export default function SeriesScreen() {

  const collection = useCollectionStore(
    (state) => state.collection
  );


  const minifigures = useMinifigureStore(
    (state) => state.minifigures
  );

  const minifiguresLoading = useMinifigureStore(
    (state) => state.loading
  );

  const minifiguresLoaded = useMinifigureStore(
    (state) => state.loaded
  );


  const [series, setSeries] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedYear, setSelectedYear] =
    useState("All");


  useEffect(() => {

    async function loadSeries() {

      try {

        const data = await getSeries();


        const sorted = [...data].sort(
          (a, b) => {

            if (
              a.release_year !==
              b.release_year
            ) {
              return (
                b.release_year -
                a.release_year
              );
            }


            const getSeriesNumber =
              (name: string) => {

                const match =
                  name.match(
                    /^Series\s+(\d+)/i
                  );

                return match
                  ? Number(match[1])
                  : -1;
              };


            const aSeries =
              getSeriesNumber(a.name);

            const bSeries =
              getSeriesNumber(b.name);


            if (
              aSeries !== -1 &&
              bSeries !== -1
            ) {
              return bSeries - aSeries;
            }


            if (aSeries !== -1) {
              return -1;
            }


            if (bSeries !== -1) {
              return 1;
            }


            return a.name.localeCompare(
              b.name
            );
          }
        );


        setSeries(sorted);

      } catch (error) {

        console.error(
          "Failed to load series:",
          error
        );

      } finally {

        setLoading(false);

      }
    }


    loadSeries();

  }, []);


  const years = [
    "All",

    ...Array.from(
      new Set(
        series.map(
          (item) => item.release_year
        )
      )
    ).sort(
      (a, b) => b - a
    ),
  ];


  const filteredSeries =
    selectedYear === "All"
      ? series
      : series.filter(
          (item) =>
            item.release_year ===
            Number(selectedYear)
        );


  if (
    loading ||
    !minifiguresLoaded ||
    minifiguresLoading
  ) {

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

        <ActivityIndicator
          size="large"
        />

        <Text
          style={{
            color: "white",
            marginTop: 12,
          }}
        >
          Loading series...
        </Text>

      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView
      style={styles.container}
    >

      {/* Fixed page header */}

      <Text style={styles.title}>
        Minifigure Series
      </Text>


      <Text style={styles.subtitle}>
        Browse every collectible minifigure series.
      </Text>


      <FlatList
        data={filteredSeries}

        keyExtractor={(item) =>
          item.id
        }

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={
          styles.seriesList
        }


        ListHeaderComponent={
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={
              false
            }
            contentContainerStyle={
              styles.yearFilter
            }
          >

            {years.map((year) => {

              const isSelected =
                selectedYear ===
                year.toString();


              return (
                <Pressable
                  key={year.toString()}

                  onPress={() =>
                    setSelectedYear(
                      year.toString()
                    )
                  }

                  style={({
                    pressed,
                  }) => [
                    styles.yearChip,

                    isSelected &&
                      styles.yearChipSelected,

                    pressed &&
                      styles.yearChipPressed,
                  ]}
                >

                  <Text
                    style={[
                      styles.yearChipText,

                      isSelected &&
                        styles.yearChipTextSelected,
                    ]}
                  >
                    {year === "All"
                      ? "All"
                      : year}
                  </Text>

                </Pressable>
              );

            })}

          </ScrollView>
        }


        renderItem={({
          item,
          index,
        }) => {

          /*
           * Use the preloaded Supabase
           * minifigure data instead of
           * the old MINIFIGURES constant.
           */

          const seriesFigures =
            minifigures.filter(
              (figure) =>
                figure.seriesId ===
                item.id
            );


          const ownedUnique =
            seriesFigures.filter(
              (figure) =>
                collection.some(
                  (c) =>
                    c.id ===
                      figure.id &&
                    c.quantity > 0
                )
            ).length;


          const progress =
            seriesFigures.length === 0
              ? 0
              : (ownedUnique /
                  seriesFigures.length) *
                100;


          const previous =
            filteredSeries[index - 1];


          const showYearHeader =
            selectedYear === "All" &&
            (!previous ||
              previous.release_year !==
                item.release_year);


          return (
            <View>

              {showYearHeader && (
                <Text
                  style={
                    styles.yearHeader
                  }
                >
                  {item.release_year}
                </Text>
              )}


              <TouchableOpacity
                style={styles.card}

                onPress={() =>
                  router.push({
                    pathname:
                      "/SeriesDetails/[id]",

                    params: {
                      id: item.id,
                    },
                  })
                }
              >

                <Image
                  source={{
                    uri:
                      item.imageURL ??
                      "https://miyaurjujuibvcoyrncs.supabase.co/storage/v1/object/public/minifigs/placeholder.webp",
                  }}

                  style={
                    styles.seriesImage
                  }

                  resizeMode="cover"
                />


                <View
                  style={styles.content}
                >

                  <Text
                    style={
                      styles.seriesName
                    }
                  >
                    {item.name}
                  </Text>


                  <View
                    style={
                      styles.figureInfoRow
                    }
                  >

                    <Text
                      style={
                        styles.figures
                      }
                    >
                      {item.total_figures}{" "}
                      Minifigures
                    </Text>


                    <View
                      style={
                        styles.scanBadge
                      }
                    >

                      <MaterialCommunityIcons
                        name="barcode-scan"
                        size={16}
                        color={
                          item.can_scan
                            ? "#4CAF50"
                            : "#999"
                        }
                      />

                    </View>

                  </View>


                  <View
                    style={
                      styles.progressBackground
                    }
                  >

                    <View
                      style={[
                        styles.progressFill,
                        {
                          width:
                            `${progress}%`,
                        },
                      ]}
                    />

                  </View>


                  <Text
                    style={
                      styles.progressText
                    }
                  >
                    {ownedUnique} /{" "}
                    {item.total_figures}{" "}
                    Collected
                  </Text>

                </View>

              </TouchableOpacity>

            </View>
          );
        }}
      />

    </SafeAreaView>
  );
}
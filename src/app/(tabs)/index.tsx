import { useCollectionStore } from "@/store/collectionStore";
import { useMinifigureStore } from "@/store/minifigureStore";

//import { styles } from "@/styles/index.styles";
import { styles } from "@/styles/screens/home.styles";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";

import React from "react";

import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

  const collection =
    useCollectionStore(
      (state) => state.collection
    );


  const recentScans =
    useCollectionStore(
      (state) => state.recentScans
    );


  const minifigures =
    useMinifigureStore(
      (state) => state.minifigures
    );


  const minifiguresLoaded =
    useMinifigureStore(
      (state) => state.loaded
    );


  /*
   * Number of unique minifigures
   * currently in the collection.
   */
  const uniqueFigures =
    collection.filter(
      (item) => item.quantity > 0
    ).length;


  /*
   * Find the most recently scanned
   * minifigure from the preloaded catalog.
   */
  const latestMinifig =
    recentScans.length > 0
      ? minifigures.find(
          (figure) =>
            figure.id ===
            recentScans[0].id
        )
      : undefined;
      


  const greeting =
    getGreeting();

  const handleScan = () => {
  router.push("/(tabs)/scanScreen");
};

  /*
   * Total minifigures comes from
   * the preloaded Supabase catalog.
   */
  const totalMinifigures =
    minifigures.length;


  const collectionPercent =
    totalMinifigures > 0
      ? Math.round(
          (uniqueFigures /
            totalMinifigures) *
            100
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
            justifyContent:
              "center",
            alignItems:
              "center",
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
          Loading minifigures...
        </Text>

      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView
      style={styles.container}
    >

      <ScrollView
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={
          false
        }
      >

        {/* Header */}

        <View
          style={styles.header}
        >

          <Text
            style={styles.title}
          >
            Scan Minifigs
          </Text>


          <Text
            style={styles.subtitle}
          >
            Discover what's inside
            before you open it.
          </Text>

        </View>


        {/* Scan Button */}

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

        <View
          style={styles.section}
        >

          <Text
            style={
              styles.sectionTitle
            }
          >
            Last Scanned Minifigure
          </Text>


          {!latestMinifig ? (

            <View
              style={
                styles.placeholderCard
              }
            >

              <Text
                style={
                  styles.placeholderText
                }
              >
                Scan your first
                minifigure.
              </Text>

            </View>

          ) : (

            <View
              style={
                styles.recentCard
              }
            >

              <Image
                source={{
                  uri:
                    latestMinifig.image,
                }}
                style={
                  styles.recentImage
                }
              />


              <View
                style={
                  styles.recentInfo
                }
              >

                <Text
                  style={
                    styles.recentName
                  }
                >
                  {latestMinifig.name}
                </Text>


                <Text
                  style={
                    styles.recentSeries
                  }
                >
                  {latestMinifig.seriesId}
                </Text>

              </View>

            </View>

          )}

        </View>


        {/* Collection */}

        <View
          style={styles.section}
        >

          <Text
            style={
              styles.sectionTitle
            }
          >
            Collection Progress
          </Text>


          <View
            style={
              styles.progressCard
            }
          >

            <Text
              style={
                styles.progressNumber
              }
            >
              {uniqueFigures} of{" "}
              {totalMinifigures}
            </Text>


            <Text
              style={
                styles.progressLabel
              }
            >
              Minifigures Collected
            </Text>


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
                      `${collectionPercent}%`,
                  },
                ]}
              />

            </View>


            <Text
              style={
                styles.progressPercent
              }
            >
              {collectionPercent}%
              {" "}Complete
            </Text>

          </View>

        </View>


        {/* Supported Series */}

        <View
          style={styles.section}
        >

          <Text
            style={
              styles.sectionTitle
            }
          >
            Latest Supported Series
          </Text>


          <View
            style={
              styles.placeholderCard
            }>

            <Text
              style={
                styles.placeholderText
              }
            >
              Series 29 • Series 28 •
              Series 27
            </Text>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


function getGreeting() {

  const hour =
    new Date().getHours();


  if (hour < 12) {
    return "Good Morning";
  }


  if (hour < 18) {
    return "Good Afternoon";
  }


  return "Good Evening";
}
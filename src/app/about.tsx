import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/styles/about.styles";

export default function AboutScreen() {
  const handleSupport = async () => {
    const url = "https://buymeacoffee.com/scan.minifigs";

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Unable to open support page:", error);
    }
  };
const handleReportCode = async () => {
  const email = "info@scan-minifigs.com";
  const subject = "New Scan Minifigs Data Matrix Code";
  const body =
    "Data Matrix Code:\n\n" +
    "Series:\n\n" +
    "Minifigure:\n\n";

  const url = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  try {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(
        "Email Not Available",
        `No email app is available on this device. You can send the code to ${email}.`
      );
    }
  } catch (error) {
    console.error("Unable to open email:", error);

    Alert.alert(
      "Unable to Open Email",
      `Please send the code to ${email}.`
    );
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>About</Text>

            <Text style={styles.subtitle}>
              Learn more about Scan Minifigs and how it helps
              you manage your collection.
            </Text>
          </View>

          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.closeButton,
              pressed && styles.closeButtonPressed,
            ]}
          >
            <Ionicons
              name="close"
              size={24}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* App Information */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="scan-outline"
              size={32}
              color="#FBBF24"
            />
          </View>

          <Text style={styles.cardTitle}>
            Scan Minifigs
          </Text>

<Text style={styles.cardText}>Scan Minifigs is an independent collector tool designed to help you identify and keep track of your LEGO Minifigure collection. </Text>
 <Text style={styles.cardText}>
  Scanning is supported for Series 25 figures with supported
  Data Matrix codes, generally from mid-production onward, as
  well as supported series produced after Series 25. Earlier
  figures and production runs without supported codes are
  provided as collection lists only.
</Text>
 <Text style={styles.cardText}>Scan supported minifigure Data Matrix codes to quickly identify figures, browse supported series, and keep track of the Minifigures you have discovered. </Text>
        </View>

        {/* What We Do */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            What You Can Do
          </Text>

          <View style={styles.infoCard}>
            <Ionicons
              name="scan-outline"
              size={24}
              color="#2563EB"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Scan</Text>

              <Text style={styles.infoText}>
                Identify supported LEGO Minifigures by scanning
                their Data Matrix codes.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="albums-outline"
              size={24}
              color="#22C55E"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Collect</Text>

              <Text style={styles.infoText}>
                Keep track of the Minifigures you have discovered
                and organize your collection.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="stats-chart-outline"
              size={24}
              color="#FBBF24"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Track Progress
              </Text>

              <Text style={styles.infoText}>
                See your collection progress across supported
                Minifigure series.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="library-outline"
              size={24}
              color="#A855F7"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Browse Series
              </Text>

              <Text style={styles.infoText}>
                Explore supported LEGO Minifigure series and
                discover the figures included in each collection.
              </Text>
            </View>
          </View>
        </View>
        {/* Help Improve Scanning */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Help Improve Scanning
  </Text>

  <View style={styles.card}>
    <View style={styles.iconContainer}>
      <Ionicons
        name="mail-outline"
        size={32}
        color="#FFFFFF"
      />
    </View>

    <Text style={styles.cardTitle}>
      Found a New Code?
    </Text>

    <Text style={styles.cardText}>
      Found a Data Matrix code that Scan Minifigs does not
      recognize? You can help expand scanning support by
      sending the code to us.
    </Text>

    <Text style={styles.cardText}>
      If possible, include the scanned code along with the
      Minifigure series and figure name. Submitted codes may
      be reviewed and added to the catalog to help support
      future scans.
    </Text>

    <Pressable
      onPress={handleReportCode}
      style={({ pressed }) => [
        styles.supportButton,
        pressed && styles.supportButtonPressed,
      ]}
    >
      <Ionicons
        name="mail-outline"
        size={20}
        color="#111827"
      />

      <Text style={styles.supportButtonText}>
        Send New Code
      </Text>
    </Pressable>
  </View>
</View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Support the App
          </Text>

          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="heart-outline"
                size={32}
                color="#FFFFFF"
              />
            </View>

            <Text style={styles.cardTitle}>
              Enjoying Scan Minifigs?
            </Text>

            <Text style={styles.cardText}>
              Scan Minifigs is made for collectors who want a
              simple way to identify and keep track of their
              Minifigures.
            </Text>

            <Text style={styles.cardText}>
              If you find the app useful, you can leave an optional
              tip to support continued development, maintenance,
              and the addition of support for more Minifigure
              series.
            </Text>

            <Pressable
              onPress={handleSupport}
              style={({ pressed }) => [
                styles.supportButton,
                pressed && styles.supportButtonPressed,
              ]}
            >
              <Ionicons
                name="cafe-outline"
                size={20}
                color="#111827"
              />

              <Text style={styles.supportButtonText}>
                Leave a Tip
              </Text>
            </Pressable>
          </View>
        </View>

        {/* App Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            App Information
          </Text>

          {/* Version */}
          <View style={styles.versionCard}>
            <Text style={styles.versionLabel}>
              Scan Minifigs
            </Text>

            <Text style={styles.versionNumber}>
              Version 1.0.0
            </Text>
          </View>

          {/* Privacy Policy */}
          <Pressable
            onPress={() =>
              router.push("/privacy-policy")
            }
            style={({ pressed }) => [
              styles.infoCard,
              styles.privacyPolicyCard,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color="#FFFFFF"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Privacy Policy
              </Text>

              <Text style={styles.infoText}>
                Learn how Scan Minifigs handles your information.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#777777"
            />
          </Pressable>

          {/* Terms of Use */}
          <Pressable
            onPress={() =>
              router.push("/terms-of-use")
            }
            style={({ pressed }) => [
              styles.infoCard,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Ionicons
              name="document-text-outline"
              size={24}
              color="#FFFFFF"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Terms of Use
              </Text>

              <Text style={styles.infoText}>
                Review the terms governing your use of
                Scan Minifigs.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#777777"
            />
          </Pressable>
        </View>

        {/* Disclaimer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            An independent collector tool for LEGO Minifigure
            enthusiasts.
          </Text>

          <Text style={styles.copyright}>
            LEGO®, the LEGO® logo, and LEGO® Minifigures are
            trademarks of the LEGO Group. Scan Minifigs is an
            independent app and is not affiliated with, sponsored,
            authorized, or endorsed by the LEGO Group.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
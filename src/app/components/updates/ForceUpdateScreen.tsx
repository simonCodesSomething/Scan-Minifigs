
import { Ionicons } from "@expo/vector-icons";
import { Linking, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/styles/screens/forceUpdate.styles";

interface ForceUpdateScreenProps {
  currentVersion: string;
  latestVersion: string;
  storeUrl: string;
}

export default function ForceUpdateScreen({
  currentVersion,
  latestVersion,
  storeUrl,
}: ForceUpdateScreenProps) {
  const handleUpdate = async () => {
    try {
      await Linking.openURL(storeUrl);
    } catch (error) {
      console.warn("[ForceUpdate] Unable to open store:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="cloud-download-outline"
            size={52}
            color="#FBBF24"
          />
        </View>

        <Text style={styles.title}>
          Update Required
        </Text>

        <Text style={styles.description}>
          A new version of Scan Minifigs is available.
          Please update to continue using the app.
        </Text>

        <View style={styles.versionContainer}>
          <View style={styles.versionRow}>
            <Text style={styles.versionLabel}>
              Installed Version
            </Text>
            <Text style={styles.versionValue}>
              {currentVersion}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.versionRow}>
            <Text style={styles.versionLabel}>
              Latest Version
            </Text>
            <Text style={styles.latestVersion}>
              {latestVersion}
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.updateButton}
          onPress={handleUpdate}
          accessibilityRole="button"
          accessibilityLabel="Update Scan Minifigs"
        >
          <Ionicons
            name="download-outline"
            size={20}
            color="#0F172A"
          />

          <Text style={styles.updateButtonText}>
            Update Now
          </Text>
        </Pressable>

        <Text style={styles.footer}>
          Updating ensures you have the latest features,
          improvements, and fixes.
        </Text>
      </View>
    </SafeAreaView>
  );
}

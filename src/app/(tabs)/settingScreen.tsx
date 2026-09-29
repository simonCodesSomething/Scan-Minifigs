
import { styles } from "@/styles/screens/settings.styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const handleAbout = () => {
    router.push("/about");
  };

  const handlePrivacy = () => {
    router.push("/privacy-policy");
  };

  const handleTerms = () => {
    router.push("/terms-of-use");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>App Info</Text>

        <Text style={styles.subtitle}>
          Manage your Minifigure Scanner app.
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=com.simonreact.scanminifigs"
              )
            }
            style={({ pressed }) => [
              styles.supportCard,
              styles.ratingCard,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.supportIcon}>
              <Ionicons
                name="star-outline"
                size={25}
                color="#FBBF24"
              />
            </View>

            <View style={styles.supportInfo}>
              <Text style={styles.supportTitle}>
                Rate Scan-Minifigs
              </Text>

              <Text style={styles.supportSubtitle}>
                Share your feedback on Google Play.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#64748B"
            />
          </Pressable>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <View style={styles.menuCard}>
            <Pressable
              onPress={handleAbout}
              style={({ pressed }) => [
                styles.menuItem,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.menuIcon}>
                <Ionicons
                  name="information-circle-outline"
                  size={23}
                  color="#FBBF24"
                />
              </View>

              <Text style={styles.menuText}>About</Text>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#64748B"
              />
            </Pressable>

            <View style={styles.itemDivider} />

            <Pressable
              onPress={handlePrivacy}
              style={({ pressed }) => [
                styles.menuItem,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.menuIcon}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={23}
                  color="#FBBF24"
                />
              </View>

              <Text style={styles.menuText}>
                Privacy Policy
              </Text>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#64748B"
              />
            </Pressable>

            <View style={styles.itemDivider} />

            <Pressable
              onPress={handleTerms}
              style={({ pressed }) => [
                styles.menuItem,
                pressed && styles.pressed,
              ]}
            >
              <View style={styles.menuIcon}>
                <Ionicons
                  name="document-text-outline"
                  size={23}
                  color="#FBBF24"
                />
              </View>

              <Text style={styles.menuText}>Terms</Text>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#64748B"
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

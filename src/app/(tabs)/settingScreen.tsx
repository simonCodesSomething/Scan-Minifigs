import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//import { styles } from "@/styles/settingScreen.styles";
import { styles } from "@/styles/screens/settings.styles";

export default function SettingsScreen() {
  const handleSupport = () => {
    // TODO: Add Buy Me a Coffee URL later
    console.log("Support Minifigure Scanner");
  };

  const handleAbout = () => {
    router.push("/about");
    console.log("About");
  };

  const handlePrivacy = () => {
    // TODO: Add Privacy Policy
    router.push("/privacy-policy");
    console.log("Privacy Policy");
  };

  const handleTerms = () => {
    router.push("/terms-of-use");
    console.log("Terms");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>App Info</Text>
          <Text style={styles.subtitle}>
            Manage your Minifigure Scanner app.
          </Text>
        </View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <Pressable
            onPress={() => Linking.openURL("https://buymeacoffee.com/scan.minifigs")}
            style={({ pressed }) => [
              styles.supportCard,
              pressed && styles.pressed,
              
            ]}
             
          >
            <View style={styles.supportIcon}>
              <Text style={styles.coffeeEmoji}>☕</Text>
            </View>

            <View style={styles.supportInfo}>
              <Text style={styles.supportTitle}>
                Support Scan-Minifigs
              </Text>

              <Text style={styles.supportSubtitle}>
                Help keep the app updated with new LEGO series.
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

              <Text style={styles.menuText}>Privacy Policy</Text>

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
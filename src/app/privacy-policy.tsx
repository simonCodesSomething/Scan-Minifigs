import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//import { styles } from "@/styles/about.styles";
import { styles } from "@/styles/screens/privacyPolicy.styles";

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>
              Privacy Policy
            </Text>

            <Text style={styles.subtitle}>
              How Scan Minifigs collects, uses, and protects
              information.
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

        {/* Introduction */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="shield-checkmark-outline"
              size={32}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.cardTitle}>
            Your Privacy
          </Text>

          <Text style={styles.cardText}>
            Scan Minifigs is designed to help you identify and
            manage your LEGO Minifigure collection.
          </Text>

          <Text style={styles.cardText}>
            We aim to collect and process only the information
            necessary to operate and improve the app.
          </Text>

          <Text style={styles.cardText}>
            Last updated: August 2026
          </Text>
        </View>

        {/* Information We Collect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Information We Collect
          </Text>

          <View style={styles.infoCard}>
            <Ionicons
              name="camera-outline"
              size={24}
              color="#2563EB"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Camera Access
              </Text>

              <Text style={styles.infoText}>
                Scan Minifigs requests access to your device camera
                so the app can scan Data Matrix codes on supported
                Minifigure packaging.
              </Text>

              <Text style={styles.infoText}>
                Camera access is used for scanning and is not used
                to identify you or collect photographs or videos
                for storage by Scan Minifigs.
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
              <Text style={styles.infoTitle}>
                Collection Information
              </Text>

              <Text style={styles.infoText}>
                The app stores information about Minifigures you
                have added to your collection, including quantities
                and scan history.
              </Text>

              <Text style={styles.infoText}>
                This information is stored locally on your device
                and is not transmitted to Scan Minifigs' servers
                as part of the normal collection functionality.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="scan-outline"
              size={24}
              color="#FBBF24"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Scanned Codes
              </Text>

              <Text style={styles.infoText}>
                When you scan a Data Matrix code, the code is used
                to identify the corresponding Minifigure in the
                app's catalog.
              </Text>

              <Text style={styles.infoText}>
                The scanned code may be retained locally as part
                of your scan history.
              </Text>
            </View>
          </View>
        </View>

        {/* Supabase */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Catalog Data and Supabase
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs uses Supabase to host catalog
              information used by the app.
            </Text>

            <Text style={styles.cardText}>
              This catalog may include Minifigure IDs, series IDs,
              names, images, set information, and Data Matrix code
              mappings.
            </Text>

            <Text style={styles.cardText}>
              The app accesses this information through the
              Supabase REST API.
            </Text>

            <Text style={styles.cardText}>
              The catalog is application data and is not intended
              to contain your personal collection information.
            </Text>
          </View>
        </View>

        {/* Information We Do Not Collect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Information We Do Not Collect
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs does not require you to create an
              account to use the app.
            </Text>

            <Text style={styles.cardText}>
              We do not intentionally collect your name, email
              address, phone number, home address, or payment card
              information through the app.
            </Text>

            <Text style={styles.cardText}>
              We do not intentionally collect photographs or videos
              from your camera.
            </Text>
          </View>
        </View>

        {/* How Information Is Used */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            How Information Is Used
          </Text>

          <View style={styles.infoCard}>
            <Ionicons
              name="construct-outline"
              size={24}
              color="#A855F7"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                App Functionality
              </Text>

              <Text style={styles.infoText}>
                Information is used to provide scanning,
                identification, collection tracking, and series
                browsing functionality.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="server-outline"
              size={24}
              color="#2563EB"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Catalog Updates
              </Text>

              <Text style={styles.infoText}>
                The app may retrieve updated catalog information
                from our Supabase backend so that supported
                Minifigures and Data Matrix mappings can be updated
                without requiring a new app release.
              </Text>
            </View>
          </View>
        </View>

        {/* Local Storage */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Local Storage
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs stores certain app information locally
              on your device, including collection quantities and
              scan history.
            </Text>

            <Text style={styles.cardText}>
              This local information is used to preserve your
              collection between app sessions.
            </Text>

            <Text style={styles.cardText}>
              Deleting the app or clearing its stored data may
              permanently remove locally stored collection
              information.
            </Text>
          </View>
        </View>

        {/* Third-Party Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Third-Party Services
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs may use third-party services to operate
              parts of the app.
            </Text>

            <Text style={styles.cardText}>
              These services may include Supabase for application
              data hosting and Buy Me a Coffee for optional
              financial support.
            </Text>

            <Text style={styles.cardText}>
              Third-party services operate under their own privacy
              policies and terms.
            </Text>
          </View>
        </View>

        {/* Buy Me a Coffee */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Optional Support
          </Text>

  <View style={styles.card}>
  <Text style={styles.cardText}>
    Scan Minifigs may provide a link to Buy Me a Coffee so
    users can voluntarily support the development and
    maintenance of the app.
  </Text>

  <Text style={styles.cardText}>
    If you choose to make a contribution, you will be
    redirected to Buy Me a Coffee. Any payment, account,
    billing, or other information you provide through
    Buy Me a Coffee is handled by Buy Me a Coffee and its
    payment providers, and is not collected or stored by
    Scan Minifigs.
  </Text>

  <Text style={styles.cardText}>
    Buy Me a Coffee is a third-party service. Your use of
    that service, including any payments or account
    information you provide, is subject to Buy Me a Coffee's
    own terms, privacy policy, and other applicable policies.
  </Text>

  <Text style={styles.cardText}>
    Contributions are voluntary and are not required to use
    Scan Minifigs or any of its features. Making a
    contribution does not purchase additional features,
    content, or services within the app unless explicitly
    stated otherwise.
  </Text>
</View>
        </View>

        {/* Data Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Data Security
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              We take reasonable steps to protect information used
              by Scan Minifigs.
            </Text>

            <Text style={styles.cardText}>
              However, no electronic storage system or method of
              transmission over the internet can be guaranteed to
              be completely secure.
            </Text>
          </View>
        </View>

        {/* Children's Privacy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Children's Privacy
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs is not intended to collect personal
              information from children.
            </Text>

            <Text style={styles.cardText}>
              The app does not require an account or submission of
              personal information to use its core scanning and
              collection features.
            </Text>
          </View>
        </View>

        {/* Your Choices */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Your Choices
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              You can choose whether to grant camera permission.
              Without camera permission, the scanning functionality
              will not be available.
            </Text>

            <Text style={styles.cardText}>
              You can also choose whether to use optional support
              services such as Buy Me a Coffee.
            </Text>
          </View>
        </View>

        {/* Policy Changes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Changes to This Policy
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              This Privacy Policy may be updated from time to time
              as the app, its services, or applicable requirements
              change.
            </Text>

            <Text style={styles.cardText}>
              The updated policy will be made available within the
              app.
            </Text>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Contact
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              If you have questions about this Privacy Policy or
              how Scan Minifigs handles information, please
              contact the developer through the contact information
              provided with the app.
            </Text>
          </View>
        </View>

        {/* Footer */}
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
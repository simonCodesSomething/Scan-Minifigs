
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  AdsConsent,
  AdsConsentPrivacyOptionsRequirementStatus,
} from "react-native-google-mobile-ads";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/styles/screens/privacyPolicy.styles";

export default function PrivacyPolicyScreen() {
  const [privacyOptionsRequired, setPrivacyOptionsRequired] =
    useState(false);

  useEffect(() => {
    let isMounted = true;

    async function checkPrivacyOptionsRequirement() {
      try {
        // Refresh UMP consent information.
        await AdsConsent.requestInfoUpdate();

        const consentInfo = await AdsConsent.getConsentInfo();

        console.log("UMP consent status:", {
  privacyOptionsRequirementStatus:
    consentInfo.privacyOptionsRequirementStatus,
  canRequestAds: consentInfo.canRequestAds,
});

        if (isMounted) {
          setPrivacyOptionsRequired(
            consentInfo.privacyOptionsRequirementStatus ===
              AdsConsentPrivacyOptionsRequirementStatus.REQUIRED
          );
        }
      } catch (error) {
        console.warn(
          "Unable to check privacy options requirement:",
          error
        );
      }
    }

    checkPrivacyOptionsRequirement();

    return () => {
      isMounted = false;
    };
  }, []);

  async function handleManagePrivacyChoices() {
    try {
      const consentInfo = await AdsConsent.getConsentInfo();

      if (
        consentInfo.privacyOptionsRequirementStatus !==
        AdsConsentPrivacyOptionsRequirementStatus.REQUIRED
      ) {
        setPrivacyOptionsRequired(false);
        Alert.alert(
          "Privacy options unavailable",
          "There are currently no additional privacy options to manage."
        );
        return;
      }

      await AdsConsent.showPrivacyOptionsForm();

      // Refresh the requirement status after the form closes.
      const updatedConsentInfo = await AdsConsent.getConsentInfo();

      setPrivacyOptionsRequired(
        updatedConsentInfo.privacyOptionsRequirementStatus ===
          AdsConsentPrivacyOptionsRequirementStatus.REQUIRED
      );
    } catch (error) {
      console.warn("Unable to display privacy options:", error);

      Alert.alert(
        "Unable to open privacy options",
        "Please try again later."
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.title}>Privacy Policy</Text>

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
            <Ionicons name="close" size={24} color="#FFFFFF" />
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

          <Text style={styles.cardTitle}>Your Privacy</Text>

          <Text style={styles.cardText}>
            Scan Minifigs is designed to help you identify and
            manage your LEGO Minifigure collection.
          </Text>

          <Text style={styles.cardText}>
            We aim to collect and process only the information
            necessary to operate and improve the app.
          </Text>

          <Text style={styles.cardText}>
            Last updated: November 4, 2026
          </Text>
        </View>

        {/* Information We Collect */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Information We Collect
          </Text>

          <View style={styles.infoCard}>
            <Ionicons name="camera-outline" size={24} color="#2563EB" />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Camera Access</Text>

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
            <Ionicons name="albums-outline" size={24} color="#22C55E" />

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
            <Ionicons name="scan-outline" size={24} color="#FBBF24" />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Scanned Codes</Text>

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
              address, phone number, or home address through the
              app.
            </Text>

            <Text style={styles.cardText}>
              We do not intentionally collect photographs or videos
              from your camera.
            </Text>

            <Text style={styles.cardText}>
              Scan Minifigs does not directly collect or store your
              payment card information. Payment information for
              support purchases is handled by the applicable app
              store and its payment providers.
            </Text>
          </View>
        </View>

        {/* How Information Is Used */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            How Information Is Used
          </Text>

          <View style={styles.infoCard}>
            <Ionicons name="construct-outline" size={24} color="#A855F7" />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>App Functionality</Text>

              <Text style={styles.infoText}>
                Information is used to provide scanning,
                identification, collection tracking, and series
                browsing functionality.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="server-outline" size={24} color="#2563EB" />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Catalog Updates</Text>

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
          <Text style={styles.sectionTitle}>Local Storage</Text>

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
              data hosting, Google Mobile Ads for advertising, and
              Google Play or Apple services for app distribution
              and processing optional in-app support purchases.
            </Text>

            <Text style={styles.cardText}>
              App stores may process transaction and billing
              information when you make an optional support
              purchase. Scan Minifigs does not receive or store
              your payment card information.
            </Text>

            <Text style={styles.cardText}>
              Third-party services operate under their own privacy
              policies and terms.
            </Text>
          </View>
        </View>

        {/* Advertising */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Advertising and Google Mobile Ads
          </Text>

          <View style={styles.infoCard}>
            <Ionicons name="megaphone-outline" size={24} color="#FBBF24" />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Advertising Services
              </Text>

              <Text style={styles.infoText}>
                Scan Minifigs may display advertisements through
                Google AdMob in supported versions of the app on
                Android and, when available, iOS.
              </Text>

              <Text style={styles.infoText}>
                Google Mobile Ads SDK may automatically collect
                and process certain information when advertising
                features are enabled and advertisements are
                requested or displayed.
              </Text>

              <Text style={styles.infoText}>
                This information may include:
              </Text>

              <Text style={styles.infoText}>
                {"\u2022"} IP address, which may be used to
                estimate a device's general location and support
                advertising delivery.
              </Text>

              <Text style={styles.infoText}>
                {"\u2022"} Device identifiers, such as advertising
                IDs and other device identifiers, subject to
                device settings and applicable consent
                requirements.
              </Text>

              <Text style={styles.infoText}>
                {"\u2022"} App interactions, such as app launches,
                advertisement impressions, taps, and interactions
                with advertisements.
              </Text>

              <Text style={styles.infoText}>
                {"\u2022"} Diagnostic and performance information,
                such as crash information, app launch times, and
                SDK performance information.
              </Text>

              <Text style={styles.infoText}>
                {"\u2022"} Advertising information, such as
                advertisements delivered and interactions with
                those advertisements.
              </Text>

              <Text style={styles.infoText}>
                Google and its advertising partners may use this
                information to deliver advertisements, measure
                advertising performance, prevent fraud and abuse,
                and improve advertising services.
              </Text>

              <Text style={styles.infoText}>
                Depending on applicable consent requirements,
                user choices, and device settings, information
                may also be used to provide personalized
                advertising.
              </Text>

              <Text style={styles.infoText}>
                Where required, consent choices will be requested
                before applicable advertising technologies are
                used.
              </Text>

              <Text style={styles.infoText}>
                Users may manage advertising preferences through
                available consent options, their device settings,
                and Google's advertising controls.
              </Text>

              <Text style={styles.infoText}>
                Google Mobile Ads is a third-party service.
                Information processed through its SDK is subject
                to Google's privacy policies and applicable terms.
              </Text>

              <Text style={styles.infoText}>For more information:</Text>

              <Pressable
                onPress={() =>
                  Linking.openURL("https://policies.google.com/privacy")
                }
              >
                <Text style={styles.infoText}>
                  Google Privacy Policy
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  Linking.openURL(
                    "https://policies.google.com/technologies/partner-sites"
                  )
                }
              >
                <Text style={styles.infoText}>
                  How Google uses information from sites or apps
                  that use its services
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  Linking.openURL("https://adssettings.google.com/")
                }
              >
                <Text style={styles.infoText}>Google Ads Settings</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Optional Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Optional Support</Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs may offer an optional in-app support
              purchase through Google Play Billing or, where
              available, Apple In-App Purchase.
            </Text>

            <Text style={styles.cardText}>
              If you choose to make a support purchase, the
              transaction is processed through the applicable
              app store. Scan Minifigs does not collect or store
              your payment card information.
            </Text>

            <Text style={styles.cardText}>
              Information associated with the transaction may be
              processed by the app store in accordance with its
              applicable privacy policy, terms, and payment
              processing practices.
            </Text>

            <Text style={styles.cardText}>
              Support purchases are voluntary and are not required
              to use Scan Minifigs or its core scanning, collection,
              or browsing features.
            </Text>
          </View>
        </View>

        {/* Data Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Security</Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              We take reasonable steps to protect information used
              by Scan Minifigs.
            </Text>

            <Text style={styles.cardText}>
              However, no electronic storage system or method of
              transmission over the internet can be guaranteed
              to be completely secure.
            </Text>
          </View>
        </View>

        {/* Children's Privacy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Children's Privacy</Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs is not intended to collect personal
              information from children.
            </Text>

            <Text style={styles.cardText}>
              The app does not require an account or submission
              of personal information to use its core scanning
              and collection features.
            </Text>
          </View>
        </View>

        {/* Your Choices */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Choices</Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              You can choose whether to grant camera permission.
              Without camera permission, the scanning functionality
              will not be available.
            </Text>

            <Text style={styles.cardText}>
              You can also choose whether to make an optional
              support purchase through the applicable app store.
              Support is not required to use the app's core
              features.
            </Text>

            <Text style={styles.cardText}>
              Where advertising consent options are provided,
              you can review and make choices about the processing
              of information for advertising. You can also manage
              available advertising preferences through your
              device settings and Google's advertising controls.
            </Text>
          </View>

          {/* UMP Privacy Options Entry Point */}
          {privacyOptionsRequired && (
            <Pressable
              onPress={handleManagePrivacyChoices}
              accessibilityRole="button"
              accessibilityLabel="Manage Privacy Choices"
              style={({ pressed }) => [
                styles.infoCard,
                pressed && { opacity: 0.75 },
              ]}
            >
              <Ionicons
                name="shield-checkmark-outline"
                size={24}
                color="#FBBF24"
              />

              <View style={styles.infoContent}>
                <Text style={styles.infoTitle}>
                  Manage Privacy Choices
                </Text>

                <Text style={styles.infoText}>
                  Review or change your advertising consent and
                  privacy preferences.
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#FBBF24"
              />
            </Pressable>
          )}
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
          <Text style={styles.sectionTitle}>Contact</Text>

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

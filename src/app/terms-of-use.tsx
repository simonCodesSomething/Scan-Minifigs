import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/styles/about.styles";

export default function TermsOfUseScreen() {
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
              Terms of Use
            </Text>

            <Text style={styles.subtitle}>
              The terms and conditions for using Scan Minifigs.
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
              name="document-text-outline"
              size={32}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.cardTitle}>
            Terms of Use
          </Text>

          <Text style={styles.cardText}>
            These Terms of Use govern your use of Scan Minifigs.
            By downloading, accessing, or using the app, you agree
            to these terms.
          </Text>

          <Text style={styles.cardText}>
            If you do not agree with these terms, please do not
            use the app.
          </Text>

          <Text style={styles.cardText}>
            Last updated: August 2026
          </Text>
        </View>

        {/* Use of App */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Use of the App
          </Text>

          <View style={styles.infoCard}>
            <Ionicons
              name="phone-portrait-outline"
              size={24}
              color="#2563EB"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Personal Use
              </Text>

              <Text style={styles.infoText}>
                Scan Minifigs is provided as a personal collection
                and identification tool. You may use the app for
                personal, non-commercial purposes.
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              color="#22C55E"
            />

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Appropriate Use
              </Text>

              <Text style={styles.infoText}>
                You agree not to misuse the app, interfere with its
                operation, attempt unauthorized access to its
                services, or use the app in a way that could harm
                the app or its users.
              </Text>
            </View>
          </View>
        </View>

        {/* Scanner */}

{/* Scanner */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>
    Scanner
  </Text>

  <View style={styles.infoCard}>
    <Ionicons
      name="scan-outline"
      size={24}
      color="#FBBF24"
    />

    <View style={styles.infoContent}>
      <Text style={styles.infoTitle}>
        Data Matrix Scanning
      </Text>

      <Text style={styles.infoText}>
        The scanner uses your device camera to read supported
        Data Matrix codes found on compatible Minifigure
        packaging. Scanning and identification are available
        only for supported Minifigures and production runs.
      </Text>
    </View>
  </View>

  <View style={styles.infoCard}>
    <Ionicons
      name="information-circle-outline"
      size={24}
      color="#A855F7"
    />

    <View style={styles.infoContent}>
      <Text style={styles.infoTitle}>
        Scanning Availability
      </Text>

      <Text style={styles.infoText}>
        Series 25 Minifigures are supported for scanning from
        mid-production onward, where compatible Data Matrix
        codes are present. Minifigures from supported series
        produced after Series 25 may also be scanned when
        compatible codes are available.
      </Text>
    </View>
  </View>

  <View style={styles.infoCard}>
    <Ionicons
      name="list-outline"
      size={24}
      color="#22C55E"
    />

    <View style={styles.infoContent}>
      <Text style={styles.infoTitle}>
        Collection Lists
      </Text>

      <Text style={styles.infoText}>
        Earlier Minifigures and production runs that do not have
        supported Data Matrix codes may still be included in the
        app as collection lists. These Minifigures cannot be
        identified through the scanner.
      </Text>
    </View>
  </View>

  <View style={styles.infoCard}>
    <Ionicons
      name="warning-outline"
      size={24}
      color="#F97316"
    />

    <View style={styles.infoContent}>
      <Text style={styles.infoTitle}>
        No Guarantee of Results
      </Text>

      <Text style={styles.infoText}>
        Scan results may be unavailable, incorrect, or
        unsupported. Scanner functionality and supported
        Minifigures may change as new series, production runs,
        and Data Matrix codes are added.
      </Text>
    </View>
  </View>
</View>

{/* Reporting New Codes */} 
<View style={styles.section}> 
  <Text style={styles.sectionTitle}> Reporting New Codes </Text> 
  <View style={styles.card}> 
    <Text style={styles.cardText}> Users may have the option to report previously unrecognized Data Matrix codes to help improve and expand Scan Minifigs' scanning support. </Text> 
    <Text style={styles.cardText}> Reported codes may be reviewed and added to the app's catalog when they can be verified and associated with a supported Minifigure. </Text>
     <Text style={styles.cardText}> Submitting a code does not guarantee that it will be added to the catalog or that a particular Minifigure will become supported for scanning. </Text>
      <Text style={styles.cardText}> Users should not submit personal, confidential, or otherwise sensitive information when reporting a code. </Text>
       </View>
        </View>


        {/* Catalog */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Catalog Information
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs uses a remotely hosted catalog to
              provide information about supported Minifigures.
            </Text>

            <Text style={styles.cardText}>
              Catalog information may include Minifigure IDs,
              series IDs, names, images, set information, and
              Data Matrix code mappings.
            </Text>

            <Text style={styles.cardText}>
              The catalog may be updated without requiring a new
              version of the app.
            </Text>

            <Text style={styles.cardText}>
              We do not guarantee that catalog information is
              complete, accurate, or current at all times.
            </Text>
          </View>
        </View>

        {/* Collection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Your Collection
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Collection information, including figures you have
              added, quantities, and scan history, is stored
              locally on your device.
            </Text>

            <Text style={styles.cardText}>
              Scan Minifigs does not currently provide cloud
              synchronization or account-based collection backup.
            </Text>

            <Text style={styles.cardText}>
              You are responsible for maintaining your own backup
              of collection information that you wish to preserve.
            </Text>

            <Text style={styles.cardText}>
              Uninstalling the app, clearing app data, or losing
              access to your device may result in loss of locally
              stored collection information.
            </Text>
          </View>
        </View>

        {/* Third Party Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Third-Party Services
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs uses third-party services to support
              certain app functionality.
            </Text>

            <Text style={styles.cardText}>
              These services currently include Supabase for hosting
              application catalog data and Buy Me a Coffee for
              optional financial support.
            </Text>

            <Text style={styles.cardText}>
              Your use of third-party services may be subject to
              their respective terms and policies.
            </Text>
          </View>
        </View>

        {/* Supabase */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Supabase
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Supabase provides database and related infrastructure
              used to host Scan Minifigs catalog information.
            </Text>

            <Text style={styles.cardText}>
              The app accesses this information through the
              Supabase REST API.
            </Text>

            <Text style={styles.cardText}>
              Supabase is a third-party service and its services
              are subject to Supabase's own terms and policies.
            </Text>
          </View>
        </View>

        {/* Optional Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Optional Support
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs may provide a link to Buy Me a Coffee
              so users can voluntarily support development of the
              app.
            </Text>

            <Text style={styles.cardText}>
              Support is completely optional and is not required
              to use the core functionality of Scan Minifigs.
            </Text>

            <Text style={styles.cardText}>
              Any payment or financial transaction made through
              Buy Me a Coffee is subject to Buy Me a Coffee's
              terms and the terms of its payment providers.
            </Text>
          </View>
        </View>

        {/* Intellectual Property */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Intellectual Property
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              Scan Minifigs and its original software, interface,
              design, and original content are protected by
              applicable intellectual property laws.
            </Text>

            <Text style={styles.cardText}>
              You may not copy, reproduce, modify, distribute,
              reverse engineer, or commercially exploit the app
              or its original content without permission, except
              where permitted by applicable law.
            </Text>
          </View>
        </View>

        {/* LEGO Disclaimer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            LEGO Disclaimer
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              LEGO®, the LEGO® logo, and LEGO® Minifigures are
              trademarks of the LEGO Group.
            </Text>

            <Text style={styles.cardText}>
              Scan Minifigs is an independent application and is
              not affiliated with, sponsored, authorized, or
              endorsed by the LEGO Group.
            </Text>

            <Text style={styles.cardText}>
              References to LEGO products and Minifigures are
              provided solely for identification, informational,
              and collection purposes.
            </Text>
          </View>
        </View>

        {/* Availability */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Availability and Changes
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              We may modify, update, suspend, or discontinue
              Scan Minifigs or any part of its functionality at
              any time.
            </Text>

            <Text style={styles.cardText}>
              We do not guarantee that the app, catalog, scanner,
              or any related service will always be available,
              uninterrupted, or error-free.
            </Text>
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Disclaimer of Warranties
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              To the maximum extent permitted by applicable law,
              Scan Minifigs is provided "as is" and "as available."
            </Text>

            <Text style={styles.cardText}>
              We make no warranties regarding the accuracy,
              reliability, availability, completeness, or
              suitability of the app or its content.
            </Text>
          </View>
        </View>

        {/* Liability */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Limitation of Liability
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              To the maximum extent permitted by applicable law,
              Scan Minifigs and its developer shall not be liable
              for indirect, incidental, special, consequential,
              or other damages arising from your use of, or
              inability to use, the app.
            </Text>

            <Text style={styles.cardText}>
              This includes, without limitation, loss of locally
              stored collection information resulting from device
              failure, app deletion, data loss, or other causes.
            </Text>
          </View>
        </View>

        {/* Changes to Terms */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Changes to These Terms
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardText}>
              These Terms of Use may be updated from time to time
              as the app or its services change.
            </Text>

            <Text style={styles.cardText}>
              Updated terms will be made available within the app.
            </Text>

            <Text style={styles.cardText}>
              Your continued use of Scan Minifigs after updated
              terms are made available constitutes acceptance of
              the revised terms to the extent permitted by
              applicable law.
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
              If you have questions about these Terms of Use,
              please contact the developer through the contact
              information provided with the app.
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
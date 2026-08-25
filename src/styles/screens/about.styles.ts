import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { theme } from "@/styles/theme";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  // ---------- Screen ----------

  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },

  content: {
    padding: spacing.xl,
    paddingBottom: spacing.huge,
  },

  // ---------- Header ----------

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: spacing.sm,
    marginBottom: spacing.xxl + 4,
  },

  headerText: {
    flex: 1,
    paddingRight: spacing.lg,
  },

  title: {
    ...typography.display,
    fontWeight: "800",
    color: colors.textOnDark,
  },

  subtitle: {
    marginTop: spacing.xs + 2,
    fontSize: 17,
    color: colors.textSecondaryOnDark,
    lineHeight: 24,
  },

  // ---------- Main About Card ----------

  card: {
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.xl,
    padding: spacing.xxl - 2,
    marginBottom: spacing.xxl + 4,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.round,
    backgroundColor: colors.surfaceIcon,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg + 2,
  },

  cardTitle: {
    color: colors.textOnDark,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: spacing.sm + 2,
  },

  cardText: {
    color: colors.textLightOnDark,
    ...typography.body,
    textAlign: "center",
  },

  // ---------- Sections ----------

  section: {
    marginBottom: spacing.xxl,
  },

  sectionTitle: {
    ...typography.heading,
    color: colors.textOnDark,
    marginBottom: spacing.md + 2,
  },

  // ---------- Info Cards ----------

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.sm + 2,
  },

  infoContent: {
    flex: 1,
    marginLeft: spacing.md + 2,
  },

  infoTitle: {
    color: colors.textOnDark,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 3,
  },

  infoText: {
    color: colors.textSecondaryOnDark,
    fontSize: 14,
    lineHeight: 20,
  },

  // ---------- Version ----------

  versionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.lg,
    padding: spacing.lg + 2,
  },

  versionLabel: {
    color: colors.textLightOnDark,
    fontSize: 16,
  },

  versionNumber: {
    color: colors.textSecondaryOnDark,
    fontSize: 15,
    fontWeight: "600",
  },

  // ---------- Footer ----------

  footer: {
    alignItems: "center",
    marginTop: spacing.sm,
    paddingHorizontal: spacing.sm,
  },

  footerText: {
    color: colors.textSecondaryOnDark,
    fontSize: 14,
    textAlign: "center",
  },

  copyright: {
    color: colors.textTertiaryDark,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: spacing.sm + 4,
  },

  // ---------- Back / Close Buttons ----------

  backButton: {
    position: "absolute",
    top: spacing.lg,
    left: spacing.xl,
    zIndex: 10,

    width: 44,
    height: 44,
    borderRadius: theme.radius.round,

    backgroundColor: colors.surfaceCardDark,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },

  backButtonText: {
    color: colors.textOnDark,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: spacing.sm - 2,
  },

  closeButton: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.round,
    backgroundColor: colors.surfaceCardDark,
    justifyContent: "center",
    alignItems: "center",
  },

  // ---------- Support ----------

  supportButton: {
    marginTop: spacing.lg + 2,
    minHeight: 48,
    borderRadius: theme.radius.md,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
  },

  supportButtonText: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: "600",
  },

  // ---------- Privacy Policy ----------

  privacyPolicyCard: {
    marginTop: spacing.sm + 2,
  },

  // ---------- Interaction ----------

  pressed: {
    opacity: 0.6,
  },

  backButtonPressed: {
    opacity: 0.6,
  },

  closeButtonPressed: {
    opacity: 0.6,
  },

  supportButtonPressed: {
    opacity: 0.8,
  },
});

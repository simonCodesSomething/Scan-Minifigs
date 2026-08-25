import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { theme } from "@/styles/theme";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },

  content: {
    padding: spacing.xl,
    paddingBottom: spacing.huge,
  },

  // Header
  header: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
  },

  title: {
    ...typography.display,
    color: colors.textOnDark,
    fontWeight: "800",
  },

  subtitle: {
    marginTop: spacing.xs + 2,
    ...typography.body,
    color: colors.textSecondaryOnDark,
  },

  // Scan Card
  scanCard: {
    backgroundColor: colors.surfaceDark,
    borderRadius: theme.radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
    borderWidth: theme.borderWidth.thin,
    borderColor: colors.borderDark,
  },

  scanCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  scanHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  scanIconContainer: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.lg,
    backgroundColor: colors.surfaceDarker,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  scanIconBadge: {
    position: "absolute",
    right: -4,
    bottom: -4,
    width: 24,
    height: 24,
    borderRadius: theme.radius.round,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: theme.borderWidth.medium,
    borderColor: colors.surfaceDark,
  },

  scanTextContainer: {
    flex: 1,
    marginLeft: spacing.md + 2,
  },

  scanTitle: {
    ...typography.subheading,
    color: colors.textOnDark,
    marginBottom: spacing.xs,
  },

  scanSubtitle: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.textMutedOnDark,
    paddingRight: spacing.sm,
  },

  scanArrow: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.round,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  scanButtonText: {
    ...typography.bodyBold,
    color: colors.white,
    marginLeft: spacing.sm,
  },

  scanAction: {
    height: 46,
    marginTop: spacing.lg,
    borderRadius: theme.radius.lg - 3,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  scanActionText: {
    marginLeft: spacing.sm,
    ...typography.captionBold,
    color: colors.textOnPrimary,
  },

  // Sections
  section: {
    marginBottom: spacing.xxl,
  },

  sectionTitle: {
    ...typography.heading,
    color: colors.textOnDark,
    marginBottom: spacing.md + 2,
  },

  // Placeholder
  placeholderCard: {
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.xl,
    padding: spacing.xl,
  },

  placeholderText: {
    color: colors.textLightOnDark,
    ...typography.body,
    textAlign: "center",
  },

  // Collection Progress
  progressCard: {
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.xl,
    padding: spacing.xxl - 2,
    alignItems: "center",
  },

  progressNumber: {
    color: colors.primary,
    fontSize: 46,
    fontWeight: "800",
  },

  progressLabel: {
    color: colors.textLightOnDark,
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
    fontSize: 17,
  },

  progressBackground: {
    width: "100%",
    height: 10,
    backgroundColor: colors.surfaceIcon,
    borderRadius: theme.radius.round,
    overflow: "hidden",
  },

  progressFill: {
    width: "42%",
    height: "100%",
    backgroundColor: colors.success,
    borderRadius: theme.radius.round,
  },

  progressPercent: {
    color: colors.textSecondaryOnDark,
    marginTop: spacing.md,
    fontWeight: "600",
  },

  // Recent Discoveries
  recentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    padding: spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: spacing.sm + 2,
  },

  recentImage: {
    width: 54,
    height: 54,
    resizeMode: "contain",
    backgroundColor: colors.white,
    borderRadius: theme.radius.sm,
  },

  recentInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },

  recentName: {
    color: colors.textOnDark,
    ...typography.bodyBold,
  },

  recentSeries: {
    color: colors.textSecondaryOnDark,
    marginTop: 2,
  },

  recentQuantity: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
});

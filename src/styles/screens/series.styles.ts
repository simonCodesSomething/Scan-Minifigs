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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.textOnDark,
  },

  subtitle: {
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
    ...typography.caption,
    color: colors.textSecondaryOnDark,
  },

  // ---------- Year Headers ----------

  yearHeader: {
    color: colors.textSecondaryOnDark,
    fontSize: 17,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: spacing.sm,
    letterSpacing: 0.5,
  },

  // ---------- Series Cards ----------

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm + 2,
    marginBottom: spacing.sm,
  },

  seriesImage: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.sm + 2,
  },

  content: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: "center",
  },

  seriesName: {
    ...typography.subheading,
    color: colors.textOnDark,
  },

  figures: {
    fontSize: 13,
    color: colors.textLightOnDark,
    marginTop: 2,
  },

  figureInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // ---------- Progress ----------

  progressBackground: {
    marginTop: spacing.sm,
    height: 5,
    borderRadius: theme.radius.round,
    backgroundColor: colors.surfaceIcon,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: theme.radius.round,
    backgroundColor: colors.success,
  },

  progressText: {
    marginTop: spacing.xs,
    fontSize: 11,
    color: colors.textSecondaryOnDark,
    fontWeight: "600",
  },

  // ---------- Scan Badge ----------

  scanBadge: {
    width: 30,
    height: 30,
    borderRadius: theme.radius.round,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surfaceDarker,
  },

  // ---------- Year Dropdown ----------

  yearDropdown: {
    marginBottom: spacing.md,
    borderColor: colors.borderDark,
    backgroundColor: colors.surfaceDarker,
  },

  yearDropdownMenu: {
    backgroundColor: colors.surfaceDarker,
    borderColor: colors.borderDark,
  },

  yearDropdownText: {
    color: colors.white,
  },

  // ---------- Year Filter ----------

  yearFilter: {
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.xs + 2,
    gap: spacing.sm,
    alignItems: "center",
  },

  yearChip: {
    height: 36,
    paddingHorizontal: spacing.lg,
    borderRadius: theme.radius.round,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.surfaceDarker,
    borderWidth: theme.borderWidth.thin,
    borderColor: colors.borderDark,

    flexGrow: 0,
    flexShrink: 0,
  },

  yearChipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  yearChipText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    includeFontPadding: false,
  },

  yearChipTextSelected: {
    color: colors.textOnPrimary,
    fontWeight: "700",
  },

  yearChipPressed: {
    opacity: 0.8,
  },

  // ---------- List ----------

  seriesList: {
    paddingBottom: spacing.xl,
  },
});

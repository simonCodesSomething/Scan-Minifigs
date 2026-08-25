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
    marginTop: spacing.sm,
    marginBottom: spacing.xxl + 4,
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

  // ---------- Sections ----------

  section: {
    marginBottom: spacing.xxl + 2,
  },

  sectionTitle: {
    ...typography.heading,
    color: colors.textOnDark,
    marginBottom: spacing.md + 2,
  },

  // ---------- Support Card ----------

  supportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.xl,
    padding: spacing.lg + 2,
  },

  supportIcon: {
    width: 52,
    height: 52,
    borderRadius: theme.radius.round,
    backgroundColor: colors.surfaceIcon,
    justifyContent: "center",
    alignItems: "center",
  },

  coffeeEmoji: {
    fontSize: 24,
  },

  supportInfo: {
    flex: 1,
    marginLeft: spacing.md + 2,
    marginRight: spacing.md,
  },

  supportTitle: {
    ...typography.bodyBold,
    color: colors.textOnDark,
  },

  supportSubtitle: {
    color: colors.textSecondaryOnDark,
    ...typography.caption,
    marginTop: spacing.xs,
  },

  // ---------- Menu ----------

  menuCard: {
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.xl,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 62,
    paddingHorizontal: spacing.lg + 2,
  },

  menuIcon: {
    width: 38,
    alignItems: "flex-start",
  },

  menuText: {
    flex: 1,
    color: colors.textOnDark,
    ...typography.bodyMedium,
  },

  itemDivider: {
    height: 1,
    backgroundColor: colors.surfaceIcon,
    marginLeft: 56,
  },

  // ---------- Interaction ----------

  pressed: {
    opacity: 0.65,
  },
});

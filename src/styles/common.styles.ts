import { StyleSheet } from "react-native";

import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const commonStyles = StyleSheet.create({
  // Layout
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },

  content: {
    padding: spacing.lg,
  },

  centered: {
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardSmall: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  // Text
  title: {
    ...typography.title,
    color: colors.text,
  },

  heading: {
    ...typography.heading,
    color: colors.text,
  },

  body: {
    ...typography.body,
    color: colors.text,
  },

  secondaryText: {
    ...typography.body,
    color: colors.textSecondary,
  },

  caption: {
    ...typography.caption,
    color: colors.textSecondary,
  },

  // Buttons
  primaryButton: {
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButton: {
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    borderRadius: 12,
    backgroundColor: colors.surfaceSecondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },

  // Dividers
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },

  // Images
  imageContain: {
    resizeMode: "contain",
  },

  imageCover: {
    resizeMode: "cover",
  },

  // Spacing helpers
  marginTopSmall: {
    marginTop: spacing.sm,
  },

  marginTop: {
    marginTop: spacing.lg,
  },

  marginTopLarge: {
    marginTop: spacing.xxl,
  },

  marginBottomSmall: {
    marginBottom: spacing.sm,
  },

  marginBottom: {
    marginBottom: spacing.lg,
  },

  marginBottomLarge: {
    marginBottom: spacing.xxl,
  },
});

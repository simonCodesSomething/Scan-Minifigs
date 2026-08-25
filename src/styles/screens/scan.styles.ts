import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { theme } from "@/styles/theme";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  /* ---------- Permission ---------- */

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.xxxl,
    backgroundColor: colors.background,
  },

  permissionTitle: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.md,
    textAlign: "center",
  },

  permissionText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 28,
  },

  permissionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: spacing.md + 2,
    borderRadius: theme.radius.round,
  },

  permissionButtonText: {
    ...typography.bodyBold,
    color: colors.white,
  },

  /* ---------- Camera ---------- */

  camera: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ---------- Header ---------- */

  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: 60,
    paddingBottom: spacing.xl,
  },

  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    ...typography.title,
    color: colors.white,
  },

  subtitle: {
    ...typography.caption,
    color: colors.textMuted,
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: theme.radius.round,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: theme.radius.round,
    marginRight: spacing.sm,
  },

  statusText: {
    ...typography.smallMedium,
    color: colors.white,
    fontWeight: "600",
  },

  /* ---------- Scan Frame ---------- */

  scanFrame: {
    width: 260,
    height: 260,
  },

  cornerTopLeft: {
    position: "absolute",
    width: 45,
    height: 45,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderColor: colors.primary,
    borderTopLeftRadius: theme.radius.md,
  },

  cornerTopRight: {
    position: "absolute",
    right: 0,
    width: 45,
    height: 45,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: colors.primary,
    borderTopRightRadius: theme.radius.md,
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    width: 45,
    height: 45,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: colors.primary,
    borderBottomLeftRadius: theme.radius.md,
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 45,
    height: 45,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderColor: colors.primary,
    borderBottomRightRadius: theme.radius.md,
  },

  /* ---------- Floating Controls ---------- */

  controls: {
    position: "absolute",
    bottom: 36,
    left: spacing.xl,
    right: spacing.xl,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  controlButton: {
    width: 56,
    height: 56,
    borderRadius: theme.radius.round,
    backgroundColor: colors.cameraControlOverlay,
    justifyContent: "center",
    alignItems: "center",
  },

  scanButton: {
    width: 84,
    height: 84,
    borderRadius: theme.radius.round,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: colors.black,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 12,
  },

  /* ---------- Scan Result Card ---------- */

  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borderWidth.thin,
    borderColor: colors.surfaceIcon,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    marginTop: 60,
    minHeight: 96,
  },

  resultImage: {
    width: 72,
    height: 72,
    backgroundColor: colors.white,
    borderRadius: theme.radius.md,
  },

  resultInfo: {
    flex: 1,
    marginLeft: spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },

  resultTitle: {
    ...typography.subheading,
    color: colors.white,
    textAlign: "center",
  },

  resultSubtitle: {
    ...typography.caption,
    color: colors.textSecondaryOnDark,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 10,
  },

  resultCode: {
    marginTop: spacing.sm,
    ...typography.caption,
    color: colors.scanCode,
    fontFamily: "monospace",
  },

  /* ---------- Instructions ---------- */

  instructions: {
    position: "absolute",
    bottom: 255,
    left: spacing.xxxl,
    right: spacing.xxxl,
    textAlign: "center",
    color: colors.white,
    fontSize: 15,
    lineHeight: 22,
    backgroundColor: colors.cameraInstructionOverlay,
    paddingVertical: 10,
    paddingHorizontal: spacing.lg,
    borderRadius: theme.radius.md,
  },

  /* ---------- Collection ---------- */

  addButton: {
    marginTop: 0,
    backgroundColor: colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },

  addButtonText: {
    ...typography.bodyBold,
    color: colors.textOnPrimary,
  },

  collectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  collectionText: {
    ...typography.captionMedium,
    color: colors.white,
  },

  addCircleButton: {
    width: 36,
    height: 36,
    borderRadius: theme.radius.round,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  ownedText: {
    ...typography.captionMedium,
    color: colors.white,
  },

  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: theme.radius.round,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    width: 42,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginHorizontal: spacing.md,
  },
});

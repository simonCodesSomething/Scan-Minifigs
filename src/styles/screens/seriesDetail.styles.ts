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

  // ---------- Series Header ----------

  seriesImage: {
    width: 120,
    height: 110,
    alignSelf: "center",
    marginTop: spacing.sm + 2,
  },

  headerImageContainer: {
    height: 180,
    marginHorizontal: spacing.xl,
    borderRadius: theme.radius.lg,
    overflow: "hidden",
    marginBottom: 0,
  },

  headerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  headerOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.headerOverlay,
  },

  headerContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.huge,
  },

  backButton: {
    position: "absolute",
    top: 68,
    left: spacing.xl + 4,
    width: 44,
    height: 44,
    borderRadius: theme.radius.round,
    backgroundColor: colors.headerButtonOverlay,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 8,
  },

  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.textOnDark,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.xs,
  },

  // ---------- Progress ----------

  progressBackground: {
    height: 8,
    marginHorizontal: spacing.xl,
    marginTop: 0,
    backgroundColor: colors.surfaceIcon,
    borderRadius: theme.radius.sm,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: theme.radius.sm,
  },

  progressText: {
    marginHorizontal: spacing.xl,
    color: colors.textLightOnDark,
    textAlign: "center",
    marginVertical: spacing.sm + 2,
  },

  // ---------- Search ----------

  search: {
    backgroundColor: colors.surfaceCardDark,
    color: colors.white,
    borderRadius: theme.radius.md,
    paddingHorizontal: spacing.md + 2,
    paddingVertical: spacing.md,
    marginBottom: spacing.xl,
    fontSize: 15,
  },

  // ---------- Minifigure Cards ----------

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm + 2,
    marginBottom: spacing.sm,
    borderWidth: 2,
    width: "100%",
  },

  missing: {
    borderColor: colors.surfaceIcon,
  },

  owned: {
    borderColor: colors.info,
  },

  duplicate: {
    borderColor: colors.success,
  },

  image: {
    width: 56,
    height: 56,
    borderRadius: theme.radius.sm,
    backgroundColor: colors.white,
    resizeMode: "contain",
  },

  info: {
    flex: 1,
    marginLeft: spacing.sm + 2,
  },

  name: {
    color: colors.textOnDark,
    ...typography.bodyBold,
  },

  status: {
    color: colors.textSecondaryOnDark,
    marginTop: 2,
    fontSize: 12,
  },

  // ---------- Quantity Controls ----------

  counter: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    width: 30,
    height: 30,
    borderRadius: theme.radius.round,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  count: {
    width: 28,
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
  },

  // ---------- Stats ----------

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm,
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.surfaceCardDark,
    borderRadius: theme.radius.md,
    paddingVertical: spacing.lg + 2,
    alignItems: "center",
  },

  statValue: {
    color: colors.textOnDark,
    fontSize: 24,
    fontWeight: "800",
  },

  statLabel: {
    color: colors.textSecondaryOnDark,
    marginTop: spacing.xs + 2,
    fontSize: 12,
  },

  // ---------- Floating Action Button ----------

  fab: {
    position: "absolute",
    bottom: spacing.xl,
    right: spacing.xl,
    width: 64,
    height: 64,
    borderRadius: theme.radius.round,
    backgroundColor: colors.info,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,

    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  // ---------- Lists ----------

  list: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxxl,
  },

  // ---------- Loading ----------

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: colors.white,
    marginTop: spacing.sm,
    fontSize: 16,
  },

  // ---------- Collection Header ----------

  collectionHeader: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    padding: spacing.lg + 2,
    borderRadius: theme.radius.lg,
    backgroundColor: colors.surfaceCardDark,
  },

  collectionHeaderTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 46,
    marginBottom: spacing.lg,
  },

  collectionHeaderTitleContainer: {
    flex: 1,
    marginRight: spacing.md,
  },

  collectionHeaderTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textOnDark,
  },

  collectionHeaderSubtitle: {
    marginTop: 3,
    fontSize: 13,
    color: colors.textMuted,
  },

  collectionCount: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  collectionCountNumber: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.textOnDark,
  },

  collectionCountTotal: {
    marginLeft: 2,
    fontSize: 16,
    fontWeight: "600",
    color: colors.textMuted,
  },

  // ---------- Collection Progress ----------

  progressBarBackground: {
    width: "100%",
    height: 8,
    overflow: "hidden",
    borderRadius: theme.radius.sm,
    backgroundColor: colors.surfaceIcon,
  },

  progressBarFill: {
    height: "100%",
    borderRadius: theme.radius.sm,
    backgroundColor: colors.primary,
  },

  collectionStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },

  collectionStatsText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textMuted,
  },
});

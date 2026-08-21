import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  seriesImage: {
    width: 120,
    height: 110,
    alignSelf: "center",
    marginTop: 10,
  },

  progressBackground: {
    height: 8,
    marginHorizontal: 20,
    marginTop: 0,
    backgroundColor: "#334155",
    borderRadius: 6,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#FBBF24",
    borderRadius: 6,
  },

  progressText: {
    marginHorizontal: 20,
    color: "#CBD5E1",
    textAlign: "center",
    marginVertical: 10,
  },

  search: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderWidth: 2,
    width: "100%",
  },

  missing: {
    borderColor: "#334155",
  },

  owned: {
    borderColor: "#3B82F6",
  },

  duplicate: {
    borderColor: "#22C55E",
  },

  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#FFF",
    resizeMode: "contain",
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  status: {
    color: "#94A3B8",
    marginTop: 2,
    fontSize: 12,
  },

  counter: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  count: {
    width: 28,
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 4,
    marginBottom: 12,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },

  statLabel: {
    color: "#94A3B8",
    marginTop: 6,
    fontSize: 12,
  },

  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  headerImageContainer: {
    height: 180,
    marginHorizontal: 20,
    borderRadius: 16,
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
    backgroundColor: "rgba(15,23,42,0.45)",
  },

  headerContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  backButton: {
    position: "absolute",
    top: 68,
    left: 24,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(15,23,42,0.75)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 8, // Android
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#AAA",
    textAlign: "center",
    marginTop: 4,
  },
  list: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },

  collectionHeader: {
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#1E293B",
  },

  collectionHeaderTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 46,
    marginBottom: 16,
  },

  collectionHeaderTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  collectionHeaderSubtitle: {
    marginTop: 3,
    fontSize: 13,
    color: "#8E8E93",
  },

  collectionCount: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  collectionCountNumber: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  collectionCountTotal: {
    marginLeft: 2,
    fontSize: 16,
    fontWeight: "600",
    color: "#8E8E93",
  },

  progressBarBackground: {
    width: "100%",
    height: 8,
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#3A3A3C",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },

  collectionStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  collectionStatsText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8E8E93",
  },
  collectionHeaderTitleContainer: {
    flex: 1,
    marginRight: 12,
  },
});

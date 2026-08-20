import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    marginTop: 8,
    marginBottom: 28,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 17,
    color: "#94A3B8",
    lineHeight: 24,
  },

  scanCard: {
    backgroundColor: "#1F2937",
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,

    borderWidth: 1,
    borderColor: "#374151",
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
    borderRadius: 16,

    backgroundColor: "#111827",

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
    borderRadius: 12,

    backgroundColor: "#FBBF24",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#1F2937",
  },
  scanTextContainer: {
    flex: 1,
    marginLeft: 14,
  },

  scanIcon: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  scanTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  scanSubtitle: {
    fontSize: 14,
    lineHeight: 19,
    color: "#9CA3AF",
    paddingRight: 8,
  },
  scanArrow: {
    width: 40,
    height: 40,
    borderRadius: 20,

    backgroundColor: "#FBBF24",

    alignItems: "center",
    justifyContent: "center",
  },
  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
  },

  scanButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17,
    marginLeft: 8,
  },
  scanAction: {
    height: 46,
    marginTop: 16,

    borderRadius: 13,

    backgroundColor: "#FBBF24",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  scanActionText: {
    marginLeft: 8,

    fontSize: 15,
    fontWeight: "700",

    color: "#111827",
  },

  section: {
    marginBottom: 24,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
  },

  placeholderCard: {
    backgroundColor: "#1E293B",
    borderRadius: 20,
    padding: 20,
  },

  placeholderText: {
    color: "#CBD5E1",
    fontSize: 16,
    textAlign: "center",
  },

  progressCard: {
    backgroundColor: "#1E293B",
    borderRadius: 20,
    padding: 22,
    alignItems: "center",
  },

  progressNumber: {
    color: "#FBBF24",
    fontSize: 46,
    fontWeight: "800",
  },

  progressLabel: {
    color: "#CBD5E1",
    marginTop: 8,
    marginBottom: 20,
    fontSize: 17,
  },

  progressBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#334155",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    width: "42%",
    height: "100%",
    backgroundColor: "#22C55E",
    borderRadius: 10,
  },

  progressPercent: {
    color: "#94A3B8",
    marginTop: 14,
    fontWeight: "600",
  },
  recentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
  },

  recentImage: {
    width: 54,
    height: 54,
    resizeMode: "contain",
    backgroundColor: "#FFF",
    borderRadius: 8,
  },

  recentInfo: {
    flex: 1,
    marginLeft: 12,
  },

  recentName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  recentSeries: {
    color: "#94A3B8",
    marginTop: 2,
  },

  recentQuantity: {
    color: "#FBBF24",
    fontSize: 20,
    fontWeight: "700",
  },
});

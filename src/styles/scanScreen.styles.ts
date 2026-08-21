import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  /* ---------- Permission ---------- */

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    backgroundColor: colors.background,
  },

  permissionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
    textAlign: "center",
  },

  permissionText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 28,
  },

  permissionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 30,
  },

  permissionButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
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
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFF",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 15,
    color: "#AAA",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },

  statusText: {
    color: "#FFF",
    fontSize: 12,
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
    borderColor: "#FBBF24",
    borderTopLeftRadius: 12,
  },

  cornerTopRight: {
    position: "absolute",
    right: 0,
    width: 45,
    height: 45,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: "#FBBF24",
    borderTopRightRadius: 12,
  },

  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    width: 45,
    height: 45,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: "#FBBF24",
    borderBottomLeftRadius: 12,
  },

  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 45,
    height: 45,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderColor: "#FBBF24",
    borderBottomRightRadius: 12,
  },

  /* ---------- Floating Controls ---------- */

  controls: {
    position: "absolute",
    bottom: 36,
    left: 20,
    right: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  controlButton: {
    width: 56,
    height: 56,
    borderRadius: 28,

    backgroundColor: "rgba(15,23,42,0.85)",

    justifyContent: "center",
    alignItems: "center",
  },

  scanButton: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#1E293B", // <-- keep this
    borderRadius: 16, // <-- keep this
    borderWidth: 1,
    borderColor: "#334155",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 60,
    minHeight: 96,
  },

  resultImage: {
    width: 72,
    height: 72,
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },

  resultInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  resultTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  resultSubtitle: {
    color: "#94A3B8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 10,
  },

  resultCode: {
    marginTop: 8,
    fontSize: 14,
    color: "#00E676",
    fontFamily: "monospace",
  },

  /* ---------- Instructions ---------- */

  instructions: {
    position: "absolute",
    bottom: 255,
    left: 32,
    right: 32,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 22,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  addButton: {
    marginTop: 0,
    backgroundColor: "#FBBF24",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  addButtonText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
  },

  collectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  collectionText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  addCircleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FBBF24",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ownedText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FBBF24",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    width: 42,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    marginHorizontal: 12,
  },
});

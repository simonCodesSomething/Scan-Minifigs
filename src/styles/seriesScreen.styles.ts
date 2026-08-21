import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFF",
  },

  subtitle: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 15,
    color: "#94A3B8",
  },

  yearHeader: {
    color: "#94A3B8",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 8,
    letterSpacing: 0.5,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
  },

  seriesImage: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },

  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  seriesName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },

  figures: {
    fontSize: 13,
    color: "#CBD5E1",
    marginTop: 2,
  },

  progressBackground: {
    marginTop: 8,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#334155",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#22C55E",
  },

  progressText: {
    marginTop: 4,
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "600",
  },
  figureInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  scanBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },
  yearDropdown: {
    marginBottom: 12,
    borderColor: "#444",
    backgroundColor: "#1e1e1e",
  },

  yearDropdownMenu: {
    backgroundColor: "#1e1e1e",
    borderColor: "#444",
  },

  yearDropdownText: {
    color: "white",
  },
  yearFilter: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    gap: 8,
    alignItems: "center",
  },

  yearChip: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#242424",
    borderWidth: 1,
    borderColor: "#3a3a3a",

    flexGrow: 0,
    flexShrink: 0,
  },

  yearChipSelected: {
    backgroundColor: "#FBBF24",
    borderColor: "#FBBF24",
  },

  yearChipText: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    includeFontPadding: false,
  },

  yearChipTextSelected: {
    color: "#fff",
    fontWeight: "700",
  },
  yearChipPressed: {
    opacity: 0.8,
  },
  seriesList: {
    paddingBottom: 20,
  },
});

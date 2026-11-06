import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    alignItems: "center",
  },

  iconContainer: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 14,
    textAlign: "center",
  },

  description: {
    fontSize: 15,
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 32,
  },

  versionContainer: {
    width: "100%",
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 20,
    marginBottom: 28,
  },

  versionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  versionLabel: {
    fontSize: 14,
    color: "#94A3B8",
  },

  versionValue: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  latestVersion: {
    fontSize: 14,
    color: "#FBBF24",
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#334155",
    marginVertical: 16,
  },

  updateButton: {
    width: "100%",
    height: 54,
    backgroundColor: "#FBBF24",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  updateButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A",
  },

  footer: {
    marginTop: 24,
    fontSize: 12,
    lineHeight: 19,
    color: "#64748B",
    textAlign: "center",
  },
});

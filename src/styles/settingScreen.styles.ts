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

  section: {
    marginBottom: 26,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
  },

  supportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 20,
    padding: 18,
  },

  supportIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
  },

  coffeeEmoji: {
    fontSize: 24,
  },

  supportInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 12,
  },

  supportTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  supportSubtitle: {
    color: "#94A3B8",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },

  menuCard: {
    backgroundColor: "#1E293B",
    borderRadius: 20,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 62,
    paddingHorizontal: 18,
  },

  menuIcon: {
    width: 38,
    alignItems: "flex-start",
  },

  menuText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  itemDivider: {
    height: 1,
    backgroundColor: "#334155",
    marginLeft: 56,
  },

  pressed: {
    opacity: 0.65,
  },
});

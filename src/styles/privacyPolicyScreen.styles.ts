import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2A2A2A",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 50,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 8,
  },

  effectiveDate: {
    color: "#999999",
    fontSize: 14,
    marginBottom: 28,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 12,
  },

  paragraph: {
    color: "#D0D0D0",
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 12,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 7,
    paddingLeft: 4,
  },

  bullet: {
    color: "#FBBF24",
    fontSize: 18,
    lineHeight: 22,
    width: 20,
  },

  bulletText: {
    flex: 1,
    color: "#D0D0D0",
    fontSize: 15,
    lineHeight: 22,
  },

  serviceName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  contact: {
    color: "#D0D0D0",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 5,
  },

  footer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#2A2A2A",
  },

  footerText: {
    color: "#777777",
    fontSize: 13,
    textAlign: "center",
  },
});

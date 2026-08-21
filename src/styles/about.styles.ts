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
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
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

  card: {
    backgroundColor: "#1E293B",
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  cardText: {
    color: "#CBD5E1",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
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

  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },

  infoContent: {
    flex: 1,
    marginLeft: 14,
  },

  infoTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 3,
  },

  infoText: {
    color: "#94A3B8",
    fontSize: 14,
    lineHeight: 20,
  },

  versionCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 18,
  },

  versionLabel: {
    color: "#CBD5E1",
    fontSize: 16,
  },

  versionNumber: {
    color: "#94A3B8",
    fontSize: 15,
    fontWeight: "600",
  },

  footer: {
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 10,
  },

  footerText: {
    color: "#94A3B8",
    fontSize: 14,
    textAlign: "center",
  },

  copyright: {
    color: "#64748B",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 12,
  },

  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 6,
  },

  pressed: {
    opacity: 0.6,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 20,
    zIndex: 10,

    width: 44,
    height: 44,
    borderRadius: 22,

    backgroundColor: "#1E293B",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },

  backButtonPressed: {
    opacity: 0.6,
  },

  headerText: {
    flex: 1,
    paddingRight: 16,
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1E293B",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonPressed: {
    opacity: 0.6,
  },

  supportButton: {
    marginTop: 18,
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: "#FBBF24",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 8,
  },

  supportButtonPressed: {
    opacity: 0.8,
  },

  supportButtonText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "600",
  },

  privacyPolicyCard: {
    marginTop: 10,
  },
});

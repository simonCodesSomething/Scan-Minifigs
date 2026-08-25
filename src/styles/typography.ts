import { TextStyle } from "react-native";

export const typography: Record<string, TextStyle> = {
  display: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 30,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 26,
  },

  subheading: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
  },

  body: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },

  bodyMedium: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },

  bodyBold: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },

  caption: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },

  captionMedium: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },

  captionBold: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
  },

  small: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },

  smallMedium: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },

  smallBold: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
  },
} as const;

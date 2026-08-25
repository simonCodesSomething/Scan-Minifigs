import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  spacing,
  typography,

  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    round: 999,
  },

  borderWidth: {
    thin: 1,
    medium: 2,
  },

  sizes: {
    iconSmall: 18,
    icon: 24,
    iconLarge: 32,

    buttonHeight: 48,
    inputHeight: 48,

    avatarSmall: 32,
    avatar: 40,
    avatarLarge: 56,
  },
} as const;

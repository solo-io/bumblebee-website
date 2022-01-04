import { colors } from "./colors";

export const soloConstants = {
  smallBuffer: 18,
  buffer: 20,
  largeBuffer: 23,

  smallRadius: 8,
  radius: 10,
  largeRadius: 16,

  transitionTime: ".3s",

  contentWidth: "1140px",
  mediaQuery: `@media (max-width: 1150px)`,
  smallMediaQuery: `@media (max-width: 850px)`,
  tinyMediaQuery: `@media (max-width: 625px)`,

  healthStatus: {
    Good: {
      value: 1,
      color: colors.forestGreen,
    },
    Pending: {
      value: 2,
      color: colors.sunGold,
    },
    Error: {
      value: 1,
      color: colors.grapefruitOrange,
    },
  },
};

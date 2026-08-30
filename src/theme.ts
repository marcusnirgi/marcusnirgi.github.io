import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "#17110E" },
          subtle: { value: "#1D1511" },
          muted: { value: "#29201A" },
          emphasized: { value: "#38271D" },
          panel: { value: "#201A16" },
          inverted: { value: "#FFE8D0" },
        },
        accent: {
          DEFAULT: { value: "#E87524" },
          subtle: { value: "#A94F1B" },
          muted: { value: "#713715" },
          emphasized: { value: "#FF8C3A" },
        },
      },
    },
    tokens: {
      fonts: {
        body: { value: "Inter, sans-serif" },
        heading: { value: "Inter, sans-serif" },
      },
      colors: {
        accent: {
          solid: { value: "#E87524" },

          50: { value: "#FFF1E5" },
          100: { value: "#FFDCC2" },
          200: { value: "#FFC08F" },
          300: { value: "#FFA15C" },
          400: { value: "#FF8C3A" },
          500: { value: "#E87524" },
          600: { value: "#C85F19" },
          700: { value: "#A94F1B" },
          800: { value: "#713715" },
          900: { value: "#4A220E" },

          contrast: { value: "#FFFFFF" },
          fg: { value: "#ffffff" },
          subtle: { value: "#FFDCC2" },
          muted: { value: "#FFC08F" },
          emphasized: { value: "#FFA15C" },
          focusRing: { value: "#E87524" },
          border: { value: "#E87524" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

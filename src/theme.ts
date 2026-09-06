import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "#F4F2ED" },
          subtle: { value: "#ECE8DF" },
          muted: { value: "#DDD6C7" },
          emphasized: { value: "#CBC0A9" },
          panel: { value: "#FFFFFF" },
          inverted: { value: "#1C1917" },
        },
        accent: {
          DEFAULT: { value: "#C85F19" },
          subtle: { value: "#F8E2CF" },
          muted: { value: "#F2C6A3" },
          emphasized: { value: "#A94F1B" },
        },
        fg: {
          DEFAULT: { value: "#1C1917" },
          muted: { value: "#57534E" },
          subtle: { value: "#78716C" },
          inverted: { value: "#F4F2ED" },
        },
        border: {
          DEFAULT: { value: "#DDD6C7" },
          muted: { value: "#ECE8DF" },
          emphasized: { value: "#78716C" },
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
          solid: { value: "#C85F19" },

          50: { value: "#FDF3EC" },
          100: { value: "#F8E2CF" },
          200: { value: "#F2C6A3" },
          300: { value: "#E8A06E" },
          400: { value: "#DB7A36" },
          500: { value: "#C85F19" },
          600: { value: "#A94F1B" },
          700: { value: "#8A3F15" },
          800: { value: "#65300F" },
          900: { value: "#45200B" },

          contrast: { value: "#FFFFFF" },
          fg: { value: "#9A4A12" },
          subtle: { value: "#F8E2CF" },
          muted: { value: "#F2C6A3" },
          emphasized: { value: "#E8A06E" },
          focusRing: { value: "#C85F19" },
          border: { value: "#C85F19" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

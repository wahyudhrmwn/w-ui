import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false, // Disable type checking for faster builds
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    // Ensure proper handling of dependencies
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ["react", "react-dom", "react/jsx-runtime"],
    };

    // Ensure React is available globally
    config.define = {
      ...config.define,
      global: "globalThis",
    };

    return config;
  },
};
export default config;

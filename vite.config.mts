import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: "./setupTests.js",
    setupFiles: ["./setupTests.ts"],
  },
  plugins: [react(), tsconfigPaths()],
});

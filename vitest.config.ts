import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    fileParallelism: false,
    maxWorkers: 1,
    setupFiles: ["./tests/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "coverage",
      include: ["app/**/*.{ts,tsx}"],
      exclude: ["app/layout.tsx"],
      thresholds: { lines: 85, functions: 85, statements: 85, branches: 80 },
    },
  },
});

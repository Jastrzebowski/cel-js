import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        'test/**',
        // We don't collect coverage for test files
        '**/*.{test,spec}.{js,ts}',
        // We don't collect coverage for index files
        '**/index.{js,ts}',
      ],
      all: true,
      thresholds: {
        // TODO rais all up to 98
        lines: 96,
        functions: 98,
        branches: 95,
        statements: 96
      }
    },
  },
})

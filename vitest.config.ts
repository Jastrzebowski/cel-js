import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      include: [
        'src/**'
      ],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        'test/**',
        '**/*.test.{js,ts}',
      ],
      all: true,
      thresholds: {
        lines: 97,
        functions: 97,
        branches: 97,
        statements: 97
      }
    },
  },
})

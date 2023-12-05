import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/lib/index.ts'],
  format: ['esm'],
  external: ['micromark', 'svelte/store'],
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
  dts: true,
})
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/*.ts'],
    clean: true,
    dts: true,
    format: ['esm', 'cjs'],
    minify: true,
  },
  {
    entry: ['src/miniprogram-base.css'],
    minify: true,
  },
]);

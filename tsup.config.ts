import { defineConfig } from 'tsup';
import fs from 'node:fs';

const files = fs.readdirSync('src');

const tsFiles = files
  .filter((item) => item.endsWith('.ts') && !item.endsWith('.d.ts'))
  .map((item) => `src/${item}`);

const cssFiles = files.filter((item) => item.endsWith('.css')).map((item) => `src/${item}`);

export default defineConfig([
  {
    entry: tsFiles,
    clean: true,
    dts: true,
    format: ['esm', 'cjs'],
    minify: true,
  },
  {
    entry: cssFiles,
    minify: true,
  },
]);

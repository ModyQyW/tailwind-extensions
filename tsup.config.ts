/* eslint-disable no-useless-escape */
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
    dts: true,
    format: 'esm',
    minify: true,
    target: 'node12',
    banner: {
      js: `import {createRequire} from 'module';var require=createRequire(import\.meta.url);`,
    },
  },
  {
    entry: tsFiles,
    format: 'cjs',
    minify: true,
    target: 'node12',
  },
  {
    entry: cssFiles,
    minify: true,
  },
]);

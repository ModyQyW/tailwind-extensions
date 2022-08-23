/* eslint-disable no-useless-escape */
import { defineConfig } from 'tsup';
import fs from 'node:fs';
import path from 'node:path';

const getTsFiles = (entry: string): string[] =>
  fs
    .readdirSync(entry)
    .flatMap((item) => {
      if (
        item.includes('.ts') &&
        !item.includes('.test.') &&
        !item.includes('.spec.') &&
        !item.includes('.d.') &&
        !item.includes('type')
      ) {
        return path.join(entry, item);
      }
      if (!item.includes('.') && !item.includes('type')) {
        return getTsFiles(path.join(entry, item));
      }
      return '';
    })
    .filter((item) => !!item) as string[];

export default defineConfig([
  {
    entry: getTsFiles('src'),
    format: 'esm',
    dts: true,
    minify: true,
    shims: true,
    splitting: false,
    target: 'node12',
    banner: {
      js: `import {createRequire as __createRequire} from 'module';var require=createRequire(import\.meta.url);`,
    },
  },
  {
    entry: getTsFiles('src'),
    format: 'cjs',
    minify: true,
    shims: true,
    splitting: false,
    target: 'node12',
    footer: {
      js: `if (module.exports.default) module.exports = module.exports.default;`,
    },
  },
]);
/* eslint-enable no-useless-escape */

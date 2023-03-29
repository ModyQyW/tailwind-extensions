// ATTENTION: the file is used to check configs
import type { Config } from 'tailwindcss';
import { basePreset, elementPlusPreset } from './dist/index';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  presets: [basePreset, elementPlusPreset()],
};

export default config;

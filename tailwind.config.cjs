// ATTENTION: the file is used to check configs
const { basePreset, elementPlusPreset } = require('./dist/index.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  presets: [basePreset, elementPlusPreset()],
};

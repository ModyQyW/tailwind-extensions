const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getEasyPreset = require('@modyqyw/tailwind-presets/easy').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [basePreset, getEasyPreset()],
};

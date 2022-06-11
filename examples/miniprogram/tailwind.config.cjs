const basePreset = require('@modyqyw/tailwind-presets/base').default;
const miniprogramPreset = require('@modyqyw/tailwind-presets/miniprogram').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [basePreset, miniprogramPreset],
};

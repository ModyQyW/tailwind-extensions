const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [basePreset, getElementPlusPreset()],
};

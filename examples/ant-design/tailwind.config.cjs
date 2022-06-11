const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [basePreset, getAntDesignPreset()],
};

const themeSwapper = require('tailwindcss-theme-swapper');
const Color = require('color');

const white = Color('white');
const black = Color('black');

const convert = (color) => {
  const c = Color(color);
  return {
    DEFAULT: c.hex(),
    hover: c.mix(white, 0.3).hex(),
    active: c.mix(black, 0.2).hex(),
    'lighten-9': c.mix('white', 0.9).hex(),
    'light-9': c.mix('white', 0.9).hex(),
    'lighten-8': c.mix('white', 0.8).hex(),
    'light-8': c.mix('white', 0.8).hex(),
    'lighten-7': c.mix('white', 0.7).hex(),
    'light-7': c.mix('white', 0.7).hex(),
    'lighten-6': c.mix('white', 0.6).hex(),
    'light-6': c.mix('white', 0.6).hex(),
    'lighten-5': c.mix('white', 0.5).hex(),
    'light-5': c.mix('white', 0.5).hex(),
    'lighten-4': c.mix('white', 0.4).hex(),
    'light-4': c.mix('white', 0.4).hex(),
    'lighten-3': c.mix('white', 0.3).hex(),
    'light-3': c.mix('white', 0.3).hex(),
    'lighten-2': c.mix('white', 0.2).hex(),
    'light-2': c.mix('white', 0.2).hex(),
    'lighten-1': c.mix('white', 0.1).hex(),
    'light-1': c.mix('white', 0.1).hex(),
    'darken-1': c.mix('black', 0.1).hex(),
    'dark-1': c.mix('black', 0.1).hex(),
    'darken-2': c.mix('black', 0.2).hex(),
    'dark-2': c.mix('black', 0.2).hex(),
    'darken-3': c.mix('black', 0.3).hex(),
    'dark-3': c.mix('black', 0.3).hex(),
    'darken-4': c.mix('black', 0.4).hex(),
    'dark-4': c.mix('black', 0.4).hex(),
    'darken-5': c.mix('black', 0.5).hex(),
    'dark-5': c.mix('black', 0.5).hex(),
    'darken-6': c.mix('black', 0.6).hex(),
    'dark-6': c.mix('black', 0.6).hex(),
    'darken-7': c.mix('black', 0.7).hex(),
    'dark-7': c.mix('black', 0.7).hex(),
    'darken-8': c.mix('black', 0.8).hex(),
    'dark-8': c.mix('black', 0.8).hex(),
    'darken-9': c.mix('black', 0.9).hex(),
    'dark-9': c.mix('black', 0.9).hex(),
  };
};

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = ({
  selectors = [':root'],
  mediaQuery = [],
  primary = '#409eff',
  secondary = '#909399',
  success = '#67c23a',
  warning = '#e6a23c',
  error = '#f56c6c',
  danger = '#f56c6c',
  info = '#909399',
  text = '#303133',
  primaryText = '#303133',
  regularText = '#606266',
  secondaryText = '#909399',
  placeholderText = '#a8abb2',
  disabledText = '#c0c4cc',
  bg = '#ffffff',
  disabledBg = '#f5f7fa',
  border = '#dcdfe6',
  mask = 'rgba(255, 255, 255, .9)',
  boxShadow = '0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)',
} = {}) => ({
  corePlugins: {
    preflight: false,
  },
  plugins: [
    themeSwapper({
      themes: [
        {
          name: 'base',
          selectors,
          mediaQuery,
          theme: {
            colors: {
              primary: convert(primary),

              secondary: convert(secondary),

              success: convert(success),

              warning: convert(warning),

              error: convert(error),

              danger: convert(danger),

              info: convert(info),

              text: {
                DEFAULT: text,
                primary: primaryText,
                regular: regularText,
                secondary: secondaryText,
                placeholder: placeholderText,
                disabled: disabledText,
              },

              bg: {
                DEFAULT: bg,
                disabled: disabledBg,
              },

              border,

              mask,
            },

            boxShadow,
          },
        },
      ],
    }),
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {
      borderColor: {
        DEFAULT: 'var(--colors-border, currentColor)',
      },
      fontFamily: {
        font: "var(--el-font-family, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif)",
      },
    },
  },
});

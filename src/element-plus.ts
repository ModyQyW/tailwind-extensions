// @ts-ignore
import themeSwapper from 'tailwindcss-theme-swapper';
import Color from 'color';
import type { TailwindConfig } from 'tailwindcss/tailwind-config';

const white = Color('white');
const black = Color('black');

const convert = (color: string) => {
  const c = Color(color);
  return {
    DEFAULT: c.hex(),
    hover: c.mix(white, 0.3).hex(),
    active: c.mix(black, 0.2).hex(),
    disabled: c.mix(white, 0.5).hex(),
    'lighten-9': c.mix(white, 0.9).hex(),
    'light-9': c.mix(white, 0.9).hex(),
    'lighten-8': c.mix(white, 0.8).hex(),
    'light-8': c.mix(white, 0.8).hex(),
    'lighten-7': c.mix(white, 0.7).hex(),
    'light-7': c.mix(white, 0.7).hex(),
    'lighten-6': c.mix(white, 0.6).hex(),
    'light-6': c.mix(white, 0.6).hex(),
    'lighten-5': c.mix(white, 0.5).hex(),
    'light-5': c.mix(white, 0.5).hex(),
    'lighten-4': c.mix(white, 0.4).hex(),
    'light-4': c.mix(white, 0.4).hex(),
    'lighten-3': c.mix(white, 0.3).hex(),
    'light-3': c.mix(white, 0.3).hex(),
    'lighten-2': c.mix(white, 0.2).hex(),
    'light-2': c.mix(white, 0.2).hex(),
    'lighten-1': c.mix(white, 0.1).hex(),
    'light-1': c.mix(white, 0.1).hex(),
    'darken-1': c.mix(black, 0.1).hex(),
    'dark-1': c.mix(black, 0.1).hex(),
    'darken-2': c.mix(black, 0.2).hex(),
    'dark-2': c.mix(black, 0.2).hex(),
    'darken-3': c.mix(black, 0.3).hex(),
    'dark-3': c.mix(black, 0.3).hex(),
    'darken-4': c.mix(black, 0.4).hex(),
    'dark-4': c.mix(black, 0.4).hex(),
    'darken-5': c.mix(black, 0.5).hex(),
    'dark-5': c.mix(black, 0.5).hex(),
    'darken-6': c.mix(black, 0.6).hex(),
    'dark-6': c.mix(black, 0.6).hex(),
    'darken-7': c.mix(black, 0.7).hex(),
    'dark-7': c.mix(black, 0.7).hex(),
    'darken-8': c.mix(black, 0.8).hex(),
    'dark-8': c.mix(black, 0.8).hex(),
    'darken-9': c.mix(black, 0.9).hex(),
    'dark-9': c.mix(black, 0.9).hex(),
  };
};

const darkConvert = (color: string, backgroundColor: string) => {
  const c = Color(color);
  const bg = Color(backgroundColor);
  return {
    DEFAULT: c.hex(),
    hover: c.mix(bg, 0.3).hex(),
    active: c.mix(white, 0.2).hex(),
    disabled: c.mix(bg, 0.5).hex(),
    'lighten-9': c.mix(bg, 0.9).hex(),
    'light-9': c.mix(bg, 0.9).hex(),
    'lighten-8': c.mix(bg, 0.8).hex(),
    'light-8': c.mix(bg, 0.8).hex(),
    'lighten-7': c.mix(bg, 0.7).hex(),
    'light-7': c.mix(bg, 0.7).hex(),
    'lighten-6': c.mix(bg, 0.6).hex(),
    'light-6': c.mix(bg, 0.6).hex(),
    'lighten-5': c.mix(bg, 0.5).hex(),
    'light-5': c.mix(bg, 0.5).hex(),
    'lighten-4': c.mix(bg, 0.4).hex(),
    'light-4': c.mix(bg, 0.4).hex(),
    'lighten-3': c.mix(bg, 0.3).hex(),
    'light-3': c.mix(bg, 0.3).hex(),
    'lighten-2': c.mix(bg, 0.2).hex(),
    'light-2': c.mix(bg, 0.2).hex(),
    'lighten-1': c.mix(bg, 0.1).hex(),
    'light-1': c.mix(bg, 0.1).hex(),
    'darken-1': c.mix(white, 0.1).hex(),
    'dark-1': c.mix(white, 0.1).hex(),
    'darken-2': c.mix(white, 0.2).hex(),
    'dark-2': c.mix(white, 0.2).hex(),
    'darken-3': c.mix(white, 0.3).hex(),
    'dark-3': c.mix(white, 0.3).hex(),
    'darken-4': c.mix(white, 0.4).hex(),
    'dark-4': c.mix(white, 0.4).hex(),
    'darken-5': c.mix(white, 0.5).hex(),
    'dark-5': c.mix(white, 0.5).hex(),
    'darken-6': c.mix(white, 0.6).hex(),
    'dark-6': c.mix(white, 0.6).hex(),
    'darken-7': c.mix(white, 0.7).hex(),
    'dark-7': c.mix(white, 0.7).hex(),
    'darken-8': c.mix(white, 0.8).hex(),
    'dark-8': c.mix(white, 0.8).hex(),
    'darken-9': c.mix(white, 0.9).hex(),
    'dark-9': c.mix(white, 0.9).hex(),
  };
};

const config = ({
  selectors = [':root'],
  mediaQuery = [] as string[],
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
  mask = 'rgba(255, 255, 255, 0.9)',
  boxShadow = '0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)',
  darkSelectors = ['.dark'],
  darkMediaQuery = '@media (prefers-color-scheme: dark)',
  darkPrimary = '#409eff',
  darkSecondary = '#909399',
  darkSuccess = '#67c23a',
  darkWarning = '#e6a23c',
  darkError = '#f56c6c',
  darkDanger = '#f56c6c',
  darkInfo = '#909399',
  darkText = '#e5eaf3',
  darkPrimaryText = '#e5eaf3',
  darkRegularText = '#cfd3dc',
  darkSecondaryText = '#a3a6ad',
  darkPlaceholderText = '#8d9095',
  darkDisabledText = '#6c6e72',
  darkBg = '#141414',
  darkDisabledBg = 'transparent',
  darkBorder = '#4c4d4f',
  darkMask = 'rgba(0, 0, 0, 0.8)',
  darkBoxShadow = '0px 12px 32px 4px rgba(0, 0, 0, 0.36), 0px 8px 20px rgba(0, 0, 0, 0.72)',
} = {}): TailwindConfig => ({
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
        {
          name: 'dark',
          selectors: darkSelectors,
          mediaQuery: darkMediaQuery,
          theme: {
            colors: {
              primary: darkConvert(darkPrimary, darkBg),

              secondary: darkConvert(darkSecondary, darkBg),

              success: darkConvert(darkSuccess, darkBg),

              warning: darkConvert(darkWarning, darkBg),

              error: darkConvert(darkError, darkBg),

              danger: darkConvert(darkDanger, darkBg),

              info: darkConvert(darkInfo, darkBg),

              text: {
                DEFAULT: darkText,
                primary: darkPrimaryText,
                regular: darkRegularText,
                secondary: darkSecondaryText,
                placeholder: darkPlaceholderText,
                disabled: darkDisabledText,
              },

              bg: {
                DEFAULT: darkBg,
                disabled: darkDisabledBg,
              },

              border: darkBorder,

              mask: darkMask,
            },

            boxShadow: darkBoxShadow,
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
        font: [
          'Helvetica Neue',
          'Helvetica',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          '微软雅黑',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
});

export default config;

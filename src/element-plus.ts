// @ts-ignore
import themeSwapper from 'tailwindcss-theme-swapper';
import Color from 'color';
import { Config, ColorParam } from './types';

const convert = <T extends ColorParam = ColorParam>({
  color,
  lightenColor,
  darkenColor,
}: {
  color?: T;
  lightenColor?: T;
  darkenColor?: T;
}) => {
  const c = Color(color);
  const lc = Color(lightenColor || 'white');
  const dc = Color(darkenColor || 'black');
  return {
    DEFAULT: c.hex(),
    hover: c.mix(lc, 0.3).hex(),
    active: c.mix(dc, 0.2).hex(),
    disabled: c.mix(lc, 0.5).hex(),
    'lighten-9': c.mix(lc, 0.9).hex(),
    'light-9': c.mix(lc, 0.9).hex(),
    'lighten-8': c.mix(lc, 0.8).hex(),
    'light-8': c.mix(lc, 0.8).hex(),
    'lighten-7': c.mix(lc, 0.7).hex(),
    'light-7': c.mix(lc, 0.7).hex(),
    'lighten-6': c.mix(lc, 0.6).hex(),
    'light-6': c.mix(lc, 0.6).hex(),
    'lighten-5': c.mix(lc, 0.5).hex(),
    'light-5': c.mix(lc, 0.5).hex(),
    'lighten-4': c.mix(lc, 0.4).hex(),
    'light-4': c.mix(lc, 0.4).hex(),
    'lighten-3': c.mix(lc, 0.3).hex(),
    'light-3': c.mix(lc, 0.3).hex(),
    'lighten-2': c.mix(lc, 0.2).hex(),
    'light-2': c.mix(lc, 0.2).hex(),
    'lighten-1': c.mix(lc, 0.1).hex(),
    'light-1': c.mix(lc, 0.1).hex(),
    'darken-1': c.mix(dc, 0.1).hex(),
    'dark-1': c.mix(dc, 0.1).hex(),
    'darken-2': c.mix(dc, 0.2).hex(),
    'dark-2': c.mix(dc, 0.2).hex(),
    'darken-3': c.mix(dc, 0.3).hex(),
    'dark-3': c.mix(dc, 0.3).hex(),
    'darken-4': c.mix(dc, 0.4).hex(),
    'dark-4': c.mix(dc, 0.4).hex(),
    'darken-5': c.mix(dc, 0.5).hex(),
    'dark-5': c.mix(dc, 0.5).hex(),
    'darken-6': c.mix(dc, 0.6).hex(),
    'dark-6': c.mix(dc, 0.6).hex(),
    'darken-7': c.mix(dc, 0.7).hex(),
    'dark-7': c.mix(dc, 0.7).hex(),
    'darken-8': c.mix(dc, 0.8).hex(),
    'dark-8': c.mix(dc, 0.8).hex(),
    'darken-9': c.mix(dc, 0.9).hex(),
    'dark-9': c.mix(dc, 0.9).hex(),
  };
};

const config = ({
  /** Base */
  baseSelectors = [':root', 'page'],
  baseMediaQuery = '',

  basePrimary = '#409eff',
  baseSecondary = '#909399',
  baseSuccess = '#67c23a',
  baseWarning = '#e6a23c',
  baseError = '#f56c6c',
  baseDanger = '#f56c6c',
  baseInfo = '#909399',

  baseFill = '#f0f2f5',
  baseDarkerFill = '#e6e8eb',
  baseDarkFill = '#ebedf0',
  baseLightFill = '#f5f7fa',
  baseLighterFill = '#fafafa',
  baseExtraLightFill = '#fafcff',
  baseBlankFill = '#ffffff',

  baseText = '#303133',
  basePrimaryText = '#303133',
  baseRegularText = '#606266',
  baseSecondaryText = '#909399',
  basePlaceholderText = '#a8abb2',
  baseDisabledText = '#c0c4cc',

  baseBg = '#ffffff',
  basePageBg = '#f2f3f5',
  baseOverlayBg = '#ffffff',
  baseMaskBg = 'rgba(0, 0, 0, 0.5)',
  baseDisabledBg = '#f5f7fa',

  baseBorder = '#dcdfe6',
  baseDarkerBorder = '#cdd0d6',
  baseDarkBorder = '#d4d7de',
  baseLightBorder = '#e4e7ed',
  baseLighterBorder = '#ebeef5',
  baseExtraLightBorder = '#f2f6fc',

  baseBoxShadow = '0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)',

  /** Dark */
  darkSelectors = ['.dark'],
  darkMediaQuery = '',

  darkPrimary = '#409eff',
  darkSecondary = '#909399',
  darkSuccess = '#67c23a',
  darkWarning = '#e6a23c',
  darkError = '#f56c6c',
  darkDanger = '#f56c6c',
  darkInfo = '#909399',

  darkFill = '#303030',
  darkDarkerFill = '#424243',
  darkDarkFill = '#39393a',
  darkLightFill = '#262727',
  darkLighterFill = '#1d1d1d',
  darkExtraLightFill = '#191919',
  darkBlankFill = 'transparent',

  darkText = '#e5eaf3',
  darkPrimaryText = '#e5eaf3',
  darkRegularText = '#cfd3dc',
  darkSecondaryText = '#a3a6ad',
  darkPlaceholderText = '#8d9095',
  darkDisabledText = '#6c6e72',

  darkBg = '#141414',
  darkPageBg = '#0a0a0a',
  darkOverlayBg = '#1d1e1f',
  darkMaskBg = 'rgba(0, 0, 0, 0.5)',
  darkDisabledBg = 'transparent',

  darkBorder = '#4c4d4f',
  darkDarkerBorder = '#636466',
  darkDarkBorder = '#58585b',
  darkLightBorder = '#414243',
  darkLighterBorder = '#363637',
  darkExtraLightBorder = '#2b2b2c',

  darkBoxShadow = '0px 12px 32px 4px rgba(0, 0, 0, 0.36), 0px 8px 20px rgba(0, 0, 0, 0.72)',
} = {}): Config => ({
  darkMode: 'class',
  safelist: ['dark'],
  plugins: [
    themeSwapper({
      themes: [
        {
          name: 'base',
          selectors: baseSelectors,
          mediaQuery: baseMediaQuery,
          theme: {
            colors: {
              primary: convert({ color: basePrimary }),

              secondary: convert({ color: baseSecondary }),

              success: convert({ color: baseSuccess }),

              warning: convert({ color: baseWarning }),

              error: convert({ color: baseError }),

              danger: convert({ color: baseDanger }),

              info: convert({ color: baseInfo }),

              fill: {
                DEFAULT: baseFill,
                darker: baseDarkerFill,
                dark: baseDarkFill,
                light: baseLightFill,
                lighter: baseLighterFill,
                'extra-light': baseExtraLightFill,
                blank: baseBlankFill,
              },
            },

            backgroundColor: {
              DEFAULT: baseBg,
              page: basePageBg,
              overlay: baseOverlayBg,
              mask: baseMaskBg,
              disabled: baseDisabledBg,
            },

            borderColor: {
              DEFAULT: baseBorder,
              darker: baseDarkerBorder,
              dark: baseDarkBorder,
              light: baseLightBorder,
              lighter: baseLighterBorder,
              'extra-light': baseExtraLightBorder,
            },

            textColor: {
              DEFAULT: baseText,
              'primary-text': basePrimaryText,
              'regular-text': baseRegularText,
              'secondary-text': baseSecondaryText,
              'placeholder-text': basePlaceholderText,
              'disabled-text': baseDisabledText,
            },

            boxShadow: {
              DEFAULT: baseBoxShadow,
            },
          },
        },
        {
          name: 'dark',
          selectors: darkSelectors,
          mediaQuery: darkMediaQuery,
          theme: {
            colors: {
              primary: convert({ color: darkPrimary, lightenColor: darkBg, darkenColor: 'white' }),

              secondary: convert({
                color: darkSecondary,
                lightenColor: darkBg,
                darkenColor: 'white',
              }),

              success: convert({
                color: darkSuccess,
                lightenColor: darkBg,
                darkenColor: 'white',
              }),

              warning: convert({
                color: darkWarning,
                lightenColor: darkBg,
                darkenColor: 'white',
              }),

              error: convert({ color: darkError, lightenColor: darkBg, darkenColor: 'white' }),

              danger: convert({
                color: darkDanger,
                lightenColor: darkBg,
                darkenColor: 'white',
              }),

              info: convert({ color: darkInfo, lightenColor: darkBg, darkenColor: 'white' }),

              fill: {
                DEFAULT: darkFill,
                darker: darkDarkerFill,
                dark: darkDarkFill,
                light: darkLightFill,
                lighter: darkLighterFill,
                'extra-light': darkExtraLightFill,
                blank: darkBlankFill,
              },
            },

            backgroundColor: {
              DEFAULT: darkBg,
              pageBg: darkPageBg,
              overlay: darkOverlayBg,
              mask: darkMaskBg,
              disabled: darkDisabledBg,
            },

            borderColor: {
              DEFAULT: darkBorder,
              darker: darkDarkerBorder,
              dark: darkDarkBorder,
              light: darkLightBorder,
              lighter: darkLighterBorder,
              'extra-light': darkExtraLightBorder,
            },

            textColor: {
              DEFAULT: darkText,
              'primary-text': darkPrimaryText,
              'regular-text': darkRegularText,
              'secondary-text': darkSecondaryText,
              'placeholder-text': darkPlaceholderText,
              'disabled-text': darkDisabledText,
            },

            boxShadow: {
              DEFAULT: darkBoxShadow,
            },
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
      fontFamily: {
        DEFAULT: [
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

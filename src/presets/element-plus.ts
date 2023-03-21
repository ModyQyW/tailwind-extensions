// @ts-expect-error no types
import themeSwapper from 'tailwindcss-theme-swapper';
import { TinyColor, ColorInput } from '@ctrl/tinycolor';
import { Config } from 'tailwindcss';

const convert = <T extends ColorInput = ColorInput>({
  color,
  lightenColor,
  darkenColor,
}: {
  color?: T;
  lightenColor?: T;
  darkenColor?: T;
} = {}) => {
  const c = new TinyColor(color);
  const lc = new TinyColor(lightenColor || 'white');
  const dc = new TinyColor(darkenColor || 'black');
  return {
    DEFAULT: c.toHexString(),
    hover: c.mix(lc, 30).toHexString(),
    active: c.mix(dc, 20).toHexString(),
    disabled: c.mix(lc, 50).toHexString(),
    'lighten-9': c.mix(lc, 90).toHexString(),
    'light-9': c.mix(lc, 90).toHexString(),
    'lighten-8': c.mix(lc, 80).toHexString(),
    'light-8': c.mix(lc, 80).toHexString(),
    'lighten-7': c.mix(lc, 70).toHexString(),
    'light-7': c.mix(lc, 70).toHexString(),
    'lighten-6': c.mix(lc, 60).toHexString(),
    'light-6': c.mix(lc, 60).toHexString(),
    'lighten-5': c.mix(lc, 50).toHexString(),
    'light-5': c.mix(lc, 50).toHexString(),
    'lighten-4': c.mix(lc, 40).toHexString(),
    'light-4': c.mix(lc, 40).toHexString(),
    'lighten-3': c.mix(lc, 30).toHexString(),
    'light-3': c.mix(lc, 30).toHexString(),
    'lighten-2': c.mix(lc, 20).toHexString(),
    'light-2': c.mix(lc, 20).toHexString(),
    'lighten-1': c.mix(lc, 10).toHexString(),
    'light-1': c.mix(lc, 10).toHexString(),
    'darken-1': c.mix(dc, 10).toHexString(),
    'dark-1': c.mix(dc, 10).toHexString(),
    'darken-2': c.mix(dc, 20).toHexString(),
    'dark-2': c.mix(dc, 20).toHexString(),
    'darken-3': c.mix(dc, 30).toHexString(),
    'dark-3': c.mix(dc, 30).toHexString(),
    'darken-4': c.mix(dc, 40).toHexString(),
    'dark-4': c.mix(dc, 40).toHexString(),
    'darken-5': c.mix(dc, 50).toHexString(),
    'dark-5': c.mix(dc, 50).toHexString(),
    'darken-6': c.mix(dc, 60).toHexString(),
    'dark-6': c.mix(dc, 60).toHexString(),
    'darken-7': c.mix(dc, 70).toHexString(),
    'dark-7': c.mix(dc, 70).toHexString(),
    'darken-8': c.mix(dc, 80).toHexString(),
    'dark-8': c.mix(dc, 80).toHexString(),
    'darken-9': c.mix(dc, 90).toHexString(),
    'dark-9': c.mix(dc, 90).toHexString(),
  };
};

export const elementPlusPreset = ({
  /** base */
  baseSelectors = [':root'],
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

  /** dark */
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
  content: [],
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
              page: darkPageBg,
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

// @ts-ignore
import themeSwapper from 'tailwindcss-theme-swapper';
import { generate, presetPalettes, presetDarkPalettes } from '@ant-design/colors';
import { Config } from './types';

const convert = (colors: string[]) => {
  return {
    DEFAULT: colors[5],
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[7],
    9: colors[8],
    10: colors[9],
    hover: colors[4],
    active: colors[6],
    'lighten-5': colors[0],
    'light-1': colors[0],
    'lighten-4': colors[1],
    'light-2': colors[1],
    'lighten-3': colors[2],
    'light-3': colors[2],
    'lighten-2': colors[3],
    'light-4': colors[3],
    'lighten-1': colors[4],
    'light-5': colors[4],
    'darken-1': colors[6],
    'dark-1': colors[6],
    'darken-2': colors[7],
    'dark-2': colors[7],
    'darken-3': colors[8],
    'dark-3': colors[8],
    'darken-4': colors[9],
    'dark-4': colors[9],
  };
};

export default ({
  /** Base */
  baseSelectors = [':root', 'page'],
  baseMediaQuery = '',

  basePrimary = '#1890ff',
  baseSecondary = '#666666',
  baseSuccess = '#52c41a',
  baseWarning = '#faad14',
  baseError = '#f5222d',
  baseDanger = '#f5222d',
  baseInfo = '#1890ff',

  baseBg = '#ffffff',
  baseMaskBg = 'rgba(0, 0, 0, 0.45)',
  baseDisabledBg = '#f5f5f5',

  baseBorder = '#d9d9d9',

  baseText = 'rgba(0, 0, 0, 0.85)',
  basePrimaryText = 'rgba(0, 0, 0, 0.85)',
  baseSecondaryText = 'rgba(0, 0, 0, 0.45)',
  baseDisabledText = 'rgba(0, 0, 0, 0.25)',

  baseBoxShadow = '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',

  /** Dark */
  darkSelectors = ['.dark'],
  darkMediaQuery = '',

  darkPrimary = '#177ddc',
  darkSecondary = '#5a5a5a',
  darkSuccess = '#49aa19',
  darkWarning = '#d89614',
  darkError = '#d32029',
  darkDanger = '#d32029',
  darkInfo = '#177ddc',

  darkBg = '#141414',
  darkMaskBg = 'rgba(0, 0, 0, 0.45)',
  darkDisabledBg = 'rgba(255, 255, 255, 0.08)',

  darkBorder = '#434343',

  darkText = 'rgba(255, 255, 255, 0.85)',
  darkPrimaryText = 'rgba(255, 255, 255, 0.85)',
  darkSecondaryText = 'rgba(255, 255, 255, 0.45)',
  darkDisabledText = 'rgba(255, 255, 255, 0.3)',

  darkBoxShadow = '0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32), 0 9px 28px 8px rgba(0, 0, 0, 0.2)',
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
              primary: convert(generate(basePrimary)),

              secondary: convert(generate(baseSecondary)),

              success: convert(generate(baseSuccess)),

              warning: convert(generate(baseWarning)),

              error: convert(generate(baseError)),

              danger: convert(generate(baseDanger)),

              info: convert(generate(baseInfo)),

              red: convert(presetPalettes.red),

              volcano: convert(presetPalettes.volcano),

              orange: convert(presetPalettes.orange),

              gold: convert(presetPalettes.gold),

              yellow: convert(presetPalettes.yellow),

              lime: convert(presetPalettes.lime),

              green: convert(presetPalettes.green),

              cyan: convert(presetPalettes.cyan),

              blue: convert(presetPalettes.blue),

              geekblue: convert(presetPalettes.geekblue),

              purple: convert(presetPalettes.purple),

              magenta: convert(presetPalettes.magenta),

              gray: {
                DEFAULT: '#8c8c8c',
                1: '#ffffff',
                2: '#fafafa',
                3: '#f5f5f5',
                4: '#f0f0f0',
                5: '#d9d9d9',
                6: '#bfbfbf',
                7: '#8c8c8c',
                8: '#595959',
                9: '#434343',
                10: '#262626',
                11: '#1f1f1f',
                12: '#141414',
                13: '#000000',
                hover: '#bfbfbf',
                active: '#595959',
                'lighten-6': '#ffffff',
                'light-6': '#ffffff',
                'lighten-5': '#fafafa',
                'light-5': '#fafafa',
                'lighten-4': '#f5f5f5',
                'light-4': '#f5f5f5',
                'lighten-3': '#f0f0f0',
                'light-3': '#f0f0f0',
                'lighten-2': '#d9d9d9',
                'light-2': '#d9d9d9',
                'lighten-1': '#bfbfbf',
                'light-1': '#bfbfbf',
                'darken-1': '#595959',
                'dark-1': '#595959',
                'darken-2': '#434343',
                'dark-2': '#434343',
                'darken-3': '#262626',
                'dark-3': '#262626',
                'darken-4': '#1f1f1f',
                'dark-4': '#1f1f1f',
                'darken-5': '#141414',
                'dark-5': '#141414',
                'darken-6': '#000000',
                'dark-6': '#000000',
              },

              grey: {
                DEFAULT: '#8c8c8c',
                1: '#ffffff',
                2: '#fafafa',
                3: '#f5f5f5',
                4: '#f0f0f0',
                5: '#d9d9d9',
                6: '#bfbfbf',
                7: '#8c8c8c',
                8: '#595959',
                9: '#434343',
                10: '#262626',
                11: '#1f1f1f',
                12: '#141414',
                13: '#000000',
                hover: '#bfbfbf',
                active: '#595959',
                'lighten-6': '#ffffff',
                'light-6': '#ffffff',
                'lighten-5': '#fafafa',
                'light-5': '#fafafa',
                'lighten-4': '#f5f5f5',
                'light-4': '#f5f5f5',
                'lighten-3': '#f0f0f0',
                'light-3': '#f0f0f0',
                'lighten-2': '#d9d9d9',
                'light-2': '#d9d9d9',
                'lighten-1': '#bfbfbf',
                'light-1': '#bfbfbf',
                'darken-1': '#595959',
                'dark-1': '#595959',
                'darken-2': '#434343',
                'dark-2': '#434343',
                'darken-3': '#262626',
                'dark-3': '#262626',
                'darken-4': '#1f1f1f',
                'dark-4': '#1f1f1f',
                'darken-5': '#141414',
                'dark-5': '#141414',
                'darken-6': '#000000',
                'dark-6': '#000000',
              },
            },

            backgroundColor: {
              DEFAULT: baseBg,
              mask: baseMaskBg,
              disabled: baseDisabledBg,
            },

            borderColor: {
              DEFAULT: baseBorder,
            },

            textColor: {
              DEFAULT: baseText,
              'primary-text': basePrimaryText,
              'secondary-text': baseSecondaryText,
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
              primary: convert(generate(darkPrimary, { theme: 'dark', backgroundColor: darkBg })),

              secondary: convert(
                generate(darkSecondary, { theme: 'dark', backgroundColor: darkBg }),
              ),

              success: convert(generate(darkSuccess, { theme: 'dark', backgroundColor: darkBg })),

              warning: convert(generate(darkWarning, { theme: 'dark', backgroundColor: darkBg })),

              error: convert(generate(darkError, { theme: 'dark', backgroundColor: darkBg })),

              danger: convert(generate(darkDanger, { theme: 'dark', backgroundColor: darkBg })),

              info: convert(generate(darkInfo, { theme: 'dark', backgroundColor: darkBg })),

              red: convert(presetDarkPalettes.red),

              volcano: convert(presetDarkPalettes.volcano),

              orange: convert(presetDarkPalettes.orange),

              gold: convert(presetDarkPalettes.gold),

              yellow: convert(presetDarkPalettes.yellow),

              lime: convert(presetDarkPalettes.lime),

              green: convert(presetDarkPalettes.green),

              cyan: convert(presetDarkPalettes.cyan),

              blue: convert(presetDarkPalettes.blue),

              geekblue: convert(presetDarkPalettes.geekblue),

              purple: convert(presetDarkPalettes.purple),

              magenta: convert(presetDarkPalettes.magenta),
            },

            backgroundColor: {
              DEFAULT: darkBg,
              mask: darkMaskBg,
              disabled: darkDisabledBg,
            },

            borderColor: {
              DEFAULT: darkBorder,
            },

            textColor: {
              DEFAULT: darkText,
              'primary-text': darkPrimaryText,
              'secondary-text': darkSecondaryText,
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
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
      '2xl': '1600px',
    },
    extend: {
      fontFamily: {
        DEFAULT: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
});

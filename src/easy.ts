// @ts-ignore
import themeSwapper from 'tailwindcss-theme-swapper';
import { Config } from './types';

export default ({ selectors = ['.easy'], mediaQuery = '', fontSize = '24px' } = {}): Config => ({
  plugins: [
    themeSwapper({
      themes: [
        {
          name: 'base',
          selectors,
          mediaQuery,
          theme: {
            fontSize: {
              DEFAULT: fontSize,
            },
          },
        },
      ],
    }),
  ],
  theme: {},
});

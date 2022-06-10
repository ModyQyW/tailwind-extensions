// @ts-ignore
import themeSwapper from 'tailwindcss-theme-swapper';
import type { OptionalConfig } from 'tailwindcss/types/config';

type Config = Partial<OptionalConfig>;

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

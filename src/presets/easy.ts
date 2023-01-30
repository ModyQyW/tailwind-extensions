// @ts-expect-error no types
import themeSwapper from 'tailwindcss-theme-swapper';
import { Config } from 'tailwindcss';

export const easyPreset = ({
  selectors = ['.easy'],
  mediaQuery = '',
  fontSize = '24px',
} = {}): Config => ({
  content: [],
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
});

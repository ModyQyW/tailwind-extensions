// @ts-ignore
import themeSwapper from 'tailwindcss-theme-swapper';
import type { TailwindConfig } from 'tailwindcss/tailwind-config';

export default ({
  selectors = ['.easy'],
  mediaQuery = '',
  fontSize = '24px',
} = {}): TailwindConfig => ({
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

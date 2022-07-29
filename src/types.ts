import type Color from 'color';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ColorParam = Color | string | ArrayLike<number> | number | { [key: string]: any };

import type { Config as TailwindcssConfig } from 'tailwindcss';

export type Config = Partial<TailwindcssConfig>;

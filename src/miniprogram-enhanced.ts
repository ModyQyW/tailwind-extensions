import { Config } from './types';
import miniprogram from './miniprogram';

const config: Config = {
  ...miniprogram,
  separator: '_',
  theme: {
    ...miniprogram.theme,
    screens: {},
  },
};

export default config;

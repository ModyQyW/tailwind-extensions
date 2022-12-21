# tailwind-extensions

[![npm](https://img.shields.io/npm/v/tailwind-extensions)](https://www.npmjs.com/package/tailwind-extensions)

[![GitHub license](https://img.shields.io/github/license/ModyQyW/tailwind-extensions)](https://github.com/ModyQyW/tailwind-extensions/blob/main/LICENSE)

English | [简体中文](./README.zh-hans.md)

Opinionated TailwindCSS v3 extensions. Requires `node >= 14.18`.

- TailwindCSS v3 enhanced preset for default config.
- TailwindCSS v3 and [Ant Design](https://ant.design/) compat preset
- TailwindCSS v3 and [element-plus](https://element-plus.org/) compat preset
- TailwindCSS v3 and miniprogram compat preset
- TailwindCSS v3 and easy mode compat preset

## Usage

```sh
npm install tailwind-extensions
```

Then update your TailwindCSS config.

### Presets

#### `basePreset`

This preset enhances TailwindCSS default config of TailwindCSS. With this preset you can reduce the use of arbitrary values to keep your attention focused and improve code cleanliness.

```js
const { basePreset } = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [basePreset],
};
```

Check out [UnoCss](https://github.com/unocss/unocss) if you have a stronger need for arbitrary values.

#### `antDesignV4Preset`

This preset provides `Ant Design` colors compat config.

```js
const { basePreset, antDesignV4Preset } = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    antDesignV4Preset({
      /** Base */
      baseSelectors = [':root'],
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
    }),
  ],
};
```

When using this preset, you need to control when to add `class="dark"` to the page container element. [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) and [VueUse useDark](https://vueuse.org/core/usedark/) are recommended.

`@tailwind base` styles may conflict with the styles associated with the `Ant Design` specification. Please refer to the example below for adjustments.

```ts
// project entry main.ts

// custom preflight 1
import './styles/preflight1.css';

// third-party preflight
import 'modern-normalize';

// TailwindCSS base
import './styles/tailwind-base.css';

// custom preflight 2
import './styles/preflight2.css';

// antd styles
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';

// ant-design-vue styles
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';

// TailwindCSS components + utilities
// maybe override antd / ant-design-vue preflight if move TailwindCSS base here
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/tailwind-base.css */
@tailwind base;
```

```css
/* styles/preflight2.css */
html,
page {
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

#### `elementPlusPreset`

This preset provides `element-plus` colors compat config.

```js
const { basePreset, elementPlusPreset} = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    elementPlusPreset({
      /** Base */
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
    }),
  ],
};
```

When using this preset, you need to control when to add `class="dark"` to the page container element. [VueUse useDark](https://vueuse.org/core/usedark/) is recommended.

`@tailwind base` styles may conflict with the `element-plus` styles. Please refer to the example below for adjustments.

```ts
// project entry main.ts

// custom preflight 1
import './styles/preflight1.css';

// third-party preflight
import 'modern-normalize';

// TailwindCSS base
import './styles/tailwind-base.css';

// custom preflight 2
import './styles/preflight2.css';

// element-plus styles
import 'element-plus/dist/index.css';

// TailwindCSS components + utilities
// maybe override element-plus preflight if move TailwindCSS base here
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/tailwind-base.css */
@tailwind base;
```

```css
/* styles/preflight2.css */
html,
page {
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

#### `miniprogramBasePreset`

This preset enhances TailwindCSS default config of TailwindCSS, providing key-value pairs related to `rpx`, only for miniprogram.

```js
const { basePreset, miniprogramBasePreset } = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    miniprogramBasePreset,
  ],
};
```

Be sure to include `page` in `baseSelectors` if you use another preset and that preset can accept `baseSelectors` for configuration, as miniprogram may not recognize the `:root` style.

`@tailwind base` styles cannot run in miniprogram. Please use [mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind), [vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind) or others to deal with it.

#### `easyPreset`

This preset provides easy mode compat config.

```js
const { basePreset, easyPreset } = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    easyPreset({
      selectors: ['.easy'],
      mediaQuery: '',
      fontSize: '24px',
    }),
  ],
};
```

When using this preset, you need to control when to add `class="easy"` to the page container element. Refer to [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) and [VueUse useDark](https://vueuse.org/core/usedark/).

To make sure the preset takes effect, please refer to the example below for adjustments.

```ts
// project entry main.ts

// custom preflight 1
import './styles/preflight1.css';

// third-party preflight
import 'modern-normalize';

// TailwindCSS base
import './styles/tailwind-base.css';

// custom preflight 2
import './styles/preflight2.css';

// UI library styles
// import 'xx/yy.css';

// TailwindCSS base + components + utilities
// maybe override UI library preflight if move TailwindCSS base here
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/tailwind-base.css */
@tailwind base;
```

```css
/* styles/preflight2.css */
html,
page {
  /* Should add !important in miniprogram to make sure it works */
  font-size: var(--font-size, 16px);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

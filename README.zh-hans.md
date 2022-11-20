# tailwind-extensions

[![npm](https://img.shields.io/npm/v/tailwind-extensions)](https://www.npmjs.com/package/tailwind-extensions)

[![GitHub license](https://img.shields.io/github/license/ModyQyW/tailwind-extensions)](https://github.com/ModyQyW/tailwind-extensions/blob/main/LICENSE)

[English](./README.md) | 简体中文

开箱即用的 TailwindCSS v3 扩展。

- TailwindCSS v3 默认预设的增强预设
- TailwindCSS v3 和 [Ant Design](https://ant.design/) 的适配预设
- TailwindCSS v3 和 [element-plus](https://element-plus.org/) 的适配预设
- TailwindCSS v3 和小程序的适配预设
- TailwindCSS v3 关怀模式适配预设

## Usage

```sh
npm install tailwind-extensions
```

然后更新你的 TailwindCSS 配置。

### 预设

#### `basePreset`

这个预设增强了 TailwindCSS 的默认配置。使用这个预设你可以减少使用动态值，以保持注意力专注并提高代码整洁程度。

```js
const { basePreset } = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [basePreset],
};
```

如果你有更强的动态值需求，请查看 [UnoCss](https://github.com/unocss/unocss)。

#### `antDesignPreset`

这个预设提供了和 `Ant Design` 适配的颜色配置。

```js
const { basePreset, antDesignPreset } = require('tailwind-extensions');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    antDesignPreset({
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

使用这个预设时，需要自行控制何时在页面容器元素添加 `class="dark"`。推荐使用 [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) 或 [VueUse useDark](https://vueuse.org/core/usedark/)。

`@tailwind base` 生成的样式可能会和 `Ant Design` 规范相关的样式冲突，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 自定义 preflight 1
import './styles/preflight1.css';

// 第三方 preflight
import 'modern-normalize';

// TailwindCSS base
import './styles/tailwind-base.css';

// 自定义 preflight 2
import './styles/preflight2.css';

// antd 样式
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';

// ant-design-vue 样式
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';

// TailwindCSS components + utilities
// 如果把 TailwindCSS base 移动到这里可能会覆盖 antd / ant-design-vue preflight
import './styles/tailwind.css';

// 其它你需要的全局样式
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

这个预设提供了和 `element-plus` 适配的颜色配置。

```js
const { basePreset, elementPlusPreset } = require('tailwind-extensions');

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

使用这个预设时，需要自行控制何时在页面容器元素添加 `class="dark"`。推荐使用 [VueUse useDark](https://vueuse.org/core/usedark/)。

`@tailwind base` 生成的样式可能会和 `element-plus` 样式冲突，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 自定义 preflight 1
import './styles/preflight1.css';

// 第三方 preflight
import 'modern-normalize';

// TailwindCSS base
import './styles/tailwind-base.css';

// 自定义 preflight 2
import './styles/preflight2.css';

// element-plus 样式
import 'element-plus/dist/index.css';

// TailwindCSS components + utilities
// 如果把 TailwindCSS base 移动到这里可能会覆盖 element-plus preflight
import './styles/tailwind.css';

// 其它你需要的全局样式
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

这个预设增强了 TailwindCSS 的默认配置，提供了 `rpx` 相关的键值对，专供小程序使用。

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

如果你使用了其它可以传入 `baseSelectors` 的预设，建议在 `baseSelectors` 内包含 `page` 元素，这是因为小程序可能不能识别 `:root` 样式，指定小程序的根元素 `page` 作为兜底。

`@tailwind base` 生成的样式不能正常运行在小程序上，请使用 [mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind)、[vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind) 等处理。

#### `easyPreset`

这个预设提供了关怀模式相关的配置。[查看预设](./src/easy.ts)

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

使用这个预设时，需要自行控制何时在页面容器元素添加 `class="easy"`。请参考 [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) 或 [VueUse useDark](https://vueuse.org/core/usedark/)。

为了保证预设生效，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 自定义 preflight 1
import './styles/preflight1.css';

// 第三方 preflight
import 'modern-normalize';

// TailwindCSS base
import './styles/tailwind-base.css';

// custom preflight 2
import './styles/preflight2.css';

// UI 库样式
// import 'xx/yy.css';

// TailwindCSS components + utilities
// 如果把 TailwindCSS base 移动到这里可能会覆盖 UI 库 preflight
import './styles/tailwind.css';

// 其它你需要的全局样式
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
  /* 在小程序，需要增加 !important 保证不会被框架自带样式覆盖 */
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

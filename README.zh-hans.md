# @modyqyw/tailwind-presets

[![npm](https://img.shields.io/npm/v/@modyqyw/tailwind-presets)](https://www.npmjs.com/package/@modyqyw/tailwind-presets)
[![GitHub license](https://img.shields.io/github/license/ModyQyW/tailwind-presets)](https://github.com/ModyQyW/tailwind-presets/blob/main/LICENSE)

[English](./README.md) | 简体中文

开箱即用的 TailwindCSS v3 预设。

提供了 TailwindCSS v3 和不同 UI 库 / 小程序的适配。

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

然后更新你的 TailwindCSS 配置。

### base

这个预设扩展了 TailwindCSS 的默认配置。[查看预设](./src/base.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [basePreset],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>TailwindCSS 默认配置已经满足了绝大部分情况。但在 <strong>需要高度定制的情景</strong> 下，大量使用 <code>[xxx]</code> 会分散注意力并降低代码整洁程度。</p>
  <p>这个预设考虑了该情景。使用这个预设后，你应该可以减少 <code>[xxx]</code> 的使用量。</p>
  <p>如果你不是非使用 Tailwind 不可，建议使用 <a href="https://windicss.org/" target="_blank">WindiCSS</a> 和 <a href="https://github.com/unocss/unocss" target="_blank">UnoCSS</a>。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>扩展了 <code>columns</code>。</li>
    <li>扩展了 <code>spacing</code>。</li>
    <li>扩展了 <code>blur</code>。</li>
    <li>扩展了 <code>brightness</code>。</li>
    <li>扩展了 <code>borderRadius</code>。</li>
    <li>扩展了 <code>borderWidth</code>。</li>
    <li>扩展了 <code>contrast</code>。</li>
    <li>扩展了 <code>hueRotate</code>。</li>
    <li>扩展了 <code>flexBasis</code>。</li>
    <li>扩展了 <code>flexGrow</code>。</li>
    <li>扩展了 <code>flexShrink</code>。</li>
    <li>扩展了 <code>fontSize</code>。</li>
    <li>扩展了 <code>fontWeight</code>。</li>
    <li>扩展了 <code>gridColumn</code>。</li>
    <li>扩展了 <code>gridColumnEnd</code>。</li>
    <li>扩展了 <code>gridColumnStart</code>。</li>
    <li>扩展了 <code>gridRow</code>。</li>
    <li>扩展了 <code>gridRowStart</code>。</li>
    <li>扩展了 <code>gridRowEnd</code>。</li>
    <li>扩展了 <code>gridTemplateColumns</code>。</li>
    <li>扩展了 <code>gridTemplateRows</code>。</li>
    <li>扩展了 <code>height</code>。</li>
    <li>扩展了 <code>inset</code>。</li>
    <li>扩展了 <code>lineHeight</code>。</li>
    <li>扩展了 <code>maxHeight</code>。</li>
    <li>扩展了 <code>maxWidth</code>。</li>
    <li>扩展了 <code>minHeight</code>。</li>
    <li>扩展了 <code>minWidth</code>。</li>
    <li>扩展了 <code>opacity</code>。</li>
    <li>扩展了 <code>order</code>。</li>
    <li>扩展了 <code>outlineOffset</code>。</li>
    <li>扩展了 <code>outlineWidth</code>。</li>
    <li>扩展了 <code>ringOffsetWidth</code>。</li>
    <li>扩展了 <code>ringWidth</code>。</li>
    <li>扩展了 <code>rotate</code>。</li>
    <li>扩展了 <code>saturate</code>。</li>
    <li>扩展了 <code>scale</code>。</li>
    <li>扩展了 <code>skew</code>。</li>
    <li>扩展了 <code>textDecorationThickness</code>。</li>
    <li>扩展了 <code>textUnderlineOffset</code>。</li>
    <li>扩展了 <code>transitionDelay</code>。</li>
    <li>扩展了 <code>transitionDuration</code>。</li>
    <li>扩展了 <code>translate</code>。</li>
    <li>扩展了 <code>width</code>。</li>
    <li>扩展了 <code>zIndex</code>。</li>
  </ul>
</details>

### ant-design

这个预设提供了 `Ant Design` 相关的配置。[查看预设](./src/ant-design.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    getAntDesignPreset({
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
    }),
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在使用遵循 <code>Ant Design</code> 规范相关的样式库，比如 <code>antd</code> 和 <code>ant-design-vue</code>，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>设置 <code>darkMode</code> 为 <code>class</code>。</li>
    <li>设置 <code>safelist</code> 为 <code>['dark']</code>。</li>
    <li>替换了 <code>screens</code>。</li>
    <li>扩展了 <code>colors</code>。</li>
    <li>扩展了 <code>backgroundColor</code>。</li>
    <li>扩展了 <code>borderColor</code>。</li>
    <li>扩展了 <code>fontFamily</code>。</li>
    <li>扩展了 <code>textColor</code>。</li>
    <li>扩展了 <code>boxShadow</code>。</li>
  </ul>
</details>

#### 额外配置

在使用这个预设时，需要自行控制何时在页面容器元素添加 `class="dark"`。推荐使用 [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) 或 [VueUse useDark](https://vueuse.org/core/usedark/)。

TailwindCSS 的 `preflight` 可能会和 `Ant Design` 规范相关的样式冲突，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// antd 样式
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';

// ant-design-vue 样式
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html,
  page {
    font-size: var(--font-size, 16px);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

### element-plus

这个预设提供了 `element-plus` 相关的配置。[查看预设](./src/element-plus.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    getElementPlusPreset({
      /** Base */
      baseSelectors = [':root', 'page'],
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

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在使用 <code>element-plus</code>，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>设置 <code>darkMode</code> 为 <code>class</code>。</li>
    <li>设置 <code>safelist</code> 为 <code>['dark']</code>。</li>
    <li>替换了 <code>screens</code>。</li>
    <li>扩展了 <code>colors</code>。</li>
    <li>扩展了 <code>backgroundColor</code>。</li>
    <li>扩展了 <code>borderColor</code>。</li>
    <li>扩展了 <code>textColor</code>。</li>
    <li>扩展了 <code>fontFamily</code>。</li>
    <li>扩展了 <code>boxShadow</code>。</li>
  </ul>
</details>

#### 额外配置

在使用这个预设时，需要自行控制何时在页面容器元素添加 `class="dark"`。推荐使用 [VueUse useDark](https://vueuse.org/core/usedark/)。

TailwindCSS 的 `preflight` 可能会和 `element-plus` 样式冲突，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// element-plus 样式
import 'element-plus/dist/index.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html,
  page {
    font-size: var(--font-size, 16px);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

### miniprogram

这个预设扩展了 TailwindCSS 的小程序专用默认配置。[查看预设](./src/miniprogram.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const miniprogramPreset = require('@modyqyw/tailwind-presets/miniprogram').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    miniprogramPreset,
  ],
};
```

**注意：如果你使用了其它预设，并且该预设可以传入 `baseSelectors` 以进行配置，务必将 `page` 纳入 `baseSelectors` 内（默认行为），这是因为小程序可能不能识别 `:root` 样式。**

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在开发小程序，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>扩展了 <code>spacing</code>。</li>
    <li>扩展了 <code>borderRadius</code>。</li>
    <li>扩展了 <code>borderWidth</code>。</li>
    <li>扩展了 <code>flexBasis</code>。</li>
    <li>扩展了 <code>height</code>。</li>
    <li>扩展了 <code>inset</code>。</li>
    <li>扩展了 <code>translate</code>。</li>
    <li>扩展了 <code>width</code>。</li>
  </ul>
</details>

#### 额外配置

TailwindCSS 的 `base` 生成的样式代码包含了小程序不支持的选择器 `*` 和标签，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// UI 库样式
// import 'xx/yy.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html,
  page {
    font-size: var(--font-size, 16px);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  button::after {
    all: unset;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

```js
// postcss 配置文件，如 .postcssrc.cjs
// 替换 @tailwind base 中包含的选择器
module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 3,
    },
    'postcss-selector-replace': {
      before: ['html', 'body', 'img', 'span', /^a$/, '*'],
      after: [
        'html,page',
        'body,page',
        'img,image',
        'span,text',
        'a,functional-page-navigator,navigator',
        'html,body,page,cover-image,cover-view,match-media,movable-area,movable-view,scroll-view,swiper,swiper-item,view,icon,progress,rich-text,text,button,checkbox,checkbox-group,editor,form,input,label,picker,picker-view,picker-view-column,radio,radio-group,slider,switch,textarea,functional-page-navigator,navigator,audio,camera,image,live-player,live-pusher,video,voip-room,map,canvas,ad,ad-custom,official-account,open-data,web-view,navigation-bar,page-meta',
      ],
    },
  },
};
```

**注意：你依然不能使用带有 `!`、`:` 等带有特殊符号的类。如果想要突破这些限制，请查看 [vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind)、[mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind)、[unocss-preset-uni](https://github.com/zguolee/unocss-preset-uni)、[unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) 等项目。**

### miniprogram-enhanced

这个预设在 `miniprogram` 的基础上增加了两项配置。[查看预设](./src/miniprogram-enhanced.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const miniprogramEnhancedPreset = require('@modyqyw/tailwind-presets/miniprogram-enhanced').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    miniprogramEnhancedPreset,
  ],
};
```

**注意：如果你使用了其它预设，并且该预设可以传入 `baseSelectors` 以进行配置，务必将 `page` 纳入 `baseSelectors` 内（默认行为），这是因为小程序可能不能识别 `:root` 样式。**

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在开发小程序，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>（额外新增）禁用了 <code>screens</code>。</li>
    <li>（额外新增）替换了 <code>separator</code>。</li>
    <li>扩展了 <code>spacing</code>。</li>
    <li>扩展了 <code>borderRadius</code>。</li>
    <li>扩展了 <code>borderWidth</code>。</li>
    <li>扩展了 <code>flexBasis</code>。</li>
    <li>扩展了 <code>height</code>。</li>
    <li>扩展了 <code>inset</code>。</li>
    <li>扩展了 <code>translate</code>。</li>
    <li>扩展了 <code>width</code>。</li>
  </ul>
</details>

#### 额外配置

TailwindCSS 的 `base` 生成的样式代码包含了小程序不支持的选择器 `*` 和标签，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// UI 库样式
// import 'xx/yy.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html,
  page {
    font-size: var(--font-size, 16px);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  button::after {
    all: unset;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

```js
// postcss 配置文件，如 .postcssrc.cjs
// 替换 @tailwind base 中包含的选择器
module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 3,
    },
    'postcss-selector-replace': {
      before: ['html', 'body', 'img', 'span', /^a$/, '*'],
      after: [
        'html,page',
        'body,page',
        'img,image',
        'span,text',
        'a,functional-page-navigator,navigator',
        'html,body,page,cover-image,cover-view,match-media,movable-area,movable-view,scroll-view,swiper,swiper-item,view,icon,progress,rich-text,text,button,checkbox,checkbox-group,editor,form,input,label,picker,picker-view,picker-view-column,radio,radio-group,slider,switch,textarea,functional-page-navigator,navigator,audio,camera,image,live-player,live-pusher,video,voip-room,map,canvas,ad,ad-custom,official-account,open-data,web-view,navigation-bar,page-meta',
      ],
    },
  },
};
```

**注意：你依然不能使用带有 `!`、`:` 等带有特殊符号的类。如果想要突破这些限制，请查看 [vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind)、[mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind)、[unocss-preset-uni](https://github.com/zguolee/unocss-preset-uni)、[unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) 等项目。**

### easy

这个预设提供了关怀模式相关的配置。[查看预设](./src/easy.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getEasyPreset = require('@modyqyw/tailwind-presets/easy').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [
    basePreset,
    getEasyPreset({
      selectors: ['.easy'],
      mediaQuery: '',
      fontSize: '24px',
    }),
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在开发关怀模式，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>扩展了 <code>fontSize</code>。</li>
  </ul>
</details>

#### 额外配置

在使用这个预设时，需要自行控制何时在页面容器元素添加 `class="easy"`。请参考 [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) 或 [VueUse useDark](https://vueuse.org/core/usedark/)。

为了保证预设生效，请参考下面的例子做调整。

```ts
// 项目入口文件，如 main.ts

// 额外的 preflight
import 'modern-normalize';

// TailwindCSS base 和自定义 preflight
import './styles/preflight.css';

// UI 库样式
// import 'xx/yy.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// 其它你需要的全局样式
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html,
  page {
    font-size: var(--font-size, 16px);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

```css
/* styles/tailwind.css */
@tailwind components;
@tailwind utilities;
```

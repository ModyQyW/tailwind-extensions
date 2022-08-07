# @modyqyw/tailwind-presets

[![npm](https://img.shields.io/npm/v/@modyqyw/tailwind-presets)](https://www.npmjs.com/package/@modyqyw/tailwind-presets)
[![GitHub license](https://img.shields.io/github/license/ModyQyW/tailwind-presets)](https://github.com/ModyQyW/tailwind-presets/blob/main/LICENSE)

English | [简体中文](./README.zh-hans.md)

Opinionated TailwindCSS v3 presets. Adaptation of TailwindCSS v3 to different UI libraries is also provided.

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

Then update your TailwindCSS config.

### base

This preset extends the default configuration of TailwindCSS. [View Preset](./src/base.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  presets: [basePreset],
};
```

<details>
  <summary>When might I use this preset?</summary>
  <p>The TailwindCSS default configuration is sufficient for most cases. However, in situations where <strong>a high degree of customization is required</strong>, heavy use of <code>[xxx]</code> can be distracting and reduce code cleanliness.</p>
  <p>This preset considers these situations. You should be able to reduce the use of <code> [xxx] </code> after using this preset.</p>
  <p>Recommend <a href="https://windicss.org/" target="_blank">WindiCSS</a> and <a href="https://github.com/unocss/unocss" target="_blank">UnoCSS</a> besides TailwindCSS.</p>
</details>

<details>
  <summary>I would like to know what this preset has probably done.</summary>
  <ul>
    <li>Extend <code>columns</code>.</li>
    <li>Extend <code>spacing</code>.</li>
    <li>Extend <code>blur</code>.</li>
    <li>Extend <code>brightness</code>.</li>
    <li>Extend <code>borderRadius</code>.</li>
    <li>Extend <code>borderWidth</code>.</li>
    <li>Extend <code>contrast</code>.</li>
    <li>Extend <code>hueRotate</code>.</li>
    <li>Extend <code>flexBasis</code>.</li>
    <li>Extend <code>flexGrow</code>.</li>
    <li>Extend <code>flexShrink</code>.</li>
    <li>Extend <code>fontSize</code>.</li>
    <li>Extend <code>fontWeight</code>.</li>
    <li>Extend <code>gridColumn</code>.</li>
    <li>Extend <code>gridColumnEnd</code>.</li>
    <li>Extend <code>gridColumnStart</code>.</li>
    <li>Extend <code>gridRow</code>.</li>
    <li>Extend <code>gridRowStart</code>.</li>
    <li>Extend <code>gridRowEnd</code>.</li>
    <li>Extend <code>gridTemplateColumns</code>.</li>
    <li>Extend <code>gridTemplateRows</code>.</li>
    <li>Extend <code>height</code>.</li>
    <li>Extend <code>inset</code>.</li>
    <li>Extend <code>lineHeight</code>.</li>
    <li>Extend <code>maxHeight</code>.</li>
    <li>Extend <code>maxWidth</code>.</li>
    <li>Extend <code>minHeight</code>.</li>
    <li>Extend <code>minWidth</code>.</li>
    <li>Extend <code>opacity</code>.</li>
    <li>Extend <code>order</code>.</li>
    <li>Extend <code>outlineOffset</code>.</li>
    <li>Extend <code>outlineWidth</code>.</li>
    <li>Extend <code>ringOffsetWidth</code>.</li>
    <li>Extend <code>ringWidth</code>.</li>
    <li>Extend <code>rotate</code>.</li>
    <li>Extend <code>saturate</code>.</li>
    <li>Extend <code>scale</code>.</li>
    <li>Extend <code>skew</code>.</li>
    <li>Extend <code>textDecorationThickness</code>.</li>
    <li>Extend <code>textUnderlineOffset</code>.</li>
    <li>Extend <code>transitionDelay</code>.</li>
    <li>Extend <code>transitionDuration</code>.</li>
    <li>Extend <code>translate</code>.</li>
    <li>Extend <code>width</code>.</li>
    <li>Extend <code>zIndex</code>.</li>
  </ul>
</details>

### ant-design

This preset provides configurations related to `Ant Design`. [View Preset](./src/base.ts)

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

<details>
  <summary>When might I use this preset?</summary>
  <p>This preset will be useful if you are using some UI libraries following <code>Ant Design</code> (e.g. <code>antd</code> and <code>ant-design-vue</code>) and TailwindCSS.</p>
</details>

<details>
  <summary>I would like to know what this preset has probably done.</summary>
  <ul>
    <li>Set <code>darkMode</code> to <code>class</code>.</li>
    <li>Set <code>safelist</code> to <code>['dark']</code>.</li>
    <li>Replace <code>screens</code>.</li>
    <li>Extend <code>colors</code>.</li>
    <li>Extend <code>backgroundColor</code>.</li>
    <li>Extend <code>borderColor</code>.</li>
    <li>Extend <code>fontFamily</code>.</li>
    <li>Extend <code>textColor</code>.</li>
    <li>Extend <code>boxShadow</code>.</li>
  </ul>
</details>

#### Extra Configs

When using this preset, you need to control when to add `class="dark"` to the page container element. [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) and [VueUse useDark](https://vueuse.org/core/usedark/) are recommended.

TailwindCSS `preflight` may conflict with the styles associated with the `Ant Design` specification. Please refer to the example below for adjustments.

```ts
// project entry main.ts

// extra preflight
import 'modern-normalize';

// TailwindCSS base and custom preflight
import './styles/preflight.css';

// antd styles
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';

// ant-design-vue styles
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html {
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

This preset provides configurations related to `element-plus`. [View Preset](./src/base.ts)

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

<details>
  <summary>When might I use this preset?</summary>
  <p>This preset will be useful if you are using <code>element-plus</code> and TailwindCSS.</p>
</details>

<details>
  <summary>I would like to know what this preset has probably done.</summary>
  <ul>
    <li>Set <code>darkMode</code> to <code>class</code>.</li>
    <li>Set <code>safelist</code> to <code>['dark']</code>.</li>
    <li>Replace <code>screens</code>.</li>
    <li>Extend <code>colors</code>.</li>
    <li>Extend <code>backgroundColor</code>.</li>
    <li>Extend <code>borderColor</code>.</li>
    <li>Extend <code>textColor</code>.</li>
    <li>Extend <code>fontFamily</code>.</li>
    <li>Extend <code>boxShadow</code>.</li>
  </ul>
</details>

#### Extra Configs

When using this preset, you need to control when to add `class="dark"` to the page container element. [VueUse useDark](https://vueuse.org/core/usedark/) is recommended.

TailwindCSS `preflight` may conflict with the `element-plus` styles. Please refer to the example below for adjustments.

```ts
// project entry main.ts

// extra preflight
import 'modern-normalize';

// TailwindCSS base and custom preflight
import './styles/preflight.css';

// element-plus styles
import 'element-plus/dist/index.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html {
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

This preset provides configurations related to miniprogram. [View Preset](./src/miniprogram.ts)

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

**Note: Be sure to include `page` in `baseSelectors` if you use another preset and that preset can accept `baseSelectors` for configuration, as miniprogram may not recognize the `:root` style.**

<details>
  <summary>When might I use this preset?</summary>
  <p>This preset will be useful if you are developing miniprogram with TailwindCSS.</p>
</details>

<details>
  <summary>I would like to know what this preset has probably done.</summary>
  <ul>
    <li>Disable <code>preflight</code>.</li>
    <li>Replace <code>separator</code>.</li>
    <li>Extend <code>spacing</code>.</li>
    <li>Extend <code>borderRadius</code>.</li>
    <li>Extend <code>borderWidth</code>.</li>
    <li>Extend <code>flexBasis</code>.</li>
    <li>Extend <code>height</code>.</li>
    <li>Extend <code>inset</code>.</li>
    <li>Extend <code>translate</code>.</li>
    <li>Extend <code>width</code>.</li>
  </ul>
</details>

#### Extra Configs

TailwindCSS `base` generated style code contains selectors `*` and tags that are not supported by miniprogram. Please refer to the example below for adjustments.

```ts
// project entry main.ts

// extra preflight
import 'modern-normalize';

// TailwindCSS base and custom preflight
import './styles/preflight.css';

// UI library styles
// import 'xx/yy.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html {
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
// postcss config file, e.g. .postcssrc.cjs
// replace selectors
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

### easy

This preset provides configurations related to miniprogram. [View Preset](./src/easy.ts)

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
  <summary>When might I use this preset?</summary>
  <p>This preset will be useful if you are developing easy mode with TailwindCSS.</p>
</details>

<details>
  <summary>I would like to know what this preset has probably done.</summary>
  <ul>
    <li>Extend <code>fontSize</code>.</li>
  </ul>
</details>

#### Extra Configs

When using this preset, you need to control when to add `class="easy"` to the page container element. Refer to [usehooks-ts useDarkMode](https://usehooks-ts.com/react-hook/use-dark-mode) and [VueUse useDark](https://vueuse.org/core/usedark/).

To make sure the preset takes effect, please refer to the example below for adjustments.

```ts
// project entry main.ts

// extra preflight
import 'modern-normalize';

// TailwindCSS base and custom preflight
import './styles/preflight.css';

// UI library styles
// import 'xx/yy.css';

// TailwindCSS components + utilities
import './styles/tailwind.css';

// any other global styles you need
import './styles/global.css';
```

```css
/* styles/preflight.css */
@tailwind base;

@layer base {
  html {
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

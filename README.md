# @modyqyw/tailwind-presets

English | [简体中文](./README.zh-hans.md)

**WIP**

Opinionated TailwindCSS v3 presets.

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

Then update your TailwindCSS config.

### base

This preset extends the default configuration of TailwindCSS. [View Preset](./src/base.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;

module.exports = {
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

module.exports = {
  presets: [
    basePreset,
    getAntDesignPreset({
      selectors: [':root'],
      mediaQuery: '',
      primary: '#1890ff',
      secondary: '#666666',
      success: '#52c41a',
      warning: '#faad14',
      error: '#f5222d',
      danger: '#f5222d',
      info: '#1890ff',
      bg: '#ffffff',
      disabledBg: '#f5f5f5',
      mask: 'rgba(0, 0, 0, 0.45)',
      border: '#d9d9d9',
      text: 'rgba(0, 0, 0, 0.85)',
      primaryText: 'rgba(0, 0, 0, 0.85)',
      secondaryText: 'rgba(0, 0, 0, 0.45)',
      disabledText: 'rgba(0, 0, 0, 0.25)',
      boxShadow:
        '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
      darkSelectors: ['.dark'],
      darkMediaQuery: '@media (prefers-color-scheme: dark)',
      darkPrimary: '#177ddc',
      darkSecondary: '#5a5a5a',
      darkSuccess: '#49aa19',
      darkWarning: '#d89614',
      darkError: '#d32029',
      darkDanger: '#d32029',
      darkInfo: '#177ddc',
      darkBg: '#141414',
      darkDisabledBg: 'rgba(255, 255, 255, 0.08)',
      darkMask: 'rgba(0, 0, 0, 0.45)',
      darkBorder: '#434343',
      darkText: 'rgba(255, 255, 255, 0.85)',
      darkPrimaryText: 'rgba(255, 255, 255, 0.85)',
      darkSecondaryText: 'rgba(255, 255, 255, 0.45)',
      darkDisabledText: 'rgba(255, 255, 255, 0.3)',
      darkBoxShadow:
        '0 3px 6px -4px rgba(0, 0, 0, 0.48), 0 6px 16px 0 rgba(0, 0, 0, 0.32), 0 9px 28px 8px rgba(0, 0, 0, 0.2)',
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
    <li>Disable <code>preflight</code>.</li>
    <li>Set <code>darkMode</code> to <code>class</code>.</li>
    <li>Set <code>safelist</code> to <code>['dark']</code>.</li>
    <li>Replace <code>screens</code>.</li>
    <li>Extend <code>colors</code>.</li>
    <li>Extend <code>borderColor</code>.</li>
    <li>Extend <code>fontFamily</code>.</li>
    <li>Extend <code>boxShadow</code>.</li>
  </ul>
</details>

#### Extra Configs

This preset disables `preflight`, because TailwindCSS `preflight` may conflict with styles associated with the `Ant Design` specification. Please refer to the following example.

```ts
// extra preflight
import 'modern-normalize';
// TailwindCSS partial preflight
import './styles/preflight.css';
// antd styles
import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.variable.min.css';
// ant-design-vue styles
import 'ant-design-vue/dist/antd.min.css';
// import 'ant-design-vue/dist/antd.variable.min.css';
// TailwindCSS
import './styles/tailwind.css';
```

```css
/* styles/preflight.css */
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--border-color, currentColor);
}

::before,
::after {
  --tw-content: '';
}
```

```css
/* styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### element-plus

This preset provides configurations related to `element-plus`. [View Preset](./src/base.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;

module.exports = {
  presets: [
    basePreset,
    getElementPlusPreset({
      selectors: [':root'],
      mediaQuery: '',
      primary: '#409eff',
      secondary: '#909399',
      success: '#67c23a',
      warning: '#e6a23c',
      error: '#f56c6c',
      danger: '#f56c6c',
      info: '#909399',
      bg: '#ffffff',
      disabledBg: '#f5f7fa',
      mask: 'rgba(255, 255, 255, 0.9)',
      border: '#dcdfe6',
      text: '#303133',
      primaryText: '#303133',
      regularText: '#606266',
      secondaryText: '#909399',
      placeholderText: '#a8abb2',
      disabledText: '#c0c4cc',
      boxShadow: '0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08)',
      darkSelectors: ['.dark'],
      darkMediaQuery: '@media (prefers-color-scheme: dark)',
      darkPrimary: '#409eff',
      darkSecondary: '#909399',
      darkSuccess: '#67c23a',
      darkWarning: '#e6a23c',
      darkError: '#f56c6c',
      darkDanger: '#f56c6c',
      darkInfo: '#909399',
      darkBg: '#141414',
      darkDisabledBg: 'transparent',
      darkMask: 'rgba(0, 0, 0, 0.8)',
      darkBorder: '#4c4d4f',
      darkText: '#e5eaf3',
      darkPrimaryText: '#e5eaf3',
      darkRegularText: '#cfd3dc',
      darkSecondaryText: '#a3a6ad',
      darkPlaceholderText: '#8d9095',
      darkDisabledText: '#6c6e72',
      darkBoxShadow: '0px 12px 32px 4px rgba(0, 0, 0, 0.36), 0px 8px 20px rgba(0, 0, 0, 0.72)',
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
    <li>Disable <code>preflight</code>.</li>
    <li>Set <code>darkMode</code> to <code>class</code>.</li>
    <li>Set <code>safelist</code> to <code>['dark']</code>.</li>
    <li>Replace <code>screens</code>.</li>
    <li>Extend <code>colors</code>.</li>
    <li>Extend <code>borderColor</code>.</li>
    <li>Extend <code>fontFamily</code>.</li>
    <li>Extend <code>boxShadow</code>.</li>
  </ul>
</details>

#### Extra Configs

This preset disables `preflight`, because TailwindCSS `preflight` may conflict with `element-plus` styles. Please refer to the following example.

```ts
// extra preflight
import 'modern-normalize';
// TailwindCSS partial preflight
import './styles/preflight.css';
// element-plus styles
import 'element-plus/dist/index.css';
// TailwindCSS
import './styles/tailwind.css';
```

```css
/* styles/preflight.css */
*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--border-color, currentColor);
}

::before,
::after {
  --tw-content: '';
}
```

```css
/* styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### miniprogram

This preset provides configurations related to miniprogram. [View Preset](./src/miniprogram.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
// const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;
// const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;
const miniprogramPreset = require('@modyqyw/tailwind-presets/miniprogram').default;

module.exports = {
  presets: [
    basePreset,
    // getAntDesignPreset({ ... }),
    // getElementPlusPreset({ ... }),
    miniprogramPreset,
  ],
};
```

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

Miniprogram does not support the styles generated by TailwindCSS `base` (including `preflight`). Please use [miniprogram-base.css](. /miniprogram-base.css) instead of TailwindCSS `base` (including `preflight`).

### easy

This preset provides configurations related to miniprogram. [View Preset](./src/easy.ts)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
// const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;
// const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;
// const miniprogramPreset = require('@modyqyw/tailwind-presets/miniprogram').default;
const easyPreset = require('@modyqyw/tailwind-presets/easy').default;

module.exports = {
  presets: [
    basePreset,
    // getAntDesignPreset({ ... }),
    // getElementPlusPreset({ ... }),
    // miniprogramPreset,
    easyPreset({
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

When using this preset, you need to control when to add `class="easy"` to the page container element, and you need to add `font-size` corresponding styles to the page container element.

Assuming that the page container element is `html`, the code is shown below.

```html
<html class="easy">
  ...
</html>
```

```css
html {
  font-size: var(--font-size, 16px);
}
```

You need to adjust it accordingly if you customized.

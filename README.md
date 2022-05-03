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

This preset extends the default configuration of TailwindCSS. [View Preset](./base.js)

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

This preset provides configurations related to `Ant Design`. [View Preset](./base.js)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;

module.exports = {
  presets: [
    basePreset,
    getAntDesignPreset({
      selectors: [':root'],
      mediaQuery: [],
      primary: '#1890ff',
      secondary: '#666666',
      success: '#52c41a',
      warning: '#faad14',
      error: '#f5222d',
      danger: '#f5222d',
      info: '#1890ff',
      text: 'rgba(0, 0, 0, 0.85)',
      primaryText: 'rgba(0, 0, 0, 0.85)',
      secondaryText: 'rgba(0, 0, 0, 0.45)',
      disabledText: 'rgba(0, 0, 0, 0.25)',
      bg: '#ffffff',
      disabledBg: '#f5f5f5',
      border: '#d9d9d9',
      mask: 'rgba(0, 0, 0, 0.45)',
      boxShadow:
        '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
      darkSelectors: ['.dark', '[dark]', '[data-theme="dark"]', '.is-dark', '[is-dark]'],
      darkMediaQuery: '@media (prefers-color-scheme: dark)',
      darkPrimary: '#177ddc',
      darkSecondary: '#5a5a5a',
      darkSuccess: '#49aa19',
      darkWarning: '#d89614',
      darkError: '#d32029',
      darkDanger: '#d32029',
      darkInfo: '#177ddc',
      darkText: 'rgba(255, 255, 255, 0.85)',
      darkPrimaryText: 'rgba(255, 255, 255, 0.85)',
      darkSecondaryText: 'rgba(255, 255, 255, 0.45)',
      darkDisabledText: 'rgba(255, 255, 255, 0.3)',
      darkBg: '#141414',
      darkDisabledBg: 'rgba(255, 255, 255, 0.08)',
      darkBorder: '#434343',
      darkMask: 'rgba(0, 0, 0, 0.45)',
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
    <li>Replace <code>screens</code>.</li>
    <li>Extend <code>colors</code>.</li>
    <li>Extend <code>borderColor</code>.</li>
    <li>Extend <code>fontFamily</code>.</li>
    <li>Extend <code>boxShadow</code>.</li>
  </ul>
</details>

### element-plus

This preset provides configurations related to `element-plus`. [View Preset](./base.js)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;

module.exports = {
  presets: [
    basePreset,
    getElementPlusPreset({
      selectors: [':root'],
      mediaQuery: [],
      primary: '#409eff',
      secondary: '#909399',
      success: '#67c23a',
      warning: '#e6a23c',
      error: '#f56c6c',
      danger: '#f56c6c',
      info: '#909399',
      text: '#303133',
      primaryText: '#303133',
      regularText: '#606266',
      secondaryText: '#909399',
      placeholderText: '#a8abb2',
      disabledText: '#c0c4cc',
      bg: '#ffffff',
      disabledBg: '#f5f7fa',
      border: '#dcdfe6',
      mask: 'rgba(255, 255, 255, .9)',
      boxShadow: '0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)',
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
    <li>Disable <code>preflight</code>. Recommend <a href="https://github.com/sindresorhus/modern-normalize" target="_blank">modern-normalize</a>.</li>
    <li>Replace <code>screens</code>.</li>
    <li>Extend <code>colors</code>.</li>
    <li>Extend <code>borderColor</code>.</li>
    <li>Extend <code>fontFamily</code>.</li>
    <li>Extend <code>boxShadow</code>.</li>
  </ul>
</details>

### miniprogram

This preset provides configurations related to miniprogram. [View Preset](./miniprogram.js)

```js
const basePreset = require('@modyqyw/tailwind-presets/base').default;
const getAntDesignPreset = require('@modyqyw/tailwind-presets/ant-design').default;
const getElementPlusPreset = require('@modyqyw/tailwind-presets/element-plus').default;
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

#### `@tailwind base;`

**DO NOT** use `@tailwind base;` and `preflight` because the generated styles contain `*` selectors and useless tags that are not supported by miniprogram. View [miniprogram-base.css](./miniprogram-base.css) if you need.

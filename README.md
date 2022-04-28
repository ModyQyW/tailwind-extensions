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
module.exports = {
  presets: [require('@modyqyw/tailwind-presets/base')],
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
    <li>Extend <code>columns</code>。</li>
    <li>Extend <code>spacing</code>。</li>
    <li>Extend <code>blur</code>。</li>
    <li>Extend <code>brightness</code>。</li>
    <li>Extend <code>borderRadius</code>。</li>
    <li>Extend <code>borderWidth</code>。</li>
    <li>Extend <code>contrast</code>。</li>
    <li>Extend <code>hueRotate</code>。</li>
    <li>Extend <code>flexBasis</code>。</li>
    <li>Extend <code>flexGrow</code>。</li>
    <li>Extend <code>flexShrink</code>。</li>
    <li>Extend <code>fontSize</code>。</li>
    <li>Extend <code>fontWeight</code>。</li>
    <li>Extend <code>gridColumn</code>。</li>
    <li>Extend <code>gridColumnEnd</code>。</li>
    <li>Extend <code>gridColumnStart</code>。</li>
    <li>Extend <code>gridRow</code>。</li>
    <li>Extend <code>gridRowStart</code>。</li>
    <li>Extend <code>gridRowEnd</code>。</li>
    <li>Extend <code>gridTemplateColumns</code>。</li>
    <li>Extend <code>gridTemplateRows</code>。</li>
    <li>Extend <code>height</code>。</li>
    <li>Extend <code>inset</code>。</li>
    <li>Extend <code>lineHeight</code>。</li>
    <li>Extend <code>maxHeight</code>。</li>
    <li>Extend <code>maxWidth</code>。</li>
    <li>Extend <code>minHeight</code>。</li>
    <li>Extend <code>minWidth</code>。</li>
    <li>Extend <code>opacity</code>。</li>
    <li>Extend <code>order</code>。</li>
    <li>Extend <code>outlineOffset</code>。</li>
    <li>Extend <code>outlineWidth</code>。</li>
    <li>Extend <code>ringOffsetWidth</code>。</li>
    <li>Extend <code>ringWidth</code>。</li>
    <li>Extend <code>rotate</code>。</li>
    <li>Extend <code>saturate</code>。</li>
    <li>Extend <code>scale</code>。</li>
    <li>Extend <code>skew</code>。</li>
    <li>Extend <code>textDecorationThickness</code>。</li>
    <li>Extend <code>textUnderlineOffset</code>。</li>
    <li>Extend <code>transitionDelay</code>。</li>
    <li>Extend <code>transitionDuration</code>。</li>
    <li>Extend <code>translate</code>。</li>
    <li>Extend <code>width</code>。</li>
    <li>Extend <code>zIndex</code>。</li>
  </ul>
</details>

### ant-design

This preset provides configurations related to `Ant Design`. [View Preset](./base.js)

```js
module.exports = {
  presets: [
    require('@modyqyw/tailwind-presets/base'),
    require('@modyqyw/tailwind-presets/ant-design'),
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
    <li>Disable <code>preflight</code>。</li>
    <li>Replace <code>screens</code>。</li>
    <li>Extends <code>colors</code>。</li>
    <li>Replace <code>borderColor.DEFAULT</code>。</li>
    <li>Extends <code>fontFamily</code>。</li>
    <li>Extends <code>boxShadow</code>。</li>
  </ul>
</details>

### element-plus

This preset provides configurations related to `element-plus`. [View Preset](./base.js)

```js
module.exports = {
  presets: [
    require('@modyqyw/tailwind-presets/base'),
    require('@modyqyw/tailwind-presets/element-plus'),
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
    <li>Replace <code>screens</code>。</li>
    <li>Extends <code>colors</code>。</li>
    <li>Replace <code>borderColor.DEFAULT</code>。</li>
    <li>Extends <code>fontFamily</code>。</li>
    <li>Extends <code>fontSize</code>。</li>
    <li>Extends <code>borderRadius</code>。</li>
    <li>Extends <code>boxShadow</code>。</li>
    <li>Extends <code>opacity</code>。</li>
  </ul>
</details>

### miniprogram

This preset provides configurations related to miniprogram. [View Preset](./miniprogram.js)

```js
module.exports = {
  presets: [
    require('@modyqyw/tailwind-presets/base'),
    require('@modyqyw/tailwind-presets/miniprogram'),
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
    <li>Disable <code>preflight</code>。</li>
    <li>Replace <code>separator</code>。</li>
    <li>Extends <code>spacing</code>。</li>
    <li>Extends <code>borderRadius</code>。</li>
    <li>Extends <code>borderWidth</code>。</li>
    <li>Extends <code>flexBasis</code>。</li>
    <li>Extends <code>height</code>。</li>
    <li>Extends <code>inset</code>。</li>
    <li>Extends <code>translate</code>。</li>
    <li>Extends <code>width</code>。</li>
  </ul>
</details>

#### preflight

View [miniprogram-preflight.css](./miniprogram-preflight.css) if you need.

#### `@tailwind base;`

**DO NOT** use `@tailwind base;` Because the generated styles contain `*` selectors that are not supported by miniprogram. View [miniprogram-base.css](./miniprogram-base.css) if you need.

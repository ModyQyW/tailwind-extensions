# @modyqyw/tailwind-presets

[English](./README.md) | 简体中文

**WIP**

开箱即用的 TailwindCSS v3 预设。

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

然后更新你的 TailwindCSS 配置。

### base

这个预设扩展了 TailwindCSS 的默认配置。[查看预设](./base.js)

```js
module.exports = {
  presets: [require('@modyqyw/tailwind-presets/base')],
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

这个预设提供了 `Ant Design` 相关的配置。[查看预设](./ant-design.js)

```js
module.exports = {
  presets: [
    require('@modyqyw/tailwind-presets/base'),
    require('@modyqyw/tailwind-presets/ant-design'),
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
    <li>禁用了 <code>preflight</code>。</li>
    <li>替换了 <code>screens</code>。</li>
    <li>扩展了 <code>colors</code>。</li>
    <li>扩展了 <code>borderColor</code>。</li>
    <li>扩展了 <code>fontFamily</code>。</li>
    <li>扩展了 <code>boxShadow</code>。</li>
  </ul>
</details>

### element-plus

这个预设提供了 `element-plus` 相关的配置。[查看预设](./element-plus.js)

```js
module.exports = {
  presets: [
    require('@modyqyw/tailwind-presets/base'),
    require('@modyqyw/tailwind-presets/element-plus'),
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
    <li>禁用了 <code>preflight</code>。建议使用 <a href="https://github.com/sindresorhus/modern-normalize" target="_blank">modern-normalize</a>。</li>
    <li>替换了 <code>screens</code>。</li>
    <li>扩展了 <code>colors</code>。</li>
    <li>扩展了 <code>borderColor</code>。</li>
    <li>扩展了 <code>fontFamily</code>。</li>
    <li>扩展了 <code>boxShadow</code>。</li>
  </ul>
</details>

### miniprogram

这个预设提供了小程序相关的配置。[查看预设](./miniprogram.js)

```js
module.exports = {
  presets: [
    require('@modyqyw/tailwind-presets/base'),
    require('@modyqyw/tailwind-presets/miniprogram'),
  ],
};
```

<details>
  <summary>我可能会在什么时候用到这个预设？</summary>
  <p>如果你在开发小程序，又想使用 TailwindCSS，这个预设很有用。</p>
</details>

<details>
  <summary>我想知道这个预设大概做了什么。</summary>
  <ul>
    <li>禁用了 <code>preflight</code>。</li>
    <li>替换了 <code>separator</code>。</li>
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

#### preflight

有需要请参考 [miniprogram-preflight.css](./miniprogram-preflight.css)。

#### 额外配置

**不要** 使用 `@tailwind base;`，因为其生成的样式中包含小程序不支持的 `*` 选择器。有需要请参考 [miniprogram-base.css](./miniprogram-base.css)。

# @modyqyw/tailwind-presets

[English](./README.md) | 简体中文

**WIP**

开箱即用的 Tailwind v3 预设。

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

然后更新你的 tailwind 配置。

### ant-design

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/ant-design')],
};

```

- 样式预检已经被禁用，因为 `antd` 和 `ant-design-vue` 本身带有样式预检。
- 替换 `screens` 为 `{ xs: '480px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1600px', '2xl': '1600px' }`。
- 扩展 `colors`、`fontFamily` 和 `boxShadow`。

查看 [ant-design.js](./ant-design.js) 获取细节。

### element-plus

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/element-plus')],
};

```

- 样式预检已经被禁用，因为可能会破坏 `element-plus` 样式。建议使用 [modern-normalize](https://github.com/sindresorhus/modern-normalize) 做样式预检。
- 替换 `screens` 为 `{ sm: '768px', md: '992px', lg: '1200px', xl: '1920px' }`。
- 扩展 `colors`、`fontFamily`、`fontSize`、`borderRadius`、`boxShadow` 和 `opacity`。

查看 [element-plus.js](./element-plus.js) 获取细节。

### miniprogram

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/miniprogram')],
};

```

- 样式预检已经被禁用，因为可能会破坏小程序代码。如果你需要样式预检，请参考 [miniprogram-preflight.css](./miniprogram-preflight.css)。
- 替换 `separator` 为 `_`，因为小程序不支持 `:`。
- 扩展 `spacing`、`flexBasis`、`height`、`inset`、`translate` 和 `width`。

查看 [miniprogram.js](./miniprogram.js) 获取细节。

#### 额外配置

**不要** 使用 `@tailwind base;`，因为它使用了小程序不支持的 `*` 选择器。如果你需要类似的样式，请参考 [miniprogram-base.css](./miniprogram-base.css)。

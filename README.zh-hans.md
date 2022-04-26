# @modyqyw/tailwind-presets

[English](./README.md) | 简体中文

**WIP**

开箱即用的 Tailwind v3 预设。

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

然后更新你的 tailwind 配置。

### antd

**WIP**

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/antd')],
};

```

- 样式预检已经被禁用，因为 `antd` 本身带有样式预检。

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

### mui

**WIP**

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/mui')],
};

```

- 样式预检已经被禁用，因为 `mui` 本身带有样式预检。

### vuetify

**WIP**

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/vuetify')],
};

```

- 样式预检已经被禁用，因为 `vuetify` 本身带有样式预检。

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

**不要** 使用 `@tailwind base;`，因为它使用了小程序不支持的 `*` 选择器。

作为替代，你可以使用下面的代码替换 `@tailwind base;`。

```css
html,
body,
page,
cover-image,
cover-view,
match-media,
movable-area,
movable-view,
scroll-view,
swiper,
swiper-item,
view,
icon,
progress,
rich-text,
text,
button,
checkbox,
checkbox-group,
editor,
form,
input,
label,
picker,
picker-view,
picker-view-column,
radio,
radio-group,
slider,
switch,
textarea,
functional-page-navigator,
navigator,
audio,
camera,
image,
live-player,
live-pusher,
video,
voip-room,
map,
canvas,
ad,
ad-custom,
official-account,
open-data,
web-view,
navigation-bar,
page-meta,
::before,
::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 50%);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}
```

# @modyqyw/tailwind-presets

English | [简体中文](./README.zh-hans.md)

**WIP**

Opinionated Tailwind v3 presets.

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

Then update your tailwind config.

### antd

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/antd')],
};

```

- Preflight is disabled because `antd` already includes preflight.
- Replace `screens` with `{ xs: '480px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1600px', '2xl': '1600px' }`.
- Extend `colors`, `fontFamily` and `boxShadow`.

### element-plus

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/element-plus')],
};

```

- Preflight is disabled because it may breaks `element-plus` styles. Recommend [modern-normalize](https://github.com/sindresorhus/modern-normalize) for preflight.
- Replace `screens` with `{ sm: '768px', md: '992px', lg: '1200px', xl: '1920px' }`.
- Extend `colors`, `fontFamily`, `fontSize`, `borderRadius`, `boxShadow` and `opacity`.

See [element-plus.js](./element-plus.js) for details.

### mui

**WIP**

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/mui')],
};

```

- Preflight is disabled because `mui` already includes preflight.

### vuetify

**WIP**

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/vuetify')],
};

```

- Preflight is disabled because `vuetify` already includes preflight.

### miniprogram

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/miniprogram')],
};

```

- Preflight is disabled because it may break miniprogram codes. Check [miniprogram-preflight.css](./miniprogram-preflight.css) if you need preflight.
- Replace `separator` with `_` because miniprogram doesn't support `:`.
- Extend `spacing`, `flexBasis`, `height`, `inset`, `translate` and `width`.

See [miniprogram.js](./miniprogram.js) for details.

#### Extra Configs

Should **NOT** use `@tailwind base;` because it uses selector `*` which is unsupported in miniprogram.

Instead, replace `@tailwind base;` with codes below.

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

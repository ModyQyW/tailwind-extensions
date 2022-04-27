# @modyqyw/tailwind-presets

English | [简体中文](./README.zh-hans.md)

**WIP**

Opinionated Tailwind v3 presets.

## Usage

```sh
npm install @modyqyw/tailwind-presets
```

Then update your tailwind config.

### ant-design

```js
module.exports {
  presets: [require('@modyqyw/tailwind-presets/ant-design')],
};

```

- Preflight is disabled because `antd` and `ant-design-vue` already includes preflight.
- Replace `screens` with `{ xs: '480px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1600px', '2xl': '1600px' }`.
- Extend `colors`, `fontFamily` and `boxShadow`.

See [ant-design.js](./ant-design.js) for details.

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

Should **NOT** use `@tailwind base;` because it uses selector `*` which is unsupported in miniprogram. Check [miniprogram-base.css](./miniprogram-base.css) if you need similar styles.

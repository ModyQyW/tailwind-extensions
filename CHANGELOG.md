# Changelog

## Unreleased

- feat!: require `node>=14.18`
- feat!: `antDesignPreset` -> `antDesignV4Preset`
- feat: add `antDesignPreset`

## 0.19.2 (2022-11-02)

- fix: fix types

## 0.19.1 (2022-11-02)

- fix: fix `element-plus` colors

## 0.19.0 (2022-11-02)

- feat!: update `aspectRatio` config, following [here](https://github.com/tailwindlabs/tailwindcss-aspect-ratio#compatibility-with-default-aspect-ratio-utilities)

## 0.18.0 (2022-10-14)

- feat!: `tailwind-extensions` -> `tailwind-extensions`
- feat!: update exports
  - `base` -> `basePreset`
  - `antDesign` -> `antDesignPreset`
  - `elementPlus` -> `elementPlusPreset`
  - `miniprogramBase` -> `miniprogramBasePreset`
- feat: update `basePreset`
- feat!: update `antDesignPreset`
  - `baseSelectors` default value `[':root', 'page']` -> `[':root']`
- feat!: update `elementPlusPreset`
  - `baseSelectors` default value `[':root', 'page']` -> `[':root']`
- feat!: update `miniprogramPreset`
  - No longer set key-value pairs related to special symbols like `.` and `/`. Use [mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind) and [vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind) if you need.
- feat!: remove `miniprogramScreensPreset`
- feat!: remove `miniprogramSeparatorPreset`
  - Use [mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind) and [vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind) if you need.
- fix: fix build
- fix: fix `easyPreset` empty theme

## 0.17.0

- feat: extend `aspect-ratio` configs

## 0.16.0

- feat: add more classes

## 0.15.2

- fix: fix docs

## 0.15.1

- fix: fix exports

## 0.15.0

- feat: update exports
- feat!: update `miniprogram` related presets

## 0.14.0

- feat!: split `miniprogram` and `miniprogramEnhanced` presets
- feat: change `baseSelectors` default value to `[':root', 'page']`

## 0.13.0

- feat!: update every preset's usage, especially `miniprogram`

## 0.12.1

## 0.12.0

- feat: update `miniprogram-base.css` (based on ress.css v5.0.2, modern-normalize v1.1.0 and tailwindcss v3.1.5)

## 0.11.2

- fix: fix `type: "module"` support

## 0.11.1

- fix: fix types
- fix: target `node12`

## 0.11.0

- feat: update presets' config
- feat!: tailwindcss@^3.1.0 is required
- fix: fix miniprogram colors

## 0.10.0

- feat: update presets' config

## 0.9.1 (2022-05-23)

## 0.9.0 (2022-05-20)

- feat: don't disable `preflight` by default in `ant-design` and `element-plus` presets

## 0.8.6 (2022-05-09)

- fix: set `darkMediaQuery` to empty string
- fix: fix `miniprogram-base.css`

## 0.8.5 (2022-05-09)

- fix: fix presets' colors

## 0.8.4 (2022-05-09)

- fix: fix presets' colors

## 0.8.3 (2022-05-09)

- fix: fix release hooks

## 0.8.2 (2022-05-09)

- fix: set `darkMode` and `safelist` avoiding wrong purge

## 0.8.1 (2022-05-09)

- fix: fix presets' config

## 0.8.0 (2022-05-09)

- feat: update `miniprogram-base.css`
- fix: fix presets' config
- fix: fix exports

## 0.7.0 (2022-05-07)

- fix: set `ant-design` `darkSelectors` default value to `[.dark]`
- feat: support `element-plus` dark mode
- feat: add `easy` preset

## 0.6.0 (2022-05-03)

- chore: use `tsup` to build and migrate to TypeScript
- fix: fix config

## 0.5.0 (2022-05-01)

- fix: fix docs

## 0.4.0 (2022-04-30)

- feat: update `ant-design` and `element-plus` presets, using `tailwindcss-theme-swapper` to support CSS variables for different themes

## 0.3.0 (2022-04-29)

- feat: update `ant-design` and `element-plus` presets' colors

## 0.2.0 (2022-04-28)

- feat: add `base` preset
- feat: update `ant-design` and `element-plus` presets' default border color
- feat: update `miniprogram` preset

## 0.1.0 (2022-04-27)

- feat: add `ant-design` preset
- feat: add `element-plus` preset
- feat: add `miniprogram` preset
- feat: add `miniprogram-base.css`
- feat: add `miniprogram-preflight.css`

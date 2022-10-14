# Changelog

## 0.18.0 (2022-10-14)

- feat!: `tailwind-extensions` -> `tailwind-extensions`
- feat!: 调整导出
  - `base` -> `basePreset`
  - `antDesign` -> `antDesignPreset`
  - `elementPlus` -> `elementPlusPreset`
  - `miniprogramBase` -> `miniprogramBasePreset`
  - `miniprogramScreens` -> `miniprogramScreensPreset`
- feat: 更新 `basePreset`
- feat: 更新 `antDesignPreset`
- feat!: 更新 `miniprogramPreset`
  - 现在不再设置 `.`、`/` 等特殊符号对等的键值对，如有需要请使用 [mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind)、[vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind) 等处理
- feat!: 移除 `miniprogramScreensPreset`
- feat!: 移除 `miniprogramSeparatorPreset`
  - 如有需要请使用 [mini-program-tailwind](https://github.com/dcasia/mini-program-tailwind)、[vite-plugin-uni-app-tailwind](https://github.com/ModyQyW/uni-helper/tree/main/packages/vite-plugin-uni-app-tailwind) 等处理
- fix: 修复构建
- fix: 修复 `easyPreset` 错误设置 `theme` 的问题

## 0.17.0

- feat: 扩展 `aspect-ratio` 配置

## 0.16.0

- feat: 增加更多的类名

## 0.15.2

- fix: 修复文档

## 0.15.1

- fix: 修复导出

## 0.15.0

- feat: 更新导出
- feat!: 更新 `miniprogram` 关联预设

## 0.14.0

- feat!: 区分 `miniprogram` 和 `miniprogramEnhanced` 预设
- feat: `baseSelectors` 默认值调整为 `[':root', 'page']`

## 0.13.0

- feat!: 更新每个预设的使用，特别是 `miniprogram`

## 0.12.1

## 0.12.0

- feat: 更新 `miniprogram-base.css`（基于 ress.css v5.0.2、modern-normalize v1.1.0 和 tailwindcss v3.1.5）

## 0.11.2

- fix: 修复 `type: "module"` 支持

## 0.11.1

- fix: 修复类型
- fix: 目标设为 `node12`

## 0.11.0

- feat: 更新预设配置
- feat!: 现在需要 tailwindcss@^3.1.0
- fix: 修复小程序颜色

## 0.10.0

- feat: 更新预设配置

## 0.9.1

## 0.9.0 (2022-05-20)

- feat: 在 `ant-design` 和 `element-plus` 预设中不再默认禁用 `preflight`

## 0.8.6 (2022-05-09)

- fix: 设置 `darkMediaQuery` 为空字符串
- fix: 修复 `miniprogram-base.css`

## 0.8.5 (2022-05-09)

- fix: 修复预设颜色

## 0.8.4 (2022-05-09)

- fix: 修复预设颜色

## 0.8.3 (2022-05-09)

- fix: 修复发布钩子

## 0.8.2 (2022-05-09)

- fix: 设置 `darkMode` 和 `safelist`，避免错误去除样式

## 0.8.1 (2022-05-09)

- fix: 修复预设配置

## 0.8.0 (2022-05-09)

- feat: 更新 `miniprogram-base.css`
- fix: 修复预设配置
- fix: 修复导出

## 0.7.0 (2022-05-07)

- fix: 设置 `ant-design` `darkSelectors` 默认值为 `[.dark]`
- feat: 支持 `element-plus` 深色模式
- feat: 增加 `easy` 预设，即关怀模式预设

## 0.6.0 (2022-05-03)

- chore: 使用 `tsup` 构建并迁移到 TypeScript
- fix: 修复部分配置问题

## 0.5.0 (2022-05-01)

- fix: 修复文档

## 0.4.0 (2022-04-30)

- feat: 更新 `ant-design` 和 `element-plus` 两个预设，使用 `tailwindcss-theme-swapper` 以支持不同主题的 CSS 变量

## 0.3.0 (2022-04-29)

- feat: 更新 `ant-design` 和 `element-plus` 两个预设的颜色

## 0.2.0 (2022-04-28)

- feat: 增加 `base` 预设
- feat: 更新 `ant-design` 和 `element-plus` 两个预设的默认边框颜色
- feat: 更新 `miniprogram` 预设

## 0.1.0 (2022-04-27)

- feat: 增加 `ant-design` 预设
- feat: 增加 `element-plus` 预设
- feat: 增加 `miniprogram` 预设
- feat: 增加 `miniprogram-base.css`
- feat: 增加 `miniprogram-preflight.css`

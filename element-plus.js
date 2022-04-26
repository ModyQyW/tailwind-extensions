// const Color = require('color');

// const white = Color('white');
// const getLightenColorCssVariableName = (name, index) =>
//   index === 0 ? `--el-color-${name}` : `--el-color-${name}-light-${index}`;
// const getLightenColorKeys = (name, index) =>
//   index === 0 ? [name] : [`${name}-lighten-${index}`, `${name}-light-${index}`];
// const getLightenColorValue = (name, color, index) =>
//   `var(${getLightenColorCssVariableName(name, index)}, ${Color(color)
//     .mix(white, index / 10)
//     .hex()})`.toLowerCase();

// const black = Color('black');
// const getDarkenColorCssVariableName = (name, index) =>
//   index === 0 ? `--el-color-${name}` : `--el-color-${name}-dark-${index}`;
// const getDarkenColorKeys = (name, index) =>
//   index === 0 ? [name] : [`${name}-darken-${index}`, `${name}-dark-${index}`];
// const getDarkenColorValue = (name, color, index) =>
//   `var(${getDarkenColorCssVariableName(name, index)}, ${Color(color)
//     .mix(black, index / 10)
//     .hex()})`.toLowerCase();

// const colors = Object.fromEntries(
//   Object.entries({
//     primary: '#409eff',
//     success: '#67c23a',
//     warning: '#e6a23c',
//     error: '#f56c6c',
//     danger: '#f56c6c',
//     info: '#909399',
//   }).flatMap(([name, color]) =>
//     Array.from({ length: 10 }).flatMap((_, index) => {
//       const lightenKeys = getLightenColorKeys(name, index);
//       const lightenValue = getLightenColorValue(name, color, index);
//       const darkenKeys = getDarkenColorKeys(name, index);
//       const darkenValue = getDarkenColorValue(name, color, index);

//       return [
//         lightenKeys.map((key) => [key, lightenValue]),
//         darkenKeys.map((key) => [key, darkenValue]),
//       ].flat();
//     }),
//   ),
// );

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: 'var(--el-color-primary, #409eff)',
        'primary-lighten-1': 'var(--el-color-primary-light-1, #53a8ff)',
        'primary-light-1': 'var(--el-color-primary-light-1, #53a8ff)',
        'primary-darken-1': 'var(--el-color-primary-dark-1, #3a8ee6)',
        'primary-dark-1': 'var(--el-color-primary-dark-1, #3a8ee6)',
        'primary-lighten-2': 'var(--el-color-primary-light-2, #66b1ff)',
        'primary-light-2': 'var(--el-color-primary-light-2, #66b1ff)',
        'primary-darken-2': 'var(--el-color-primary-dark-2, #337ecc)',
        'primary-dark-2': 'var(--el-color-primary-dark-2, #337ecc)',
        'primary-lighten-3': 'var(--el-color-primary-light-3, #79bbff)',
        'primary-light-3': 'var(--el-color-primary-light-3, #79bbff)',
        'primary-darken-3': 'var(--el-color-primary-dark-3, #2d6fb3)',
        'primary-dark-3': 'var(--el-color-primary-dark-3, #2d6fb3)',
        'primary-lighten-4': 'var(--el-color-primary-light-4, #8cc5ff)',
        'primary-light-4': 'var(--el-color-primary-light-4, #8cc5ff)',
        'primary-darken-4': 'var(--el-color-primary-dark-4, #265f99)',
        'primary-dark-4': 'var(--el-color-primary-dark-4, #265f99)',
        'primary-lighten-5': 'var(--el-color-primary-light-5, #a0cfff)',
        'primary-light-5': 'var(--el-color-primary-light-5, #a0cfff)',
        'primary-darken-5': 'var(--el-color-primary-dark-5, #204f80)',
        'primary-dark-5': 'var(--el-color-primary-dark-5, #204f80)',
        'primary-lighten-6': 'var(--el-color-primary-light-6, #b3d8ff)',
        'primary-light-6': 'var(--el-color-primary-light-6, #b3d8ff)',
        'primary-darken-6': 'var(--el-color-primary-dark-6, #1a3f66)',
        'primary-dark-6': 'var(--el-color-primary-dark-6, #1a3f66)',
        'primary-lighten-7': 'var(--el-color-primary-light-7, #c6e2ff)',
        'primary-light-7': 'var(--el-color-primary-light-7, #c6e2ff)',
        'primary-darken-7': 'var(--el-color-primary-dark-7, #132f4d)',
        'primary-dark-7': 'var(--el-color-primary-dark-7, #132f4d)',
        'primary-lighten-8': 'var(--el-color-primary-light-8, #d9ecff)',
        'primary-light-8': 'var(--el-color-primary-light-8, #d9ecff)',
        'primary-darken-8': 'var(--el-color-primary-dark-8, #0d2033)',
        'primary-dark-8': 'var(--el-color-primary-dark-8, #0d2033)',
        'primary-lighten-9': 'var(--el-color-primary-light-9, #ecf5ff)',
        'primary-light-9': 'var(--el-color-primary-light-9, #ecf5ff)',
        'primary-darken-9': 'var(--el-color-primary-dark-9, #061019)',
        'primary-dark-9': 'var(--el-color-primary-dark-9, #061019)',
        success: 'var(--el-color-success, #67c23a)',
        'success-lighten-1': 'var(--el-color-success-light-1, #76c84e)',
        'success-light-1': 'var(--el-color-success-light-1, #76c84e)',
        'success-darken-1': 'var(--el-color-success-dark-1, #5daf34)',
        'success-dark-1': 'var(--el-color-success-dark-1, #5daf34)',
        'success-lighten-2': 'var(--el-color-success-light-2, #85ce61)',
        'success-light-2': 'var(--el-color-success-light-2, #85ce61)',
        'success-darken-2': 'var(--el-color-success-dark-2, #529b2e)',
        'success-dark-2': 'var(--el-color-success-dark-2, #529b2e)',
        'success-lighten-3': 'var(--el-color-success-light-3, #95d475)',
        'success-light-3': 'var(--el-color-success-light-3, #95d475)',
        'success-darken-3': 'var(--el-color-success-dark-3, #488829)',
        'success-dark-3': 'var(--el-color-success-dark-3, #488829)',
        'success-lighten-4': 'var(--el-color-success-light-4, #a4da89)',
        'success-light-4': 'var(--el-color-success-light-4, #a4da89)',
        'success-darken-4': 'var(--el-color-success-dark-4, #3e7423)',
        'success-dark-4': 'var(--el-color-success-dark-4, #3e7423)',
        'success-lighten-5': 'var(--el-color-success-light-5, #b3e19d)',
        'success-light-5': 'var(--el-color-success-light-5, #b3e19d)',
        'success-darken-5': 'var(--el-color-success-dark-5, #34611d)',
        'success-dark-5': 'var(--el-color-success-dark-5, #34611d)',
        'success-lighten-6': 'var(--el-color-success-light-6, #c2e7b0)',
        'success-light-6': 'var(--el-color-success-light-6, #c2e7b0)',
        'success-darken-6': 'var(--el-color-success-dark-6, #294e17)',
        'success-dark-6': 'var(--el-color-success-dark-6, #294e17)',
        'success-lighten-7': 'var(--el-color-success-light-7, #d1edc4)',
        'success-light-7': 'var(--el-color-success-light-7, #d1edc4)',
        'success-darken-7': 'var(--el-color-success-dark-7, #1f3a11)',
        'success-dark-7': 'var(--el-color-success-dark-7, #1f3a11)',
        'success-lighten-8': 'var(--el-color-success-light-8, #e1f3d8)',
        'success-light-8': 'var(--el-color-success-light-8, #e1f3d8)',
        'success-darken-8': 'var(--el-color-success-dark-8, #15270c)',
        'success-dark-8': 'var(--el-color-success-dark-8, #15270c)',
        'success-lighten-9': 'var(--el-color-success-light-9, #f0f9eb)',
        'success-light-9': 'var(--el-color-success-light-9, #f0f9eb)',
        'success-darken-9': 'var(--el-color-success-dark-9, #0a1306)',
        'success-dark-9': 'var(--el-color-success-dark-9, #0a1306)',
        warning: 'var(--el-color-warning, #e6a23c)',
        'warning-lighten-1': 'var(--el-color-warning-light-1, #e9ab50)',
        'warning-light-1': 'var(--el-color-warning-light-1, #e9ab50)',
        'warning-darken-1': 'var(--el-color-warning-dark-1, #cf9236)',
        'warning-dark-1': 'var(--el-color-warning-dark-1, #cf9236)',
        'warning-lighten-2': 'var(--el-color-warning-light-2, #ebb563)',
        'warning-light-2': 'var(--el-color-warning-light-2, #ebb563)',
        'warning-darken-2': 'var(--el-color-warning-dark-2, #b88230)',
        'warning-dark-2': 'var(--el-color-warning-dark-2, #b88230)',
        'warning-lighten-3': 'var(--el-color-warning-light-3, #eebe77)',
        'warning-light-3': 'var(--el-color-warning-light-3, #eebe77)',
        'warning-darken-3': 'var(--el-color-warning-dark-3, #a1712a)',
        'warning-dark-3': 'var(--el-color-warning-dark-3, #a1712a)',
        'warning-lighten-4': 'var(--el-color-warning-light-4, #f0c78a)',
        'warning-light-4': 'var(--el-color-warning-light-4, #f0c78a)',
        'warning-darken-4': 'var(--el-color-warning-dark-4, #8a6124)',
        'warning-dark-4': 'var(--el-color-warning-dark-4, #8a6124)',
        'warning-lighten-5': 'var(--el-color-warning-light-5, #f3d19e)',
        'warning-light-5': 'var(--el-color-warning-light-5, #f3d19e)',
        'warning-darken-5': 'var(--el-color-warning-dark-5, #73511e)',
        'warning-dark-5': 'var(--el-color-warning-dark-5, #73511e)',
        'warning-lighten-6': 'var(--el-color-warning-light-6, #f5dab1)',
        'warning-light-6': 'var(--el-color-warning-light-6, #f5dab1)',
        'warning-darken-6': 'var(--el-color-warning-dark-6, #5c4118)',
        'warning-dark-6': 'var(--el-color-warning-dark-6, #5c4118)',
        'warning-lighten-7': 'var(--el-color-warning-light-7, #f8e3c5)',
        'warning-light-7': 'var(--el-color-warning-light-7, #f8e3c5)',
        'warning-darken-7': 'var(--el-color-warning-dark-7, #453112)',
        'warning-dark-7': 'var(--el-color-warning-dark-7, #453112)',
        'warning-lighten-8': 'var(--el-color-warning-light-8, #faecd8)',
        'warning-light-8': 'var(--el-color-warning-light-8, #faecd8)',
        'warning-darken-8': 'var(--el-color-warning-dark-8, #2e200c)',
        'warning-dark-8': 'var(--el-color-warning-dark-8, #2e200c)',
        'warning-lighten-9': 'var(--el-color-warning-light-9, #fdf6ec)',
        'warning-light-9': 'var(--el-color-warning-light-9, #fdf6ec)',
        'warning-darken-9': 'var(--el-color-warning-dark-9, #171006)',
        'warning-dark-9': 'var(--el-color-warning-dark-9, #171006)',
        error: 'var(--el-color-error, #f56c6c)',
        'error-lighten-1': 'var(--el-color-error-light-1, #f67b7b)',
        'error-light-1': 'var(--el-color-error-light-1, #f67b7b)',
        'error-darken-1': 'var(--el-color-error-dark-1, #dd6161)',
        'error-dark-1': 'var(--el-color-error-dark-1, #dd6161)',
        'error-lighten-2': 'var(--el-color-error-light-2, #f78989)',
        'error-light-2': 'var(--el-color-error-light-2, #f78989)',
        'error-darken-2': 'var(--el-color-error-dark-2, #c45656)',
        'error-dark-2': 'var(--el-color-error-dark-2, #c45656)',
        'error-lighten-3': 'var(--el-color-error-light-3, #f89898)',
        'error-light-3': 'var(--el-color-error-light-3, #f89898)',
        'error-darken-3': 'var(--el-color-error-dark-3, #ac4c4c)',
        'error-dark-3': 'var(--el-color-error-dark-3, #ac4c4c)',
        'error-lighten-4': 'var(--el-color-error-light-4, #f9a7a7)',
        'error-light-4': 'var(--el-color-error-light-4, #f9a7a7)',
        'error-darken-4': 'var(--el-color-error-dark-4, #934141)',
        'error-dark-4': 'var(--el-color-error-dark-4, #934141)',
        'error-lighten-5': 'var(--el-color-error-light-5, #fab6b6)',
        'error-light-5': 'var(--el-color-error-light-5, #fab6b6)',
        'error-darken-5': 'var(--el-color-error-dark-5, #7b3636)',
        'error-dark-5': 'var(--el-color-error-dark-5, #7b3636)',
        'error-lighten-6': 'var(--el-color-error-light-6, #fbc4c4)',
        'error-light-6': 'var(--el-color-error-light-6, #fbc4c4)',
        'error-darken-6': 'var(--el-color-error-dark-6, #622b2b)',
        'error-dark-6': 'var(--el-color-error-dark-6, #622b2b)',
        'error-lighten-7': 'var(--el-color-error-light-7, #fcd3d3)',
        'error-light-7': 'var(--el-color-error-light-7, #fcd3d3)',
        'error-darken-7': 'var(--el-color-error-dark-7, #4a2020)',
        'error-dark-7': 'var(--el-color-error-dark-7, #4a2020)',
        'error-lighten-8': 'var(--el-color-error-light-8, #fde2e2)',
        'error-light-8': 'var(--el-color-error-light-8, #fde2e2)',
        'error-darken-8': 'var(--el-color-error-dark-8, #311616)',
        'error-dark-8': 'var(--el-color-error-dark-8, #311616)',
        'error-lighten-9': 'var(--el-color-error-light-9, #fef0f0)',
        'error-light-9': 'var(--el-color-error-light-9, #fef0f0)',
        'error-darken-9': 'var(--el-color-error-dark-9, #180b0b)',
        'error-dark-9': 'var(--el-color-error-dark-9, #180b0b)',
        danger: 'var(--el-color-danger, #f56c6c)',
        'danger-lighten-1': 'var(--el-color-danger-light-1, #f67b7b)',
        'danger-light-1': 'var(--el-color-danger-light-1, #f67b7b)',
        'danger-darken-1': 'var(--el-color-danger-dark-1, #dd6161)',
        'danger-dark-1': 'var(--el-color-danger-dark-1, #dd6161)',
        'danger-lighten-2': 'var(--el-color-danger-light-2, #f78989)',
        'danger-light-2': 'var(--el-color-danger-light-2, #f78989)',
        'danger-darken-2': 'var(--el-color-danger-dark-2, #c45656)',
        'danger-dark-2': 'var(--el-color-danger-dark-2, #c45656)',
        'danger-lighten-3': 'var(--el-color-danger-light-3, #f89898)',
        'danger-light-3': 'var(--el-color-danger-light-3, #f89898)',
        'danger-darken-3': 'var(--el-color-danger-dark-3, #ac4c4c)',
        'danger-dark-3': 'var(--el-color-danger-dark-3, #ac4c4c)',
        'danger-lighten-4': 'var(--el-color-danger-light-4, #f9a7a7)',
        'danger-light-4': 'var(--el-color-danger-light-4, #f9a7a7)',
        'danger-darken-4': 'var(--el-color-danger-dark-4, #934141)',
        'danger-dark-4': 'var(--el-color-danger-dark-4, #934141)',
        'danger-lighten-5': 'var(--el-color-danger-light-5, #fab6b6)',
        'danger-light-5': 'var(--el-color-danger-light-5, #fab6b6)',
        'danger-darken-5': 'var(--el-color-danger-dark-5, #7b3636)',
        'danger-dark-5': 'var(--el-color-danger-dark-5, #7b3636)',
        'danger-lighten-6': 'var(--el-color-danger-light-6, #fbc4c4)',
        'danger-light-6': 'var(--el-color-danger-light-6, #fbc4c4)',
        'danger-darken-6': 'var(--el-color-danger-dark-6, #622b2b)',
        'danger-dark-6': 'var(--el-color-danger-dark-6, #622b2b)',
        'danger-lighten-7': 'var(--el-color-danger-light-7, #fcd3d3)',
        'danger-light-7': 'var(--el-color-danger-light-7, #fcd3d3)',
        'danger-darken-7': 'var(--el-color-danger-dark-7, #4a2020)',
        'danger-dark-7': 'var(--el-color-danger-dark-7, #4a2020)',
        'danger-lighten-8': 'var(--el-color-danger-light-8, #fde2e2)',
        'danger-light-8': 'var(--el-color-danger-light-8, #fde2e2)',
        'danger-darken-8': 'var(--el-color-danger-dark-8, #311616)',
        'danger-dark-8': 'var(--el-color-danger-dark-8, #311616)',
        'danger-lighten-9': 'var(--el-color-danger-light-9, #fef0f0)',
        'danger-light-9': 'var(--el-color-danger-light-9, #fef0f0)',
        'danger-darken-9': 'var(--el-color-danger-dark-9, #180b0b)',
        'danger-dark-9': 'var(--el-color-danger-dark-9, #180b0b)',
        info: 'var(--el-color-info, #909399)',
        'info-lighten-1': 'var(--el-color-info-light-1, #9b9ea3)',
        'info-light-1': 'var(--el-color-info-light-1, #9b9ea3)',
        'info-darken-1': 'var(--el-color-info-dark-1, #82848a)',
        'info-dark-1': 'var(--el-color-info-dark-1, #82848a)',
        'info-lighten-2': 'var(--el-color-info-light-2, #a6a9ad)',
        'info-light-2': 'var(--el-color-info-light-2, #a6a9ad)',
        'info-darken-2': 'var(--el-color-info-dark-2, #73767a)',
        'info-dark-2': 'var(--el-color-info-dark-2, #73767a)',
        'info-lighten-3': 'var(--el-color-info-light-3, #b1b3b8)',
        'info-light-3': 'var(--el-color-info-light-3, #b1b3b8)',
        'info-darken-3': 'var(--el-color-info-dark-3, #65676b)',
        'info-dark-3': 'var(--el-color-info-dark-3, #65676b)',
        'info-lighten-4': 'var(--el-color-info-light-4, #bcbec2)',
        'info-light-4': 'var(--el-color-info-light-4, #bcbec2)',
        'info-darken-4': 'var(--el-color-info-dark-4, #56585c)',
        'info-dark-4': 'var(--el-color-info-dark-4, #56585c)',
        'info-lighten-5': 'var(--el-color-info-light-5, #c8c9cc)',
        'info-light-5': 'var(--el-color-info-light-5, #c8c9cc)',
        'info-darken-5': 'var(--el-color-info-dark-5, #484a4d)',
        'info-dark-5': 'var(--el-color-info-dark-5, #484a4d)',
        'info-lighten-6': 'var(--el-color-info-light-6, #d3d4d6)',
        'info-light-6': 'var(--el-color-info-light-6, #d3d4d6)',
        'info-darken-6': 'var(--el-color-info-dark-6, #3a3b3d)',
        'info-dark-6': 'var(--el-color-info-dark-6, #3a3b3d)',
        'info-lighten-7': 'var(--el-color-info-light-7, #dedfe0)',
        'info-light-7': 'var(--el-color-info-light-7, #dedfe0)',
        'info-darken-7': 'var(--el-color-info-dark-7, #2b2c2e)',
        'info-dark-7': 'var(--el-color-info-dark-7, #2b2c2e)',
        'info-lighten-8': 'var(--el-color-info-light-8, #e9e9eb)',
        'info-light-8': 'var(--el-color-info-light-8, #e9e9eb)',
        'info-darken-8': 'var(--el-color-info-dark-8, #1d1d1f)',
        'info-dark-8': 'var(--el-color-info-dark-8, #1d1d1f)',
        'info-lighten-9': 'var(--el-color-info-light-9, #f4f4f5)',
        'info-light-9': 'var(--el-color-info-light-9, #f4f4f5)',
        'info-darken-9': 'var(--el-color-info-dark-9, #0e0f0f)',
        'info-dark-9': 'var(--el-color-info-dark-9, #0e0f0f)',
        fill: 'var(--el-fill-color, #f0f2f5)',
        'fill-light': 'var(--el-fill-color-light, #f5f7fa)',
        'fill-lighter': 'var(--el-fill-color-lighter, #fafafa)',
        'fill-extra-light': 'var(--el-fill-color-extra-light, #fafcff)',
        'fill-dark': 'var(--el-fill-color-dark, #ebedf0)',
        'fill-darker': 'var(--el-fill-color-darker, #e6e8eb)',
        'fill-blank': 'var(--el-fill-color-blank, #ffffff)',
        'primary-text': 'var(--el-text-color-primary, #303133)',
        'regular-text': 'var(--el-text-color-regular, #606266)',
        'secondary-text': 'var(--el-text-color-secondary, #909399)',
        'placeholder-text': 'var(--el-text-color-placeholder, #a8abb2)',
        'disabled-text': 'var(--el-text-color-disabled, #c0c4cc)',
        'popup-modal-bg': 'var(--el-color-black, #000000)',
        'disabled-bg': 'var(--el-fill-color-light, #f5f7fa)',
        border: 'var(--el-border-color, #dcdfe6)',
        'border-light': 'var(--el-border-color-light, #e4e7ed)',
        'border-lighter': 'var(--el-border-color-lighter, #ebeef5)',
        'border-extra-light': 'var(--el-border-color-extra-light, #f2f6fc)',
        'border-dark': 'var(--el-border-color-dark, #d4d7de)',
        'border-darker': 'var(--el-border-color-darker, #cdd0d6)',
        'hover-border': 'var(--el-border-color-hover, #c0c4cc)',
        'disabled-border': 'var(--el-border-color-light, #e4e7ed)',
        overlay: 'var(--el-overlay-color, rgba(0, 0, 0, .8))',
        'overlay-light': 'var(--el-overlay-color-light, rgba(0, 0, 0, .7))',
        'overlay-lighter': 'var(--el-overlay-color-lighter, rgba(0, 0, 0, .5))',
        mask: 'var(--el-mask-color, rgba(255, 255, 255, .9))',
        'mask-extra-light': 'var(--el-mask-color-extra-light, rgba(255, 255, 255, .3))',
      },
      fontFamily: {
        font: "var(--el-font-family, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif)",
      },
      fontSize: {
        'loading-spinner': 'var(--el-loading-spinner-size), 42px',
        'loading-fullscreen-spinner': 'var(--el-loading-fullscreen-spinner-size), 50px',
      },
      borderRadius: {
        round: 'var(--el-border-radius-round, 20px)',
        circle: 'var(--el-border-radius-circle, 100%)',
      },
      boxShadow: {
        shadow:
          'var(--el-box-shadow, 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08))',
        'shadow-light': 'var(--el-box-shadow-light, 0px 0px 12px rgba(0, 0, 0, .12))',
        'shadow-lighter': 'var(--el-box-shadow-lighter, 0px 0px 6px rgba(0, 0, 0, .12))',
        'shadow-dark':
          'var(--el-box-shadow-dark, 0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16))',
      },
      opacity: {
        'popup-modal': 'var(--el-popup-modal-opacity, .5)',
      },
    },
  },
};

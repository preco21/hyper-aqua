'use strict';

// Base colors
const backgroundColor = 'rgba(0, 65, 117, 0.66)';
const foregroundColor = '#fefefe';

// Common colors
const red = '#e2469c';
const green = '#8ff011';
const yellow = '#f7dd11';
const orange = '#f6a21b';
const blue = '#08b1ff';
const magenta = '#ca42d6';
const cyan = '#17e4ff';
const white = '#e2e2e2';
const gray = '#9c9c9c';

// Decorate user configuration
exports.decorateConfig = (config) => {
  const {
    termCSS = '',
    css = '',
    aquaTheme: {
      vibrancy = 'dark',
      statusLine = true,
      overrides = {},
    } = {},
  } = config;

  // Set vibrancy
  exports.onWindow = (win) => win.setVibrancy(vibrancy);

  // eslint-disable-next-line no-restricted-properties
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: 'transparent',
    cursorColor: yellow,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: gray,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
    termCSS: `
      ${termCSS}
      ::selection {
        background: rgba(255, 255, 255, 0.15);
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(121, 158, 201, 0.2);
      }
      ::-webkit-scrollbar-thumb:window-inactive {
        background: transparent;
      }
    `,
    css: `
      ${css}
      .hyper_main {
        border: none !important;
      }
      .splitpane_divider {
        background-color: rgba(255, 255, 255, 0.34) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tabs_title, .tabs_list {
        font-weight: bold;
      }
      .tab_textActive {
        border-bottom: 2px solid ${blue};
      }
    `,
    hyperStatusLine: statusLine
      ? {
        dirtyColor: orange,
        aheadColor: blue,
      }
      : {},
  }, overrides);
};

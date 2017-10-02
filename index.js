'use strict';

// Base colors
const backgroundColor = 'rgba(19, 41, 61, 0.66)';
const backgroundColorWithoutTransparency = '#13293d';
const foregroundColor = '#fefefe';

// Common colors
const red = '#ed4a67';
const green = '#ceff1a';
const yellow = '#fef226';
const blue = '#26bbfe';
const magenta = '#b14dd6';
const cyan = '#75f4f4';
const orange = '#fe9b26';
const white = '#fafffd';
const gray = '#c0bcb5';

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
    backgroundColor: vibrancy ? backgroundColor : backgroundColorWithoutTransparency,
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

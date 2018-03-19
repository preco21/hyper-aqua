'use strict';

// Base colors
const backgroundColor = 'rgba(2, 11, 21, 0.78)';
const backgroundColorWithoutTransparency = '#020B15';
const foregroundColor = '#e1edf3';

// Common colors
const red = '#ff4d80';
const orange = '#ffd147';
const yellow = '#ffef4d';
const green = '#adff2f';
const cyan = '#47edff';
const blue = '#33ccff';
const magenta = '#c04cfd';
const white = '#f1f5f7';
const gray = '#89959b';

// Decorate user configuration
exports.decorateConfig = (config) => {
  const {
    termCSS = '',
    css = '',
    hyperAqua: {
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
        box-sizing: content-box;
        border-bottom: 2px solid ${white};
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

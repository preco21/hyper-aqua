'use strict';

// Base colors
const backgroundColor = 'rgba(150, 204, 50, 0.87)';
const backgroundColorWithoutTransparency = '#0a1d32';
const foregroundColor = '#dbe9f4';

// Common colors
const red = '#fa5282';
const orange = '#f09030';
const yellow = '#fae13c';
const green = '#89e33b';
const cyan = '#61dfff';
const blue = '#52bdff';
const magenta = '#ac5ce5';
const white = '#f1f5f7';
const gray = '#a6b4bd';

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
    cursorColor: yellow,
    cursorAccentColor: yellow,
    backgroundColor: vibrancy ? backgroundColor : backgroundColorWithoutTransparency,
    foregroundColor,
    borderColor: 'transparent',
    selectionColor: 'rgba(225, 237, 243, 0.3)',
    colors: {
      black: backgroundColorWithoutTransparency,
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
      *::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: transparent;
      }
      *::-webkit-scrollbar-track {
        background-color: transparent;
      }
      *::-webkit-scrollbar-thumb {
        background: rgba(121, 158, 201, 0.2);
      }
      *::-webkit-scrollbar-thumb:window-inactive {
        background: transparent;
      }
    `,
    css: `
      ${css}
      .hyper_main {
        border: none;
      }
      .tab_tab {
        border: none;
        color: rgba(255, 255, 255, 0.2);
      }
      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transition: none;
      }
      .tab_tab.tab_active {
        color: #FFF;
      }
      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 300ms cubic-bezier(0.0, 0.0, 0.2, 1)
      }
      .tabs_title, .tabs_list {
        font-weight: bold;
      }
      .splitpane_divider {
        background-color: rgba(0, 0, 0, 0.2) !important;
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

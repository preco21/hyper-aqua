# hyper-aqua

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/hyper-aqua.svg)](https://www.npmjs.com/package/hyper-aqua)
[![Dependency Status](https://dependencyci.com/github/preco21/hyper-aqua/badge)](https://dependencyci.com/github/preco21/hyper-aqua)

> :droplet: Cool Hyper theme with pastel and blue cocktail

## Install

Add `hyper-aqua` to `plugins` in `~/.hyper.js` config file and restart Hyper.

## Configuration

This theme provides several options to extend its config as much as you like.

You can set theme options by adding next to the end of `config` object in your `~/.hyper.js` config:

```javascript
aquaTheme: {
  vibrancy: false,
  overrides: {
    backgroundColor: 'white',
  },
},
```

Here is the available options:

* `vibrancy` String - Set vibrancy effect to Hyper window. To disable vibrancy effect, pass `null` to this option. Default is `'dark'`.
* `statusLine` Boolean - Apply `hyper-statusline` plugin options with proper styles. Note that you have to add `hyper-aqua` before `hyper-statusline` in `plugins`. Default is `true`.
* `overrides` Object - Append provided override object to the config object after applying the theme.

## Tip

If you'd like to get exact same look as in the screenshot, you will need to install all related plugins below, set font size to `16px` and cursor type to `BEAM`.

And it also used [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh).

## Related plugins

* [`hyperterm-tab-icons`](https://github.com/dfrankland/hyper-tab-icons) - Shows icon in the header tabs for the current running process.
* [`hyper-statusline`](https://github.com/henrikdahl/hyper-statusline) - Shows current directory and git status.
* [`hyperlinks`](https://github.com/zeit/hyperlinks) - Automatically links URLs.

## License

[MIT](https://preco.mit-license.org/)

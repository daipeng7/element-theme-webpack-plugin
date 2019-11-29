# element-theme-webpack-plugin


> It is a webpack-plugin for element-theme

## Installation

```shell
npm i element-theme-webpack-plugin -D
```

## Usage
```js
{
    plugins: [
        new ElementThemeWebpackPlugin({
            config: resolve('./src/style/element-ui/element-variables.scss'),
            out: resolve('./src/style/element-ui/theme'),
            minimize: isProduction,
            browsers: ['ie > 9', 'last 2 versions']
            components: [], // 默认all
            watch: false
        })
    ]
}
```
## Options
### config
Variable file path, default `./element-variables.css`.

### out
Theme output path, default `./theme`.

### minimize
Compressed file.

### browsers
set browsers, default `['ie > 9', 'last 2 versions']`.

### watch
watch variable file changes then build.

### components
A lists of components that you want to generate themes for.  All by default.

## Config
You can configure some options in `element-theme` by putting it in package.json:
```json
{
  "element-theme": {
    "browsers": ["ie > 9", "last 2 versions"],
    "out": "./theme",
    "config": "./element-variables.css",
    "theme": "element-theme-chalk",
    "minimize": false,
    "components": ["button", "input"]
  }
}
```

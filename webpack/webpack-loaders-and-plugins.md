# Webpack Loaders and Plugins

> 阅读引导说明

* **粗体** 表示前置依赖项，需优先安装。
* ♥ 表示开发必装依赖项；必装依赖项中，有 ★ 表示生产环境依赖，反之则表示开发环境依赖。
* ☆ 表示显式指出开发环境依赖。

> 常用文件类型

分类 | 文件类型
---|---
HTML | **.html**
JavaScript | **.js** / .jsx / .coffee / .cjsx
CSS | .css / **.less**
JSON | **.json**
Images | **.png** / .jpg / .jpeg /.gif / .ico
Icon | .ttf / .woff / .eot / **.svg**

---

## --save

> React

* [**react ♥**](https://facebook.github.io/react/docs/package-management.html#using-react-from-npm)
    * **react-dom ♥**
* [**history ♥**](https://github.com/ReactTraining/history)
    * [react-router ♥](https://github.com/reactjs/react-router)

> Redux

* [**redux ♥**](https://github.com/reactjs/redux)
* [react-redux ♥](https://github.com/reactjs/react-redux)
* [react-router-redux ♥](https://github.com/reactjs/react-router-redux)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [redux-actions](https://github.com/acdlite/redux-actions)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [reselect](https://github.com/reactjs/reselect)

> React CSS Modules

* [react-css-modules ♥](https://github.com/gajus/react-css-modules)

> Ant Design

* [antd ♥](http://ant.design/docs/react/introduce)

> Lodash

* [lodash ♥](https://github.com/lodash/lodash)

> Fetch

* [fetch ♥](https://github.com/github/fetch)

> Immutable.js

* [Immutable.js](http://facebook.github.io/immutable-js/)

## --save-dev

> Webpack

* [**webpack ♥**](http://webpack.github.io/docs/installation.html)

> React Hot Loader

* [**webpack-dev-server ♥☆**](https://github.com/webpack/webpack-dev-server)
* [**react-hot-loader ♥☆**](https://github.com/gaearon/react-hot-loader)
* [~~react-hot-boilerplate~~](https://github.com/gaearon/react-hot-boilerplate)

> Babel

* [**babel-loader ♥**](https://github.com/babel/babel-loader)
    * babel-core ♥
    * [babel-preset-es2015 ♥](http://babeljs.io/docs/plugins/preset-es2015/)
    * [babel-preset-react ♥](http://babeljs.io/docs/plugins/preset-react/)
    * [babel-preset-stage-0 ♥](http://babeljs.io/docs/plugins/preset-stage-0/)
    * [babel-polyfill ♥](http://babeljs.io/docs/usage/polyfill/)
* [babel-plugin-antd ♥](https://github.com/ant-design/babel-plugin-antd)

> Less

* [**less ♥**](https://github.com/less/less.js)
    * [less-loader ♥](https://github.com/webpack/less-loader)

> PostCSS

* [postcss-loader ♥](https://github.com/postcss/postcss-loader)
    * [autoprefixer ♥](https://github.com/postcss/autoprefixer)

> .html

* [html-webpack-plugin ♥](https://github.com/ampedandwired/html-webpack-plugin)
* [html-webpack-template](https://github.com/jaketrent/html-webpack-template)
* [assets-webpack-plugin](https://github.com/kossnocorp/assets-webpack-plugin)
* [react-to-html-webpack-plugin](https://github.com/markdalgleish/react-to-html-webpack-plugin)
* [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)
* [manifest-revision-webpack-plugin](https://github.com/nickjj/manifest-revision-webpack-plugin)
* [html-res-webpack-plugin](https://github.com/lcxfs1991/html-res-webpack-plugin)
* [webpack-path-rewriter](https://github.com/skozin/webpack-path-rewriter)
* [react-static-webpack-plugin](https://github.com/iansinnott/react-static-webpack-plugin)
* [static-render-webpack-plugin](https://github.com/qimingweng/static-render-webpack-plugin)
* [export-files-webpack-plugin](https://github.com/alexkuz/export-files-webpack-plugin)

> .jsx? / .coffee / .cjsx (ES2015, CoffeeScript, React, JSX)

* [coffee-script](https://github.com/jashkenas/coffeescript)
    * [coffee-loader](https://github.com/webpack/coffee-loader)
    * [cjsx-loader](https://github.com/KyleAMathews/cjsx-loader)

> .css / .less

* [style-loader ♥](https://github.com/webpack/style-loader)
* [css-loader ♥](https://github.com/webpack/css-loader)
* [extract-text-webpack-plugin ♥★](https://github.com/webpack/extract-text-webpack-plugin)
* [purifycss-webpack-plugin](https://github.com/purifycss/purifycss-webpack-plugin)
* [webpack-spritesmith](https://github.com/mixtur/webpack-spritesmith)
* [sprite-webpack-plugin](https://github.com/kezoo/sprite-webpack-plugin)

> .json

* [json-loader](https://github.com/webpack/json-loader)

> .png / .jpe?g / .gif / .ico / .ttf / .woff / .eot / .svg

* [**file-loader ♥**](https://github.com/webpack/file-loader)
* [url-loader ♥](https://github.com/webpack/url-loader)
* [image-webpack-loader ♥★](https://github.com/tcoopman/image-webpack-loader)
* [svg-sprite-loader ♥](https://github.com/kisenka/svg-sprite-loader)
* [svgo-loader ♥](https://github.com/rpominov/svgo-loader)
* [webpack-svgstore-plugin](https://github.com/mrsum/webpack-svgstore-plugin)
* [postcss-write-svg](https://github.com/jonathantneal/postcss-write-svg)
* [postcss-instagram](https://github.com/azat-io/postcss-instagram)

> ESLint

* [babel-eslint ♥](https://github.com/babel/babel-eslint)
* [eslint ♥](https://github.com/eslint/eslint)
* [eslint-plugin-babel ♥](https://github.com/babel/eslint-plugin-babel)
* [eslint-plugin-react ♥](https://github.com/yannickcr/eslint-plugin-react)

> BrowserSync

* [**browser-sync ♥☆**](https://github.com/BrowserSync/browser-sync)
    * [browser-sync-webpack-plugin ♥☆](https://github.com/Va1/browser-sync-webpack-plugin)

> Enzyme

* [Enzyme](http://airbnb.io/enzyme/)

> 代码拆分

* [expose-loader ♥](https://github.com/webpack/expose-loader)
* [bundle-loader](https://github.com/webpack/bundle-loader)
* [split-by-name-webpack-plugin](https://github.com/soundcloud/split-by-name-webpack-plugin)

> 其他

* [copy-webpack-plugin ♥](https://github.com/kevlened/copy-webpack-plugin)
* [clean-webpack-plugin ♥](https://github.com/johnagan/clean-webpack-plugin)
* [favicons-webpack-plugin ♥](https://github.com/jantimon/favicons-webpack-plugin)
* [npm-install-webpack-plugin](https://github.com/ericclemmons/npm-install-webpack-plugin)
* [babel-plugin-webpack-loaders](https://github.com/istarkov/babel-plugin-webpack-loaders)
* [offline-plugin](https://github.com/NekR/offline-plugin)
* [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin)
* [lodash-webpack-plugin](https://github.com/lodash/lodash-webpack-plugin)
* [i18n-webpack-plugin](https://github.com/webpack/i18n-webpack-plugin)
* [progress-bar-webpack-plugin](https://github.com/clessg/progress-bar-webpack-plugin)
* [anybar-webpack](https://github.com/roman01la/anybar-webpack)
* [webpack-shell-plugin](https://github.com/1337programming/webpack-shell-plugin)
* [open-browser-webpack-plugin](https://github.com/baldore/open-browser-webpack-plugin)

> Node

* [node-uuid ♥☆](https://github.com/broofa/node-uuid)
* [cross-env ♥☆](https://github.com/kentcdodds/cross-env)
* [node-fs-extra](https://github.com/jprichardson/node-fs-extra)
* [rimraf](https://github.com/isaacs/rimraf)
* [del](https://github.com/sindresorhus/del)
* [eventsource-polyfill](https://github.com/Yaffle/EventSource/)

> Server

* [Express](http://expressjs.com/)
* [Koa](http://koajs.com/)

> Test

* [Jasmine](http://jasmine.github.io/)
* [Mocha](http://mochajs.org/)
* [Karma](https://github.com/karma-runner/karma)
* [Jest](http://facebook.github.io/jest/)

> Gulp 集成

* [webpack-stream](https://github.com/shama/webpack-stream)
* [gulp](https://github.com/gulpjs/gulp)
* [gulp-postcss](https://github.com/postcss/gulp-postcss)
* [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)
* [postcss-nested](https://github.com/postcss/postcss-nested)
* [postcss-sprites](https://github.com/2createStudio/postcss-sprites)
* [gulp-sequence](https://github.com/teambition/gulp-sequence)
* [gulp-concat](https://github.com/contra/gulp-concat)
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* [gulp-rev](https://github.com/sindresorhus/gulp-rev)
* [gulp-rev-css-url](https://github.com/galkinrost/gulp-rev-css-url)
* [gulp-uncss](https://github.com/ben-eb/gulp-uncss)
* [gulp-livereload](https://github.com/vohof/gulp-livereload)
* [gulp-markdown](https://github.com/sindresorhus/gulp-markdown)
* [gulp-zip](https://github.com/sindresorhus/gulp-zip)
* [gulp-open](https://github.com/stevelacy/gulp-open)

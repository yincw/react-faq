var path = require('path');
var webpack = require('webpack');
var Autoprefixer = require('autoprefixer');
var HtmlPlugin = require('html-webpack-plugin');
var FaviconsPlugin = require('favicons-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var svgoConfig = JSON.stringify({
    plugins: [
        {cleanupAttrs: true},   // 清理属性换行和重复的空格
        {cleanupEnableBackground: true},   // 移除或清理 enable-background 属性
        {cleanupIDs: true},   // 清理未使用的 和 压缩使用的 ID
        {cleanupNumericValues: true}, // 四舍五入数值到单位到精度值，移除默认的 px 单位，默认值 true
        {cleanupListOfValues: true}, // 在数组列表属性中，四舍五入数值，默认值 true

        {convertStyleToAttrs: true}, // 转换样式到属性内，默认值 true
        {convertColors: true}, // 转换颜色值（从 rgb() 到 #rrggbb, 从 #rrggbb 到 #rgb），默认值 true
        {convertPathData: true}, // 转换路径数据到相对或觉得，看哪种更短，默认值 true
        {convertTransform: true}, // 坍塌多个 transforms 到一个，默认值 true
        {convertShapeToPath: true}, // 一些基本图形转换为 Path，默认值 true

        {collapseGroups: true}, // 坍塌无效的组，默认值 true
        {sortAttrs: true}, // 排序元素属性，默认值 true
        // {transformsWithOnePath: false}, // 应用 transforms，默认值 false
        // {addClassesToSVGElement: false}, // 添加类名到外层 <svg> 元素，默认值 false
        {minifyStyles: true}, // 使用 CSSO 压缩 <style> 元素内容，默认值 true
        {mergePaths: true}, // 合并多个路径为一个，默认值 true
        {moveGroupAttrsToElems: true}, //
        {moveElemsAttrsToGroup: true}, //

        {removeDoctype: true}, // 移除 doctype 声明，默认值 true
        {removeXMLProcInst: true}, // 移除 XML 处理指令，默认值 true
        {removeComments: true}, // 移除注释，默认值 true
        {removeMetadata: true}, // 移除 <metadata> 元素，默认值 true
        {removeTitle: true}, // 移除 <title> 元素，默认值 false √
        {removeDesc: true}, // 移除 <desc> 元素，默认值 only non-meaningful 下为 true √
        {removeUselessDefs: true}, // 移除 <defs> 元素的 id，默认值 true
        {removeEditorsNSData: true}, // 移除编辑的命名空间，元素和属性，默认值 true
        {removeEmptyAttrs: true}, // 移除空属性，默认值 true
        {removeHiddenElems: true}, // 移除隐藏元素，默认值 true
        {removeEmptyText: true}, // 移除空文本元素，默认值 true
        {removeEmptyContainers: true}, // 移除空容器元素，默认值 true
        // {removeViewBox: false}, // 移除 viewBox 属性，默认值 false
        {removeUnknownsAndDefaults: true}, // 移除未知元素内容和属性，默认值 true
        {removeNonInheritableGroupAttrs: true}, //
        {removeUselessStrokeAndFill: true}, // 移除无用的 stroke 和 fill，默认值 true
        {removeUnusedNS: true}, // 移除未使用的名称空间声明，默认值 true
        {removeRasterImages: true}, // 移除栅格图标，默认值 false √
        {removeDimensions: true}, // 移除 width/height 属性，默认值 false √
        // {removeAttrs: false}, // 移除属性，用正则，默认值 false
        {removeStyleElement: true}, // 移除 <style> 元素，默认值 false √
    ]
});

module.exports = {
    devtool: 'eval',
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.less', '.css', '.json']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './todo/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'app'),
        // publicPath: '/',
        filename: 'resources/js/[name]-[hash:7].js',
    },
    module: {
        preLoaders: [
            {
                test: /\.svg$/,
                include: path.join(__dirname, 'src'),
                loader: 'svgo?' + svgoConfig
            }
        ],
        loaders: [
            {
                test: /\.(png|jpe?g|gif)$/,
                include: path.join(__dirname, 'src'),
                loaders: [
                    'file?&name=resources/images/[name]-[sha512:hash:base64:7].[ext]',
                    // 'url?limit=10000',
                    'image-webpack'
                ]
            },
            {
                test: /\.(ttf|woff|eot)$/,
                include: path.join(__dirname, 'src'),
                loader: 'file&name=resources/fonts/[name]-[sha512:hash:base64:7].[ext]',
            },
            {
                test: /\.svg$/,
                include: path.join(__dirname, 'src'),
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]-[hash]'
                })
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    plugins: [
        // 定义全局变量，可以在编译时进行设置，使之区分开发环境和生产环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            '__DEV__': true
        }),
        // 定义标识符，当遇到指定标识符的时候，自动加载模块
        // new new webpack.ProvidePlugin({
        //     $: 'jquery'
        // }),
        // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        new webpack.NoErrorsPlugin(),
        // 热加载
        new webpack.HotModuleReplacementPlugin(),
        // 浏览器同步，方便手机端测试
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3100,
            // server: {
            //     baseDir: ['app']
            // },
            proxy: 'http://localhost:3000/'
        }),
        // 【HTML】 自动生成 HTML 文件，可自动注入构建的 js 和 css
        new HtmlPlugin({
            template: 'src/index.ejs', // 模板文件路径
            // templateContent: '', // 模板字符串
            inject: true, // 注入所有的资源到特定的 template 或者 templateContent 中，支持值：true | 'head' | 'body' | false
            // hash: true, // 以 ?hash 的形式添加一个唯一的 webpack 编译 hash 到所有包含的 JS 和 CSS 文件，对于解除 cache 很有用
            // chunks: [''], // 允许只添加某些块
            // chunksSortMode: '', // 允许控制块在添加到页面之前的排序方式，支持值：'none' | 'default' | {function}-default:'auto'
            // excludeChunks: [''],  // 允许跳过某些块
            // filename: '',   // 输出的 HTML 文件名
            title: 'App Title',  // 生成页面的 title 元素
            favicon: './src/favicon.ico',    // 添加特定的 favicon 路径到输出的 HTML 文件中，会自动拷贝 favicon 到输出目录
        }),
        // 往生成的 HTML 中注入 favicon
        // new FaviconsPlugin({
        //     logo: './src/favicon.png',
        //     // inject: true,
        //     // prefix: 'icons-[hash]/',
        //     // emitStats: false,    // 默认值：false
        //     persistentCache: false,   // 默认值：true
        //     background: '#fff', // Android homescreen, Windows 8 tile
        //     title: 'App Title', // Android homescreen, Apple touch
        //     icons: {
        //         favicons: true,     // 创建正规 favicon √
        //         android: true,      // 创建 Android homescreen 图标 √
        //
        //         appleIcon: true,    // 创建 Apple touch 图标，受 background 影响
        //         appleStartup: false, // 创建 Apple startup 图片，受 background 影响
        //         windows: false,     // 创建 Windows 8 tile 图标
        //
        //         firefox: false,      // 创建 Firefox OS 图标，无生成
        //         yandex: false,      // 创建 Yandex browser 图标，无生成
        //
        //         coast: false,       // 创建 Opera Coast 图标，受 background 影响
        //         twitter: false,     // 创建 Twitter Summary Card 图片，受 background 影响
        //         opengraph: false,   // 创建 Facebook OpenGraph 图片，受 background 影响
        //     }
        // }),
    ],
    postcss: [
        Autoprefixer({ browsers: ['last 3 versions'] })
    ]
};

// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/list-of-plugins.html

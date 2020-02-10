const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.js'
        },
        subpage: 'src/main.js'
    },
    lintOnSave: true,

    runtimeCompiler: false,

    transpileDependencies: [/* string or regex */],

    productionSourceMap: true,

    // CSS 相关选项
    css: {
        extract: true,
        sourceMap: false,
        requireModuleExtension: true,
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 32, //基准值(计算公式：设计图宽度/10)，设计图尺寸为750X1134(iPhone6)，基准值为750/10=75
                        propList: ['*']
                    })
                ]
            }
        }
    },
    parallel: require('os').cpus().length > 1,

    pwa: {},

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // string | Object

    },

    pluginOptions: {
        // ...
    }
}
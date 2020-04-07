const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    assetsDir: "./",
    devServer: {
        proxy: {
            '/proxy/': {
                'target': 'http://47.96.106.248:8068/',
                'secure': false, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/proxy': '' // 以/proxy/为开头的改写为''
                }
            }
        }
    },
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

    pluginOptions: {
        // ...
    },
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    }
}
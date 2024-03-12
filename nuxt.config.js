const CompressionPlugin = require('compression-webpack-plugin')
const envConfig = require('dotenv').config({
  path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`
})

module.exports = {

  target: 'server',

  // static: true,

  env: {
    ...envConfig.parsed
  },

  server: {
    port: process.env.PORT,
    host: '127.0.0.1',
    timing: false
  },

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
		proxy: true, //開啟代理
		credentials: true //跨域請求需使用憑證
	},

  head: {
    title: '奈斯漫画',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  plugins: [
    {src: '~/plugins'},
  ],

  styleResources: {
    scss: ['~/sass/_theme.scss']
  },

  css: [
    { src: '~/sass/base.scss', lang: 'scss' }
    // 'element-ui/lib/theme-chalk/index.css'
  ],

  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      imgUrl: { limit: 100000 } //小於100k
    },
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk"
          }
        ]
      ]
    },
    plugins: [
      // 檔案壓縮
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        deleteOriginalAssets: false // 是否删除原文件
      })
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },

  telemetry: false
}

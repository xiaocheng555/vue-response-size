'use strict'

const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ? '././' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue-response-size': path.resolve('../src/vue-response-size')
      }
    }
  }
}

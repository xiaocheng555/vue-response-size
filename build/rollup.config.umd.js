import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'umd',
    file: './dist/vue-response-size.umd.js',
    name: 'vue-response-size',
    sourcemap: false
  }
})

export default config

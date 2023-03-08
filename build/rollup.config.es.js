import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    format: 'es',
    file: './dist/vue-response-size.esm.js',
    name: 'vue-response-size',
    sourcemap: false
  }
})

export default config

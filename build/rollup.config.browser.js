import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    format: 'iife',
    file: './dist/vue-response-size.min.js',
    name: 'VueResponseSize',
    sourcemap: false,
    globals: {
      'vue': 'Vue'
    }
  }
})

config.plugins.push(terser())

export default config

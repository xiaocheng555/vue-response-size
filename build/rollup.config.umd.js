import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: './src/vue-response-size.js',
  output: {
    format: 'umd',
    file: './dist/vue-response-size.umd.js',
    name: 'vue-response-size',
    sourcemap: false
  },
  plugins: [
    resolve(),
    eslint({
      fix: true,
      exclude: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
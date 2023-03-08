import dts from 'rollup-plugin-dts'

export default {
  input: './src/vue-response-size.ts',
  plugins: [
    dts()
  ],
  output: {
    format: 'esm',
    file: 'dist/index.d.ts',
  }
}
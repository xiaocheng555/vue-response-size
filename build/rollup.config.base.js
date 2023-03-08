// 解决node_modules三方包找不到问题
import resolve from '@rollup/plugin-node-resolve'
// eslint检查
import eslint from '@rollup/plugin-eslint'
// 解析cjs格式的包
import commonjs from 'rollup-plugin-commonjs'
// es6语法解析
import babel from '@rollup/plugin-babel'
// ts编译插件
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/vue-response-size.ts',
  plugins: [
    commonjs(), // 打包commomjs
    resolve({ extensions: ['.ts'] }),
    eslint({
      exclude: 'node_modules/**'
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json', // 导入本地ts配置
      extensions: ['.ts', 'tsx']
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts']
    })
  ],
  // 外部模块
  external: ['vue']
}

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.json'],
    alias: {
      // 'vue-response-size': path.resolve('../src/vue-response-size.ts')
    }
  }
})

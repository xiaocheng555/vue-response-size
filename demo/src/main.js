import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 如果demo报错信息为：Failed to load config "standard" to extend from.
// 需要暂时把根目录的.eslintrc.js文件删除
import VueResponseSize from 'vue-response-size'

Vue.config.productionTip = false

Vue.use(VueResponseSize)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

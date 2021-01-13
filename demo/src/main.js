import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* eslint-disable */
// import VueResponseSize from '../../dist/vue-response-size.umd'
import VueResponseSize from '../../src/vue-response-size'

Vue.config.productionTip = false

Vue.use(VueResponseSize)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

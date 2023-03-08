import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('../views/Home.vue'))
  },
  {
    path: '/demo',
    name: 'demo',
    component: defineAsyncComponent(() => import('../views/demo.vue'))
  },
  {
    path: '/size',
    name: 'size',
    component: defineAsyncComponent(() => import('../views/size.vue'))
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})

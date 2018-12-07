import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Layout',
  component: () => import('@/views/Layout/Layout')
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login/index')
}]

export default new Router({
  routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout'
Vue.use(Router)

const routes = [{
  path: '/',
  component: Layout,
  redirect: 'index',
  children: [{
    path: '/index',
    component: () => import('@/views/index'),
    name: 'index'
  }]
}, {
  path: '/table',
  component: Layout,
  redirect: '/table/list',
  children: [{
    path: '/table/list',
    component: () => import('@/views/Table/list'),
    name: 'table-list'
  }]
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login/index')
}]

export default new Router({
  routes
})

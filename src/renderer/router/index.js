import Vue from 'vue'
import Router from 'vue-router'
import CheckAuth from './check-auth'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: require('@/views/Login').default,
      meta: {
        auth: true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: require('@/views/Home').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach(CheckAuth)

export default router

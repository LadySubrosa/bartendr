import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bartendr',
      component: LandingPage
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

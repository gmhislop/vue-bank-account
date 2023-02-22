import Vue from 'vue'
import Home from '@/views/Home.vue';
import VueRouter, { RouteConfig } from 'vue-router'
import AccountDetails from '../components/AccountDetails.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account/:accountNumber',
    name: 'AccountDetails',
    component: AccountDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
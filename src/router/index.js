import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const aaa = ()=> import("../views/aaa")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: aaa
  },
]

const router = new VueRouter({
  routes
})

export default router

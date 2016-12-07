import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from './components/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router

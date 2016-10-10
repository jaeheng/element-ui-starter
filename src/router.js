import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = {
  name: 'Foo',
  template: '<div>foo</div>'
}
const Bar = {
  name: 'Bar',
  template: '<div>bar</div>'
}

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router

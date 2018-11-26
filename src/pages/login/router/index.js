import Vue from 'vue'
import Router from 'vue-router'
import Index2 from '../views/Index2.vue'
import Index3 from '../views/Index3.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index2'
    },
    {
      path: '/index2',
      component: Index2
    },
    {
      path: '/index3',
      component: Index3
    }
  ]
})

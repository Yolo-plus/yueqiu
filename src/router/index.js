import Vue from 'vue'
import VueRouter from 'vue-router'
import Dingdan from '../pages/Dingdan'
import Shangpin from '../pages/Shangpin'
import Caigou from '../pages/Caigou'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/dingdan',
      component: Dingdan
    },
    {
      path: '/shangpin',
      component: Shangpin
    },
    {
      path: '/caigou',
      component: Caigou
    },
    {
      path: '/',
      redirect: '/dingdan'
    }
  ]
})
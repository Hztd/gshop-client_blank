/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  //所有所有路由
  routes:[
    {
      path:'/msite',
      component:'msite'
    },
    {
      path:'/search',
      component:'search'
    },
    {
      path:'/order',
      component:'order'
    },
    {
      path:'/profile',
      component:'profile'
    },
    {
      path:'/',
      redirect:'msite'
    }
  ]
})

/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        showFoot:true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

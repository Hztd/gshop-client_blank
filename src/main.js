/*
入口js
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import app from './app'

import store from './store'
import router from './router'
import ToHeader from './components/TopHeader/TopHeader'

//注册全局路由
Vue.component('TopHeader',ToHeader)
Vue.component(Button.name,Button)

import './mock/mockServer'
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})

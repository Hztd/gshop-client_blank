/*
入口js
 */
import Vue from 'vue'
import app from './app'
import router from './router'
import ToHeader from './components/TopHeader/TopHeader'

//注册全局路由
Vue.component('TopHeader',ToHeader)

new Vue({
  el: '#app',
  render: h => h(app),
  router,
})

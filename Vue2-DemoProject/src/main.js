import Vue from 'vue'
import App from './App.vue'
// 注册  三级联动组件  全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数： 全局组件名字，第二个参数：哪个组件
Vue.component(TypeNav.name, TypeNav)
// 引入mockServe.js
import '@/mock/mockServe';
// 引入swiper样式
import 'swiper/css/swiper.css';


// 引入路由
import router from '@/router'
// 引入仓库 vuex
import store from '@/store'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // 注册仓库，此时实例的身上会多个一个属性$store属性
  store
}).$mount('#app')

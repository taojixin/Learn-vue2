// 引入Vue  <script src="../js/vue.js"></script>
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入router
import router from './router/index'

// 关闭vue生产的代码提示
Vue.config.productionTip = false



// 创建Vue实例对象  vm
new Vue({

  router,
  // render用于将App组将放入容器中
  render: h => h(App),
}).$mount('#app')//相当于el：属性

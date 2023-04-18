import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  // 这里保存公共状态
  state: {
    counter: 1000
  },
  // 在这里修改state中的内容
  mutations: {
    incounter() {
      this.state.counter++
    },
    oncounter() {
      this.state.counter--
    }
  },
  actions: {

  },
  getters: {
    squareCounter(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  }
})

// 3.导出store
export default store
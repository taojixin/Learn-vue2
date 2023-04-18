import { reqCategoryList, reqGetBannerList } from "@/api";
// home 模块的小仓库
const state = {
  // home仓库中存储三级菜单的数据
  categoryList: [],
  // 轮播图数组
  bannerList: []
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state,bannerList) {
    state.bannerList = bannerList
  }
};
const actions = {
  // 通过api里面的接口函数调用，向服务器发送请求，获取服务器数据
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data)
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({commit}) {
    let result = await reqGetBannerList();
    if(result.code === 200) {
      commit('GETBANNERLIST', result.data);
    }
  }

};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}
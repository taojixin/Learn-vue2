<template>
  <div id="app">
    <router-view></router-view>
    <!-- 注意这里为什么是tab-bar而不是TabBar(注册的时候明明是TabBar啊！),这是因为html不区分大小写，小驼峰的大写字母要用 '-' -->
    <tab-bar>
      <tabbar-item path='/home' activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path='/category' activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/shopcart' activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path='/profile' activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabbarItem from './components/tabbar/TabbarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabbarItem
  }
}
</script>

<style>
@import url(./assets/css/base.css);
</style>

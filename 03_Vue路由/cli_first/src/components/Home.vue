<template>
  <div id="home">
    <h2>我是首页</h2>
    <p>我是首页内容，哈啊哈</p>
    <router-link to="/message">消息</router-link>
    <router-link to="/count">内容</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>

</style>
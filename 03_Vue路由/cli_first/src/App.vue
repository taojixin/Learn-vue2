<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <button @click="LinkToHome">首页</button>
    <button @click="LinkToAbout">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">内容</router-link>
    <router-link v-bind:to="'/user/' + UserId">用户</router-link>
    <router-link 
        :to='{
          path: "/profile",
          query: {name: "张三",age: 18
        }}'
    >Profile</router-link>
    <button @click="clickProfile">Profile</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      UserId: "lisi"
    }
  },
  methods: {
    LinkToHome() {
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    LinkToAbout() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
    clickProfile() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "张三",
          age: 18
        }
      })
    }
  }
}
</script>

<style>
</style>

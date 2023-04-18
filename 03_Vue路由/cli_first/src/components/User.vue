<template>
  <div>
    <h2>我是用户</h2>
    <p>我是首页内容，{{$route.params.id}}</p>
    <p>我是首页内容，{{getUserID}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    getUserID() {
      return this.$route.params.id;
    }
  }
}
</script>

<style>

</style>
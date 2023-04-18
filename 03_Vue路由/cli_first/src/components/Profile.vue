<template>
  <div>
    <h2>我是Profile</h2>
    <p>我是Profile内容</p>
    <p>名字：{{$route.query.name}}</p>
    <p>年龄：{{$route.query.age}}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
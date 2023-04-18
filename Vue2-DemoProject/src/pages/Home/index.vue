<template>
  <div>
    <!-- 三级联动组件， 已经注册为全局组件了所以不用import了 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rand></Rand>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
// 引入其余样式
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rand from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
  components: {
    ListContainer,
    Recommend,
    Rand,
    Like,
    Floor,
    Brand

  }
};
</script>

<style>

</style>
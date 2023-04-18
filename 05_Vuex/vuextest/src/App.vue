<template>
  <div id="app">
    <h1>counter:{{$store.state.counter}}</h1>
    <h1>counter的平方:{{$store.getters.squareCounter}}</h1>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <hello-vuex ></hello-vuex>
  </div>

</template>

<script>
import HelloVuex from './components/HelloVuex.vue'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      // counter: 0
    }
  },
  methods: {
    addCounter() {
      // this.$store.state.counter++
      this.$store.commit('incounter')
    },
    subCounter() {
      // this.$store.state.counter--
      this.$store.commit('oncounter')
    }
  }
}
</script>

<style>
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<REF />-->
  <!--<ReactiveToRefs />-->
  <!--<LifeFun />-->
  <!--<WATCH />-->
  <MOKUAIHUA />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import REF from './components/01响应式数据ref和computed.vue';
import ReactiveToRefs from './components/02响应式数据reactive和toRefs.vue';
import LifeFun from './components/04vue3.0的生命周期函数.vue';
import WATCH from './components/05watch.vue';
import MOKUAIHUA from './components/06模块化妙用1.vue'

export default defineComponent({
  name: 'App',
  components: {
    // REF,
    // ReactiveToRefs,
    // LifeFun,
    // WATCH,
    MOKUAIHUA
  }
});
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<template>
  <h2>{{count}}</h2>
  <h2>{{mulCount}}</h2>
  <button @click="addCount">点击+1</button>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';

  export default defineComponent({
    name: 'REF',
    /**
     * setup 意思就是准备
     * vue3中 不需要写data(){} 和 methods{} 都由setup函数代替
     * vue3中它是重点 它的运行行是在 props, data, methods, 以及生命周期函数之前运行的
     * 这个函数之中不能访问 this
     * 如果要访问 this ...
     * */
    setup() {

      const num = 0;
      /*
      * 定义响应式的数据, vue2.x中我们是在data中定义
      * 在vue3.x中我们需要使用一个ref 这个函数, 它会返回一个响应式的数据对象
      * 在vue3.x中我们写方法不需要在methods内, 直接在setup内即可
      * */
      const count = ref(num) // 这时候count就是一个响应式的数据了, 一般参数传基本数据类型

      const addCount = () => {
        count.value++
        // 我们通过ref函数创建的响应式数据,在操作它的值时,
        // 它的值都是存放在value上面的,
        // 但是在html中只需要写ref函数的返回值count即可, vue的内部已实现 ---->>原理是什么?
      }

      const mulCount = computed(() => {
        /*
        * computed也可以创建响应式数据
        * vue3.x中的计算属性?
        * */
        return count.value * 2
      })

      return {
        count,
        addCount,
        mulCount
      }
    },

  });
</script>

<style>

</style>

<template>
  <h2>{{count}}</h2>
  <h2>{{mulCount}}</h2>
  <button @click="addCount">点击+1</button>
</template>

<script lang="ts">
  import { defineComponent, computed, reactive, toRefs } from 'vue';

  interface DataType {
    count: number;
    addCount: () => void;
    mulCount: any;
  }

  export default defineComponent({
    name: 'ReactiveToRefs',
    setup: function () {
      /**
       * 我们除了可以使用ref函数和computed函数来创建响应式数据之外还可以使用
       * 在使用ref函数和computed的时候我们都是对基本数据类型进行响应式创建
       * 但是要创建一个响应式的对象数据 我们就需要使用到 reactive 以及 toRefs来一起完成
       * reactive这个函数 用来创建对象的响应式数据,
       * 我们需要使用toRefs这个函数来将它reactive创建出来的对象数据变为响应式的
       * */
      const data: DataType = reactive({
        count: 0,
        addCount: () => {
          data.count++
        },
        mulCount: computed(() => {
          return data.count * 2
        })
      })
      const refData = toRefs(data)
      return {
        ...refData
      }
    }

  });
</script>

<style>

</style>

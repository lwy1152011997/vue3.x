<template>
  <div>
    <h1>{{hello}}</h1>
    <button @click="helloC">helloC</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, watch, ref } from 'vue'

  interface DataProps {
    count: number;
    increas: () => void;
    double: any;
  }

  export default defineComponent({
    name: 'WATCH',
    setup() {
      const hello = ref('')
      const helloC = () => {
        hello.value += '0V0'
      }
      // watch的使用1 监视某个值的变化, 当这个值发生变化的时候要做什么事情
      // watch(监视的目标, 回调函数内对这个值发生变化时,做什么操作)
      watch(hello, (newVal, oldVal) => {
        console.log(newVal, oldVal)
        // 回调函数内还有两个参数, 新的值为当前改变了的值, 旧的值为改变之前的值
        document.title = hello.value
      })

      // 如果要监听多个值需要使用数组,放多个监听的值
      /*
        watch([dataA, dataB, () => dataB.xxx], (newVal, oldVal) => {
          // 如果监听的多个对象 newVal 也是一个数组,数组的每一项一一对应监听的数据对象
          // dataB如果是一个响应式的数据对象那么它将会是一个Proxy对象, 我们不能直接进行监听到里面某个具体值的变化
          // 如果监听到dataB对象中的某个确定的值,
          // 我们不能直接通过dataB.xxx的形式对这个值进行监控,
          // 如果以dataB.xxx的形式会失去响应式数据的关联
          // 我们可以将dataB中的某一个需要监听的值进行改写为 () => dataB.xxx 这样 dataB中的xxx属性就可以被监听到了
        })
      */

      return {
        hello,
        helloC
      }
    }
  })
</script>

<style scoped>

</style>
<template>
  <div>hello C</div>
</template>

<script>
  import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate ,onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue';
  export default defineComponent({
    name: 'LifeFun',
    /**
     * vue3.0的声明周期就是内部提供了一些API在setup()函数中对声明周期函数进行处理
     * vue2.x版本的生命周期函数都是在setup() 这个函数中进行书写的
     * */

    /*
    * vue2.x版本的声明周期       和           vue3.x版本的声明周期对比
    * beforeCreate                          在vue3.x版本中 原来写在 beforeCreate created 这两个生命周期函数中带代码
    * created                               都可以直接写在 setup() 这个函数中
    * beforeMount                           onBeforeMount
    * mounted                               onMounted
    * beforeUpdate                          onBeforeUpdate
    * updated                               onUpdated
    * beforeDestroy                         onBeforeUnmounted
    * destroyed                             onUnmounted
    *
    * activated 被激活的                     onActivated
    * deactivated 已失效了的                 onDeactivated
    *
    *                                       新增加了用来做调试的函数
    *                                       onRenderTracked
    *                                       onRenderTriggered
    * */
    setup() {
      console.log('beforeCreate created')
      onBeforeMount(() => {
        console.log('onBeforeMount')
      })
      onMounted(() => {
        console.log('mounted')
      })
      onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
      })
      onUpdated(() => {
        console.log('onUpdated')
      })
      onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
      })
      onUnmounted(() => {
        console.log('onUnmounted')
      })
    }

    /*
      vue2.x版本的生命周期
       beforeCreate() {
      },
      created() {
      },
      beforeMount() {
      },
      mounted() {
      },
      beforeUpdate() {
      },
      updated() {
      },
      beforeDestroy() {
      },
      destroyed() {
      }
    * */

    /*
     keep-alive包裹的动态组件会被缓存，它是一个抽象组件，它自身不会渲染一个dom元素,
     当组件在 keep-alive内被切换，组件里的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
     如keep-alive包裹两个组件：组件A和组件B。当第一次切换到组件A时，组件A的created和activated生命周期函数都会被执行。
     在切换到组件B，这时组件A的deactivated的生命周期函数会被触发。在切换回组件A，组件A的activated生命周期函数会被触发，
     但是它的created生命周期函数不会被触发了。
      activated() {
      },
      deactivated() {
      }
    */

    /* errorCaptured() {} vue的错误处理机制 https://segmentfault.com/a/1190000018606181 文献参考 */
  })
</script>

<style scoped>

</style>
<template>
  <div>
    <h1>x: {{x}}, y: {{y}}</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
  import useMouseXY from '../hooks/useMouseXY.ts';

  export default defineComponent({
    name: 'MOKUAIHUA',
    // setup() {
    //   const x = ref(0);
    //   const y = ref(0);
    //   const mouseClickXY = (e: MouseEvent) => {
    //     x.value = e.pageX
    //     y.value = e.pageY
    //   }
    //
    //   onMounted(() => {
    //     document.addEventListener('click', mouseClickXY)
    //   })
    //
    //   onUnmounted(() => {
    //     document.removeEventListener('click', mouseClickXY)
    //   })
    //
    //   return {
    //     x,
    //     y
    //   }
    // }

    setup() {
      const {x, y} = useMouseXY();

      return {x, y}
    }
  })
</script>

<style scoped>

</style>
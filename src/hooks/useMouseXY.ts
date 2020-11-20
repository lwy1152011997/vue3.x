// x,y 坐标点可能是多个地方使用到的, 我们将获取x,y坐标的功能抽取出来
import { ref, onMounted, onUnmounted } from 'vue'

function useMouseXY() {
  const x = ref(0);
  const y = ref(0);
  const mouseClickXY = (e: MouseEvent) => { // e: MouseEvent 这样写法需要一个loader
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', mouseClickXY)
  })

  onUnmounted(() => {
    document.removeEventListener('click', mouseClickXY)
  })

  return {x, y}
}

export default useMouseXY
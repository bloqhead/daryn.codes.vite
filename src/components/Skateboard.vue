<template>
  <div class="sk83d">
    <spline
      :scene="url"
      auto-render
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const url = ref('https://prod.spline.design/chCK3uPNELwIJXmq/scene.splinecode')
</script>

<style scoped>
.sk83d {
  position: relative;
  overflow: hidden;
  border: 2px solid red;
}

canvas {
  border: 2px solid yellow;
}
</style>

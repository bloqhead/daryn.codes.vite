<template>
  <div ref="container" class="parallax-card">
    <div class="parallax-card__item" :style="cardStyles">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useParallax } from '@vueuse/core'

const container = ref(null)
const parallax = reactive(useParallax(container))

const cardStyles = computed(() => ({
  transform: `rotateX(${parallax.roll * 10}deg) rotateY(${parallax.tilt * 10}deg)`,
}))
</script>

<style lang="scss" scoped>
.parallax-card {
  perspective: 300px;
  transition: all 250ms ease-out;
}

.parallax-card__item {
  overflow: hidden;
  border-radius: var(--radius);
}
</style>

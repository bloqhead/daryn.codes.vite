<template>
  <div class="brand-logos in-view grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 justify-center text-center mt--sm mb--sm">
    <div
      v-for="(v, i) in logos"
      :key="i"
      class="brand-logos__item"
    >
      <fa
        :icon="['fab', i]"
        :class="`color--${i}`"
        :title="v"
        class="fa-7x"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = {
  html5: 'HTML5',
  wordpress: 'WordPress',
  sass: 'Sass',
  js: 'JavaScript',
  php: 'PHP',
  vuejs: 'Vue.js',
  node: 'Node.js',
}
</script>

<style lang="scss" scoped>
.brand-logos {
  .brand-logos__item {
    filter: grayscale(100%) brightness(500%);
    transform: translateY(75%);
    opacity: 0;

    transition:
      transform 0.5s cubic-bezier(0.78, 0.42, 0.11, 0.92),
      filter 1s 10s ease-in-out, opacity 0.5s ease-in-out;
  }

  &.in-view {
    .brand-logos__item {
      filter: grayscale(0) brightness(100%);
      transform: translateY(0);
      opacity: 1;

      @for $i from 1 through 8 {
        &:nth-child(#{$i}) {
          transition-delay: #{$i * 150}ms;
        }
      }
    }
  }

  @media (prefers-reduced-motion) {
    .brand-logos__item {
      filter: none;
      transform: none;
      opacity: 1;
    }
  }
}
</style>

<template>
  <picture class="image-loader">
    <div
      v-if="isLoading"
      class="image-loader__loading"
      :style="styles"
    >
      <div class="image-loader__loading__icon" role="presentation" />
    </div>
    <div
      v-else-if="error"
      class="image-loader__error"
    >
      Error
    </div>
    <img
      v-else
      :src="props.image"
      :alt="props.alt"
      :style="styles"
    >
  </picture>
</template>

<script lang="ts" setup>
import { useImage } from '@vueuse/core'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
})

const styles = {
  width: `${props.width}px`,
  height: `${props.height}px`,
}

const { isLoading, error } = useImage({
  src: props.image,
}, { delay: 2000 })
</script>

<style lang="scss" scoped>
.image-loader {
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__loading,
  &__error {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__loading {

    &__icon {
      --i: 32px;

      display: block;
      width: var(--i);
      height: var(--i);
      background-color: #000;
      background-image: url('./assets/loader.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: var(--i) var(--i);
      transform-origin: center;
      will-change: transform;
      animation: spin 1s linear infinite;
      border-radius: 50%;
      padding: 2.4rem;

      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background-image: url('./assets/loader@2x.png');
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  &__error {

  }
}
</style>

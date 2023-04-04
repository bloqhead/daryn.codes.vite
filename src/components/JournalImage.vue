<template>
  <figure>
    <slot />
    <figcaption v-if="props.caption">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
const props = defineProps({
  caption: {
    type: String,
    required: false,
  },
})
</script>

<style>
figure img {
  display: block;
  width: 100%;
  height: auto;
}
</style>

<style lang="scss" scoped>
figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-mid);
  padding: 1rem;
  margin: 4rem auto;
  border-radius: 10px;
  box-shadow: 0 0 0 3px var(--color-mid);
  overflow: hidden;
  max-width: 64rem;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}

figcaption {
  display: block;
  text-align: center;
  font-size: 1.4rem;
  font-style: italic;
  color: #fff;
}
</style>

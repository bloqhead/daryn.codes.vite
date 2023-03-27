<template>
  <h1
    ref="targetTitle"
    class="brush title"
    :class="{ 'is-loaded': isMounted }"
  >
    <span
      class="word"
      :data-word="title"
    >
      <template v-for="(i, idx) in chars" :key="idx">
        <span
          :data-letter="i"
          :style="`--idx: ${idx}`"
          class="letter"
        >
          {{ i }}
        </span>
      </template>
    </span>
  </h1>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})

const targetTitle = ref(null)
const isMounted = ref(false)

const chars = computed(() => {
  return [...props.title].map(i => i)
})

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true
  }, 300)
})

onBeforeUnmount(() => {
  isMounted.value = false
})
</script>

<style lang="scss" scoped>
@use '../styles/mixins' as m;
@use '../styles/variables' as v;

.title {
  --b1: var(--color-lime);
  --b2: var(--color-teal);
  --w: 10px;
  --w-sml: 7px;
  --t: 0.6s;

  position: relative;
  overflow: visible;
  white-space: break-spaces;

  @keyframes titleBefore {
    from {
      opacity: 0;
      transform: translate(0, 0) scale(0) rotate(0deg);
    }
    to {
      opacity: 1;
      transform: translate(-0.25em, -0.28em) scale(1.15) rotate(20deg);
    }
  }

  @keyframes titleAfter {
    from {
      opacity: 0;
      transform: translate(0, 0) scale(0) rotate(0deg);
    }
    to {
      opacity: 1;
      transform: translate(-0.2em, -0.15em) scale(0.75) rotate(15deg);
    }
  }

  &:before,
  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    content: "";
    border-left-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    transform-origin: center;
    opacity: 0;
  }

  &:before {
    border-bottom-color: var(--b1);
    animation: titleBefore var(--t) forwards ease-in-out 1;
    animation-delay: var(--t);
  }

  &:after {
    border-bottom-color: var(--b2);
    animation: titleAfter var(--t) forwards ease-in-out 1;
    animation-delay: 0.1s;
  }

  @media (max-width: 799px) {
    &:before,
    &:after {
      border-left-width: var(--w-sml);
      border-right-width: var(--w-sml);
      border-bottom-width: var(--w-sml);
    }
  }

  @media #{v.$bp-medium} {
    &:before,
    &:after {
      border-left-width: var(--w);
      border-right-width: var(--w);
      border-bottom-width: var(--w);
    }
  }

  .word {
    display: inline-block;
  }

  .letter {
    position: relative;
    display: inline-block;
    overflow: visible;
    white-space: break-spaces;
    transition:
      transform 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      opacity 150ms ease-in-out,
      filter 500ms ease-in-out;
    transition-delay: calc(var(--idx) * 50 * 1ms);
    transform-origin: center;
    transform: translateX(24rem) scale(0.5);
    opacity: 0;
  }

  &.is-loaded {

    .letter {
      transform: translateX(0) scale(1);
      opacity: 1;
      filter: grayscale(0) brightness(1);
    }
  }

  @media (prefers-reduced-motion) {
    .letter {
      transition: none !important;
      transform: translate(0,0) scale(1) !important;
      filter: none !important;
      opacity: 1 !important;
    }
  }
}

.brush {
  font-family: var(--font-display);
  font-size: clamp(8rem, 14rem, 18vw);

  // margin
  &:not([class*="mt-"])
  &:not([class*="mb-"])
  &:not([class*="mx-"])
  &:not([class*="my-"])
  &:not([class*="mr-"])
  &:not([class*="ml-"])
  &:not([class*="m-"]) {
    margin: 0;
  }

  // padding
  &:not([class*="pt-"])
  &:not([class*="pb-"])
  &:not([class*="px-"])
  &:not([class*="py-"])
  &:not([class*="pr-"])
  &:not([class*="pl-"])
  &:not([class*="p-"]) {
    padding: 0;
  }
}
</style>

<template>
  <div class="lead">
    <div class="lead__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.lead__content > *:last-of-type {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>

<style lang="scss" scoped>
@use '../styles/variables' as v;
@use '../styles/mixins' as m;

.lead {
  position: relative;
  font-size: 1.8rem;
  padding: 2rem 2rem 3rem 2rem;
  margin: 0 0 4rem 0;

  &:after, &:before {
    --i: 5px;
    position: absolute;
    display: block;
    content: "";
    height: var(--i);
    width: 100%;
    border-radius: calc(var(--i) / 2);
    background: var(--link-gradient);
    transform-origin: top center;
  }

  &:before {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    --i: 18px;

    top: calc(100% + (var(--i) / 6));
    left: 50%;
    width: var(--i);
    height: var(--i);
    border-radius: 3px;
    transform: rotate(45deg) translateY(-50%);
  }

  &__content {
    background: linear-gradient(to top, var(--color-mid) 10%, transparent 50%);
    border-radius: 2rem;
    padding: 2rem;
  }

  @media #{v.$bp-medium} {
    margin: 0 0 6rem 0;
    padding: 2rem 2rem 4rem 2rem;
    font-size: 2.4rem;

    &:before {
      --i: 6px;
    }

    &:after {
      --i: 24px;
    }

    &__content {
      padding: 3rem;
    }
  }
}
</style>

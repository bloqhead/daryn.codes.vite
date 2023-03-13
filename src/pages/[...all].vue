<template>
  <div>
    <page-title title="Oops!" />

    <p class="intro">
      Oops! Looks like that content was removed or never existed.
    </p>

    <p>
      <router-link to="/">
        &larr; Take me home
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .intro {
    margin-bottom: 1.5em;
  }
</style>

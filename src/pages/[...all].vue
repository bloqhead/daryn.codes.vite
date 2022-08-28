<template>
  <div>
    <h1 class="brush title">
      Oops!
    </h1>
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

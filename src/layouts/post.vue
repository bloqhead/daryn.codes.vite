<template>
  <div class="breadcrumb">
    <p>
      <router-link
        to="/journal/"
        class="breadcrumb__link"
      >
        &larr; Back
      </router-link>
    </p>
  </div>

  <article class="journal-entry">
    <header class="journal-entry__header">
      <div class="journal-entry__title">
        <h1>
          {{ meta.title }}
        </h1>
      </div>
      <div class="journal-entry__postdate">
        <format-date :date="meta.date" />
      </div>
    </header>

    <div class="journal-entry__body">
      <router-view />
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import FormatDate from '~/components/FormatDate.vue'

const meta = computed((): any => {
  return useRouter().currentRoute.value.meta
})
</script>

<style lang="scss" scoped></style>

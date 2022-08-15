<template>
  <div class="page-content">
    <h1 class="brush title">Journal.</h1>

    <div class="intro">
      <p>A collection of thoughts and findings.</p>
    </div>

    <div class="journal-list">
      <ul class="m-0 p-0">
        <li
          v-for="(v, k) in posts"
          :key="k"
          class="mb-4"
        >
          <h3 class="journal-list__title">
            <router-link :to="v.path">
              {{ v.meta.title }}
            </router-link>
          </h3>
          <div class="journal-entry__postdate">
            <format-date :date="v.meta.date" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import FormatDate from '~/components/FormatDate.vue'
import { Meta } from '~/types'

// prepare posts and sort by date
const posts = computed(() => {
  const items = useRouter().getRoutes()
    .filter((i) => {
      return i.path.startsWith('/journal/') && i.meta?.layout === 'post'
    })
    .sort((a: Meta, b: Meta): number => {
      return new Date(a.meta.date).getTime() > new Date(b.meta.date).getTime() ? -1 : 1
    })

  return items
})
</script>

<route lang="yaml">
meta:
  - name: description
    content: Topics that span the gamut of web development, UX, Vue.js, and other similar topics.
  - name: author
    content: Daryn St. Pierre
  - key: og:url
    property: og:url
    content: https://daryn.codes/journal
  - key: og:title
    property: og:title
    content: Journal
  - key: twitter:title
    name: twitter:title
    content: Journal
</route>

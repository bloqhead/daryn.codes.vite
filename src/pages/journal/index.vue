<template>
  <div>
    <page-title title="Journal" />

    <div class="intro">
      <p>
        A collection of thoughts and findings.
      </p>
    </div>

    <div class="journal-list">
      <ul class="m-0 p-0">
        <li
          v-for="(route, idx) in posts"
          :key="idx"
          class="mb-4"
        >
          <h3 class="journal-list__title">
            <router-link :to="route.path">
              {{ route.meta.title }}
            </router-link>
          </h3>
          <div class="journal-entry__postdate">
            <format-date :date="route.meta.date" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FormatDate from '~/components/FormatDate.vue'
import { postsStore } from '~/store/posts'

const posts = computed(() => postsStore().posts)

const metaDescription = 'Topics that span the gamut of web development and life.'
const metaTitle = 'Journal'

useHead({
  title: metaTitle,
  meta: [
    { name: 'description', content: metaDescription },
    { name: 'og:title', content: metaTitle },
    { name: 'og:description', content: metaDescription },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
  ],
})
</script>

<style lang="scss" scoped>
.journal-list {
}

.journal-list__item {
  margin: 0 0 3rem 0;
}

.journal-list__summary {
}

.journal-list__title {
  margin: 0 0 0.8rem 0;

  a {
    display: initial;
    text-decoration: none;

    &:after {
      display: none;
    }

    &:focus {
      text-decoration: underline;
    }
  }
}
</style>

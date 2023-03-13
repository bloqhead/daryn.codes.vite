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
            <format-date :date="getDateAsString(v.meta.date)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormatDate from '~/components/FormatDate.vue'
import { postsStore } from '~/store/posts'

const posts = postsStore().getPosts()
const getDateAsString = (v: any) => v as string
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

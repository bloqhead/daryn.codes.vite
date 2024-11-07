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
    </header>

    <div class="journal-entry__info">
      <div
        v-show="meta.ttr"
        class="journal-entry__ttr"
        title="Time to read"
      >
        <div>
          <fa :icon="['fa', 'glasses']" />
        </div>
        <div v-if="timeToRead">
          <p>{{ timeToRead }}</p>
        </div>
      </div>
      <div>
        <format-date
          v-if="meta && meta.date"
          :date="meta.date"
        />
      </div>
    </div>

    <div ref="postBody" class="journal-entry__body">
      <router-view />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { VNodeRef } from 'vue'
import { useRoute } from 'vue-router'
import FormatDate from '~/components/FormatDate.vue'

const meta = ref()
const postBody = ref<VNodeRef>('')

// update meta data on each route change
watch(useRoute(), (route) => {
  meta.value = route.meta
}, { immediate: true })

const timeToRead = computed((): string => {
  const time = meta.value.ttr
  return `${time} minute${time > 1 && 's'}`
})

const encodedTitle = computed((): string => {
  return encodeURIComponent(meta.value.title)
})

const ogImage = `https://kryog.onrender.com/api/og?title=${encodedTitle.value}&ttr=${meta.value.ttr}`

useHead({
  title: meta.value.title,
  meta: [
    {
      name: 'description',
      content: meta.value.description || meta.value.excerpt,
    },
    {
      property: 'og:title',
      content: meta.value.title,
    },
    {
      property: 'og:description',
      content: meta.value.description || meta.value.excerpt,
    },
    {
      property: 'og:image',
      content: ogImage,
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      name: 'twitter:image',
      content: ogImage,
    },
    {
      name: 'twitter:description',
      content: meta.value.description || meta.value.excerpt,
    },
    {
      name: 'twitter:label1',
      value: 'Time to read',
    },
    {
      name: 'twitter:data1',
      value: timeToRead,
    },
  ],
})
</script>

<style lang="scss" scoped></style>

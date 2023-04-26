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
        <div>
          <p>{{ timeToRead }}</p>
        </div>
      </div>
      <div>
        <format-date :date="meta.date" />
      </div>
    </div>

    <div ref="postBody" class="journal-entry__body">
      <router-view />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { VNodeRef } from 'vue'
import { useRouter } from 'vue-router'
import FormatDate from '~/components/FormatDate.vue'

const meta = computed((): any => {
  return useRouter().currentRoute.value.meta
})

const timeToRead = computed((): string => {
  const label = meta.value.ttr > 1 ? 'minutes' : 'minute'
  return `${meta.value.ttr} ${label}`
})

const postBody = ref<VNodeRef>('')
const encodedTitle = encodeURIComponent(meta.value.title)
const ogImage = `https://kryog.vercel.app/api/og?title=${encodedTitle}&ttr=${meta.value.ttr}`

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

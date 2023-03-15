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
        class="journal-entry__ttr"
        title="Time to read"
        v-show="timeToRead"
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
import { useRouter } from 'vue-router'
import readingTime from '~/composables/readingTime'
import FormatDate from '~/components/FormatDate.vue'

const meta = computed((): any => {
  return useRouter().currentRoute.value.meta
})

const timeToRead = ref('')
const postBody = ref('');

onMounted(() => {
  timeToRead.value = readingTime(postBody.value.textContent)
})

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
      content: meta.value.image || 'https://daryn.codes/og@2x.png',
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      name: 'twitter:image',
      content: meta.value.image || 'https://daryn.codes/og@2x.png',
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

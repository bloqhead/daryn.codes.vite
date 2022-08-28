<template>
  <div class="page-wrapper" :data-floating-label="store.tagline">
    <global-header />

    <div class="content" role="main">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-left" mode="out-in" appear>
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <!-- .content -->

    <global-footer />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import GlobalFooter from '~/components/GlobalFooter.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'

const store = siteStore()

// update the stored tagline on route change
watch(useRoute(), () => store.setTagline(), { immediate: true })

useHead({
  title: 'Daryn St. Pierre, Front-End Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.',
    },
    {
      name: 'theme-color',
      content: '#f54768',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>


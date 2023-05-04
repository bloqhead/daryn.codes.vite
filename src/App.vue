<template>
  <div class="page-wrapper" :data-floating-label="store.tagline">
    <global-header />

    <div class="content" role="main">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-left" mode="out-in" appear>
          <div :key="route.path" class="page-content">
            <component :is="Component" :key="route.path" />
          </div>
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
import { siteStore } from '~/store'

import GlobalFooter from '~/components/GlobalFooter.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'

const store = siteStore()

// update the stored tagline on route change
watch(useRoute(), () => {
  store.setTagline()
}, { immediate: true })

useHead({
  meta: [
    { name: 'theme-color', content: '#f54768' },
    { property: 'og:image', content: 'https://daryn.codes/og@2x.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://daryn.codes/og@2x.png' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  ],
})
</script>


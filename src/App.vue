<template>
  <div class="page-wrapper" :data-floating-label="store.tagline">
    <global-header />

    <div class="content" role="main">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-left" mode="out-in">
          <main class="page-content" :key="route.path">
            <component :is="Component" :key="route.path" />
          </main>
          <!-- .page-content -->
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
const store = siteStore()
import GlobalFooter from "~/components/GlobalFooter.vue";
import GlobalHeader from "~/components/GlobalHeader.vue";

// update the stored tagline on route change
watch(useRoute(), () => store.setTagline(), { immediate: true })

useHead({
  title: 'Daryn St. Pierre, Front-End Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Daryn St. Pierre is a Front-End Web Developer based in St. Petersburg Florida.'
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


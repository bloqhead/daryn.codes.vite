<template>
  <global-header />

  <div class="page-wrapper" data-floating-label="Daryn St. Pierre // Front End Web Dev">
    <div class="content" role="main">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-left" mode="out-in">
          <main class="page-content" :key="route.path">
            <component :is="Component" :key="route.path" />
          </main>
        </transition>
      </router-view>
    </div>
  </div>

  <global-footer />
</template>

<script setup lang="ts">
import GlobalFooter from "~/components/GlobalFooter.vue";
import GlobalHeader from "~/components/GlobalHeader.vue";

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


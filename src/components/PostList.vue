<template>
  <div>
    <h3 class="journal-list__title">
      <router-link :to="props.path">
        {{ props.title }}
      </router-link>
    </h3>
    <div class="journal-entry__postdate">
      <format-date :date="props.date" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FormatDate from '~/components/FormatDate.vue'

const props = defineProps<{
  path: object,
  title: string,
  date: string,
}>()
</script>

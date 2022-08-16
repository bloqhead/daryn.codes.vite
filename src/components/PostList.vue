<template>
  <div class="journal-list__item">
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

const props = defineProps({
  path: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
})
</script>

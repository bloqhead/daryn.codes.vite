<template>
  <div>
    <fa :icon="['fa', 'clock']" />
    &nbsp;
    <time :datetime="date">
      {{ niceDate }}
    </time>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps<{ date: string }>()
const niceDate = computed(() => {
  const rawDate = new Date(props.date)
  const adjuster = rawDate.getTime() + rawDate.getTimezoneOffset() * 60000
  const fixedDate = new Date(adjuster).toISOString()

  return dayjs(fixedDate).format('MMM DD, YYYY')
})
</script>

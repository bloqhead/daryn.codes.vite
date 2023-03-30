<template>
  <div class="post-date">
    <div>
      <fa :icon="['fa', 'clock']" />
    </div>
    <div>
      <time :datetime="niceDate">
        {{ niceDate }}
      </time>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

const props = defineProps({
  date: {
    type: [Date, String, Number],
    required: true,
  },
})

const niceDate = computed((): string => {
  const rawDate = new Date(props.date)
  const adjuster = rawDate.getTime() + rawDate.getTimezoneOffset() * 60000
  const fixedDate = new Date(adjuster).toISOString()

  return dayjs(fixedDate).format('MMM DD, YYYY')
})
</script>

<style lang="scss" scoped>
.post-date {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
</style>

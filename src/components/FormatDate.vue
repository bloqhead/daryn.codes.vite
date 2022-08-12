<template>
  <div>
    <fa :icon="['fa', 'clock']" />
    &nbsp;
    <time :datetime="date">
      {{ niceDate }}
    </time>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  computed: {
    niceDate() {
      const rawDate = new Date(this.date);
      const fixedDate = new Date(
        rawDate.getTime() + rawDate.getTimezoneOffset() * 60000
      ).toISOString();

      const newDate = dayjs(fixedDate).format("MMM DD, YYYY");

      return newDate;
    },
  },
};
</script>

<template>
  <div>
    <h3 class="journal-list__title">
      <g-link :to="post.path">{{ post.title }}</g-link>
    </h3>
    <div class="journal-entry__postdate">
      <format-date :date="post.date" />
    </div>
  </div>
</template>

<script>
import FormatDate from "@/components/FormatDate";

export default {
  name: "PostList",
  props: ["post"],
  components: {
    FormatDate
  }
};
</script>
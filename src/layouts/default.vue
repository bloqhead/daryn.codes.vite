<template>
  <div class="page-wrapper" data-floating-label="Daryn St. Pierre // Front End Web Dev">
    <global-header />

    <div class="content" role="main">
      <main class="page-content">
        <RouterView />
      </main>
    </div>
    <!-- .content -->

    <global-footer />
  </div>
  <!-- .page-wrapper -->
</template>

<script setup lang="ts">
import GlobalFooter from "~/components/GlobalFooter.vue";
import GlobalHeader from "~/components/GlobalHeader.vue";
</script>

<template>
  <div class="page-content">
    <h1 class="brush title">
      Work
    </h1>

    <div class="intro">
      <p>
        Select projects I've worked on that don't violate NDAs.
      </p>
    </div>

    <ul class="project-list xl:grid xl:grid-cols-2 col-gap-6">
      <li
        v-for="(item, idx) in items"
        :key="idx"
        class="project-list__item"
        itemscope
        itemtype="http://schema.org/CreativeWork"
      >
        <a
          :href="item.url"
          rel="noindex nofollow"
          class="project-list__link browser-chrome"
          itemprop="url"
        >
          <img
            v-if="item.image"
            :src="`/images/work/${item.image}`"
            :alt="`A screenshot of the ${item.name} project`"
            class="project-list__item-image"
          />
          <!-- .project-list__item-image -->
          <div class="project-list__item-content">
            <h3 itemprop="headline" class="project-list__item-title angle-forward">
              <div class="angle-reverse">
                {{ item.name }}
              </div>
            </h3>
            <div class="project-list__item-faux-link angle-reverse">
              <div class="angle-forward">
                <span>
                  View
                </span>
                <fa :icon="['fa', 'arrow-right']" />
              </div>
            </div>
          </div>
          <!-- .project-list__item-content -->
        </a>
        <div class="project-list__item-tasks">
          <p>
            {{ item.summary }}
          </p>
        </div>
        <!-- .project-list__item-summary -->
      </li>
      <!-- .project-list__item -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { workStore } from '~/store/work';

const items = workStore().getWork()
</script>

<style lang="scss" scoped>
</style>

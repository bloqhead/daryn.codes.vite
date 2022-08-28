<template>
  <div class="music">
    <div v-if="error">
      <p>Error retrieving scrobble data.</p>
    </div>
    <div
      v-if="items && !error"
      class="music__content"
    >
      <ul class="music__items">
        <li v-for="(item, idx) of items" :key="idx">
          <a :href="item.url">
            <div class="music__icon">
              <fa :icon="['fas', 'compact-disc']" class="fa-2x" />
            </div>
            <div>
              <h5 class="music__album-title">
                {{ item.name }}
              </h5>
              <!-- <span class="music__separator">by</span> -->
              <span class="music__artist">
                {{ item.artist.name }}
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import type { Music } from '~/types'

const items = ref<Music>()
const error = ref<Boolean>(false)

const fetchLatestScrobbles = () => {
  axios
    .get('https://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'user.getlovedtracks',
        user: import.meta.env.VITE_LASTFM_USERNAME,
        api_key: import.meta.env.VITE_LASTFM_API_KEY,
        format: 'json',
        limit: 3,
      },
    })
    .then((res) => {
      items.value = res.data.lovedtracks.track
    })
    .catch((err) => {
      error.value = true
      throw err
    })
}

onMounted(() => fetchLatestScrobbles())
</script>

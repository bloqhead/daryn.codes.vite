<template>
  <div class="music">
    <div class="music__content" v-if="items && !error">
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
import axios from 'axios';
import type { Music } from './types'

const items = ref<Music>([])
const error = ref<Boolean>(false)

const fetchLatestScrobbles = () => {
  const username = import.meta.env.VITE_LASTFM_USERNAME
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY
  const api = `https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${username}&api_key=${apiKey}&format=json&limit=3`;

  axios
    .get(api)
    .then((res) => {
      items.value = res.data.lovedtracks.track;
    })
    .catch((err) => {
      error.value = true;
      console.log(err);
    });
}

onMounted(() => {
  fetchLatestScrobbles()
})
</script>

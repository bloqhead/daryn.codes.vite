<template>
  <div class="music">
    <div v-if="hasError">
      <p>Error retrieving scrobble data.</p>
    </div>
    <div
      v-if="items && !hasError"
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
import type { Music } from '~/types'

const items = ref<Music>()
const hasError = ref<Boolean>(false)

const fetchLatestScrobbles = async () => {
  const userName = 'kryosleep'
  const apiKey = import.meta.env.VITE_LASTFM_API_KEY
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${userName}&api_key=${apiKey}&limit=3&nowplaying=false&format=json`

  try {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    })

    if (res.ok) {
      const json = await res.json()
      items.value = await json.lovedtracks.track
    } else {
      hasError.value = true
      throw new Error('error')
    }
  } catch(error) {
    hasError.value = true
    console.log(error)
  }
}

onMounted(() => fetchLatestScrobbles())
</script>

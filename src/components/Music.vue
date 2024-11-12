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
    }
    else {
      hasError.value = true
      throw new Error('error')
    }
  }
  catch (error) {
    hasError.value = true
  }
}

onMounted(() => fetchLatestScrobbles())
</script>

<style lang="scss" scoped>
.music__items {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  justify-content: center;
  padding: 0;
  margin: 0;

  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    padding: 1.5rem;
    transition: all 0.2s ease-in-out;
    transform-origin: center;
    border-radius: var(--radius-xl);
    background-color: rgba(#000, 0.15);

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      border-radius: 10px;
      transform-origin: center;
      transform: translateY(2rem);
      background-color: rgba(#000, 0.35);
      opacity: 0;
      transition:
        opacity 0.2s ease-in-out,
        transform 0.2s cubic-bezier(0.8, 0.33, 0.42, 0.85);
    }

    &:hover {

      .music__icon {
        color: #fff;
        animation-name: icon-spin;
        animation-delay: 0;
        animation-direction: normal;
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in;
      }

      &:after {
        transform: translateY(0);
        opacity: 1;
      }
    }

    >div {
      position: relative;
      z-index: 1;

      &:first-of-type {
        margin-right: 1.5em;
      }
    }
  }
}

.music__cover {
  border-radius: 10px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.music__icon {
  display: grid;
  place-items: center;
  color: var(--color-shade);
  transition:
    transform 350ms ease-in-out,
    color 350ms ease-in-out;
}

.music__album-title {
  font-size: 1.2em;
  letter-spacing: 0;
  margin: 0;

  &:after {
    display: none;
  }
}

.music__separator {
  color: var(--color-shade);
}

.music__profile-link {
  display: inline-block;
  color: var(--color-apple-music);
  background-color: var(--color-dark-35);
  border-radius: 3px;
  padding: 3px 5px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:active {
    color: var(--color-light);
  }
}
</style>

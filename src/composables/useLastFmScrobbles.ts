import type { Music } from '~/types'

export function useLastFmScrobbles() {
  const items = ref<Music>()
  const hasError = ref<boolean>(false)
  const isLoading = ref<boolean>(false)

  async function fetchLatestScrobbles(limit = 3) {
    const userName = 'kryosleep'
    const apiKey = import.meta.env.VITE_LASTFM_API_KEY
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getlovedtracks&user=${userName}&api_key=${apiKey}&limit=${limit}&nowplaying=false&format=json`

    isLoading.value = true
    hasError.value = false

    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      items.value = data.lovedtracks.track
    }
    catch (error) {
      console.error('Error fetching Last.fm scrobbles:', error)
      hasError.value = true
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    items: readonly(items),
    hasError: readonly(hasError),
    isLoading: readonly(isLoading),
    fetchLatestScrobbles,
  }
}

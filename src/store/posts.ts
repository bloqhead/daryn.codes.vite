import { computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const postsStore = defineStore('postsStore', () => {
  const posts = computed(() => {
    return useRouter().getRoutes()
      .filter((i) => {
        return i.path.startsWith('/journal/') && i.meta?.layout === 'post'
      })
      .sort((a, b) => {
        return +new Date(b.meta.date as number) - +new Date(a.meta.date as number)
      })
      .map((i) => {
        return { ...i, path: `${i.path}/` }
      })
  })

  return { posts }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(postsStore as any, import.meta.hot))

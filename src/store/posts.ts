import { acceptHMRUpdate, defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import type { Meta } from '~/types'

export const postsStore = defineStore('posts', {
  actions: {
    getPosts() {
      const items = useRouter().getRoutes()
        .filter((i) => {
          return i.path.startsWith('/journal/') && i.meta?.layout === 'post'
        })
        .sort((a: Meta, b: Meta): number => {
          return new Date(a.meta.date).getTime() > new Date(b.meta.date).getTime() ? -1 : 1
        })

      return items
    }
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(postsStore, import.meta.hot))

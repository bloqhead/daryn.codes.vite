import { acceptHMRUpdate, defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import type { Meta } from '~/types'

export const postsStore = defineStore('posts', {
  actions: {
    getPosts() {
      const items = useRouter().getRoutes()
        .filter((i) => {
          // get only journal entry routes that use the post layout
          return i.path.startsWith('/journal/') && i.meta?.layout === 'post'
        })
        .sort((a: Meta, b: Meta): number => {
          // sort the posts by ascending order
          return new Date(a.meta.date).getTime() > new Date(b.meta.date).getTime() ? -1 : 1
        })
        .map((i) => {
          // give the url a trailing slash
          return {
            ...i,
            path: `${i.path}/`
          }
        })

      return items
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(postsStore, import.meta.hot))

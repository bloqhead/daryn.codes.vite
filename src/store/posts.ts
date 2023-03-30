import { acceptHMRUpdate, defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const postsStore = defineStore('posts', {
  actions: {
    getPosts() {
      return useRouter().getRoutes()
        .filter((i) => {
          return i.path.startsWith('/journal/') && i.meta?.layout === 'post'
        })
        .sort((a, b) => {
          return +new Date(b.meta.date as number) - +new Date(a.meta.date as number)
        })
        .map((i): object => {
          return {
            ...i,
            path: `${i.path}/`,
          }
        })
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(postsStore, import.meta.hot))

import { acceptHMRUpdate, defineStore } from 'pinia'

export const siteStore = defineStore('siteStore', () => {
  const tagline = ref<string>('')

  const titles = ref([
    'Front-End Web Developer',
    'JAMStack\'r',
    'Front-End Engineer',
    'Pizza Evangelist',
    'CodePen 10x\'er',
    'Cat Hoarder',
    '90s Byproduct',
    'Code jockey',
    'Text editor connoisseur',
    'Occasional Artist',
    'JavaScript\'r',
    'jQuery Alumni',
    'Fan of eating and drinking',
    'Animator of web things',
    'Good Speller',
    'Vue.js Junkie',
    'WordPress Masochist',
    'Self-Proclaimed Cyberpunk',
    'Bash Hax0r',
    'Black Lives Matter',
    'Elden Ring Tarnished',
  ])

  const setTagline = () => {
    const rand = titles.value[Math.floor(Math.random() * titles.value.length)]

    tagline.value = `Daryn St. Pierre // ${rand}`
  }

  return { tagline, setTagline }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(siteStore as any, import.meta.hot))

import { acceptHMRUpdate, defineStore } from 'pinia'

export const siteStore = defineStore('site', () => {
  const tagline = ref<string>()

  const setTagline = () => {
    const titles = [
      'Front End Web Developer',
      'JAMStack\'r',
      'Front End Engineer',
      'Pizza evangelist',
      'CodePen 10x\'er',
      'Cat Hoarder',
      '80s and 90s era byproduct',
      'Code jockey',
      'Text editor connoisseur',
      'Occasional artist',
      'Owner of too many video games',
      'JavaScript abuser',
      'Fan of eating and drinking',
      'Animator of web things',
      'Good speller',
      'Vue.js junkie',
      'WordPress tamer',
      'Dark Souls masochist',
      'Self-proclaimed Cyberpunk',
      'Bash hax0r',
      'Black Lives Matter',
      'Elden Ring Addict',
      'Capitalism is the enemy'
    ]

    const rand = titles[Math.floor(Math.random() * titles.length)]

    tagline.value = `Daryn St. Pierre // ${rand}`
  }

  return {
    tagline,
    setTagline,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(siteStore, import.meta.hot))

import { acceptHMRUpdate, defineStore } from 'pinia'

export const workStore = defineStore('work', () => {
  const items = ref([
    {
      name: 'DEMIGODS',
      url: 'https://github.com/bloqhead/demigods',
      image: 'kuma-gui.png',
      summary: `
        A simple API built on Express and Node that contains information about all weapons in the
        Elden Ring universe. Driven entirely by handcrafted JSON files that were sourced from
        various online data.
      `,
    },
    {
      name: 'Suncoast Breweries',
      url: 'https://suncoastbrews.com/',
      image: 'suncoast-brews.png',
      summary: `
        An interactive map and search tool for all breweries in the Tampa Bay area. Built on Vue and
        static HTML, our tool allows you to filter by things like food, kid-friendly, guest taps, and
        more!
      `
    },
    {
      name: 'Kuma Website',
      url: 'https://kuma.io/',
      image: 'kuma-website.png',
      summary: `
        Kuma is an open-source control plane solution for service mesh and microservices. I was
        tasked with building a website that served as both a presentation of the product itself,
        and as housing for its documentation. For this, I used VuePress, coupled with a layer of
        customization that adds features VuePress does not currently offer.'
      `,
    },
    {
      name: 'Kuma GUI',
      url: 'https://github.com/kumahq/kuma-gui',
      image: 'kuma-gui.png',
      summary: `
        The Kuma GUI is a front-end application for managing Kuma resources, policies, and other
        data from the comfort of your web browser. Built entirely in Vue.js, it runs from within
        Kuma itself and offers at-a-glance details about your Dataplanes, various Policies, and
        other mesh service information.
      `
    },
  ])

  const getWork = () => items

  return {
    items,
    getWork,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(workStore, import.meta.hot))

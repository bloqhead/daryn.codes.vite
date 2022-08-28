import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import type { DefineComponent } from 'vue'

// Font Awesome
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'

import {
  faArrowRight,
  faClock,
  faCode,
  faCompactDisc,
  faEnvelope,
  faTerminal,
} from '@fortawesome/pro-solid-svg-icons'

import {
  faCodepen,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faMastodon,
  faNode,
  faPhp,
  faSass,
  faTwitter,
  faVuejs,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'

// app, routes, types
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

// styles
import '@fortawesome/fontawesome-svg-core/styles.css'
// import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/styles.scss'

// add FA icons
library.add(
  faArrowRight,
  faClock,
  faCode,
  faCodepen,
  faCompactDisc,
  faEnvelope,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faMastodon,
  faNode,
  faPhp,
  faSass,
  faTerminal,
  faTwitter,
  faVuejs,
  faWordpress,
)

config.autoAddCss = false

// setup routes
const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return {
          ...savedPosition,
          behavior: 'smooth',
        }
      }

      return {
        top: 0,
        left: 0,
        behavior: 'smooth',
      }
    },
  },
  (ctx) => {
    ctx.app.component('fa', FontAwesomeIcon as unknown as DefineComponent<FontAwesomeIconProps>)

    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)

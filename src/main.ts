import type { DefineComponent } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'

// Font Awesome
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Spline
// import Spline from 'spline-vue/v3'

import type { UserModule } from './types'

import {
  faCodepen,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNode,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'

import {
  faArrowRight,
  faClock,
  faCode,
  faCompactDisc,
  faEnvelope,
  faGlasses,
  faTag,
  faTerminal,
} from '@fortawesome/pro-solid-svg-icons'
import generatedRoutes from '~pages'
// app, routes, types
import App from './App.vue'

// styles
import '@fortawesome/fontawesome-svg-core/styles.css'
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
  faGlasses,
  faHtml5,
  faJs,
  faLinkedin,
  faNode,
  faSass,
  faTerminal,
  faTag,
  faVuejs,
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

import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/styles.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faArrowRight,
  faCode,
  faClock,
  faTerminal,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faCodepen,
  faTwitter,
  faGithub,
  faHtml5,
  faSass,
  faPhp,
  faJs,
  faVuejs,
  faWordpressSimple,
  faNode,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(
  faInstagram,
  faCodepen,
  faTwitter,
  faGithub,
  faHtml5,
  faSass,
  faPhp,
  faJs,
  faVuejs,
  faWordpressSimple,
  faNode,
  faMastodon,
  faEnvelope,
  faArrowRight,
  faCode,
  faClock,
  faTerminal,
  faCompactDisc,
);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, routes, isClient, initialState }) => {
    // register global components
    app.component('fa', FontAwesomeIcon);

    // install all modules under `modules/`
    // Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    //   .forEach(i => i.install?.(app))
  },
)

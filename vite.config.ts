import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import { VitePWA } from 'vite-plugin-pwa'
// import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import Shiki from 'markdown-it-shiki'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      // wrapperClasses: 'prose prose-sm m-auto text-left',
      wrapperClasses: '',
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Shiki, {
          theme: 'vitesse-dark',
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css}'],
        navigateFallback: null,
      },
      manifest: {
        name: 'daryn.codes',
        short_name: 'daryn.codes',
        theme_color: '#f54768',
        icons: [
          {
            src: '/favicon/180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    // VueI18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   include: [path.resolve(__dirname, 'locales/**')],
    // }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    globals: true,
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi'],
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap({
        hostname: 'https://daryn.codes',
      })
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: [
      'workbox-window',
      /vue-i18n/,
      '@fortawesome/*',
    ],
  },
})

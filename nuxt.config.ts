// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import path from 'path';
const outDir = path.join(__dirname, '../backend/dist');

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,

  // buildDir: '../backend/dist',

  nitro: {
    output: {
      dir: outDir,
      serverDir: path.join(outDir, 'server'),
      publicDir: path.join(outDir, 'public')
    }
  },

  devServer: {
    port: 8000
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:9004/api/'
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      titleTemplate: '%s - tools',
      title: '<Title>',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/nuxt.svg' }]
    }
  },

  css: ['@/assets/style.scss'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxtjs/eslint-module',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }
    ]
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
});

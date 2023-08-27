export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-graphql-client",
    "@pinia/nuxt",
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  imports: {
    dirs: ["stores"],
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      wordpressUrl: "https://neurodiversegemeinschaft.de/staging/graphql",
    },
  },

  // router: {
  //   linkActiveClass: "active",
  //   linkExactActiveClass: "exact-active",
  // }
});

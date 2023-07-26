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
  ],

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      wordpressUrl: "https://neurodiversegemeinschaft.de/graphql",
    },
  },

  // router: {
  //   linkActiveClass: "active",
  //   linkExactActiveClass: "exact-active",
  // }
});

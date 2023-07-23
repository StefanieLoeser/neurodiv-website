export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
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

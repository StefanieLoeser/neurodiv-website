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
  ],
  devtools: { enabled: true },
  // router: {
  //   linkActiveClass: "active",
  //   linkExactActiveClass: "exact-active",
  // }
});

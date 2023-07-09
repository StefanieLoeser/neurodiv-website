export default defineNuxtConfig({
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

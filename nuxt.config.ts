// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Bree+Serif": true,
      Roboto: true,
      "Open+Sans": {
        wght: [300, 400, 600, 700],
        ital: [300, 400],
      },
      Lobster: true,
      Lora: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Montserrat: {
        wght: [400, 700],
      },
    },
    display: "swap",
  },
});

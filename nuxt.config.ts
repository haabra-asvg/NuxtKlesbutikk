// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    "~/assets/css/main.scss"
  ],

  modules: ["nuxt-quasar-ui"],

  quasar: {
    iconSet: "material-symbols-rounded",
    extras: {
      fontIcons: [
        "material-symbols-rounded",
        "material-symbols-outlined",
        "material-symbols-sharp",
        "material-icons-outlined",
        "material-icons-round",
        "material-icons-sharp",
        "material-icons",
        "line-awesome",
        "fontawesome-v6"
      ],

      svgIcons: [
        "material-symbols-rounded",
        "material-symbols-outlined",
        "material-symbols-sharp",
        "material-icons-outlined",
        "material-icons-round",
        "material-icons-sharp",
        "material-icons",
        "line-awesome",
        "fontawesome-v6"
      ],
    },
  }
})